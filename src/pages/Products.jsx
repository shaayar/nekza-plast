import { useParams, Link } from "react-router-dom";

function Products() {
  const { slug } = useParams();

  const sampleProducts = [
    { id: 1, name: "Quench Pro Tumbler", slug: "quench-pro-tumbler", price: 1199 },
    { id: 2, name: "Steel Water Bottle", slug: "steel-water-bottle", price: 329 },
    { id: 3, name: "Kids Lunch Box", slug: "kids-lunch-box", price: 849 },
    { id: 4, name: "Cookware Set", slug: "cookware-set", price: 4999 },
  ];

  return (
    <div className="min-h-screen bg-[#111] text-white p-10">
      <h1 className="text-5xl font-bold capitalize mb-8">
        {slug ? slug.replace(/-/g, " ") : "All Products"}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sampleProducts.map((product) => (
          <div key={product.id} className="bg-black border border-white/10 rounded-xl p-6">
            <div className="w-full h-48 bg-white/10 rounded-lg mb-4"></div>
            <h3 className="text-lg font-medium mb-2">{product.name}</h3>
            <p className="text-2xl font-bold mb-4">₹{product.price}</p>
            <Link 
              to={`/products/${slug || 'all'}/${product.slug}`}
              className="block w-full bg-white text-black text-center py-2 rounded-lg hover:bg-gray-200 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;