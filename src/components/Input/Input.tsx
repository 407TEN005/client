import styles from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label?: string;
  subLabel?: string;
  scale?: 'l' | 'm';
  isRequired?: boolean;
  isError?: boolean;
  errorMessage?: string;
}

const Input = ({
  id,
  label,
  subLabel,
  scale = 'l',
  isRequired = false,
  isError = false,
  errorMessage,
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

      {subLabel && (
        <label htmlFor={id} className={styles.subLabel}>
          {subLabel}
        </label>
      )}

      <div className={styles.inputWrapper}>
        <input
          id={id}
          name={props.name}
          value={props.value}
          autoComplete="off"
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
            ${styles[scale]}
          `}
        />
        {isError && <p className={styles.errorMessage}>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Input;
