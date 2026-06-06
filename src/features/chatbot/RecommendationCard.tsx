import type { CalculatorRecommendation } from "./chat-types";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export function RecommendationCard({ rec, onClose }: { rec: CalculatorRecommendation, onClose: () => void }) {
  return (
    <div className="block bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl p-3">
      <div className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
        {rec.title}
      </div>
      <p className="text-xs text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
        {rec.reason}
      </p>
      <Link
        to={rec.url}
        onClick={onClose}
        className="inline-flex items-center justify-center gap-1 w-full bg-[#1a5f3f] text-white py-2 px-3 rounded-lg text-xs font-medium hover:bg-[#134930] transition-colors"
      >
        Open calculator
        <ChevronRight className="w-3 h-3" />
      </Link>
    </div>
  );
}
