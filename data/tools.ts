import { AiTool } from '../lib/types';

export const AI_TOOLS: AiTool[] = [
  // Coding & Dev
  { id: 'cursor', name: 'Cursor', category: 'coding', defaultPrice: 20, url: 'https://cursor.com', description: 'AI-powered code editor' },
  { id: 'github-copilot', name: 'GitHub Copilot', category: 'coding', defaultPrice: 10, url: 'https://github.com/features/copilot', description: 'AI pair programmer in your editor' },
  { id: 'claude-pro', name: 'Claude Pro', category: 'coding', defaultPrice: 20, url: 'https://claude.ai', description: 'Anthropic\'s AI assistant' },
  { id: 'claude-code', name: 'Claude Code', category: 'coding', defaultPrice: 100, url: 'https://claude.ai/code', description: 'Agentic AI coding CLI' },
  { id: 'chatgpt-plus', name: 'ChatGPT Plus', category: 'coding', defaultPrice: 20, url: 'https://chat.openai.com', description: 'OpenAI\'s flagship AI assistant' },
  { id: 'chatgpt-pro', name: 'ChatGPT Pro', category: 'coding', defaultPrice: 200, url: 'https://chat.openai.com', description: 'OpenAI\'s most powerful plan' },
  { id: 'windsurf', name: 'Windsurf', category: 'coding', defaultPrice: 15, url: 'https://codeium.com/windsurf', description: 'Agentic AI code editor' },
  { id: 'lovable', name: 'Lovable', category: 'coding', defaultPrice: 25, url: 'https://lovable.dev', description: 'Build full-stack apps with AI' },
  { id: 'bolt', name: 'Bolt', category: 'coding', defaultPrice: 20, url: 'https://bolt.new', description: 'AI full-stack web developer' },
  { id: 'replit', name: 'Replit', category: 'coding', defaultPrice: 20, url: 'https://replit.com', description: 'AI-powered coding environment' },
  { id: 'v0', name: 'v0 by Vercel', category: 'coding', defaultPrice: 20, url: 'https://v0.dev', description: 'AI UI component generator' },
  { id: 'tabnine', name: 'Tabnine', category: 'coding', defaultPrice: 12, url: 'https://tabnine.com', description: 'AI code completion' },
  { id: 'codeium', name: 'Codeium Pro', category: 'coding', defaultPrice: 15, url: 'https://codeium.com', description: 'AI code acceleration' },
  { id: 'sourcegraph-cody', name: 'Sourcegraph Cody', category: 'coding', defaultPrice: 9, url: 'https://sourcegraph.com/cody', description: 'AI coding assistant with codebase context' },
  { id: 'amazon-q', name: 'Amazon Q Developer', category: 'coding', defaultPrice: 20, url: 'https://aws.amazon.com/q/developer', description: 'AWS AI coding assistant' },
  { id: 'jetbrains-ai', name: 'JetBrains AI Assistant', category: 'coding', defaultPrice: 12, url: 'https://jetbrains.com/ai', description: 'AI assistant for JetBrains IDEs' },
  { id: 'devin', name: 'Devin', category: 'coding', defaultPrice: 500, url: 'https://devin.ai', description: 'Autonomous AI software engineer' },
  { id: 'pieces', name: 'Pieces for Developers', category: 'coding', defaultPrice: 10, url: 'https://pieces.app', description: 'AI developer workflow tool' },
  { id: 'continue', name: 'Continue', category: 'coding', defaultPrice: 20, url: 'https://continue.dev', description: 'Open-source AI code assistant' },
  { id: 'sweep-ai', name: 'Sweep AI', category: 'coding', defaultPrice: 15, url: 'https://sweep.dev', description: 'AI junior developer for GitHub issues' },

  // Writing & Content
  { id: 'jasper', name: 'Jasper', category: 'writing', defaultPrice: 49, url: 'https://jasper.ai', description: 'AI marketing copy and content' },
  { id: 'notion-ai', name: 'Notion AI', category: 'writing', defaultPrice: 10, url: 'https://notion.so', description: 'AI writing inside Notion' },
  { id: 'grammarly', name: 'Grammarly Premium', category: 'writing', defaultPrice: 12, url: 'https://grammarly.com', description: 'AI writing and grammar assistant' },
  { id: 'copy-ai', name: 'Copy.ai', category: 'writing', defaultPrice: 36, url: 'https://copy.ai', description: 'AI copywriting tool' },
  { id: 'writesonic', name: 'Writesonic', category: 'writing', defaultPrice: 16, url: 'https://writesonic.com', description: 'AI content and copy generator' },
  { id: 'rytr', name: 'Rytr', category: 'writing', defaultPrice: 9, url: 'https://rytr.me', description: 'AI writing assistant' },
  { id: 'anyword', name: 'Anyword', category: 'writing', defaultPrice: 49, url: 'https://anyword.com', description: 'AI copywriting with performance prediction' },
  { id: 'wordtune', name: 'Wordtune', category: 'writing', defaultPrice: 24, url: 'https://wordtune.com', description: 'AI writing and rewriting tool' },
  { id: 'quillbot', name: 'QuillBot', category: 'writing', defaultPrice: 10, url: 'https://quillbot.com', description: 'AI paraphrasing and writing tool' },
  { id: 'sudowrite', name: 'Sudowrite', category: 'writing', defaultPrice: 19, url: 'https://sudowrite.com', description: 'AI writing tool for fiction authors' },
  { id: 'writer', name: 'Writer', category: 'writing', defaultPrice: 18, url: 'https://writer.com', description: 'AI writing platform for teams' },
  { id: 'prowritingaid', name: 'ProWritingAid', category: 'writing', defaultPrice: 10, url: 'https://prowritingaid.com', description: 'AI grammar and style editor' },
  { id: 'novel-ai', name: 'NovelAI', category: 'writing', defaultPrice: 15, url: 'https://novelai.net', description: 'AI storytelling and writing tool' },
  { id: 'hyperwrite', name: 'HyperWrite', category: 'writing', defaultPrice: 20, url: 'https://hyperwriteai.com', description: 'Personal AI writing assistant' },

  // Image & Design
  { id: 'midjourney', name: 'Midjourney', category: 'image', defaultPrice: 10, url: 'https://midjourney.com', description: 'AI image generation' },
  { id: 'canva-ai', name: 'Canva Pro', category: 'image', defaultPrice: 15, url: 'https://canva.com', description: 'Design platform with AI features' },
  { id: 'adobe-firefly', name: 'Adobe Firefly', category: 'image', defaultPrice: 5, url: 'https://firefly.adobe.com', description: 'Adobe\'s AI image generation' },
  { id: 'leonardo-ai', name: 'Leonardo.ai', category: 'image', defaultPrice: 12, url: 'https://leonardo.ai', description: 'AI image and art generation' },
  { id: 'ideogram', name: 'Ideogram', category: 'image', defaultPrice: 8, url: 'https://ideogram.ai', description: 'AI image generation with great text' },
  { id: 'krea-ai', name: 'Krea.ai', category: 'image', defaultPrice: 24, url: 'https://krea.ai', description: 'Real-time AI image generation' },
  { id: 'dreamstudio', name: 'DreamStudio', category: 'image', defaultPrice: 10, url: 'https://dreamstudio.ai', description: 'Stable Diffusion image generation' },
  { id: 'adobe-cc', name: 'Adobe Creative Cloud', category: 'image', defaultPrice: 55, url: 'https://adobe.com/creativecloud', description: 'Adobe apps with Firefly AI' },
  { id: 'magnific', name: 'Magnific', category: 'image', defaultPrice: 40, url: 'https://magnific.ai', description: 'AI image upscaling and enhancement' },
  { id: 'playground-ai', name: 'Playground AI', category: 'image', defaultPrice: 15, url: 'https://playground.com', description: 'AI image creation platform' },
  { id: 'clipdrop', name: 'Clipdrop', category: 'image', defaultPrice: 9, url: 'https://clipdrop.co', description: 'AI image editing and cleanup tools' },
  { id: 'remove-bg', name: 'Remove.bg', category: 'image', defaultPrice: 9, url: 'https://remove.bg', description: 'AI background removal' },
  { id: 'luminar-ai', name: 'Luminar Neo', category: 'image', defaultPrice: 12, url: 'https://skylum.com/luminar-neo', description: 'AI photo editing software' },

  // Research & Knowledge
  { id: 'perplexity', name: 'Perplexity Pro', category: 'research', defaultPrice: 20, url: 'https://perplexity.ai', description: 'AI-powered search and research' },
  { id: 'gemini', name: 'Gemini Advanced', category: 'research', defaultPrice: 20, url: 'https://gemini.google.com', description: 'Google\'s most capable AI model' },
  { id: 'you-pro', name: 'You.com Pro', category: 'research', defaultPrice: 15, url: 'https://you.com', description: 'AI search engine' },
  { id: 'elicit', name: 'Elicit', category: 'research', defaultPrice: 10, url: 'https://elicit.com', description: 'AI research assistant for papers' },
  { id: 'consensus', name: 'Consensus', category: 'research', defaultPrice: 9, url: 'https://consensus.app', description: 'AI search for scientific research' },
  { id: 'chatpdf', name: 'ChatPDF', category: 'research', defaultPrice: 5, url: 'https://chatpdf.com', description: 'Chat with any PDF document' },
  { id: 'humata', name: 'Humata', category: 'research', defaultPrice: 20, url: 'https://humata.ai', description: 'AI for reading and analyzing documents' },
  { id: 'scite', name: 'Scite', category: 'research', defaultPrice: 20, url: 'https://scite.ai', description: 'AI for finding and evaluating research' },
  { id: 'scholarai', name: 'ScholarAI', category: 'research', defaultPrice: 15, url: 'https://scholarai.io', description: 'AI research and literature review' },

  // Productivity & Meetings
  { id: 'otter', name: 'Otter.ai', category: 'productivity', defaultPrice: 17, url: 'https://otter.ai', description: 'AI meeting notes and transcription' },
  { id: 'fireflies', name: 'Fireflies.ai', category: 'productivity', defaultPrice: 18, url: 'https://fireflies.ai', description: 'AI meeting recorder and summarizer' },
  { id: 'zapier', name: 'Zapier AI', category: 'productivity', defaultPrice: 20, url: 'https://zapier.com', description: 'AI-powered automation' },
  { id: 'poe', name: 'Poe', category: 'productivity', defaultPrice: 20, url: 'https://poe.com', description: 'Access multiple AI models in one place' },
  { id: 'microsoft-copilot', name: 'Microsoft Copilot M365', category: 'productivity', defaultPrice: 30, url: 'https://microsoft.com/en-us/microsoft-365/copilot', description: 'AI in Word, Excel, Outlook, Teams' },
  { id: 'motion', name: 'Motion', category: 'productivity', defaultPrice: 19, url: 'https://usemotion.com', description: 'AI calendar and task manager' },
  { id: 'reclaim-ai', name: 'Reclaim.ai', category: 'productivity', defaultPrice: 8, url: 'https://reclaim.ai', description: 'AI scheduling assistant' },
  { id: 'mem-ai', name: 'Mem.ai', category: 'productivity', defaultPrice: 14, url: 'https://mem.ai', description: 'AI-powered notes and knowledge base' },
  { id: 'superhuman', name: 'Superhuman', category: 'productivity', defaultPrice: 30, url: 'https://superhuman.com', description: 'AI email client' },
  { id: 'loom', name: 'Loom AI', category: 'productivity', defaultPrice: 12, url: 'https://loom.com', description: 'AI video messaging with summaries' },
  { id: 'airtable-ai', name: 'Airtable AI', category: 'productivity', defaultPrice: 24, url: 'https://airtable.com', description: 'AI inside spreadsheets and databases' },
  { id: 'clickup-ai', name: 'ClickUp AI', category: 'productivity', defaultPrice: 12, url: 'https://clickup.com', description: 'AI project management assistant' },
  { id: 'craft-ai', name: 'Craft AI', category: 'productivity', defaultPrice: 5, url: 'https://craft.do', description: 'AI-powered document and notes app' },
  { id: 'granola', name: 'Granola', category: 'productivity', defaultPrice: 10, url: 'https://granola.so', description: 'AI notepad for meetings' },

  // Video & Audio
  { id: 'elevenlabs', name: 'ElevenLabs', category: 'video', defaultPrice: 11, url: 'https://elevenlabs.io', description: 'AI voice generation and cloning' },
  { id: 'runway', name: 'Runway', category: 'video', defaultPrice: 15, url: 'https://runwayml.com', description: 'AI video generation and editing' },
  { id: 'heygen', name: 'HeyGen', category: 'video', defaultPrice: 29, url: 'https://heygen.com', description: 'AI video avatars and translation' },
  { id: 'descript', name: 'Descript', category: 'video', defaultPrice: 24, url: 'https://descript.com', description: 'AI video and podcast editor' },
  { id: 'synthesia', name: 'Synthesia', category: 'video', defaultPrice: 30, url: 'https://synthesia.io', description: 'AI video with realistic avatars' },
  { id: 'pictory', name: 'Pictory', category: 'video', defaultPrice: 25, url: 'https://pictory.ai', description: 'AI video creation from text and scripts' },
  { id: 'invideo', name: 'InVideo AI', category: 'video', defaultPrice: 25, url: 'https://invideo.io', description: 'AI video editor and creator' },
  { id: 'captions-ai', name: 'Captions.ai', category: 'video', defaultPrice: 10, url: 'https://captions.ai', description: 'AI captions and video editing' },
  { id: 'opus-clip', name: 'Opus Clip', category: 'video', defaultPrice: 19, url: 'https://opus.pro', description: 'AI short clip repurposing' },
  { id: 'pika', name: 'Pika', category: 'video', defaultPrice: 8, url: 'https://pika.art', description: 'AI video generation from text' },
  { id: 'suno', name: 'Suno', category: 'video', defaultPrice: 10, url: 'https://suno.com', description: 'AI music and song generation' },
  { id: 'udio', name: 'Udio', category: 'video', defaultPrice: 10, url: 'https://udio.com', description: 'AI music creation' },
  { id: 'murf', name: 'Murf.ai', category: 'video', defaultPrice: 26, url: 'https://murf.ai', description: 'AI voice generator for voiceovers' },
  { id: 'cleanvoice', name: 'Cleanvoice', category: 'video', defaultPrice: 8, url: 'https://cleanvoice.ai', description: 'AI filler-word and noise remover' },
  { id: 'adobe-podcast', name: 'Adobe Podcast', category: 'video', defaultPrice: 6, url: 'https://podcast.adobe.com', description: 'AI audio recording and enhancement' },

  // Other / Specialty
  { id: 'grok', name: 'Grok (X Premium)', category: 'other', defaultPrice: 16, url: 'https://x.ai', description: 'xAI\'s assistant via X Premium' },
  { id: 'gamma', name: 'Gamma', category: 'other', defaultPrice: 10, url: 'https://gamma.app', description: 'AI presentation and doc maker' },
  { id: 'julius', name: 'Julius AI', category: 'other', defaultPrice: 20, url: 'https://julius.ai', description: 'AI data analysis and visualization' },
  { id: 'character-ai', name: 'Character.AI+', category: 'other', defaultPrice: 10, url: 'https://character.ai', description: 'AI character chat and roleplay' },
  { id: 'framer-ai', name: 'Framer AI', category: 'other', defaultPrice: 20, url: 'https://framer.com', description: 'AI website builder' },
  { id: 'beautiful-ai', name: 'Beautiful.ai', category: 'other', defaultPrice: 12, url: 'https://beautiful.ai', description: 'AI-powered presentation maker' },
  { id: 'tome', name: 'Tome', category: 'other', defaultPrice: 16, url: 'https://tome.app', description: 'AI presentation and storytelling' },
  { id: 'typeface', name: 'Typeface', category: 'other', defaultPrice: 49, url: 'https://typeface.ai', description: 'AI brand content generation' },
  { id: 'clay', name: 'Clay', category: 'other', defaultPrice: 149, url: 'https://clay.com', description: 'AI data enrichment for sales outreach' },
  { id: 'mistral', name: 'Mistral Le Chat', category: 'other', defaultPrice: 15, url: 'https://chat.mistral.ai', description: 'Mistral\'s AI assistant' },
  { id: 'perplexity-api', name: 'Perplexity API', category: 'other', defaultPrice: 20, url: 'https://perplexity.ai/api', description: 'Perplexity API for developers' },
  { id: 'openai-api', name: 'OpenAI API', category: 'other', defaultPrice: 20, url: 'https://platform.openai.com', description: 'OpenAI API access' },
  { id: 'anthropic-api', name: 'Anthropic API', category: 'other', defaultPrice: 20, url: 'https://console.anthropic.com', description: 'Claude API for developers' },
  { id: 'replicate', name: 'Replicate', category: 'other', defaultPrice: 15, url: 'https://replicate.com', description: 'Run AI models in the cloud' },
  { id: 'together-ai', name: 'Together AI', category: 'other', defaultPrice: 10, url: 'https://together.ai', description: 'Fast inference for open-source models' },
];

