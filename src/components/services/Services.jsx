import { useState, useEffect } from "react"; 
import "./services.css";

export default function Services() {

  const [isNavVisible, setIsNavVisible] = useState(false);

 
  const toggleNav = () => {
    setIsNavVisible(prevState => !prevState);
  };


  const closeNav = () => {
    setIsNavVisible(false);
  };

 
  const handleOutsideClick = (e) => {
    const lessonNav = document.getElementById("lesson-nav-btn");
    const navUl = document.getElementById("nav-ul");

    if (!lessonNav.contains(e.target) && !navUl.contains(e.target)) {
      setIsNavVisible(false);
    }
  };


  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div className="lesson-nav">
        <button id="lesson-nav-btn" onClick={toggleNav}>/?/</button>
        <ul id="nav-ul" style={{ display: isNavVisible ? "block" : "none" }}>
          <button id="close-btn" aria-label="Close navigation" onClick={closeNav}>
            &times;
          </button>
          
          <li><a href="#lesson1">L1. Intro. to Web Development</a></li>
          <li><a href="#lesson2">L2. Intro. to HTML</a></li>
          <li><a href="#lesson3">L3. Intro. to CSS</a></li>
          <li><a href="#lesson4">L4. Advanced CSS</a></li>
          <li><a href="#lesson5">L5. Intro. to JavaScript</a></li>
          <li><a href="#lesson6">L6. Project 1</a></li>
          <li><a href="#lesson7">L7. Project 2</a></li>
          <li><a href="#lesson8">L8. Project 3</a></li>
          <li><a href="#lesson9">L9. Project 4</a></li>
          <li><a href="#lesson10">L10. Bootstrap or Tailwind</a></li>
          <li><a href="#lesson11">L11. React</a></li>
          <li><a href="#lesson12">L12. Figma</a></li>
          <li><a href="#lesson13">L13. Git & GitHub</a></li>
          <li><a href="#lesson14">L14. Portfolio Development</a></li>
          <li><a href="#lesson15">L15. Deployment</a></li>
          <li><a href="#lesson16">L16. </a></li>
          <li><a href="#lesson17">L17. </a></li>
          <li><a href="#lesson18">L18. </a></li>
          <li><a href="#lesson19">L19. </a></li>
          <li><a href="#lesson20">L20. </a></li>
        </ul>
      </div>
      <div className="lesson-plan">
        <h2>What is a <strong>programming language</strong>?</h2>
        <p>
          A <strong>programming language</strong> is a formal system of communication used by developers to give
          instructions to a computer. These instructions, or "code," tell the computer what tasks to perform.
          Programming languages consist of a set of rules (syntax) and symbols (keywords, operators, etc.) that allow
          a programmer to write software, build applications, and manipulate data.
        </p>

        <p>Some examples of popular programming languages include:</p>
        <ul>
          <li><strong>Python:</strong> Known for its simplicity and readability, it is often used in web development, data
            analysis, and artificial intelligence.</li>
          <li><strong>JavaScript:</strong> Primarily used for web development to add interactivity to websites.</li>
          <li><strong>Java:</strong> Widely used for building large-scale enterprise applications, mobile apps (Android),
            and more.</li>
          <li><strong>C++:</strong> Used for performance-critical applications, such as video games, operating systems, and
            hardware drivers.</li>
          <li><strong>Ruby:</strong> Known for its elegant syntax, Ruby is often used in web development, particularly with the
            Ruby on Rails framework.</li>
        </ul>
      </div>
      <div className="lesson-plan" id="lesson1">
        <h2 className="lesson-title">Lesson 1: Introduction to Web Development</h2>
        <p className="lesson-goal">Goal: Introduce basic web development concepts and set up the development environment.</p>
        <div className="lesson-content">
          <ul>
            <li>What is Web Development?</li>
            <li>Frontend vs Backend Development.</li>
            <li>Tools and Languages: HTML, CSS, JavaScript.</li>
            <li>Setting up Development Environment:
              <ul>
                <li>Installing a Text Editor (e.g., Visual Studio Code, Sublime Text).</li>
                <li>Introduction to Browser Developer Tools (Inspect, Console).</li>
              </ul>
            </li>
            <li>Basic HTML Structure:
              <ul>
                <li>Understanding the <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, and <code>&lt;body&gt;</code> tags.</li>
                <li>How to create a basic webpage using HTML.</li>
              </ul>
            </li>
          </ul>
          <div className="task">
            <p><strong>Practice Task:</strong> Create a simple HTML page with a heading, a paragraph, and an image.</p>
          </div>
        </div>
      </div>
      <div className="lesson-plan" id="lesson2">
        <h2 className="lesson-title">Lesson 2: Introduction to HTML</h2>
        <p className="lesson-goal">Goal: Teach the structure of a webpage using HTML.</p>
        <div className="lesson-content">
          <ul>
            <li>HTML Elements and Tags:
              <ul>
                <li>Common Tags: <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;img&gt;</code>, <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code>, <code>&lt;div&gt;</code>, and <code>&lt;span&gt;</code>.</li>
                <li>Attributes in HTML (e.g., <code>src</code>, <code>href</code>, <code>alt</code>, etc.).</li>
              </ul>
            </li>
            <li>Creating Links and Images:
              <ul>
                <li>Anchor tags for linking pages (<code>&lt;a href="link"&gt;</code>).</li>
                <li>Adding images (<code>&lt;img src="image.jpg" alt="description"&gt;</code>).</li>
              </ul>
            </li>
            <li>Lists and Tables:
              <ul>
                <li>How to create ordered and unordered lists.</li>
                <li>Introduction to tables and their basic structure.</li>
              </ul>
            </li>
          </ul>
          <div className="task">
            <p><strong>Practice Task:</strong> Create a webpage with links to different pages, an image, and a table.</p>
          </div>
        </div>
      </div>

      <div className="lesson-plan" id="lesson3">
        <h2 className="lesson-title">Lesson 3: Introduction to CSS (Cascading Style Sheets)</h2>
        <p className="lesson-goal">Goal: Teach how to style web pages using CSS.</p>
        <div className="lesson-content">
          <ul>
            <li>What is CSS?
              <ul>
                <li>Inline CSS, Internal CSS, and External CSS.</li>
              </ul>
            </li>
            <li>CSS Selectors:
              <ul>
                <li>Class selectors (<code>.classname</code>), ID selectors (<code>#id</code>), and element selectors (<code>p</code>, <code>h1</code>, etc.).</li>
              </ul>
            </li>
            <li>Basic Styling:
              <ul>
                <li>Changing text color, font, background color, margins, padding.</li>
                <li>Box Model concept: margin, border, padding, content.</li>
              </ul>
            </li>
            <li>CSS Layout:
              <ul>
                <li>Using float, display, and position.</li>
                <li>Introduction to Flexbox for layout design.</li>
              </ul>
            </li>
          </ul>
          <div className="task">
            <p><strong>Practice Task:</strong> Style the HTML page created earlier using CSS (colors, fonts, margins, etc.).</p>
          </div>
        </div>
      </div>


      <div className="lesson-plan" id="lesson20">
        <h2 className="lesson-title">Lesson 20: Deploying Firebase Apps with React</h2>
        <p className="lesson-goal">Goal: Learn how to deploy React apps with Firebase integration to platforms like Netlify, Vercel, or Firebase Hosting.</p>
        <div className="lesson-content">
          <ul>
            <li><strong>Firebase Hosting Setup:</strong> How to deploy a React app to Firebase Hosting, setting up Firebase CLI and hosting the app.</li>
            <li><strong>Integrating Firebase with Netlify or Vercel:</strong> Deploying Firebase-powered apps on platforms like Netlify or Vercel while using Firebase for backend services.</li>
            <li><strong>Managing Firebase Deployments:</strong> Using Firebase's hosting features to manage different environments (e.g., development, production).</li>
          </ul>
        </div>
        <div className="practice-exercises task">
          <h3>Practice Exercises:</h3>
          <ul>
            <li>Deploy the Firebase-based React app you created to Firebase Hosting or another deployment platform like Netlify or Vercel.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
