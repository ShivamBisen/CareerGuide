import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Team = () => {
  const teamMembers = [
    {
      name: 'Team Member 1',
      role: 'Career Counselor',
      description: 'Experienced career counselor specializing in tech careers.',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Team Member 2',
      role: 'CV Expert',
      description: 'Professional CV writer with 10+ years of experience.',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Team Member 3',
      role: 'Industry Expert',
      description: 'Former tech industry recruiter helping students succeed.',
      image: 'https://via.placeholder.com/150'
    }
  ];

  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Team</h1>
        <p className="text-xl text-gray-600">
          Meet our experienced team of career guidance professionals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardTitle className="text-center">{member.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="font-medium text-gray-600 mb-2">{member.role}</p>
              <p className="text-gray-600">{member.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Team; 