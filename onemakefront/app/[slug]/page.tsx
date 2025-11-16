"use client";

import { use, useEffect, useState } from "react";
import { ProductByCategoryProps } from "./types";
import ProductCard from "@/components/ProductCard";
import NotFound from "../NotFoundCustom";

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [products, setProducts] = useState<ProductByCategoryProps[]>([]);

  useEffect(() => {
    fetch(`/api/product/${slug}`)
      .then((response) => response.json())
      .then(setProducts)
      .catch(() => setProducts([]));
  }, []);

  return (
    <div>
      {products.length > 0 ? (
        <div className="flex flex-col items-center">
          <h1 className="py-6">
            {products.length} resultado(s) para: {slug}
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
      ) : (
        <NotFound slug={slug} />
      )}
    </div>
  );
}
