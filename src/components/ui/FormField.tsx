import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from 'react'
import type { FieldError } from 'react-hook-form'

interface BaseProps {
  label: string
  error?: FieldError
  id: string
}

interface InputFieldProps extends BaseProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> {
  as?: 'input'
}

interface TextareaFieldProps extends BaseProps, Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id'> {
  as: 'textarea'
}

type FormFieldProps = InputFieldProps | TextareaFieldProps

const FormField = forwardRef<HTMLInputElement | HTMLTextAreaElement, FormFieldProps>(
  ({ label, error, id, as = 'input', ...props }, ref) => {
    return (
      <div className="form-field">
        <label htmlFor={id} className="form-label">
          {label}
          {props.required && (
            <span style={{ color: 'var(--azure)', marginLeft: 2 }} aria-label="required">*</span>
          )}
        </label>

        {as === 'textarea' ? (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            id={id}
            className={`form-input form-textarea ${error ? 'error' : ''}`}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${id}-error` : undefined}
            {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            id={id}
            className={`form-input ${error ? 'error' : ''}`}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${id}-error` : undefined}
            {...(props as InputHTMLAttributes<HTMLInputElement>)}
          />
        )}

        {error && (
          <p id={`${id}-error`} className="form-error" role="alert">
            {error.message}
          </p>
        )}
      </div>
    )
  }
)

FormField.displayName = 'FormField'
export default FormField
