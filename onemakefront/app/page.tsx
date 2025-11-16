"use client";

import ProductCard from "@/components/ProductCard";
import { ProductCardProps } from "@/components/ProductCard/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<ProductCardProps[]>([]);

  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  console.log(JSON.stringify(products));

  return (
    <div>
      <h1 className="text-5xl text-pink-500 font-bold text-center py-6">
        Amados da One Make
      </h1>
      <div className="flex items-center justify-center py-8 gap-16">
        {products.map((product) => (
          <ProductCard
            key={product.product_Id}
            product_Id={product.product_Id}
            category_Id={product.category_Id}
            category={product.category}
            display_Name={product.display_Name}
            description={product.description}
            price={product.price}
            image_Path={product.image_Path}
            storage={product.storage}
            created_At={product.created_At}
            updated_At={product.updated_At}
          />
        ))}
      </div>
    </div>
  );
}
