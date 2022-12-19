import "../CateringDietsSummaryText/CateringDietsSummaryText.scss";
export const CateringDietsSummaryText: React.FC = () => {
  return (
    <div className="catering-diets-summary-text">
      {/* <div className="catering-diets-summary-top-border"></div> */}
      <h2 className="premium-quality">Premium quality</h2>
      <h2 className="catering-diets">
        catering diets
        <img
          className="red_apple"
          src={require("../../image/red-apple.png")}
          alt="red_apple"
        />
        for
      </h2>
      <div className="exacting">
        <img
          className="avocado"
          src={require("../../image/Avocado.png")}
          alt="avocado"
        />
        <h2> exacting</h2>
      </div>
      {/* <div className="catering-diets-summary-bottom-border"></div> */}
    </div>
  );
};