export const CATEGORIES = {
  coding: 'Coding & Dev',
  writing: 'Writing',
  image: 'Image & Design',
  research: 'Research',
  video: 'Video & Audio',
  productivity: 'Productivity',
  other: 'Other',
} as const;

export const GOALS = [
  { id: 'learn-to-code', label: 'Learn to code', emoji: '💻' },
  { id: 'build-a-product', label: 'Build a product', emoji: '🚀' },
  { id: 'get-promoted', label: 'Get promoted', emoji: '📈' },
  { id: 'automate-work', label: 'Automate my work', emoji: '⚡' },
  { id: 'creative-projects', label: 'Creative projects', emoji: '🎨' },
  { id: 'just-exploring', label: 'Just exploring AI', emoji: '🔭' },
] as const;

export const TRIAL_TOOLS = new Set([
  'cursor', 'github-copilot', 'claude-pro', 'chatgpt-plus', 'windsurf', 'lovable', 'bolt', 'replit', 'v0',
  'jasper', 'copy-ai', 'writesonic', 'grammarly', 'notion-ai', 'wordtune', 'rytr',
  'midjourney', 'canva-ai', 'leonardo-ai', 'ideogram', 'krea-ai', 'playground-ai', 'clipdrop',
  'perplexity', 'elicit', 'consensus', 'chatpdf',
  'otter', 'motion', 'fireflies', 'reclaim-ai', 'loom', 'clickup-ai', 'granola',
  'runway', 'heygen', 'descript', 'elevenlabs', 'captions-ai', 'opus-clip', 'pika', 'suno',
  'gamma', 'beautiful-ai', 'framer-ai',
]);

