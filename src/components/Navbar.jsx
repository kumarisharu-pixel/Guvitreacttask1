export default function Navbar({ cartCount, openCart }) {
  return (
    <nav className="bg-blue-300 px-6 py-4 shadow-md">
      <div className="grid grid-cols-3 items-center">
        <div>
          
        </div>
       <h1 className="text-3xl font-bold text-center">Fake Store</h1>

        
        <div className="flex justify-end">
          <button
            onClick={openCart}
            className="bg-gray-700 text-white px-3 py-1 rounded-lg"
          >
            Cart ({cartCount})
          </button>
        </div>

      </div>
    </nav>
  );
}