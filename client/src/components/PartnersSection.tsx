export default function PartnersSection() {
  const companies = Array.from({ length: 16 }, (_, i) => `Company ${i + 1}`);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            Collaborating with the best<br />
            to shape your future
          </h2>
        </div>
        
        <div className="overflow-hidden">
          <div className="flex animate-scroll space-x-8">
            {companies.concat(companies).map((company, index) => (
              <div key={index} className="flex-shrink-0 w-32 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-semibold text-sm">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