export type UserRole = 'developer' | 'marketer' | 'writer' | 'student' | 'entrepreneur' | 'researcher' | 'creative' | 'manager';
export type AiLevel = 'beginner' | 'intermediate' | 'power';
export type UserNeed = 'code' | 'write' | 'research' | 'visuals' | 'tasks' | 'video';

const ROLE_TOOLS: Record<UserRole, string[]> = {
  developer: ['cursor', 'github-copilot', 'claude-pro', 'chatgpt-plus', 'perplexity', 'windsurf'],
  marketer: ['jasper', 'copy-ai', 'grammarly', 'chatgpt-plus', 'canva-ai', 'notion-ai'],
  writer: ['grammarly', 'notion-ai', 'sudowrite', 'chatgpt-plus', 'perplexity', 'wordtune'],
  student: ['grammarly', 'notion-ai', 'chatgpt-plus', 'perplexity', 'elicit', 'consensus'],
  entrepreneur: ['chatgpt-plus', 'notion-ai', 'zapier', 'gamma', 'grammarly', 'claude-pro'],
  researcher: ['perplexity', 'elicit', 'consensus', 'chatpdf', 'chatgpt-plus', 'claude-pro'],
  creative: ['midjourney', 'canva-ai', 'runway', 'elevenlabs', 'ideogram', 'suno'],
  manager: ['otter', 'motion', 'fireflies', 'clickup-ai', 'zapier', 'loom'],
};

