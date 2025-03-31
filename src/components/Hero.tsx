const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-24">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[#F8FAFF]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at center, #E2E8F3 2px, transparent 2px)`,
          backgroundSize: '48px 48px',
          opacity: 0.5
        }}></div>
      </div>

      {/* Floating circles - decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-white border-2 border-purple-200"></div>
      <div className="absolute bottom-1/4 right-1/4 w-3 h-3 rounded-full bg-white border-2 border-purple-200"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-white border-2 border-purple-200"></div>

      <div className="relative text-center">
        <h1 className="text-[64px] leading-[1.1] font-medium tracking-[-0.02em] text-[#141413] mb-8">
          Empowering KGPians:<br />Your Career Compass
        </h1>
        
        <div className="max-w-[600px] mx-auto mb-12">
          <p className="text-xl text-[#141413]/80">
            Navigate your professional journey with expert guidance,<br />
        curated resources, and mentorship from accomplished KGPians.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-16">
          <button className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
            Explore Now
          </button>
          <button className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            Build Your CV
          </button>
        </div>

        <div className="max-w-[800px] mx-auto border-4 border-gray-200 rounded-xl shadow-xl overflow-hidden bg-white">
          <img 
            src="/src/assets/images/mainbuilding.jpg" 
            alt="Career Guidance Preview" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;