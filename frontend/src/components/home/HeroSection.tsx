import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, BookOpen, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-3d-research.jpg';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary-blue/20 to-primary-blue/5 py-20 lg:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <TrendingUp className="w-4 h-4 mr-2" />
                Join 10,000+ Researchers Worldwide
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold font-heading leading-tight">
                Connect, Collaborate & 
                <span className="gradient-primary bg-clip-text text-transparent"> Innovate</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Opinion Payout bridges the gap between researchers worldwide. Share your findings, 
                collaborate on groundbreaking projects, and accelerate scientific discovery together.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-hero text-lg px-8 py-4">
                <Link to="/signup">
                  Start Your Research Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" asChild className="border-2 text-lg px-8 py-4">
                <Link to="/explore">Explore Research</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3 mx-auto">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">12K+</div>
                <div className="text-sm text-muted-foreground">Active Researchers</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-3 mx-auto">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-accent">2.5K+</div>
                <div className="text-sm text-muted-foreground">Published Papers</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500/10 mb-3 mx-auto">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-green-600">850+</div>
                <div className="text-sm text-muted-foreground">Collaborations</div>
              </div>
            </div>
          </div>

          {/* Right side - 3D Image */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              <img
                src={heroImage}
                alt="3D Research Collaboration Visualization"
                className="w-full h-auto rounded-2xl shadow-hero"
              />
            </div>
            
            {/* Background decorations */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full gradient-primary opacity-20 animate-glow" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-accent/20 animate-glow" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 -right-8 w-16 h-16 rounded-full bg-primary/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;