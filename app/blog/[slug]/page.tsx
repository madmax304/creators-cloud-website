import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BlogContent } from '@/components/blog/BlogContent'
import { getPost, posts } from '@/lib/blog-posts'
import { SignUpPrompt } from '@/components/blog/SignUpPrompt'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPost(params.slug)
  if (!post) return {}
  
  return {
    title: `${post.title} - Creator's Cloud Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    }
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = posts
    .filter(p => 
      p.slug !== post.slug && 
      p.tags.some(tag => post.tags.includes(tag))
    )
    .slice(0, 3)

  return (
    <article className="bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="mx-auto">
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime={post.date} className="text-gray-500">
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </time>
              <span className="relative z-10 rounded-full bg-white px-3 py-1.5 font-medium text-gray-600">
                {post.category}
              </span>
              <span className="text-gray-500">{post.readingTime}</span>
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {post.title}
            </h1>
            
            <p className="mt-6 text-xl leading-8 text-gray-600">
              {post.excerpt}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-6 lg:px-8 py-16 sm:py-24">
        <BlogContent content={post.content} />

        {/* Tags */}
        <div className="mt-16 flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <Link
              key={tag}
              href={`/blog?tag=${tag}`}
              className="rounded-full bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-600 hover:bg-indigo-100 transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>

        {/* Sign Up Prompt */}
        <SignUpPrompt />

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 border-t border-gray-200 pt-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Related Posts
            </h2>
            <div className="mt-6 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group relative"
                >
                  <div className="flex flex-col">
                    <time dateTime={relatedPost.date} className="text-sm text-gray-500">
                      {new Date(relatedPost.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </time>
                    <h3 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}