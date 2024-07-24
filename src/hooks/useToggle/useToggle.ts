import { useState } from 'react';

const useToggle = (initialState?: boolean) => {
  const [isOn, setIsOn] = useState<boolean>(initialState || false);

  const toggle = () => setIsOn(!isOn);

  const toggleOn = () => setIsOn(true);

  const toggleOff = () => setIsOn(false);

  return {
    isOn,
    toggle,
    toggleOn,
    toggleOff,
  };
};

export default useToggle;
