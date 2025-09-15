import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, BookOpen, MessageCircle, Calendar, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';

const hotTopics = [
  {
    title: 'AI in Climate Change Research',
    category: 'AI & Environment',
    engagement: 342,
    trending: true,
  },
  {
    title: 'Quantum Computing Breakthroughs',
    category: 'Physics',
    engagement: 289,
    trending: true,
  },
  {
    title: 'Gene Editing Ethics',
    category: 'Biology',
    engagement: 256,
    trending: false,
  },
  {
    title: 'Sustainable Energy Solutions',
    category: 'Engineering',
    engagement: 198,
    trending: false,
  },
];

const recentActivities = [
  {
    type: 'collaboration',
    title: 'New collaboration request from Dr. Smith',
    time: '2 hours ago',
    icon: Users,
  },
  {
    type: 'paper',
    title: 'Your paper "AI in Healthcare" was approved',
    time: '1 day ago',
    icon: BookOpen,
  },
  {
    type: 'message',
    title: '3 new messages from research partners',
    time: '2 days ago',
    icon: MessageCircle,
  },
  {
    type: 'event',
    title: 'Virtual Research Conference next week',
    time: '3 days ago',
    icon: Calendar,
  },
];

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-heading mb-2">
            Welcome back, {user?.name?.split(' ')[0]}!
          </h1>
          <p className="text-muted-foreground">
            Here's what's happening in your research network today.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="card-elegant">
            <CardContent className="flex items-center p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{user?.posts || 0}</p>
                <p className="text-sm text-muted-foreground">Published Papers</p>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elegant">
            <CardContent className="flex items-center p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-green-500/10 rounded-lg mr-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{user?.collaborations || 0}</p>
                <p className="text-sm text-muted-foreground">Active Collaborations</p>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elegant">
            <CardContent className="flex items-center p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-500/10 rounded-lg mr-4">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">124</p>
                <p className="text-sm text-muted-foreground">Citations</p>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elegant">
            <CardContent className="flex items-center p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-500/10 rounded-lg mr-4">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">92%</p>
                <p className="text-sm text-muted-foreground">Profile Score</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Hot Topics */}
          <Card className="card-elegant">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span>Hot Topics</span>
              </CardTitle>
              <Button variant="outline" size="sm" asChild>
                <Link to="/hot-topics">View All</Link>
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {hotTopics.map((topic, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-smooth">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-medium">{topic.title}</h4>
                      {topic.trending && (
                        <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-700">
                          Trending
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{topic.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{topic.engagement}</p>
                    <p className="text-xs text-muted-foreground">discussions</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-smooth">
                  <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full flex-shrink-0">
                    <activity.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{activity.title}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
              
              <Button variant="outline" className="w-full" asChild>
                <Link to="/activity">View All Activity</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="card-elegant mt-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button className="btn-hero justify-center" asChild>
                <Link to="/publish">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Publish Research
                </Link>
              </Button>
              
              <Button variant="outline" className="justify-center" asChild>
                <Link to="/collaborators">
                  <Users className="w-4 h-4 mr-2" />
                  Find Collaborators
                </Link>
              </Button>
              
              <Button variant="outline" className="justify-center" asChild>
                <Link to="/messages">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Messages
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;