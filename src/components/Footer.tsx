
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" }
  ];

  const footerLinks = {
    "Services": ["Portfolio Development", "Career Management", "Brand Building", "Opportunity Placement"],
    "Talent": ["Models", "Actors", "Influencers", "Performers"],
    "Company": ["About Us", "Our Team", "Careers", "Press"],
    "Support": ["Contact", "FAQ", "Privacy Policy", "Terms of Service"]
  };

  return (
    <footer className="bg-talent-dark border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold text-primary">TALENT</h3>
              <span className="ml-2 text-sm font-light text-muted-foreground">Model Management</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Connecting extraordinary talent with world-class opportunities. 
              Where careers are built and dreams become reality.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="p-2 rounded-full bg-talent-light-gray text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Talent Model Management. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm mt-4 md:mt-0">
              Crafted with excellence for exceptional talent.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
