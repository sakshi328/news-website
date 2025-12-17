import CategoryBadge, { Category } from "./CategoryBadge";
import { Clock } from "lucide-react";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: Category;
  image: string;
  author: string;
  readTime: string;
  featured?: boolean;
}

const ArticleCard = ({
  title,
  excerpt,
  category,
  image,
  author,
  readTime,
  featured = false,
}: ArticleCardProps) => {
  if (featured) {
    return (
      <article className="article-card group cursor-pointer">
        <div className="relative overflow-hidden rounded-lg aspect-[16/9] mb-4">
          <img
            src={image}
            alt={title}
            className="article-image w-full h-full object-cover transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <CategoryBadge category={category} className="mb-3" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-2 group-hover:text-accent transition-colors">
              {title}
            </h2>
            <p className="text-primary-foreground/80 line-clamp-2 mb-3">{excerpt}</p>
            <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
              <span>{author}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {readTime}
              </span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="article-card group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg aspect-[16/10] mb-3">
        <img
          src={image}
          alt={title}
          className="article-image w-full h-full object-cover transition-transform duration-500"
        />
      </div>
      <CategoryBadge category={category} className="mb-2" />
      <h3 className="font-display text-lg font-semibold text-headline mb-2 group-hover:text-accent transition-colors line-clamp-2">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{excerpt}</p>
      <div className="flex items-center gap-3 text-xs text-muted-foreground">
        <span>{author}</span>
        <span>•</span>
        <span className="flex items-center gap-1">
          <Clock size={12} />
          {readTime}
        </span>
      </div>
    </article>
  );
};

export default ArticleCard;
