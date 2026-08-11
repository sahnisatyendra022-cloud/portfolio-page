import React, { useEffect, useState } from 'react';

const PHRASES = ['ROS 2', 'AI & Robotics', 'SLAM & Navigation'];
const MAX_COMPLETED_PHRASES = PHRASES.length * 2;
const FINAL_TEXT = 'AI & Robotics';

const TypingText = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    let phraseIndex = 0;
    let characterIndex = 0;
    let isDeleting = false;
    let completedPhrases = 0;
    let stopped = false;
    let timerId;

    const type = () => {
      const phrase = PHRASES[phraseIndex];
      let delay = 100;

      if (!isDeleting) {
        characterIndex += 1;
        setText(phrase.slice(0, characterIndex));

        if (characterIndex === phrase.length) {
          isDeleting = true;
          delay = 2000;
        }
      } else {
        characterIndex -= 1;
        setText(phrase.slice(0, characterIndex));
        delay = 50;

        if (characterIndex === 0) {
          completedPhrases += 1;

          if (completedPhrases >= MAX_COMPLETED_PHRASES) {
            setText(FINAL_TEXT);
            return;
          }

          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % PHRASES.length;
          delay = 350;
        }
      }

      if (!stopped) timerId = window.setTimeout(type, delay);
    };

    timerId = window.setTimeout(type, 100);
    return () => {
      stopped = true;
      window.clearTimeout(timerId);
    };
  }, []);

  return <span className="border-b-2 border-[#0ea5e9] text-[#0ea5e9]">{text}</span>;
};

export default TypingText;
