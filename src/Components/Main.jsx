import Banner from "../cards/Banner";
import Card from "../cards/Card";

const Main = () => {
  return (
    <div className="flex flex-col">
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
