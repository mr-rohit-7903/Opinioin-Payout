import React from 'react';
import { Search, MessageCircle, Handshake } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const steps = [
  {
    icon: Search,
    title: 'Discover Researchers',
    description: 'Browse through our extensive database of researchers across various fields. Use our advanced filters to find experts in your specific area of interest.',
    color: 'text-blue-600 bg-blue-100 dark:bg-blue-900/20',
  },
  {
    icon: MessageCircle,
    title: 'Initiate Conversations',
    description: 'Reach out to potential collaborators through our secure messaging system. Share ideas, discuss methodologies, and explore research opportunities.',
    color: 'text-green-600 bg-green-100 dark:bg-green-900/20',
  },
  {
    icon: Handshake,
    title: 'Start Collaborating',
    description: 'Form research partnerships, share resources, and work together on groundbreaking projects. Track progress and manage collaborations seamlessly.',
    color: 'text-purple-600 bg-purple-100 dark:bg-purple-900/20',
  },
];

const HowToConnectSection: React.FC = () => {
  return (
    <section className="py-20 bg-secondary-blue/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-4">
            How to Connect Professional Researchers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform makes it easy to find, connect, and collaborate with researchers worldwide. 
            Follow these simple steps to expand your research network.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="card-elegant relative group">
              <CardContent className="p-8 text-center">
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${step.color} transition-smooth group-hover:scale-110`}>
                  <step.icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 font-heading">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Connecting lines for desktop */}
        <div className="hidden md:block relative -mt-32 mb-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-4xl flex items-center justify-between px-16">
              <div className="w-24 h-0.5 bg-primary/30" />
              <div className="w-24 h-0.5 bg-primary/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToConnectSection;