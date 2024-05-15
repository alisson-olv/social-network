import photosGet from "@/actions/photos-get";
import Feed from "@/components/feed/feed";

export default async function Home() {
  const { data } = await photosGet();

  return (
    <section className="container mainContainer">
      {data?.length ? (
        <Feed photos={data} />
      ) : (
        <div>
          <p>Não há dados para mostrar</p>
        </div>
      )}
    </section>
  );
}
