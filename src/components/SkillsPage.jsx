function SkillsPage() {
  const programming = [
    "C++",
    "Java",
    "Python",
    "HTML",
    "JavaScript",
    "CSS",
    "SQL",
  ];

  const frameworks = [
    "React.js",
    "Svelte",
    "Flask",
    "Express.js",
    "jQuery",
    "Ninja",
  ];

  const tools = ["GitHub", "MySQL", "PostgreSQL"];

  const advanced = [
    "Operating Systems concepts",
    "Computer Networking fundamentals",
    "Software Engineering development lifecycle",
  ];

  return (
    <section className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold mb-4">Skills</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-3">Programming Languages</h2>
          <div className="flex flex-wrap">
            {programming.map((lang) => (
              <span
                key={lang}
                className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full mr-2 mb-2 text-sm shadow-sm"
              >
                {lang}
              </span>
            ))}
          </div>

          <h2 className="text-xl font-semibold mt-6 mb-3">Frameworks</h2>
          <div className="flex flex-wrap">
            {frameworks.map((fw) => (
              <span
                key={fw}
                className="inline-block bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full mr-2 mb-2 text-sm shadow-sm"
              >
                {fw}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-3">Tools</h2>
          <div className="flex flex-wrap">
            {tools.map((t) => (
              <span
                key={t}
                className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded-full mr-2 mb-2 text-sm shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>
          <h2 className="text-xl font-semibold mb-3">AI Tools Used</h2>
          <div className="flex flex-wrap items-center">
            <div className="mr-4 mb-2">
              <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full  mr-2 mb- text-sm shadow-sm">
                Copilot
              </span>
              <span className="inline-block bg-purple-50 text-purple-700 px-3 py-1 rounded-full  mr-2 mb-2 text-sm shadow-sm">
                Cursor
              </span>
              <div className="text-xs text-gray-500 mt-1">Code Assistant</div>
            </div>

            <div className="mt-2 mr-4 mb-2">
              <span className="inline-block bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-sm shadow-sm">
                Ollama
              </span>
              <div className="text-xs text-gray-500 mt-1">
                Ollama — self-hosted model (hosted by me)
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mt-6 mb-3">Advanced Knowledge</h2>
        <ul className="list-disc list-inside text-gray-700">
          {advanced.map((a) => (
            <li key={a} className="mb-2">
              {a}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default SkillsPage;
