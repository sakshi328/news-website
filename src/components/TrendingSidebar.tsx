import { TrendingUp, ArrowRight } from "lucide-react";

interface TrendingItem {
  rank: number;
  title: string;
  category: string;
  readTime: string;
}

const trendingItems: TrendingItem[] = [
  {
    rank: 1,
    title: "Electric Vehicle Sales Surge 45% in Q4 Report",
    category: "Business",
    readTime: "4 min",
  },
  {
    rank: 2,
    title: "New AI Regulations Proposed by European Commission",
    category: "Technology",
    readTime: "6 min",
  },
  {
    rank: 3,
    title: "Championship Finals Set for Record Viewership",
    category: "Sports",
    readTime: "3 min",
  },
  {
    rank: 4,
    title: "Oscar Nominations Announced for 2026 Season",
    category: "Culture",
    readTime: "5 min",
  },
  {
    rank: 5,
    title: "Federal Reserve Signals Rate Cut in Early 2026",
    category: "Business",
    readTime: "7 min",
  },
];

const TrendingSidebar = () => {
  return (
    <aside className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="text-accent" size={20} />
        <h2 className="font-display text-xl font-bold text-headline">Trending Now</h2>
      </div>
      
      <div className="space-y-4">
        {trendingItems.map((item) => (
          <article
            key={item.rank}
            className="group cursor-pointer flex gap-4 pb-4 border-b border-border last:border-0 last:pb-0"
          >
            <span className="font-display text-3xl font-bold text-muted-foreground/30 group-hover:text-accent transition-colors">
              {item.rank.toString().padStart(2, "0")}
            </span>
            <div className="flex-1">
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                {item.category}
              </span>
              <h3 className="font-display text-sm font-semibold text-headline mt-1 group-hover:text-accent transition-colors line-clamp-2">
                {item.title}
              </h3>
              <span className="text-xs text-muted-foreground mt-1 block">
                {item.readTime} read
              </span>
            </div>
          </article>
        ))}
      </div>
      
      <button className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors mt-6 w-full justify-center">
        View all trending
        <ArrowRight size={16} />
      </button>
    </aside>
  );
};

export default TrendingSidebar;
