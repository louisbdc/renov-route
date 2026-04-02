import type { FAQItem } from '@/components/FAQSchema'

const FAQ_DATA: Record<string, FAQItem[]> = {
  'prix-marquage-sol-parking': [
    {
      question: 'Quel est le prix moyen pour tracer un parking de 30 places ?',
      answer:
        "Pour un parking de 30 places avec retraçage des lignes, flèches et passages piétons, comptez entre 1 800 € et 4 500 € HT selon le type de peinture et l'état du sol. Un devis personnalisé permet d'affiner cette estimation.",
    },
    {
      question:
        'Le marquage au sol est-il déductible des charges de copropriété ?',
      answer:
        "Oui, le retraçage de parking fait partie des charges d'entretien courant de la copropriété. Il est voté en AG à la majorité simple (article 24) s'il s'agit d'un simple retraçage, ou à la majorité absolue (article 25) pour une refonte complète.",
    },
    {
      question:
        'Quelle est la meilleure période pour faire tracer son parking ?',
      answer:
        "Le printemps (mars à juin) et l'automne (septembre à novembre) offrent les meilleures conditions. La peinture nécessite un sol sec et une température supérieure à 5°C. L'été est aussi favorable, mais les plannings sont plus chargés.",
    },
    {
      question: 'Combien de temps dure un chantier de traçage ?',
      answer:
        "Pour un parking de 50 places, comptez 1 à 2 jours de travaux. Le parking peut être partiellement utilisé pendant le chantier : nous travaillons par zones avec un séchage de 1 à 3 heures par zone.",
    },
    {
      question: "La TVA s'applique-t-elle au taux réduit ?",
      answer:
        "Non, le marquage au sol de parking relève du taux de TVA normal (20%). Le taux réduit de 10% ne s'applique qu'aux travaux d'amélioration des logements de plus de 2 ans, pas aux parkings.",
    },
  ],
  'normes-pmr-parking': [
    {
      question: 'Une copropriété doit-elle avoir des places PMR ?',
      answer:
        "Si le parking est lié à un ERP (commerce en pied d'immeuble, par exemple), oui. Pour un parking strictement résidentiel, les règles dépendent de la date de construction : les immeubles neufs (après 2007) doivent prévoir des places adaptables. Pour les immeubles anciens, aucune obligation rétroactive sauf en cas de travaux importants.",
    },
    {
      question:
        'Peut-on verbaliser sur une place PMR dans un parking privé ?',
      answer:
        "Oui. Depuis la loi du 18 mars 2015, le stationnement abusif sur une place PMR est passible d'une amende de 135 € (4e classe), y compris dans les parkings privés ouverts à la circulation publique (centres commerciaux, supermarchés, hôpitaux).",
    },
    {
      question:
        "Quelle est la différence entre une place PMR et une place « adaptée » ?",
      answer:
        "Une place PMR respecte toutes les normes de dimensions, de marquage et de signalisation. Une place « adaptée » peut avoir des dimensions correctes mais manquer de signalisation ou de cheminement accessible. Seule la place PMR complète est conforme.",
    },
    {
      question:
        'Faut-il refaire les places PMR lors d’un retraçage de parking ?',
      answer:
        "Oui, c'est l'occasion idéale. Lors d'un retraçage complet de parking, nous vérifions systématiquement la conformité PMR et corrigeons les anomalies. C'est le moment le plus économique pour mettre à jour vos places PMR.",
    },
    {
      question: 'Les dimensions PMR changent-elles en 2026 ?',
      answer:
        "Les dimensions réglementaires (3,30 m x 5,00 m) n'ont pas changé depuis l'arrêté du 20 avril 2017. Aucune modification n'est prévue en 2026. Ce qui évolue, c'est le niveau d'exigence des contrôles : les commissions d'accessibilité sont de plus en plus rigoureuses.",
    },
  ],
  'nid-de-poule-responsabilite-parking': [
    {
      question:
        'Un client peut-il me poursuivre en justice pour un nid de poule ?',
      answer:
        "Oui. Si votre assurance refuse d'indemniser ou si le montant des dommages est contesté, le client peut saisir le tribunal judiciaire (au-delà de 10 000 €) ou le tribunal de proximité (en dessous de 10 000 €). En pratique, la plupart des litiges se règlent à l'amiable via les assurances.",
    },
    {
      question:
        'Mon assurance couvre-t-elle les dommages causés par un nid de poule ?',
      answer:
        "Oui, si vous disposez d'une assurance responsabilité civile professionnelle (pour les entreprises) ou d'une multirisque immeuble (pour les copropriétés). Vérifiez que votre contrat couvre bien les « dommages causés par un défaut d'entretien des parties communes » ou des « espaces extérieurs ».",
    },
    {
      question:
        'Peut-on refuser de payer si le client roulait trop vite ?',
      answer:
        "Partiellement. Si le client a contribué à son propre dommage (vitesse excessive, inattention manifeste), votre responsabilité peut être réduite proportionnellement. C'est le principe du partage de responsabilité. Mais le défaut d'entretien du parking reste un fait objectif que vous ne pouvez pas contester.",
    },
    {
      question:
        'Combien coûte la réparation d’un nid de poule ?',
      answer:
        "Le coût dépend de la méthode et de la taille du nid de poule. Comptez 20 à 40 € HT pour un rebouchage à l'enrobé à froid (temporaire, 3-6 mois) et 80 à 200 € HT pour une réparation à la résine polyuréthane (durable, 5-10 ans).",
    },
    {
      question:
        'La commune peut-elle être responsable d’un nid de poule dans mon parking ?',
      answer:
        "Non. Si le parking est privé, la commune n'a aucune obligation d'entretien. La responsabilité de la commune ne s'applique qu'aux voies publiques (routes communales, trottoirs, parkings publics). Pour un parking privé, c'est le propriétaire ou le gestionnaire qui assume l'entretien.",
    },
  ],
  'enrobe-froid-vs-resine-nids-de-poule': [
    {
      question:
        "Peut-on appliquer de la résine sur un ancien rebouchage à l'enrobé à froid ?",
      answer:
        "Oui, à condition de retirer l'enrobé à froid existant au préalable. La résine doit adhérer au revêtement d'origine (bitume, enrobé), pas à un matériau rapporté. Notre équipe décape l'ancien rebouchage avant d'appliquer la résine.",
    },
    {
      question:
        'La résine polyuréthane fonctionne-t-elle en hiver ?',
      answer:
        "Oui. Nos formulations sont applicables jusqu'à -5°C. Nous intervenons toute l'année, y compris en période hivernale. Les seules contraintes : le support doit être sec (pas de pluie active) et la température doit rester au-dessus de -5°C pendant la polymérisation.",
    },
    {
      question:
        'Combien de temps faut-il pour réparer un nid de poule à la résine ?',
      answer:
        "Comptez 20 à 40 minutes par nid de poule (préparation + injection + lissage). La circulation piétonne est rétablie en moins d'une heure, les véhicules légers en 2 à 4 heures. Pour un parking de 10 à 20 nids de poule, une demi-journée suffit.",
    },
    {
      question:
        'Qui est responsable des nids de poule dans un parking privé ?',
      answer:
        "Le gestionnaire du parking (propriétaire, syndic, exploitant) est responsable de l'entretien de la chaussée. En cas d'accident causé par un nid de poule (chute d'un piéton, dommage à un véhicule), sa responsabilité civile peut être engagée. L'absence de réparation ou une réparation insuffisante constituent un défaut d'entretien.",
    },
    {
      question:
        'La résine est-elle compatible avec un retraçage de parking ?',
      answer:
        "Parfaitement. La surface de la résine polymérisée est lisse et homogène, ce qui permet d'appliquer la peinture de marquage directement dessus. Beaucoup de nos clients combinent la réparation des nids de poule et le retraçage complet de leur parking en une seule intervention.",
    },
  ],
  'dimensions-nombre-places-pmr-parking': [
    {
      question:
        'Peut-on mettre une place PMR en épi ou en bataille ?',
      answer:
        "Oui, les deux configurations sont possibles. En épi, la bande d'accès doit se trouver du côté le plus large de la place (côté où le véhicule se présente). En bataille (perpendiculaire), la bande d'accès est latérale, comme pour une place classique.",
    },
    {
      question: 'La place PMR doit-elle être peinte en bleu ?',
      answer:
        "Non, le fond bleu n'est pas obligatoire mais fortement recommandé. La réglementation impose le pictogramme PMR et les lignes de délimitation, mais pas de couleur de fond spécifique. En pratique, le marquage bleu est devenu un standard car il améliore la visibilité et identifie immédiatement la place.",
    },
    {
      question:
        'Faut-il une place PMR dans un parking de 10 places ?',
      answer:
        "Oui. Dès qu'un parking d'ERP dépasse 1 place, il doit comporter au moins 2 places PMR (minimum réglementaire). Pour un parking de 10 places, cela représente 20 % de la capacité.",
    },
    {
      question:
        'Peut-on transformer une place standard en place PMR sans refaire tout le parking ?',
      answer:
        "Oui. Il suffit d'élargir la place concernée (en réduisant la place adjacente ou en supprimant une place) pour atteindre 3,30 m de large, puis de tracer le marquage PMR. C'est l'intervention la plus courante et la moins coûteuse (200 à 400 euros par place).",
    },
    {
      question:
        'Les dimensions PMR sont-elles les mêmes pour un parking souterrain ?',
      answer:
        "Oui, les dimensions au sol sont identiques. La seule différence concerne la hauteur libre, qui doit être de 2,15 m minimum pour permettre l'ouverture des hayons des véhicules adaptés.",
    },
  ],
  'signalisation-pmr-parking': [
    {
      question:
        'Le panneau PMR est-il obligatoire en plus du marquage au sol ?',
      answer:
        "Oui. Le panneau B6d et le pictogramme au sol sont deux éléments distincts, tous deux obligatoires. L'un ne remplace pas l'autre. Le panneau signale la place à distance, le pictogramme l'identifie au sol.",
    },
    {
      question: 'Quelle couleur pour le marquage PMR ?',
      answer:
        "Le bleu est recommandé par le CERTU pour distinguer les places PMR des places standard, mais le blanc est également conforme. Le pictogramme fauteuil roulant doit être blanc. Le fond de la place peut être bleu ou rester en enrobé naturel.",
    },
    {
      question:
        'Faut-il des bandes podotactiles dans un parking de plain-pied ?',
      answer:
        "Si le parking est strictement de plain-pied sans aucun changement de niveau ni abaissement de trottoir, les bandes podotactiles ne sont pas obligatoires. En pratique, la plupart des parkings comportent au moins un abaissement de trottoir entre la zone de stationnement et le cheminement piéton.",
    },
    {
      question:
        'Le panneau B6d peut-il être fixé au mur au lieu d’être sur poteau ?',
      answer:
        "Oui, à condition de respecter la hauteur minimale de 2,30 m (bord inférieur) et d'être visible depuis la voie de circulation. La fixation murale est courante dans les parkings souterrains.",
    },
    {
      question:
        'À quelle fréquence faut-il renouveler le pictogramme PMR au sol ?',
      answer:
        "En moyenne tous les 3 à 5 ans pour un parking extérieur à trafic moyen. Un parking de grande surface à fort trafic peut nécessiter un renouvellement tous les 2-3 ans. Les pictogrammes thermoplastiques durent plus longtemps que les pictogrammes peints.",
    },
  ],
  'mise-en-conformite-parking-pmr': [
    {
      question:
        'La mise en conformité PMR est-elle obligatoire pour un parking privé ?',
      answer:
        "Oui, dès lors que le parking dessert un ERP (commerce, bureau accueillant du public, immeuble avec locaux commerciaux). Les parkings strictement privés (maison individuelle) ne sont pas concernés.",
    },
    {
      question:
        'Combien de temps durent les travaux de mise en conformité ?',
      answer:
        "Pour un parking de taille moyenne (30 à 100 places), comptez 1 à 3 jours de travaux. Le diagnostic préalable prend une demi-journée. Les travaux de génie civil (abaissements, reprises de chaussée) peuvent allonger le délai.",
    },
    {
      question:
        'Peut-on faire la mise en conformité par étapes ?',
      answer:
        "Oui, à condition de respecter un calendrier précis. Les places PMR (marquage + signalisation) sont la priorité absolue. Le cheminement accessible peut être traité dans un second temps si les travaux sont programmés.",
    },
    {
      question:
        'Qui peut contrôler la conformité PMR de mon parking ?',
      answer:
        "Les commissions communales d'accessibilité, la DDTM (Direction Départementale des Territoires et de la Mer) et les services de police ou gendarmerie. Les contrôles peuvent être programmés ou inopinés.",
    },
    {
      question:
        'Mon parking a des places PMR mais elles ne sont plus visibles. Suis-je en infraction ?',
      answer:
        "Oui. Des marquages effacés équivalent à une absence de marquage. La signalisation doit être visible et lisible en permanence. Un retraçage régulier est nécessaire, généralement tous les 3 à 5 ans.",
    },
  ],
  'cout-renovation-parking': [
    {
      question:
        "Quel est le prix moyen d'une rénovation de parking ?",
      answer:
        "Pour une rénovation standard (retraçage + réparations ponctuelles + signalisation + PMR), comptez entre 60 et 120 euros par place de parking. Soit 3 000 à 6 000 euros pour un parking de 50 places.",
    },
    {
      question:
        'Le coût de rénovation inclut-il la mise aux normes PMR ?',
      answer:
        "Pas systématiquement. Certains devis séparent les travaux de rénovation générale et la mise en conformité PMR. Demandez toujours un devis incluant le poste PMR pour éviter les surprises.",
    },
    {
      question:
        'Peut-on rénover un parking par étapes pour étaler le budget ?',
      answer:
        "Oui, c'est courant en copropriété. La priorité est la sécurité : réparation de chaussée et PMR d'abord, puis marquage et signalisation.",
    },
    {
      question:
        'Combien de temps dure un chantier de rénovation de parking ?',
      answer:
        "Comptez 1 à 3 jours pour une rénovation légère (marquage + signalisation), 3 à 5 jours pour une rénovation standard et 1 à 3 semaines pour une rénovation lourde avec réfection de chaussée.",
    },
    {
      question:
        'Un devis de rénovation de parking est-il gratuit ?',
      answer:
        "Chez Rénov'Route, le devis est toujours gratuit et sans engagement. Il inclut un diagnostic sur site et un chiffrage détaillé par poste.",
    },
  ],
  'renovation-parking-entreprise': [
    {
      question:
        'Quelle est la meilleure période pour rénover un parking ?',
      answer:
        "Le printemps (avril-juin) et l'automne (septembre-octobre) sont les périodes idéales. Les températures sont favorables à l'application de peinture (plus de 5°C) et à la polymérisation de la résine.",
    },
    {
      question:
        'Faut-il un permis ou une autorisation pour rénover un parking privé ?',
      answer:
        "Non. La rénovation d'un parking privé (retraçage, réparation de nids de poule, remplacement de panneaux) ne nécessite aucune autorisation administrative. En revanche, si vous modifiez la structure du parking (ajout de places, changement de configuration, création de rampe d'accès), un permis de construire ou une déclaration préalable peut être nécessaire.",
    },
    {
      question: 'Peut-on rénover un parking par phases ?',
      answer:
        "Oui, et c'est souvent la meilleure approche. Par exemple : les nids de poule en priorité (risque juridique), le retraçage dans un deuxième temps, la signalisation en troisième. Le phasage permet de répartir le budget sur plusieurs mois.",
    },
    {
      question:
        'Quelle garantie pour les travaux de rénovation de parking ?',
      answer:
        "Chez Rénov'Route, nous garantissons 2 ans l'ensemble de nos travaux de marquage. Les réparations de nids de poule par résine sont également garanties 2 ans. En pratique, nos marquages tiennent 3 à 5 ans et nos réparations par résine 5 à 10 ans.",
    },
    {
      question: 'Le parking est-il utilisable pendant les travaux ?',
      answer:
        "Oui. Nous organisons les interventions par zone pour maintenir au minimum 50 % de la capacité de stationnement en permanence. Les temps de séchage sont de 1 à 3h pour la peinture et de 2 à 4h pour la résine.",
    },
  ],
  'peinture-marquage-sol-parking': [
    {
      question:
        'Quelle est la meilleure peinture pour un parking extérieur ?',
      answer:
        "Pour un parking extérieur à trafic moyen, la peinture acrylique certifiée NF EN 1436 offre le meilleur rapport qualité-prix. Pour un trafic intense (grande surface, zone logistique), la thermoplastique dure deux à trois fois plus longtemps. Évitez la résine époxy en extérieur : elle jaunit sous les UV.",
    },
    {
      question: 'Peut-on peindre un marquage soi-même ?',
      answer:
        "Techniquement, oui pour de l'acrylique sur une petite surface. Mais sans matériel professionnel (traceuse calibrée, gabarits), les lignes seront irrégulières et le résultat ne sera pas conforme aux normes de marquage.",
    },
    {
      question:
        'Combien de temps faut-il attendre avant de circuler sur un marquage neuf ?',
      answer:
        "Cela dépend du produit. Acrylique : 1 à 2 heures. Thermoplastique : 5 à 15 minutes (temps de refroidissement). Résine époxy : 24 à 72 heures.",
    },
    {
      question:
        'La peinture de marquage résiste-t-elle au sel de déneigement ?',
      answer:
        "Les peintures certifiées NF EN 1436 sont formulées pour résister aux cycles gel/dégel et au sel de déneigement. La thermoplastique est la plus résistante dans ces conditions.",
    },
    {
      question:
        'À quelle fréquence faut-il refaire le marquage d’un parking ?',
      answer:
        "En moyenne : tous les 2-3 ans pour l'acrylique, 4-6 ans pour la thermoplastique, 5-10 ans pour la résine. Ces chiffres varient selon le trafic, le climat et l'entretien.",
    },
  ],
  'ralentisseur-parking-norme': [
    {
      question:
        "Quelle est la hauteur maximale d'un ralentisseur de parking ?",
      answer:
        "10 centimètres, selon le décret 94-447 et la norme NF P 98-300. Les ralentisseurs modulaires en caoutchouc ont généralement une hauteur de 5 à 7 centimètres.",
    },
    {
      question:
        'Peut-on installer un ralentisseur dans un parking privé ?',
      answer:
        "Oui. Le décret 94-447 concerne les voies publiques, mais rien n'interdit d'installer un ralentisseur dans un parking privé. Il est recommandé de respecter les normes en vigueur pour limiter la responsabilité du gestionnaire en cas d'accident.",
    },
    {
      question: "Quel est le prix d'un ralentisseur de parking ?",
      answer:
        "De 300 euros pour un ralentisseur modulaire en caoutchouc à 5 000 euros pour un plateau surélevé en enrobé, pose et signalisation comprises.",
    },
    {
      question:
        'Faut-il un panneau de signalisation avec un ralentisseur ?',
      answer:
        "Oui. Tout ralentisseur doit être précédé d'un panneau C27 et accompagné d'un marquage au sol (triangles blancs). L'absence de signalisation constitue un manquement qui aggrave la responsabilité en cas d'accident.",
    },
    {
      question:
        "Quelle différence entre dos d'âne et coussin berlinois ?",
      answer:
        "Le dos d'âne couvre toute la largeur de la voie et ralentit tous les véhicules. Le coussin berlinois ne couvre qu'une partie de la chaussée : les véhicules larges (bus, camions, véhicules de secours) peuvent passer sans être ralentis.",
    },
  ],
  'couleur-marquage-sol-parking': [
    {
      question:
        'Quelle couleur pour les places de parking standard ?',
      answer:
        "Le blanc. C'est la couleur réglementaire pour toutes les lignes de délimitation des places de stationnement, les flèches directionnelles, les passages piétons et les pictogrammes au sol.",
    },
    {
      question:
        "Le jaune est-il obligatoire pour les zones d'interdiction ?",
      answer:
        "Oui. L'IISR et le Code de la route imposent le jaune pour toutes les zones où le stationnement est interdit : hachures, zébras, bordures peintes. Un marquage d'interdiction en blanc n'a pas de valeur réglementaire.",
    },
    {
      question:
        'Peut-on utiliser des couleurs personnalisées dans un parking privé ?',
      answer:
        "Oui, à condition de respecter les couleurs réglementaires pour les éléments obligatoires (places PMR en blanc, interdictions en jaune, passages piétons en blanc). Les couleurs libres (vert, orange, gris) peuvent servir à personnaliser les zones non réglementées.",
    },
    {
      question: 'Quelle couleur pour les places PMR ?',
      answer:
        "Le blanc pour les lignes de délimitation et le pictogramme au sol. Le fond bleu est utilisé pour le panneau vertical (panneau B6d) et peut être reproduit au sol autour du pictogramme pour améliorer la visibilité.",
    },
    {
      question:
        "Comment améliorer la visibilité d'un marquage sur sol clair ?",
      answer:
        "Sur béton ou dallage clair, le contraste avec le marquage blanc peut être insuffisant. Deux solutions : appliquer un fond sombre (bande noire ou gris foncé) sous le marquage blanc, ou utiliser une peinture avec un taux de microbilles de verre plus élevé pour améliorer la rétroréflexion nocturne.",
    },
  ],
  'comment-tracer-parking': [
    {
      question: "Combien de temps dure le traçage d'un parking ?",
      answer:
        "Pour un parking de 50 à 100 places, comptez 1 à 2 jours de traçage effectif, plus 1 jour de préparation du support. Le parking est praticable 2 à 3 heures après l'application de la peinture acrylique.",
    },
    {
      question:
        'Faut-il un permis ou une autorisation pour tracer un parking privé ?',
      answer:
        "Non, le traçage d'un parking privé ne nécessite pas de permis. En revanche, si le parking est ouvert au public (ERP), il doit respecter les normes d'accessibilité PMR et les règles de signalisation.",
    },
    {
      question: 'Peut-on tracer un parking sur du gravier ?',
      answer:
        "Non, le marquage au sol nécessite une surface dure et lisse (enrobé, béton, résine). Sur du gravier, on utilise des délimiteurs physiques : rondins de bois, bordures béton, plots ou bandes de guidage.",
    },
    {
      question:
        "Quelle est la largeur minimale d'une place de parking ?",
      answer:
        "La largeur minimale recommandée est de 2,30 m, mais la norme courante est de 2,50 m. Les places PMR mesurent 3,30 m de large (place de 2,50 m + bande d'accès de 0,80 m).",
    },
    {
      question: "Combien coûte le traçage d'un parking ?",
      answer:
        "En moyenne : 8 à 15 euros/m² en peinture acrylique, 15 à 25 euros/m² en thermoplastique. Pour un parking de 50 places (environ 500 m² de marquage), comptez entre 3 000 et 7 000 euros.",
    },
  ],
  'passage-pieton-parking-norme': [
    {
      question:
        'Le passage piéton est-il obligatoire dans un parking privé ?',
      answer:
        "Pas d'obligation légale dans un parking strictement privé. Mais pour un parking ouvert au public (commerce, ERP), l'accessibilité PMR impose des cheminements sécurisés incluant des passages piétons.",
    },
    {
      question:
        "Quelle est la largeur réglementaire d'un passage piéton ?",
      answer:
        "Les bandes doivent mesurer 50 centimètres de large, espacées de 50 centimètres. La largeur totale du passage dépend du nombre de bandes (minimum 2,50 mètres). En parking, une largeur de 2,50 à 4 mètres est courante.",
    },
    {
      question:
        'Peut-on utiliser du jaune pour un passage piéton en parking ?',
      answer:
        "Non. Le passage piéton est toujours blanc en France. Le jaune est réservé aux interdictions de stationner et aux zébras.",
    },
    {
      question: 'Les bandes podotactiles sont-elles obligatoires ?',
      answer:
        "Oui, dans les parkings d'ERP (centres commerciaux, cliniques, hôtels, copropriétés avec accès visiteurs). Les bandes d'éveil de vigilance doivent être placées à 50 centimètres du bord de la chaussée, sur toute la largeur du passage.",
    },
    {
      question:
        "Combien coûte le marquage d'un passage piéton ?",
      answer:
        "Comptez 200 à 500 euros par passage piéton en peinture acrylique (marquage + panneau). En thermoplastique ou résine, le coût monte à 500-1 200 euros. L'ajout de bandes podotactiles représente 150 à 300 euros supplémentaires par passage.",
    },
  ],
  'signalisation-parking-reglementation': [
    {
      question:
        'La signalisation est-elle obligatoire dans un parking privé ?',
      answer:
        "Pas d'obligation légale pour un parking strictement privé (copropriété fermée, entreprise sans accès public). Mais la responsabilité civile du propriétaire est engagée en cas d'accident lié à un défaut de signalisation. Pour un parking ouvert au public (ERP, commerce), la signalisation est obligatoire.",
    },
    {
      question:
        'Quels panneaux sont obligatoires dans un parking de centre commercial ?',
      answer:
        "Au minimum : panneau STOP ou cédez le passage aux intersections, limitation de vitesse, signalisation des places PMR, panneau passage piéton, panneau de sortie.",
    },
    {
      question: "Combien coûte la signalisation d'un parking ?",
      answer:
        "Comptez 150 à 300 euros par panneau (fourniture et pose), soit 2 000 à 6 000 euros pour un parking de 50 à 200 places. Le marquage au sol représente un budget supplémentaire de 1 500 à 4 000 euros selon la surface.",
    },
    {
      question:
        "Qui peut installer la signalisation d'un parking ?",
      answer:
        "L'installation doit être réalisée par un professionnel qualifié pour garantir la conformité des panneaux (modèle, dimensions, rétroréflexion, hauteur). Un installateur qualifié fournit une attestation de conformité.",
    },
    {
      question:
        'Faut-il un permis pour installer des panneaux dans un parking privé ?',
      answer:
        "Non. L'installation de signalisation dans un parking privé ne nécessite pas d'autorisation administrative. En copropriété, un vote en AG est requis.",
    },
  ],
  'reglementation-marquage-sol-parking': [
    {
      question:
        'Le marquage au sol est-il obligatoire dans un parking privé ?',
      answer:
        "Non, pour un parking strictement privé (réservé aux résidents ou employés sans accès public). Oui, pour un parking privé ouvert au public (commerce, hôtel, clinique, copropriété avec visiteurs). Dans tous les cas, la responsabilité civile du propriétaire reste engagée.",
    },
    {
      question:
        'Quelle est la norme de référence pour le marquage au sol ?',
      answer:
        "L'IISR (7e partie) pour les spécifications techniques (couleurs, dimensions, types de lignes). La norme NF EN 1436 pour les peintures (rétroréflexion, adhérence). L'arrêté du 15 janvier 2007 pour l'accessibilité PMR.",
    },
    {
      question: 'Peut-on tracer son parking soi-même ?',
      answer:
        "Rien ne l'interdit pour un parking privé. Mais un traçage non professionnel risque de ne pas respecter les normes (dimensions, couleurs, peinture certifiée) et d'engager la responsabilité du propriétaire.",
    },
    {
      question:
        'À quelle fréquence faut-il retracer un parking ?',
      answer:
        "Cela dépend du trafic et du type de peinture. Peinture acrylique : retraçage tous les 1 à 2 ans en zone de fort trafic. Peinture thermoplastique : tous les 3 à 5 ans. Résine : tous les 5 à 8 ans.",
    },
    {
      question:
        'Quelles sont les sanctions en cas de non-conformité ?',
      answer:
        "Amende administrative pouvant atteindre 45 000 euros pour les ERP. Mise en demeure de la commission d'accessibilité. Responsabilité civile engagée en cas d'accident. Refus d'indemnisation par l'assurance.",
    },
  ],
  'resine-sol-parking-prix-types': [
    {
      question:
        'La résine époxy convient-elle pour un parking extérieur ?',
      answer:
        "Non. L'époxy jaunit et se dégrade sous l'effet des UV. Pour un parking extérieur, utilisez une résine polyuréthane ou méthacrylate, résistantes aux UV et aux intempéries.",
    },
    {
      question:
        "Combien coûte la résine époxy pour un parking de 100 places ?",
      answer:
        "Pour un parking de 100 places (environ 1 500 m² de surface traitée), comptez 37 500 à 67 500 euros en résine époxy standard (25 à 45 euros/m²), préparation du sol incluse.",
    },
    {
      question:
        'Peut-on appliquer de la résine sur un sol humide ?',
      answer:
        "L'époxy et la polyuréthane nécessitent un sol sec (humidité moins de 4%). Seul le méthacrylate peut être appliqué sur un support légèrement humide.",
    },
    {
      question:
        "Quelle est la durée de vie d'un sol en résine ?",
      answer:
        "8 à 15 ans pour l'époxy, 10 à 20 ans pour la polyuréthane, 10 à 15 ans pour le méthacrylate. La durée de vie dépend du trafic, de l'entretien et de la qualité de la préparation du support.",
    },
    {
      question:
        "Faut-il fermer le parking pendant l'application ?",
      answer:
        "Oui, par zones. L'application se fait généralement par demi-parking pour maintenir l'accès. En époxy, comptez 48 à 72 heures d'immobilisation par zone. En méthacrylate, 4 à 6 heures suffisent.",
    },
  ],
  'barriere-parking-types-prix': [
    {
      question:
        "Faut-il un permis pour installer une barrière de parking ?",
      answer:
        "Non, pour un parking privé. Une déclaration préalable de travaux peut être requise si l'installation modifie l'aspect extérieur du bâtiment. En copropriété, un vote en AG est obligatoire.",
    },
    {
      question:
        "Combien coûte une barrière de parking automatique ?",
      answer:
        "Comptez 3 000 à 7 000 euros pour une barrière levante électrique avec système de contrôle d'accès (badge ou télécommande), pose et mise en service incluses.",
    },
    {
      question: 'Peut-on installer une barrière solaire ?',
      answer:
        "Oui. Les barrières solaires fonctionnent avec un panneau photovoltaïque et une batterie. Elles conviennent aux parkings extérieurs avec un trafic modéré (moins de 30 passages/jour). Le surcoût par rapport à une barrière filaire est de 500 à 1 500 euros.",
    },
    {
      question:
        'La barrière doit-elle rester ouverte la nuit ?',
      answer:
        "C'est au gestionnaire de décider. En copropriété, la barrière est généralement fermée 24h/24 avec accès par badge. En parking commercial, elle est souvent ouverte pendant les heures d'ouverture et fermée la nuit.",
    },
    {
      question: "Comment sécuriser l'accès aux secours ?",
      answer:
        "Toute barrière doit être équipée d'un débrayage manuel (clé ou levier). Les ERP doivent prévoir un système d'ouverture automatique sur alerte incendie. Le triangle de pompiers (DGS) est requis dans certaines configurations.",
    },
  ],
  'peinture-sol-garage-types-application': [
    {
      question:
        'Quelle est la meilleure peinture pour un sol de garage ?',
      answer:
        "La peinture époxy bi-composant offre le meilleur rapport performance/prix pour un garage résidentiel. Elle résiste aux passages de véhicules, aux taches d'huile et dure 5 à 10 ans avec un entretien minimal.",
    },
    {
      question: 'Peut-on peindre un sol de garage soi-même ?',
      answer:
        "Oui. L'application d'une peinture de sol est accessible à un bricoleur. Les étapes critiques sont la préparation du support (nettoyage, dégraissage, ponçage) et le respect des temps de séchage. Comptez une journée complète pour un garage de 30 à 40 m².",
    },
    {
      question:
        'Faut-il une peinture antidérapante pour le garage ?',
      answer:
        "C'est recommandé pour les zones de passage piéton. Ajoutez des granulats antidérapants dans la dernière couche de peinture ou choisissez une peinture avec finition antidérapante intégrée. Surcoût : 2 à 5 euros/m².",
    },
    {
      question:
        'Peut-on peindre sur une ancienne peinture de sol ?',
      answer:
        "Oui, si l'ancienne peinture est adhérente et en bon état. Poncez légèrement pour créer une accroche, dépoussierez et appliquez. Si l'ancienne peinture s'écaille, il faut la retirer complètement.",
    },
    {
      question:
        'Combien de temps dure une peinture de sol de garage ?',
      answer:
        "De 1 à 12 ans selon le type : acrylique (1-3 ans), alkyde-uréthane (2-4 ans), époxy (5-10 ans), polyuréthane (7-12 ans). La durée de vie dépend aussi de la préparation du sol et du volume de trafic.",
    },
  ],
  'butee-parking-types-pose-prix': [
    {
      question: 'Les butées de parking sont-elles obligatoires ?',
      answer:
        "Non. Aucune réglementation n'impose la pose de butées dans un parking privé. Elles sont cependant fortement recommandées pour protéger les structures, les véhicules et les piétons.",
    },
    {
      question:
        'Quelle butée choisir pour un parking souterrain ?',
      answer:
        "La butée en caoutchouc recyclé est le meilleur choix pour un parking souterrain : légère, absorbante, avec bandes réfléchissantes intégrées. Le béton est aussi adapté si le budget est serré, mais ajoutez des bandes réfléchissantes.",
    },
    {
      question:
        'Peut-on coller une butée au lieu de la cheviller ?',
      answer:
        "Le collage seul n'est pas recommandé pour les parkings à trafic régulier. Le collage structurel peut fonctionner sur sol béton propre et sec, mais un chevillage de sécurité en complément est toujours préférable.",
    },
    {
      question:
        'Combien de butées faut-il pour un parking de 50 places ?',
      answer:
        "Comptez 1 butée par place, moins les places PMR (qui ne doivent pas avoir de butées). Pour 50 places dont 3 PMR : 47 butées. Budget indicatif en caoutchouc posé inclus : 1 400 à 2 600 euros.",
    },
    {
      question:
        'Les butées gênent-elles le nettoyage du parking ?',
      answer:
        "Légèrement. Les butées chevillées sont fixes et obligent à nettoyer autour. Pour faciliter l'entretien, les butées collées sont plus faciles à retirer temporairement.",
    },
  ],
  'dos-dane-parking-reglementation-pose': [
    {
      question:
        "Un dos d'âne est-il obligatoire dans un parking privé ?",
      answer:
        "Non. Aucune loi n'impose l'installation de dos d'âne dans un parking privé. C'est une décision du gestionnaire ou de la copropriété. Cependant, en cas d'accident lié à une vitesse excessive, l'absence de dispositif de ralentissement peut être retenue comme un manquement à l'obligation de sécurité.",
    },
    {
      question:
        "Quelle est la hauteur maximale d'un dos d'âne ?",
      answer:
        "10 cm, selon la norme NF P 98-300. Cette limite s'applique aux voies publiques mais constitue la référence pour les parkings privés. Un dos d'âne plus haut expose le gestionnaire à des réclamations pour dommages aux véhicules.",
    },
    {
      question:
        "Peut-on installer un dos d'âne dans un parking souterrain ?",
      answer:
        "Oui. Privilégiez les modèles en caoutchouc à profil bas (5 à 7 cm) pour respecter la garde au sol réduite des véhicules en parking souterrain. Ajoutez des bandes réfléchissantes pour compenser l'éclairage souvent faible.",
    },
    {
      question: "Combien coûte un dos d'âne pour parking ?",
      answer:
        "Comptez 400 à 900 euros posé inclus pour un dos d'âne modulaire en caoutchouc, et 800 à 2 000 euros pour un dos d'âne en enrobé permanent. La signalisation (panneau + marquage) ajoute 150 à 450 euros.",
    },
    {
      question:
        "Faut-il un vote en AG pour installer un dos d'âne en copropriété ?",
      answer:
        "Oui. L'installation d'un dos d'âne dans le parking d'une copropriété est décidée en AG à la majorité absolue (article 25 de la loi du 10 juillet 1965). Le syndic doit présenter un ou plusieurs devis aux copropriétaires.",
    },
  ],
  'revetement-sol-industriel-types-prix': [
    {
      question:
        "Combien coûte un revêtement de sol industriel au m² ?",
      answer:
        "De 12 à 120 euros/m² selon le type de revêtement et la préparation du support. La résine époxy standard, la plus courante, se situe entre 25 et 50 euros/m² posé inclus.",
    },
    {
      question:
        "Quelle est la durée de vie d'un sol en résine industrielle ?",
      answer:
        "10 à 25 ans pour une résine époxy ou polyuréthane correctement posée sur un support bien préparé. La durée de vie dépend du trafic, des contraintes chimiques et de l'entretien. Une peinture de sol industrielle dure 3 à 6 ans.",
    },
    {
      question:
        "Peut-on appliquer une résine sur un sol existant en mauvais état ?",
      answer:
        "Oui, après préparation. Le sol doit être réparé (fissures, éclats, nids de poule), grenaillé et poncé. Si le béton est trop dégradé, un ragréage complet peut être nécessaire avant l'application de la résine.",
    },
    {
      question: 'Faut-il fermer le site pendant l’application ?',
      answer:
        "Oui, par zones. L'application se fait généralement par tiers ou par demi-surface pour maintenir l'activité. En résine époxy, comptez 48 à 72 heures d'immobilisation par zone. En méthacrylate, 4 à 6 heures suffisent.",
    },
    {
      question:
        'La résine époxy résiste-t-elle aux produits chimiques ?',
      answer:
        "L'époxy standard résiste aux huiles, graisses, carburants et à la plupart des produits d'entretien. Pour une résistance aux acides forts, aux solvants aromatiques ou aux produits chimiques concentrés, une formulation novolaque ou vinylester est nécessaire (surcoût de 20 à 40%).",
    },
  ],
  'panneau-pmr-parking-types-obligations': [
    {
      question:
        'Un panneau PMR est-il obligatoire sur un parking privé ?',
      answer:
        "Oui, si le parking est ouvert au public (commerce, entreprise accueillant des visiteurs, cabinet médical). Les parkings strictement privés (résidence fermée sans accès public) ne sont pas soumis à cette obligation, mais la signalisation reste recommandée.",
    },
    {
      question:
        'Qui doit payer la mise en conformité PMR du parking ?',
      answer:
        "Le propriétaire ou l'exploitant du parking. En copropriété, c'est le syndicat des copropriétaires (vote en assemblée générale). En centre commercial, c'est le gestionnaire du site.",
    },
    {
      question:
        'Peut-on utiliser un panneau PMR fait maison ?',
      answer:
        "Non. Les panneaux doivent être conformes à l'Instruction Interministérielle sur la Signalisation Routière (IISR) et fabriqués selon les normes NF. Un panneau imprimé sur du PVC ou du carton n'est pas réglementaire et n'a aucune valeur juridique.",
    },
    {
      question:
        "Quelle est la durée de vie d'un panneau PMR ?",
      answer:
        "10 à 15 ans pour un panneau en aluminium avec film rétroréfléchissant classe 1. Le film perd sa rétroréflexion au fil du temps (UV, intempéries). Un panneau dont le film est dégradé doit être remplacé.",
    },
    {
      question:
        'Faut-il un panneau par place PMR ou un seul pour le groupe ?',
      answer:
        "Un panneau par place PMR, ou un panneau de zone (CE14) en entrée du groupe de places + un panonceau individuel par place. La règle : chaque place doit être identifiable individuellement depuis la voie de circulation.",
    },
  ],
  'panneau-limitation-vitesse-parking': [
    {
      question:
        'La limitation de vitesse est-elle obligatoire dans un parking privé ?',
      answer:
        "La loi n'impose pas de vitesse spécifique en parking privé. Mais le gestionnaire a une obligation générale de sécurité envers les usagers (article 1242 du Code civil). L'absence de signalisation de vitesse peut être retenue comme un manquement à cette obligation en cas d'accident.",
    },
    {
      question:
        "Qui peut verbaliser un excès de vitesse dans un parking privé ?",
      answer:
        "Sur un parking privé non ouvert à la circulation publique, les forces de l'ordre ne peuvent pas dresser de contravention pour excès de vitesse. En revanche, sur un parking privé ouvert au public (centre commercial, hôpital), le Code de la route s'applique et les infractions sont verbalisables.",
    },
    {
      question:
        'Quelle vitesse choisir : 10, 20 ou 30 km/h ?',
      answer:
        "10 km/h pour les parkings couverts et souterrains (visibilité réduite, virages serrés). 20 km/h pour les parkings extérieurs avec flux piétons importants. 30 km/h uniquement pour les voies d'accès longues sans stationnement latéral. En cas de doute, choisir la vitesse la plus basse.",
    },
    {
      question:
        'Faut-il un arrêté municipal pour poser un panneau de limitation en parking privé ?',
      answer:
        "Non. Le propriétaire ou gestionnaire du parking peut poser des panneaux de limitation de vitesse sans autorisation administrative. Il est toutefois recommandé d'utiliser des panneaux conformes aux normes NF.",
    },
    {
      question:
        "Un panneau de vitesse suffit-il à dégager la responsabilité du gestionnaire ?",
      answer:
        "Le panneau est nécessaire mais pas suffisant. Le juge vérifie que le gestionnaire a pris des mesures proportionnées au risque : panneau + ralentisseur + marquage au sol + éclairage. Un panneau seul sans dispositif physique de ralentissement peut être jugé insuffisant.",
    },
  ],
  'sol-epoxy-entrepot-avantages-pose': [
    {
      question:
        "Combien de temps dure un sol époxy en entrepôt ?",
      answer:
        "10 à 20 ans selon l'épaisseur, le trafic et l'entretien. Un système de 3 mm sous trafic intense (300+ passages de chariot/jour) dure 12-15 ans. Un système de 2 mm sous trafic modéré dure 8-12 ans.",
    },
    {
      question:
        "Peut-on appliquer de l'époxy sur un vieux sol béton ?",
      answer:
        "Oui, après préparation complète. Le sol doit être grenaillé, les fissures réparées et le taux d'humidité vérifié. Un vieux béton en bon état structural est un excellent support pour l'époxy.",
    },
    {
      question:
        "L'entrepôt doit-il fermer pendant l'application ?",
      answer:
        "Non. L'application se fait par zones (tiers ou demi-surface). Pendant qu'une zone est traitée, le reste de l'entrepôt fonctionne normalement. Seule la zone en cours d'application est inaccessible pendant 48-72h.",
    },
    {
      question:
        "Époxy ou polyuréthane pour un entrepôt ?",
      answer:
        "Epoxy pour la majorité des entrepôts (température constante, trafic mécanique). Polyuréthane pour les entrepôts frigorifiques (résistance aux chocs thermiques) ou les zones de quai (exposition aux UV et aux intempéries). L'époxy offre une meilleure résistance mécanique et un prix inférieur.",
    },
    {
      question:
        'Le marquage des zones est-il inclus dans le prix ?',
      answer:
        "Le marquage est généralement facturé en supplément (3-8 euros/m² sur les zones marquées, pas sur toute la surface). Il est intégré dans le même chantier que la résine, ce qui évite une seconde mobilisation.",
    },
  ],
  'signalisation-parking-copropriete': [
    {
      question:
        'Le syndic peut-il faire des travaux de signalisation sans vote en AG ?',
      answer:
        "Les travaux d'entretien courant (retraçage à l'identique, remplacement d'un panneau cassé) relèvent de la gestion courante du syndic et n'exigent pas de vote en AG. En revanche, tout changement (nouveau panneau, modification du sens de circulation, ajout de places PMR) doit être voté.",
    },
    {
      question:
        'Qui paie les travaux de signalisation du parking ?',
      answer:
        "Les charges sont réparties entre les copropriétaires qui disposent d'une place de parking, selon les tantièmes de copropriété définis dans le règlement. Les copropriétaires sans place ne participent pas aux charges liées au parking.",
    },
    {
      question:
        'Le parking de copropriété doit-il avoir des places PMR ?',
      answer:
        "Oui, pour les immeubles construits après 2007 ou lors de travaux de rénovation. Le nombre de places PMR dépend du nombre total de places (1 place PMR pour 1 à 25 places, 2 pour 26 à 50, etc.).",
    },
    {
      question:
        'Peut-on imposer un sens de circulation dans le parking ?',
      answer:
        "Oui, par vote en AG à la majorité absolue (article 25 de la loi du 10 juillet 1965). Le sens de circulation modifie l'usage des parties communes, ce qui justifie cette majorité.",
    },
    {
      question:
        "Combien coûte un retraçage complet du parking ?",
      answer:
        "De 8 à 15 euros par place pour un retraçage standard (lignes + numéros). Pour 60 places, comptez 500 à 900 euros. Ajoutez 300-600 euros par place PMR à créer et 120-250 euros par panneau supplémentaire.",
    },
  ],
  'ombriere-photovoltaique-parking-2026': [
    {
      question:
        "L'obligation concerne-t-elle aussi les parkings souterrains ?",
      answer:
        "Non. L'obligation d'ombrières photovoltaïques s'applique uniquement aux parkings extérieurs de plein air. Les parkings couverts ou souterrains ne sont pas concernés.",
    },
    {
      question:
        'Peut-on remplacer les ombrières par des arbres ?',
      answer:
        "Partiellement. La loi Huwart permet de couvrir jusqu'à 65% de la surface requise par des dispositifs végétalisés. Mais au moins 35% de la moitié du parking doit être couverte par des ombrières intégrant des panneaux photovoltaïques.",
    },
    {
      question:
        'Faut-il refaire le marquage après la pose des ombrières ?',
      answer:
        "Les fondations des ombrières (poteaux, plots) modifient rarement l'implantation des places de stationnement. En revanche, des retouches de marquage sont fréquentes aux abords des poteaux. C'est pourquoi il est plus économique de refaire le marquage complet avant la pose.",
    },
    {
      question:
        'Quel lien entre ombrières et bornes de recharge ?',
      answer:
        "Les ombrières photovoltaïques produisent de l'énergie renouvelable qui peut alimenter directement les bornes de recharge. Depuis janvier 2025, les parkings de plus de 20 places doivent proposer au moins une borne.",
    },
  ],
  'nouvelles-normes-signaletique-parking-2026': [
    {
      question:
        "L'arrêté s'applique-t-il aux parkings privés de copropriété ?",
      answer:
        "L'arrêté concerne les parkings ouverts au public (ERP, commerces, parkings relais). Les parkings privés de copropriété fermés ne sont pas directement visés, mais les syndics ont intérêt à anticiper.",
    },
    {
      question:
        'Quelles sont les sanctions en cas de non-respect ?',
      answer:
        "La non-conformité est constatée lors des commissions de sécurité. Le gestionnaire reçoit une mise en demeure avec un délai de régularisation. En cas de non-régularisation, des astreintes journalières et des sanctions administratives s'appliquent. Pour les ERP, la fermeture administrative du parking est possible en cas de danger pour la sécurité.",
    },
    {
      question:
        'Peut-on étaler les travaux dans le temps ?',
      answer:
        "Oui. La mise en conformité peut être progressive, à condition de commencer par les points critiques (sécurité, PMR) et de documenter le plan d'action dans le registre de contrôle.",
    },
    {
      question:
        "Faut-il un bureau de contrôle pour l'audit annuel ?",
      answer:
        "L'arrêté n'impose pas spécifiquement un bureau de contrôle agréé pour l'audit annuel. Un prestataire qualifié en signalisation routière peut réaliser cet audit. L'important est la traçabilité : le rapport doit être consigné dans le registre et disponible lors des contrôles.",
    },
  ],
  'nids-de-poule-hiver-2026-solutions': [
    {
      question:
        'Peut-on réparer un nid de poule soi-même ?',
      answer:
        "Les kits de réparation vendus en grande surface (enrobé à froid en sac) permettent un colmatage temporaire pour les petits trous (moins de 15 cm). C'est un dépannage, pas une réparation. Pour un résultat durable, il faut un professionnel équipé et des matériaux adaptés.",
    },
    {
      question:
        'La réparation par résine fonctionne-t-elle en hiver ?',
      answer:
        "Oui. Les formulations modernes de résine polyuréthane sont conçues pour polymériser jusqu'à -5°C. Rénov'Route intervient toute l'année, y compris en hiver, en adaptant les matériaux aux conditions météorologiques.",
    },
    {
      question:
        "Combien de temps dure l'intervention ?",
      answer:
        "Pour un parking de taille moyenne (100 à 200 places) avec 5 à 10 nids de poule, l'intervention prend généralement une journée. La circulation piétonne est rétablie dans l'heure. Les véhicules peuvent circuler après 2 à 4 heures.",
    },
    {
      question:
        'Faut-il retracer le parking après la réparation ?',
      answer:
        "Si les nids de poule ont endommagé le marquage au sol, un retraçage partiel ou complet est recommandé. C'est souvent l'occasion de vérifier la conformité globale du parking (places PMR, signalisation, passages piétons).",
    },
  ],
  'signalisation-horizontale-lyon-marquage': [
    {
      question:
        'Quelle est la meilleure période pour faire du marquage au sol à Lyon ?',
      answer:
        "Avril à juin et septembre à octobre. La température doit être supérieure à 5°C, le sol doit être sec et les prévisions météo favorables sur 24 heures.",
    },
    {
      question:
        "Combien coûte un retraçage complet de parking à Lyon ?",
      answer:
        "De 8 à 15 euros/place pour un retraçage standard. Un parking de 60 places coûte entre 500 et 900 euros. Ajoutez 300-600 euros par place PMR et 80-150 euros par passage piéton.",
    },
    {
      question:
        'Faut-il un arrêté de circulation pour marquer un parking privé ?',
      answer:
        "Non. L'arrêté de circulation est obligatoire uniquement pour les interventions sur voie publique. Un parking privé, même ouvert au public, ne nécessite pas d'arrêté. Il faut simplement baliser la zone de travaux et informer les usagers.",
    },
    {
      question:
        "Quelle est la durée de vie du marquage au sol à Lyon ?",
      answer:
        "Avec une peinture acrylique certifiée NF EN 1436 (classe P5) : 3 à 5 ans en parking, 1 à 2 ans sur voirie à fort trafic. Le thermoplastique (classe P6) : 5 à 8 ans en parking.",
    },
  ],
  'reparation-chaussee-parking-methodes-prix': [
    {
      question:
        'Peut-on réparer un parking sans le fermer ?',
      answer:
        "Dans la plupart des cas, les réparations se font par zones. Chaque zone est balisée et interdite à la circulation pendant l'intervention (quelques heures pour la résine, 2-4 heures pour l'enrobé à chaud). Le reste du parking reste accessible.",
    },
    {
      question:
        "Quelle est la durée de vie d'une réparation de chaussée ?",
      answer:
        "Elle dépend de la méthode : 6-18 mois pour l'enrobé à froid, 5-10 ans pour la résine polyuréthane, 10-15 ans pour l'enrobé à chaud.",
    },
    {
      question:
        "Faut-il retracer les places après une réparation de chaussée ?",
      answer:
        "Oui, si les réparations ont touché des zones marquées. Le marquage d'origine est détruit par la découpe ou recouvert par le matériau de réparation. Le retraçage se fait après séchage complet de la réparation (24 à 48 heures selon la méthode).",
    },
    {
      question:
        "À qui faire appel pour la réparation de chaussée d'un parking ?",
      answer:
        "Un spécialiste de la rénovation de parking maîtrise toutes les méthodes (résine, enrobé, pontage) et peut recommander la solution adaptée à chaque zone.",
    },
  ],
  'bumper-supermarche-protection-frigo': [
    {
      question:
        'Les bumpers sont-ils obligatoires dans un supermarché ?',
      answer:
        "Non, il n'y a pas d'obligation légale d'installer des bumpers. Mais le Code du travail impose à l'employeur de protéger les équipements de travail et de prévenir les risques. En cas de blessure causée par un meuble endommagé, l'absence de protection peut être retenue comme un manquement à l'obligation de sécurité.",
    },
    {
      question:
        'Peut-on installer des bumpers sans fermer le magasin ?',
      answer:
        "Oui. La pose se fait généralement en dehors des heures d'ouverture (tôt le matin ou après fermeture). Le scellement chimique nécessite 24h de séchage, mais le bumper peut être mis en service dès que le scellement est pris (4-6 heures pour les résines rapides).",
    },
    {
      question:
        "Quelle différence entre un bumper et une barrière de protection ?",
      answer:
        "Le bumper est une barre basse (15-25 cm du sol) conçu pour stopper les chariots au niveau des roues. La barrière de protection est plus haute (50-100 cm) et protège contre les véhicules ou les chariots élévateurs. En supermarché, les bumpers suffisent pour les zones clients.",
    },
    {
      question: 'Les bumpers abîment-ils le sol ?',
      answer:
        "La fixation par chevilles chimiques crée des trous de 12-16 mm de diamètre dans la dalle. Si les bumpers sont retirés, les trous peuvent être rebouchés avec un mortier de réparation. Sur un sol en résine, un professionnel peut reprendre les points de perçage pour un résultat invisible.",
    },
  ],
  'marquage-sol-supermarche-grande-surface': [
    {
      question:
        'Le marquage est-il obligatoire dans un parking de grande surface ?',
      answer:
        "Le marquage des places PMR est obligatoire (arrêté du 15 janvier 2007). Le marquage des autres places n'est pas légalement obligatoire, mais il est indispensable pour la sécurité, l'organisation du stationnement et la responsabilité du gestionnaire en cas d'accident.",
    },
    {
      question:
        "Peut-on tracer un parking de supermarché en journée ?",
      answer:
        "Oui, mais par zones avec balisage. La peinture acrylique sèche en 20-30 minutes et le parking est circulable après 1 heure. En pratique, les grandes surfaces préfèrent les interventions de nuit pour éviter toute gêne.",
    },
    {
      question:
        'Quelle peinture pour un parking de grande surface ?',
      answer:
        "Une peinture acrylique certifiée NF EN 1436 (classe P5 minimum) pour les zones de stationnement. Du thermoplastique (classe P6-P7) pour les passages piétons et les zones à très fort trafic (entrées, sorties, manoeuvres).",
    },
  ],
  'reparer-nid-de-poule-soi-meme': [
    {
      question:
        "L'enrobé à froid en sac est-il efficace ?",
      answer:
        "Oui, pour des réparations temporaires de petits nids de poule (moins de 30 cm) sur des parkings à faible trafic. Non, pour des réparations durables ou des zones à fort trafic. L'enrobé à froid en sac n'a pas la densité ni l'adhérence d'un enrobé à chaud ou d'une résine professionnelle.",
    },
    {
      question:
        'Peut-on utiliser du béton pour reboucher un nid de poule ?',
      answer:
        "Non. Le béton n'a pas la même élasticité que l'enrobé. Il se fissure sous les contraintes thermiques (dilatation/contraction) et sous le passage des véhicules. Il se décolle des bords en quelques mois.",
    },
    {
      question:
        "Faut-il un permis ou une autorisation pour réparer un nid de poule ?",
      answer:
        "Non, si le parking est privé. Sur la voie publique, seules les collectivités ou leurs prestataires sont habilités à intervenir. Signalez les nids de poule sur voie publique à votre mairie.",
    },
  ],
  'duree-vie-marquage-sol-parking': [
    {
      question:
        "Quelle est la durée de vie d'un marquage au sol de parking ?",
      answer:
        "De 3 à 5 ans avec une peinture acrylique certifiée NF EN 1436 (classe P5). De 5 à 8 ans avec un thermoplastique (classe P6). De 7 à 10 ans avec une résine à froid (classe P7). Les zones de manoeuvre et les passages piétons s'usent 2 à 3 fois plus vite.",
    },
    {
      question:
        'Comment savoir si mon marquage doit être refait ?',
      answer:
        "3 signes : les lignes sont effacées à plus de 50%, les passages piétons ne sont plus visibles de nuit (perte de rétroréflexion), les numéros de place sont illisibles.",
    },
    {
      question:
        'Le thermoplastique dure-t-il vraiment plus longtemps ?',
      answer:
        "Oui, 2 à 3 fois plus longtemps que la peinture acrylique. Son épaisseur (1,5-3 mm vs 0,3-0,5 mm pour la peinture) explique cette différence. Il est aussi plus résistant à l'abrasion des pneus. Son coût plus élevé (15-25 euros/m² vs 8-15 euros/m²) est compensé par une fréquence de retraçage divisée par 2.",
    },
  ],
  'calendrier-entretien-parking': [
    {
      question:
        "Qui est responsable de l'entretien d'un parking de copropriété ?",
      answer:
        "Le syndic est responsable de l'entretien des parties communes, y compris le parking. Les décisions de travaux sont votées en assemblée générale. Les travaux d'entretien courant relèvent de la gestion courante du syndic ; les travaux de rénovation importants nécessitent un vote à la majorité absolue.",
    },
    {
      question:
        'Faut-il fermer le parking pendant les travaux de retraçage ?',
      answer:
        "Pas forcément. Un prestataire organisé travaille par zones pour maintenir l'accès à une partie du parking pendant le chantier. Le temps de séchage de la peinture est de 1 à 3 heures par zone. Pour un parking de 200 places, comptez 2 à 3 jours de travaux avec fermeture partielle par rotation.",
    },
    {
      question:
        'Peut-on faire des retouches localisées au lieu de tout retracer ?',
      answer:
        "Oui, et c'est même recommandé. Les retouches ciblées sur les zones les plus usées (entrées, sorties, places proches des accès) permettent de maintenir la conformité à moindre coût entre deux retraçages complets.",
    },
    {
      question: 'À quelle fréquence faut-il inspecter un parking ?',
      answer:
        'Deux inspections complètes par an (mars et septembre) sont le minimum. Les parkings à fort trafic (plus de 500 véhicules par jour) méritent une inspection visuelle rapide mensuelle des zones les plus sollicitées.',
    },
  ],
  'norme-nf-en-1436-marquage-routier': [
    {
      question:
        'La norme NF EN 1436 est-elle obligatoire en parking privé ?',
      answer:
        "Non, au sens strict. Seuls les marquages sur voie publique doivent obligatoirement respecter la norme. Mais en parking privé, l'utilisation de produits certifiés NF EN 1436 est fortement recommandée. En cas de litige ou d'accident, la conformité à la norme constitue un élément de preuve de la diligence du gestionnaire.",
    },
    {
      question: 'Comment savoir si mon marquage actuel est conforme ?',
      answer:
        "Visuellement, un marquage conforme NF EN 1436 se distingue par sa rétroréflexion (il brille sous les phares la nuit grâce aux microbilles de verre). Un marquage mat et sans reflet est probablement non certifié. Pour un diagnostic précis, un audit technique avec mesure au rétroflectomètre est possible.",
    },
    {
      question:
        'Quelle est la différence entre NF EN 1436 et la marque NF ?',
      answer:
        "La norme NF EN 1436 définit les critères de performance. La marque NF est une certification délivrée par l'AFNOR qui atteste qu'un produit spécifique respecte ces critères. Un produit peut être conforme NF EN 1436 (il respecte les critères) sans porter la marque NF (il n'a pas été certifié par l'AFNOR).",
    },
    {
      question: 'Les microbilles de verre sont-elles obligatoires ?',
      answer:
        "Non, mais elles sont indispensables pour atteindre les classes de rétroréflexion R2 et supérieures. Sans microbilles, le marquage n'est pas rétroréfléchissant et donc peu visible de nuit ou en parking couvert. Toute peinture certifiée NF EN 1436 de classe R2 ou supérieure intègre des microbilles.",
    },
  ],
  'accessibilite-parking-erp-normes': [
    {
      question:
        "Mon parking n'a que 5 places, dois-je avoir une place PMR ?",
      answer:
        "Oui. Dès la première place de stationnement accessible au public, une place PMR est obligatoire. La règle des 2% avec arrondi à l'entier supérieur s'applique : 5 places = 1 place PMR minimum.",
    },
    {
      question:
        'Les places PMR sont-elles obligatoires en parking privé ?',
      answer:
        "Non, si le parking est strictement privé (usage exclusif des résidents d'une copropriété sans ERP). Oui, si le parking dessert un ERP (commerce, bureau recevant du public, cabinet médical).",
    },
    {
      question:
        'Que faire si la pente de mon parking dépasse 2% ?',
      answer:
        "La pente de la place PMR elle-même doit être inférieure à 2%. Si le parking est en pente, la place PMR doit être implantée dans la zone la plus plate. Si aucune zone ne permet une pente inférieure à 2%, des travaux de nivellement sont nécessaires.",
    },
  ],
  'preparation-sol-avant-resine-epoxy': [
    {
      question:
        "Peut-on appliquer de la résine époxy sur un sol peint ?",
      answer:
        "Non, la peinture existante doit être intégralement retirée par grenaillage ou décapage chimique. La résine époxy appliquée sur une peinture se décollera avec la peinture sous-jacente.",
    },
    {
      question:
        'Faut-il grenailler un sol en béton neuf ?',
      answer:
        "Oui. Le béton neuf présente une couche de laitance en surface qui empêche l'adhérence de la résine. Le grenaillage ou le ponçage est obligatoire, même sur un béton lisse d'apparence propre.",
    },
    {
      question:
        'Combien de temps dure la préparation ?',
      answer:
        "Pour un parking de 50 places (environ 650 m²) : 2-3 jours de préparation (diagnostic + nettoyage + grenaillage + primaire). L'application de la résine de finition prend 1-2 jours supplémentaires.",
    },
  ],
  'resine-epoxy-ou-peinture-sol-comparatif': [
    {
      question:
        'La résine époxy jaunit-elle ?',
      answer:
        "Oui, la résine époxy standard jaunit sous les UV. En parking extérieur, l'alternative est la résine polyuréthane (aliphatique) qui résiste aux UV. En parking couvert ou souterrain, le jaunissement n'est pas un problème.",
    },
    {
      question:
        'Peut-on mettre de la résine sur de la peinture ?',
      answer:
        "Non. La peinture existante doit être intégralement retirée (grenaillage ou décapage). La résine appliquée sur une peinture se décollera avec la peinture. C'est une erreur fréquente qui coûte cher.",
    },
    {
      question:
        'Quelle est la solution intermédiaire ?',
      answer:
        "La peinture époxy monocomposant. Elle coûte 10-20 euros/m² (entre la peinture acrylique et la résine bicomposant), dure 3-5 ans et offre une résistance chimique moyenne. C'est un bon compromis pour les parkings à trafic moyen sans agression chimique.",
    },
    {
      question:
        'Faut-il revêtir tout le sol ou juste tracer les lignes ?',
      answer:
        "Pour un parking standard (copropriété, bureau), le traçage des lignes en peinture suffit. Le revêtement complet en résine est réservé aux usages intensifs (entrepôt, atelier, showroom) ou aux parkings souterrains.",
    },
  ],
  'resine-sol-parking-souterrain': [
    {
      question:
        'Peut-on mettre de la résine sur un sol humide ?',
      answer:
        "Pas directement. L'humidité du support doit être inférieure à 4,5% pour l'époxy et 6% pour le polyuréthane. Si le taux est supérieur, un primaire anti-humidité doit être appliqué avant la résine. Ce traitement ajoute 8-15 euros/m² au budget.",
    },
    {
      question:
        'Combien de temps faut-il fermer le parking ?',
      answer:
        "De 48 à 72 heures pour l'époxy et le polyuréthane (24h entre chaque couche). De 4 à 8 heures pour la résine MMA. L'intervention se fait par zones (1/3 du parking à la fois) pour maintenir l'accès aux résidents.",
    },
    {
      question:
        'La résine résiste-t-elle aux pneus chauds ?',
      answer:
        "Oui, l'époxy et le polyuréthane résistent aux températures de pneus après roulage (jusqu'à 80°C). La résine MMA résiste jusqu'à 100°C. Aucune de ces résines ne marque sous le poids d'un véhicule à l'arrêt.",
    },
  ],
}

export default FAQ_DATA
