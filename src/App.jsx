import { Banner } from "./Banner";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Product } from "./Product";
import { Categories } from "./Categories";
import "./styles.css";
import { Figurecaption } from "./Figurecaption";
import { About } from "./About";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Banner />
        <Product
          price="4"
          name="Rato topi"
          image="https://picsum.photos/200/300"
        />
        <Product
          price="3"
          name="Seto panja"
          image="https://picsum.photos/201/300"
        />
        <Product price="20" name="Hariyo Moja" />
        <Categories />
        <Figurecaption />
        <About />
      </main>
      <Footer />
    </div>
  );
}
