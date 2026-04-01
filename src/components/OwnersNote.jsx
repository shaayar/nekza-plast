import { Quote } from "lucide-react";

export default function OwnersNote() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-primary/5 to-primary/10 border border-primary/20 p-8 md:p-12">
          {/* Quote Icon */}
          <div className="absolute top-8 left-8 text-primary/20">
            <Quote size={48} />
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
              A Message From Founder
            </h2>
            
            <blockquote className="space-y-4 text-gray-700 text-base md:text-lg leading-8 italic">
              <p>
                "When I started Nekza in 2013, I had a simple vision: to create homeware that families could trust for generations. 
                Our philosophy 'Beyond the Ordinary' isn't just about making new products—it's about reimagining how everyday essentials can make life better.
              </p>
              <p>
                Today, as we serve millions of homes across the country, that vision remains unchanged. Every bottle, every container, every kitchen product carries our promise of quality, innovation, and care.
              </p>
              <p>
                We're not just building products; we're building relationships, memories, and a legacy of trust that spans generations.
              </p>
            </blockquote>
            
            {/* Signature */}
            <div className="mt-8 pt-6 border-t border-primary/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-primary text-lg">Ketan Desai,</p>
                  <p className="font-semibold text-primary text-lg">Founder & CEO,</p>
                  <p className="text-gray-600">Nekza Plast Manufacturing</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-800">Established 2013</p>
                  <p className="text-sm text-gray-600">A Decade of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
