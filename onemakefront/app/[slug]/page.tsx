import NotFound from "../NotFoundCustom";

export default async function Page({ params }: { params: { slug: string } }) {
  const resolvedParameters = await params;

  return <NotFound slug={resolvedParameters.slug} />;
}
