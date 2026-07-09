"use client";

import { useEffect, useState, useRef } from "react";

interface TypeWriterProps {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function TypeWriter({
  words,
  speed = 80,
  deleteSpeed = 50,
  pauseTime = 2000,
  className = "",
  style,
}: TypeWriterProps) {
  const [text, setText] = useState("");
  const wordIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function tick() {
      const currentWord = words[wordIndexRef.current] ?? "";
      const isDeleting = isDeletingRef.current;

      if (!isDeleting) {
        // Typing forward
        charIndexRef.current += 1;
        setText(currentWord.slice(0, charIndexRef.current));

        if (charIndexRef.current === currentWord.length) {
          isDeletingRef.current = true;
          timeoutRef.current = setTimeout(tick, pauseTime);
          return;
        }

        timeoutRef.current = setTimeout(tick, speed);
      } else {
        // Deleting backward
        charIndexRef.current -= 1;
        setText(currentWord.slice(0, charIndexRef.current));

        if (charIndexRef.current === 0) {
          isDeletingRef.current = false;
          wordIndexRef.current = (wordIndexRef.current + 1) % words.length;
          timeoutRef.current = setTimeout(tick, 300);
          return;
        }

        timeoutRef.current = setTimeout(tick, deleteSpeed);
      }
    }

    timeoutRef.current = setTimeout(tick, speed);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [words, speed, deleteSpeed, pauseTime]);

  return (
    <span className={`inline-flex items-center ${className}`} style={style}>
      <span>{text}</span>
      <span className="ml-1 inline-block w-[2px] h-6 bg-current animate-pulse" />
    </span>
  );
}
