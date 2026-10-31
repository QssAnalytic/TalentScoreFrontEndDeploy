import { useEffect, useRef, useState } from "react";

import ChatAvatar from "./components/ChatAvatar";
import ChatHeader from "./components/ChatHeader";
import ChatContent from "./components/ChatContent";
import { Icon } from "@iconify/react";
import { talentBotReply } from "./talentBotReply";
import { BOT_TOPICS, greeting, personalReply } from "./personalBot";
import useAuth from "hooks/useAuth";
import { useResults } from "tests/store";
import { useCareer } from "jobs/store";

interface IMessages {
  id: number;
  message: string;
  user?: boolean;
}

// Signed in (or viewing as a demo persona): the bot answers from that person's own
// results. On the public landing page it keeps the scripted introduction.
const Chatbot = () => {
  const { user } = useAuth();
  const results = useResults(user?.email);
  const career = useCareer(user?.email);
  const known = !!user?.email;
  const ctx = { firstName: user?.first_name || "", results, career, talentDone: !!user?.report_test || !!results.talent };

  const intro = (): IMessages[] =>
    known
      ? [{ id: 0, message: greeting(ctx) }]
      : [
          { id: 0, message: "Salam mən Talentbot 👋" },
          { id: 1, message: "Sənin adın nədir?" },
        ];
  const [messages, setMessages] = useState<IMessages[]>(intro);
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const [botName] = useState("TalentBot");
  const [tooltip] = useState(`Salam, mən ${botName}`);
  const endRef = useRef<HTMLDivElement>(null);

  // A different person (another demo profile) starts a fresh conversation.
  useEffect(() => {
    setMessages(intro());
  }, [user?.email]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const send = (raw: string) => {
    const value = raw.trim();
    if (!value) return;
    setMessages((prev) => [...prev, { id: prev.length, message: value, user: true }]);
    const reply = known ? personalReply(value, ctx) : talentBotReply(value, messages.filter((m) => m.user).length);
    setText("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { id: prev.length, message: reply }]);
    }, 450);
  };

  return (
    <div className="fixed z-50 w-full max-w-sm bottom-4 right-4">
      {isOpen ? (
        <div className="w-full h-[540px] shadow-lg border rounded-xl bg-gray-50 px-5 flex flex-col">
          <ChatHeader name={botName} closeChat={() => setIsOpen(false)} />
          <div className="flex-1 mt-1 pt-1 overflow-y-auto relative">
            {!known && <ChatContent name={botName} />}
            <div className="space-y-2 pt-2">
              {messages.map(({ id, message, user: mine }) => (
                <div key={id} className={mine ? "chat-bubble-r" : "chat-bubble-l whitespace-pre-line"}>
                  {message}
                </div>
              ))}
              <div ref={endRef} />
            </div>
          </div>
          {known && (
            <div className="flex gap-1.5 overflow-x-auto py-2 -mx-1 px-1">
              {BOT_TOPICS.map((t) => (
                <button key={t} type="button" onClick={() => send(t)} className="shrink-0 text-[12px] rounded-full border border-qss-secondary text-qss-secondary px-3 py-1 bg-white hover:bg-qss-transbg">
                  {t}
                </button>
              ))}
            </div>
          )}
          <div className="flex items-center gap-2 py-2 w-full">
            <input
              type="text"
              className="flex-1 outline-0 border-0 bg-transparent"
              placeholder="Yaz..."
              aria-label="Mesaj"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send(text)}
            />
            <button type="button" aria-label="Göndər" onClick={() => send(text)}>
              <Icon icon="ant-design:send-outlined" className="w-6 h-6 text-qss-secondary" />
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-end w-full" onClick={() => setIsOpen(true)}>
          <ChatAvatar tooltip={tooltip} />
        </div>
      )}
    </div>
  );
};

export default Chatbot;
