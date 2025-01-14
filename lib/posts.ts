import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export async function getPosts() {
  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        slug: fileName.replace(/\.mdx$/, ''),
        title: data.title,
        date: data.date,
        category: data.category,
        excerpt: data.excerpt || content.slice(0, 160) + '...',
        content,
      }
    })
    .sort((a, b) => (new Date(b.date)).getTime() - (new Date(a.date)).getTime())

  return posts
}

export async function getPost(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    content,
    ...data,
  }
} 