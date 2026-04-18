'use client'

import Link from 'next/link';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
  images: string[];
  client?: {
    name: string;
    logo?: string;
    website?: string;
  };
  location?: {
    city: string;
    region: string;
    country: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  services: string[];
  duration?: string;
  budget?: {
    amount: number;
    currency: string;
    range?: string;
  };
  status: 'completed' | 'in-progress' | 'planned';
  date: {
    start: string;
    end?: string;
  };
  team?: {
    size: number;
    roles: string[];
  };
  challenges?: string[];
  solutions?: string[];
  results?: {
    metrics: Array<{
      label: string;
      value: string;
      improvement?: string;
    }>;
    testimonials?: string[];
  };
  tags?: string[];
  category?: string;
  featured?: boolean;
  cta?: {
    text: string;
    link: string;
    type: 'primary' | 'secondary' | 'outline';
  };
}

interface SEOProjectCardProps {
  project: Project;
  className?: string;
  showClient?: boolean;
  showLocation?: boolean;
  showServices?: boolean;
  showBudget?: boolean;
  showDuration?: boolean;
  showTeam?: boolean;
  showChallenges?: boolean;
  showSolutions?: boolean;
  showResults?: boolean;
  showCta?: boolean;
}

export default function SEOProjectCard({ 
  project, 
  className = "",
  showClient = true,
  showLocation = true,
  showServices = true,
  showBudget = true,
  showDuration = true,
  showTeam = true,
  showChallenges = true,
  showSolutions = true,
  showResults = true,
  showCta = true
}: SEOProjectCardProps) {
  const getStatusColor = () => {
    switch (project.status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'planned':
        return 'bg-[#FACC15] text-[#0F172A]';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCtaClass = () => {
    switch (project.cta?.type) {
      case 'primary':
        return 'bg-amber-500 text-[#0F172A] hover:bg-amber-400';
      case 'secondary':
        return 'bg-gray-600 text-[#0F172A] hover:bg-gray-700';
      case 'outline':
        return 'border-2 border-[#FACC15] text-[#0F172A] hover:bg-[#FACC15]';
      default:
        return 'bg-amber-500 text-[#0F172A] hover:bg-amber-400';
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "creator": {
      "@type": "Organization",
      "name": "Renov Route"
    },
    "dateCreated": project.date.start,
    "dateModified": project.date.end || project.date.start,
    "about": project.services,
    "keywords": project.tags?.join(", ") || "",
    "genre": project.category || "Traçage Marquage Routier",
    "locationCreated": project.location ? {
      "@type": "Place",
      "name": `${project.location.city}, ${project.location.region}`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": project.location.city,
        "addressRegion": project.location.region,
        "addressCountry": project.location.country
      }
    } : undefined,
    "image": project.images.map(img => `https://renov-route.com${img}`),
    "offers": project.budget ? {
      "@type": "Offer",
      "price": project.budget.amount,
      "priceCurrency": project.budget.currency,
      "availability": "https://schema.org/InStock"
    } : undefined
  };

  return (
    <>
      <div className={className}>
        <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
          {project.images.length > 0 && (
            <div className="h-48 relative">
              <Image
                src={project.images[0]}
                alt={project.title}
                width={400}
                height={192}
                className="w-full h-full object-cover"
              />
              {project.featured && (
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-500 text-[#0F172A] text-xs px-2 py-1 rounded-full font-medium">
                    Projet en vedette
                  </span>
                </div>
              )}
              <div className="absolute top-4 right-4">
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor()}`}>
                  {project.status === 'completed' && 'Terminé'}
                  {project.status === 'in-progress' && 'En cours'}
                  {project.status === 'planned' && 'Planifié'}
                </span>
              </div>
            </div>
          )}
          
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-[#0F172A] mb-2">
                  {project.title}
                </h3>
                {project.category && (
                  <span className="inline-block bg-[#FACC15] text-[#0F172A] text-xs px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                )}
              </div>
            </div>
            
            <p className="text-slate-500 mb-4">
              {project.shortDescription || project.description}
            </p>
            
            {showClient && project.client && (
              <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  {project.client.logo && (
                    <Image
                      src={project.client.logo}
                      alt={project.client.name}
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                    />
                  )}
                  <div>
                    <span className="text-sm text-slate-400">Client:</span>
                    <span className="ml-1 font-medium text-[#0F172A]">
                      {project.client.name}
                    </span>
                  </div>
                </div>
              </div>
            )}
            
            {showLocation && project.location && (
              <div className="mb-4">
                <div className="flex items-center text-sm text-slate-400">
                  <span className="mr-2">📍</span>
                  <span>
                    {project.location.city}, {project.location.region}
                  </span>
                </div>
              </div>
            )}
            
            {showServices && project.services && project.services.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-[#0F172A] mb-2">Services</h4>
                <div className="flex flex-wrap gap-1">
                  {project.services.map((service, index) => (
                    <span
                      key={index}
                      className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
              {showDuration && project.duration && (
                <div>
                  <span className="text-slate-400">Durée:</span>
                  <span className="ml-1 font-medium">{project.duration}</span>
                </div>
              )}
              {showBudget && project.budget && (
                <div>
                  <span className="text-slate-400">Budget:</span>
                  <span className="ml-1 font-medium">
                    {project.budget.amount} {project.budget.currency}
                    {project.budget.range && ` (${project.budget.range})`}
                  </span>
                </div>
              )}
              {showTeam && project.team && (
                <div>
                  <span className="text-slate-400">Équipe:</span>
                  <span className="ml-1 font-medium">{project.team.size} personnes</span>
                </div>
              )}
            </div>
            
            {showChallenges && project.challenges && project.challenges.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-[#0F172A] mb-2">Défis</h4>
                <ul className="space-y-1">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start text-sm text-slate-400">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 mt-2"></span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {showSolutions && project.solutions && project.solutions.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-[#0F172A] mb-2">Solutions</h4>
                <ul className="space-y-1">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start text-sm text-slate-400">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 mt-2"></span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {showResults && project.results && project.results.metrics.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-[#0F172A] mb-2">Résultats</h4>
                <div className="grid grid-cols-1 gap-2">
                  {project.results.metrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">{metric.label}:</span>
                      <span className="font-medium text-[#0F172A]">
                        {metric.value}
                        {metric.improvement && (
                          <span className="ml-1 text-green-600">
                            (+{metric.improvement})
                          </span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {project.tags && project.tags.length > 0 && (
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-100 text-slate-500 text-xs px-2 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {showCta && project.cta && (
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href={project.cta.link}
                  className={`inline-flex items-center justify-center w-full px-4 py-2 rounded-lg font-medium transition-colors ${getCtaClass()}`}
                >
                  {project.cta.text}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <script
       
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </>
  );
}