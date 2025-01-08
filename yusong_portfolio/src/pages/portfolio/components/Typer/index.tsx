import React, { useEffect, useState } from 'react';

export interface TyperProps {
  className?: string;
  message: string;
  speed?: number;
  delay?: number;
}

const Typer: React.FC<TyperProps> = (props) => {
  const [text, setText] = useState<string>('');
  const [speed, setSpeed] = useState<number>(props.speed || 150);
  const [delay, setDelay] = useState<number>(props.delay || 5000);
  const [canStart, setCanStart] = useState<boolean>(false);

  const handleTyping = () => {
    if (canStart) {
      setText(props.message.substring(0, text.length + 1));
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => handleTyping(), speed);
    return () => clearTimeout(timeout);
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!canStart) {
        setCanStart(true);
      }
    }, delay);
    return () => clearTimeout(timeout);
  });

  return <span className={props.className}>{text}</span>;
};

export default Typer;
