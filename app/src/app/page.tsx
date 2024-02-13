"use client";
import Container from "@/components/Container";
import Product from "@/components/Product";
import { books } from "@/constants/data";
import { getBooksStart } from "@/redux/book/bookSlice";
import { useAppSelector } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Home() {

  const dispatch = useDispatch();
  // const books = useAppSelector(state => state.books);
  // console.log(books)

  useEffect(() => {
    dispatch(getBooksStart());
  }, [dispatch])
  return (
    <Container>
      <Product products={books} />
    </Container>
  );
}
