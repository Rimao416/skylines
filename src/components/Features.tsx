interface FeaturesProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Features: React.FC<FeaturesProps> = ({ icon, title, description }) => {
  return (
    <div className="categories">
      <div className="categories__icon">{icon}</div>
      <div className="categories__text">
        <h3 className="categories__text--title">{title}</h3>
        <p className="categories__text--description">{description}</p>
      </div>
    </div>
  );
};

export default Features;
