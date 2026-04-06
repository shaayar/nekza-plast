import { useState, useEffect } from "react";
import CartContext from "./cartContext.js";
export const MAX_ITEM_QUANTITY = 10;

const normalizeQuantity = (value, fallback = 1, max = MAX_ITEM_QUANTITY) => {
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed <= 0) return fallback;
  return Math.min(Math.floor(parsed), max);
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
            quantity: normalizeQuantity(item?.quantity, 1, MAX_ITEM_QUANTITY),
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
    const safeQuantity = normalizeQuantity(quantity, 1, MAX_ITEM_QUANTITY);
    let wasLimited = false;

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
          const nextQty = Math.min(currentQty + safeQuantity, MAX_ITEM_QUANTITY);
          if (nextQty < currentQty + safeQuantity) wasLimited = true;
          return { ...item, quantity: nextQty };
        });
      } else {
        // Add new item to cart
        if (safeQuantity >= MAX_ITEM_QUANTITY) wasLimited = Number(quantity) > MAX_ITEM_QUANTITY;
        const newItem = {
          id: product.id,
          title: product.title,
          price: product.price,
          mrp: product.mrp || product.price,
          quantity: Math.min(safeQuantity, MAX_ITEM_QUANTITY),
          color: color || product.defaultColor || "Default",
          size: size || product.defaultSize || "Standard",
          image: product.image || product.images?.[0] || "/images/placeholder.webp",
        };
        return [...prevItems, newItem];
      }
    });

    return { wasLimited, maxQuantity: MAX_ITEM_QUANTITY };
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
    const safeQuantity = normalizeQuantity(newQuantity, 0, MAX_ITEM_QUANTITY);
    if (safeQuantity < 1) return;
    let wasLimited = false;

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId && 
        (!color || item.color === color) && 
        (!size || item.size === size)
          ? (() => {
              if (safeQuantity >= MAX_ITEM_QUANTITY && Number(newQuantity) > MAX_ITEM_QUANTITY) {
                wasLimited = true;
              }
              return { ...item, quantity: safeQuantity };
            })()
          : item
      )
    );

    return { wasLimited, maxQuantity: MAX_ITEM_QUANTITY };
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
    MAX_ITEM_QUANTITY,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
