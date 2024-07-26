import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'xl' | 'l' | 'm';
  isActive?: boolean;
  variant?: 'blue' | 'yellow' | 'green' | 'gray' | 'outlined';
  className?: string;
}

const Button = ({
  size = 'l',
  isActive = false,
  variant = 'blue',
  className,
  ...props
}: ButtonProps) => {
  const classNames = `
    ${styles.button}
    ${styles[size]}
    ${styles[variant]}
    ${className} 
    ${isActive ? styles.isActive : ''}
  `;

  return (
    <button className={classNames} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
