import { useState } from "react";
import { ChatbotLauncher } from "./ChatbotLauncher";
import { ChatbotPanel } from "./ChatbotPanel";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ChatbotLauncher isOpen={isOpen} onOpen={() => setIsOpen(true)} />
      <ChatbotPanel open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
