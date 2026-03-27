import { useParams } from "react-router-dom";
import Card from "../components/UI/Card.jsx";
import { getGeneralProducts } from "../data/Data.js";

function Products() {
  const { slug } = useParams();

  const sampleProducts = getGeneralProducts();

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-5xl font-bold capitalize mb-8">
        {slug ? slug.replace(/-/g, " ") : "All Products"}
      </h1>
      
      {/* Horizontal scroll row — hides scrollbar */}
      <div
        className="mx-auto flex max-w-full gap-4 overflow-x-auto md:gap-6 ps-4 md:ps-10"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {sampleProducts.map((product) => (
          <Card key={product.id} product={product} slug={slug} />
        ))}
      </div>
    </div>
  );
}

export default Products;