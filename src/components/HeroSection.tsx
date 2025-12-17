import heroImage from "@/assets/hero-news.jpg";
import CategoryBadge from "./CategoryBadge";
import { Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full">
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={heroImage}
          alt="Breaking news"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container mx-auto">
            <div className="max-w-3xl animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <span className="breaking-badge">
                  <span className="w-2 h-2 bg-primary-foreground rounded-full" />
                  Breaking
                </span>
                <CategoryBadge category="politics" />
              </div>
              
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
                Global Leaders Announce Historic Climate Agreement at Summit
              </h1>
              
              <p className="text-lg md:text-xl text-primary-foreground/85 mb-6 max-w-2xl">
                World powers commit to unprecedented environmental measures in landmark deal, setting ambitious targets for carbon neutrality by 2040.
              </p>
              
              <div className="flex items-center gap-4 text-sm text-primary-foreground/70">
                <span className="font-medium">By Sarah Mitchell</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  8 min read
                </span>
                <span>•</span>
                <span>December 15, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
