import styles from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label?: string;
  isRequired?: boolean;
  isError?: boolean;
  ErrorMessage?: string;
}

const Input = ({
  id,
  label,
  isRequired = false,
  isError = false,
  ErrorMessage,
  ...props
}: InputProps) => {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
          {isRequired && <span>*</span>}
        </label>
      )}

      <div className={styles.inputWrapper}>
        <input
          id={id}
          name={props.name}
          value={props.value}
          spellCheck={false}
          onChange={props.onChange}
          disabled={props.disabled}
          autoFocus={props.autoFocus}
          onKeyPress={props.onKeyPress}
          placeholder={props.placeholder}
          defaultValue={props.defaultValue}
          className={`
            ${styles.input}
            ${isError ? styles.error : ''}
          `}
        />
        {isError && <p className={styles.errorMessage}>{ErrorMessage}</p>}
      </div>
    </div>
  );
};

export default Input;
