import { brands } from '../data/mockData';

interface BrandsProps {
  onSelectBrand: (brand: string) => void;
}

export function Brands({ onSelectBrand }: BrandsProps) {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Select Your Brand</h2>
          <p className="text-gray-500 mt-2">Choose your device manufacturer</p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {brands.map((brand) => (
            <button
              key={brand.id}
              onClick={() => onSelectBrand(brand.id)}
              className="group flex flex-col items-center p-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-indigo-500/30 rounded-xl transition-all duration-200"
            >
              <div className="w-12 h-12 flex items-center justify-center text-2xl mb-2 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                {brand.logo}
              </div>
              <span className="text-white text-sm font-medium">{brand.name}</span>
              <span className="text-gray-500 text-xs mt-0.5">{brand.deviceCount.toLocaleString()}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
