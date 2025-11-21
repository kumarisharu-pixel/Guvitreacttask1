export default function Products({ products, addToCart }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-xl shadow-sm hover:shadow-md transition p-4 flex flex-col"
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-48 w-full object-contain mb-4"
          />

          <h2 className="font-semibold line-clamp-2 mb-2">{product.title}</h2>
          <p className="font-bold text-green-600 mb-4">${product.price}</p>

          <button
            onClick={() => addToCart(product)}
            className="w-full bg-blue-600 text-white py-2 rounded-lg mt-auto"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}