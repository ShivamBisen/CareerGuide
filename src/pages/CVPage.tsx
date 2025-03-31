import React from 'react';
import { useParams } from 'react-router-dom';
import CVTemplate from '../components/CVTemplate';

const CVPage: React.FC = () => {
    const { institute = 'iitb' } = useParams<{ institute?: string }>();

    return (
        <div className="min-h-screen bg-background">
            <CVTemplate institute={institute} />
        </div>
    );
};

export default CVPage; 