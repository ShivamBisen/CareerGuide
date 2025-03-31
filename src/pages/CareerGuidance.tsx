import React, { useState } from 'react';
import Navbar from "../components/Navbar";

const CareerGuidance = () => {
  const [selectedCareer, setSelectedCareer] = useState<string | null>(null);

  const sectors = [
    {
      name: "Information Technology (IT)",
      description: "Core technology roles focusing on software development, data, cloud, and security.",
      careers: [
        {
          title: "Software Engineer",
          description: "Design and develop software applications and systems.",
          stages: [
            {
              name: "Programming Fundamentals",
              skills: ["Python/Java", "Data Structures", "Algorithms", "Git Basics"],
              resources: [
                { name: "LeetCode", link: "https://leetcode.com/" },
                { name: "HackerRank", link: "https://www.hackerrank.com/" },
                { name: "CodeChef", link: "https://www.codechef.com/" },
                { name: "Harvard's CS50", link: "https://cs50.harvard.edu/x/" },
                { name: "freeCodeCamp Python", link: "https://www.freecodecamp.org/learn" }
              ]
            },
            {
              name: "Web Development",
              skills: ["HTML/CSS", "JavaScript", "React/Angular", "Node.js", "REST APIs"],
              resources: [
                { name: "freeCodeCamp", link: "https://www.freecodecamp.org/" },
                { name: "MDN Web Docs", link: "https://developer.mozilla.org/" },
                { name: "React Docs", link: "https://reactjs.org/docs/getting-started.html" },
                { name: "The Odin Project", link: "https://www.theodinproject.com/" },
                { name: "JavaScript.info", link: "https://javascript.info/" }
              ]
            },
            {
              name: "Backend Development",
              skills: ["Database Management", "Server Architecture", "API Design", "Authentication"],
              resources: [
                { name: "MongoDB University", link: "https://university.mongodb.com/" },
                { name: "PostgreSQL Tutorial", link: "https://www.postgresqltutorial.com/" },
                { name: "Node.js Backend (freeCodeCamp)", link: "https://www.freecodecamp.org/learn" },
                { name: "SQL for Data Science", link: "https://www.coursera.org/learn/sql-data-science" }
              ]
            },
            {
              name: "System Design",
              skills: ["Scalability", "Microservices", "Load Balancing", "Caching"],
              resources: [
                { name: "System Design Primer", link: "https://github.com/donnemartin/system-design-primer" },
                { name: "Grokking System Design", link: "https://www.educative.io/courses/grokking-the-system-design-interview" },
                { name: "Designing Data-Intensive Applications", link: "http://dataintensive.net/" },
                { name: "High Scalability Blog", link: "http://highscalability.com/" }
              ]
            }
          ]
        },
        {
          title: "Data Scientist",
          description: "Extract insights from data using statistical methods and machine learning.",
          stages: [
            {
              name: "Mathematics & Statistics",
              skills: ["Linear Algebra", "Calculus", "Probability", "Statistical Methods"],
              resources: [
                { name: "Khan Academy Statistics", link: "https://www.khanacademy.org/math/statistics-probability" },
                { name: "Statistics by Jim", link: "https://statisticsbyjim.com" },
                { name: "IBM Data Science Specialization", link: "https://www.coursera.org/specializations/introduction-data-science" },
                { name: "MIT Linear Algebra", link: "http://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/index.htm" }
              ]
            },
            {
              name: "Programming & Tools",
              skills: ["Python", "Pandas", "NumPy", "Jupyter Notebooks"],
              resources: [
                { name: "DataCamp Python Tutorials", link: "https://www.datacamp.com/community/tutorials/python-data-science-cheat-sheet-basics" },
                { name: "Kaggle Learn Python", link: "https://www.kaggle.com/learn/python" },
                { name: "Python for Everybody", link: "https://www.coursera.org/specializations/python" },
                { name: "NumPy Documentation", link: "https://numpy.org/doc/stable/user/tutorials.html" }
              ]
            },
            {
              name: "Machine Learning",
              skills: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation", "Feature Engineering"],
              resources: [
                { name: "Coursera Machine Learning", link: "https://www.coursera.org/learn/machine-learning" },
                { name: "FastAI Course", link: "http://course.fast.ai/ml.html" },
                { name: "Deep Learning Specialization", link: "https://www.coursera.org/specializations/deep-learning" },
                { name: "Hands-On Machine Learning", link: "http://shop.oreilly.com/product/0636920052289.do" }
              ]
            }
          ]
        },
        {
          title: "Cloud Architect",
          description: "Design and implement cloud infrastructure and solutions.",
          stages: [
            {
              name: "Cloud Fundamentals",
              skills: ["AWS/Azure/GCP Basics", "Networking", "Security", "Storage"],
              resources: [
                { name: "AWS Training", link: "https://aws.amazon.com/training/" },
                { name: "Azure Learn", link: "https://learn.microsoft.com/en-us/training/" },
                { name: "Google Cloud Skills Boost", link: "https://cloudskillsboost.google/" },
                { name: "AWS Certified Solutions Architect - Associate", link: "https://acloudguru.com/course/aws-certified-solutions-architect-associate" },
                { name: "Microsoft Azure Fundamentals AZ-900", link: "https://www.coursera.org/learn/microsoft-azure-fundamentals" },
                { name: "Google Cloud Fundamentals", link: "https://www.coursera.org/learn/gcp-fundamentals" },
                { name: "Networking in Google Cloud", link: "https://www.pluralsight.com/courses/google-cloud-networking" },
                { name: "Introduction to Cybersecurity", link: "https://www.edx.org/course/introduction-to-cybersecurity" }
              ]
            },
            {
              name: "Infrastructure as Code",
              skills: ["Terraform", "CloudFormation", "Docker", "Kubernetes"],
              resources: [
                { name: "Terraform Learn", link: "https://developer.hashicorp.com/terraform/learn" },
                { name: "Kubernetes Documentation", link: "https://kubernetes.io/docs/home/" },
                { name: "AWS CloudFormation Documentation", link: "https://aws.amazon.com/cloudformation/resources/" },
                { name: "HashiCorp Certified Terraform Associate", link: "https://www.udemy.com/course/terraform-beginner-to-advanced/" },
                { name: "Docker Essentials", link: "https://training.docker.com/courses/docker-essentials-self-paced-training" },
                { name: "Certified Kubernetes Administrator (CKA)", link: "https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/" },
                { name: "Kubernetes for Developers", link: "https://www.coursera.org/specializations/developing-apps-kubernetes" },
                { name: "AWS CloudFormation Masterclass", link: "https://www.udemy.com/course/aws-cloudformation-masterclass/" }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Finance & Consulting",
      description: "Strategic advisory and financial management roles helping organizations optimize performance and manage financial operations.",
      careers: [
        {
          title: "Management Consultant",
          description: "Help organizations improve performance and solve complex business challenges.",
          stages: [
            {
              name: "Business Fundamentals",
              skills: ["Business Strategy", "Financial Analysis", "Market Research", "Problem Solving"],
              resources: [
                { name: "Case Interview Prep", link: "https://www.caseinterview.com/" },
                { name: "BCG Insights", link: "https://www.bcg.com/publications" },
                { name: "Harvard Business School Online - CORe", link: "https://online.hbs.edu/courses/core/" },
                { name: "Business Strategy Specialization", link: "https://www.coursera.org/specializations/business-strategy" }
              ]
            },
            {
              name: "Consulting Skills",
              skills: ["Project Management", "Client Communication", "Presentation Skills", "Data Analysis"],
              resources: [
                { name: "McKinsey Insights", link: "https://www.mckinsey.com/featured-insights" },
                { name: "Consulting Prep", link: "https://www.consultingcase101.com/" },
                { name: "Management Consulting Essentials", link: "https://www.coursera.org/learn/management-consulting" },
                { name: "Data Analysis for Management", link: "https://www.edx.org/course/data-analysis-for-management" }
              ]
            }
          ]
        },
        {
          title: "Strategy Consultant",
          description: "Develop and implement strategic initiatives for organizations.",
          stages: [
            {
              name: "Strategic Planning",
              skills: ["Market Analysis", "Competitive Strategy", "Business Models", "Growth Strategy"],
              resources: [
                { name: "Strategy+Business", link: "https://www.strategy-business.com/" },
                { name: "Harvard Business Review", link: "https://hbr.org/" },
                { name: "Strategic Planning and Execution", link: "https://www.coursera.org/learn/strategic-planning-and-execution" },
                { name: "Free Strategic Planning Course", link: "https://www.oxfordhomestudy.com/courses/strategic-planning" },
                { name: "Performance Management and Strategic Planning", link: "https://alison.com/course/performance-management-and-strategic-planning" },
                { name: "The Consultant's Toolkit", link: "https://professional.dce.harvard.edu/programs/the-consultants-toolkit/" },
                { name: "Strategic Planning Skills", link: "https://www.udemy.com/topic/strategic-planning/" }
              ]
            }
          ]
        },
        {
          title: "Business Analyst",
          description: "Bridge the gap between business needs and technical solutions.",
          stages: [
            {
              name: "Business Analysis Fundamentals",
              skills: ["Requirements Gathering", "Process Modeling", "Stakeholder Management", "Documentation"],
              resources: [
                { name: "IIBA", link: "https://www.iiba.org/" },
                { name: "Business Analysis Body of Knowledge", link: "https://www.iiba.org/career-resources/a-business-analysis-professionals-foundation-for-success/babok/" }
              ],
              suggestedCourses: [
                { name: "Business Analysis Fundamentals", link: "https://www.udemy.com/course/business-analysis-fundamentals/" },
                { name: "Business Analyst Nanodegree", link: "https://www.udacity.com/course/business-analytics-nanodegree--nd098" },
                { name: "Introduction to Business Analysis", link: "https://www.linkedin.com/learning/introduction-to-business-analysis/" }
              ]
            }
          ]
        },
        {
          title: "Investment Banker",
          description: "Facilitate financial transactions and provide strategic financial advice.",
          stages: [
            {
              name: "Financial Markets",
              skills: ["Financial Modeling", "Valuation", "M&A", "Market Analysis"],
              resources: [
                { name: "Wall Street Prep", link: "https://www.wallstreetprep.com/" },
                { name: "Breaking Into Wall Street", link: "https://breakingintowallstreet.com/" }
              ],
              suggestedCourses: [
                { name: "Financial Modeling & Valuation Analyst (FMVA)", link: "https://corporatefinanceinstitute.com/certifications/fmva/" },
                { name: "Investment Banking Certification", link: "https://www.wallstreetprep.com/self-study-programs/basic-package/" },
                { name: "Breaking Into Wall Street Premium Package", link: "https://breakingintowallstreet.com/biws/" },
                { name: "M&A Professional Certificate Program", link: "https://www.edx.org/professional-certificate/new-york-institute-of-finance-mergers-and-acquisitions" }
              ]
            }
          ]
        },
        {
          title: "Financial Analyst",
          description: "Analyze financial data and provide insights for decision-making.",
          stages: [
            {
              name: "Financial Analysis",
              skills: ["Financial Statements", "Ratio Analysis", "Forecasting", "Excel Modeling"],
              resources: [
                { name: "CFA Institute", link: "https://www.cfainstitute.org/" },
                { name: "Financial Modeling Prep", link: "https://financialmodelingprep.com/" }
              ],
              suggestedCourses: [
                { name: "Chartered Financial Analyst (CFA) Program", link: "https://www.cfainstitute.org/en/programs/cfa" },
                { name: "Financial Statement Modeling Course", link: "https://www.wallstreetprep.com/self-study-programs/basic-package/" },
                { name: "Excel Skills for Business Specialization", link: "https://www.coursera.org/specializations/excel" },
                { name: "Financial Analyst Certification Program", link: "https://corporatefinanceinstitute.com/certifications/fmva/" }
              ]
            }
          ]
        },
        {
          title: "Risk Management Analyst",
          description: "Identify and manage financial risks for organizations.",
          stages: [
            {
              name: "Risk Management",
              skills: ["Risk Assessment", "Compliance", "Regulatory Requirements", "Risk Modeling"],
              resources: [
                { name: "GARP", link: "https://www.garp.org" },
                { name: "Risk.net", link: "https://www.risk.net" }
              ]
            }
          ]
        },
        {
          title: "Quantitative Analyst",
          description: "Develop mathematical models for financial analysis and trading.",
          stages: [
            {
              name: "Quantitative Finance",
              skills: ["Financial Mathematics", "Statistical Analysis", "Programming", "Derivatives"],
              resources: [
                { name: "Quantitative Finance Stack Exchange", link: "https://quant.stackexchange.com" },
                { name: "Financial Engineering", link: "https://www.financialengineering.org" }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Analytics",
      description: "Data-driven roles focusing on business intelligence and analytics.",
      careers: [
        {
          title: "Data Analyst",
          description: "Transform raw data into actionable insights for business decisions.",
          stages: [
            {
              name: "Data Analysis Fundamentals",
              skills: ["SQL", "Excel", "Data Visualization", "Statistical Analysis"],
              resources: [
                { name: "Mode Analytics SQL Tutorial", link: "https://mode.com/sql-tutorial/introduction-to-sql/" },
                { name: "Tableau Public Resources", link: "https://public.tableau.com/en-us/s/resources" }
              ],
              suggestedCourses: [
                { name: "Data Analysis Projects Using SQL, Power BI, Tableau & Excel", link: "https://www.udemy.com/course/data-analysis-projects-using-sql-power-bi-tableau-excel/" },
                { name: "Springboard Free Data Analytics Course", link: "https://www.springboard.com/resources/learning-paths/data-analysis/" }
              ]
            },
            {
              name: "Advanced Analytics",
              skills: ["Python", "R", "Power BI", "Business Intelligence"],
              resources: [
                { name: "DataCamp", link: "https://www.datacamp.com/" },
                { name: "Kaggle Learn", link: "https://www.kaggle.com/learn" }
              ]
            }
          ]
        },
        {
          title: "Business Intelligence Analyst",
          description: "Create and manage business intelligence solutions and dashboards.",
          stages: [
            {
              name: "BI Tools & Platforms",
              skills: ["Tableau", "Power BI", "Qlik", "Data Warehousing"],
              resources: [
                { name: "Tableau Training", link: "https://www.tableau.com/learn/training" },
                { name: "Power BI Learning", link: "https://learn.microsoft.com/en-us/power-bi/" }
              ],
              suggestedCourses: [
                { name: "Business Intelligence Analyst - Power BI & Tableau", link: "https://www.udemy.com/course/business-intelligence-analyst-power-bi-tableau/" },
                { name: "Edureka Business Intelligence Masters Program", link: "https://www.edureka.co/masters-program/business-intelligence-certification" }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Product Management",
      description: "Lead product development and strategy across various industries.",
      careers: [
        {
          title: "Product Manager",
          description: "Drive product strategy, development, and launch processes.",
          stages: [
            {
              name: "Product Development",
              skills: ["User Research", "Wireframing & Prototyping", "Agile Methodologies"],
              resources: [
                { name: "Product School Blog", link: "https://productschool.com/blog/product-fundamentals/agile-product-management-study-guide" }
              ],
              suggestedCourses: [
                { name: "Free Agile Product Management Course", link: "https://www.telecomgurukul.com/post/free-product-management-courses" },
                { name: "Mastering Agile Product Management Guide", link: "https://productschool.com/blog/product-fundamentals/agile-product-management-study-guide" }
              ]
            },
            {
              name: "Product Strategy",
              skills: ["A/B Testing", "Product Analytics", "Launch Strategies"],
              resources: [
                { name: "Product School Resources", link: "https://productschool.com/resources" }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Operations & Supply Chain",
      description: "Manage online retail operations and supply chain processes.",
      careers: [
        {
          title: "Operations Manager",
          description: "Oversee e-commerce operations and logistics.",
          stages: [
            {
              name: "Operations Management",
              skills: ["Logistics Management", "Process Optimization"],
              resources: [
                { name: "Essentials of Inventory Management", link: "https://www.coursera.org/learn/inventory-management" }
              ],
              suggestedCourses: [
                { name: "Warehouse Management & Supply Chains", link: "https://alison.com/course/warehouse-management-inventory-stock-and-supply-chains" },
                { name: "15 Free Inventory Management Courses", link: "https://digitaldefynd.com/IQ/free-inventory-management-courses/" }
              ]
            }
          ]
        },
        {
          title: "Supply Chain Analyst",
          description: "Optimize supply chain operations and inventory management.",
          stages: [
            {
              name: "Supply Chain Optimization",
              skills: ["Inventory Control Techniques (EOQ, JIT)", "Forecasting Demand"],
              resources: [
                { name: "MIT OpenCourseWare Principles of Inventory Management", link: "http://ocw.mit.edu/courses/sloan-school-of-management/15-762j-supply-chain-planning-fall-2010/index.htm" }
              ],
              suggestedCourses: [
                { name: "Strategic Inventory Management", link: "https://www.udemy.com/course/inventory-management-strategies/" },
                { name: "Advanced Inventory Management", link: "https://www.linkedin.com/learning/topics/inventory-management" }
              ]
            }
          ]
        }
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-medium tracking-tight text-gray-900 mb-4">
              Career Roadmaps
            </h1>
            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
              Explore detailed career paths across different sectors with comprehensive learning resources
            </p>
          </div>

          <div className="grid gap-8">
            {sectors.map((sector, sectorIndex) => (
              <div key={sectorIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-8">
                  <h2 className="text-3xl font-semibold text-white mb-3">{sector.name}</h2>
                  <p className="text-purple-100 text-lg">{sector.description}</p>
                </div>

                <div className="p-8">
                  <div className="grid gap-6">
                    {sector.careers.map((career, careerIndex) => (
                      <div key={careerIndex} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-purple-300 transition-colors">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <h3 className="text-2xl font-medium text-gray-900">{career.title}</h3>
                              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                                {career.stages.length} Learning Stages
                              </span>
                            </div>
                            <p className="text-gray-600 mb-4">{career.description}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <div className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                                <span>
                                  {career.stages.length} Learning Stages
                                </span>
                              </div>
                            </div>
                          </div>
                          <button 
                            onClick={() => setSelectedCareer(selectedCareer === career.title ? null : career.title)}
                            className="mt-4 lg:mt-0 inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                          >
                            {selectedCareer === career.title ? 'Hide Details' : 'View Roadmap'}
                          </button>
                        </div>

                        {selectedCareer === career.title && (
                          <div className="relative mt-8">
                            <div className="absolute top-0 left-6 h-full w-0.5 bg-purple-200"></div>
                            <div className="space-y-8">
                              {career.stages.map((stage, stageIndex) => (
                                <div key={stageIndex} className="relative">
                                  <div className="absolute left-5 w-3 h-3 rounded-full bg-purple-600"></div>
                                  <div className="ml-16 bg-white rounded-lg p-6 shadow-sm">
                                    <div className="flex items-start justify-between">
                                      <div>
                                        <div className="flex items-center gap-3 mb-2">
                                          <h4 className="text-lg font-medium text-gray-900">Stage {stageIndex + 1}</h4>
                                          <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                                            {stage.name}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    
                                    <div className="mt-6 grid md:grid-cols-2 gap-6">
                                      <div>
                                        <h5 className="font-medium text-gray-900 mb-3">Key Skills</h5>
                                        <div className="flex flex-wrap gap-2">
                                          {stage.skills.map((skill, skillIndex) => (
                                            <span 
                                              key={skillIndex}
                                              className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm"
                                            >
                                              {skill}
                                            </span>
                                          ))}
                                        </div>
                                      </div>
                                      
                                      <div>
                                        <h5 className="font-medium text-gray-900 mb-3">Learning Resources</h5>
                                        <ul className="space-y-2">
                                          {stage.resources.map((resource, resourceIndex) => (
                                            <li key={resourceIndex}>
                                              <a 
                                                href={resource.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-purple-600 hover:text-purple-700 transition-colors flex items-center gap-2"
                                              >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                                {resource.name}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>

                                    {stage.suggestedCourses && stage.suggestedCourses.length > 0 && (
                                      <div className="mt-6">
                                        <h5 className="font-medium text-gray-900 mb-3">Suggested Courses</h5>
                                        <ul className="space-y-2">
                                          {stage.suggestedCourses.map((course, courseIndex) => (
                                            <li key={courseIndex}>
                                              <a 
                                                href={course.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-purple-600 hover:text-purple-700 transition-colors flex items-center gap-2"
                                              >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                </svg>
                                                {course.name}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CareerGuidance; 