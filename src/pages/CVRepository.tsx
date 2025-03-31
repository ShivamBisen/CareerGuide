import React, { useState } from 'react';
import Navbar from "../components/Navbar";

const CVRepository = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedCompanyType, setSelectedCompanyType] = useState('');
  const [selectedCV, setSelectedCV] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cvProfiles = [
    {
      name: "Jakkinapalli Satya Ravi Sujit",
      rollNumber: "21IM3FP10",
      department: "Industrial Engineering",
      specialization: "Financial Engineering, Entrepreneurship & Innovation, Artificial Intelligence & Applications",
      status: "INTERN",
      company: "Boston Consulting Group (BCG)",
      role: "Summer Associate (SA)",
      recruitmentMode: "CDC",
      batch: "2021",
      contact: {
        email: "sujit.jakkinapalli@iitkgp.ac.in",
        mobile: "Not Available",
        linkedin: "https://www.linkedin.com/in/jsr-sujit-525625223/"
      },
      cvUrl: "assets/images/cvs/Sujit_Jakkinapalli_CV.pdf"
    },
    {
      name: "Mupparaju Venkata Sai Varun",
      rollNumber: "22CS10044",
      department: "Computer Science",
      specialization: "B.Tech 4Y",
      status: "INTERN",
      company: "Samsung",
      role: "Intern",
      recruitmentMode: "CDC",
      batch: "2022",
      contact: {
        email: "varunmupparaju007@gmail.com",
        mobile: "8977249490",
        linkedin: "https://www.linkedin.com/in/venkata-sai-varun-mupparaju-916066309/"
      },
      cvUrl: "assets/images/cvs/MUPPARAJU VENKATA SAI VARUN CV.pdf"
    },
    {
      name: "Aditya Nandy",
      rollNumber: "21EE3FP52",
      department: "Electrical Engineering",
      specialization: "FP",
      status: "INTERN",
      company: "Amex",
      role: "Analyst",
      recruitmentMode: "On Campus Placement",
      batch: "2021",
      contact: {
        email: "adityanandy2802@gmail.com",
        mobile: "8697228157",
        linkedin: "https://www.linkedin.com/in/adityanandy28"
      },
      cvUrl: "assets/images/cvs/AdityaNandyCV-Data - Aditya Nandy.pdf"
    },
    {
      name: "Pamulapati Dhanush",
      rollNumber: "22EC10051",
      department: "Electronics and Electrical Communication Engineering",
      specialization: "EECE",
      status: "INTERN",
      company: "Morgan Stanley",
      role: "Intern",
      recruitmentMode: "On Campus Placement",
      batch: "2022",
      contact: {
        email: "Dhanushpamulapati@gmail.com",
        mobile: "6366158576",
        linkedin: "https://www.linkedin.com/in/dhanush-pamulapati-952505156/"
      },
      cvUrl: "assets/images/cvs/cvGenerate (4) - Dhanush Pamulapati.pdf"
    },
    {
      name: "Sarnab Banerjee",
      rollNumber: "21MF10054",
      department: "Mechanical Engineering",
      specialization: "Manufacturing Science and Engineering",
      status: "PLACED",
      company: "ICICI Bank",
      role: "Management Trainee",
      recruitmentMode: "On Campus Placement",
      batch: "2021",
      contact: {
        email: "sarnabbanerjee02@gmail.com",
        mobile: "9830149045",
        linkedin: "https://www.linkedin.com/in/sarnab-banerjee-28a9a5223/"
      },
      cvUrl: "assets/images/cvs/CV_2_Sarnab_Banerjee.pdf"
    },
    {
      name: "Yesilanka Sree Aryan",
      rollNumber: "22MI10064",
      department: "Mining Engineering",
      specialization: "Nil",
      status: "INTERN",
      company: "NATION WITH NAMO",
      role: "Intern",
      recruitmentMode: "CDC",
      batch: "2022",
      contact: {
        email: "aryan.yesilanka.iitkgp@gmail.com",
        mobile: "915440291",
        linkedin: "https://www.linkedin.com/in/yesilanka/"
      },
      cvUrl: "assets/images/cvs/yesilanka sree aryan cv.pdf"
    },
    {
      name: "Kartheek Valeti",
      rollNumber: "21CE10077",
      department: "Civil Engineering",
      specialization: "Civil Engineering",
      status: "PLACED",
      company: "BPCL",
      role: "Management Trainee",
      recruitmentMode: "On Campus Placement",
      batch: "2021",
      contact: {
        email: "kartheekvaleti.science@gmail.com",
        mobile: "9182959125",
        linkedin: "https://www.linkedin.com/in/kartheekvaleti"
      },
      cvUrl: "assets/images/cvs/Kartheek_Valeti_CV.pdf"
    },
    {
      name: "Piyush Mohanty",
      rollNumber: "22CH10082",
      department: "Department of Chemical Engineering",
      specialization: "Chemical Engineering",
      status: "INTERN",
      company: "Reliance Industries Limited",
      role: "Graduate Engineering Trainee",
      recruitmentMode: "On Campus Placement",
      batch: "2022",
      contact: {
        email: "piyushmohanty2004@gmail.com",
        mobile: "6371142464",
        linkedin: "https://www.linkedin.com/in/piyush-mohanty-324176256"
      },
      cvUrl: "assets/images/cvs/Piyush_Mohanty_CV.pdf"
    },
    {
      name: "Bhumi Tayal",
      rollNumber: "21ME10021",
      department: "Mechanical Engineering",
      status: "Placed",
      company: "Flipkart",
      role: "Business Analyst",
      recruitmentMode: "On Campus Placement",
      linkedinUrl: "https://www.linkedin.com/in/bhumi-tayal-725913226",
      email: "bhumitayal15@gmail.com",
      phone: "7684067297",
      cvUrl: "assets/images/cvs/Bhumi_Tayal_CV.pdf"
    },
    {
      name: "Tadiparthi Adarsh",
      rollNumber: "22EE10074",
      department: "Electrical Engineering",
      status: "Intern",
      company: "Zepto",
      role: "Software Engineering",
      recruitmentMode: "On Campus Placement",
      linkedinUrl: "https://www.linkedin.com/in/adarsh-tadiparthi",
      email: "adarshtadiparthi30@gmail.com",
      phone: "9390004880",
      cvUrl: "assets/images/cvs/Tadiparthi_Adarsh_CV.pdf"
    },
    {
      name: "Nishanth Reddy Chinnapatlola",
      rollNumber: "21EC10014",
      department: "Electronics and Electrical Communication Engineering",
      status: "Placed",
      company: "Nvidia",
      role: "ASIC Engineer",
      recruitmentMode: "On Campus Placement",
      linkedinUrl: "https://www.linkedin.com/in/nishanth-reddy-b1a385229",
      email: "nishanthreddyc12@gmail.com",
      phone: "9392785866",
      cvUrl: "assets/images/cvs/Nishanth_Reddy_CV.pdf"
    },
    {
      name: "S Rishikesh Reddy",
      rollNumber: "21IM10047",
      department: "Industrial and Systems Engineering",
      status: "Placed",
      company: "Capital One",
      role: "SDE",
      recruitmentMode: "On Campus Placement",
      linkedinUrl: "https://www.linkedin.com/in/rishikesh-reddy-sudi-reddy-a85a30289",
      email: "fyu65ht@gmail.com",
      phone: "6305650435",
      cvUrl: "assets/images/cvs/Rishikesh_Reddy_CV.pdf"
    }
  ];

  const departments = [
    'All Departments',
    'Electrical Engineering',
    'Electronics and Electrical Communication Engineering',
    'Mechanical Engineering',
    'Mining Engineering',
    'Computer Science',
    'Chemical Engineering',
    'Industrial Engineering'
  ];
  const companyTypes = [
    'All Companies', 
    'Consulting', 
    'Tech', 
    'Core', 
    'Finance', 
    'FMCG',
    'Banking'
  ];

  const filteredProfiles = cvProfiles.filter(profile => {
    const matchesSearch = searchQuery === '' || 
      profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.department.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesDepartment = selectedDepartment === '' || selectedDepartment === 'All Departments' || 
      profile.department === selectedDepartment;

    const matchesCompanyType = selectedCompanyType === '' || selectedCompanyType === 'All Companies' || 
      (selectedCompanyType === 'Consulting' && profile.company.includes('Consulting')) ||
      (selectedCompanyType === 'Tech' && (profile.company.includes('Samsung') || profile.company.includes('Morgan Stanley'))) ||
      (selectedCompanyType === 'Core' && (profile.company.includes('BPCL') || profile.company.includes('Reliance'))) ||
      (selectedCompanyType === 'Finance' && profile.company.includes('Morgan Stanley')) ||
      (selectedCompanyType === 'FMCG' && profile.company.includes('BPCL')) ||
      (selectedCompanyType === 'Banking' && profile.company.includes('Bank'));

    return matchesSearch && matchesDepartment && matchesCompanyType;
  });

  const handleViewCV = (cvUrl: string) => {
    // Use the full path from assets/images/cvs
    setSelectedCV(cvUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCV(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-medium tracking-tight text-gray-900 mb-4">
              Our KGPians CV Repository
            </h1>
            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
              Curated collection of successful KGPians and get their mentorship for your career
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <div className="flex flex-wrap gap-4">
              <input
                type="text"
                placeholder="Search by name, company, role, or department..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 min-w-[300px] px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <select 
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
              <select
                value={selectedCompanyType}
                onChange={(e) => setSelectedCompanyType(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {companyTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {filteredProfiles.map((profile, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-purple-200 transition-all hover:shadow-lg"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-medium text-gray-900 text-lg">{profile.name}</h3>
                      <p className="text-sm text-gray-500">{profile.rollNumber}</p>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      {profile.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Department</p>
                      <p className="text-sm font-medium text-gray-900">{profile.department}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Role</p>
                      <p className="text-sm font-medium text-gray-900">{profile.role}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Company</p>
                      <p className="text-sm font-medium text-gray-900">{profile.company}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Recruitment Mode</p>
                      <p className="text-sm font-medium text-gray-900">{profile.recruitmentMode}</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-4">
<div className="flex flex-wrap gap-3">
                      <a
                        href={`mailto:${profile.email || profile.contact?.email}`}
                        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-purple-600"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {profile.email || profile.contact?.email}
                      </a>
                      <a
                        href={`tel:${profile.phone || profile.contact?.mobile}`}
                        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-purple-600"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {profile.phone || profile.contact?.mobile}
                      </a>
                      <a
                        href={profile.linkedinUrl || profile.contact?.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-purple-600"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        LinkedIn
                      </a>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <button
                        onClick={() => handleViewCV(profile.cvUrl)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        View CV
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* PDF Viewer Modal */}
      {isModalOpen && selectedCV && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-[95vw] h-[95vh] overflow-hidden flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold">CV Preview</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex-1 overflow-hidden p-4">
              <iframe
                src={selectedCV}
                className="w-full h-full rounded-lg shadow-lg"
                title="CV Preview"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CVRepository; 