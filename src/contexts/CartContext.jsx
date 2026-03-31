import { useState, useEffect } from "react";
import CartContext from "./cartContext.js";
const normalizeQuantity = (value, fallback = 1) => {
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed <= 0) return fallback;
  return Math.floor(parsed);
};

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("nekza-cart");
    if (!savedCart) return [];

    try {
      const parsedCart = JSON.parse(savedCart);
      return Array.isArray(parsedCart)
        ? parsedCart.map((item) => ({
            ...item,
            quantity: normalizeQuantity(item?.quantity),
          }))
        : [];
    } catch (error) {
      console.error("Error loading cart from localStorage:", error);
      localStorage.removeItem("nekza-cart");
      return [];
    }
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("nekza-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, options = {}) => {
    const { quantity = 1, color, size } = options;
    const safeQuantity = normalizeQuantity(quantity);
    
    setCartItems(prevItems => {
      // Check if item already exists in cart
      const existingItemIndex = prevItems.findIndex(
        item => 
          item.id === product.id && 
          (!color || item.color === color) && 
          (!size || item.size === size)
      );

      if (existingItemIndex >= 0) {
        // Update quantity immutably (avoids StrictMode double-invoke mutation bugs)
        return prevItems.map((item, index) => {
          if (index !== existingItemIndex) return item;
          const currentQty = normalizeQuantity(item.quantity);
          return { ...item, quantity: currentQty + safeQuantity };
        });
      } else {
        // Add new item to cart
        const newItem = {
          id: product.id,
          title: product.title,
          price: product.price,
          mrp: product.mrp || product.price,
          quantity: safeQuantity,
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
    const safeQuantity = normalizeQuantity(newQuantity, 0);
    if (safeQuantity < 1) return;
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId && 
        (!color || item.color === color) && 
        (!size || item.size === size)
          ? { ...item, quantity: safeQuantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + normalizeQuantity(item?.quantity, 0), 0);
  };

  const getCartSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const qty = normalizeQuantity(item?.quantity, 0);
      const price = Number(item?.price) || 0;
      return total + (price * qty);
    }, 0);
  };

  const getCartTotalMRP = () => {
    return cartItems.reduce((total, item) => {
      const qty = normalizeQuantity(item?.quantity, 0);
      const mrp = Number(item?.mrp) || 0;
      return total + (mrp * qty);
    }, 0);
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
