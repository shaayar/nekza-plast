import { useState } from "react";
import { ShoppingCart, Check } from "lucide-react";
import { useCart } from "../contexts/CartContext.jsx";

export default function AddToCartButton({ product, selectedColor, selectedSize, quantity = 1, className = "" }) {
  const { addToCart, isInCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const itemInCart = isInCart(product.id, selectedColor, selectedSize);

  const handleAddToCart = async () => {
    if (isAdding) return;
    
    setIsAdding(true);
    
    try {
      addToCart(product, {
        quantity,
        color: selectedColor,
        size: selectedSize,
      });
      
      // Show success state
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    } catch (error) {
      console.error("Error adding to cart:", error);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdding || itemInCart}
      data-cursor="Shop"
      className={`
        pressable relative overflow-hidden
        ${itemInCart 
          ? 'bg-green-600 text-white cursor-not-allowed' 
          : 'bg-white text-black border border-gray-600 hover:bg-primary hover:text-white'
        }
        ${isAdding ? 'opacity-75 cursor-wait' : ''}
        px-8 py-4 rounded-full font-medium transition-colors duration-200
        ${className}
      `}
    >
      <span className="flex items-center justify-center gap-2">
        {showSuccess ? (
          <>
            <Check size={20} />
            Added to Cart
          </>
        ) : itemInCart ? (
          <>
            <Check size={20} />
            In Cart
          </>
        ) : isAdding ? (
          <>
            <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
            Adding...
          </>
        ) : (
          <>
            Add to Cart
            <ShoppingCart size={20} />
          </>
        )}
      </span>
    </button>
  );
}
