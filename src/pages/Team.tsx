
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
        
        <section className="py-12 px-4 md:px-6 lg:container">
          <h2 className="text-3xl font-serif text-center text-chromatique-deep mb-12">Leaders and Tech Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center place-items-center">
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6">
                <img 
                  src="/maryam.png" 
                  alt="Maryam Tahir" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">Maryam Tahir</h3>
              <p className="text-chromatique-rose font-medium mb-3">Project Lead & Full Stack Developer</p>
              <p className="text-chromatique-taupe">
                Led frontend development, supported backend, managed project direction, coordinated team meetings, and oversaw design and content decisions.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6">
                <img 
                  src="/rania.jpeg" 
                  alt="Rania Aziz Farooqi" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">Rania Aziz Farooqi</h3>
              <p className="text-chromatique-rose font-medium mb-3">Technical Lead & Operations Coordinator</p>
              <p className="text-chromatique-taupe">
                Led backend development, supported frontend, managed digital assets, organized documentation, and co-led project planning and team coordination.
              </p>
            </div>
          </div>
        </section>
        {/* Team Members */}
        <section className="py-12 px-4 md:px-6 lg:container bg-chromatique-cream/30">
          <h2 className="text-3xl font-serif text-center text-chromatique-deep mb-12"> Designers and Managers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center">
            {[
              {
          name: "Ayesha Adnan",
          role: "Brand & Media Designer",
          image: "/ayesha 1.png",
          specialty: "Created the app and Instagram logos, managed social media content, designed a high-fidelity prototype, and organized documentation and project assets."
              },
              {
          name: "Ayesha Afzal",
          role: "Visual Designer & Content Curator",
          image: "/ayesha 2.png",
          specialty: "Designed the project poster and prototype, and contributed over 200+ curated items for user recommendations."
              },
              {
          name: "Jadon Aguhob",
          role: "UX Designer & Content Contributor",
          image: "/jadon.jpeg",
          specialty: "Created the low-fidelity prototype and helped build a database of 100+ user-relevant items."
              },
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center justify-center">
          <div className="w-36 h-36 rounded-full overflow-hidden mb-4 flex items-center justify-center">
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
