import { Link, useNavigate } from "react-router-dom";
import { Plus, Minus, X, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "../hooks/useCart.jsx";
import { useToast } from "../hooks/useToast.jsx";

function Cart() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { cartItems, removeFromCart, updateQuantity, getCartSubtotal, getCartTotalMRP, MAX_ITEM_QUANTITY } = useCart();

  const notify = (message, type = "info") => {
    showToast({ message, type });
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    notify("Taking you back to browse more products.", "info");
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }
    navigate("/products");
  };

  const handleRemoveItem = (item) => {
    removeFromCart(item.id, item.color, item.size);
    notify(`${item.title} removed from your cart.`, "warning");
  };

  const handleDecreaseQty = (item) => {
    if (item.quantity <= 1) return;
    updateQuantity(item.id, item.quantity - 1, item.color, item.size);
    notify(`Reduced quantity for ${item.title} to ${item.quantity - 1}.`, "info");
  };

  const handleIncreaseQty = (item) => {
    if (item.quantity >= MAX_ITEM_QUANTITY) {
      notify(`You can only add up to ${MAX_ITEM_QUANTITY} units of ${item.title}.`, "warning");
      return;
    }
    updateQuantity(item.id, item.quantity + 1, item.color, item.size);
    notify(`Increased quantity for ${item.title} to ${item.quantity + 1}.`, "success");
  };

  const handleProceedToCheckout = () => {
    notify("Checkout flow will be available soon.", "info");
  };

  const calculateSavings = () => {
    return getCartTotalMRP() - getCartSubtotal();
  };

  const subtotal = getCartSubtotal();
  const totalMRP = getCartTotalMRP();
  const savings = calculateSavings();
  const shipping = subtotal > 999 ? 0 : 49;
  const finalTotal = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <section className="section-shell min-h-screen bg-white px-4 py-16 text-zinc-900 sm:px-6 md:px-8 lg:px-10">
        <div className="mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 bg-zinc-100 rounded-full flex items-center justify-center">
                <ShoppingBag size={48} className="text-zinc-500" />
              </div>
            </div>
            <h1 className="text-4xl font-light mb-4">Your cart is empty</h1>
            <p className="text-zinc-500 mb-8">Looks like you haven't added any products to your cart yet.</p>
            <Link
              to="/products"
              onClick={handleContinueShopping}
              className="pressable inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full hover:bg-zinc-800 transition"
              data-cursor="Shop"
            >
              Continue Shopping
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-shell min-h-screen bg-white px-4 py-8 text-zinc-900 sm:px-6 md:px-8 lg:px-10">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2"><span className="outline text-transparent">Shopping</span> Cart</h1>
          <p className="text-zinc-500">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="border border-zinc-200 bg-white rounded-xl p-6 shadow-sm">
                <div className="flex gap-4">
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-zinc-100 rounded-lg overflow-hidden shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                        <p className="text-sm text-zinc-500">
                          {item.color} • {item.size}
                        </p>
                      </div>
                      <button
                        onClick={() => handleRemoveItem(item)}
                        className="pressable text-zinc-500 hover:text-primary transition-colors"
                        data-cursor="Shop"
                      >
                        <X size={20} />
                      </button>
                    </div>

                    <div className="flex justify-between items-end">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 bg-zinc-100 rounded-lg px-3 py-2">
                        <button
                          onClick={() => handleDecreaseQty(item)}
                          className="pressable text-zinc-500 hover:text-primary transition-colors"
                          disabled={item.quantity <= 1}
                          data-cursor="Shop"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => handleIncreaseQty(item)}
                          className="pressable text-zinc-500 hover:text-primary transition-colors"
                          data-cursor="Shop"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <div className="text-xl font-semibold">₹{item.price * item.quantity}</div>
                        <div className="text-sm text-zinc-400 line-through">
                          ₹{item.mrp * item.quantity}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Continue Shopping */}
            <div className="mt-6">
              <Link
                to="/products"
                onClick={handleContinueShopping}
                className="pressable inline-flex items-center gap-2 text-zinc-800 hover:text-primary transition-colors"
                data-cursor="Shop"
              >
                <ArrowRight size={20} className="rotate-180" />
                Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="border border-zinc-200 bg-zinc-50 rounded-xl p-6 sticky top-24">
              <h1 className="text-xl font-semibold mb-6">Order Summary</h1>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-zinc-600">
                  <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span>₹{subtotal}</span>
                </div>
                
                <div className="flex justify-between text-zinc-600">
                  <span>Total MRP</span>
                  <span>₹{totalMRP}</span>
                </div>

                {savings > 0 && (
                  <div className="flex justify-between text-green-500">
                    <span>You Save</span>
                    <span>₹{savings}</span>
                  </div>
                )}

                <div className="flex justify-between text-zinc-600">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                </div>

                {shipping > 0 && (
                  <p className="text-xs text-zinc-500">
                    Add ₹{1000 - subtotal} more for free shipping
                  </p>
                )}

                <div className="border-t border-zinc-200 pt-3">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>₹{finalTotal}</span>
                  </div>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-600 transition-colors"
                />
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleProceedToCheckout}
                className="pressable w-full bg-black text-white py-4 rounded-full font-medium hover:bg-zinc-800 transition-colors"
                data-cursor="Shop"
              >
                Proceed to Checkout
              </button>

              {/* Security Badge */}
              <div className="mt-6 text-center text-xs text-zinc-500">
                <p>Secure checkout powered by Razorpay</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
