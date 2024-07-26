import { useState, useEffect } from 'react';
import styles from './AIOutputProcessor.module.scss';
import { CommandmentIcon } from '@src/assets/images';

interface AIOutputProcessorProps {
  getAIOutput: () => Promise<string>;
}

const AIOutputProcessor = ({ getAIOutput }: AIOutputProcessorProps) => {
  const [output, setOutput] = useState<string>('');
  const [processedOutput, setProcessedOutput] = useState<string[]>([]);

  const processOutput = (input: string): string[] => {
    const lines = input.split('\n').map((line) => line.trim());
    const filteredLines = lines.filter((line) => line.match(/^\d+[.!?]/));

    if (filteredLines.length !== 10) {
      return [];
    }

    const processedLines = filteredLines.map((line) => {
      const withoutNumber = line.replace(/^\d+[.!?]\s*/, '');
      return withoutNumber.length <= 30 ? withoutNumber : null;
    });

    return processedLines.every((line) => line !== null) ? (processedLines as string[]) : [];
  };

  const fetchAndProcessOutput = async () => {
    try {
      const newOutput = await getAIOutput();
      setOutput(newOutput);
      const processed = processOutput(newOutput);
      setProcessedOutput(processed);
      if (processed.length === 0) {
        throw new Error('Invalid output');
      }
    } catch (error) {
      console.error('Error processing output:', error);
      fetchAndProcessOutput();
    }
  };

  useEffect(() => {
    fetchAndProcessOutput();
  }, []);

  return (
    <>
      {processedOutput.map((line, index) => (
        <div key={index} className={styles.commandmentItem}>
          <CommandmentIcon className={styles.icon} />
          {line}
        </div>
      ))}
    </>
  );
};

export default AIOutputProcessor;
