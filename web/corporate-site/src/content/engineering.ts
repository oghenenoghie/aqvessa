/** How Aqvessa builds software. Standards are commitments for our own work, not claims about results. */

export const PRINCIPLES: readonly { title: string; text: string }[] = [
  { title: "Start from the requirement", text: "Build around a real business need, stated before any design work starts." },
  { title: "Structure for maintenance", text: "Modular architecture with a clear separation of concerns, and no dependency without a reason." },
  { title: "Secure by default", text: "Authentication, authorisation, role-based access and input validation on every service." },
  { title: "Document as you go", text: "Clear technical documentation and explicit API contracts, kept next to the code." },
  { title: "Version everything", text: "Version control and a structured workflow for every change, however small." },
  { title: "Test before release", text: "Automated tests and a deployment path considered from the first commit." },
  { title: "Design for growth", text: "Systems sized for today with a known route to scale tomorrow." },
  { title: "Protect what we own", text: "Company intellectual property stays in company systems." },
];

export const STACK: readonly { layer: string; tools: string }[] = [
  { layer: "Frontend", tools: "Next.js, React, TypeScript, Tailwind CSS, shadcn/ui" },
  { layer: "Backend", tools: "Python with Django or FastAPI, Node.js, REST APIs" },
  { layer: "Data and infrastructure", tools: "PostgreSQL, Supabase, Neon, Redis, Docker, Ubuntu Linux" },
  { layer: "Delivery", tools: "Git and GitHub, GitHub Actions, Vercel, Railway" },
];

export const STACK_NOTE =
  "These are defaults. We choose a different tool when it has a measurable advantage for the project.";
