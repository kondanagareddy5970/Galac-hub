import { forwardRef, type ReactNode, type ButtonHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'

type ButtonVariant = 'primary' | 'primary-dark' | 'secondary' | 'secondary-dark' | 'azure'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  href?: string
  children: ReactNode
  fullWidth?: boolean
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
}

const variantMap: Record<ButtonVariant, string> = {
  'primary': 'btn btn-primary',
  'primary-dark': 'btn btn-primary-dark',
  'secondary': 'btn btn-secondary',
  'secondary-dark': 'btn btn-secondary-dark',
  'azure': 'btn btn-azure',
}

const sizeMap = {
  sm: { height: 40, paddingInline: 20, fontSize: 13 },
  md: { height: 52, paddingInline: 28, fontSize: 15 },
  lg: { height: 60, paddingInline: 36, fontSize: 16 },
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', href, children, fullWidth, size = 'md', loading, className = '', style, ...props }, ref) => {
    const cls = `${variantMap[variant]} ${className}`
    const sz = sizeMap[size]
    const styles = { ...sz, width: fullWidth ? '100%' : undefined, ...style }

    if (href) {
      return (
        <Link to={href} className={cls} style={styles as React.CSSProperties}>
          {loading ? (
            <span
              style={{
                width: 16, height: 16, border: '1.5px solid currentColor',
                borderTopColor: 'transparent', borderRadius: '50%',
                display: 'inline-block', animation: 'spin 0.7s linear infinite',
              }}
            />
          ) : children}
        </Link>
      )
    }

    return (
      <button ref={ref} className={cls} style={styles as React.CSSProperties} {...props}>
        {loading ? (
          <span
            style={{
              width: 16, height: 16, border: '1.5px solid currentColor',
              borderTopColor: 'transparent', borderRadius: '50%',
              display: 'inline-block', animation: 'spin 0.7s linear infinite',
            }}
          />
        ) : children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
