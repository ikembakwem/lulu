import { Header } from "@components/header";
import { Hero } from "@components/hero";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <div className="h-screen flex items-center justify-center text-5xl font-semibold text-primary bg-crystalVeil">
        <h1>
          Hello from <span className="text-abyssalNightfall">Lulu!</span>
        </h1>
      </div>
    </>
  );
};
export default Home;
