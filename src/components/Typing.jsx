import { useEffect, useState } from "react";
import "./css/type.css";

function Typing({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pause = 1500,
}) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (texts.length === 0) return;

    const currentText = texts[currentIndex];
    let timeout;

    const handleTyping = () => {
      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        if (charIndex < currentText.length) {
          setDisplayText((prev) => prev + currentText[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          timeout = setTimeout(() => setIsDeleting(true), pause);
        }
      }
    };

    timeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isDeleting,
    charIndex,
    texts,
    currentIndex,
    typingSpeed,
    deletingSpeed,
    pause,
  ]);
  return (
    <>
      <h1>
        {displayText}
        <span className="blinking-cursor">|</span>
      </h1>
    </>
  );
}

export default Typing;
