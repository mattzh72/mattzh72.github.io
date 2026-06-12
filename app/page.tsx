import Sidebar from "@/components/Sidebar";

export default function Home() {
  const linkClass = "text-[#002FA7] hover:opacity-80 transition-opacity";

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
            <ul className="list-disc text-base leading-relaxed mb-4 ml-6 space-y-1">
              <li>
                <span className="whitespace-nowrap">
                  <a
                    href="https://articraft3d.github.io/"
                    className={linkClass}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Articraft
                  </a>{" "}
                  <a
                    href="https://github.com/mattzh72/articraft"
                    className={linkClass}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    [code]
                  </a>
                </span>
                , an agentic system that generates articulated 3D assets from
                object descriptions
              </li>
              <li>
                <a
                  href="https://instruct-particulate.github.io/"
                  className={linkClass}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instruct-Particulate
                </a>
                , a model for inferring articulated structure, part
                segmentation, and joint motion parameters from static 3D meshes
              </li>
            </ul>
            <p className="text-base leading-relaxed mb-4">
              Before that, I was the second hire at Letta, working on memory,
              continual learning, evals, and early cloud-based general agents:{" "}
              <a
                href="https://www.letta.com/blog/letta-evals"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                Letta Evals
              </a>,{" "}
              <a
                href="https://www.letta.com/blog/context-bench"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                Context-Bench
              </a>, and a{" "}
              <a
                href="https://www.letta.com/case-studies/bilt"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                million-agent-scale powered rewards system for Bilt
              </a>.
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
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </a>
              <span className="text-neutral-900 mx-2">•</span>
              <a
                href="https://www.instagram.com/mattzh1314/"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <span className="text-neutral-900 mx-2">•</span>
              <a
                href="mailto:mattzh1314@gmail.com"
                className={linkClass}
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
