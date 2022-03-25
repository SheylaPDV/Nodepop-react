import classNames from 'classnames';
import '../../assets/css/FormField.css';
import { forwardRef } from 'react';

// TODO: change label color on focus
/////////////////////////CAMPO DE FORMULARIO////////////////////////////////

const FormField = forwardRef(({ className, label, ...props }, ref) => {
  return (
    <div className={classNames('formField', className)}>
      <label className="formField-label">
        <span>{label}</span>
        <input
          ref={ref}
          className="formField-input"
          autoComplete="off"
          {...props}
        />
      </label>
    </div>
  );
});

export default FormField;
