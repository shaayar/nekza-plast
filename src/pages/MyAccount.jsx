import {
  User,
  Package,
  Heart,
  MapPin,
  Settings,
  LogOut,
  ChevronRight,
  Mail,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  {
    title: "My Orders",
    desc: "Track orders and view order history",
    icon: Package,
    href: "/orders",
  },
  {
    title: "Wishlist",
    desc: "Products you’ve saved for later",
    icon: Heart,
    href: "/wishlist",
  },
  {
    title: "Saved Addresses",
    desc: "Manage your delivery locations",
    icon: MapPin,
    href: "/addresses",
  },
  {
    title: "Account Settings",
    desc: "Update your details and preferences",
    icon: Settings,
    href: "/account-settings",
  },
];

const recentActivity = [
  "Viewed Insulated Bottle collection",
  "Explored Lunch Box category",
  "Checked Water Jug product details",
];

export default function MyAccount() {
  return (
    <main className="relative overflow-hidden bg-white text-zinc-900">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-24 h-112 w-md -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] [background-size:42px_42px] opacity-[0.18]" />
      </div>

      {/* Hero */}
      <section className="relative px-4 pb-10 pt-6 md:px-8 lg:px-12 lg:pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* Left */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
                <User size={16} />
                <span>My Account</span>
              </div>

              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-zinc-950 md:text-6xl">
                Your Nekza space, <span className="text-primary underline decoration-3 decoration-alt-yellow">all in one place</span>.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 md:text-lg">
                Manage your profile, revisit products, and keep your essentials
                organized with a clean account experience.
              </p>
            </div>

            {/* Profile Card */}
            <div className="rounded-4xl border border-zinc-200 bg-white/80 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.06)] backdrop-blur">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <User size={28} />
                </div>

                <div>
                  <h1 className="text-2xl font-semibold text-zinc-950">
                    Rampal Yadav
                  </h1>
                  <p className="text-sm text-zinc-500">
                    Welcome back to Nekza
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                  <Mail size={18} className="text-primary" />
                  <span className="text-sm text-zinc-700">your@email.com</span>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                  <Phone size={18} className="text-primary" />
                  <span className="text-sm text-zinc-700">+91 XXXXX XXXXX</span>
                </div>
              </div>

              <button
                data-cursor="Open"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-primary"
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <section className="relative px-4 pb-24 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_360px]">
          {/* Left Main */}
          <div className="space-y-8">
            {/* Quick Links */}
            <div>
              <h1 className="mb-5 text-2xl font-semibold tracking-tight text-zinc-950">
                Account Shortcuts
              </h1>

              <div className="grid gap-4 sm:grid-cols-2">
                {quickLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.title}
                      to={item.href}
                      data-cursor="Open"
                      className="group rounded-4xl border border-zinc-200 bg-white/80 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <Icon size={22} />
                        </div>

                        <ChevronRight
                          size={18}
                          className="text-zinc-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary"
                        />
                      </div>

                      <h3 className="mt-5 text-lg font-semibold text-zinc-950">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-zinc-600">
                        {item.desc}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Orders Empty State */}
            <div className="rounded-4xl border border-zinc-200 bg-white/80 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur md:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Package size={22} />
                </div>
                <div>
                  <h1 className="text-2xl font-semibold tracking-tight text-zinc-950">
                    Recent Orders
                  </h1>
                  <p className="text-sm text-zinc-500">
                    A quick look at your recent purchases
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-dashed border-zinc-300 bg-zinc-50 px-6 py-12 text-center">
                <p className="text-lg font-medium text-zinc-800">
                  No recent orders yet
                </p>
                <p className="mt-2 text-sm text-zinc-500">
                  Once you place an order, it’ll show up here.
                </p>

                <Link
                  to="/products"
                  data-cursor="Shop"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-opacity duration-300 hover:opacity-90"
                >
                  Start Exploring
                </Link>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="space-y-6">
            {/* Recent Activity */}
            <div className="rounded-4xl border border-zinc-200 bg-white/80 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur">
              <h3 className="text-xl font-semibold text-zinc-950">
                Recent Activity
              </h3>

              <div className="mt-5 space-y-3">
                {recentActivity.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-600"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Logout Card */}
            <div className="rounded-4xl border border-zinc-200 bg-zinc-950 p-6 text-white shadow-[0_18px_60px_rgba(0,0,0,0.16)]">
              <h3 className="text-xl font-semibold">Need a break?</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-300">
                You can safely sign out anytime and return whenever you need your essentials.
              </p>

              <button
                data-cursor="Open"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-white/15"
              >
                <LogOut size={16} />
                Sign Out
              </button>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
