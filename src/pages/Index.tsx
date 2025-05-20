
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Camera, Sparkles, Clock, Shirt, Palette, CheckCircle, User, Mail } from "lucide-react";

const Index = () => {
  // Function to scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="border-b sticky top-0 z-40 bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-serif cursor-pointer">
              Chromatique
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={() => scrollToSection('features')}>
              Features
            </Button>
            <Button variant="ghost" size="sm" onClick={() => scrollToSection('how-it-works')}>
              How It Works
            </Button>
            <Button variant="ghost" size="sm" onClick={() => scrollToSection('about-us')}>
              About Us
            </Button>
            <Button variant="ghost" size="sm" onClick={() => scrollToSection('contact-us')}>
              Contact Us
            </Button>
            <Button variant="ghost" size="sm" onClick={() => scrollToSection('pricing')}>
              Pricing
            </Button>
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
      
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 lg:container relative overflow-hidden">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-chromatique-deep">
              Discover your perfect color palette
            </h1>
            <p className="text-xl text-chromatique-taupe md:w-5/6">
              Chromatique analyzes your unique features to determine your seasonal color palette,
              then recommends clothing and accessories that complement your natural beauty.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="https://chromatique-i13s.onrender.com/">
                <Button 
                  className="bg-chromatique-rose hover:bg-chromatique-deep text-white px-6 py-6"
                  size="lg"
                >
                  Start Your Color Journey <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                </Link>
              <Button 
                variant="outline" 
                size="lg"
                className="border-chromatique-deep text-chromatique-deep hover:bg-chromatique-deep/10"
                onClick={() => scrollToSection('about-us')}
              >
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center space-x-2 pt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-chromatique-winter border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-chromatique-spring border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-chromatique-summer border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-chromatique-autumn border-2 border-white"></div>
              </div>
              <p className="text-sm text-muted-foreground">
                Join 10,000+ people who found their perfect palette
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="aspect-square md:aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Woman with perfect color palette" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chromatique-deep/30 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 md:bottom-8 md:-left-10 bg-white p-4 rounded-lg shadow-lg max-w-[200px] animate-fade-in">
              <div className="flex space-x-2 mb-2">
                <div className="w-4 h-4 rounded-full bg-chromatique-summer"></div>
                <div className="w-4 h-4 rounded-full bg-chromatique-spring"></div>
                <div className="w-4 h-4 rounded-full bg-chromatique-rose"></div>
              </div>
              <p className="text-sm font-medium">Your personal palette enhances your natural beauty</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 bg-chromatique-cream/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-chromatique-deep mb-4">Discover Your Perfect Colors</h2>
            <p className="text-chromatique-taupe max-w-2xl mx-auto">
              Chromatique uses your unique features to create a personalized color palette that complements your natural beauty.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 p-3 rounded-full bg-chromatique-rose/10 w-fit">
                <Camera className="h-6 w-6 text-chromatique-rose" />
              </div>
              <h3 className="text-xl font-medium mb-2">Color Analysis</h3>
              <p className="text-chromatique-taupe">
                Take the quiz and enter your skin tone, hair, and eye color to determine your seasonal color palette.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 p-3 rounded-full bg-chromatique-rose/10 w-fit">
                <Palette className="h-6 w-6 text-chromatique-rose" />
              </div>
              <h3 className="text-xl font-medium mb-2">Personalized Palette</h3>
              <p className="text-chromatique-taupe">
                Get a custom color palette with shades that complement your natural features and enhance your appearance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 p-3 rounded-full bg-chromatique-rose/10 w-fit">
                <Shirt className="h-6 w-6 text-chromatique-rose" />
              </div>
              <h3 className="text-xl font-medium mb-2">Wardrobe Suggestions</h3>
              <p className="text-chromatique-taupe">
                Browse clothing and accessory recommendations that perfectly match your seasonal color palette.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 p-3 rounded-full bg-chromatique-rose/10 w-fit">
                <Clock className="h-6 w-6 text-chromatique-rose" />
              </div>
              <h3 className="text-xl font-medium mb-2">Quick Results</h3>
              <p className="text-chromatique-taupe">
                Get your color analysis in minutes, not days.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 p-3 rounded-full bg-chromatique-rose/10 w-fit">
                <Sparkles className="h-6 w-6 text-chromatique-rose" />
              </div>
              <h3 className="text-xl font-medium mb-2">Outfit Creator</h3>
              <p className="text-chromatique-taupe">
                Mix and match items to create outfits that work perfectly with your color palette.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 p-3 rounded-full bg-chromatique-rose/10 w-fit">
                <Palette className="h-6 w-6 text-chromatique-rose" />
              </div>
              <h3 className="text-xl font-medium mb-2">Color Education</h3>
              <p className="text-chromatique-taupe">
                Learn about color theory and why certain colors work best for your unique features.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-chromatique-deep mb-4">How Chromatique Works</h2>
            <p className="text-chromatique-taupe max-w-2xl mx-auto">
              Our simple process helps you discover your perfect color palette in just a few steps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-chromatique-rose/20 -translate-y-1/2 z-0"></div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow relative z-10">
              <div className="w-12 h-12 rounded-full bg-chromatique-rose text-white flex items-center justify-center font-bold text-xl mb-6 mx-auto">1</div>
              <h3 className="text-xl font-medium mb-2 text-center">Take the Quiz</h3>
              <p className="text-chromatique-taupe text-center">
                Answer a few questions about your skin tone, hair color, and eye color.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow relative z-10">
              <div className="w-12 h-12 rounded-full bg-chromatique-rose text-white flex items-center justify-center font-bold text-xl mb-6 mx-auto">2</div>
              <h3 className="text-xl font-medium mb-2 text-center">Get Your Results</h3>
              <p className="text-chromatique-taupe text-center">
                Discover your seasonal color palette and learn which colors complement you best.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow relative z-10">
              <div className="w-12 h-12 rounded-full bg-chromatique-rose text-white flex items-center justify-center font-bold text-xl mb-6 mx-auto">3</div>
              <h3 className="text-xl font-medium mb-2 text-center">Transform Your Style</h3>
              <p className="text-chromatique-taupe text-center">
                Shop confidently with personalized clothing recommendations that match your palette.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="https://chromatique-i13s.onrender.com/">
              <Button className="bg-chromatique-rose hover:bg-chromatique-deep">
                Start Your Color Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Us Section */}
      <section id="about-us" className="py-20 bg-chromatique-cream/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-chromatique-deep mb-4">About Chromatique</h2>
            <p className="text-chromatique-taupe max-w-2xl mx-auto">
              Our mission is to help everyone discover and embrace their natural beauty through color.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-serif text-chromatique-deep">Our Story</h3>
              <p className="text-chromatique-taupe">
                Chromatique was founded in 2022 by a team of fashion experts and data scientists who recognized that
                finding your perfect colors shouldn't be complicated or expensive. We combined cutting-edge AI technology
                with classic color theory to create a solution that's accessible to everyone.
              </p>
              <p className="text-chromatique-taupe">
                Our team includes certified color analysts, fashion industry veterans, and tech innovators all working
                together to help you look and feel your best by wearing colors that complement your natural features.
              </p>
              <h3 className="text-2xl font-serif text-chromatique-deep pt-4">Our Philosophy</h3>
              <p className="text-chromatique-taupe">
                We believe that understanding your unique color palette is transformative. When you wear colors that harmonize
                with your natural features, you not only look better—you feel more confident. Our goal is to simplify personal
                style and eliminate the guesswork from shopping.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Chromatique team member analyzing colors" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573164574230-db1d5e960238?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Color analysis in progress" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581338834647-b0fb40704e21?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Color fabric swatches" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560243563-062bfc001d68?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Fashion designer working with colors" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Us Section */}
      <section id="contact-us" className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-chromatique-deep mb-4">Contact Us</h2>
            <p className="text-chromatique-taupe max-w-2xl mx-auto">
              Have questions about Chromatique? We'd love to hear from you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-chromatique-rose/10 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-chromatique-rose" />
              </div>
              <h3 className="text-xl font-medium mb-2">Email Us</h3>
              <p className="text-chromatique-taupe mb-4">
                Our support team is ready to help with any questions you have.
              </p>
              <a 
                href="mailto:support@chromatique.com" 
                className="text-chromatique-rose hover:underline"
              >
                support@chromatique.com
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-chromatique-rose/10 flex items-center justify-center mb-4">
                <User className="h-6 w-6 text-chromatique-rose" />
              </div>
              <h3 className="text-xl font-medium mb-2">Customer Support</h3>
              <p className="text-chromatique-taupe mb-4">
                Need help with your account or color analysis?
              </p>
              <Button variant="outline" className="border-chromatique-rose text-chromatique-rose hover:bg-chromatique-rose/10">
                Get Support
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-chromatique-rose/10 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-chromatique-rose" />
              </div>
              <h3 className="text-xl font-medium mb-2">Business Inquiries</h3>
              <p className="text-chromatique-taupe mb-4">
                For partnerships, press, or business opportunities.
              </p>
              <a 
                href="mailto:business@chromatique.com" 
                className="text-chromatique-rose hover:underline"
              >
                business@chromatique.com
              </a>
            </div>
          </div>
          
          <div className="mt-16 bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-serif text-chromatique-deep mb-6 text-center">Send Us a Message</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-chromatique-taupe mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-chromatique-cream rounded-md focus:outline-none focus:ring-2 focus:ring-chromatique-rose"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-chromatique-taupe mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-chromatique-cream rounded-md focus:outline-none focus:ring-2 focus:ring-chromatique-rose"
                  placeholder="Your email"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="subject" className="block text-sm font-medium text-chromatique-taupe mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border border-chromatique-cream rounded-md focus:outline-none focus:ring-2 focus:ring-chromatique-rose"
                  placeholder="Subject"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-chromatique-taupe mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-2 border border-chromatique-cream rounded-md focus:outline-none focus:ring-2 focus:ring-chromatique-rose"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="md:col-span-2 text-center">
                <Button className="bg-chromatique-rose hover:bg-chromatique-deep px-8">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-chromatique-cream/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-chromatique-deep mb-4">Choose Your Plan</h2>
            <p className="text-chromatique-taupe max-w-2xl mx-auto">
              Find the perfect plan to elevate your style with Chromatique.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-border">
              <div className="mb-4">
                <h3 className="text-xl font-medium">Basic</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold">Free</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Get started with basic color analysis</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-chromatique-rose" />
                  <span className="text-sm">Basic color analysis</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-chromatique-rose" />
                  <span className="text-sm">Seasonal color identification</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-chromatique-rose" />
                  <span className="text-sm">Basic recommendations</span>
                </li>
              </ul>
              <Link to="https://chromatique-i13s.onrender.com/">
              <Button className="w-full" variant="outline">Get Started</Button>
              </Link>
            </div>
            
            {/* Premium Plan */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-2 border-chromatique-rose relative">
              <div className="absolute -top-4 right-4 bg-chromatique-rose text-white px-3 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              
              <div className="mb-4">
                <h3 className="text-xl font-medium">Premium</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold">$9.99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Enhanced color analysis and features</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-chromatique-rose" />
                  <span className="text-sm">Advanced color analysis</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-chromatique-rose" />
                  <span className="text-sm">Personalized shopping recommendations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-chromatique-rose" />
                  <span className="text-sm">Digital wardrobe planner</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-chromatique-rose" />
                  <span className="text-sm">Outfit creator tool</span>
                </li>
              </ul>
              <Link to="https://chromatique-i13s.onrender.com/">
              <Button className="w-full bg-chromatique-rose hover:bg-chromatique-deep">
                Subscribe Now
              </Button>
              </Link>
            </div>
            
            {/* VIP Plan */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-border">
              <div className="mb-4">
                <h3 className="text-xl font-medium">VIP</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold">$19.99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Premium features with personal stylist</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-chromatique-rose" />
                  <span className="text-sm">Everything in Premium</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-chromatique-rose" />
                  <span className="text-sm">Personal stylist consultation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-chromatique-rose" />
                  <span className="text-sm">Exclusive shopping discounts</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-chromatique-rose" />
                  <span className="text-sm">Priority customer support</span>
                </li>
              </ul>
              <Link to="https://chromatique-i13s.onrender.com/">
              <Button className="w-full" variant="outline">Subscribe Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-chromatique-deep mb-4">What Our Users Say</h2>
            <p className="text-chromatique-taupe max-w-2xl mx-auto">
              Hear from people who have transformed their style with Chromatique.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-chromatique-winter"></div>
                  <div className="ml-4">
                    <h4 className="font-medium">Sarah L.</h4>
                    <p className="text-sm text-muted-foreground">Winter Palette</p>
                  </div>
                </div>
                <p className="text-chromatique-taupe">
                  "I've always struggled with finding colors that work for me. Chromatique identified my winter palette, and shopping is so much easier now!"
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-chromatique-autumn"></div>
                  <div className="ml-4">
                    <h4 className="font-medium">Michael T.</h4>
                    <p className="text-sm text-muted-foreground">Autumn Palette</p>
                  </div>
                </div>
                <p className="text-chromatique-taupe">
                  "As a guy, I was skeptical at first, but knowing my autumn palette has made such a difference in how put-together I look!"
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-chromatique-summer"></div>
                  <div className="ml-4">
                    <h4 className="font-medium">Elena K.</h4>
                    <p className="text-sm text-muted-foreground">Summer Palette</p>
                  </div>
                </div>
                <p className="text-chromatique-taupe">
                  "The VIP consultation was worth every penny. My stylist helped me create a capsule wardrobe with my summer colors, and I get compliments daily!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-chromatique-deep text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Ready to discover your perfect colors?</h2>
            <p className="text-xl opacity-90 mb-8">
              Join thousands of others who have transformed their style with Chromatique.
            </p>
            <Link to="https://chromatique-i13s.onrender.com/">
            <Button 
              className="bg-white text-chromatique-deep hover:bg-chromatique-cream"
              size="lg"
            >
              Get Started Now
            </Button>
            </Link>
          </div>
        </div>
      </section>
      
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
                  <a href="#about-us" className="text-chromatique-taupe hover:text-chromatique-deep">About Us</a>
                </li>
                <li>
                  <a href="#contact-us" className="text-chromatique-taupe hover:text-chromatique-deep">Contact Us</a>
                </li>
                <li>
                  <a href="#pricing" className="text-chromatique-taupe hover:text-chromatique-deep">Pricing</a>
                </li>
                <li>
                  <Link to="/team" className="text-chromatique-taupe hover:text-chromatique-deep">Our Team</Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about-us" className="text-chromatique-taupe hover:text-chromatique-deep">About Us</a>
                </li>
                <li>
                  <Link to="/team" className="text-chromatique-taupe hover:text-chromatique-deep">Meet the Team</Link>
                </li>
                <li>
                  <a href="#contact-us" className="text-chromatique-taupe hover:text-chromatique-deep">Contact</a>
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

export default Index;
