import { Container } from "./Container";
import { Subtitle } from "./ui/Subtitle";
import { Title } from "./ui/Title";
import { featuresData } from "../constant/data";
import { FeatureCard } from "./FeatureCard";

export const Features = () => {
  return (
    <Container className="border-b border-black flex flex-col gap-7">
      <Subtitle title="Features" />
      <Title title="What I Do" />
      <div className="grid grid-cols-3 gap-x-5 gap-y-7">
        {featuresData.map((item) => (
          <FeatureCard key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
};

