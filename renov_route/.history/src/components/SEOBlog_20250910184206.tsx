import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  slug: string;
  date: string;
  author: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  image?: string;
  category: string;
  tags: string[];
  readingTime: number;
  featured?: boolean;
  wordCount?: number;
  commentsCount?: number;
  likesCount?: number;
  sharesCount?: number;
  views?: number;
  status?: 'published' | 'draft' | 'archived';
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
}

interface SEOBlogProps {
  posts: BlogPost[];
  className?: string;
  showAuthor?: boolean;
  showCategory?: boolean;
  showTags?: boolean;
  showStats?: boolean;
  showFeatured?: boolean;
  showCta?: boolean;
  columns?: 1 | 2 | 3 | 4;
}

export default function SEOBlog({ 
  posts, 
  className = "",
  showAuthor = true,
  showCategory = true,
  showTags = true,
  showStats = true,
  showFeatured = true,
  showCta = true,
  columns = 3
}: SEOBlogProps) {
  const getGridClass = () => {
    switch (columns) {
      case 1:
        return 'grid-cols-1';
      case 2:
        return 'grid-cols-1 md:grid-cols-2';
      case 3:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case 4:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      default:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog Renov Route",
    "description": "Articles et actualités sur le traçage marquage routier",
    "publisher": {
      "@type": "Organization",
      "name": "Renov Route",
      "url": "https://renov-route.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://renov-route.com/assets/logos/logo.avif"
      }
    },
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "url": `https://renov-route.com/blog/${post.slug}`,
      "datePublished": post.date,
      "dateModified": post.date,
      "author": {
        "@type": "Person",
        "name": post.author.name,
        "image": post.author.avatar ? `https://renov-route.com${post.author.avatar}` : undefined
      },
      "publisher": {
        "@type": "Organization",
        "name": "Renov Route"
      },
      "image": post.image ? `https://renov-route.com${post.image}` : undefined,
      "articleSection": post.category,
      "keywords": post.tags.join(", "),
      "wordCount": post.wordCount || post.readingTime * 200,
      "timeRequired": `PT${post.readingTime}M`
    }))
  };

  return (
    <>
      <div className={className}>
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Notre Blog
          </h2>
          
          <div className={`grid ${getGridClass()} gap-6`}>
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
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
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {post.title}
                      </h3>
                      {showCategory && (
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {post.category}
                        </span>
                      )}
                    </div>
                    
                    {showFeatured && post.featured && (
                      <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                        En vedette
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  {showAuthor && (
                    <div className="flex items-center space-x-3 mb-4">
                      {post.author.avatar && (
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          width={32}
                          height={32}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      )}
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {post.author.name}
                        </p>
                        {post.author.bio && (
                          <p className="text-xs text-gray-600">
                            {post.author.bio}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4 text-xs text-gray-600">
                    <div className="flex items-center space-x-4">
                      <span>{formatDate(post.date)}</span>
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
                  
                  {showStats && (
                    <div className="flex items-center space-x-4 text-xs text-gray-600 mb-4">
                      {post.views && (
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          {post.views} vues
                        </span>
                      )}
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
                  )}
                  
                  {showTags && post.tags.length > 0 && (
                    <div className="mb-4">
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
                  
                  {showCta && (
                    <div className="pt-4 border-t border-gray-200">
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
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Script
        id="blog-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </>
  );
}