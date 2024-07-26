import Lottie from 'lottie-react';
import loadingAnimation from '@animations/loadingspinner.json';

interface LoadingSpinnerProps {
  width?: number | string;
  height?: number | string;
}

const LoadingSpinner = ({ width, height }: LoadingSpinnerProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 100 100">
      <foreignObject width="100%" height="100%">
        <Lottie
          animationData={loadingAnimation}
          loop={true}
          autoplay={true}
          style={{ width: '100%', height: '100%' }}
        />
      </foreignObject>
    </svg>
  );
};

export default LoadingSpinner;
