import React from 'react';
import { Users, FileText, Globe, TrendingUp, Award, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  {
    icon: Users,
    number: '12,847',
    label: 'Active Researchers',
    description: 'From 89 countries worldwide',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100 dark:bg-blue-900/20',
  },
  {
    icon: FileText,
    number: '2,543',
    label: 'Published Papers',
    description: 'This month alone',
    color: 'text-green-600',
    bgColor: 'bg-green-100 dark:bg-green-900/20',
  },
  {
    icon: TrendingUp,
    number: '856',
    label: 'Active Collaborations',
    description: 'Cross-border research projects',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100 dark:bg-purple-900/20',
  },
  {
    icon: Award,
    number: '94%',
    label: 'Success Rate',
    description: 'Successful research partnerships',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100 dark:bg-orange-900/20',
  },
  {
    icon: Globe,
    number: '150+',
    label: 'Universities',
    description: 'Top institutions represented',
    color: 'text-teal-600',
    bgColor: 'bg-teal-100 dark:bg-teal-900/20',
  },
  {
    icon: Clock,
    number: '24h',
    label: 'Average Response',
    description: 'Time to connect with researchers',
    color: 'text-pink-600',
    bgColor: 'bg-pink-100 dark:bg-pink-900/20',
  },
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-4">
            Platform Statistics
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join a thriving community of researchers making breakthrough discoveries together. 
            Our numbers speak to the power of collaborative research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="card-elegant group">
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${stat.bgColor} transition-smooth group-hover:scale-110`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                
                <div className="space-y-2">
                  <div className={`text-4xl font-bold ${stat.color}`}>
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-foreground">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-card shadow-card">
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-muted-foreground">Live updates every 5 minutes</span>
              </div>
              <div className="text-muted-foreground">|</div>
              <div className="text-muted-foreground">
                Last updated: <span className="font-medium">2 minutes ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;