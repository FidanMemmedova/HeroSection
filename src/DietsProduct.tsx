import "./App.scss";

export const DietsProduct: React.FC = () => {
  return (
    <div className="diet-product-first">
      <img
        className="vegan-salad"
        src={require("./image/vegan-salad.png")}
        alt="vegan-salad"
      />
      <img
        className="chicken-fillet-with-mushrooms"
        src={require("./image/chicken-fillet-with-mushrooms.png")}
        alt="chicken-fillet-with-mushrooms"
      />
    </div>
  );
};
