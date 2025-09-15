import React from 'react';
import { Users, MessageSquare, Calendar, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const collaborationFeatures = [
  {
    icon: MessageSquare,
    title: 'Real-time Communication',
    description: 'Integrated chat and video conferencing tools for seamless collaboration.',
    badge: 'Popular',
  },
  {
    icon: Calendar,
    title: 'Project Management',
    description: 'Track milestones, deadlines, and research progress with built-in tools.',
    badge: 'New',
  },
  {
    icon: Zap,
    title: 'Resource Sharing',
    description: 'Share datasets, methodologies, and research materials securely.',
    badge: null,
  },
];

const testimonials = [
  {
    name: 'Dr. Maria Rodriguez',
    role: 'Neuroscience Researcher',
    text: 'Found amazing collaborators for our brain imaging study. The platform made international collaboration effortless.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b69a7726?w=60&h=60&fit=crop&crop=face',
  },
  {
    name: 'Prof. James Chen',
    role: 'AI Research Lead',
    text: 'Connected with researchers from 5 different countries for our ML project. Results exceeded expectations.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face',
  },
];

const CollaborationSection: React.FC = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-4">
            Collaborate with Other Researchers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Break down geographical barriers and work with the best minds in your field. 
            Our collaboration tools make remote research partnerships as effective as in-person work.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {collaborationFeatures.map((feature, index) => (
            <Card key={index} className="card-elegant relative">
              <CardContent className="p-6">
                {feature.badge && (
                  <Badge 
                    variant="secondary" 
                    className="absolute -top-2 right-4 bg-primary text-primary-foreground"
                  >
                    {feature.badge}
                  </Badge>
                )}
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                </div>
                
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stories */}
        <div className="bg-card rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Success Stories</h3>
            <p className="text-muted-foreground">Hear from researchers who found their perfect collaborators</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-muted-foreground mb-3 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h4 className="text-xl font-semibold mb-4">Ready to start collaborating?</h4>
          <Button className="btn-hero">
            <Users className="w-5 h-5 mr-2" />
            Find Collaborators
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;