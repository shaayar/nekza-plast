import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("nekza-cart");
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Error loading cart from localStorage:", error);
        localStorage.removeItem("nekza-cart");
      }
    }
    setIsLoading(false);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("nekza-cart", JSON.stringify(cartItems));
    }
  }, [cartItems, isLoading]);

  const addToCart = (product, options = {}) => {
    const { quantity = 1, color, size } = options;
    
    setCartItems(prevItems => {
      // Check if item already exists in cart
      const existingItemIndex = prevItems.findIndex(
        item => 
          item.id === product.id && 
          (!color || item.color === color) && 
          (!size || item.size === size)
      );

      if (existingItemIndex >= 0) {
        // Update quantity of existing item
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        return updatedItems;
      } else {
        // Add new item to cart
        const newItem = {
          id: product.id,
          title: product.title,
          price: product.price,
          mrp: product.mrp || product.price,
          quantity,
          color: color || product.defaultColor || "Default",
          size: size || product.defaultSize || "Standard",
          image: product.image || product.images?.[0] || "/images/placeholder.webp",
        };
        return [...prevItems, newItem];
      }
    });
  };

  const removeFromCart = (itemId, color = null, size = null) => {
    setCartItems(prevItems => 
      prevItems.filter(item => 
        !(item.id === itemId && 
          (!color || item.color === color) && 
          (!size || item.size === size))
      )
    );
  };

  const updateQuantity = (itemId, newQuantity, color = null, size = null) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId && 
        (!color || item.color === color) && 
        (!size || item.size === size)
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartTotalMRP = () => {
    return cartItems.reduce((total, item) => total + (item.mrp * item.quantity), 0);
  };

  const isInCart = (productId, color = null, size = null) => {
    return cartItems.some(item => 
      item.id === productId && 
      (!color || item.color === color) && 
      (!size || item.size === size)
    );
  };

  const value = {
    cartItems,
    isLoading,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartItemCount,
    getCartSubtotal,
    getCartTotalMRP,
    isInCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
