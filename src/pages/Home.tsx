import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Empowering KGPians:</span>
            <span className="block text-purple-600">Your Career Compass</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Navigate your professional journey with expert guidance, curated resources, and mentorship from accomplished alumni.
          </p>
        </div>
      </div>

      <div className="text-center mb-12">
        <div className="flex justify-center gap-4">
          <Link to="/roadmaps">
            <Button size="lg">
              Explore Career Roadmaps
            </Button>
          </Link>
          <Link to="/documents">
            <Button size="lg" variant="outline">
              Build Your CV
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="text-center p-6">
          <h3 className="text-xl font-semibold mb-3">Career Roadmaps</h3>
          <p className="text-gray-600">
            Explore detailed career paths and get guidance on your professional journey.
          </p>
        </div>
        <div className="text-center p-6">
          <h3 className="text-xl font-semibold mb-3">CV Builder</h3>
          <p className="text-gray-600">
            Create professional CVs with our templates and easy-to-use editor.
          </p>
        </div>
        <div className="text-center p-6">
          <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
          <p className="text-gray-600">
            Get support from our team of career guidance experts and professionals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home; 