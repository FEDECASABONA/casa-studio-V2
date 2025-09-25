import fs from 'fs'
import path from 'path'

export interface ProjectContent {
  id: string
  name: string
  description: string
  content: string
  images: string[]
  category: string
  year: string
  status: string
}

// Read markdown content from file
export function getProjectContent(projectId: string): string {
  try {
    const filePath = path.join(process.cwd(), 'content', 'projects', `${projectId}.md`)
    return fs.readFileSync(filePath, 'utf8')
  } catch (error) {
    console.error(`Error reading content for ${projectId}:`, error)
    return `# ${projectId}\n\nContent not found.`
  }
}

// Get all project content files
export function getAllProjectContents(): { [key: string]: string } {
  const contents: { [key: string]: string } = {}
  const projectsDir = path.join(process.cwd(), 'content', 'projects')
  
  try {
    const files = fs.readdirSync(projectsDir)
    files.forEach(file => {
      if (file.endsWith('.md')) {
        const projectId = file.replace('.md', '')
        contents[projectId] = getProjectContent(projectId)
      }
    })
  } catch (error) {
    console.error('Error reading project contents:', error)
  }
  
  return contents
}
