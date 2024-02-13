import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <div className="bg-white/80 mt-4 py-10 text-zinc-300">
      <Container className="flex items-center justify-center">
        <h1 className="text-black text-2xl cursor-pointer duration-200 relative overflow-hidden group uppercase font-bold">Book Store</h1>
      </Container>
    </div>
  );
};

export default Footer;
