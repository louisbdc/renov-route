import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  author: string;
  image?: string;
  category: string;
  tags: string[];
  readingTime: number;
  featured?: boolean;
  wordCount?: number;
  commentsCount?: number;
  likesCount?: number;
  sharesCount?: number;
}

interface SEOBlogCardProps {
  post: BlogPost;
  className?: string;
}

export default function SEOBlogCard({ post, className = "" }: SEOBlogCardProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "url": `https://renov-route.com/blog/${post.slug}`,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Renov Route",
      "url": "https://renov-route.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://renov-route.com/assets/logos/logo.avif"
      }
    },
    "image": post.image ? `https://renov-route.com${post.image}` : "https://renov-route.com/assets/images/og-image.jpg",
    "articleSection": post.category,
    "keywords": post.tags.join(", "),
    "wordCount": post.wordCount || post.readingTime * 200,
    "timeRequired": `PT${post.readingTime}M`
  };

  return (
    <>
      <div className={className}>
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          {post.image && (
            <div className="h-48">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="p-6">
            <div className="flex items-center mb-3">
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                {post.category}
              </span>
              {post.featured && (
                <span className="ml-2 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                  En vedette
                </span>
              )}
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {post.title}
            </h3>
            
            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4 text-xs text-gray-600">
                <span>Par {post.author}</span>
                <span>•</span>
                <span>{new Date(post.date).toLocaleDateString('fr-FR')}</span>
                <span>•</span>
                <span>{post.readingTime} min de lecture</span>
                {post.wordCount && (
                  <>
                    <span>•</span>
                    <span>{post.wordCount} mots</span>
                  </>
                )}
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-xs text-gray-600">
                {post.commentsCount !== undefined && (
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    {post.commentsCount}
                  </span>
                )}
                {post.likesCount !== undefined && (
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    {post.likesCount}
                  </span>
                )}
                {post.sharesCount !== undefined && (
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                    {post.sharesCount}
                  </span>
                )}
              </div>
              
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Lire la suite
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            {post.tags.length > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex flex-wrap gap-1">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </div>
      
      <Script
        id="blog-card-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </>
  );
}