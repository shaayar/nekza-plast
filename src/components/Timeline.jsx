import { Award, Calendar, Factory, TrendingUp } from "lucide-react";
import { COMPANY_TIMELINE } from "../data/Data.js";

const getTypeClasses = () => {
  return {
    card: "bg-primary/10 border-primary/20",
    badge: "bg-primary text-white",
    iconWrap: "bg-primary",
  };
};

const getTypeIcon = (type) => {
  if (type === "achievement") return <Award size={18} />;
  if (type === "growth") return <TrendingUp size={18} />;
  return <Factory size={18} />;
};

export default function Timeline() {
  return (
    <section className="section-shell px-4 md:px-8 lg:px-16 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Our Journey <span className="text-primary underline decoration-3 decoration-alt-yellow">Through Time</span>
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-8 max-w-3xl mx-auto">
            From our early years to today, this journey reflects steady growth,
            practical innovation, and a consistent focus on everyday utility.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/20 to-primary/40 transform -translate-x-1/2 ms-2" />
          
          {/* Events */}
          <div className="space-y-12">
            {COMPANY_TIMELINE.map((event, index) => {
              const styles = getTypeClasses(event.type);
              return (
                <div
                key={`${event.year}-${event.title}`}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'pl-8 md:pr-12 md:text-right' : 'pl-8 md:pl-12'}`}>
                  <div className={`inline-block w-full rounded-xl border p-5 max-w-85 sm:p-6 md:max-w-md ${styles.card}`}>
                    {/* Year Badge */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-3 ${styles.badge}`}>
                      <Calendar size={14} />
                      {event.year}
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-700 leading-6 text-sm">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Icon Circle */}
                <div className="relative hidden md:flex items-center justify-center w-16 h-16 md:w-20 md:h-20">
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white shadow-lg ${styles.iconWrap}`}>
                    {getTypeIcon(event.type)}
                  </div>
                </div>
              </div>
            )})}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-base md:text-lg">
            As Nekza grows, the promise stays the same: reliable quality, smart
            design, and products made for real daily life.
          </p>
        </div>
      </div>
    </section>
  );
}
