import ProductCard from "@/components/ProductCard";
import { Sparkles, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import heroBanner from "@/assets/hero-banner.jpg";
import straightLongDress from "@/assets/straight-long-dress.jpg";
import straightShortDress from "@/assets/straight-short-dress.jpg";
import weavingLongDress from "@/assets/weaving-long-dress.jpg";
import trouserTop from "@/assets/trouser-top.jpg";
import skirtPeplum from "@/assets/skirt-peplum.jpg";
import slitPeplum from "@/assets/slit-peplum.jpg";
import weavingCloth from "@/assets/weaving-cloth.jpg";

const Index = () => {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true);
    try {
      const element = document.getElementById("flyer-content");
      if (!element) return;

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("Beauty-Empress-Christmas-Flyer.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsGeneratingPDF(false);
    }
  };

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
      {/* Download PDF Button */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          onClick={handleDownloadPDF}
          disabled={isGeneratingPDF}
          size="lg"
          className="shadow-lg"
        >
          <Download className="w-4 h-4 mr-2" />
          {isGeneratingPDF ? "Generating..." : "Download PDF"}
        </Button>
      </div>

      <div id="flyer-content">
        {/* Hero Section */}
      <section className="relative h-[85vh] sm:h-[70vh] md:h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBanner})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-4 sm:px-6">
          <div className="max-w-4xl space-y-4 sm:space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <span className="text-xs sm:text-sm font-medium text-primary">
                Christmas Special Offer
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight px-2">
              Beauty Empress
              <br />
              <span className="text-primary">Collection & Fashion Hub</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto font-light px-4">
              Your one-stop fashion destination this Christmas
            </p>

            <div className="pt-2 sm:pt-4">
              <div className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-accent text-accent-foreground rounded-full font-semibold text-sm sm:text-base lg:text-lg shadow-lg">
                🎄 Special Discounts Available Now!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-2 sm:space-y-3 md:space-y-4 mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground px-2">
            Christmas Collection
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-black max-w-2xl mx-auto px-4">
            Exclusive discounts on all our premium designs. Limited time offer!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
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
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-5 md:space-y-6">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold px-2">
            Don&apos;t Miss Out on These Amazing Deals!
          </h3>
          <p className="text-sm sm:text-base md:text-lg opacity-90 px-4">
            Visit us today and enjoy exclusive Christmas discounts on all our
            beautiful designs.
          </p>
          <div className="pt-2 sm:pt-3 md:pt-4">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold px-2">
              🎁 Special Christmas Pricing - Limited Time Only!
            </p>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Index;
