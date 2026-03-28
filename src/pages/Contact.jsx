import { useState } from "react";
import { MapPinHouse, Mail, Headset, MessageCircleCheck, ArrowRight } from "lucide-react";

export default function Contact() {
  const [consent, setConsent] = useState(false);

  return (
    <div className="bg-white text-black mt-8">

      {/* Main Layout */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_380px] gap-12">
            
            {/* Form Section */}
            <div>
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl text-primary font-bold mb-3">
                  Contact us
                </h1>
                <p className="text-gray-600 text-base md:text-lg">
                  We're here to help. Fill out the form below or reach us
                  instantly via WhatsApp.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      FULL NAME
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      EMAIL ADDRESS <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="EMAIL ADDRESS"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    maxLength={10}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    rows="5"
                    placeholder="MESSAGE"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="consent"
                    type="checkbox"
                    checked={consent}
                    onChange={() => setConsent(!consent)}
                    className="mt-1 h-4 w-4"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I hereby authorize to send notifications on SMS / Messages /
                    Promotional / Informational messages
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!consent}
                  className={`pressable px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                    consent
                      ? "bg-black text-white hover:bg-gray-800"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Submit now
                </button>
              </form>
            </div>

            {/* Support Cards */}
            <div className="space-y-6">
              
              {/* WhatsApp Card */}
              <div className="relative overflow-hidden rounded-2xl bg-green-50 border border-green-100 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center text-2xl shrink-0">
                    <MessageCircleCheck />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Chat with us on WhatsApp for instant support
                    </h3>
                    <p className="text-gray-700 mb-5">
                      Get real-time answers for orders, warranty, and products.
                    </p>

                    <a
                      href="https://api.whatsapp.com/send?phone=917045552112&text=Hi"
                      target="_blank"
                      rel="noreferrer"
                      className="pressable inline-flex items-center gap-2 bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                    >
                      Chat On WhatsApp <ArrowRight />
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Contact Card */}
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h4 className="text-xl font-semibold mb-6">Direct Contact</h4>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl"><Headset /></div>
                    <div>
                      <small className="block text-xs tracking-wide text-gray-500 mb-1">
                        SUPPORT PHONE
                      </small>
                      <p className="font-semibold">1800-209-2151</p>
                      <p className="text-sm text-gray-600">
                        Mon–Fri, 9am–6pm EST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-2xl"><Mail /></div>
                    <div>
                      <small className="block text-xs tracking-wide text-gray-500 mb-1">
                        EMAIL SUPPORT
                      </small>
                      <p className="font-semibold">support@nekza.in</p>
                      <p className="text-sm text-gray-600">
                        Responds within 24h
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-2xl"><MapPinHouse /></div>
                    <div>
                      <small className="block text-xs tracking-wide text-gray-500 mb-1">
                        MAIN OFFICE
                      </small>
                      <p className="font-semibold leading-7 text-sm">
                        Survey no. 407, Plot no. 1,2, Jay Balaji Industrial Area, Sanganva, Tal. Lodhika, Rajkot, Gujarat, India - 360035
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End support cards */}
        </div>
      </section>
    </div>
  );
}
