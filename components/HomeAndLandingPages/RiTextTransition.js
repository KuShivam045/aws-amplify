import { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";

const RiTextTransition = () => {
  const [index, setIndex] = useState(0);
  const TEXTS = [
    "Short Term Contract ",
    "One Off GIG",
    "Commission Based",
    "Bulk Hiring",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="text-2xl text-neutral-900 mt-8"
    >
      <TextTransition springConfig={presets.default}>{TEXTS[index % TEXTS.length]}</TextTransition>
    </div>
  );
};

export default RiTextTransition;
