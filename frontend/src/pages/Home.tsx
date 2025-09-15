import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import HowToConnectSection from '@/components/home/HowToConnectSection';
import PostResearchSection from '@/components/home/PostResearchSection';
import CollaborationSection from '@/components/home/CollaborationSection';
import InternshipSection from '@/components/home/InternshipSection';
import StatsSection from '@/components/home/StatsSection';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowToConnectSection />
      <PostResearchSection />
      <CollaborationSection />
      <InternshipSection />
      <StatsSection />
    </div>
  );
};

export default Home;