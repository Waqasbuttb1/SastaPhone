import { featuredDevices } from '../data/mockData';

interface FeaturedDevicesProps {
  onSelectDevice: (deviceId: string) => void;
}

export function FeaturedDevices({ onSelectDevice }: FeaturedDevicesProps) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Popular Devices</h2>
            <p className="text-gray-500 mt-1">Most downloaded firmware this week</p>
          </div>
          <button className="hidden md:flex items-center gap-2 px-4 py-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredDevices.map((device) => (
            <button
              key={device.id}
              onClick={() => onSelectDevice(device.id)}
              className="group p-5 bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-indigo-500/30 rounded-2xl text-left transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 flex items-center justify-center text-4xl bg-white/5 rounded-xl">
                  {device.image}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold group-hover:text-indigo-400 transition-colors truncate">
                    {device.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{device.model}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-2 py-0.5 bg-green-500/10 text-green-400 text-xs rounded-full">
                      {device.android}
                    </span>
                    <span className="text-gray-600 text-xs">
                      {device.files.length} files
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Latest File */}
              {device.files[0] && (
                <div className="mt-4 p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                      </svg>
                      <span className="text-white text-sm truncate max-w-[180px]">{device.files[0].name}</span>
                    </div>
                    <span className="text-gray-500 text-xs">{device.files[0].size}</span>
                  </div>
                  <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                    <span>{device.files[0].downloads.toLocaleString()} downloads</span>
                    <span>{device.files[0].date}</span>
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
