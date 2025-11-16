import { ProductCardProps } from "./types";

export default function ProductCard({
  display_Name,
  description,
  price,
  image_Path,
}: ProductCardProps) {
  return (
    <div className="w-[20vw] flex flex-col items-center justify-center">
      <img
        src={image_Path}
        alt="Produto"
        className="bg-cover bg-center rounded-sm"
      />
      <div className="flex flex-col pt-4 gap-2">
        <strong className="text-2xl">{display_Name}</strong>
        <span>{description}</span>
        <div className="flex gap-1 items-center">
          <strong className="text-xl text-green-700">R$ {price}.00</strong>
          <span>
            ou <strong>R$ {price - price * 0.05}0</strong> no PIX
          </span>
        </div>
        <button className="mt-2 py-1 px-2 bg-pink-400 rounded-md text-white font-bold cursor-pointer">
          Comprar
        </button>
      </div>
    </div>
  );
}
