import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  image: string;
  title: string;
  originalPrice: number;
  discountPrice: number;
}

const ProductCard = ({ image, title, originalPrice, discountPrice }: ProductCardProps) => {
  const savings = originalPrice - discountPrice;
  const savingsPercent = Math.round((savings / originalPrice) * 100);

  return (
    <Card className="group overflow-hidden border-border/50 bg-card hover:shadow-xl transition-all duration-500 active:scale-[0.98] sm:hover:scale-[1.02] touch-manipulation">
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <Badge className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-primary text-primary-foreground border-0 shadow-lg text-xs sm:text-sm">
          Save {savingsPercent}%
        </Badge>
      </div>
      <div className="p-3 sm:p-4 md:p-5 space-y-1.5 sm:space-y-2">
        <h3 className="font-semibold text-sm sm:text-base md:text-lg text-foreground leading-tight min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[3.5rem]">
          {title}
        </h3>
        <div className="flex items-baseline gap-2 sm:gap-3">
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
            GHC {discountPrice}
          </span>
          <span className="text-xs sm:text-sm text-muted-foreground line-through">
            GHC {originalPrice}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
