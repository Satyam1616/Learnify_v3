export default function AcademicPartnersSection() {
  const universities = Array.from({ length: 10 }, (_, i) => `University ${i + 1}`);

  return (
    <section className="py-20 bg-[hsl(220,13%,97%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">50+ Academic & Employment Partner</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {universities.map((university, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 text-sm font-medium">{university}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
