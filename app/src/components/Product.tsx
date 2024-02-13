"use client";

import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
// import { addToCart } from "@/redux/proSlice";
import toast from "react-hot-toast";

interface Item {
  products: ProductType[];
}

const Product = ({ products }: Item) => {

  const dispatch = useDispatch();
  return (
    <div className="flex flex-wrap justify-between mt-10">
      <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 flex-wrap">
        {products.map((item) => (
          <div
            key={item.id}
            className="group group-hover:bg-white group-hover:shadow-xl duration-300 overflow-hidden rounded-md flex flex-col items-center mb-6"
          >
            <Image
              src={item.image}
              alt="Product image"
              width={100}
              height={100}
              className="object-contain lg:object-cover duration-300"
            />

            <div className="p-4 bg-zinc-100 text-center">
              <h2 className="font-bold">
                {item.title}
              </h2>
              <p className="font-semibold text-xs">
                {item.writer}
              </p>
              <div className="flex items-center justify-between text-sm mt-4">
                {item.tags?.map((tag, index: any) => (
                  <p key={index}># {tag}</p>
                ))}
              </div>

              <div className="flex items-center justify-center text-sm mt-2">
                <button
                  onClick={() => {
                    dispatch(addToCart(item)),
                      toast.success(`${item?.title} is added to Cart!`);
                  }}
                  className="font-bold hover:text-designColor border-[1px] border-zinc-500 duration-300 px-3"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>

        ))}
      </div>
      <div className="w-full lg:w-1/3">

        <div className="flex items-center justify-between py-4 md:py-8 flex-wrap">
          <button type="button" className="font-bold hover:text-designColor border-[1px] border-zinc-500 duration-300 px-3 rounded-full mb-3">All</button>
          <button type="button" className="font-bold hover:text-designColor border-[1px] border-zinc-500 duration-300 px-3 rounded-full mb-3">Fictions</button>
          <button type="button" className="font-bold hover:text-designColor border-[1px] border-zinc-500 duration-300 px-3 rounded-full mb-3">Non-fiction</button>
          <button type="button" className="font-bold hover:text-designColor border-[1px] border-zinc-500 duration-300 px-3 rounded-full mb-3">Science</button>
          <button type="button" className="font-bold hover:text-designColor border-[1px] border-zinc-500 duration-300 px-3 rounded-full mb-3">Essay</button>
        </div>

      </div>

    </div>


  );
};

export default Product;
