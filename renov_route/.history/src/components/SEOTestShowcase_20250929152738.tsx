import SEOFAQ from './SEOFAQ';
import SEOBlog from './SEOBlog';
import SEOPricing from './SEOPricing';
import SEOGallery from './SEOGallery';
import SEOEvents from './SEOEvents';
import SEOServiceCard from './SEOServiceCard';
import SEOProjectCard from './SEOProjectCard';
import SEOTestimonialCard from './SEOTestimonialCard';
import SEOStats from './SEOStats';
import SEOLinks from './SEOLinks';

export default function SEOTestShowcase() {
  // Données d'exemple pour les FAQ
  const faqData = [
    {
      question: "Qu'est-ce que le traçage marquage routier ?",
      answer: "Le traçage marquage routier consiste à appliquer des marquages au sol pour la signalisation horizontale des routes, parkings et espaces publics. Cela inclut les lignes de circulation, les places de parking, les passages piétons et autres signalisations de sécurité."
    },
    {
      question: "Comment réparer les nids de poule ?",
      answer: "La réparation des nids de poule se fait avec de l'enrobé résine à froid, un procédé innovant et résistant qui permet une réparation rapide et durable des trous dans la chaussée."
    },
    {
      question: "Combien coûte un devis de marquage routier ?",
      answer: "Nos devis de traçage marquage routier sont gratuits et sans engagement. Le prix dépend de la surface à marquer, du type de marquage et de la complexité du projet."
    }
  ];

  // Données d'exemple pour les articles de blog
  const blogData = [
    {
      id: "1",
      title: "Guide complet du traçage de parking",
      excerpt: "Découvrez les meilleures pratiques pour le traçage de parking professionnel.",
      slug: "guide-tracage-parking",
      date: "2024-01-15",
      author: {
        name: "Renov Route",
        avatar: "/assets/logos/logo.avif"
      },
      image: "/assets/images/realisations/parking-1.avif",
      category: "Traçage",
      tags: ["parking", "marquage", "professionnel"],
      readingTime: 5,
      featured: true
    },
    {
      id: "2", 
      title: "Réparation de nids de poule : techniques modernes",
      excerpt: "Les nouvelles techniques de réparation de nids de poule avec l'enrobé résine.",
      slug: "reparation-nids-poule-techniques",
      date: "2024-01-10",
      author: {
        name: "Renov Route",
        avatar: "/assets/logos/logo.avif"
      },
      image: "/assets/images/realisations/nids-poule-1.avif",
      category: "Réparation",
      tags: ["nids de poule", "réparation", "enrobé"],
      readingTime: 7,
      featured: false
    }
  ];

  // Données d'exemple pour les tarifs
  const pricingData = [
    {
      id: "basic",
      name: "Service de base",
      description: "Traçage de parking standard",
      price: {
        amount: 15,
        currency: "EUR",
        unit: "m²"
      },
      features: [
        { name: "Marquage au sol", included: true },
        { name: "Matériaux de qualité", included: true },
        { name: "Garantie 2 ans", included: true },
        { name: "Support technique", included: false }
      ],
      cta: {
        text: "Demander un devis",
        link: "/devis",
        type: "primary" as const
      }
    },
    {
      id: "premium",
      name: "Service premium",
      description: "Traçage complet avec accessoires",
      price: {
        amount: 25,
        currency: "EUR", 
        unit: "m²"
      },
      popular: true,
      features: [
        { name: "Marquage au sol", included: true },
        { name: "Matériaux de qualité", included: true },
        { name: "Garantie 5 ans", included: true },
        { name: "Support technique", included: true },
        { name: "Accessoires inclus", included: true }
      ],
      cta: {
        text: "Demander un devis",
        link: "/devis",
        type: "primary" as const
      }
    }
  ];

  // Données d'exemple pour la galerie
  const galleryData = [
    {
      id: "1",
      src: "/assets/images/realisations/parking-1.avif",
      alt: "Traçage de parking professionnel",
      title: "Parking commercial",
      description: "Marquage de parking pour centre commercial",
      category: "Parking",
      tags: ["parking", "commercial", "marquage"]
    },
    {
      id: "2",
      src: "/assets/images/realisations/nids-poule-1.avif", 
      alt: "Réparation de nids de poule",
      title: "Réparation route",
      description: "Réparation de nids de poule avec enrobé résine",
      category: "Réparation",
      tags: ["nids de poule", "réparation", "route"]
    }
  ];

  // Données d'exemple pour les événements
  const eventsData = [
    {
      id: "1",
      name: "Formation marquage routier",
      description: "Formation professionnelle sur les techniques de marquage routier",
      startDate: "2024-02-15T09:00:00Z",
      endDate: "2024-02-15T17:00:00Z",
      location: {
        name: "Centre de formation Renov Route",
        address: "6, allée du ruisseau de Ribbes",
        city: "Tassin la demi-lune",
        region: "Auvergne-Rhône-Alpes",
        country: "France"
      },
      price: {
        amount: 0,
        currency: "EUR",
        free: true
      },
      cta: {
        text: "S'inscrire",
        link: "/devis",
        type: "primary" as const
      }
    }
  ];

  // Données d'exemple pour les services
  const serviceData = {
    id: "tracage-parking",
    name: "Traçage de parking",
    description: "Service professionnel de traçage et retraçage de parking",
    shortDescription: "Marquage de parking durable et conforme",
    icon: "🅿️",
    image: "/assets/images/realisations/parking-1.avif",
    price: {
      amount: 15,
      currency: "EUR",
      unit: "m²"
    },
    features: [
      "Marquage au sol professionnel",
      "Respect des normes en vigueur", 
      "Finition soignée et durable"
    ],
    benefits: [
      "Améliore l'organisation",
      "Augmente la sécurité",
      "Optimise l'utilisation de l'espace"
    ],
    duration: "1-2 jours",
    warranty: "2 ans",
    rating: {
      value: 4.9,
      count: 127
    },
    cta: {
      text: "Demander un devis",
      link: "/devis",
      type: "primary" as const
    }
  };

  // Données d'exemple pour les projets
  const projectData = {
    id: "parking-centre-commercial",
    name: "Marquage parking centre commercial",
    description: "Projet de marquage complet pour un centre commercial de 500 places",
    shortDescription: "Marquage de 500 places de parking",
    images: ["/assets/images/realisations/parking-1.avif"],
    category: "Parking",
    tags: ["parking", "commercial", "marquage"],
    date: "2024-01-15",
    location: "Lyon",
    client: "Centre Commercial Part-Dieu",
    duration: "3 jours",
    budget: "15 000€",
    status: "completed",
    cta: {
      text: "Voir le projet",
      link: "/realisations",
      type: "primary" as const
    }
  };

  // Données d'exemple pour les témoignages
  const testimonialData = {
    id: "1",
    name: "Jean Dupont",
    role: "Directeur",
    company: "Centre Commercial Part-Dieu",
    content: "Excellent service de marquage de parking. Travail professionnel et respect des délais.",
    rating: 5,
    image: "/assets/images/realisations/parking-1.avif",
    project: "Marquage parking centre commercial",
    date: "2024-01-15"
  };

  // Données d'exemple pour les statistiques
  const statsData = [
    { label: "Projets réalisés", value: "1000+", icon: "📊" },
    { label: "Années d'expérience", value: "10+", icon: "⏰" },
    { label: "Clients satisfaits", value: "98%", icon: "😊" },
    { label: "Support client", value: "24/7", icon: "🛠️" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      <h1 className="text-4xl font-bold text-center mb-8">Composants SEO - Aperçu</h1>
      
      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <SEOFAQ faqs={faqData} />
      </section>

      {/* Blog */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Blog</h2>
        <SEOBlog posts={blogData} columns={2} />
      </section>

      {/* Tarifs */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Tarifs</h2>
        <SEOPricing tiers={pricingData} />
      </section>

      {/* Galerie */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Galerie</h2>
        <SEOGallery images={galleryData} columns={2} />
      </section>

      {/* Événements */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Événements</h2>
        <SEOEvents events={eventsData} />
      </section>

      {/* Carte de service */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Carte de service</h2>
        <div className="max-w-md">
          <SEOServiceCard service={serviceData} />
        </div>
      </section>

      {/* Carte de projet */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Carte de projet</h2>
        <div className="max-w-md">
          <SEOProjectCard project={projectData} />
        </div>
      </section>

      {/* Carte de témoignage */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Carte de témoignage</h2>
        <div className="max-w-md">
          <SEOTestimonialCard testimonial={testimonialData} />
        </div>
      </section>

      {/* Statistiques */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Statistiques</h2>
        <SEOStats stats={statsData} />
      </section>

      {/* Liens SEO */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Liens SEO (Mini-sitemap)</h2>
        <SEOLinks />
      </section>
    </div>
  );
}
