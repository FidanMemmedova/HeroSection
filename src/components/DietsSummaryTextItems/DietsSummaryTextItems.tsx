import "../DietsSummaryTextItems/DietsSummaryTextItems.scss";
export const DietsSummaryTextItems: React.FC = () => {
  return (
    <div className="diets-summary-text-items">
      <button className="adjust_diet_btn">Adjust diet</button>
      <div className="watch_video">
        <img
          className="watch_video_btn"
          src={require("../../image/play-icon.png")}
          alt="watch_video_btn"
        />
        <p>Watch video</p>
      </div>
    </div>
  );
};
