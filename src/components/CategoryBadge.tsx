import { cn } from "@/lib/utils";

type Category = "politics" | "tech" | "business" | "culture" | "sports";

interface CategoryBadgeProps {
  category: Category;
  className?: string;
}

const categoryStyles: Record<Category, string> = {
  politics: "bg-category-politics/15 text-category-politics",
  tech: "bg-category-tech/15 text-category-tech",
  business: "bg-category-business/15 text-category-business",
  culture: "bg-category-culture/15 text-category-culture",
  sports: "bg-category-sports/15 text-category-sports",
};

const categoryLabels: Record<Category, string> = {
  politics: "Politics",
  tech: "Technology",
  business: "Business",
  culture: "Culture",
  sports: "Sports",
};

const CategoryBadge = ({ category, className }: CategoryBadgeProps) => {
  return (
    <span className={cn("category-badge", categoryStyles[category], className)}>
      {categoryLabels[category]}
    </span>
  );
};

export default CategoryBadge;
export type { Category };
