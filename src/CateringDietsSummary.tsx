import { CateringDietsSummaryText } from "CateringDietsSummaryText";
import { DietsSummaryText } from "DietsSummaryText";
import { DietsSummaryTextItems } from "DietsSummaryTextItems";
import "./App.scss";

export const CateringDietsSummary: React.FC = () => {
  return (
    <div className="catering-diets-summary">
      <CateringDietsSummaryText />
      <DietsSummaryText />
      <DietsSummaryTextItems />
    </div>
  );
};
