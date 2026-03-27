import { Link } from "react-router-dom";
import { Plus, Minus, X, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "../contexts/CartContext.jsx";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getCartSubtotal, getCartTotalMRP } = useCart();

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
      <div className="min-h-screen bg-[#111] text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center">
                <ShoppingBag size={48} className="text-gray-400" />
              </div>
            </div>
            <h1 className="text-4xl font-light mb-4">Your cart is empty</h1>
            <p className="text-gray-400 mb-8">Looks like you haven't added any products to your cart yet.</p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full hover:bg-gray-200 transition"
            >
              Continue Shopping
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111] text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-light mb-2">Shopping Cart</h1>
          <p className="text-gray-400">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-black border border-white/10 rounded-xl p-6">
                <div className="flex gap-4">
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-white/10 rounded-lg overflow-hidden shrink-0">
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
                        <p className="text-sm text-gray-400">
                          {item.color} • {item.size}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-white transition"
                      >
                        <X size={20} />
                      </button>
                    </div>

                    <div className="flex justify-between items-end">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 bg-white/5 rounded-lg px-3 py-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-gray-400 hover:text-white transition"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-gray-400 hover:text-white transition"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <div className="text-xl font-semibold">₹{item.price * item.quantity}</div>
                        <div className="text-sm text-gray-400 line-through">
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
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition"
              >
                <ArrowRight size={20} className="rotate-180" />
                Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-black border border-white/10 rounded-xl p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span>₹{subtotal}</span>
                </div>
                
                <div className="flex justify-between text-gray-400">
                  <span>Total MRP</span>
                  <span>₹{totalMRP}</span>
                </div>

                {savings > 0 && (
                  <div className="flex justify-between text-green-500">
                    <span>You Save</span>
                    <span>₹{savings}</span>
                  </div>
                )}

                <div className="flex justify-between text-gray-400">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                </div>

                {shipping > 0 && (
                  <p className="text-xs text-gray-500">
                    Add ₹{1000 - subtotal} more for free shipping
                  </p>
                )}

                <div className="border-t border-white/10 pt-3">
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
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-white/30 transition"
                />
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-white text-black py-4 rounded-full font-medium hover:bg-gray-200 transition">
                Proceed to Checkout
              </button>

              {/* Security Badge */}
              <div className="mt-6 text-center text-xs text-gray-500">
                <p>Secure checkout powered by Razorpay</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;