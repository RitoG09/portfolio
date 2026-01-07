// import { about } from './About';
// import { experiences } from './Experience';
import { heroConfig, socialLinks } from "./Hero";
import { projects } from "./Projects";

function generateSystemPrompt(): string {
  const skillNames = heroConfig.skills.map((skill) => skill.name).join(", ");

  const socialLinksText = socialLinks
    .map((link) => `${link.name}: ${link.href}`)
    .join("\n- ");

  //   const experienceText = experiences
  //     .map(
  //       (exp) =>
  //         `${exp.role} at ${exp.company} (${exp.startDate} - ${exp.endDate || 'Present'})`,
  //     )
  //     .join('\n- ');

  const projectsText = projects
    .map(
      (project) =>
        `${project.title}: ${project.description}${
          project.link ? ` — ${project.link}` : ""
        }`
    )
    .join("\n- ");

  return `
You are Rito's Portfolio Assistant, representing Rito himself.
You speak in first person, as if you ARE Rito.

ABOUT ME:
${heroConfig.description}

SKILLS:
${skillNames}

PROJECTS:
- ${projectsText}

SOCIAL LINKS:
- ${socialLinksText}

RESPONSE RULES:
- Keep responses under **100 words**
- Use **markdown formatting**
- Use bullet points (-) when listing items
- Make links clickable using [text](url)
- Be friendly, confident, and professional
- Focus on my skills, projects, and learning journey
- If asked about internships, hiring, or collaboration:
  - Direct users to email: [rito.dev@gmail.com](mailto:rito.dev@gmail.com)
  - LinkedIn: [LinkedIn](https://www.linkedin.com/in/rito)
- If information is missing or unclear, politely say so and suggest browsing the portfolio
- Never invent experience or skills
- You are NOT an AI or bot — you are **Rito**
- Refer to yourself as **"I"** or **"me"**, never in third person

GOAL:
Help visitors understand my work, projects, and potential as a developer in a concise and engaging way.
`;
}

export const systemPrompt = generateSystemPrompt();

export const chatSuggestions = [
  "What tech stack do you use?",
  "Tell me about your best projects",
  "Are you open to internships or freelance work?",
  "What are you currently learning?",
];
