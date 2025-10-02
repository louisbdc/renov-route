import Script from 'next/script';
import Image from 'next/image';

interface Video {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration: string;
  contentUrl: string;
  embedUrl?: string;
  publisher: {
    name: string;
    url: string;
  };
  author: {
    name: string;
    url: string;
  };
  genre?: string;
  keywords?: string[];
  inLanguage?: string;
  isFamilyFriendly?: boolean;
}

interface SEOVideoProps {
  video: Video;
  className?: string;
}

export default function SEOVideo({ video, className = "" }: SEOVideoProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": video.name,
    "description": video.description,
    "thumbnailUrl": video.thumbnailUrl,
    "uploadDate": video.uploadDate,
    "duration": video.duration,
    "contentUrl": video.contentUrl,
    "embedUrl": video.embedUrl,
    "publisher": {
      "@type": "Organization",
      "name": video.publisher.name,
      "url": video.publisher.url
    },
    "author": {
      "@type": "Person",
      "name": video.author.name,
      "url": video.author.url
    },
    "genre": video.genre,
    "keywords": video.keywords?.join(", "),
    "inLanguage": video.inLanguage || "fr",
    "isFamilyFriendly": video.isFamilyFriendly !== false
  };

  return (
    <>
      <div className={className}>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">{video.name}</h2>
          <p className="text-gray-700 mb-4">{video.description}</p>
          
          <div className="mb-4">
            <Image
              src={video.thumbnailUrl}
              alt={video.name}
              width={400}
              height={192}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="flex items-center">
              <span className="font-medium mr-2">Durée:</span>
              <span>{video.duration}</span>
            </div>
            
            <div className="flex items-center">
              <span className="font-medium mr-2">Date de publication:</span>
              <span>
                {new Date(video.uploadDate).toLocaleDateString('fr-FR')}
              </span>
            </div>
            
            <div className="flex items-center">
              <span className="font-medium mr-2">Auteur:</span>
              <span>{video.author.name}</span>
            </div>
            
            {video.genre && (
              <div className="flex items-center">
                <span className="font-medium mr-2">Genre:</span>
                <span>{video.genre}</span>
              </div>
            )}
            
            {video.keywords && video.keywords.length > 0 && (
              <div className="flex items-center">
                <span className="font-medium mr-2">Mots-clés:</span>
                <span>{video.keywords.join(", ")}</span>
              </div>
            )}
          </div>
          
          <div className="mt-4">
            <a
              href={video.contentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 5v10l8-5-8-5z" />
              </svg>
              Regarder la vidéo
            </a>
          </div>
        </div>
      </div>
      
      <Script
        id="video-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </>
  );
}
