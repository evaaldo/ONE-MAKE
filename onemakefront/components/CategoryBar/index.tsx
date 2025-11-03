"use client";

import { useEffect, useState } from "react";

interface CategoryProps {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export default function CategoryBar() {
  const [categories, setCategories] = useState<CategoryProps[]>([]);

  useEffect(() => {
    fetch("api/category")
      .then((res) => res.json())
      .then(setCategories)
      .catch(console.error);
  }, []);

  return (
    <ul className="flex justify-evenly px-10 py-6">
      {categories.map((category: CategoryProps) => (
        <li className="font-semibold" key={category.id}>{category.name.toUpperCase()}</li>
      ))}
    </ul>
  );
}
