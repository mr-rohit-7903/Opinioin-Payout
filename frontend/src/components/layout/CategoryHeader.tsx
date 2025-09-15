import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

const categories = [
  { id: 'ai', name: 'AI & Machine Learning', color: 'bg-blue-500' },
  { id: 'physics', name: 'Physics', color: 'bg-purple-500' },
  { id: 'biology', name: 'Biology', color: 'bg-green-500' },
  { id: 'chemistry', name: 'Chemistry', color: 'bg-orange-500' },
  { id: 'mathematics', name: 'Mathematics', color: 'bg-red-500' },
  { id: 'psychology', name: 'Psychology', color: 'bg-pink-500' },
  { id: 'sociology', name: 'Sociology', color: 'bg-indigo-500' },
  { id: 'economics', name: 'Economics', color: 'bg-yellow-500' },
  { id: 'medicine', name: 'Medicine', color: 'bg-teal-500' },
  { id: 'engineering', name: 'Engineering', color: 'bg-gray-500' },
];

const CategoryHeader: React.FC = () => {
  const location = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);

  const isActiveCategory = (categoryId: string) => {
    return location.pathname === `/category/${categoryId}`;
  };

  const scrollLeft = () => {
    const container = document.getElementById('category-scroll');
    if (container) {
      container.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('category-scroll');
    if (container) {
      container.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="border-b bg-card/50 backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollLeft}
            className="hidden sm:flex shrink-0 mr-2"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <ScrollArea className="flex-1">
            <div 
              id="category-scroll"
              className="flex space-x-6 pb-2"
            >
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/category/${category.id}`}
                  className={`flex-shrink-0 flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-smooth ${
                    isActiveCategory(category.id)
                      ? 'bg-primary text-primary-foreground shadow-primary'
                      : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${category.color}`} />
                  <span className="whitespace-nowrap">{category.name}</span>
                </Link>
              ))}
            </div>
          </ScrollArea>

          <Button
            variant="ghost"
            size="sm"
            onClick={scrollRight}
            className="hidden sm:flex shrink-0 ml-2"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategoryHeader;