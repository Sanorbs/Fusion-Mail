import { FC } from "react";

interface FeatureProps {
  name: string;
  description: string;
}

const FeatureCard: FC<FeatureProps> = ({ name, description }) => (
  <div className="p-6 border rounded-lg shadow hover:shadow-md transition">
    <h3 className="text-lg font-semibold text-primary">{name}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
);

export default FeatureCard;
