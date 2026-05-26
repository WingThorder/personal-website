function Navbar({ currentPage, onNavigate }) {
  //   console.log("Render Navbar");
  const hoverClick = (page) => {
    onNavigate(page);
  };
  const linkClasses = (page) => {
    return currentPage === page
      ? "p-4 text-gray-300 hover:bg-gray-900 text-white px-3 bg-gray-900"
      : "p-4 text-gray-300 hover:text-white px-3";
  };
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white text-lg font-bold">
            My Personal Website
          </div>
          <div>
            {/* <a>'s background tuurns little white when I hover it*/}
            <a
              href="homePage"
              className={linkClasses("home")}
              onClick={() => hoverClick("home")}
            >
              Home
            </a>

            <a
              href="skillsPage"
              className={linkClasses("skills")}
              onClick={() => hoverClick("skills")}
            >
              Skills
            </a>
            <a
              href="projectsPage"
              className={linkClasses("projects")}
              onClick={() => hoverClick("projects")}
            >
              Projects
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
