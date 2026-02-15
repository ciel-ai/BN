import './Button.css'

const Button = ({
    children,
    variant = 'primary',
    onClick,
    type = 'button',
    className = '',
    icon = null
}) => {
    return (
        <button
            className={`btn btn-${variant} ${className}`}
            onClick={onClick}
            type={type}
        >
            {children}
            {icon && <span className="btn-icon">{icon}</span>}
        </button>
    )
}

export default Button
