import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FEATURES } from "@/utils/data";
import FeatureCard from "@/components/FeatureCard";

export default function Features() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-8 text-primary">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURES.map((f) => (
            <FeatureCard key={f.name} name={f.name} description={f.description} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
