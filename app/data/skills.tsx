import { SkillItem } from "@/app/types";

export const SKILLS: Record<string, {name: string, skills: Array<SkillItem>}>=  {
  languages: {
    name: 'Languages',
    skills: [
      {
        name: 'JavaScript',
        iconType: 'javascript',
      },
      {
        name: 'TypeScript',
        iconType: 'typescript',
      },
      {
        name: 'NodeJs',
        iconType: 'nodejs-light',
      },
      {
        name: 'HTML',
        iconType: 'html'
      },
      {
        name: 'CSS',
        iconType: 'css'
      }
    ]
  },
  fl: {
    name: 'Frameworks and Libraries',
    skills: [
      {
        name: 'React',

        iconType: 'react-dark',
      },
      {
        name: 'NextJs',
        iconType: 'nextjs-dark',
      },
           {
        name: 'Vue',
        iconType: 'vuejs-dark',
      },
      {
        name: 'Redux',
        iconType: 'redux'
      },
      {
        name: 'Tailwind',
        iconType: 'tailwindcss-dark'
      },
      {
        name: 'Styled Components',
        iconType: 'styledcomponents',
      },
      {
        name: 'Playwright',
      },
      {
        name: 'React Query',
      }
    ]
  },
  tools: {
    name: 'Tools',
    skills: [
      { name: 'Slack' },
      { name: 'Jira' },
      { name: 'Zoom' },
      { name: 'VS Code', iconType: 'vscode-dark'},
      { name: 'Figma', iconType: 'figma-dark' },
      { name: 'Sentry', iconType: 'sentry' },
      { name: 'Datadog' },
      { name: 'Checkly' },
    ]
  }, 
  versionControlling: {
    name: 'Version Controlling',
    skills: [
      { name: 'Github', iconType: 'github-dark' },
      { name: 'Bitbucket'},
    ]
  },
  other: {
    name: 'Other',
    skills: [
      { name: 'Docker', iconType: 'docker' },
      { name: 'Strapi'}
    ]
  }
}