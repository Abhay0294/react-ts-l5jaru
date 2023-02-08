import * as React from 'react';

const TypingEffect = ({ typingSpeed, text }) => {
  const [typedText, setTypedText] = React.useState('');
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    const typing = setInterval(() => {
      setTypedText((prevTypedText) => prevTypedText + text.charAt(counter));
      setCounter(counter + 1);
      if (counter + 1 === text.length) {
        clearInterval(typing);
      }
    }, typingSpeed);
    return () => clearInterval(typing);
  }, [counter, typingSpeed, text]);

  return <div>{typedText}</div>;
};

export default TypingEffect;
