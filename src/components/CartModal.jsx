export default function CartModal({ cart, removeFromCart, close }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-end">
      <div className="w-80 bg-white h-full shadow-xl p-6 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500">Cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="border-b pb-3 mb-3">
              <p className="font-semibold">{item.title}</p>
              <p className="text-green-600 font-bold">${item.price}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-sm mt-1"
              >
                Remove
              </button>
            </div>
          ))
        )}

        <button
          onClick={close}
          className="mt-6 bg-gray-200 px-4 py-2 w-full rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
}