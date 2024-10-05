export default function InfoButton({children, ... attributes}) {
    return (
        <button type = "info" {...attributes} className = "info">
            {children}
        </button>
    );
}