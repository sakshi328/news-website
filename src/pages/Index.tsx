import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ArticleCard from "@/components/ArticleCard";
import TrendingSidebar from "@/components/TrendingSidebar";
import Footer from "@/components/Footer";

import newsTech from "@/assets/news-tech.jpg";
import newsBusiness from "@/assets/news-business.jpg";
import newsPolitics from "@/assets/news-politics.jpg";
import newsCulture from "@/assets/news-culture.jpg";
import newsSports from "@/assets/news-sports.jpg";

const articles = [
  {
    title: "Tech Giants Race to Develop Next-Generation AI Chips",
    excerpt: "Major technology companies are investing billions in custom semiconductor development as demand for artificial intelligence computing power continues to surge.",
    category: "tech" as const,
    image: newsTech,
    author: "Michael Chen",
    readTime: "6 min read",
  },
  {
    title: "Wall Street Sees Strong Fourth Quarter as Markets Rally",
    excerpt: "Stock markets closed at record highs following positive economic data and optimistic forecasts from major financial institutions.",
    category: "business" as const,
    image: newsBusiness,
    author: "Jennifer Walsh",
    readTime: "5 min read",
  },
  {
    title: "International Summit Addresses Global Security Challenges",
    excerpt: "World leaders convene to discuss emerging threats and cooperative strategies for maintaining international stability.",
    category: "politics" as const,
    image: newsPolitics,
    author: "David Patterson",
    readTime: "7 min read",
  },
  {
    title: "Contemporary Art Exhibition Breaks Attendance Records",
    excerpt: "The groundbreaking showcase features works from emerging artists worldwide, attracting unprecedented visitor numbers.",
    category: "culture" as const,
    image: newsCulture,
    author: "Emma Rodriguez",
    readTime: "4 min read",
  },
  {
    title: "Champions League Quarter-Finals Deliver Thrilling Matches",
    excerpt: "European football's premier competition produces dramatic results as top clubs battle for semi-final spots.",
    category: "sports" as const,
    image: newsSports,
    author: "James Thompson",
    readTime: "5 min read",
  },
  {
    title: "Renewable Energy Investments Reach All-Time High",
    excerpt: "Global investment in clean energy infrastructure surpasses traditional fossil fuel spending for the first time in history.",
    category: "business" as const,
    image: newsBusiness,
    author: "Lisa Chang",
    readTime: "6 min read",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        
        <section className="container mx-auto py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-headline">
              Latest Stories
            </h2>
            <a href="#" className="text-sm font-medium text-accent hover:text-accent/80 transition-colors">
              View all →
            </a>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Featured Article */}
              <ArticleCard {...articles[0]} featured />
              
              {/* Article Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {articles.slice(1, 5).map((article, index) => (
                  <ArticleCard
                    key={index}
                    {...article}
                  />
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <TrendingSidebar />
              
              {/* Newsletter Signup */}
              <div className="bg-secondary rounded-lg p-6 mt-6">
                <h3 className="font-display text-lg font-bold text-headline mb-2">
                  Stay Informed
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get the latest news delivered directly to your inbox every morning.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-md border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <button
                    type="submit"
                    className="w-full bg-accent text-accent-foreground font-semibold py-2 rounded-md hover:bg-accent/90 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* More Articles */}
        <section className="container mx-auto py-12 border-t border-border">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-headline mb-8">
            More Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <ArticleCard
                key={`more-${index}`}
                {...article}
              />
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
