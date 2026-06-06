export function QuickReplies({
  items,
  onPick,
  disabled
}: {
  items: { label: string; intent: string }[];
  onPick: (label: string) => void;
  disabled?: boolean;
}) {
  return (
    <div className="flex overflow-x-auto gap-2 pb-3 mb-1 scrollbar-hide -mx-4 px-4 mask-edges" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}} />
      {items.map((item) => (
        <button
          key={item.intent}
          type="button"
          disabled={disabled}
          onClick={() => onPick(item.label)}
          className="whitespace-nowrap flex-shrink-0 text-xs bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 px-3 py-1.5 rounded-full hover:bg-[#1a5f3f] hover:text-white hover:border-[#1a5f3f] transition-colors disabled:opacity-50"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
