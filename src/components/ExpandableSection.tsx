interface ExpandableSectionProps {
  title: string;
  icon: string;
  items: string[];
  itemColor: string;
  itemIcon: string;
  emptyIcon: string;
  emptyMessage: string;
  renderAsGrid?: boolean;
}

export default function ExpandableSection({
  title,
  icon,
  items,
  itemColor,
  itemIcon,
  emptyIcon,
  emptyMessage,
  renderAsGrid = true
}: ExpandableSectionProps) {
  return (
    <details className="group bg-white/10 backdrop-blur-md border border-purple-500/20 rounded-xl overflow-hidden">
      <summary className="px-6 py-4 cursor-pointer hover:bg-white/5 transition-colors duration-300 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{icon}</span>
          <span className="text-xl font-semibold">{title}</span>
          <span className="text-sm text-gray-400">({items.length})</span>
        </div>
        <span className="text-gray-400 group-open:rotate-180 transition-transform duration-300">▼</span>
      </summary>
      <div className="px-6 pb-4 border-t border-purple-500/20">
        {items.length > 0 ? (
          <div className={`${renderAsGrid ? 'grid grid-cols-1 sm:grid-cols-2 gap-3' : 'flex flex-wrap gap-3'} mt-4`}>
            {items.map((item: string, index: number) => (
              <div 
                key={index} 
                className={`${itemColor} ${renderAsGrid ? 'rounded-lg p-3' : 'rounded-full px-4 py-2'} hover:opacity-80 transition-all duration-300`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-current">{itemIcon}</span>
                  <span className="font-medium">{item}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-4 text-gray-400 text-center py-8">
            <span className="text-4xl mb-2 block">{emptyIcon}</span>
            {emptyMessage}
          </div>
        )}
      </div>
    </details>
  );
} 