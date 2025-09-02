import Section from "./Section";
import Card from "./Card";
const About = () => (
  <Section id="about" title="About Me" kicker="Who I am">
    <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-start">
      <Card>
        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
          "I’m Ram — a full-stack developer passionate about building scalable,
          user-centric applications. I’ve worked on social platforms, e-commerce
          solutions, and real-time systems, along with integrating machine
          learning pipelines for NLP and computer vision. I focus on clean
          architecture, performance, accessibility, and the details that make
          software reliable and delightful."
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "React",
            "Node",
            "Express",
            "MongoDB",
            "PostgreSQL",
            "PyTorch",
            "TensorFlow",
            "Docker",
            "AWS",
          ].map((t) => (
            <span
              key={t}
              className="text-[11px] px-2 py-1 rounded-full  text-zinc-600 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/60 dark:border-zinc-700/60"
            >
              {t}
            </span>
          ))}
        </div>
      </Card>
      <Card>
        <h4 className="font-semibold mb-2">Highlights</h4>
        <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
          <li>
            • Developed real-time WebRTC calling with resilient media error
            handling.
          </li>
          <li>
            • Implemented secure role-based access control with JWT
            authentication.
          </li>
          <li>
            • Built ML-powered features that enhanced key product metrics.
          </li>
          <li>
            • Implemented OAuth for secure third-party authentication flows.
          </li>
          <li>
            • Created a Wanderlust travel app with full CRUD operations and
            interactive maps.
          </li>
          <li>
            • Optimized performance and maintained accessibility best practices.
          </li>
        </ul>
      </Card>
    </div>
  </Section>
);
export default About;
