import { categories } from '../data/mockData';

interface CategoriesProps {
  onNavigate: (category: string) => void;
}

export function Categories({ onNavigate }: CategoriesProps) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Browse Categories</h2>
            <p className="text-gray-500 mt-1">Find what you need by category</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onNavigate(category.id)}
              className="group p-5 bg-gradient-to-br from-white/5 to-white/[0.02] hover:from-indigo-500/10 hover:to-purple-500/5 border border-white/5 hover:border-indigo-500/30 rounded-2xl text-left transition-all duration-300"
            >
              <div className="text-3xl mb-3">{category.icon}</div>
              <h3 className="text-white font-semibold group-hover:text-indigo-400 transition-colors">
                {category.name}
              </h3>
              <p className="text-gray-500 text-sm mt-1 line-clamp-2">{category.description}</p>
              <div className="mt-3 text-xs text-indigo-400 font-medium">
                {category.count.toLocaleString()} files
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
