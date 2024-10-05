export default function InfoButton({children, ... attributes}) {
    return (
        <button type = "button" {...attributes} className = "info">
            {children}
        </button>
    );
}