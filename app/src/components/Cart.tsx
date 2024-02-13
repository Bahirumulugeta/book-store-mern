"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "../../type";
import { Minus, Plus, X } from "lucide-react";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
  resetCart,
} from "@/redux/proSlice";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";
type ProductType = {
  id: number,
  title: string,
  image: string,
  unitPrice: number,
  quantity: number,
  subtotal: number
}

const productData: ProductType[] = [
  {
    id: 1,
    title: "Widget A",
    image: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
    unitPrice: 10.99,
    quantity: 3,
    subtotal: 32.97
  },
  {
    id: 2,
    title: "Gadget B",
    image: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
    unitPrice: 25.50,
    quantity: 2,
    subtotal: 51.00
  },
  {
    id: 3,
    title: "Tool C",
    image: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
    unitPrice: 15.75,
    quantity: 1,
    subtotal: 15.75
  },

];


const Cart = () => {

  const [totalAmt, setTotalAmt] = useState(0);
  const [rowPrice, setRowPrice] = useState(0);
  // const { productData } = useSelector((state: StateProps) => state.pro);
  const dispatch = useDispatch();
  const router = useRouter();
  const { data: session } = useSession();

  const handleReset = () => {
    const confirmReset = window.confirm(
      "Are you sure you want to reset your Cart?"
    );
    if (confirmReset) {
      dispatch(resetCart());
      toast.success("Cart Reset Successfully");
      router.push("/");
    }
  };


  return (
    <>
      {productData.length > 0 ? (
        <div className="mt-5 xl:flex md:flex justify-between">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-white uppercase bg-zinc-950">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product Information
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Unit Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    SubTotal
                  </th>
                </tr>
              </thead>
              {productData.map((item: ProductType) => (
                <tbody key={item?.id}>
                  <tr className="bg-white border-b-[1px] border-b-zinc-300">
                    <th
                      scope="row"
                      className="px-6 py-4 flex items-center gap-3"
                    >
                      <X
                        onClick={() => {
                          dispatch(deleteProduct(item?.id)),
                            toast.success(
                              `${item.title} is removed from Wishlist!`
                            );
                        }}
                        className="w-4 h-4 hover:text-red-600 cursor-pointer duration-200"
                      />
                      <Image
                        src={item?.image}
                        alt="proudct image"
                        width={500}
                        height={500}
                        className="w-24 object-contain"
                      />
                      <p className="text-base font-medium text-black">
                        {item?.title}
                      </p>
                    </th>
                    <td className="px-6 py-4">
                      {item.unitPrice}
                    </td>
                    <td className="px-6 py-4 flex items-center gap-4">
                      <span className="border border-zinc-300 p-1 rounded-md hover:border-zinc-800 cursor-pointer duration-200 inline-flex items-center justify-center">
                        <Minus
                          onClick={() =>
                            item?.quantity > 1
                              ? dispatch(decreaseQuantity(item)) &&
                              toast.success(
                                "Quantity decreased Successfully!"
                              )
                              : toast.error("Can not delete less than 1")
                          }
                          className="w-4 h-4"
                        />
                      </span>
                      <span className="font-semibold">{item?.quantity}</span>
                      <span className="border border-zinc-300 p-1 rounded-md hover:border-zinc-800 cursor-pointer duration-200 inline-flex items-center justify-center">
                        <Plus
                          onClick={() => {
                            dispatch(increaseQuantity(item)),
                              toast.success(`${item?.title} quantity added`);
                          }}
                          className="w-4 h-4"
                        />
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {item?.unitPrice * item?.quantity}
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
          <div className="bg-white max-w-xl p-4 flex flex-col gap-1">
            <p className="border-b-[1px] border-b-designColor py-1">
              Cart Summary
            </p>
            <p className="flex items-center justify-between">
              Total Items <span>{productData.length}</span>
            </p>

            <p className="flex items-center justify-between">
              Total Price{" "}
              <span>
                {totalAmt}
              </span>
            </p>
            <button
              onClick={() => { }}
              className="bg-zinc-800 text-zinc-200 my-2 py-2 uppercase text-center rounded-md font-semibold hover:bg-black hover:text-white duration-200"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="py-10 flex flex-col gap-1 items-center justify-center">
          <p className="text-lg font-bold">Your Cart is Empty</p>
          <Link
            href={"/"}
            className="text-sm uppercase font-semibold underline underline-offset-2 hover:text-designColor duration-200 cursor-pointer"
          >
            Go back to Shopping
          </Link>
        </div>
      )}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#000",
            color: "#fff",
          },
        }}
      />
    </>
  );
};

export default Cart;
