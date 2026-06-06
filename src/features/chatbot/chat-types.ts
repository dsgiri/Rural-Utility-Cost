export type CalculatorRecommendation = {
  id: string;
  title: string;
  reason: string;
  url: string;
};

export type IntentDefinition = {
  id: string;
  label: string;
  examples: string[];
  recommended_calculators: CalculatorRecommendation[];
};

export type ChatMessage =
  | { id: string; role: "assistant"; text: string; kind?: "text" | "clarify" }
  | { id: string; role: "user"; text: string };
