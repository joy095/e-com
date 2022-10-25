import Banner from "../cards/Banner";
import Card from "../cards/Card";

const Main = () => {
  return (
    <div className="flex flex-col mx-auto max-w-[1920px]">
      <section>
        <Banner />
      </section>
      <main>
        <Card />
      </main>
    </div>
  );
};

export default Main;
