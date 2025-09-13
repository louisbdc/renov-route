'use client';

import React, { useMemo, memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { partnerMappings, getFirstRelatedProject, PartnerMapping } from '@/lib/data/partner-mapping';

// Composant optimisé pour chaque partenaire
const PartnerItem = memo(({ partner, index, keyPrefix }: { partner: PartnerMapping; index: number; keyPrefix: string }) => {
  const relatedProject = useMemo(() => getFirstRelatedProject(partner.name), [partner.name]);
  
  const logoContent = useMemo(() => (
    <div className="partner-logo">
      {partner.isImage ? (
        <Image
          src={partner.logo}
          alt={partner.name}
          width={100}
          height={100}
          quality={75}
          priority={index < 6}
          loading={index < 6 ? 'eager' : 'lazy'}
          className="partner-image"
          sizes="(max-width: 360px) 60px, (max-width: 480px) 70px, (max-width: 768px) 80px, 100px"
        />
      ) : (
        partner.logo
      )}
    </div>
  ), [partner.isImage, partner.logo, partner.name, index]);

  return (
    <div key={`${keyPrefix}-${index}`} className="partner-item">
      {relatedProject ? (
        <Link 
          href={`/realisations?project=${relatedProject}`}
          className="partner-link"
          title={`Voir les projets pour ${partner.name}`}
        >
          {logoContent}
        </Link>
      ) : (
        logoContent
      )}
    </div>
  );
});

PartnerItem.displayName = 'PartnerItem';

const PartnersBanner = memo(() => {
  const partners = useMemo(() => partnerMappings, []);

  return (
    <div className="partners-banner-container">
      <div className="partners-banner">
        <div className="partners-track">
          {/* Premier set de logos */}
          {partners.map((partner, index) => (
            <PartnerItem 
              key={`first-${index}`}
              partner={partner} 
              index={index} 
              keyPrefix="first" 
            />
          ))}
          {/* Deuxième set de logos pour la continuité */}
          {partners.map((partner, index) => (
            <PartnerItem 
              key={`second-${index}`}
              partner={partner} 
              index={index} 
              keyPrefix="second" 
            />
          ))}
        </div>
      </div>
    </div>
  );
});

PartnersBanner.displayName = 'PartnersBanner';

export default PartnersBanner;