const NEED_TOOLS: Record<UserNeed, string[]> = {
  code: ['cursor', 'github-copilot', 'windsurf', 'chatgpt-plus'],
  write: ['grammarly', 'notion-ai', 'jasper', 'copy-ai'],
  research: ['perplexity', 'elicit', 'consensus', 'chatpdf'],
  visuals: ['midjourney', 'canva-ai', 'ideogram', 'leonardo-ai'],
  tasks: ['motion', 'zapier', 'reclaim-ai', 'clickup-ai'],
  video: ['runway', 'heygen', 'descript', 'opus-clip'],
};

export function getSuggestedToolIds(role: UserRole | null, aiLevel: AiLevel | null, needs: UserNeed[]): string[] {
  const all: string[] = [];

  if (role) all.push(...(ROLE_TOOLS[role] ?? []));
  needs.forEach(n => all.push(...(NEED_TOOLS[n] ?? [])));

  const base = aiLevel === 'beginner'
    ? ['chatgpt-plus', 'grammarly', 'notion-ai', 'canva-ai', ...all]
    : all;

  const unique = [...new Set(base)];
  const withTrials = unique.filter(id => TRIAL_TOOLS.has(id));
  const withoutTrials = unique.filter(id => !TRIAL_TOOLS.has(id));
  return [...withTrials, ...withoutTrials].slice(0, 6);
}
