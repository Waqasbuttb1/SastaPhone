interface HeroProps {
  onSearch: (query: string) => void;
}

export function Hero({ onSearch }: HeroProps) {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent" />
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-indigo-500/20 rounded-full blur-[100px]" />
      <div className="absolute top-40 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          50,000+ Files Available
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Download Android
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> Firmware </span>
          & Tools
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Free stock ROMs, FRP bypass files, flash tools, and USB drivers for all Android devices. Fast & secure downloads.
        </p>

        {/* Search Box */}
        <div className="max-w-2xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity" />
            <div className="relative flex items-center bg-[#1a1a2e] rounded-xl border border-white/10">
              <svg className="ml-5 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search by device name, model number (e.g. SM-A546B, Redmi Note 13)"
                className="flex-1 h-14 px-4 bg-transparent text-white placeholder-gray-500 focus:outline-none"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    onSearch((e.target as HTMLInputElement).value);
                  }
                }}
              />
              <button
                onClick={() => {
                  const input = document.querySelector('input[placeholder*="Search by device"]') as HTMLInputElement;
                  if (input) onSearch(input.value);
                }}
                className="m-2 px-6 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-medium rounded-lg transition-all"
              >
                Search
              </button>
            </div>
          </div>
          
          {/* Quick Search Tags */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {['Samsung A54', 'Xiaomi 14', 'iPhone Bypass', 'FRP Tool', 'Odin'].map((tag) => (
              <button
                key={tag}
                onClick={() => onSearch(tag)}
                className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-gray-400 text-sm transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-16">
          {[
            { value: '50K+', label: 'Files' },
            { value: '15K+', label: 'Devices' },
            { value: '500+', label: 'Tools' },
            { value: '2M+', label: 'Downloads' },
          ].map((stat) => (
            <div key={stat.label} className="p-4 bg-white/5 rounded-xl border border-white/5">
              <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
