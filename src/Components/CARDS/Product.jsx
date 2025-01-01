import Image from 'next/image';



const Product = ({ id, title, price, image }) => {
  return (
    <div key={id} className="border p-4 rounded-lg shadow-md hover:shadow-lg">
      <Image src={image} alt={title} width={200} height={200} className="rounded-md" />
      <h3 className="font-bold text-lg mt-2">{title}</h3>
      <p className="text-gray-700">Rs. {price}</p>
      <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
  add to Cart
</button>
    </div>
  );
};

export default Product;