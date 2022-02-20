import "./header.css";

export default function Header() {
    return (
        <div className="header">
            <h1 className="headerText">Publish your thoughts</h1>
            <img 
            className="headerImage"
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
             alt="Blog background"
            />
        </div>
    );
}