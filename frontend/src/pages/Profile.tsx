import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  Mail, 
  MapPin, 
  Calendar, 
  BookOpen, 
  Users, 
  Award, 
  Edit3,
  Settings,
  Download
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';

const Profile: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/signin');
    return null;
  }

  const stats = [
    { label: 'Published Papers', value: user.posts, icon: BookOpen, color: 'text-blue-600' },
    { label: 'Collaborations', value: user.collaborations, icon: Users, color: 'text-green-600' },
    { label: 'Citations', value: 124, icon: Award, color: 'text-orange-600' },
    { label: 'Profile Views', value: 1847, icon: User, color: 'text-purple-600' },
  ];

  const recentPapers = [
    {
      title: 'AI Applications in Climate Research',
      journal: 'Nature Climate Change',
      date: '2024-03-15',
      citations: 45,
    },
    {
      title: 'Machine Learning for Sustainable Energy',
      journal: 'Energy Policy Journal',
      date: '2024-02-10',
      citations: 32,
    },
    {
      title: 'Data Analysis in Environmental Science',
      journal: 'Environmental Research',
      date: '2024-01-20',
      citations: 28,
    },
  ];

  const collaborators = [
    {
      name: 'Dr. Michael Chen',
      institution: 'Stanford University',
      field: 'AI Research',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face',
    },
    {
      name: 'Prof. Sarah Williams',
      institution: 'MIT',
      field: 'Climate Science',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b69a7726?w=60&h=60&fit=crop&crop=face',
    },
    {
      name: 'Dr. James Rodriguez',
      institution: 'UC Berkeley',
      field: 'Data Science',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <Card className="card-elegant mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
              <Avatar className="w-32 h-32">
                <AvatarImage src={user.avatar} />
                <AvatarFallback className="text-4xl bg-primary text-primary-foreground">
                  {user.name.charAt(0)}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold font-heading mb-2">{user.name}</h1>
                    <div className="flex items-center space-x-4 text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <Mail className="w-4 h-4" />
                        <span>{user.email}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>San Francisco, CA</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>Joined March 2024</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Edit3 className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Button>
                    <Button variant="outline" size="sm">
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </Button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">AI Research</Badge>
                  <Badge variant="secondary">Climate Science</Badge>
                  <Badge variant="secondary">Data Analysis</Badge>
                  <Badge variant="secondary">Machine Learning</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="card-elegant">
              <CardContent className="flex items-center p-6">
                <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 mr-4`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Papers */}
          <Card className="card-elegant">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Publications</CardTitle>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export CV
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentPapers.map((paper, index) => (
                <div key={index} className="p-4 rounded-lg border bg-card hover:bg-muted/50 transition-smooth">
                  <h4 className="font-semibold mb-2">{paper.title}</h4>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{paper.journal}</span>
                    <span>{paper.date}</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <Badge variant="outline">{paper.citations} citations</Badge>
                    <Button variant="ghost" size="sm">View Paper</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Collaborators */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>Recent Collaborators</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {collaborators.map((collaborator, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-smooth">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={collaborator.avatar} />
                    <AvatarFallback>{collaborator.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold">{collaborator.name}</h4>
                    <p className="text-sm text-muted-foreground">{collaborator.institution}</p>
                    <Badge variant="outline" className="text-xs mt-1">{collaborator.field}</Badge>
                  </div>
                  <Button variant="outline" size="sm">
                    Message
                  </Button>
                </div>
              ))}
              
              <Button variant="outline" className="w-full">
                View All Collaborators
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;