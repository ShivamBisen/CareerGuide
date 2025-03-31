import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Roadmaps = () => {
  const roadmaps = [
    {
      title: 'Software Development',
      description: 'Learn the path to becoming a software developer, from basics to advanced topics.',
      steps: [
        'Learn Programming Fundamentals',
        'Master Data Structures & Algorithms',
        'Choose Your Tech Stack',
        'Build Projects',
        'Prepare for Interviews'
      ]
    },
    {
      title: 'Data Science',
      description: 'Explore the journey to becoming a data scientist and machine learning expert.',
      steps: [
        'Statistics & Mathematics',
        'Programming with Python',
        'Data Analysis & Visualization',
        'Machine Learning',
        'Deep Learning & AI'
      ]
    },
    {
      title: 'Product Management',
      description: 'Discover how to become a successful product manager in tech.',
      steps: [
        'Product Strategy',
        'User Experience',
        'Technical Knowledge',
        'Business Skills',
        'Leadership'
      ]
    }
  ];

  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Career Roadmaps</h1>
        <p className="text-xl text-gray-600">
          Follow our detailed roadmaps to guide your career journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {roadmaps.map((roadmap, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{roadmap.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-600 mb-4">{roadmap.description}</p>
              <ol className="list-decimal list-inside space-y-2">
                {roadmap.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="text-gray-700">{step}</li>
                ))}
              </ol>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Roadmaps; 