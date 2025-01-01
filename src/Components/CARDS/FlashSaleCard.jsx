import Image from "next/image";

const FlashSaleCard = () => {
  const products = [
    { id: 1, title: "Smartphone", price: 15000, discount:20000, image: "/smartphones.jpeg" },
    { id: 2, title: "Laptop", price: 65000,discount:70000, image: "/laptop.webp" },
    { id: 3, title: "Headphones", price: 3000, discount:2000, image: "/headphone.webp" },
    { id: 4, title: "Smartwatch", price: 5000, discount:7000, image: "/smartwatch1.avif" },
    { id: 5, title: "Smartphone", price: 15000, discount:20000, image: "/smartphones.jpeg" },
    { id: 6, title: "Laptop", price: 65000,discount:70000, image: "/laptop.webp" },
    { id: 7, title: "Headphones", price: 3000, discount:2000, image: "/headphone.webp" },
    { id: 8, title: "Smartwatch", price: 5000, discount:7000, image: "/smartwatch1.avif" },
    { id: 9, title: "Smartphone", price: 15000, discount:20000, image: "/smartphones.jpeg" },
    { id: 10, title: "Laptop", price: 65000,discount:70000, image: "/laptop.webp" },
    { id: 11, title: "Headphones", price: 3000, discount:2000, image: "/headphone.webp" },
    { id: 12, title: "Smartwatch", price: 5000, discount:7000, image: "/smartwatch1.avif" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2 bg-white p-6 w-11/12 mx-auto">
      {products.map((val, i) => {
        return (
          <div key={i} className="flex flex-col bg-white  hover:shadow-lg">
            <Image
              src={val.image}
              alt="
product"
              width={400}
              height={400}
             className="w-[800px] h-44"/>
            <p className="text-start px-2 py-2 font-medium">{val.title}</p>
            <p className="text-[#f57224] font-semibold px-2 py-2">RS.{val.price}</p>
            <p className="text-gray-400 line-through px-2 py-2">Rs.{val.discount}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FlashSaleCard;
