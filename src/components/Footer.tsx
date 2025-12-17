import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl font-bold mb-4 text-primary-foreground">
              The Daily Pulse
            </h3>
            <p className="text-primary-foreground/70 text-sm">
              Your trusted source for breaking news and in-depth analysis from around the world.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Sections</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Politics</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Business</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Culture</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Sports</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© 2025 The Daily Pulse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
