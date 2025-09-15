import React from 'react';
import { GraduationCap, Clock, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const internshipBenefits = [
  {
    icon: GraduationCap,
    title: 'Learn from Experts',
    description: 'Work directly with leading researchers in your field of interest.',
  },
  {
    icon: Clock,
    title: 'Flexible Schedule',
    description: 'Remote and flexible internship opportunities that fit your schedule.',
  },
  {
    icon: Award,
    title: 'Gain Experience',
    description: 'Build your research portfolio with real-world project experience.',
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Network with professionals and accelerate your research career.',
  },
];

const openPositions = [
  {
    title: 'AI Research Intern',
    department: 'Machine Learning Lab',
    location: 'Remote',
    duration: '6 months',
    type: 'Full-time',
    urgent: true,
  },
  {
    title: 'Biology Research Assistant',
    department: 'Genetics Research Center',
    location: 'Hybrid',
    duration: '4 months',
    type: 'Part-time',
    urgent: false,
  },
  {
    title: 'Physics Data Analyst',
    department: 'Quantum Computing Lab',
    location: 'Remote',
    duration: '8 months',
    type: 'Full-time',
    urgent: false,
  },
];

const InternshipSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-4">
            Apply for a Research Internship
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Launch your research career with hands-on experience. Connect with leading research institutions 
            and gain valuable experience in your field of study.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Benefits */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Why Choose Our Internship Program?</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {internshipBenefits.map((benefit, index) => (
                  <div key={index} className="space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold">{benefit.title}</h4>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6">
              <h4 className="font-semibold mb-2">Application Process</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Submit your application and research interests</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Interview with potential supervisors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Start your research journey</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Open Positions */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Current Openings</h3>
            
            {openPositions.map((position, index) => (
              <Card key={index} className="card-elegant">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{position.title}</h4>
                      <p className="text-muted-foreground">{position.department}</p>
                    </div>
                    {position.urgent && (
                      <Badge variant="destructive" className="text-xs">
                        Urgent
                      </Badge>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">{position.location}</Badge>
                    <Badge variant="outline">{position.duration}</Badge>
                    <Badge variant="outline">{position.type}</Badge>
                  </div>

                  <Button variant="outline" size="sm" className="w-full">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}

            <Card className="card-elegant bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Don't see a perfect match?</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Create a profile and get notified when new positions matching your interests become available.
                </p>
                <Button variant="outline" size="sm">
                  Create Alert
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;