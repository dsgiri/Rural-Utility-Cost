import intentMap from "./intent-map.json";
import type { CalculatorRecommendation, IntentDefinition } from "./chat-types";

type ClassificationResult = {
  primary_intent: string;
  secondary_intents: string[];
  confidence: number;
  needs_clarification: boolean;
  clarifying_question: string | null;
  recommendations: CalculatorRecommendation[];
};

function normalize(text: string) {
  return text.toLowerCase().replace(/[^\w\s]/g, " ");
}

function scoreIntent(input: string, intent: IntentDefinition) {
  const text = normalize(input);
  let score = 0;

  for (const ex of intent.examples) {
    const exText = normalize(ex);
    const tokens = exText.split(/\s+/).filter(Boolean);
    for (const token of tokens) {
      if (token.length > 2 && text.includes(token)) score += 1;
    }
    if (text.includes(exText)) score += 3;
  }

  if (text.includes(intent.id.replaceAll("_", " "))) score += 3;

  const boosts: Record<string, string[]> = {
    utility_cost: ["bill", "electric", "power", "water", "propane", "utility"],
    generator_planning: ["generator", "runtime", "fuel", "backup", "kw", "load"],
    farm_costs: ["feed", "livestock", "farm", "animal", "hay", "budget", "fencing"],
    water_planning: ["water", "hauling", "well", "tank", "gallons", "drilling"],
    pain_point_prioritization: ["prioritize", "rank", "fix first", "pain point", "problem"],
    roi_savings: ["roi", "payback", "break even", "save", "worth it", "investment"],
    conversion_goal: ["leads", "visitors", "conversion", "signup", "traffic", "goal"]
  };

  for (const kw of boosts[intent.id] || []) {
    if (text.includes(kw)) score += 2;
  }

  return score;
}

export function classifyIntent(input: string): ClassificationResult {
  const intents = intentMap.intents as IntentDefinition[];

  const scored = intents
    .map((intent) => ({ intent, score: scoreIntent(input, intent) }))
    .sort((a, b) => b.score - a.score);

  const top = scored[0];
  const second = scored[1];
  
  // Custom shorthand match
  const text = normalize(input);
  if (['n', 'no', 'nope', 'nay'].includes(text.trim())) {
    return {
      primary_intent: "general_browse",
      secondary_intents: [],
      confidence: 1,
      needs_clarification: false,
      clarifying_question: null,
      recommendations: [intentMap.fallback]
    };
  }

  const primary_intent = top?.intent?.id ?? "general_browse";
  const secondary_intents = second && second.score > 0 ? [second.intent.id] : [];

  const score = top?.score ?? 0;
  const confidence =
    score >= 10 ? 0.95 :
    score >= 7 ? 0.86 :
    score >= 4 ? 0.68 : 0.38;

  const needs_clarification = confidence < 0.8 && score > 0;

  const clarifying_question = (() => {
    switch (primary_intent) {
      case "generator_planning":
        return "Are you trying to estimate runtime, fuel cost, or generator size?";
      case "utility_cost":
        return "Are you looking at electricity, water, propane, or overall savings?";
      case "farm_costs":
        return "Is this about feed, livestock, or overall farm budgeting?";
      case "water_planning":
        return "Are you trying to estimate water use, hauling cost, or water expense?";
      case "roi_savings":
        return "Do you want payback, savings, or full ROI?";
      case "conversion_goal":
        return "Are you trying to estimate visitors, leads, or conversion rate?";
      case "pain_point_prioritization":
        return "Do you want to rank several problems, or start with one pain point?";
      default:
        return "What are you trying to estimate or compare?";
    }
  })();

  const recommendations =
    (top?.intent?.recommended_calculators && top.intent.recommended_calculators.length > 0)
      ? top.intent.recommended_calculators.slice(0, 3) 
      : [intentMap.fallback];

  return {
    primary_intent,
    secondary_intents,
    confidence,
    needs_clarification,
    clarifying_question: needs_clarification ? clarifying_question : null,
    recommendations: score > 0 ? recommendations : [intentMap.fallback],
  };
}
