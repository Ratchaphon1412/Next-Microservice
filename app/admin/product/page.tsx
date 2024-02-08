export default function ProductPage() {
    var products = []
    const product = {
        name: "loren ipsum",
        update: "12/12/2021",
        pricing: "5000",
        qty: "6",
        color: "yellow",
        status: "active",
        actions: "actions"
    }
    for (let i = 0; i < 5; i++) {
        products.push(
            <div className="container mx-auto grid grid-cols-7 p-2 text-center dark:bg-gray-900">
                <p>{product.name}</p>
                <p>{product.update}</p>
                <p>{product.pricing}</p>
                <p>{product.qty}</p>
                <p>{product.color}</p>
                <p>{product.status}</p>
                <p>{product.actions}</p>
            </div>
        )
    }
  return (
    <div className="container mx-auto text-black">
        <hr className="w-[96%] mx-auto border-2 rounded-md mb-5"/>
        <p className="font-pixelletMedium text-3xl ml-10">PRODUCT</p>
        <div className="mx-20 p-5">
            {/* Add the product */}
            <div className="flex justify-end">
                <button className="p-4 mb-4 border rounded-xl bg-yellow-400 font-pixellet">Create Product +</button>
            </div>
            {/* list product */}
            <div className="container mx-auto grid grid-cols-7 p-2 text-center">
                <p>Product</p>
                <p>Update</p>
                <p>Pricing</p>
                <p>Qty</p>
                <p>Color</p>
                <p>Status</p>
                <p>Actions</p>
            </div>

            {products}
            
            
        </div>
    </div>
  )
}