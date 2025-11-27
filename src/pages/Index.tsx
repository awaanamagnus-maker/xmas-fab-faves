import ProductCard from "@/components/ProductCard";
import { Sparkles } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import straightLongDress from "@/assets/straight-long-dress.jpg";
import straightShortDress from "@/assets/straight-short-dress.jpg";
import weavingLongDress from "@/assets/weaving-long-dress.jpg";
import trouserTop from "@/assets/trouser-top.jpg";
import skirtPeplum from "@/assets/skirt-peplum.jpg";
import slitPeplum from "@/assets/slit-peplum.jpg";
import weavingCloth from "@/assets/weaving-cloth.jpg";

const Index = () => {
  const products = [
    {
      image: straightLongDress,
      title: "Straight Long Dress",
      originalPrice: 60,
      discountPrice: 50,
    },
    {
      image: straightShortDress,
      title: "Straight Short Dress",
      originalPrice: 50,
      discountPrice: 40,
    },
    {
      image: weavingLongDress,
      title: "Weaving Cloth Straight Long Dress",
      originalPrice: 80,
      discountPrice: 70,
    },
    {
      image: trouserTop,
      title: "Trouser and Top for Ladies",
      originalPrice: 80,
      discountPrice: 70,
    },
    {
      image: skirtPeplum,
      title: "Short Skirt and Peplum",
      originalPrice: 60,
      discountPrice: 50,
    },
    {
      image: slitPeplum,
      title: "Slit and Peplum",
      originalPrice: 80,
      discountPrice: 70,
    },
    {
      image: weavingCloth,
      title: "Weaving Cloth",
      originalPrice: 150,
      discountPrice: 100,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBanner})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Christmas Special Offer
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight tracking-tight">
              Beauty Empress
              <br />
              <span className="text-primary">Collection & Fashion Hub</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light">
              Your one-stop fashion destination this Christmas
            </p>

            <div className="pt-4">
              <div className="inline-block px-6 py-3 bg-accent text-accent-foreground rounded-full font-semibold text-lg shadow-lg">
                🎄 Special Discounts Available Now!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Christmas Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Exclusive discounts on all our premium designs. Limited time offer!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "backwards",
              }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold">
            Don&apos;t Miss Out on These Amazing Deals!
          </h3>
          <p className="text-lg opacity-90">
            Visit us today and enjoy exclusive Christmas discounts on all our
            beautiful designs.
          </p>
          <div className="pt-4">
            <p className="text-2xl font-semibold">
              🎁 Special Christmas Pricing - Limited Time Only!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
