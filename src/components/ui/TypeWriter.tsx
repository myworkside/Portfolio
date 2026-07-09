'use client';

import { useEffect, useRef, useState } from 'react';

interface TypeWriterProps {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
}

export default function TypeWriter({
  words,
  speed = 80,
  deleteSpeed = 50,
  pauseTime = 2000,
}: TypeWriterProps) {
  const [text, setText] = useState('');
  const wordIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    function tick() {
      const currentWord = words[wordIndexRef.current] ?? '';
      const isDeleting = isDeletingRef.current;

      if (!isDeleting) {
        // Typing forward
        charIndexRef.current += 1;
        setText(currentWord.slice(0, charIndexRef.current));

        if (charIndexRef.current >= currentWord.length) {
          // Finished typing — pause then delete
          isDeletingRef.current = true;
          timeoutRef.current = setTimeout(tick, pauseTime);
          return;
        }

        timeoutRef.current = setTimeout(tick, speed);
      } else {
        // Deleting
        charIndexRef.current -= 1;
        setText(currentWord.slice(0, charIndexRef.current));

        if (charIndexRef.current <= 0) {
          // Finished deleting — move to next word
          isDeletingRef.current = false;
          wordIndexRef.current = (wordIndexRef.current + 1) % words.length;
          timeoutRef.current = setTimeout(tick, speed / 2);
          return;
        }

        timeoutRef.current = setTimeout(tick, deleteSpeed);
      }
    }

    // Kick off the loop
    timeoutRef.current = setTimeout(tick, speed);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [words, speed, deleteSpeed, pauseTime]);

  return (
    <span className="inline-flex items-center">
      <span
        className="font-semibold"
        style={{
          background: 'linear-gradient(135deg, #4F46E5, #00E5FF)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {text}
      </span>
      <span
        className="ml-0.5 inline-block w-[2px] h-[1.1em] rounded-full"
        style={{
          background: 'linear-gradient(to bottom, #4F46E5, #00E5FF)',
          animation: 'typewriter-blink 0.8s step-end infinite',
        }}
      />

      <style jsx>{`
        @keyframes typewriter-blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </span>
  );
}
