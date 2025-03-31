import React, { useState } from 'react';
import Navbar from "../components/Navbar";

interface Competition {
  name: string;
  organizer: string;
  eligibility: string;
  details: string;
  image: string;
}

const competitions: Competition[] = [
  {
    name: "BCG Bruce Henderson Ideathon",
    organizer: "Boston Consulting Group (BCG)",
    eligibility: "Open to undergraduate and postgraduate students globally, typically teams of 3-4 members.",
    details: "The Ideathon focuses on solving complex business problems through innovative thinking. Participants propose solutions to open-ended challenges and present them to senior BCG leaders. Winners often gain internship opportunities and exposure to consulting methodologies.",
    image: "assets/images/competitions/bcg.png"
  },
  {
    name: "EY Techathon",
    organizer: "Ernst & Young (EY)",
    eligibility: "Open to undergraduate and postgraduate students from any discipline in India, teams of up to 5 members.",
    details: "EY Techathon emphasizes AI-based solutions for real-world problems in sectors like healthcare and finance. Participants receive mentorship and access to EY technologies. Winners secure cash prizes and potential internships.",
    image: "assets/images/competitions/ey.png"
  },
  {
    name: "NBC Idea Factory",
    organizer: "National Engineering Industries Ltd.",
    eligibility: "Open to pre-final and final year engineering students, teams of 2-4 members.",
    details: "This competition encourages engineering innovation with multiple rounds, including idea submission, mentorship, and final presentations. Winners receive cash prizes and pre-placement interview opportunities.",
    image: "assets/images/competitions/nbc.png"
  },
  {
    name: "Hult Prize",
    organizer: "Hult International Business School",
    eligibility: "Open to undergraduate and graduate students globally, teams of 3-4 members.",
    details: "Known as the \"Nobel Prize for students,\" the Hult Prize challenges participants to create social enterprises addressing global issues such as food security or renewable energy. Winners receive $1 million in seed funding for their ventures.",
    image: "assets/images/competitions/hult.png"
  },
  {
    name: "Microsoft Imagine Cup",
    organizer: "Microsoft",
    eligibility: "Open to undergraduate students globally, teams of up to 4 members.",
    details: "Imagine Cup fosters innovation by encouraging participants to develop tech solutions for global challenges using Microsoft tools like Azure and AI platforms. Winners receive cash prizes, mentorship, and global recognition.",
    image: "assets/images/competitions/microsoft.png"
  },
  {
    name: "Tata Imagination Challenge",
    organizer: "Tata Group",
    eligibility: "Open to college and postgraduate students across India, individual participants or teams.",
    details: "This competition invites impactful ideas that can drive positive change in society. Participants undergo rounds including online assessments, video pitches, and leader interactions with Tata executives. Winners receive cash prizes, mentorship opportunities, and accelerated entry into Tata's leadership development programs.",
    image: "assets/images/competitions/tata.png"
  },
  {
    name: "PDMA Global Student Innovation Challenge",
    organizer: "Product Development & Management Association (PDMA)",
    eligibility: "Open to undergraduate and graduate students globally, teams or individuals.",
    details: "PDMA invites students to develop real-world applications for novel products or services. Participants receive feedback from industry experts during virtual conferences, with winners sharing prize money and gaining exposure to innovation frameworks.",
    image: "assets/images/competitions/pdma.png"
  },
  {
    name: "Accenture Innovation Challenge",
    organizer: "Accenture",
    eligibility: "Open to STEM undergraduate students globally, teams of up to 5 members.",
    details: "This competition focuses on creating technology-driven solutions for sustainability, healthcare, or education challenges. Participants prototype ideas using Accenture's innovation labs and tools while competing for funding and internship opportunities.",
    image: "assets/images/competitions/accenture.png"
  },
  {
    name: "Cisco Global Problem Solver Challenge",
    organizer: "Cisco",
    eligibility: "Open to undergraduate students globally, teams of 1-5 members or startups led by students.",
    details: "Cisco's challenge awards up to $100,000 for tech solutions addressing social issues such as healthcare access or economic empowerment. Proposals are judged on scalability, technical merit, and community impact.",
    image: "assets/images/competitions/cisco.png"
  }
];

const Competitions = () => {
  const [selectedCompetition, setSelectedCompetition] = useState<Competition | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (competition: Competition) => {
    setSelectedCompetition(competition);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCompetition(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-medium tracking-tight text-gray-900 mb-4">
              Student Competitions
            </h1>
            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
              Explore prestigious competitions and challenges to showcase your talent and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competitions.map((competition, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-purple-200 transition-all hover:shadow-lg cursor-pointer"
                onClick={() => openModal(competition)}
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                  <img
                    src={competition.image}
                    alt={competition.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-medium text-gray-900 text-lg mb-2">{competition.name}</h3>
                  <p className="text-sm text-gray-500">{competition.organizer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Competition Details Modal */}
      {isModalOpen && selectedCompetition && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-2xl overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 bg-gray-100">
              <img
                src={selectedCompetition.image}
                alt={selectedCompetition.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    {selectedCompetition.name}
                  </h2>
                  <p className="text-lg text-gray-600">{selectedCompetition.organizer}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Eligibility</h3>
                  <p className="text-gray-600">{selectedCompetition.eligibility}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Details</h3>
                  <p className="text-gray-600">{selectedCompetition.details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Competitions; 