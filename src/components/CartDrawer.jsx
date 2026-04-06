import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Plus, Minus, X, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "../hooks/useCart.jsx";
import { useToast } from "../hooks/useToast.jsx";

function CartDrawer({ open, onClose }) {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { cartItems, removeFromCart, updateQuantity, getCartSubtotal, getCartTotalMRP, MAX_ITEM_QUANTITY } = useCart();

  useEffect(() => {
    if (!open) return;
    const onEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const notify = (message, type = "info") => showToast({ message, type });

  const handleContinueShopping = (e) => {
    e.preventDefault();
    notify("Taking you back to browse more products.", "info");
    onClose();
    navigate("/products");
  };

  const handleRemoveItem = (item) => {
    removeFromCart(item.id, item.color, item.size);
    notify(`${item.title} removed from your cart.`, "warning");
  };

  const handleDecreaseQty = (item) => {
    if (item.quantity <= 1) return;
    updateQuantity(item.id, item.quantity - 1, item.color, item.size);
  };

  const handleIncreaseQty = (item) => {
    if (item.quantity >= MAX_ITEM_QUANTITY) {
      notify(`You can only add up to ${MAX_ITEM_QUANTITY} units of ${item.title}.`, "warning");
      return;
    }
    updateQuantity(item.id, item.quantity + 1, item.color, item.size);
  };

  const subtotal = getCartSubtotal();
  const totalMRP = getCartTotalMRP();
  const savings = totalMRP - subtotal;
  const shipping = subtotal > 999 ? 0 : 49;
  const finalTotal = subtotal + shipping;

  return (
    <>
      <div
        className={`fixed inset-0 z-[80] hidden bg-black/35 transition-opacity duration-200 lg:block ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`fixed right-0 top-0 z-[90] hidden h-screen w-full max-w-xl border-l border-zinc-200 bg-white shadow-2xl transition-transform duration-300 lg:flex lg:flex-col ${open ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4">
          <div>
            <h2 className="text-2xl font-bold text-zinc-900">Shopping Cart</h2>
            <p className="text-sm text-zinc-500">
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="pressable rounded-full p-2 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
            aria-label="Close cart"
            data-cursor="Open"
          >
            <X size={22} />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-zinc-100">
              <ShoppingBag size={34} className="text-zinc-500" />
            </div>
            <h3 className="mb-2 text-2xl font-semibold text-zinc-900">Your cart is empty</h3>
            <p className="mb-6 text-zinc-500">Looks like you have not added products yet.</p>
            <Link
              to="/products"
              onClick={handleContinueShopping}
              className="pressable inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white transition hover:bg-zinc-800"
              data-cursor="Shop"
            >
              Continue Shopping
              <ArrowRight size={18} />
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.color || "na"}-${item.size || "na"}`} className="rounded-xl border border-zinc-200 bg-white p-3">
                  <div className="flex gap-3">
                    <div className="h-18 w-18 shrink-0 overflow-hidden rounded-lg bg-zinc-100">
                      <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex items-start justify-between gap-2">
                        <h3 className="line-clamp-2 text-sm font-semibold text-zinc-900">{item.title}</h3>
                        <button
                          onClick={() => handleRemoveItem(item)}
                          className="pressable rounded p-1 text-zinc-500 hover:text-primary"
                          data-cursor="Shop"
                          aria-label={`Remove ${item.title}`}
                        >
                          <X size={16} />
                        </button>
                      </div>

                      <p className="mb-2 text-xs text-zinc-500">{item.color} • {item.size}</p>

                      <div className="flex items-end justify-between">
                        <div className="flex items-center gap-2 rounded-lg bg-zinc-100 px-2 py-1">
                          <button
                            onClick={() => handleDecreaseQty(item)}
                            disabled={item.quantity <= 1}
                            className="pressable text-zinc-500 hover:text-primary disabled:opacity-40"
                            data-cursor="Shop"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-6 text-center text-sm">{item.quantity}</span>
                          <button
                            onClick={() => handleIncreaseQty(item)}
                            className="pressable text-zinc-500 hover:text-primary"
                            data-cursor="Shop"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        <div className="text-right">
                          <div className="text-sm font-bold text-zinc-900">₹{item.price * item.quantity}</div>
                          <div className="text-xs text-zinc-400 line-through">₹{item.mrp * item.quantity}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-zinc-200 bg-zinc-50 p-4">
              <div className="mb-1 flex justify-between text-sm text-zinc-600">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="mb-1 flex justify-between text-sm text-zinc-600">
                <span>Total MRP</span>
                <span>₹{totalMRP}</span>
              </div>
              {savings > 0 && (
                <div className="mb-1 flex justify-between text-sm text-green-600">
                  <span>You Save</span>
                  <span>₹{savings}</span>
                </div>
              )}
              <div className="mb-3 flex justify-between text-sm text-zinc-600">
                <span>Shipping</span>
                <span>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
              </div>
              <div className="mb-4 flex justify-between border-t border-zinc-200 pt-2 text-base font-bold text-zinc-900">
                <span>Total</span>
                <span>₹{finalTotal}</span>
              </div>

              <button
                type="button"
                onClick={() => notify("Checkout flow will be available soon.", "info")}
                className="pressable w-full rounded-full bg-black py-3 font-medium text-white transition hover:bg-zinc-800"
                data-cursor="Shop"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

export default CartDrawer;
