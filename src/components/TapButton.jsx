export default function TapButton({ children, onSelect }) {
    // This function is called when the button is clicked
    return (
        <li>
            <button onClick={onSelect}>
                {children}
            </button>

        </li>
    )
}