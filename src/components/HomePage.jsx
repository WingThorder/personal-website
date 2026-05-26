import DisplayCard from "./DisplayCard";
function HomePage() {
  return (
    <>
      <div className="m-5">
        <h1 className="text-4xl font-extrabold">About Me</h1>
        <div className="flex flex-col md:flex-row items-start gap-6 my-6 max-w-4xl m-auto">
          <div className="flex-shrink-0 flex flex-col items-center md:items-start">
            <img
              src="portrait.jpg"
              alt="portrait"
              className="rounded-lg shadow-lg w-60 h-auto object-cover"
            />

            <div className="mt-4 bg-gray-50 p-4 rounded-md w-60 text-left">
              <div className="text-lg font-semibold">LEUNG Hei Ho, Leo</div>
              <div className="text-sm text-gray-500">
                The Hong Kong University of Science and Technology
              </div>

              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M2 12c0 5.523 9 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12zm10-3a3 3 0 110 6 3 3 0 010-6z" />
                  </svg>
                  <span className="ml-2">Hong Kong, HK</span>
                </li>

                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-1 4l-7 4-7-4V6l7 4 7-4v2z" />
                  </svg>
                  <a
                    href="mailto:leo380687@gmail.com"
                    className="ml-2 text-blue-600 hover:underline"
                  >
                    leo380687@gmail.com
                  </a>
                </li>

                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.333-5.467-5.931 0-1.31.467-2.381 1.235-3.221-.123-.304-.536-1.527.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.649.242 2.872.12 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.807 5.624-5.48 5.921.43.371.823 1.102.823 2.222v3.293c0 .319.218.694.825.576C20.565 22.092 24 17.593 24 12.297 24 5.67 18.627.297 12 .297z" />
                  </svg>
                  <a
                    href="https://github.com/WingThorder"
                    target="_blank"
                    rel="noreferrer"
                    className="ml-2 text-blue-600 hover:underline"
                  >
                    github.com/WingThorder
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Hi! I’m Leo, a final year computer science student at The Hong Kong
            University of Science and Technology, pursuing a Bachelor of
            Engineering in Computer Science. <br />I enjoy creating practical
            and innovative solutions. Beyond academics, I work as a STEM tutor,
            teaching young learners to code with platforms like Scratch,
            Minecraft, and App Inventor, which has strengthened my communication
            and problem-solving skills. <br />
            My interests lie in software/web development and interactive
            learning technologies, and I’m always eager to explore new ideas
            that merge technology with creativity.
          </p>
        </div>

        <h1 className="text-4xl font-extrabold mt-8">Education</h1>
        <div className="w-full max-w-4xl mx-auto mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DisplayCard
              id="HKUST"
              title="The Hong Kong University of Science and Technology"
              description={
                <p>
                  Bechalor of Engineering in Computer Science <br /> Study
                  Period: 2023-2026
                </p>
              }
              imageUrl="CSEIcon.png"
              alt="HKUST CSE Icon"
            />
            <DisplayCard
              id="HKCC"
              title={
                <>
                  <div className="h-38"></div>
                  <p>Hong Kong Community College</p>
                  <div className="h-6"></div>
                </>
              }
              description={
                <p>
                  Associate Degree in Information Technology <br /> Study
                  Period: 2021-2023
                </p>
              }
              imageUrl="HKCCIcon.png"
              alt="HKCC Icon"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
