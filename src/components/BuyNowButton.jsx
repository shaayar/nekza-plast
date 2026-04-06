import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart.jsx";
import { useToast } from "../hooks/useToast.jsx";

export default function BuyNowButton({
  product,
  selectedColor,
  selectedSize,
  quantity = 1,
  className = "",
  children = "Buy Now",
  stopPropagation = false,
}) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleBuyNow = (e) => {
    if (stopPropagation) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (isProcessing) return;

    setIsProcessing(true);
    try {
      const result = addToCart(product, {
        quantity,
        color: selectedColor,
        size: selectedSize,
      });
      if (result?.wasLimited) {
        showToast({
          message: "You can add up to 10 units of a single product.",
          type: "warning",
        });
      }
      navigate("/cart");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleBuyNow}
      disabled={isProcessing}
      data-cursor="Shop"
      className={className}
    >
      {isProcessing ? "Processing..." : children}
    </button>
  );
}
