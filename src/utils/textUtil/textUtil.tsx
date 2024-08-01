
export const splitTextWithLineBreaks = (text: string): (string | JSX.Element)[] => {
    return text.split(' ').reduce<(string | JSX.Element)[]>((prev, current, i) => {
      if (i !== 0 && i % 5 === 0) {
        return [...prev, <br key={i} />, current];
      }
      return [...prev, ` ${current}`];
    }, []);
  };