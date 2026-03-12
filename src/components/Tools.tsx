import { tools } from '../data/mockData';

export function Tools() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Flash Tools & Software</h2>
            <p className="text-gray-500 mt-1">Essential tools for flashing Android devices</p>
          </div>
          <button className="hidden md:flex items-center gap-2 px-4 py-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">
            All Tools
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="group p-5 bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-purple-500/30 rounded-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 flex items-center justify-center bg-purple-500/20 rounded-lg">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold group-hover:text-purple-400 transition-colors">
                    {tool.name}
                  </h3>
                  <span className="text-gray-500 text-xs">{tool.version}</span>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{tool.description}</p>
              
              <div className="flex items-center justify-between text-xs">
                <span className="px-2 py-1 bg-white/5 rounded-full text-gray-400">{tool.category}</span>
                <span className="text-gray-500">{tool.size}</span>
              </div>
              
              <button className="w-full mt-4 py-2.5 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 hover:border-purple-500/40 text-purple-400 text-sm font-medium rounded-lg transition-all flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
