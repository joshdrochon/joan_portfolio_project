import Image from "next/image";

const projects = [
  {
    id: 1,
    seed: "proj1",
    title: "Project 1",
    tags: ["UX Research", "Interaction Design"],
    desc: "[ Placeholder — case study overview coming soon ]",
  },
  {
    id: 2,
    seed: "street",
    title: "Project 2",
    tags: ["Visual Design", "Prototyping"],
    desc: "[ Placeholder — case study overview coming soon ]",
  },
  {
    id: 3,
    seed: "proj3",
    title: "Project 3",
    tags: ["User Testing", "Information Architecture"],
    desc: "[ Placeholder — case study overview coming soon ]",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-[1280px] mx-auto px-12 py-20">
      <h2 className="font-handwritten text-[72px] tracking-[6px] text-black text-center mb-16 leading-none">
        Projects
      </h2>

      <div className="grid grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group cursor-pointer bg-white border border-gray-200 overflow-hidden rounded-[6px]">
            <div className="relative w-full overflow-hidden" style={{ height: 260 }}>
              <Image
                src={`https://picsum.photos/seed/${project.seed}/600/400`}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono tracking-wide text-gray-400 border border-gray-200 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-handwritten text-[28px] tracking-[3px] text-black mb-2 leading-none">
                {project.title}
              </h3>
              <p className="text-sm font-mono text-gray-400">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
