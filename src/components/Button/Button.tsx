import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'l' | 'm';
  variant?: 'blue' | 'yellow' | 'green';
  className?: string;
}

const Button = ({ size = 'l', variant = 'blue', className, ...props }: ButtonProps) => {
  const classNames = `
    ${styles.button}
    ${styles[size]}
    ${styles[variant]}
    ${className} 
  `;

  return (
    <button className={classNames} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
