import Script from 'next/script';
import Image from 'next/image';

interface Article {
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  author: string;
  image?: string;
  articleBody: string;
  wordCount?: number;
  readingTime?: number;
}

interface SEOArticleProps {
  article: Article;
  className?: string;
}

export default function SEOArticle({ article, className = "" }: SEOArticleProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.headline,
    "description": article.description,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Renov Route",
      "logo": {
        "@type": "ImageObject",
        "url": "https://renov-route.com/assets/logos/logo.avif"
      }
    },
    "image": article.image ? `https://renov-route.com${article.image}` : "https://renov-route.com/assets/images/og-image.jpg",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://renov-route.com/blog"
    },
    "wordCount": article.wordCount,
    "timeRequired": article.readingTime ? `PT${article.readingTime}M` : undefined
  };

  return (
    <>
      <article className={className}>
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {article.headline}
          </h1>
          <div className="flex items-center text-sm text-gray-600 mb-4">
            <span>Par {article.author}</span>
            <span className="mx-2">•</span>
            <time dateTime={article.datePublished}>
              {new Date(article.datePublished).toLocaleDateString('fr-FR')}
            </time>
            {article.readingTime && (
              <>
                <span className="mx-2">•</span>
                <span>{article.readingTime} min de lecture</span>
              </>
            )}
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            {article.description}
          </p>
        </header>
        
        {article.image && (
          <div className="mb-8">
            <Image
              src={article.image}
              alt={article.headline}
              width={800}
              height={256}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        )}
        
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: article.articleBody }} />
        </div>
      </article>
      
      <Script
        id="article-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </>
  );
}
