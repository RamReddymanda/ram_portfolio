import { useEffect, useState } from "react";

export const useTypewriter = (words, speed = 90, pause = 1200) => {
  const [index, setIndex] = useState(0); // which word
  const [subIndex, setSubIndex] = useState(0); // which letter
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (subIndex < current.length) {
          setSubIndex(subIndex + 1);
        } else {
          setDeleting(true);
        }
      } else {
        if (subIndex > 0) {
          setSubIndex(subIndex - 1);
        } else {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        }
      }
    }, !deleting ? speed : speed / 2);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words, speed]);

  useEffect(() => {
    if (!deleting && subIndex === words[index % words.length].length) {
      const pauseTimer = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(pauseTimer);
    }
  }, [deleting, subIndex, index, words, pause]);

  return (
    words[index % words.length].substring(0, subIndex) +
    (subIndex % 2 === 0 ? "_" : "")
  );
};
