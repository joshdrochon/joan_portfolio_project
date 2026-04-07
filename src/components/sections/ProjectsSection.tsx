import ProjectCard from "@/components/ui/ProjectCard";

const projects = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1458245201577-fc8a130b8829?w=600&h=400&fit=crop",
    title: "Lawnboy Website Revamp",
    tags: ["UX Research", "Brand Identity", "Responsive Web", "Wireframing", "Interaction Design", "Figma AI"],
    desc: "Partnered with a family owned small business to modernize their digital presence, crafting a fresh, welcoming site designed to reflect their brand and drive new business.",
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?w=600&h=400&fit=crop",
    title: "Custom UX/UI Portfolio Wesbite",
    tags: ["Cross-functional Collaboration", "Information Architecture", "Visual Design", "Figma"],
    desc: "Collaborated closely with a software engineer to bring this portfolio to life, conceptualizing, designing, and iterating entirely in Figma from scratch, then seeing it through to a fully built, deployed website. Every layout, color choice, and interaction was designed with intention to create a seamless and personal experience.",
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1578875858391-50798bc2ffee?w=600&h=400&fit=crop",
    title: "Buffalo Wild Wings Mobile App Feature",
    tags: ["User Research", "App Design", "Prototyping", "Usability Testing", "User Flows", "Motion Design"],
    desc: "Orchestrated a game day marketing initiative for Buffalo Wild Wings as part of a senior capstone project at ASU, developing a mobile app feature concept designed to enhance brand visibility and fan engagement during key sporting events. Conducted user research, built wireframes, and delivered high fidelity prototypes that translated real fan behaviors into a compelling, intuitive in app experience.",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-[1280px] mx-auto px-6 md:px-12 py-12 md:py-20">
      <h2 className="font-handwritten text-[48px] md:text-[72px] tracking-[6px] text-black text-center mb-8 md:mb-16 leading-none">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
