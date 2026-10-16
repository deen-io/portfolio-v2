import { useEffect, useRef, useState } from "react";
import { answerQuestion, EmailLink, GITHUB_URL, LinkedInLink, LINKEDIN_URL } from "./chatKnowledge";

function GithubIcon() {
  return (
    <svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

const QUICK_REPLIES = [
  {
    id: "recruit",
    icon: "💼",
    label: "Recruiting me?",
    reply: (
      <>
        I'm open to full-time, contract, and senior engineer roles — remote-friendly! Reach out any time at{" "}
        <EmailLink /> or connect on <LinkedInLink />.
      </>
    ),
  },
  {
    id: "project",
    icon: "🚀",
    label: "Got a project?",
    reply: (
      <>
        Ooh, I love hearing about new projects! Send me the details at <EmailLink /> and I'll reply personally.
      </>
    ),
  },
  {
    id: "hi",
    icon: "☕",
    label: "Just saying hi!",
    reply: (
      <>
        Aww, hi there 👋 Thanks for stopping by — feel free to stay in touch on <LinkedInLink /> anytime.
      </>
    ),
  },
];

type ChatMessage = { id: number; from: "bot" | "user"; content: React.ReactNode };

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [closingAnim, setClosingAnim] = useState(false);
  const [dotVisible, setDotVisible] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");

  const idRef = useRef(0);
  const greetedRef = useRef(false);
  const farewellSentRef = useRef(false);
  const timeouts = useRef<number[]>([]);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const queue = (fn: () => void, delay: number) => {
    const id = window.setTimeout(fn, delay);
    timeouts.current.push(id);
  };

  useEffect(() => () => timeouts.current.forEach(clearTimeout), []);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-chat-widget", handler);
    return () => window.removeEventListener("open-chat-widget", handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    setDotVisible(false);
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePanel();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    if (!open || greetedRef.current) return;
    greetedRef.current = true;
    setTyping(true);
    queue(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: ++idRef.current,
          from: "bot",
          content: (
            <>
              Well, hello there! 👋
              <br />
              Glad you found your way here. What brings you by?
            </>
          ),
        },
      ]);
    }, 900);
  }, [open]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  function closePanel() {
    setClosingAnim(true);
    queue(() => {
      setOpen(false);
      setClosingAnim(false);
      toggleRef.current?.focus();
    }, 220);
  }

  function appendBotReply(content: React.ReactNode) {
    setTyping(true);
    queue(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { id: ++idRef.current, from: "bot", content }]);
      if (!farewellSentRef.current) {
        farewellSentRef.current = true;
        queue(() => {
          setTyping(true);
          queue(() => {
            setTyping(false);
            setMessages((prev) => [
              ...prev,
              { id: ++idRef.current, from: "bot", content: <>Thanks for stopping by! Hope we get to work together ✨</> },
            ]);
          }, 650);
        }, 500);
      }
    }, 700);
  }

  function handleQuickReply(reply: (typeof QUICK_REPLIES)[number]) {
    setMessages((prev) => [
      ...prev,
      {
        id: ++idRef.current,
        from: "user",
        content: (
          <>
            {reply.icon} {reply.label}
          </>
        ),
      },
    ]);
    appendBotReply(reply.reply);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { id: ++idRef.current, from: "user", content: text }]);
    setInput("");

    const answer = answerQuestion(text);
    appendBotReply(
      answer ?? (
        <>
          Hmm, I don't have that one baked in 🤔 I'm a little FAQ bot wired to this site's content, not a live
          inbox — but I'd genuinely love to hear from you directly: <EmailLink /> or <LinkedInLink />.
        </>
      ),
    );
  }

  return (
    <div className="chat-widget">
      <div className={`chat-social ${open ? "is-hidden" : ""}`}>
        <a className="chat-social-link" href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="Dina's GitHub" tabIndex={open ? -1 : 0}>
          <GithubIcon />
        </a>
        <a className="chat-social-link" href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="Dina's LinkedIn" tabIndex={open ? -1 : 0}>
          <LinkedInIcon />
        </a>
      </div>
      <button
        ref={toggleRef}
        className={`chat-toggle ${open ? "is-hidden" : ""}`}
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="chat-panel"
        aria-label="Open chat with Dina"
        tabIndex={open ? -1 : 0}
      >
        {dotVisible && <span className="chat-toggle-dot" aria-hidden="true" />}
        <span className="chat-toggle-icon" aria-hidden="true">
          💬
        </span>
        <span className="chat-toggle-label">
          Let's chat <i aria-hidden="true">✨</i>
        </span>
      </button>

      {(open || closingAnim) && (
        <section id="chat-panel" className={`chat-panel ${closingAnim ? "is-closing" : ""}`} aria-label="Chat with Dina">
          <span className="chat-sparkle chat-sparkle--one" aria-hidden="true">
            ✨
          </span>
          <span className="chat-sparkle chat-sparkle--two" aria-hidden="true">
            ⋆
          </span>

          <header className="chat-header">
            <div className="chat-avatar" aria-hidden="true">
              D
            </div>
            <div>
              <p className="chat-title">Hey, I'm Dina! ✨</p>
              <p className="chat-status">
                <span className="chat-dot" aria-hidden="true" /> says hi from Cebu, PH
              </p>
            </div>
            <button ref={closeRef} className="chat-close" onClick={closePanel} aria-label="Close chat">
              ×
            </button>
          </header>

          <div className="chat-messages" ref={listRef} aria-live="polite">
            {messages.map((message) => (
              <p key={message.id} className={`chat-bubble chat-bubble--${message.from}`}>
                {message.content}
              </p>
            ))}
            {typing && (
              <p className="chat-bubble chat-bubble--bot chat-typing" role="status" aria-label="Dina is typing">
                <span />
                <span />
                <span />
              </p>
            )}
          </div>

          <div className="chat-quick-replies">
            {QUICK_REPLIES.map((reply) => (
              <button
                key={reply.id}
                type="button"
                className={`chat-chip chat-chip--${reply.id}`}
                onClick={() => handleQuickReply(reply)}
              >
                <span aria-hidden="true">{reply.icon}</span> {reply.label}
              </button>
            ))}
          </div>

          <form className="chat-input-row" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="chat-input">
              Type a message
            </label>
            <input
              id="chat-input"
              type="text"
              placeholder="Ask about my projects, skills…"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              autoComplete="off"
            />
            <button type="submit" className="chat-send" aria-label="Send message">
              ➤
            </button>
          </form>
        </section>
      )}
    </div>
  );
}
