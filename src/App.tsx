import { CateringDietsSummary } from "components/CateringDietsSummary/CateringDietsSummary";
import { DietsProduct } from "components/DietsProduct/DietsProduct";
import { DietsProducts } from "components/DietsProducts/DietsProducts";
import { WrapperSection } from "components/WrapperSection/WrapperSection";
// import "./assets/css/App.css";

function App() {
  return (
    <div className="App">
      <header></header>
      <main>
      <WrapperSection>
        <DietsProduct />
        <CateringDietsSummary />
        <DietsProducts />
    </WrapperSection>
      </main>
      <footer></footer>
    </div>
  );
}

export default App; 