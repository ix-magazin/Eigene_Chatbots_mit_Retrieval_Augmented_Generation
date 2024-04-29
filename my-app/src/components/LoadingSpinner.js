// adaptiert von Kirtesh Bansal: Create a Spinner Loader in React using CSS (2022)
// https://dev.to/kirteshbansal/spinner-loader-in-react-using-css-458h
export default function Spinner() {
    return (
        <div>
            <div className="loading-spinner"></div>
            <p className="loading-spinner-text">Antwort wird generiert...</p>
        </div>
    );
}