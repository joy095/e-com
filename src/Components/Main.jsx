import Banner from "../cards/Banner";
import Card from "../cards/Card";
import LoginCard from "../cards/LoginCard";

const Main = () => {
  return (
    <div className="flex flex-col mx-auto max-w-[1920px]">
      <section>
        <Banner />
      </section>
      <main>
        <Card />
      </main>
      <section>
        <LoginCard />
      </section>
    </div>
  );
};

export default Main;
