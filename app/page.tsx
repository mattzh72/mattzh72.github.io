import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full max-w-2xl mx-auto px-6 pt-40">
        <Sidebar />
        <div className="animate-in">
          <section>
            <p className="text-base leading-relaxed mb-4">
              I&apos;m currently a graduate researcher at the University of
              Cambridge, working on articulated 3D generation and
              simulation-ready assets.
            </p>
            <p className="text-base leading-relaxed mb-2">
              Recently, I&apos;ve worked on:
            </p>
            <ul className="text-base leading-relaxed mb-4 ml-6 space-y-1">
              <li>
                • Articraft, an agentic system that generates articulated 3D
                assets from object descriptions{" "}
                <a
                  href="https://articraft3d.github.io/"
                  className="text-[#002FA7] hover:opacity-80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [project]
                </a>{" "}
                <a
                  href="https://github.com/mattzh72/articraft"
                  className="text-[#002FA7] hover:opacity-80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [code]
                </a>
              </li>
              <li>
                • Instruct-Particulate, a model for inferring articulated
                structure, part segmentation, and joint motion parameters from
                static 3D meshes{" "}
                <a
                  href="https://instruct-particulate.github.io/"
                  className="text-[#002FA7] hover:opacity-80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [project]
                </a>
              </li>
            </ul>
            <p className="text-base leading-relaxed mb-4">
              Before that, I was the second hire at Letta, working on memory,
              continual learning, evals, and early cloud-based general agents:{" "}
              <a
                href="https://www.letta.com/blog/letta-filesystem"
                className="text-[#002FA7] hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                Letta Filesystem
              </a>
              ,{" "}
              <a
                href="https://www.letta.com/blog/letta-evals"
                className="text-[#002FA7] hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                Letta Evals
              </a>
              ,{" "}
              <a
                href="https://www.letta.com/blog/context-bench"
                className="text-[#002FA7] hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                Context-Bench
              </a>{" "}
              <a
                href="https://x.com/charlespacker/status/1983987055513534903?s=20"
                className="text-[#002FA7] hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                [post]
              </a>
              , and persistent-agent infrastructure{" "}
              <a
                href="https://www.letta.com/case-studies/bilt"
                className="text-[#002FA7] hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                [case study]
              </a>
              .
            </p>
            <p className="text-base leading-relaxed mb-4">
              Earlier, I was an engineer at Databricks, working on systems and
              deployment.
            </p>
            <p className="text-base leading-relaxed mb-4">
              I studied at Berkeley.
            </p>
            <p className="text-xs text-neutral-500 mt-8 text-right">
              <a
                href="https://x.com/Mattzh1314"
                className="text-[#002FA7] hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </a>
              <span className="text-neutral-900 mx-2">•</span>
              <a
                href="https://www.instagram.com/mattzh1314/"
                className="text-[#002FA7] hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <span className="text-neutral-900 mx-2">•</span>
              <a
                href="mailto:mattzh1314@gmail.com"
                className="text-[#002FA7] hover:opacity-80"
              >
                Email
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
