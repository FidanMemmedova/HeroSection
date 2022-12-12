import "./App.scss";
export const DietsProducts: React.FC = () => {
  return (
    <div className="diet-product-second">
      <img
        className="pieces-chicken-fillet-with-mushrooms"
        src={require("./image/pieces-chicken-fillet-with-mushrooms.png")}
        alt="pieces-chicken-fillet-with-mushrooms"
      />
      <img
        className="fry-chicken-sweet-peppers"
        src={require("./image/fry-chicken-sweet-peppers.png")}
        alt="stir-fry-chicken-sweet-peppers-green-beans"
      />
    </div>
  );
};
