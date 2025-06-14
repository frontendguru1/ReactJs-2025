import { useState } from "react";
import { createPortal } from "react-dom";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1>About</h1>
      <p>This is the about page of our application.</p>
      <p>Here you can find information about the app and its features.</p>

      <button onClick={() => setIsOpen(!isOpen)}>Open Modal </button>
      {isOpen &&
        createPortal(
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "20px",
              color: "black",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h2>Modal Title</h2>
            <p>This is a modal dialog.</p>
            <button onClick={() => setIsOpen(false)}>Close Modal</button>
          </div>,
          document.body
        )}
    </div>
  );
};
export default About;
