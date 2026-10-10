import developerImg from "../../../assets/developer.png";
const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-slate-950 px-8 pb-16 pt-32 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 md:flex-row">
        {/* Hero Content */}
        <div className="max-w-2xl text-center md:text-left">
  {/* Introduction */}
  <p className="mb-3 text-lg text-slate-300">
    Hi, I'm
  </p>

  {/* Name */}
  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
    Sajid Habib
  </h1>

  {/* Professional Title */}
  <h2 className="mt-4 text-2xl font-semibold text-blue-500 sm:text-3xl">
    Full-Stack Web Developer
  </h2>

  {/* Professional Description */}
  <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
    I build responsive, user-friendly web applications with clean,
    maintainable code and a focus on performance, usability, and
    real-world problem-solving.
  </p>

  {/* Technical Expertise */}
  <div className="mt-5">
    <p className="mb-3 text-sm font-medium uppercase tracking-wider text-slate-400">
      Technologies I Work With
    </p>

    <div className="flex flex-wrap justify-center gap-2 md:justify-start">
      {["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"].map(
        (tech) => (
          <span
            key={tech}
            className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1.5 text-sm text-slate-200 transition-colors hover:border-blue-500/50 hover:text-blue-400"
          >
            {tech}
          </span>
        )
      )}
    </div>
  </div>

  {/* Call-to-Action Buttons */}
  <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
    <a
      href="#projects"
      className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
    >
      Explore My Projects
    </a>

    <a
      href="/resume.pdf"
      download="Sajid-Habib-Resume.pdf"
      className="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-blue-500 hover:bg-slate-800"
    >
      Download Resume
    </a>
  </div>
</div>
        {/* Developer Image */}
        <div className="flex justify-center">
          <img
            src={developerImg}
            alt="Sajid Habib - Full Stack Web Developer"
            className="w-64 sm:w-80 lg:w-96"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
