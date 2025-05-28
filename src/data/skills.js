// data/skills.js
import { 
    ReactIcon, 
    TypeScriptIcon,
    NodeJsIcon,
    // ... import icons lainnya dari @heroicons/react
  } from '@heroicons/react/24/solid'
  
  export const SKILLS = [
    {
      name: 'React',
      icon: ReactIcon,
      proficiency: 95,
      category: 'Frontend'
    },
    {
      name: 'TypeScript',
      icon: TypeScriptIcon,
      proficiency: 90,
      category: 'Language'
    },
    {
      name: 'Node.js',
      icon: NodeJsIcon,
      proficiency: 85,
      category: 'Backend'
    },
    // ... tambahkan skill lainnya
  ]