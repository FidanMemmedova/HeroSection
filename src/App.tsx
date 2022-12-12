import { DietsProduct } from "DietsProduct";
import { DietsProducts } from "DietsProducts";
import { CateringDietsSummary } from "CateringDietsSummary";
import { WrapperSection } from "WrapperSection";
import "./App.scss";

const App = () => {
  return (
    <WrapperSection>
      <DietsProduct />
      <CateringDietsSummary />
      <DietsProducts />
    </WrapperSection>
  );
};

export default App;
