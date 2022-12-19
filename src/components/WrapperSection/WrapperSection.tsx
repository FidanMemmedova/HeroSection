import '../WrapperSection/WrapperSection.scss';

export const WrapperSection: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <section id="catering-diets">{children}</section>;
};
