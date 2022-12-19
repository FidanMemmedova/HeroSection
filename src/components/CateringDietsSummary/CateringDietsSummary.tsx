import { CateringDietsSummaryText } from "components/CateringDietsSummaryText/CateringDietsSummaryText";
import { DietsSummaryText } from "components/DietsSummaryText/DietsSummaryText";
import { DietsSummaryTextItems } from "components/DietsSummaryTextItems/DietsSummaryTextItems";
import "../CateringDietsSummary/CateringDietsSummary.scss";

export const CateringDietsSummary: React.FC = () => {
  return (
    <div className="catering-diets-summary">
      <CateringDietsSummaryText />
      <DietsSummaryText />
      <DietsSummaryTextItems />
    </div>
  );
};
