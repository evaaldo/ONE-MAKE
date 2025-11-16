interface NotFoundProps {
  slug?: string;
}

export default function NotFound({ slug }: NotFoundProps) {
  return (
    <div className="flex flex-col justify-center items-center w-screen pt-12 gap-2">
      <img className="w-60" src="warn.png" alt="" />
      <h1 className="font-semibold text-gray-500 text-4xl">OPS</h1>
      <span className="text-xl py-4">
        Não encontramos nenhum resultado para <strong>"{slug}"</strong>
      </span>
    </div>
  );
}
