import { ReactNode } from 'react';
import styles from './FormField.module.css';

type FormFieldProps = {
  label: string | ReactNode;
  isRequired?: boolean;
  control: ReactNode;
};

const LabelRequired = () => {
  return <i className={styles.required}></i>;
};

export const FormField = ({ label, isRequired, control }: FormFieldProps) => {
  return (
    <div className={styles.formField}>
      <h4 className={styles.formHeading}>
        {label} {isRequired && <LabelRequired />}
      </h4>
      <div className={styles.controlWrapper}>{control}</div>
    </div>
  );
};
