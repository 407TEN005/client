import { useEffect, useState } from 'react';

const useInput = (defaultErrorMessage?: string) => {
  const [data, setData] = useState<string | undefined>(undefined);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  const handleChange = (value: string) => {
    setData(value);
  };

  useEffect(() => {
    if (data && data.length > 20) {
      setErrorMessage(defaultErrorMessage);
    } else {
      setErrorMessage(undefined);
    }
  }, [data, defaultErrorMessage]);

  return {
    data,
    errorMessage,
    setData,
    setErrorMessage,
    handleChange,
  };
};

export default useInput;
