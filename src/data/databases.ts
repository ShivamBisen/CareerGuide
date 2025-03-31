import professorData from './foreignuniversitydata.json';

export interface DatabaseEntry {
  title: string;
  excerpt: string;
  category: string;
  type: string;
  entries: string;
  image: string;
  website: string;
  data?: {
    name: string;
    email: string;
    phone?: string;
    domain: string;
    university: string;
    department: string;
    profile_url?: string;
    research_areas?: string;
  }[];
}

// Convert JSON data to the required format
const convertProfessorData = () => {
  const data: any[] = [];
  Object.entries(professorData).forEach(([university, professors]) => {
    (professors as any[]).forEach(prof => {
      data.push({
        name: prof.name,
        email: prof.email,
        domain: JSON.parse(prof.research_areas || '[""]')[0],
        university: prof.college,
        department: prof.department,
        profile_url: prof.profile_url
      });
    });
  });
  return data;
};

export const databases: DatabaseEntry[] = [
  {
    title: "Global Academic Directory",
    excerpt: "Comprehensive database of professors and faculty members from leading business schools worldwide",
    category: "Academic",
    type: "Faculty",
    entries: "200+ Professors",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    website: "#",
    data: convertProfessorData()
  }
]; 