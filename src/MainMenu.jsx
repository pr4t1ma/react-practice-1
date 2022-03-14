import "./main-menu.css";

const MainMenu = () => {
  return (
    <div className="main-menu">
      <nav>
        <ul>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Home
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              About
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export { MainMenu };
