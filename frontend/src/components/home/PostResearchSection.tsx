import React from 'react';
import { Upload, FileText, Globe, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Upload,
    title: 'Easy Upload Process',
    description: 'Upload your research papers, datasets, and supplementary materials with our intuitive drag-and-drop interface.',
  },
  {
    icon: FileText,
    title: 'Comprehensive Documentation',
    description: 'Add detailed abstracts, methodology descriptions, and keyword tags to make your research discoverable.',
  },
  {
    icon: Globe,
    title: 'Global Visibility',
    description: 'Your research becomes instantly accessible to researchers worldwide, increasing collaboration opportunities.',
  },
  {
    icon: Award,
    title: 'Peer Recognition',
    description: 'Receive citations, reviews, and recognition from the global research community for your contributions.',
  },
];

const PostResearchSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6">
                Post Your Research & 
                <span className="gradient-primary bg-clip-text text-transparent"> Reach Global Audience</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Share your groundbreaking research with the world. Our platform provides 
                the tools and visibility you need to make your work accessible to researchers globally.
              </p>
            </div>

            <div className="space-y-6">
              {features.slice(0, 2).map((feature, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="btn-hero">
              Start Publishing Research
            </Button>
          </div>

          {/* Right side - Feature Cards */}
          <div className="grid gap-6">
            {features.slice(2).map((feature, index) => (
              <Card key={index} className="card-elegant">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Stats card */}
            <Card className="card-elegant gradient-card">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">2.5K+</div>
                <div className="text-sm text-muted-foreground mb-4">Papers Published This Month</div>
                <div className="flex justify-around text-sm">
                  <div>
                    <div className="font-semibold">98%</div>
                    <div className="text-muted-foreground">Approval Rate</div>
                  </div>
                  <div>
                    <div className="font-semibold">24h</div>
                    <div className="text-muted-foreground">Avg. Review Time</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostResearchSection;