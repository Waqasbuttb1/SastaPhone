import { categories, featuredDevices, tools } from '../data/mockData';

interface CategoryPageProps {
  category: string;
  onBack: () => void;
}

export function CategoryPage({ category, onBack }: CategoryPageProps) {
  const categoryInfo = categories.find((c) => c.id === category);

  const isToolsCategory = category === 'flash-tools' || category === 'drivers';

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
            <div className="flex items-center gap-3">
              <span className="text-3xl">{categoryInfo?.icon || '📁'}</span>
              <h1 className="text-2xl font-bold text-white">{categoryInfo?.name || category}</h1>
            </div>
            <p className="text-gray-500 mt-1">{categoryInfo?.description}</p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-6 p-4 bg-white/5 rounded-xl">
          <span className="text-gray-400 text-sm">Filter:</span>
          {['All', 'Samsung', 'Xiaomi', 'OPPO', 'Vivo', 'Realme'].map((brand) => (
            <button
              key={brand}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                brand === 'All'
                  ? 'bg-indigo-500 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {brand}
            </button>
          ))}
        </div>

        {/* Content */}
        {isToolsCategory ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className="p-5 bg-white/5 border border-white/5 hover:border-indigo-500/30 rounded-2xl transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-indigo-500/20 rounded-xl">
                    <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{tool.name}</h3>
                    <span className="text-gray-500 text-xs">{tool.version}</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">{tool.description}</p>
                <div className="flex items-center justify-between text-xs mb-4">
                  <span className="px-2 py-1 bg-white/5 rounded-full text-gray-400">{tool.category}</span>
                  <span className="text-gray-500">{tool.size}</span>
                </div>
                <button className="w-full py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {featuredDevices.map((device) => (
              <div
                key={device.id}
                className="p-5 bg-white/5 border border-white/5 hover:border-indigo-500/30 rounded-2xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 flex items-center justify-center text-3xl bg-white/5 rounded-xl flex-shrink-0">
                    {device.image}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div>
                        <h3 className="text-white font-semibold">{device.name}</h3>
                        <p className="text-gray-500 text-sm">{device.brand} • {device.model}</p>
                      </div>
                      <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded-full">
                        {device.android}
                      </span>
                    </div>
                    
                    <div className="mt-3 flex flex-wrap gap-2">
                      {device.files.map((file) => (
                        <button
                          key={file.id}
                          className="flex items-center gap-2 px-3 py-2 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 rounded-lg text-sm transition-colors"
                        >
                          <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          <span className="text-white">{file.type}</span>
                          <span className="text-gray-500">({file.size})</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors">
            Previous
          </button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                page === 1
                  ? 'bg-indigo-500 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {page}
            </button>
          ))}
          <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors">
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
