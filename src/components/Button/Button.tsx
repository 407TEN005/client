import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'l' | 'm';
  isActive?: boolean;
  variant?: 'blue' | 'yellow' | 'green' | 'outlined';
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
