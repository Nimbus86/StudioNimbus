import { useState } from "react";
import { projects } from "../data/projects";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div>
        <h1 className="text-5xl font-bold text-cyan-400 mb-10">
          Projects
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelected(project)}
              className="
                bg-slate-900
                rounded-2xl
                overflow-hidden
                border border-cyan-500/20
                hover:border-cyan-400
                hover:shadow-[0_0_20px_#00e5ff]
                transition
                cursor-pointer
              "
            >
              <video
                src={project.media}
                className="w-full h-64 object-cover"
                muted
                loop
                autoPlay
                playsInline
              />

              <div className="p-4">
                <h2 className="text-white text-lg">
                  {project.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="
            fixed inset-0
            bg-black/95
            z-50
            flex
            items-center
            justify-center
            p-10
          "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-7xl max-h-full"
          >
            <button
              onClick={() => setSelected(null)}
              className="
                absolute
                top-6
                right-8
                text-white
                text-5xl
                hover:text-cyan-400
              "
            >
              ×
            </button>

            <video
              src={selected.media}
              controls
              autoPlay
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  );
}