import { Sparkles, Bot, X, ChevronRight } from "lucide-react";

export function ChatbotLauncher({ onOpen, isOpen }: { onOpen: () => void, isOpen: boolean }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label="Help me find a calculator."
      title="Help me find a calculator."
      className={`fixed bottom-6 right-6 px-5 py-3 rounded-full bg-[#1a5f3f] text-white font-medium shadow-lg hover:bg-[#134930] transition-transform z-50 flex items-center gap-2 ${isOpen ? 'scale-0' : 'scale-100'}`}
    >
      <Sparkles className="w-5 h-5" />
      <span className="hidden sm:inline">Help me find a calculator</span>
      <span className="sm:hidden">Tool Finder</span>
    </button>
  );
}
