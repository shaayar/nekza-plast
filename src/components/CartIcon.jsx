import { ShoppingBag } from "lucide-react";
import { useCart } from "../contexts/CartContext.jsx";
import { Link } from "react-router-dom";

export default function CartIcon({ className = "" }) {
  const { getCartItemCount } = useCart();
  const itemCount = getCartItemCount();

  return (
    <Link to="/cart" className={`relative ${className}`} data-cursor="Open">
      <ShoppingBag size={24} />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
          {itemCount > 99 ? "99+" : itemCount}
        </span>
      )}
    </Link>
  );
}
