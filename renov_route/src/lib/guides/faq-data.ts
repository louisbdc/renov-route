import type { FAQItem } from '@/components/FAQSchema'

const FAQ_DATA: Record<string, FAQItem[]> = {
  'prix-marquage-sol-parking': [
    {
      question: 'Quel est le prix moyen pour tracer un parking de 30 places ?',
      answer:
        "Pour un parking de 30 places avec retraçage des lignes, flèches et passages piétons, comptez entre 2 500 € et 6 000 € HT selon le type de peinture et l'état du sol. Un devis personnalisé permet d'affiner cette estimation.",
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
        "Oui. Le stationnement abusif sur une place PMR est passible d'une amende de 135 € (4e classe), y compris dans les parkings privés ouverts à la circulation publique (centres commerciaux, supermarchés, hôpitaux).",
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
        "Les dimensions de référence (3,30 m x 5,00 m) sont celles de l'arrêté du 20 avril 2017, qui reste la référence pour les ERP neufs.",
    },
  ],
  'nid-de-poule-responsabilite-parking': [
    {
      question:
        'Un client peut-il me poursuivre en justice pour un nid de poule ?',
      answer:
        "Oui. Si votre assurance refuse d'indemniser ou si le montant des dommages est contesté, le client peut saisir la justice (tribunal judiciaire ou de proximité, selon le montant et le lieu). En pratique, la plupart des litiges se règlent à l'amiable via les assurances.",
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
      question: "Quelles sont les dimensions d'une place de parking PMR ?",
      answer:
        "Une place de stationnement PMR mesure au minimum 3,30 m de large sur 5 m de long, dont une bande d'accès latérale de 0,80 m. Le sol doit rester horizontal (dévers ≤ 2 %) et relié à un cheminement accessible jusqu'à l'entrée. Largeur et longueur sont fixées par l'arrêté du 20 avril 2017.",
    },
    {
      question: "Peut-on mettre une place PMR en épi ou en bataille ?",
      answer:
        "Oui, les deux configurations sont possibles. En épi, la bande d'accès doit se trouver du côté le plus large de la place (côté où le véhicule se présente). En bataille (perpendiculaire), la bande d'accès est latérale, comme pour une place classique.",
    },
    {
      question: "La place PMR doit-elle être peinte en bleu ?",
      answer:
        "Non, le fond bleu n'est pas obligatoire mais fortement recommandé. La réglementation impose le pictogramme PMR et les lignes de délimitation, mais pas de couleur de fond spécifique. En pratique, le marquage bleu est devenu un standard car il améliore la visibilité et identifie immédiatement la place.",
    },
    {
      question: "Faut-il une place PMR dans un parking de 10 places ?",
      answer:
        "Oui. La règle des 2 % s'arrondit à l'unité supérieure : même un parking de 10 places doit comporter 1 place PMR (2 % de 10 = 0,2, arrondi à 1). Le minimum réglementaire est d'une place, quelle que soit la capacité.",
    },
    {
      question: "Peut-on transformer une place standard en place PMR sans refaire tout le parking ?",
      answer:
        "Oui. Il suffit d'élargir la place concernée (en réduisant la place adjacente ou en supprimant une place) pour atteindre 3,30 m de large, puis de tracer le marquage PMR. C'est l'intervention la plus courante et la moins coûteuse (à partir de 300 euros par place).",
    },
    {
      question: "Les dimensions PMR sont-elles les mêmes pour un parking souterrain ?",
      answer:
        "Oui, les dimensions au sol sont identiques. En parc de stationnement, le passage libre sous les obstacles en hauteur doit atteindre au moins 2 m sur le cheminement accessible.",
    },
  ],
  'signalisation-pmr-parking': [
    {
      question:
        'Le panneau PMR est-il obligatoire en plus du marquage au sol ?',
      answer:
        "Oui. Le panneau B6d et le pictogramme au sol sont deux éléments distincts, tous deux obligatoires. L'un ne remplacé pas l'autre. Le panneau signalé la place à distance, le pictogramme l'identifié au sol.",
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
  'cout-renovation-parking': [
    {
      question: "Quel est le prix moyen d'une rénovation de parking ?",
      answer:
        "Pour une rénovation standard (retraçage + réparations ponctuelles + signalisation + PMR), comptez à partir de 80 euros par place de parking. Le budget dépend de l'état initial et des travaux nécessaires.",
    },
    {
      question: "Le coût de rénovation inclut-il la mise aux normes PMR ?",
      answer:
        "Pas systématiquement. Certains devis séparent les travaux de rénovation générale et la mise en conformité PMR. Demandez toujours un devis incluant le poste PMR pour éviter les surprises.",
    },
    {
      question: "Peut-on rénover un parking par étapes pour étaler le budget ?",
      answer:
        "Oui, c'est courant en copropriété. La priorité est la sécurité : réparation de chaussée et PMR d'abord, puis marquage et signalisation.",
    },
    {
      question: "Combien de temps dure un chantier de rénovation de parking ?",
      answer:
        "Comptez 1 à 3 jours pour une rénovation légère (marquage + signalisation), 3 à 5 jours pour une rénovation standard et 1 à 3 semaines pour une rénovation lourde avec réfection de chaussée.",
    },
    {
      question: "Un devis de rénovation de parking est-il gratuit ?",
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
  'comment-tracer-parking': [
    {
      question: "Quelles sont les dimensions d'une place de stationnement ?",
      answer:
        "Une place de stationnement standard mesure 2,50 m de large sur 5 m de long. En épi ou en bataille, la largeur peut descendre à 2,30 m. Une place PMR fait 3,30 m de large (dont 0,80 m de bande d'accès) sur 5 m.",
    },
    {
      question: "Combien de temps dure le traçage d'un parking ?",
      answer:
        "Pour un parking de 50 à 100 places, comptez 1 à 2 jours de traçage effectif, plus 1 jour de préparation du support (nettoyage, réparation). Le parking est praticable 2 à 3 heures après l'application de la peinture acrylique.",
    },
    {
      question: "Faut-il un permis ou une autorisation pour tracer un parking privé ?",
      answer:
        "Non, le traçage d'un parking privé ne nécessite pas de permis. En revanche, si le parking est ouvert au public (ERP), il doit respecter les normes d'accessibilité PMR et les règles de signalisation. Pour un parking de copropriété, le vote en AG est nécessaire (majorité simple, article 24).",
    },
    {
      question: "Peut-on tracer un parking sur du gravier ?",
      answer:
        "Non, le marquage au sol nécessite une surface dure et lisse (enrobé, béton, résine). Sur du gravier, on utilise des délimiteurs physiques : rondins de bois, bordures béton, plots ou bandes de guidage.",
    },
    {
      question: "Quelle est la largeur minimale d'une place de parking ?",
      answer:
        "La largeur minimale recommandée est de 2,30 m, mais la norme courante est de 2,50 m. Pour un confort optimal (facilité d'ouverture des portières), privilégiez 2,50 à 2,60 m. Les places PMR mesurent 3,30 m de large (place de 2,50 m + bande d'accès de 0,80 m).",
    },
    {
      question: "Combien coûte le traçage d'un parking ?",
      answer:
        "Le prix varie selon la surface, le type de peinture et l'état du support. En ordre de grandeur : à partir de 8 euros/m² en peinture acrylique, à partir de 15 euros/m² en thermoplastique. Pour un parking de 50 places, comptez à partir de 4 000 euros.",
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
      question: "Les bandes podotactiles sont-elles obligatoires ?",
      answer:
        "Oui, dans les parkings d'ERP (centres commerciaux, cliniques, hôtels), aux traversées du cheminement accessible. Les bandes d'éveil de vigilance doivent être placées à 50 centimètres du bord de la chaussée, sur toute la largeur du passage.",
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
      question: "Qui peut installer la signalisation d'un parking ?",
      answer:
        "L'installation doit être réalisée par un professionnel qualifié pour garantir la conformité des panneaux (modèle, dimensions, rétroréflexion, hauteur). Demandez à l'installateur de préciser par écrit les modèles et références posés.",
    },
    {
      question:
        'Faut-il un permis pour installer des panneaux dans un parking privé ?',
      answer:
        "Non. L'installation de signalisation dans un parking privé ne nécessite pas d'autorisation administrative. En copropriété, un vote en AG est requis.",
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
      question: "Faut-il un permis pour installer une barrière de parking ?",
      answer:
        "Non, pour un parking privé. Une déclaration préalable de travaux peut être requise si l'installation modifie l'aspect extérieur du bâtiment (façade, clôture visible depuis la voie publique). En copropriété, un vote en AG est obligatoire.",
    },
    {
      question: "Combien coûte une barrière de parking automatique ?",
      answer:
        "Comptez à partir de 5 000 euros pour une barrière levante électrique avec système de contrôle d'accès (badge ou télécommande), pose et mise en service incluses.",
    },
    {
      question: "Peut-on installer une barrière solaire ?",
      answer:
        "Oui. Les barrières solaires fonctionnent avec un panneau photovoltaïque et une batterie. Elles conviennent aux parkings extérieurs avec un trafic modéré (moins de 30 passages/jour). Le surcoût par rapport à une barrière filaire est de l'ordre de quelques centaines à plus d'un millier d'euros.",
    },
    {
      question: "La barrière doit-elle rester ouverte la nuit ?",
      answer:
        "C'est au gestionnaire de décider. En copropriété, la barrière est généralement fermée 24h/24 avec accès par badge. En parking commercial, elle est souvent ouverte pendant les heures d'ouverture et fermée la nuit.",
    },
    {
      question: "Comment sécuriser l'accès aux secours ?",
      answer:
        "Toute barrière doit être équipée d'un débrayage manuel (clé ou levier). Les ERP doivent prévoir un système d'ouverture automatique sur alerte incendie (liaison avec la centrale de sécurité). Faites valider le dispositif d'accès des pompiers selon votre configuration.",
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
      question: "Les butées de parking sont-elles obligatoires ?",
      answer:
        "Non. Aucune réglementation n'impose la pose de butées dans un parking privé. Elles sont cependant fortement recommandées pour protéger les structures, les véhicules et les piétons. En copropriété, la pose est décidée en AG.",
    },
    {
      question: "Quelle butée choisir pour un parking souterrain ?",
      answer:
        "La butée en caoutchouc recyclé est le meilleur choix pour un parking souterrain : légère, absorbante, avec bandes réfléchissantes intégrées. Le béton est aussi adapté si le budget est serré, mais ajoutez des bandes réfléchissantes.",
    },
    {
      question: "Peut-on coller une butée au lieu de la cheviller ?",
      answer:
        "Le collage seul n'est pas recommandé pour les parkings à trafic régulier. Le collage structurel (résine époxy ou polyuréthane) peut fonctionner sur sol béton propre et sec, mais un chevillage de sécurité en complément est toujours préférable.",
    },
    {
      question: "Combien de butées faut-il pour un parking de 50 places ?",
      answer:
        "Comptez 1 butée par place, moins les places PMR (qui ne doivent pas avoir de butées). Pour 50 places dont 3 PMR : 47 butées. Budget indicatif en caoutchouc pose incluse : à partir de 2 500 euros.",
    },
    {
      question: "Les butées gênent-elles le nettoyage du parking ?",
      answer:
        "Légèrement. Les butées chevillées sont fixes et obligent à nettoyer autour. Pour faciliter l'entretien, les butées collées sont plus faciles à retirer temporairement. Prévoyez un passage de l'autolaveuse de chaque côté de la butée.",
    },
  ],
  'dos-dane-parking-reglementation-pose': [
    {
      question: "Un dos d'âne est-il obligatoire dans un parking privé ?",
      answer:
        "Non. Aucune loi n'impose l'installation de dos d'âne dans un parking privé. C'est une décision du gestionnaire ou de la copropriété. Cependant, en cas d'accident lié à une vitesse excessive, l'absence de dispositif de ralentissement peut être retenue comme un manquement à l'obligation de sécurité.",
    },
    {
      question: "Quelle est la hauteur maximale d'un dos d'âne ?",
      answer:
        "10 cm, selon la norme NF P 98-300. Cette limite s'applique aux voies publiques mais constitue la référence pour les parkings privés. Un dos d'âne plus haut expose le gestionnaire à des réclamations pour dommages aux véhicules.",
    },
    {
      question: "Peut-on installer un dos d'âne dans un parking souterrain ?",
      answer:
        "Oui. Privilégiez les modèles en caoutchouc à profil bas (5 à 7 cm) pour respecter la garde au sol réduite des véhicules en parking souterrain. Ajoutez des bandes réfléchissantes pour compenser l'éclairage souvent faible.",
    },
    {
      question: "Combien coûte un dos d'âne pour parking ?",
      answer:
        "Comptez à partir de 600 euros pose incluse pour un dos d'âne modulaire en caoutchouc, et à partir de 1 400 euros pour un dos d'âne en enrobé permanent. La signalisation (panneau + marquage) ajoute quelques centaines d'euros supplémentaires.",
    },
    {
      question: "Faut-il un vote en AG pour installer un dos d'âne en copropriété ?",
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
  'panneau-limitation-vitesse-parking': [
    {
      question:
        'La limitation de vitesse est-elle obligatoire dans un parking privé ?',
      answer:
        "La loi n'impose pas de vitesse spécifique en parking privé. Mais le gestionnaire à une obligation générale de sécurité envers les usagers (article 1242 du Code civil). L'absence de signalisation de vitesse peut être retenue comme un manquement à cette obligation en cas d'accident.",
    },
    {
      question:
        'Quelle vitesse choisir : 10, 20 ou 30 km/h ?',
      answer:
        "10 km/h pour les parkings couverts et souterrains (visibilité réduite, virages serrés). 20 km/h pour les parkings extérieurs avec flux piétons importants. 30 km/h uniquement pour les voies d'accès longues sans stationnement latéral. En cas de doute, choisir la vitesse la plus basse.",
    },
    {
      question: "Qui peut verbaliser un excès de vitesse dans un parking privé ?",
      answer:
        "Sur un parking privé non ouvert à la circulation publique, les forces de l'ordre ne peuvent pas dresser de contravention pour excès de vitesse. En revanche, sur un parking privé ouvert au public (centre commercial, hôpital), le Code de la route s'applique et les infractions sont verbalisables. Le gestionnaire peut également faire appliquer son règlement intérieur.",
    },
    {
      question: "Faut-il un arrêté municipal pour poser un panneau de limitation en parking privé ?",
      answer:
        "Non. Le propriétaire ou gestionnaire du parking peut poser des panneaux de limitation de vitesse sans autorisation administrative. Il est toutefois recommandé d'utiliser des panneaux conformes aux normes NF pour leur donner une crédibilité juridique maximale.",
    },
  ],
  'sol-epoxy-entrepot-avantages-pose': [
    {
      question:
        "Peut-on appliquer de l'époxy sur un vieux sol béton ?",
      answer:
        "Oui, après préparation complète. Le sol doit être grenaillé, les fissures réparées et le taux d'humidité vérifié. Un vieux béton en bon état structural est un excellent support pour l'époxy.",
    },
    {
      question:
        'Le marquage des zones est-il inclus dans le prix ?',
      answer:
        "Le marquage est généralement facturé en supplément (3-8 euros/m² sur les zones marquées, pas sur toute la surface). Il est intégré dans le même chantier que la résine, ce qui évite une seconde mobilisation.",
    },
    {
      question: "Combien de temps dure un sol époxy en entrepôt ?",
      answer:
        "10 à 20 ans selon l'épaisseur, le trafic et l'entretien. Un système de 3 mm sous trafic intense (300+ passages de chariot/jour) dure 12-15 ans. Un système de 2 mm sous trafic modéré dure 8-12 ans. L'entretien régulier (nettoyage à l'autolaveuse, pas de produits abrasifs) prolonge la durée de vie.",
    },
    {
      question: "L'entrepôt doit-il fermer pendant l'application ?",
      answer:
        "Non. L'application se fait par zones (tiers ou demi-surface). Pendant qu'une zone est traitée, le reste de l'entrepôt fonctionne normalement. Le planning est adapté aux contraintes logistiques du site. Seule la zone en cours d'application est inaccessible pendant 48-72h.",
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
      question: "Le parking de copropriété doit-il avoir des places PMR ?",
      answer:
        "Les immeubles d'habitation neufs sont soumis à des règles d'accessibilité qui concernent le stationnement. Pour un immeuble existant, l'obligation dépend de la nature des travaux : faites-la vérifier avant le vote en AG.",
    },
    {
      question:
        'Peut-on imposer un sens de circulation dans le parking ?',
      answer:
        "Oui, par vote en AG à la majorité absolue (article 25 de la loi du 10 juillet 1965). Le sens de circulation modifié l'usage des parties communes, ce qui justifie cette majorité.",
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
      question: "Quel lien entre ombrières et bornes de recharge ?",
      answer:
        "Les ombrières photovoltaïques produisent de l'énergie renouvelable qui peut alimenter directement les bornes de recharge. Depuis le 1er janvier 2025, les bâtiments non résidentiels de plus de 20 places doivent proposer au moins un point de recharge. Le marquage au sol des places de recharge suit des règles spécifiques de signalisation.",
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
      question: "Faut-il retracer les places après une réparation de chaussée ?",
      answer:
        "Oui, si les réparations ont touché des zones marquées. Le marquage d'origine est détruit par la découpe ou recouvert par le matériau de réparation. Le retraçage se fait après séchage complet de la réparation (24 à 48 heures selon la méthode).",
    },
    {
      question: "À qui faire appel pour la réparation de chaussée d'un parking ?",
      answer:
        "Un spécialiste de la rénovation de parking maîtrise toutes les méthodes (résine, enrobé, pontage) et peut recommander la solution adaptée à chaque zone. Pour un coût de rénovation complet, consultez notre guide dédié.",
    },
  ],
  'bumper-supermarche-protection-frigo': [
    {
      question: "Les bumpers sont-ils obligatoires dans un supermarché ?",
      answer:
        "Non, il n'y a pas d'obligation légale d'installer des bumpers. Mais le Code du travail impose à l'employeur de protéger les équipements de travail et de prévenir les risques. En cas de blessure causée par un meuble endommagé, l'absence de protection peut être retenue comme un manquement à l'obligation de sécurité.",
    },
    {
      question: "Peut-on installer des bumpers sans fermer le magasin ?",
      answer:
        "Oui. La pose se fait généralement en dehors des heures d'ouverture (tôt le matin ou après fermeture). Le scellement chimique nécessite 24h de séchage, mais le bumper peut être mis en service dès que le scellement est pris (4-6 heures pour les résines rapides). Les allées traitées sont balisées pendant la pose.",
    },
    {
      question: "Quelle différence entre un bumper et une barrière de protection ?",
      answer:
        "Le bumper est une barre basse (15-25 cm du sol) conçue pour stopper les chariots au niveau des roues. La barrière de protection est plus haute (50-100 cm) et protège contre les véhicules ou les chariots élévateurs. En supermarché, les bumpers suffisent pour les zones clients. Les barrières de protection sont réservées aux quais de livraison et aux zones de stockage.",
    },
    {
      question: "Les bumpers abîment-ils le sol ?",
      answer:
        "La fixation par chevilles chimiques crée des trous de 12-16 mm de diamètre dans la dalle. Si les bumpers sont retirés, les trous peuvent être rebouchés avec un mortier de réparation. Sur un sol en résine, un professionnel peut reprendre les points de perçage pour un résultat invisible.",
    },
  ],
  'marquage-sol-supermarche-grande-surface': [
    {
      question:
        'Le marquage est-il obligatoire dans un parking de grande surface ?',
      answer:
        "Le marquage des places PMR est obligatoire (pour les ERP neufs, arrêté du 20 avril 2017). Le marquage des autres places n'est pas légalement obligatoire, mais il est indispensable pour la sécurité, l'organisation du stationnement et la responsabilité du gestionnaire en cas d'accident.",
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
    {
      question: 'À quelle fréquence retracer un parking de supermarché ?',
      answer:
        "Un retraçage professionnel tous les 3 à 5 ans avec des produits certifiés convient à la plupart des grandes surfaces. Les zones les plus sollicitées, comme les entrées, les sorties et les zones de manœuvre, s'usent plus vite et demandent une surveillance régulière.",
    },
  ],
  'reparer-nid-de-poule-soi-meme': [
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
    {
      question: "L'enrobé à froid en sac est-il efficace ?",
      answer:
        "Oui, pour des réparations temporaires de petits nids de poule (< 30 cm) sur des parkings à faible trafic. Non, pour des réparations durables ou des zones à fort trafic. L'enrobé à froid en sac n'a pas la densité ni l'adhérence d'un enrobé à chaud ou d'une résine professionnelle.",
    },
    {
      question: "Combien coûte la réparation d'un nid de poule soi-même ?",
      answer:
        "Comptez environ 25 € par sac de 25 kg d'enrobé à froid. Reboucher trois nids de poule représente environ 75 € de matériaux et 3 heures de travail, mais la réparation reste temporaire et peut céder en quelques mois.",
    },
  ],
  'duree-vie-marquage-sol-parking': [
    {
      question: "Quelle est la durée de vie d'un marquage au sol de parking ?",
      answer:
        "De 3 à 5 ans avec une peinture acrylique certifiée NF EN 1436 (classe P5). De 5 à 8 ans avec un thermoplastique (classe P6). De 7 à 10 ans avec une résine à froid (classe P7). Les zones de manœuvre et les passages piétons s'usent 2 à 3 fois plus vite.",
    },
    {
      question: "Comment savoir si mon marquage doit être refait ?",
      answer:
        "3 signes : les lignes sont effacées à plus de 50%, les passages piétons ne sont plus visibles de nuit (perte de rétroréflexion), les numéros de place sont illisibles.",
    },
    {
      question: "Le thermoplastique dure-t-il vraiment plus longtemps ?",
      answer:
        "Oui, 2 à 3 fois plus longtemps que la peinture acrylique. Son épaisseur (1,5-3 mm vs 0,3-0,5 mm pour la peinture) explique cette différence. Il est aussi plus résistant à l'abrasion des pneus. Son coût plus élevé à l'achat est compensé par une fréquence de retraçage divisée par 2.",
    },
    {
      question: "Quelle peinture choisir pour faire durer un marquage de parking ?",
      answer:
        "La peinture acrylique certifiée NF EN 1436 de classe P5 offre le meilleur rapport coût/durée pour la majorité des parkings, avec 3 à 5 ans de tenue. Réservez le thermoplastique (5 à 8 ans) aux zones à très fort trafic, comme les passages piétons et les entrées.",
    },
  ],
  'calendrier-entretien-parking': [
    {
      question: "Qui est responsable de l'entretien d'un parking de copropriété ?",
      answer:
        "Le syndic est responsable de l'entretien des parties communes, y compris le parking. Les décisions de travaux sont votées en assemblée générale. Les travaux d'entretien courant relèvent de la gestion courante du syndic ; les travaux de rénovation importants nécessitent un vote à la majorité absolue.",
    },
    {
      question: "Faut-il fermer le parking pendant les travaux de retraçage ?",
      answer:
        "Pas forcément. Un prestataire organisé travaille par zones pour maintenir l'accès à une partie du parking pendant le chantier. Le temps de séchage de la peinture est de 1 à 3 heures par zone. Pour un parking de 200 places, comptez 2 à 3 jours de travaux avec fermeture partielle par rotation.",
    },
    {
      question: "Peut-on faire des retouches localisées au lieu de tout retracer ?",
      answer:
        "Oui, et c'est même recommandé. Les retouches ciblées sur les zones les plus usées (entrées, sorties, places proches des accès) permettent de maintenir la conformité à moindre coût entre deux retraçages complets.",
    },
    {
      question: "À quelle fréquence faut-il inspecter un parking ?",
      answer:
        "Deux inspections complètes par an (mars et septembre) sont le minimum. Les parkings à fort trafic (>500 véhicules/jour) méritent une inspection visuelle rapide mensuelle des zones les plus sollicitées.",
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
        "La norme NF EN 1436 définit les critères de performance. La marque NF est une certification délivrée par un organisme mandaté, qui atteste qu'un produit spécifique respecte ces critères. Un produit peut être conforme NF EN 1436 (il respecte les critères) sans porter la marque NF (il n'a pas été certifié).",
    },
    {
      question: 'Les microbilles de verre sont-elles obligatoires ?',
      answer:
        "Non, mais elles sont indispensables pour atteindre les classes de rétroréflexion R2 et supérieures. Sans microbilles, le marquage n'est pas rétroréfléchissant et donc peu visible de nuit ou en parking couvert. Toute peinture certifiée NF EN 1436 de classe R2 ou supérieure intègre des microbilles.",
    },
  ],
  'accessibilite-parking-erp-normes': [
    {
      question: "Quelles sont les normes d'accessibilité pour les ERP ?",
      answer:
        "Pour un parking d'ERP, l'arrêté du 20 avril 2017 impose au moins 2 % de places PMR (arrondi à l'unité supérieure), des dimensions de 3,30 m × 5 m, un dévers ≤ 2 %, un cheminement accessible jusqu'à l'entrée et une signalisation au sol + verticale. Les sanctions atteignent 45 000 € (225 000 € pour une personne morale).",
    },
    {
      question: "Quelles règles pour un ERP de catégorie 5 ?",
      answer:
        "Les ERP de 5e catégorie (petits commerces, cabinets) restent soumis à l'obligation d'accessibilité : dès lors que le parking est ouvert au public, les places PMR et leur signalisation sont obligatoires, au prorata de la capacité.",
    },
    {
      question: "Mon parking n'a que 5 places, dois-je avoir une place PMR ?",
      answer:
        "Oui. Dès la première place de stationnement accessible au public, une place PMR est obligatoire. La règle des 2% avec arrondi à l'entier supérieur s'applique : 5 places = 1 place PMR minimum.",
    },
    {
      question: "Les places PMR sont-elles obligatoires en parking privé ?",
      answer:
        "Non, si le parking est strictement privé (usage exclusif des résidents d'une copropriété sans ERP). Oui, si le parking dessert un ERP (commerce, bureau recevant du public, cabinet médical).",
    },
    {
      question: "Que faire si la pente de mon parking dépasse 2% ?",
      answer:
        "La pente de la place PMR elle-même doit rester horizontale, au dévers près de 2 %. Si le parking est en pente, la place PMR doit être implantée dans la zone la plus plate. Si aucune zone ne permet de respecter ce dévers, des travaux de nivellement sont nécessaires.",
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
        'Combien de temps dure la préparation ?',
      answer:
        "Pour un parking de 50 places (environ 650 m²) : 2-3 jours de préparation (diagnostic + nettoyage + grenaillage + primaire). L'application de la résine de finition prend 1-2 jours supplémentaires.",
    },
    {
      question: "Faut-il grenailler un sol en béton neuf ?",
      answer:
        "Oui. Le béton neuf présente une couche de laitance en surface qui empêche l'adhérence de la résine. Le grenaillage ou le ponçage est obligatoire, même sur un béton lisse d'apparence propre. Pour les sols neufs, consultez notre guide sur la peinture sol garage qui couvre les primaires adaptés.",
    },
    {
      question: "Quel taux d'humidité faut-il avant une résine époxy ?",
      answer:
        "Le support doit rester sous 4,5 % d'humidité pour une résine époxy, mesuré à la bombe carbure ou à l'hygromètre. Le contrôle est à refaire juste avant l'application, avec un sol entre 10 et 30 °C et 3 °C au-dessus du point de rosée.",
    },
  ],
  'resine-epoxy-ou-peinture-sol-comparatif': [
    {
      question:
        "Quel est le prix d'une peinture époxy sol au m² ?",
      answer:
        "Comptez à partir de 14 euros/m² posé pour une peinture époxy monocomposant et à partir de 35 euros/m² pour une résine époxy bicomposant. Le prix varie selon la surface et l'état du support.",
    },
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
  ],
  'resine-sol-parking-souterrain': [
    {
      question:
        'Peut-on mettre de la résine sur un sol humide ?',
      answer:
        "Pas directement. L'humidité du support doit être inférieure à 4,5% pour l'époxy et 6% pour le polyuréthane. Si le taux est supérieur, un primaire anti-humidité doit être appliqué avant la résine. Ce traitement ajouté 8-15 euros/m² au budget.",
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
    {
      question: "Quelle résine choisir pour un parking souterrain humide ?",
      answer:
        "Mesurez d'abord l'humidité du support à la bombe carbure. Sous 4,5 %, l'époxy est possible ; jusqu'à 6 %, préférez le polyuréthane. Au-delà, appliquez un primaire anti-humidité avant la résine.",
    },
  ],
  'arceau-parking-types-prix': [
    {
      question: "Faut-il une autorisation pour installer un arceau parking ?",
      answer:
        "Sur un parking privé : non, aucune autorisation. Sur la voie publique ou un trottoir : oui, une autorisation d'occupation du domaine public est nécessaire auprès de la mairie.",
    },
    {
      question: "Quelle est la durée de vie d'un arceau de parking ?",
      answer:
        "Un arceau galvanisé à chaud dure 15 à 20 ans en extérieur. Un arceau peint, 5 à 8 ans. Un arceau automatique a une durée de vie mécanique de 10 à 15 ans, sous réserve d'un entretien annuel.",
    },
    {
      question: "Peut-on installer un arceau sur un parking en enrobé ?",
      answer:
        "Oui. Le scellement chimique fonctionne aussi bien sur béton que sur enrobé. La seule contrainte est que l'enrobé soit en bon état (pas de nid de poule ni de fissure au point de scellement).",
    },
    {
      question: "Combien d'arceaux peut-on installer par jour ?",
      answer:
        "Une équipe de deux techniciens pose en moyenne 10 à 20 arceaux par jour, selon le type de sol et le modèle d'arceau.",
    },
    {
      question: "Un arceau peut-il être vandalisé ?",
      answer:
        "Un arceau correctement scellé au sol (scellement chimique + tige filetée inox) résiste à l'arrachement. Les modèles renforcés nécessitent un équipement lourd pour être retirés.",
    },
    {
      question: "Quelle différence entre un arceau parking et un arceau vélo parking ?",
      answer:
        "L'arceau vélo parking (ou arceau range-vélo) sert à attacher les vélos, pas à bloquer les voitures. Sa forme en U inversé est plus étroite (40-60 cm). Ne confondez pas les deux lors de votre commande.",
    },
  ],
  'choisir-entreprise-marquage-au-sol': [
    {
      question: "Faut-il choisir une entreprise locale ou nationale ?",
      answer:
        "Les deux ont des avantages. Une entreprise locale connaît le terrain et intervient rapidement. Une entreprise à envergure nationale peut gérer des projets multi-sites avec une qualité constante. L'idéal est un prestataire ancré localement mais capable d'intervenir sur l'ensemble du territoire, comme c'est le cas de Rénov'Route, basé à Lyon mais présent sur toute la France.",
    },
    {
      question: "Le prix le plus bas est-il toujours le moins cher ?",
      answer:
        "Non. Un marquage à 5 €/m² qui tient 18 mois coûte plus cher sur 5 ans qu'un marquage à 10 €/m² qui tient 4 ans. Raisonnez en coût annuel effectif, pas en prix unitaire.",
    },
    {
      question: "Comment vérifier les références d'un prestataire ?",
      answer:
        "Demandez des noms de clients récents et appelez-les. Vérifiez l'existence de l'entreprise sur le registre du commerce (SIRET). Un prestataire transparent n'a aucune raison de refuser.",
    },
    {
      question: "Quelle garantie exiger d'une entreprise de marquage au sol ?",
      answer:
        "Exigez une garantie écrite d'au moins 2 ans sur les travaux, couvrant l'adhérence, la résistance et la conformité, ainsi qu'une attestation d'assurance RC professionnelle. La garantie décennale ne concerne, le cas échéant, que les ouvrages structurels comme la résine de sol.",
    },
  ],
  'code-de-la-route-marquage-au-sol': [
    {
      question: "Quelle est la différence entre une ligne continue et une ligne discontinue ?",
      answer:
        "La ligne continue interdit tout franchissement et tout chevauchement. Elle empêche le dépassement lorsqu'elle est en axe de chaussée. La ligne discontinue autorise le franchissement et le dépassement, à condition que la manoeuvre puisse se faire en sécurité. La distinction est fondamentale dans le code de la route marquage au sol.",
    },
    {
      question: "Que signifie un marquage jaune au sol ?",
      answer:
        "Le marquage jaune au sol a plusieurs significations : une ligne jaune continue le long du trottoir interdit l'arrêt et le stationnement, une ligne jaune discontinue interdit le stationnement, un zigzag jaune signale un arrêt de bus, et un marquage jaune temporaire en zone de travaux prévaut sur le marquage blanc permanent.",
    },
    {
      question: "Combien de temps dure un marquage au sol ?",
      answer:
        "La durée de vie varie de six mois (peinture routière basique) à huit ans (bande préformée thermocollée). Elle dépend du produit utilisé, du volume de trafic, des conditions climatiques et de la qualité du support. Un audit annuel de rétroréflexion permet de suivre l'état réel du marquage.",
    },
    {
      question: "Un gestionnaire est-il responsable si le marquage est effacé ?",
      answer:
        "Oui. La jurisprudence est constante : le gestionnaire de voirie est responsable de l'entretien normal de la chaussée, marquage inclus. Un marquage effacé ou non conforme constitue un défaut d'entretien qui engage la responsabilité du gestionnaire en cas d'accident.",
    },
    {
      question: "Quelles sont les normes qui encadrent le marquage routier en France ?",
      answer:
        "Le marquage routier est encadré par la norme européenne NF EN 1436, qui définit les performances minimales des produits (rétroréflexion, luminance, glissance), et par l'IISR (Instruction Interministérielle sur la Signalisation Routière), qui fixe les règles d'utilisation et de mise en oeuvre.",
    },
    {
      question: "Quelle est la largeur réglementaire d'un passage piéton ?",
      answer:
        "Un passage piéton à bandes doit avoir une largeur minimale de 2,50 mètres. En pratique, la largeur standard est de 4 à 6 mètres. Les bandes qui le composent mesurent 50 cm de large avec un espacement de 50 cm entre elles.",
    },
  ],
  'dimension-place-de-parking-normes': [
    {
      question: "Quelle est la dimension standard d'une place de parking ?",
      answer:
        "La dimension place de parking standard en France est de 2,50 m de large sur 5,00 m de long pour un stationnement perpendiculaire. C'est la référence courante pour les parkings neufs, soit une surface de 12,5 m² par place.",
    },
    {
      question: "Quelle est la largeur minimale d'une place de parking ?",
      answer:
        "La largeur place de parking dépend de la configuration. Les cotes courantes sont de 2,50 m en perpendiculaire, 2,40 m en épi 60 degrés, 2,20 m en épi 45 degrés et 2,00 m en longitudinal. Le minimum exact dépend de la norme applicable et du PLU.",
    },
    {
      question: "Quelle est la dimension d'une place de parking PMR ?",
      answer:
        "Une place PMR doit mesurer au minimum 3,30 m de large (dont 0,80 m de bande de circulation latérale) sur 5,00 m de long. La pente ne doit pas excéder 2 %.",
    },
    {
      question: "Combien de places PMR sont obligatoires ?",
      answer:
        "Le nombre de places PMR obligatoires représente 2 % du nombre total de places, avec un minimum d'une place. Pour un parking de 100 places, il faut au moins 2 places PMR.",
    },
    {
      question: "Quelle est la largeur minimale d'une voie de circulation de parking ?",
      answer:
        "La voie de circulation doit mesurer au minimum 5,00 m pour un stationnement perpendiculaire en sens unique, 3,50 m pour un épi 45 degrés et 5,50 à 6,00 m en double sens.",
    },
    {
      question: "Peut-on réduire les dimensions des places de parking ?",
      answer:
        "Il est déconseillé de descendre en dessous des minimums applicables (NF P 91-100 ou NF P 91-120, et PLU). Pour un parking existant, des places trop étroites génèrent des problèmes concrets (accrochages, plaintes, sous-utilisation).",
    },
  ],

  'entretien-parking-signes-renovation': [
    {
      question: "Quels sont les signes qu'un parking doit être rénové ?",
      answer:
        "Sept signes doivent alerter : marquages effacés, nids de poule, fissures, panneaux endommagés, équipements de sécurité dégradés, eau qui stagne après la pluie et absence d'intervention depuis plus de 5 ans. À partir de 2 signes présents, il est temps d'agir.",
    },
    {
      question: "Combien coûte le retraçage d'un parking de 50 places ?",
      answer:
        "Un retraçage complet avec des peintures certifiées NF EN 1436 revient généralement entre 1 500 et 3 000 € HT pour un parking de 50 places, soit 8 à 15 €/m² selon la surface et le type de peinture.",
    },
    {
      question: "Un nid de poule sur un parking est-il urgent à réparer ?",
      answer:
        "Oui, son niveau d'urgence est élevé. L'eau s'infiltre, gèle et élargit le trou à chaque cycle, et le gestionnaire peut être tenu responsable des dommages aux véhicules. Une réparation par résine polyuréthane coûte 80 à 200 € par nid de poule.",
    },
    {
      question: "À quelle fréquence faut-il inspecter un parking ?",
      answer:
        "Une inspection chaque trimestre permet de contrôler les marquages, la chaussée, la signalisation verticale et les équipements. Elle repère les dégradations tant qu'elles restent simples et peu coûteuses à traiter.",
    },
  ],

  'logo-parking-pictogrammes': [
    {
      question: "Quel est le pictogramme obligatoire dans un parking ?",
      answer:
        "Le seul pictogramme légalement obligatoire est le pictogramme PMR parking (personne en fauteuil roulant) sur les places réservées aux personnes à mobilité réduite. Au moins 2 % des places, avec un minimum d'une, doivent être équipées de ce marquage. Les autres pictogrammes (P, vélo, électrique) sont fortement recommandés mais pas imposés par la loi.",
    },
    {
      question: "Quelles sont les dimensions réglementaires du pictogramme PMR ?",
      answer:
        "Le pictogramme PMR parking mesure couramment au moins 0,50 m x 0,60 m. Pour une visibilité optimale, une dimension de 1,00 m x 1,20 m est recommandée. Il est généralement blanc sur fond bleu et placé au centre ou à l'avant de la place, visible depuis l'allée de circulation.",
    },
    {
      question: "Combien coûte le marquage d'un logo parking au sol ?",
      answer:
        "Le prix varie selon la technique et la complexité. Un pictogramme standard en peinture coûte entre 30 EUR et 80 EUR. En thermocollage, comptez entre 60 EUR et 150 EUR. Un logo d'entreprise sur mesure se situe entre 100 EUR et 300 EUR. Ces prix sont indicatifs et varient selon l'état du sol, l'accessibilité et le volume de travaux.",
    },
    {
      question: "Quelle est la durée de vie d'un pictogramme au sol ?",
      answer:
        "La durée de vie dépend de la technique utilisée et du trafic. La peinture dure 1 à 3 ans. Le thermocollage résiste 5 à 8 ans, voire davantage sur un sol peu sollicité. La résine à froid offre une durée de vie intermédiaire de 3 à 5 ans.",
    },
    {
      question: "Peut-on personnaliser les logos au sol dans un parking ?",
      answer:
        "Oui, la personnalisation est possible et de plus en plus courante. Logo d'entreprise, numérotation des places, couleurs spécifiques par zone, pictogrammes sur mesure : tout est réalisable grâce à la technique du pochoir. La seule contrainte est de respecter les pictogrammes réglementaires (PMR, interdiction) qui ne peuvent pas être modifiés.",
    },
    {
      question: "Qui peut réaliser le marquage des pictogrammes parking ?",
      answer:
        "Le marquage de logos parking doit être réalisé par un professionnel équipé du matériel adapté (traceur, pochoirs normalisés, produits conformes NF EN 1436). Un marquage amateur risque de ne pas respecter les dimensions, les couleurs ou la rétroréflexion imposées par la norme. Renov'Route intervient sur toute la région Rhône-Alpes avec une garantie de 2 ans sur ses marquages.",
    },
  ],

  'marquage-au-sol-entreprise-industriel': [
    {
      question: "Le marquage au sol est-il obligatoire pour toutes les entreprises ?",
      answer:
        "Oui en pratique, dès lors que des véhicules (chariots élévateurs, transpalettes, véhicules de service) circulent dans vos locaux ou sur votre site. L'article R4224-3 du Code du travail impose une circulation sûre et l'article R4224-20 la signalisation visible des zones de danger. Le marquage au sol est le moyen le plus courant d'y répondre.",
    },
    {
      question: "Combien coûte le marquage au sol d'une entreprise ?",
      answer:
        "Le prix varie de 3 000 EUR pour un atelier de 500 m2 à plus de 50 000 EUR pour un site industriel de 10 000 m2 avec résine intégrale. Le coût moyen du marquage linéaire en peinture époxy se situe entre 8 et 15 EUR par mètre linéaire. Demandez un devis gratuit pour obtenir un chiffrage précis adapté à votre site.",
    },
    {
      question: "Quelle est la durée de vie du marquage au sol industriel ?",
      answer:
        "En résine époxy avec une préparation de sol correcte, le marquage dure 5 à 10 ans en intérieur. En extérieur, comptez 2 à 5 ans selon l'exposition aux UV et au trafic. L'adhésif de marquage a une durée de vie plus courte : 1 à 3 ans.",
    },
    {
      question: "Peut-on réaliser le marquage au sol soi-même ?",
      answer:
        "Techniquement, oui. Mais un marquage insuffisant au regard du Code du travail engage votre responsabilité. La préparation du sol (grenaillage, primaire) nécessite un équipement professionnel. Sans ces étapes, le marquage s'écaille en quelques mois.",
    },
    {
      question: "Combien de temps dure l'intervention ?",
      answer:
        "Pour un marquage au sol entreprise de taille moyenne (entrepôt de 2 000 à 3 000 m2), comptez 3 à 5 jours ouvres incluant la préparation du sol, le marquage et le temps de séchage. Renov'Route organise les interventions par zones pour limiter l'interruption d'activité.",
    },
  ],

  'marquage-au-sol-parking-prive': [
    {
      question: "Le marquage au sol est-il obligatoire sur un parking privé ?",
      answer:
        "Le marquage des places standard n'est pas juridiquement obligatoire sur un parking strictement privé (copropriété fermée). En revanche, les places PMR sont obligatoires des que le parking dessert un ERP. Et dans tous les cas, le propriétaire engage sa responsabilité civile en cas d'accident lié à un défaut de signalisation.",
    },
    {
      question: "Qui est responsable du marquage sur un parking de copropriété ?",
      answer:
        "Le syndicat des copropriétaires, représenté par le syndic, répond de l'entretien des parties communes, parking inclus. Le marquage relève donc du budget d'entretien voté en assemblée générale. En cas de sinistre, c'est la copropriété qui est mise en cause.",
    },
    {
      question: "Combien coûte le marquage d'un parking privé de 50 places ?",
      answer:
        "Le budget varie de 1 800 à 3 740 EUR HT pour un parking extérieur de 50 places avec places PMR, signalisation et accessoires de base. Le prix dépend du type de peinture, de l'état du support et des accessoires choisis.",
    },
    {
      question: "À quelle fréquence faut-il retracer un parking privé ?",
      answer:
        "La fréquence dépend du trafic et du produit utilisé. Comptez 12 à 18 mois pour une peinture acrylique standard, 18 à 24 mois pour une peinture alkyde, et 3 à 5 ans pour une résine thermoplastique. Un contrôle visuel semestriel permet d'anticiper les retraçages.",
    },
    {
      question: "Peut-on tracer un parking privé soi-même ?",
      answer:
        "Techniquement oui, mais le résultat sera rarement conforme aux normes NF EN 1436. Le traçage professionnel garantit des lignes droites, des dimensions réglementaires, des produits certifiés et une durée de vie optimale. Le surcoût d'une prestation professionnelle est amorti par la durabilité du marquage.",
    },
  ],

  'marquage-au-sol-piste-cyclable': [
    {
      question: "Quelle est la différence entre une piste cyclable et une bande cyclable ?",
      answer:
        "La piste cyclable est séparée physiquement de la chaussée (bordure, dénivelé, séparateur). La bande cyclable est délimitée par un simple marquage au sol sur la chaussée. La piste offre un niveau de sécurité supérieur mais nécessite plus d'emprise foncière.",
    },
    {
      question: "Le revêtement vert est-il obligatoire sur les pistes cyclables ?",
      answer:
        "Non, le revêtement vert n'est pas une obligation réglementaire. Le CEREMA le recommandé fortement, en particulier aux points de conflit (intersections, traversées). Dans la pratique, la majorité des nouvelles pistes cyclables en milieu urbain intègrent un revêtement vert.",
    },
    {
      question: "Quelle est la largeur minimale d'une piste cyclable ?",
      answer:
        "Le CEREMA recommande 2 mètres pour une piste unidirectionnelle et 3 mètres pour une piste bidirectionnelle. En dessous de ces seuils, l'aménagement perd en confort et en sécurité, notamment pour le dépassement entre cyclistes.",
    },
    {
      question: "Combien coûte le marquage d'une piste cyclable au m2 ?",
      answer:
        "Entre 2 et 50 EUR/m2 selon le matériau. La peinture démarre à 2 EUR/m2, la résine à froid entre 15 et 35 EUR/m2, le thermocollage entre 25 et 50 EUR/m2. Le coût annualisé (prix divisé par la durée de vie) est souvent plus pertinent pour comparer.",
    },
    {
      question: "Qui est responsable de l'entretien du marquage cyclable ?",
      answer:
        "Le gestionnaire de voirie : la commune, l'intercommunalité ou le département selon le classement de la voie. Pour les aménagements cyclables en domaine privé (campus, zones commerciales), le propriétaire est responsable.",
    },
    {
      question: "À quelle fréquence faut-il renouveler le marquage ?",
      answer:
        "Cela dépend du matériau : tous les 12 à 18 mois pour la peinture, 3 à 5 ans pour la résine, 5 à 8 ans pour le thermocollage. Un contrôle annuel de rétroréflexion permet de déclencher le renouvellement au bon moment.",
    },
  ],

  'marquage-au-sol-signification-couleurs': [
    {
      question: "Quelle est la signification d'un marquage au sol jaune ?",
      answer:
        "Le marquage au sol jaune signifie soit une interdiction de stationnement (bande jaune le long du trottoir, zigzag d'arrêt de bus), soit un marquage temporaire lié à des travaux. Dans les deux cas, il signale une situation à laquelle vous devez porter une attention particulière.",
    },
    {
      question: "Que signifie un marquage au sol bleu ?",
      answer:
        "Le marquage au sol bleu désigne une zone de stationnement à durée limitée (zone bleue) où vous devez apposer un disque de stationnement. Il peut aussi identifier les places réservées aux personnes à mobilité réduite.",
    },
    {
      question: "Quelles sont les couleurs officielles du marquage au sol en France ?",
      answer:
        "Les couleurs officielles sont le blanc (marquage permanent standard), le jaune (interdictions et temporaire), le bleu (stationnement réglementé), le vert (aménagements cyclables) et l'orange (marquage de chantier temporaire). En parking privé, des couleurs supplémentaires peuvent être utilisées.",
    },
    {
      question: "Un marquage au sol a-t-il une valeur réglementaire ?",
      answer:
        "Oui. Le marquage au sol a une valeur réglementaire définie par l'IISR (Instruction Interministérielle sur la Signalisation Routière). Son non-respect est sanctionné par le Code de la route. En cas de contradiction entre un panneau et un marquage, c'est généralement le panneau qui prévaut, sauf pour le marquage temporaire qui prime sur le marquage permanent.",
    },
    {
      question: "Qui est responsable de l'entretien du marquage au sol ?",
      answer:
        "Sur la voie publique, c'est la collectivité territoriale (commune, département, État). Sur un parking privé, c'est le propriétaire ou le gestionnaire du parking. Dans les deux cas, un marquage effacé ou non conforme peut engager la responsabilité en cas d'accident.",
    },
    {
      question: "Comment améliorer la visibilité d'un marquage sur sol clair ?",
      answer:
        "Sur béton brut ou dallage gris clair, un marquage blanc perd l'essentiel de son contraste. Deux solutions : appliquer un fond de couleur sombre sous le marquage, ou passer à une résine à fort pouvoir couvrant. Un bon contraste avec le support est essentiel, notamment pour les personnes malvoyantes.",
    },
  ],

  'marquage-au-sol-travaux-chantier': [
    {
      question: "Quelle est la signification du marquage au sol jaune en zone de travaux ?",
      answer:
        "La signification marquage au sol travaux en jaune ou orange est claire : il s'agit d'un marquage temporaire qui modifie les règles habituelles de circulation. Il prévaut sur le marquage blanc permanent et doit être suivi par les usagers tant que les travaux sont en cours.",
    },
    {
      question: "Quel est le code couleur du marquage au sol en zone de chantier ?",
      answer:
        "Le code couleur marquage au sol travaux utilise le jaune ou l'orange pour le marquage temporaire, par opposition au blanc du marquage permanent. Cette distinction visuelle permet aux usagers d'identifier immédiatement les zones où la circulation est modifiée.",
    },
    {
      question: "Le marquage temporaire prime-t-il sur le marquage permanent ?",
      answer:
        "Oui, c'est un principe fondamental de la signalisation routière. Le marquage jaune travaux prime toujours sur le marquage blanc permanent. En cas de contradiction entre les deux, l'usager doit suivre le marquage jaune. Cette règle est inscrite dans l'IISR, 8e partie.",
    },
    {
      question: "Qui est responsable du marquage au sol pendant des travaux ?",
      answer:
        "Le maître d'ouvrage du chantier est responsable de la mise en place, du maintien et du retrait du marquage temporaire. Il doit établir un plan de signalisation temporaire validé par le gestionnaire de voirie et s'assurer de sa conformité pendant toute la durée des travaux.",
    },
    {
      question: "Combien coûte un marquage temporaire de chantier ?",
      answer:
        "Le prix varie de 2 à 12 EUR par mètre linéaire selon le matériau (peinture à l'eau, bande adhésive, enduit à chaud). Pour un parking standard, comptez entre 1 500 et 4 000 EUR pour un marquage temporaire complet incluant le balisage et la réorganisation de la circulation.",
    },
    {
      question: "Quand doit-on effacer le marquage temporaire ?",
      answer:
        "Le marquage temporaire doit être retiré dès la fin des travaux. Un marquage jaune qui persiste après la fin du chantier crée une confusion dangereuse. Le retrait est suivi, si nécessaire, d'un re-marquage permanent.",
    },
  ],
  'panneaux-parking-types-reglementation': [
    {
      question: "Quels panneaux sont obligatoires dans un parking privé ?",
      answer:
        "Si votre parking est ouvert au public (centre commercial, hôpital, entreprise recevant des visiteurs), les panneaux obligatoires incluent : la limitation de vitesse, la signalisation PMR, le sens de circulation et les issues de secours. Pour un parking strictement privé (copropriété fermée), aucune liste générale ne s'applique, mais une signalisation claire limite le risque en cas d'accident.",
    },
    {
      question: "Combien coûte l'installation complète de panneaux pour un parking ?",
      answer:
        "Le budget dépend de la taille du parking et du nombre de panneaux nécessaires. Pour un parking de 50 places, comptez entre 2 000 et 5 000 EUR pour une signalisation complète (panneaux + pose). Renov'Route propose un devis gratuit détaille en 48h.",
    },
    {
      question: "Quelle est la durée de vie d'un panneau parking en aluminium ?",
      answer:
        "Un panneau parking en aluminium avec film rétroréfléchissant de classe 1 dure entre 10 et 15 ans en extérieur. Le film rétroréfléchissant se dégrade avant le support : il est possible de le remplacer sans changer le panneau complet.",
    },
    {
      question: "Peut-on installer des panneaux parking soi-même ?",
      answer:
        "Techniquement oui, mais c'est déconseillé. Une pose non conforme (mauvaise hauteur, mauvais emplacement, scellement insuffisant) réduit l'efficacité du panneau et peut être contestée. Un panneau qui tombe représente un risque de blessure et engage votre responsabilité. Faites appel à un professionnel de la signalisation verticale.",
    },
    {
      question: "Le panneau \\\"parking privé\\\" a-t-il une valeur juridique ?",
      answer:
        "Oui, à condition qu'il soit visible et placé à l'entrée du parking. Il fonde le droit du propriétaire à faire constater le stationnement abusif et, le cas échéant, à demander la mise en fourrière du véhicule. Il est recommandé d'y ajouter la mention \"Mise en fourrière aux frais du contrevenant\" pour renforcer l'effet dissuasif.",
    },
  ],
  'parking-visiteurs-amenagement': [
    {
      question: "Un copropriétaire peut-il se garer sur une place visiteur ?",
      answer:
        "Non. Les places visiteurs en copropriété font partie des parties communes. Aucun copropriétaire ne peut se les approprier. Le syndic peut faire constater l'occupation abusive par huissier et demander la libération de la place.",
    },
    {
      question: "Combien de places visiteurs sont obligatoires dans un parking d'entreprise ?",
      answer:
        "Il n'existe pas de règle nationale fixant un nombre précis pour les entreprises privées. Le PLU de votre commune et le permis de construire de votre bâtiment peuvent imposer un ratio. En l'absence d'obligation, prévoyez 10% du nombre total de places.",
    },
    {
      question: "Quelle est la durée de vie du marquage au sol \"VISITEUR\" ?",
      answer:
        "En peinture routière acrylique sur un parking extérieur : 2 à 3 ans. En résine époxy en parking couvert : 5 à 8 ans. La fréquentation et l'exposition aux intempéries influencent directement la durée de vie.",
    },
    {
      question: "Faut-il un permis pour installer un panneau parking visiteurs ?",
      answer:
        "Sur un parking privé, aucune autorisation administrative n'est nécessaire pour la signalisation interne. En revanche, si le panneau est visible depuis la voie publique ou s'il modifie la circulation aux abords, une déclaration peut être requise auprès de la mairie.",
    },
    {
      question: "Peut-on verbaliser sur un parking visiteurs privé ?",
      answer:
        "Non. Seules les forces de l'ordre peuvent verbaliser sur la voie publique. Sur un parking privé, le propriétaire peut faire poser des arceaux, installer des barrières ou engager une procédure civile pour occupation abusive, mais il ne peut pas dresser de contravention.",
    },
  ],
  'place-bleu-parking-zone-bleue': [
    {
      question: "Le disque de stationnement est-il obligatoire sur une place bleue ?",
      answer:
        "Oui. En zone bleue réglementée par arrêté municipal, le disque de stationnement au format européen est obligatoire. Son absence expose à une amende de 35 euros. Sur un parking privé utilisant le code couleur bleu, le disque est recommandé mais ne peut pas faire l'objet d'une verbalisation au titre du Code de la route.",
    },
    {
      question: "Combien de temps peut-on rester sur une place bleue ?",
      answer:
        "La durée maximale est fixée par l'arrêté municipal. Elle varie généralement entre 30 minutes et 2 heures. La durée la plus courante est 1 heure 30. Au-delà, le véhicule est en infraction.",
    },
    {
      question: "Les places bleues sont-elles gratuites ?",
      answer:
        "Oui. Le stationnement en zone bleue est toujours gratuit. C'est sa différence principale avec le stationnement payant à horodateur. Le seul coût pour l'automobiliste est l'achat du disque de stationnement (en vente notamment dans les bureaux de tabac et stations-service).",
    },
    {
      question: "Une zone bleue fonctionne-t-elle le dimanche ?",
      answer:
        "Cela dépend de l'arrêté municipal. Beaucoup de zones bleues sont actives du lundi au samedi, avec des horaires calqués sur l'activité commerciale. Certaines communes incluent le dimanche matin pour les jours de marché. Hors des horaires d'application, le stationnement est libre et sans limitation de durée.",
    },
    {
      question: "Peut-on contester un PV en zone bleue si le marquage est effacé ?",
      answer:
        "Oui. Un marquage au sol illisible ou des panneaux manquants constituent un défaut de signalisation. Ce motif est recevable dans le cadre d'une contestation. La collectivité a l'obligation d'entretenir la signalisation pour que la zone bleue reste opposable.",
    },
    {
      question: "Quelle est la différence entre une place bleue et une place PMR ?",
      answer:
        "La place bleue est une place à durée limitée ouverte à tous les véhicules. La place PMR est réservée aux personnes handicapées titulaires d'une carte mobilité inclusion (CMI). Le marquage PMR utilise des bandes blanches et un pictogramme bleu, tandis que la place bleue utilise des bandes bleues. Ce sont deux dispositifs distincts.",
    },
  ],
  'rampe-pour-pmr-normes-types': [
    {
      question: "Quelle pente maximale pour une rampe PMR ?",
      answer:
        "5 % maximum, avec une tolérance à 8 % sur 2 m de long et à 10 % sur 0,50 m de long, pour un ERP neuf.",
    },
    {
      question: "Une rampe amovible est-elle suffisante ?",
      answer:
        "Uniquement pour les ERP de 5e catégorie (petits commerces) et seulement si l'installation d'une rampe fixe est techniquement impossible. Un bouton d'appel doit être installé pour prévenir le personnel.",
    },
    {
      question: "Faut-il un permis de construire pour installer une rampe PMR ?",
      answer:
        "Non, une déclaration préalable de travaux suffit dans la plupart des cas. Si la rampe modifie l'aspect extérieur d'un bâtiment classe ou en zone protégée, un permis peut être nécessaire.",
    },
    {
      question: "Quelle est la largeur minimale d'une rampe PMR ?",
      answer:
        "1,40 m libre de tout obstacle pour un cheminement extérieur d'ERP neuf, avec un rétrécissement ponctuel possible à 1,20 m.",
    },
    {
      question: "Rampe handicapé ou rampe PMR : quelle différence ?",
      answer:
        "Aucune. \"Rampe handicapé\" est le terme courant dans le langage quotidien, tandis que \"rampe PMR\" est le terme réglementaire. Les normes et exigences sont strictement identiques.",
    },
    {
      question: "Qui est responsable en cas de non-conformité dans un parking privé ?",
      answer:
        "Le propriétaire ou le gestionnaire du parking. En copropriété, c'est le syndicat des copropriétaires.",
    },
  ],
  'renovation-parking-copropriete': [
    {
      question: "Quelle majorité pour refaire le marquage d'un parking de copropriété ?",
      answer:
        "Une reprise courante du marquage au sol se vote à la majorité simple de l'article 24 de la loi du 10 juillet 1965. Des travaux d'amélioration relèvent de l'article 25 et une transformation importante du parking de la double majorité de l'article 26.",
    },
    {
      question: "Quelle majorité pour la mise aux normes PMR d'un parking de copropriété ?",
      answer:
        "Les travaux d'accessibilité aux personnes handicapées ou à mobilité réduite se votent à la majorité de l'article 24 de la loi du 10 juillet 1965, à condition de ne toucher ni à la structure de l'immeuble ni à ses équipements essentiels.",
    },
    {
      question: "Combien coûte la rénovation d'un parking de copropriété ?",
      answer:
        "Pour un parking de 20 à 50 places, comptez entre 5 000 € et 25 000 € selon les prestations retenues. Le retraçage seul du marquage représente généralement 3 à 8 € par mètre linéaire ; les réparations de sol et la mise aux normes PMR pèsent souvent le plus.",
    },
    {
      question: "Quels travaux comprend la rénovation d'un parking de copropriété ?",
      answer:
        "Les travaux courants sont la réparation des nids de poule et fissures, le retraçage du marquage au sol, la signalisation verticale, la mise en conformité des places PMR et la pose d'accessoires comme les butées de roues, potelets et miroirs.",
    },
  ],
  'signalisation-horizontale-et-verticale': [
    {
      question: "Qu'est-ce que la signalisation horizontale ?",
      answer:
        "La signalisation horizontale regroupe tous les marquages appliqués au sol — lignes, flèches, pictogrammes, places et passages piétons — qui guident et réglementent la circulation. Conforme à la norme NF EN 1436, elle complète la signalisation verticale (panneaux) sans jamais la remplacer.",
    },
    {
      question: "Quels sont les 4 types de signalisation routière ?",
      answer:
        "On distingue quatre familles : 1) la signalisation horizontale (marquage au sol) ; 2) la signalisation verticale (panneaux) ; 3) la signalisation lumineuse (feux tricolores) ; 4) la signalisation temporaire de chantier. Sur un parking, les deux premières sont les plus fréquentes.",
    },
    {
      question: "Quelle est la différence entre signalisation horizontale et verticale ?",
      answer:
        "La signalisation horizontale désigne les marquages au sol (lignes, flèches, pictogrammes, passages piétons). La signalisation verticale désigne les dispositifs en hauteur (panneaux, feux, bornes, portiques). Les deux sont complémentaires et ne se substituent pas.",
    },
    {
      question: "Quelle signalisation prime en cas de contradiction ?",
      answer:
        "En pratique, on retient que la signalisation verticale (panneaux) prime sur la signalisation horizontale (marquage au sol). Toute contradiction doit être corrigée immédiatement.",
    },
    {
      question: "Quelles normes s'appliquent à la signalisation horizontale et verticale ?",
      answer:
        "La norme NF EN 1436 encadre les produits de marquage routier (signalisation horizontale). La norme NF EN 12899-1 encadre les panneaux (signalisation verticale). L'IISR définit les règles d'implantation pour les deux.",
    },
    {
      question: "Suis-je obligé d'installer les deux types de signalisation sur mon parking privé ?",
      answer:
        "Il n'existe pas d'obligation générale de signalisation pour un parking privé fermé. En revanche, si votre parking est ouvert au public (commerce, ERP), les places PMR doivent combiner marquage au sol et panneau. Au-delà de l'obligation légale, une signalisation complète réduit les risques d'accident et de litige.",
    },
    {
      question: "Combien coûte la mise en conformité d'un parking de 50 places ?",
      answer:
        "Comptez entre 2 000 et 5 000 EUR HT pour le marquage au sol et entre 800 et 2 500 EUR HT pour la signalisation verticale. Le coût exact dépend de l'état du sol, du nombre de panneaux et de la complexité du plan de circulation.",
    },
    {
      question: "À quelle fréquence faut-il renouveler la signalisation ?",
      answer:
        "Le marquage au sol (signalisation horizontale) doit être retracé tous les 1 à 3 ans selon le matériau et le trafic. La signalisation verticale (panneaux) dure 7 à 15 ans. Prévoyez un audit annuel pour vérifier l'état des deux.",
    },
  ],
}

export default FAQ_DATA
