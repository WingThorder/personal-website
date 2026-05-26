import DisplayCard from "./DisplayCard";

function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold mb-6">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DisplayCard
          id="museum-ai"
          title={
            <a
              href="https://github.com/WingThorder/open-webui-Museum-Assistant"
              target="_blank"
            >
              Museum AI Assistant Web Application
            </a>
          }
          description={
            <div>
              <p className="mb-2">
                Final Year Project — an AI assistant for museums:
              </p>
              <ul className="list-disc list-inside mb-3 text-sm text-gray-700">
                <li>
                  Answer art-related questions about artworks and museums
                  (global & local)
                </li>
                <li>AR feature to display artwork animations</li>
                <li>
                  Self-trained CNN model to identify local, less-famous artworks
                </li>
              </ul>

              <div className="font-semibold">Used Techniques</div>
              <ul className="list-disc list-inside text-sm text-gray-700">
                <li>React.js (admin system)</li>
                <li>Svelte (main frontend)</li>
                <li>PostgreSQL (RAG document storage)</li>
                <li>FastAPI (Python backend)</li>
                <li>Ollama (hosted AI model)</li>
                <li>RAG (retrieval-augmented generation)</li>
              </ul>
            </div>
          }
          imageUrl="FYP.gif"
          alt="Museum AI Assistant"
        />

        <DisplayCard
          id="supersandwich"
          title={
            <a
              href="https://github.com/WingThorder/COMP4021-Group-Project"
              target="_blank"
            >
              SuperSandwich Game
            </a>
          }
          description={
            <div>
              <p className="mb-2">
                COMP4021 Group Project — a pixel-style two-player cooking battle
                web game:
              </p>
              <ul className="list-disc list-inside mb-3 text-sm text-gray-700">
                <li>
                  Pixel-art gameplay inspired by Overcooked focused on sandwich
                  making
                </li>
                <li>Two-player competitive mode</li>
              </ul>

              <div className="font-semibold">Used Techniques</div>
              <ul className="list-disc list-inside text-sm text-gray-700">
                <li>HTML, CSS, JavaScript (frontend)</li>
                <li>Express.js (backend)</li>
                <li>jQuery</li>
              </ul>
            </div>
          }
          imageUrl="COMP4021.gif"
          alt="SuperSandwich Game"
        />

        <DisplayCard
          id="websearch-sim"
          title="WebSearch Engine Simulator"
          description={
            <div>
              <p className="mb-2">
                COMP4321 Group Project — a web app that simulates search engine
                ranking:
              </p>
              <ul className="list-disc list-inside mb-3 text-sm text-gray-700">
                <li>
                  Allow users to search and find correct webpage results given a
                  set
                </li>
                <li>Demonstrates ranking and retrieval techniques</li>
              </ul>

              <div className="font-semibold">Used Techniques</div>
              <ul className="list-disc list-inside text-sm text-gray-700">
                <li>Java (search engine backend)</li>
                <li>HTML, CSS, JavaScript (frontend)</li>
                <li>P-norm model, Cosine similarity (ranking techniques)</li>
              </ul>
            </div>
          }
          imageUrl="COMP4321.JPG"
          alt="WebSearch Engine Simulator"
        />
      </div>
    </section>
  );
}

export default ProjectsPage;
