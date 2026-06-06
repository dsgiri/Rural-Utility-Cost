# Chatbot Architecture & Security Standard

## Mission
The RuralUtilityCost.com chatbot is a **calculator finder**, not a general-purpose AI assistant. Its sole purpose is to understand what the user is trying to estimate, compare, or fix, classify the request into a supported intent, and recommend the best calculator links. It should ask a small number of clarifying questions when needed and help users reach the correct calculator quickly.

## Architecture Principles
- **Isolated Feature Module**: All chatbot-specific files (UI components, routing logic, intent maps, types) are encapsulated within `src/features/chatbot/`.
- **Deterministic First**: Currently implemented using a deterministic keyword and rule-based classifier (`routing.ts` and `intent-map.json`) to guarantee structural integrity, fast response times, and 100% predictable outcomes without relying on a server-side LLM. 
- **Layered Design**:
  - *Presentation*: `ChatbotPanel.tsx`, `ChatbotLauncher.tsx`, `RecommendationCard.tsx`, `QuickReplies.tsx`
  - *Routing*: `routing.ts`, `useChatbotRouter.ts`
  - *Data*: `intent-map.json`, `quick-replies.json`
- **Future Scale**: If an LLM is introduced later, it will replace the internals of `classifyIntent()` while strictly adhering to the same structured JSON output contract, ensuring zero UI changes are required.

## Feature Boundaries
**The chatbot MAY:**
- Classify user intents and ask clarifying questions.
- Recommend RuralUtilityCost.com calculators.
- Show quick replies and track usage events.
- Link to approved pages.

**The chatbot MAY NOT:**
- Fabricate calculators, formulas, or site capabilities.
- Answer unrelated topics or act as a general rural advisor.
- Access private user data, databases, or execute user-provided code.
- Browse the open web or perform transactions.

## Security Standard
- **Untrusted Input**: All user input is treated as untrusted. Input is normalized and sanitized before processing.
- **No Prompt Injection**: Because the current routing is deterministic, traditional LLM prompt injection is impossible. If an LLM is integrated later, the system prompt must enforce strict scoping.
- **No Secret Exposure**: The client-side chatbot holds no API keys, secrets, tokens, or environment variables. 
- **No State-Changing Actions**: The chatbot is strictly read-only and navigation-focused. It cannot write to files, databases, or trigger backend mutations.
- **Access Control**: The chatbot does not access internal business systems or admin-only resources.

## Data Handling & Privacy
- **Minimal Collection**: The chatbot only uses transient session state to route the user. It does not collect passwords, accounts, addresses, government IDs, or payment details.
- **No Retention**: Chat history is kept in localized React state (`useChatbotRouter.ts`) and is cleared upon page refresh. No sensitive transcripts are logged to external servers.

## Supported Intents
The intent model is strictly controlled. New intents are only added if the use case is real, documented, and matches an existing calculator.
1. `utility_cost`
2. `generator_planning`
3. `farm_costs`
4. `water_planning`
5. `pain_point_prioritization`
6. `roi_savings`
7. `conversion_goal`
8. `general_browse`
9. `out_of_scope`

## Routing Behavior
1. Normalize and score the user message against standard intents.
2. Pick the highest-confidence intent.
3. If confidence is strong, return 1–3 calculator recommendations.
4. If confidence is medium/low, ask **one** focused clarifying question.
5. If out of scope, politely redirect to the calculator directory (`/`).

## Accessibility
The component adheres to standard a11y practices:
- Visible focus states.
- Semantic buttons and labeled inputs.
- Clear dialog semantics (`role="dialog"`, `aria-modal="true"`).
- Keyboard-navigable structure.
