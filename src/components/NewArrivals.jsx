import React from "react";
import { useCart } from "../contexts/CartContext.jsx";

const ExploreArrow = () => (
  <svg width="20" height="20" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="0.2" stroke="currentColor" className="ml-1.5 size-4 transition group-hover:translate-x-1 md:size-5">
    <path d="M0.5 9.5H13.793L6.293 17 7 17.707 15.707 9 7 .293 6.293 1 13.793 8.5H0.5V9.5Z" fill="currentColor" />
  </svg>
);

const products = [
  {
    id: 1,
    title: "Snackie Mate Tiffin Set",
    vendor: "Nekza",
    price: 1116,
    oldPrice: 1395,
    image: "/images/p-tiffin-1.webp",
    hoverImage: "/images/p-tiffin-2.webp",
  },
  {
    id: 2,
    title: "Malmo Thermosteel Tumbler",
    vendor: "Nekza",
    price: 1635,
    oldPrice: 1990,
    image: "/images/p2-bottle-1.webp",
    hoverImage: "/images/p2-bottle-2.webp",
  },
];

export default function NewArrivals() {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      mrp: product.oldPrice,
      image: product.image,
    });
  };

  return (
    <section className="py-5">
      <div className="px-4 md:px-10 mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center gap-2 text-center md:gap-3">
          <h2 className="text-2xl font-bold capitalize leading-snug text-primary sm:text-3xl lg:text-4xl">
            New Arrivals
          </h2>
          <a
          href="/collections/new-arrivals"
          className=" group flex items-center justify-center rounded text-base text-black hover:underline underline-offset-2 transition-all duration-200 sm:text-lg lg:text-xl"
        >
          Explore More
          <ExploreArrow />
        </a>
        </div>
        

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-4">
          
          {/* First Card (Banner Style) */}
          <a href="/collections/new-arrivals" className="relative group">
            <div className="overflow-hidden rounded-lg">
              <img
                src="/images/p-bottle-1.webp"
                alt="New Arrivals"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>

            <div className="absolute bottom-4 left-4 text-black">
              <h3 className="text-lg font-semibold">New Arrivals</h3>
              <button className="mt-2 px-4 py-1 bg-white text-black text-sm rounded">
                View All
              </button>
            </div>
          </a>

          {/* Product Cards */}
          {products.map((product) => (
            <div key={product.id} className="group">
              
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full aspect-square object-cover transition duration-300 group-hover:opacity-0"
                />
                <img
                  src={product.hoverImage}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-300"
                />
              </div>

              {/* Info */}
              <div className="mt-3 text-sm">
                <p className="text-gray-500">{product.vendor}</p>
                <h3 className="font-medium line-clamp-2">
                  {product.title}
                </h3>

                {/* Price */}
                <div className="flex gap-2 items-center mt-1">
                  <span className="font-semibold">₹{product.price}</span>
                  <span className="line-through text-gray-400 text-xs">
                    ₹{product.oldPrice}
                  </span>
                </div>

                {/* CTA */}
                <button 
                  onClick={() => handleAddToCart(product)}
                  className="mt-2 w-full py-2 text-xs bg-black text-white rounded hover:bg-gray-800 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}