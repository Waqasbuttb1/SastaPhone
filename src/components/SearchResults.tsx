import { featuredDevices } from '../data/mockData';

interface SearchResultsProps {
  query: string;
  onBack: () => void;
}

export function SearchResults({ query, onBack }: SearchResultsProps) {
  // Filter devices based on query
  const results = featuredDevices.filter(
    (device) =>
      device.name.toLowerCase().includes(query.toLowerCase()) ||
      device.model.toLowerCase().includes(query.toLowerCase()) ||
      device.brand.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="py-8 px-4 min-h-[60vh]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={onBack}
            className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div>
            <h1 className="text-2xl font-bold text-white">Search Results</h1>
            <p className="text-gray-500">
              {results.length} results for "{query}"
            </p>
          </div>
        </div>

        {/* Results */}
        {results.length > 0 ? (
          <div className="space-y-4">
            {results.map((device) => (
              <div
                key={device.id}
                className="p-5 bg-white/5 border border-white/5 hover:border-indigo-500/30 rounded-2xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 flex items-center justify-center text-4xl bg-white/5 rounded-xl flex-shrink-0">
                    {device.image}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-semibold text-lg">{device.name}</h3>
                        <p className="text-gray-500">{device.brand} • {device.model}</p>
                      </div>
                      <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">
                        {device.android}
                      </span>
                    </div>

                    {/* Files */}
                    <div className="mt-4 space-y-2">
                      {device.files.map((file) => (
                        <div
                          key={file.id}
                          className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 flex items-center justify-center bg-indigo-500/20 rounded-lg">
                              <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-white text-sm font-medium">{file.name}</p>
                              <p className="text-gray-500 text-xs">
                                {file.size} • {file.downloads.toLocaleString()} downloads • {file.date}
                              </p>
                            </div>
                          </div>
                          <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-white/5 rounded-full">
              <svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">No results found</h3>
            <p className="text-gray-500 mb-6">
              We couldn't find any devices matching "{query}"
            </p>
            <button
              onClick={onBack}
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-xl transition-colors"
            >
              Back to Home
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
