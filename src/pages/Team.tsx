
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const Team = () => {
  return (
    <div className="min-h-screen flex flex-col">
<header className="border-b sticky top-0 z-40 bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-serif cursor-pointer">
              Chromatique
            </h1>
          </div>
                
                <nav className="hidden md:flex items-center space-x-4">
                <Link to="/#features">
                  <Button variant="ghost" size="sm">
                  Features
                  </Button>
                </Link>
                <Link to="/#how-it-works">
                  <Button variant="ghost" size="sm">
                  How It Works
                  </Button>
                </Link>
                <Link to="/#about-us">
                  <Button variant="ghost" size="sm">
                  About Us
                  </Button>
                </Link>
                <Link to="/#contact-us">
                  <Button variant="ghost" size="sm">
                  Contact Us
                  </Button>
                </Link>
                <Link to="/#pricing">
                  <Button variant="ghost" size="sm">
                  Pricing
                  </Button>
                </Link>
                <Link to="/team">
                  <Button variant="ghost" size="sm">
                  Our Team
                  </Button>
                </Link>
              </nav>
          <Link to="https://chromatique-i13s.onrender.com/">
            <Button className="bg-chromatique-rose hover:bg-chromatique-deep">
              Get Started
            </Button>
          </Link>
        </div>
      </header>
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 px-4 md:px-6 lg:container">
          <div className="max-w-3xl mx-auto text-center">
            <Link to="/">
              <Button variant="outline" size="sm" className="mb-6">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif text-chromatique-deep mb-6">Meet Our Team</h1>
            <p className="text-xl text-chromatique-taupe">
              The passionate experts behind Chromatique who are dedicated to helping you discover your perfect colors.
            </p>
          </div>
        </section>
        
        {/* Leadership Team */}
        <section className="py-12 px-4 md:px-6 lg:container">
          <h2 className="text-3xl font-serif text-center text-chromatique-deep mb-12">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Emma Parker" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">Emma Parker</h3>
              <p className="text-chromatique-rose font-medium mb-3">CEO & Founder</p>
              <p className="text-chromatique-taupe">
                Former fashion industry executive with 15+ years of experience and a passion for color theory.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Michael Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">Michael Chen</h3>
              <p className="text-chromatique-rose font-medium mb-3">CTO</p>
              <p className="text-chromatique-taupe">
                Tech innovator with expertise in AI and machine learning, leading our color analysis technology.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Sophia Rodriguez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">Sophia Rodriguez</h3>
              <p className="text-chromatique-rose font-medium mb-3">Chief Color Analyst</p>
              <p className="text-chromatique-taupe">
                Certified color consultant with a background in art and design, overseeing our seasonal color methodologies.
              </p>
            </div>
          </div>
        </section>
        
        {/* Team Members */}
        <section className="py-12 px-4 md:px-6 lg:container bg-chromatique-cream/30">
          <h2 className="text-3xl font-serif text-center text-chromatique-deep mb-12">Color Experts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "David Wilson",
                role: "Senior Color Analyst",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                specialty: "Winter palettes specialist"
              },
              {
                name: "Anna Kim",
                role: "Color Analyst",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                specialty: "Spring palettes specialist"
              },
              {
                name: "James Taylor",
                role: "Color Analyst",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                specialty: "Summer palettes specialist"
              },
              {
                name: "Olivia Martinez",
                role: "Color Analyst",
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                specialty: "Autumn palettes specialist"
              }
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-36 h-36 rounded-full overflow-hidden mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium mb-1">{member.name}</h3>
                <p className="text-chromatique-rose font-medium mb-2">{member.role}</p>
                <p className="text-chromatique-taupe text-sm">{member.specialty}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Tech Team */}
        <section className="py-12 px-4 md:px-6 lg:container">
          <h2 className="text-3xl font-serif text-center text-chromatique-deep mb-12">Tech Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Lead Developer",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                bio: "Full-stack developer specializing in AI integration and computer vision"
              },
              {
                name: "Nina Patel",
                role: "UX/UI Designer",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                bio: "Creating beautiful, intuitive interfaces with a focus on accessibility"
              },
              {
                name: "Thomas Wright",
                role: "Data Scientist",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                bio: "Analyzing color patterns and refining our recommendation algorithms"
              }
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-36 h-36 rounded-full overflow-hidden mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium mb-1">{member.name}</h3>
                <p className="text-chromatique-rose font-medium mb-2">{member.role}</p>
                <p className="text-chromatique-taupe text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Join Our Team CTA */}
        <section className="py-16 px-4 md:px-6 lg:container bg-chromatique-deep text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Join Our Team</h2>
            <p className="text-xl opacity-90 mb-8">
              Passionate about color? Want to help people discover their perfect palette? We're always looking for talented individuals to join our team.
            </p>
            <Button 
              className="bg-white text-chromatique-deep hover:bg-chromatique-cream"
              size="lg"
            >
              View Open Positions
            </Button>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="py-12 bg-chromatique-cream/50 border-t">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-serif mb-4 text-chromatique-deep">Chromatique</h3>
              <p className="text-chromatique-taupe">
                Discover your perfect colors and elevate your style
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/team" className="text-chromatique-taupe hover:text-chromatique-deep">Meet the Team</Link>
                </li>
                <li>
                  <Link to="/#about-us" className="text-chromatique-taupe hover:text-chromatique-deep">About Us</Link>
                </li>
                <li>
                  <Link to="/#contact-us" className="text-chromatique-taupe hover:text-chromatique-deep">Contact Us</Link>
                </li>
                <li>
                  <Link to="/#pricing" className="text-chromatique-taupe hover:text-chromatique-deep">Pricing</Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/#about-us" className="text-chromatique-taupe hover:text-chromatique-deep">About Us</Link>
                </li>
                <li>
                  <Link to="/team" className="text-chromatique-taupe hover:text-chromatique-deep">Meet the Team</Link>
                </li>
                <li>
                  <Link to="/#contact-us" className="text-chromatique-taupe hover:text-chromatique-deep">Contact</Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-chromatique-taupe hover:text-chromatique-deep">Terms of Service</a>
                </li>
                <li>
                  <a href="#" className="text-chromatique-taupe hover:text-chromatique-deep">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-12 pt-8 text-center text-chromatique-taupe">
            <p>&copy; {new Date().getFullYear()} Chromatique. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Team;
