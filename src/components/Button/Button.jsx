import './style.css'

function Button({ active = false, onClick, children }) {
    return (
        <button active={active ? '' : undefined} onClick={onClick}>{children}</button>
    )
}

export default Button