export default function MediaSection() {
  const mediaOutlets = [
    "Google News", "Yahoo", "Business Standard", "The Print", 
    "ANI News", "Latestly", "European Sun Times", "Karnataka Live"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured In</h2>
        </div>
        
        <div className="overflow-hidden">
          <div className="flex animate-scroll space-x-8">
            {mediaOutlets.concat(mediaOutlets).map((outlet, index) => (
              <div key={index} className="flex-shrink-0 w-40 h-20 bg-gray-50 border rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-medium text-sm text-center px-2">{outlet}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
