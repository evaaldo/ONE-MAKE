"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CategoryProps } from "./types";

export default function CategoryBar() {
  const [categories, setCategories] = useState<CategoryProps[]>([]);

  useEffect(() => {
    fetch("/api/category")
      .then((res) => res.json())
      .then(setCategories)
      .catch(console.error);
  }, []);

  return (
    <ul className="flex justify-evenly px-10 py-6">
      {categories.map((category: CategoryProps) => (
        <li className="text-black" key={category.category_Id}>
          <Link href={category.slug ?? "teste"}>
            {category.name.toUpperCase()}
          </Link>
        </li>
      ))}
    </ul>
  );
}
