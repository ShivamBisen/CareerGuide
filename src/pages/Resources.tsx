import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import { databases } from '../data/databases';

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
    image: "/src/assets/images/competitions/BCG_Insights_Ideathon.jpg"
  },
  {
    name: "Google Summer of Code",
    organizer: "Google",
    eligibility: "Open to university students globally, 18 years and older.",
    details: "GSoC is a global program focused on bringing student developers into open source software development. Students work with mentoring organizations on 10-week programming projects during their break from university.",
    image: "/src/assets/images/competitions/GSoc.png"
  },
  {
    name: "NBC Idea Factory",
    organizer: "National Engineering Industries Ltd.",
    eligibility: "Open to pre-final and final year engineering students, teams of 2-4 members.",
    details: "This competition encourages engineering innovation with multiple rounds, including idea submission, mentorship, and final presentations. Winners receive cash prizes and pre-placement interview opportunities.",
    image: "/src/assets/images/competitions/Nbc.png"
  },
  {
    name: "PDMA Student Innovation Challenge",
    organizer: "Product Development and Management Association",
    eligibility: "Open to undergraduate and graduate students globally.",
    details: "A competition focused on product development and innovation management. Students develop solutions for real-world product challenges and present to industry experts.",
    image: "/src/assets/images/competitions/PDMA-Global-Student-Innovation-Challenge.png"
  },
  {
    name: "Hult Prize",
    organizer: "Hult International Business School",
    eligibility: "Open to university students globally, teams of 3-4 members.",
    details: "Known as the 'Nobel Prize for Students', this competition challenges participants to solve pressing social issues through entrepreneurship. Winners receive $1M in seed funding.",
    image: "/src/assets/images/competitions/Hult-Prize.png"
  },
  {
    name: "EY Techathon",
    organizer: "Ernst & Young (EY)",
    eligibility: "Open to undergraduate and postgraduate students from any discipline in India, teams of up to 5 members.",
    details: "EY Techathon emphasizes AI-based solutions for real-world problems in sectors like healthcare and finance. Participants receive mentorship and access to EY technologies. Winners secure cash prizes and potential internships.",
    image: "/src/assets/images/competitions/EY-Techathon.jpg"
  },
  {
    name: "HackWithInfy",
    organizer: "Infosys",
    eligibility: "Open to pre-final and final year engineering students across India.",
    details: "HackWithInfy is Infosys's nationwide hackathon for engineering students. It offers a platform to showcase coding skills, solve real-world problems, and potentially secure a job opportunity with Infosys.",
    image: "/src/assets/images/competitions/hackwithinfy.jpg"
  },
  {
    name: "Microsoft Imagine Cup",
    organizer: "Microsoft",
    eligibility: "Open to undergraduate students globally, teams of up to 4 members.",
    details: "Imagine Cup fosters innovation by encouraging participants to develop tech solutions for global challenges using Microsoft tools like Azure and AI platforms. Winners receive cash prizes, mentorship, and global recognition.",
    image: "/src/assets/images/competitions/Microsoft-imagine-cup.png"
  },
  {
    name: "Tata Imagination Challenge",
    organizer: "Tata Group",
    eligibility: "Open to college and postgraduate students across India, individual participants or teams.",
    details: "This competition invites impactful ideas that can drive positive change in society. Participants undergo rounds including online assessments, video pitches, and leader interactions with Tata executives. Winners receive cash prizes, mentorship opportunities, and accelerated entry into Tata's leadership development programs.",
    image: "/src/assets/images/competitions/Tata-Imagination-challenge.png"
  },
  {
    name: "Accenture Innovation Challenge",
    organizer: "Accenture",
    eligibility: "Open to STEM undergraduate students globally, teams of up to 5 members.",
    details: "This competition focuses on creating technology-driven solutions for sustainability, healthcare, or education challenges. Participants prototype ideas using Accenture's innovation labs and tools while competing for funding and internship opportunities.",
    image: "/src/assets/images/competitions/accenture-innovation-challenge.png"
  },
  {
    name: "Cisco Global Problem Solver Challenge",
    organizer: "Cisco",
    eligibility: "Open to undergraduate students globally, teams of 1-5 members or startups led by students.",
    details: "Cisco's challenge awards up to $100,000 for tech solutions addressing social issues such as healthcare access or economic empowerment. Proposals are judged on scalability, technical merit, and community impact.",
    image: "/src/assets/images/competitions/Global-Problem-Solver.png"
  },
  {
    name: "IBM Call for Code",
    organizer: "IBM",
    eligibility: "Open to developers, students, and problem solvers globally.",
    details: "Call for Code challenges developers to create practical, effective, and high-quality applications based on cloud, data, and artificial intelligence that can have an immediate and lasting impact.",
    image: "/src/assets/images/competitions/IBM_Call_for_Code.png"
  },
  {
    name: "JPMorgan Code for Good",
    organizer: "JPMorgan Chase",
    eligibility: "Open to undergraduate students in technology-related fields.",
    details: "A 24-hour coding challenge where participants work in teams to solve real-world problems for non-profit organizations using technology.",
    image: "/src/assets/images/competitions/JPMorganCodeforGood.png"
  }
];

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState<string>('All');
  const [selectedUniversity, setSelectedUniversity] = useState<string>('All');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [selectedCompetition, setSelectedCompetition] = useState<Competition | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get the IIM Professor Database
  const professorDatabase = databases[0];
  const professorData = professorDatabase?.data || [];

  // Get unique values for filters
  const domains = ['All', ...new Set(professorData.map(item => item.domain))].sort();
  const universities = ['All', ...new Set(professorData.map(item => item.university))].sort();
  const departments = ['All', ...new Set(professorData.map(item => item.department))].sort();

  const filteredData = professorData.filter(item => {
    if (!item) return false;
    
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = !searchQuery || 
      (item.name && item.name.toLowerCase().includes(searchLower)) ||
      (item.email && item.email.toLowerCase().includes(searchLower)) ||
      (item.domain && item.domain.toLowerCase().includes(searchLower)) ||
      (item.department && item.department.toLowerCase().includes(searchLower));
    
    const matchesDomain = selectedDomain === 'All' || item.domain === selectedDomain;
    const matchesUniversity = selectedUniversity === 'All' || item.university === selectedUniversity;
    const matchesDepartment = selectedDepartment === 'All' || item.department === selectedDepartment;

    return matchesSearch && matchesDomain && matchesUniversity && matchesDepartment;
  });

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedDomain, selectedUniversity, selectedDepartment]);

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
              Global Academic Directory
            </h1>
            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
              Comprehensive database of professors and faculty members from leading business schools worldwide
            </p>
          </div>

          {/* Advanced Filters Section */}
          <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
            <div className="space-y-4">
              {/* Search Bar */}
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                  Search
                </label>
                <input
                  id="search"
                  type="text"
                  placeholder="Search by name, email, domain, or department..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
              
              {/* Filter Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* University Filter */}
                <div>
                  <label htmlFor="university" className="block text-sm font-medium text-gray-700 mb-1">
                    University
                  </label>
                  <select
                    id="university"
                    value={selectedUniversity}
                    onChange={(e) => setSelectedUniversity(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  >
                    {universities.map(university => (
                      <option key={university} value={university}>{university}</option>
                    ))}
                  </select>
                </div>

                {/* Domain Filter */}
                <div>
                  <label htmlFor="domain" className="block text-sm font-medium text-gray-700 mb-1">
                    Domain
                  </label>
                  <select
                    id="domain"
                    value={selectedDomain}
                    onChange={(e) => setSelectedDomain(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  >
                    {domains.map(domain => (
                      <option key={domain} value={domain}>{domain}</option>
                    ))}
                  </select>
                </div>

                {/* Department Filter */}
                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                    Department
                  </label>
                  <select
                    id="department"
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  >
                    {departments.map(department => (
                      <option key={department} value={department}>{department}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Filter Actions */}
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  Found {filteredData.length} professors
                </div>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedDomain('All');
                    setSelectedUniversity('All');
                    setSelectedDepartment('All');
                  }}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Clear filters
                </button>
              </div>
            </div>
          </div>

          {/* Database Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Professor Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact Info
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      University
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Domain
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Department
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {paginatedData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.profile_url ? (
                          <a 
                            href={item.profile_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-purple-600"
                          >
                            {item.name}
                          </a>
                        ) : (
                          item.name
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex flex-col gap-1">
                          {item.email && (
                            <a 
                              href={`mailto:${item.email}`}
                              className="flex items-center gap-1 text-purple-600 hover:text-purple-900"
                              title="Send email"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              {item.email}
                            </a>
                          )}
                          {item.phone && (
                            <a 
                              href={`tel:${item.phone}`}
                              className="flex items-center gap-1 text-purple-600 hover:text-purple-900"
                              title="Call"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              {item.phone}
                            </a>
                          )}
                          {item.profile_url && (
                            <a 
                              href={item.profile_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-purple-600 hover:text-purple-900"
                              title="View profile"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              Profile
                            </a>
                          )}
                          {!item.email && !item.phone && !item.profile_url && (
                            <span className="text-gray-400 flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              Not available
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.university}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.domain}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.department}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredData.length)} of {filteredData.length} entries
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className={`px-3 py-1 rounded ${
                    currentPage === 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-purple-50 text-purple-600 hover:bg-purple-100'
                  }`}
                >
                  Previous
                </button>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-1 rounded ${
                    currentPage === totalPages
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-purple-50 text-purple-600 hover:bg-purple-100'
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* Competitions and Conferences */}
          <div className="mt-16">
            <h2 className="text-2xl font-medium text-gray-900 mb-8">Upcoming Competitions & Conferences</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {competitions.map((competition, index) => (
                <article 
                  key={index} 
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => openModal(competition)}
                >
                  <div className="relative h-48">
                    <img 
                      src={competition.image} 
                      alt={competition.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900 text-center">
                      {competition.name}
                    </h3>
                  </div>
                </article>
              ))}
              {/* More Coming Soon Section */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-sm overflow-hidden flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="mb-4">
                    <svg className="w-12 h-12 text-purple-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">More Coming Soon</h3>
                  <p className="text-gray-600">Stay tuned for more exciting competitions and opportunities!</p>
                </div>
              </div>
            </div>
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

export default Resources; 