import type { FAQItem } from '@/components/FAQSchema'

const FAQ_DATA: Record<string, FAQItem[]> = {
  'prix-marquage-sol-parking': [
    {
      question: 'Quel est le prix moyen pour tracer un parking de 30 places ?',
      answer:
        "Pour un parking de 30 places avec retra\u00e7age des lignes, fl\u00e8ches et passages pi\u00e9tons, comptez entre 1 800 \u20ac et 4 500 \u20ac HT selon le type de peinture et l'\u00e9tat du sol. Un devis personnalis\u00e9 permet d'affiner cette estimation.",
    },
    {
      question:
        'Le marquage au sol est-il d\u00e9ductible des charges de copropri\u00e9t\u00e9 ?',
      answer:
        "Oui, le retra\u00e7age de parking fait partie des charges d'entretien courant de la copropri\u00e9t\u00e9. Il est vot\u00e9 en AG \u00e0 la majorit\u00e9 simple (article 24) s'il s'agit d'un simple retra\u00e7age, ou \u00e0 la majorit\u00e9 absolue (article 25) pour une refonte compl\u00e8te.",
    },
    {
      question:
        'Quelle est la meilleure p\u00e9riode pour faire tracer son parking ?',
      answer:
        "Le printemps (mars \u00e0 juin) et l'automne (septembre \u00e0 novembre) offrent les meilleures conditions. La peinture n\u00e9cessite un sol sec et une temp\u00e9rature sup\u00e9rieure \u00e0 5\u00b0C. L'\u00e9t\u00e9 est aussi favorable, mais les plannings sont plus charg\u00e9s.",
    },
    {
      question: 'Combien de temps dure un chantier de tra\u00e7age ?',
      answer:
        "Pour un parking de 50 places, comptez 1 \u00e0 2 jours de travaux. Le parking peut \u00eatre partiellement utilis\u00e9 pendant le chantier : nous travaillons par zones avec un s\u00e9chage de 1 \u00e0 3 heures par zone.",
    },
    {
      question: "La TVA s'applique-t-elle au taux r\u00e9duit ?",
      answer:
        "Non, le marquage au sol de parking rel\u00e8ve du taux de TVA normal (20%). Le taux r\u00e9duit de 10% ne s'applique qu'aux travaux d'am\u00e9lioration des logements de plus de 2 ans, pas aux parkings.",
    },
  ],
  'normes-pmr-parking': [
    {
      question: 'Une copropri\u00e9t\u00e9 doit-elle avoir des places PMR ?',
      answer:
        "Si le parking est li\u00e9 \u00e0 un ERP (commerce en pied d'immeuble, par exemple), oui. Pour un parking strictement r\u00e9sidentiel, les r\u00e8gles d\u00e9pendent de la date de construction : les immeubles neufs (apr\u00e8s 2007) doivent pr\u00e9voir des places adaptables. Pour les immeubles anciens, aucune obligation r\u00e9troactive sauf en cas de travaux importants.",
    },
    {
      question:
        'Peut-on verbaliser sur une place PMR dans un parking priv\u00e9 ?',
      answer:
        "Oui. Depuis la loi du 18 mars 2015, le stationnement abusif sur une place PMR est passible d'une amende de 135 \u20ac (4e classe), y compris dans les parkings priv\u00e9s ouverts \u00e0 la circulation publique (centres commerciaux, supermarch\u00e9s, h\u00f4pitaux).",
    },
    {
      question:
        "Quelle est la diff\u00e9rence entre une place PMR et une place \u00ab adapt\u00e9e \u00bb ?",
      answer:
        "Une place PMR respecte toutes les normes de dimensions, de marquage et de signalisation. Une place \u00ab adapt\u00e9e \u00bb peut avoir des dimensions correctes mais manquer de signalisation ou de cheminement accessible. Seule la place PMR compl\u00e8te est conforme.",
    },
    {
      question:
        'Faut-il refaire les places PMR lors d\u2019un retra\u00e7age de parking ?',
      answer:
        "Oui, c'est l'occasion id\u00e9ale. Lors d'un retra\u00e7age complet de parking, nous v\u00e9rifions syst\u00e9matiquement la conformit\u00e9 PMR et corrigeons les anomalies. C'est le moment le plus \u00e9conomique pour mettre \u00e0 jour vos places PMR.",
    },
    {
      question: 'Les dimensions PMR changent-elles en 2026 ?',
      answer:
        "Les dimensions r\u00e9glementaires (3,30 m x 5,00 m) n'ont pas chang\u00e9 depuis l'arr\u00eat\u00e9 du 20 avril 2017. Aucune modification n'est pr\u00e9vue en 2026. Ce qui \u00e9volue, c'est le niveau d'exigence des contr\u00f4les : les commissions d'accessibilit\u00e9 sont de plus en plus rigoureuses.",
    },
  ],
  'nid-de-poule-responsabilite-parking': [
    {
      question:
        'Un client peut-il me poursuivre en justice pour un nid de poule ?',
      answer:
        "Oui. Si votre assurance refuse d'indemniser ou si le montant des dommages est contest\u00e9, le client peut saisir le tribunal judiciaire (au-del\u00e0 de 10 000 \u20ac) ou le tribunal de proximit\u00e9 (en dessous de 10 000 \u20ac). En pratique, la plupart des litiges se r\u00e8glent \u00e0 l'amiable via les assurances.",
    },
    {
      question:
        'Mon assurance couvre-t-elle les dommages caus\u00e9s par un nid de poule ?',
      answer:
        "Oui, si vous disposez d'une assurance responsabilit\u00e9 civile professionnelle (pour les entreprises) ou d'une multirisque immeuble (pour les copropri\u00e9t\u00e9s). V\u00e9rifiez que votre contrat couvre bien les \u00ab dommages caus\u00e9s par un d\u00e9faut d'entretien des parties communes \u00bb ou des \u00ab espaces ext\u00e9rieurs \u00bb.",
    },
    {
      question:
        'Peut-on refuser de payer si le client roulait trop vite ?',
      answer:
        "Partiellement. Si le client a contribu\u00e9 \u00e0 son propre dommage (vitesse excessive, inattention manifeste), votre responsabilit\u00e9 peut \u00eatre r\u00e9duite proportionnellement. C'est le principe du partage de responsabilit\u00e9. Mais le d\u00e9faut d'entretien du parking reste un fait objectif que vous ne pouvez pas contester.",
    },
    {
      question:
        'Combien co\u00fbte la r\u00e9paration d\u2019un nid de poule ?',
      answer:
        "Le co\u00fbt d\u00e9pend de la m\u00e9thode et de la taille du nid de poule. Comptez 20 \u00e0 40 \u20ac HT pour un rebouchage \u00e0 l'enrob\u00e9 \u00e0 froid (temporaire, 3-6 mois) et 80 \u00e0 200 \u20ac HT pour une r\u00e9paration \u00e0 la r\u00e9sine polyur\u00e9thane (durable, 5-10 ans).",
    },
    {
      question:
        'La commune peut-elle \u00eatre responsable d\u2019un nid de poule dans mon parking ?',
      answer:
        "Non. Si le parking est priv\u00e9, la commune n'a aucune obligation d'entretien. La responsabilit\u00e9 de la commune ne s'applique qu'aux voies publiques (routes communales, trottoirs, parkings publics). Pour un parking priv\u00e9, c'est le propri\u00e9taire ou le gestionnaire qui assume l'entretien.",
    },
  ],
  'enrobe-froid-vs-resine-nids-de-poule': [
    {
      question:
        "Peut-on appliquer de la r\u00e9sine sur un ancien rebouchage \u00e0 l'enrob\u00e9 \u00e0 froid ?",
      answer:
        "Oui, \u00e0 condition de retirer l'enrob\u00e9 \u00e0 froid existant au pr\u00e9alable. La r\u00e9sine doit adh\u00e9rer au rev\u00eatement d'origine (bitume, enrob\u00e9), pas \u00e0 un mat\u00e9riau rapport\u00e9. Notre \u00e9quipe d\u00e9cape l'ancien rebouchage avant d'appliquer la r\u00e9sine.",
    },
    {
      question:
        'La r\u00e9sine polyur\u00e9thane fonctionne-t-elle en hiver ?',
      answer:
        "Oui. Nos formulations sont applicables jusqu'\u00e0 -5\u00b0C. Nous intervenons toute l'ann\u00e9e, y compris en p\u00e9riode hivernale. Les seules contraintes : le support doit \u00eatre sec (pas de pluie active) et la temp\u00e9rature doit rester au-dessus de -5\u00b0C pendant la polym\u00e9risation.",
    },
    {
      question:
        'Combien de temps faut-il pour r\u00e9parer un nid de poule \u00e0 la r\u00e9sine ?',
      answer:
        "Comptez 20 \u00e0 40 minutes par nid de poule (pr\u00e9paration + injection + lissage). La circulation pi\u00e9tonne est r\u00e9tablie en moins d'une heure, les v\u00e9hicules l\u00e9gers en 2 \u00e0 4 heures. Pour un parking de 10 \u00e0 20 nids de poule, une demi-journ\u00e9e suffit.",
    },
    {
      question:
        'Qui est responsable des nids de poule dans un parking priv\u00e9 ?',
      answer:
        "Le gestionnaire du parking (propri\u00e9taire, syndic, exploitant) est responsable de l'entretien de la chauss\u00e9e. En cas d'accident caus\u00e9 par un nid de poule (chute d'un pi\u00e9ton, dommage \u00e0 un v\u00e9hicule), sa responsabilit\u00e9 civile peut \u00eatre engag\u00e9e. L'absence de r\u00e9paration ou une r\u00e9paration insuffisante constituent un d\u00e9faut d'entretien.",
    },
    {
      question:
        'La r\u00e9sine est-elle compatible avec un retra\u00e7age de parking ?',
      answer:
        "Parfaitement. La surface de la r\u00e9sine polym\u00e9ris\u00e9e est lisse et homog\u00e8ne, ce qui permet d'appliquer la peinture de marquage directement dessus. Beaucoup de nos clients combinent la r\u00e9paration des nids de poule et le retra\u00e7age complet de leur parking en une seule intervention.",
    },
  ],
  'dimensions-nombre-places-pmr-parking': [
    {
      question:
        'Peut-on mettre une place PMR en \u00e9pi ou en bataille ?',
      answer:
        "Oui, les deux configurations sont possibles. En \u00e9pi, la bande d'acc\u00e8s doit se trouver du c\u00f4t\u00e9 le plus large de la place (c\u00f4t\u00e9 o\u00f9 le v\u00e9hicule se pr\u00e9sente). En bataille (perpendiculaire), la bande d'acc\u00e8s est lat\u00e9rale, comme pour une place classique.",
    },
    {
      question: 'La place PMR doit-elle \u00eatre peinte en bleu ?',
      answer:
        "Non, le fond bleu n'est pas obligatoire mais fortement recommand\u00e9. La r\u00e9glementation impose le pictogramme PMR et les lignes de d\u00e9limitation, mais pas de couleur de fond sp\u00e9cifique. En pratique, le marquage bleu est devenu un standard car il am\u00e9liore la visibilit\u00e9 et identifie imm\u00e9diatement la place.",
    },
    {
      question:
        'Faut-il une place PMR dans un parking de 10 places ?',
      answer:
        "Oui. D\u00e8s qu'un parking d'ERP d\u00e9passe 1 place, il doit comporter au moins 2 places PMR (minimum r\u00e9glementaire). Pour un parking de 10 places, cela repr\u00e9sente 20 % de la capacit\u00e9.",
    },
    {
      question:
        'Peut-on transformer une place standard en place PMR sans refaire tout le parking ?',
      answer:
        "Oui. Il suffit d'\u00e9largir la place concern\u00e9e (en r\u00e9duisant la place adjacente ou en supprimant une place) pour atteindre 3,30 m de large, puis de tracer le marquage PMR. C'est l'intervention la plus courante et la moins co\u00fbteuse (200 \u00e0 400 euros par place).",
    },
    {
      question:
        'Les dimensions PMR sont-elles les m\u00eames pour un parking souterrain ?',
      answer:
        "Oui, les dimensions au sol sont identiques. La seule diff\u00e9rence concerne la hauteur libre, qui doit \u00eatre de 2,15 m minimum pour permettre l'ouverture des hayons des v\u00e9hicules adapt\u00e9s.",
    },
  ],
  'signalisation-pmr-parking': [
    {
      question:
        'Le panneau PMR est-il obligatoire en plus du marquage au sol ?',
      answer:
        "Oui. Le panneau B6d et le pictogramme au sol sont deux \u00e9l\u00e9ments distincts, tous deux obligatoires. L'un ne remplace pas l'autre. Le panneau signale la place \u00e0 distance, le pictogramme l'identifie au sol.",
    },
    {
      question: 'Quelle couleur pour le marquage PMR ?',
      answer:
        "Le bleu est recommand\u00e9 par le CERTU pour distinguer les places PMR des places standard, mais le blanc est \u00e9galement conforme. Le pictogramme fauteuil roulant doit \u00eatre blanc. Le fond de la place peut \u00eatre bleu ou rester en enrob\u00e9 naturel.",
    },
    {
      question:
        'Faut-il des bandes podotactiles dans un parking de plain-pied ?',
      answer:
        "Si le parking est strictement de plain-pied sans aucun changement de niveau ni abaissement de trottoir, les bandes podotactiles ne sont pas obligatoires. En pratique, la plupart des parkings comportent au moins un abaissement de trottoir entre la zone de stationnement et le cheminement pi\u00e9ton.",
    },
    {
      question:
        'Le panneau B6d peut-il \u00eatre fix\u00e9 au mur au lieu d\u2019\u00eatre sur poteau ?',
      answer:
        "Oui, \u00e0 condition de respecter la hauteur minimale de 2,30 m (bord inf\u00e9rieur) et d'\u00eatre visible depuis la voie de circulation. La fixation murale est courante dans les parkings souterrains.",
    },
    {
      question:
        '\u00c0 quelle fr\u00e9quence faut-il renouveler le pictogramme PMR au sol ?',
      answer:
        "En moyenne tous les 3 \u00e0 5 ans pour un parking ext\u00e9rieur \u00e0 trafic moyen. Un parking de grande surface \u00e0 fort trafic peut n\u00e9cessiter un renouvellement tous les 2-3 ans. Les pictogrammes thermoplastiques durent plus longtemps que les pictogrammes peints.",
    },
  ],
  'mise-en-conformite-parking-pmr': [
    {
      question:
        'La mise en conformit\u00e9 PMR est-elle obligatoire pour un parking priv\u00e9 ?',
      answer:
        "Oui, d\u00e8s lors que le parking dessert un ERP (commerce, bureau accueillant du public, immeuble avec locaux commerciaux). Les parkings strictement priv\u00e9s (maison individuelle) ne sont pas concern\u00e9s.",
    },
    {
      question:
        'Combien de temps durent les travaux de mise en conformit\u00e9 ?',
      answer:
        "Pour un parking de taille moyenne (30 \u00e0 100 places), comptez 1 \u00e0 3 jours de travaux. Le diagnostic pr\u00e9alable prend une demi-journ\u00e9e. Les travaux de g\u00e9nie civil (abaissements, reprises de chauss\u00e9e) peuvent allonger le d\u00e9lai.",
    },
    {
      question:
        'Peut-on faire la mise en conformit\u00e9 par \u00e9tapes ?',
      answer:
        "Oui, \u00e0 condition de respecter un calendrier pr\u00e9cis. Les places PMR (marquage + signalisation) sont la priorit\u00e9 absolue. Le cheminement accessible peut \u00eatre trait\u00e9 dans un second temps si les travaux sont programm\u00e9s.",
    },
    {
      question:
        'Qui peut contr\u00f4ler la conformit\u00e9 PMR de mon parking ?',
      answer:
        "Les commissions communales d'accessibilit\u00e9, la DDTM (Direction D\u00e9partementale des Territoires et de la Mer) et les services de police ou gendarmerie. Les contr\u00f4les peuvent \u00eatre programm\u00e9s ou inopin\u00e9s.",
    },
    {
      question:
        'Mon parking a des places PMR mais elles ne sont plus visibles. Suis-je en infraction ?',
      answer:
        "Oui. Des marquages effac\u00e9s \u00e9quivalent \u00e0 une absence de marquage. La signalisation doit \u00eatre visible et lisible en permanence. Un retra\u00e7age r\u00e9gulier est n\u00e9cessaire, g\u00e9n\u00e9ralement tous les 3 \u00e0 5 ans.",
    },
  ],
  'cout-renovation-parking': [
    {
      question:
        "Quel est le prix moyen d'une r\u00e9novation de parking ?",
      answer:
        "Pour une r\u00e9novation standard (retra\u00e7age + r\u00e9parations ponctuelles + signalisation + PMR), comptez entre 60 et 120 euros par place de parking. Soit 3 000 \u00e0 6 000 euros pour un parking de 50 places.",
    },
    {
      question:
        'Le co\u00fbt de r\u00e9novation inclut-il la mise aux normes PMR ?',
      answer:
        "Pas syst\u00e9matiquement. Certains devis s\u00e9parent les travaux de r\u00e9novation g\u00e9n\u00e9rale et la mise en conformit\u00e9 PMR. Demandez toujours un devis incluant le poste PMR pour \u00e9viter les surprises.",
    },
    {
      question:
        'Peut-on r\u00e9nover un parking par \u00e9tapes pour \u00e9taler le budget ?',
      answer:
        "Oui, c'est courant en copropri\u00e9t\u00e9. La priorit\u00e9 est la s\u00e9curit\u00e9 : r\u00e9paration de chauss\u00e9e et PMR d'abord, puis marquage et signalisation.",
    },
    {
      question:
        'Combien de temps dure un chantier de r\u00e9novation de parking ?',
      answer:
        "Comptez 1 \u00e0 3 jours pour une r\u00e9novation l\u00e9g\u00e8re (marquage + signalisation), 3 \u00e0 5 jours pour une r\u00e9novation standard et 1 \u00e0 3 semaines pour une r\u00e9novation lourde avec r\u00e9fection de chauss\u00e9e.",
    },
    {
      question:
        'Un devis de r\u00e9novation de parking est-il gratuit ?',
      answer:
        "Chez R\u00e9nov'Route, le devis est toujours gratuit et sans engagement. Il inclut un diagnostic sur site et un chiffrage d\u00e9taill\u00e9 par poste.",
    },
  ],
  'renovation-parking-entreprise': [
    {
      question:
        'Quelle est la meilleure p\u00e9riode pour r\u00e9nover un parking ?',
      answer:
        "Le printemps (avril-juin) et l'automne (septembre-octobre) sont les p\u00e9riodes id\u00e9ales. Les temp\u00e9ratures sont favorables \u00e0 l'application de peinture (plus de 5\u00b0C) et \u00e0 la polym\u00e9risation de la r\u00e9sine.",
    },
    {
      question:
        'Faut-il un permis ou une autorisation pour r\u00e9nover un parking priv\u00e9 ?',
      answer:
        "Non. La r\u00e9novation d'un parking priv\u00e9 (retra\u00e7age, r\u00e9paration de nids de poule, remplacement de panneaux) ne n\u00e9cessite aucune autorisation administrative. En revanche, si vous modifiez la structure du parking (ajout de places, changement de configuration, cr\u00e9ation de rampe d'acc\u00e8s), un permis de construire ou une d\u00e9claration pr\u00e9alable peut \u00eatre n\u00e9cessaire.",
    },
    {
      question: 'Peut-on r\u00e9nover un parking par phases ?',
      answer:
        "Oui, et c'est souvent la meilleure approche. Par exemple : les nids de poule en priorit\u00e9 (risque juridique), le retra\u00e7age dans un deuxi\u00e8me temps, la signalisation en troisi\u00e8me. Le phasage permet de r\u00e9partir le budget sur plusieurs mois.",
    },
    {
      question:
        'Quelle garantie pour les travaux de r\u00e9novation de parking ?',
      answer:
        "Chez R\u00e9nov'Route, nous garantissons 2 ans l'ensemble de nos travaux de marquage. Les r\u00e9parations de nids de poule par r\u00e9sine sont \u00e9galement garanties 2 ans. En pratique, nos marquages tiennent 3 \u00e0 5 ans et nos r\u00e9parations par r\u00e9sine 5 \u00e0 10 ans.",
    },
    {
      question: 'Le parking est-il utilisable pendant les travaux ?',
      answer:
        "Oui. Nous organisons les interventions par zone pour maintenir au minimum 50 % de la capacit\u00e9 de stationnement en permanence. Les temps de s\u00e9chage sont de 1 \u00e0 3h pour la peinture et de 2 \u00e0 4h pour la r\u00e9sine.",
    },
  ],
  'peinture-marquage-sol-parking': [
    {
      question:
        'Quelle est la meilleure peinture pour un parking ext\u00e9rieur ?',
      answer:
        "Pour un parking ext\u00e9rieur \u00e0 trafic moyen, la peinture acrylique certifi\u00e9e NF EN 1436 offre le meilleur rapport qualit\u00e9-prix. Pour un trafic intense (grande surface, zone logistique), la thermoplastique dure deux \u00e0 trois fois plus longtemps. \u00c9vitez la r\u00e9sine \u00e9poxy en ext\u00e9rieur : elle jaunit sous les UV.",
    },
    {
      question: 'Peut-on peindre un marquage soi-m\u00eame ?',
      answer:
        "Techniquement, oui pour de l'acrylique sur une petite surface. Mais sans mat\u00e9riel professionnel (traceuse calibr\u00e9e, gabarits), les lignes seront irr\u00e9guli\u00e8res et le r\u00e9sultat ne sera pas conforme aux normes de marquage.",
    },
    {
      question:
        'Combien de temps faut-il attendre avant de circuler sur un marquage neuf ?',
      answer:
        "Cela d\u00e9pend du produit. Acrylique : 1 \u00e0 2 heures. Thermoplastique : 5 \u00e0 15 minutes (temps de refroidissement). R\u00e9sine \u00e9poxy : 24 \u00e0 72 heures.",
    },
    {
      question:
        'La peinture de marquage r\u00e9siste-t-elle au sel de d\u00e9neigement ?',
      answer:
        "Les peintures certifi\u00e9es NF EN 1436 sont formul\u00e9es pour r\u00e9sister aux cycles gel/d\u00e9gel et au sel de d\u00e9neigement. La thermoplastique est la plus r\u00e9sistante dans ces conditions.",
    },
    {
      question:
        '\u00c0 quelle fr\u00e9quence faut-il refaire le marquage d\u2019un parking ?',
      answer:
        "En moyenne : tous les 2-3 ans pour l'acrylique, 4-6 ans pour la thermoplastique, 5-10 ans pour la r\u00e9sine. Ces chiffres varient selon le trafic, le climat et l'entretien.",
    },
  ],
  'ralentisseur-parking-norme': [
    {
      question:
        "Quelle est la hauteur maximale d'un ralentisseur de parking ?",
      answer:
        "10 centim\u00e8tres, selon le d\u00e9cret 94-447 et la norme NF P 98-300. Les ralentisseurs modulaires en caoutchouc ont g\u00e9n\u00e9ralement une hauteur de 5 \u00e0 7 centim\u00e8tres.",
    },
    {
      question:
        'Peut-on installer un ralentisseur dans un parking priv\u00e9 ?',
      answer:
        "Oui. Le d\u00e9cret 94-447 concerne les voies publiques, mais rien n'interdit d'installer un ralentisseur dans un parking priv\u00e9. Il est recommand\u00e9 de respecter les normes en vigueur pour limiter la responsabilit\u00e9 du gestionnaire en cas d'accident.",
    },
    {
      question: "Quel est le prix d'un ralentisseur de parking ?",
      answer:
        "De 300 euros pour un ralentisseur modulaire en caoutchouc \u00e0 5 000 euros pour un plateau sur\u00e9lev\u00e9 en enrob\u00e9, pose et signalisation comprises.",
    },
    {
      question:
        'Faut-il un panneau de signalisation avec un ralentisseur ?',
      answer:
        "Oui. Tout ralentisseur doit \u00eatre pr\u00e9c\u00e9d\u00e9 d'un panneau C27 et accompagn\u00e9 d'un marquage au sol (triangles blancs). L'absence de signalisation constitue un manquement qui aggrave la responsabilit\u00e9 en cas d'accident.",
    },
    {
      question:
        "Quelle diff\u00e9rence entre dos d'\u00e2ne et coussin berlinois ?",
      answer:
        "Le dos d'\u00e2ne couvre toute la largeur de la voie et ralentit tous les v\u00e9hicules. Le coussin berlinois ne couvre qu'une partie de la chauss\u00e9e : les v\u00e9hicules larges (bus, camions, v\u00e9hicules de secours) peuvent passer sans \u00eatre ralentis.",
    },
  ],
  'couleur-marquage-sol-parking': [
    {
      question:
        'Quelle couleur pour les places de parking standard ?',
      answer:
        "Le blanc. C'est la couleur r\u00e9glementaire pour toutes les lignes de d\u00e9limitation des places de stationnement, les fl\u00e8ches directionnelles, les passages pi\u00e9tons et les pictogrammes au sol.",
    },
    {
      question:
        "Le jaune est-il obligatoire pour les zones d'interdiction ?",
      answer:
        "Oui. L'IISR et le Code de la route imposent le jaune pour toutes les zones o\u00f9 le stationnement est interdit : hachures, z\u00e9bras, bordures peintes. Un marquage d'interdiction en blanc n'a pas de valeur r\u00e9glementaire.",
    },
    {
      question:
        'Peut-on utiliser des couleurs personnalis\u00e9es dans un parking priv\u00e9 ?',
      answer:
        "Oui, \u00e0 condition de respecter les couleurs r\u00e9glementaires pour les \u00e9l\u00e9ments obligatoires (places PMR en blanc, interdictions en jaune, passages pi\u00e9tons en blanc). Les couleurs libres (vert, orange, gris) peuvent servir \u00e0 personnaliser les zones non r\u00e9glement\u00e9es.",
    },
    {
      question: 'Quelle couleur pour les places PMR ?',
      answer:
        "Le blanc pour les lignes de d\u00e9limitation et le pictogramme au sol. Le fond bleu est utilis\u00e9 pour le panneau vertical (panneau B6d) et peut \u00eatre reproduit au sol autour du pictogramme pour am\u00e9liorer la visibilit\u00e9.",
    },
    {
      question:
        "Comment am\u00e9liorer la visibilit\u00e9 d'un marquage sur sol clair ?",
      answer:
        "Sur b\u00e9ton ou dallage clair, le contraste avec le marquage blanc peut \u00eatre insuffisant. Deux solutions : appliquer un fond sombre (bande noire ou gris fonc\u00e9) sous le marquage blanc, ou utiliser une peinture avec un taux de microbilles de verre plus \u00e9lev\u00e9 pour am\u00e9liorer la r\u00e9tror\u00e9flexion nocturne.",
    },
  ],
  'comment-tracer-parking': [
    {
      question: "Combien de temps dure le tra\u00e7age d'un parking ?",
      answer:
        "Pour un parking de 50 \u00e0 100 places, comptez 1 \u00e0 2 jours de tra\u00e7age effectif, plus 1 jour de pr\u00e9paration du support. Le parking est praticable 2 \u00e0 3 heures apr\u00e8s l'application de la peinture acrylique.",
    },
    {
      question:
        'Faut-il un permis ou une autorisation pour tracer un parking priv\u00e9 ?',
      answer:
        "Non, le tra\u00e7age d'un parking priv\u00e9 ne n\u00e9cessite pas de permis. En revanche, si le parking est ouvert au public (ERP), il doit respecter les normes d'accessibilit\u00e9 PMR et les r\u00e8gles de signalisation.",
    },
    {
      question: 'Peut-on tracer un parking sur du gravier ?',
      answer:
        "Non, le marquage au sol n\u00e9cessite une surface dure et lisse (enrob\u00e9, b\u00e9ton, r\u00e9sine). Sur du gravier, on utilise des d\u00e9limiteurs physiques : rondins de bois, bordures b\u00e9ton, plots ou bandes de guidage.",
    },
    {
      question:
        "Quelle est la largeur minimale d'une place de parking ?",
      answer:
        "La largeur minimale recommand\u00e9e est de 2,30 m, mais la norme courante est de 2,50 m. Les places PMR mesurent 3,30 m de large (place de 2,50 m + bande d'acc\u00e8s de 0,80 m).",
    },
    {
      question: "Combien co\u00fbte le tra\u00e7age d'un parking ?",
      answer:
        "En moyenne : 8 \u00e0 15 euros/m\u00b2 en peinture acrylique, 15 \u00e0 25 euros/m\u00b2 en thermoplastique. Pour un parking de 50 places (environ 500 m\u00b2 de marquage), comptez entre 3 000 et 7 000 euros.",
    },
  ],
  'passage-pieton-parking-norme': [
    {
      question:
        'Le passage pi\u00e9ton est-il obligatoire dans un parking priv\u00e9 ?',
      answer:
        "Pas d'obligation l\u00e9gale dans un parking strictement priv\u00e9. Mais pour un parking ouvert au public (commerce, ERP), l'accessibilit\u00e9 PMR impose des cheminements s\u00e9curis\u00e9s incluant des passages pi\u00e9tons.",
    },
    {
      question:
        "Quelle est la largeur r\u00e9glementaire d'un passage pi\u00e9ton ?",
      answer:
        "Les bandes doivent mesurer 50 centim\u00e8tres de large, espac\u00e9es de 50 centim\u00e8tres. La largeur totale du passage d\u00e9pend du nombre de bandes (minimum 2,50 m\u00e8tres). En parking, une largeur de 2,50 \u00e0 4 m\u00e8tres est courante.",
    },
    {
      question:
        'Peut-on utiliser du jaune pour un passage pi\u00e9ton en parking ?',
      answer:
        "Non. Le passage pi\u00e9ton est toujours blanc en France. Le jaune est r\u00e9serv\u00e9 aux interdictions de stationner et aux z\u00e9bras.",
    },
    {
      question: 'Les bandes podotactiles sont-elles obligatoires ?',
      answer:
        "Oui, dans les parkings d'ERP (centres commerciaux, cliniques, h\u00f4tels, copropri\u00e9t\u00e9s avec acc\u00e8s visiteurs). Les bandes d'\u00e9veil de vigilance doivent \u00eatre plac\u00e9es \u00e0 50 centim\u00e8tres du bord de la chauss\u00e9e, sur toute la largeur du passage.",
    },
    {
      question:
        "Combien co\u00fbte le marquage d'un passage pi\u00e9ton ?",
      answer:
        "Comptez 200 \u00e0 500 euros par passage pi\u00e9ton en peinture acrylique (marquage + panneau). En thermoplastique ou r\u00e9sine, le co\u00fbt monte \u00e0 500-1 200 euros. L'ajout de bandes podotactiles repr\u00e9sente 150 \u00e0 300 euros suppl\u00e9mentaires par passage.",
    },
  ],
  'signalisation-parking-reglementation': [
    {
      question:
        'La signalisation est-elle obligatoire dans un parking priv\u00e9 ?',
      answer:
        "Pas d'obligation l\u00e9gale pour un parking strictement priv\u00e9 (copropri\u00e9t\u00e9 ferm\u00e9e, entreprise sans acc\u00e8s public). Mais la responsabilit\u00e9 civile du propri\u00e9taire est engag\u00e9e en cas d'accident li\u00e9 \u00e0 un d\u00e9faut de signalisation. Pour un parking ouvert au public (ERP, commerce), la signalisation est obligatoire.",
    },
    {
      question:
        'Quels panneaux sont obligatoires dans un parking de centre commercial ?',
      answer:
        "Au minimum : panneau STOP ou c\u00e9dez le passage aux intersections, limitation de vitesse, signalisation des places PMR, panneau passage pi\u00e9ton, panneau de sortie.",
    },
    {
      question: "Combien co\u00fbte la signalisation d'un parking ?",
      answer:
        "Comptez 150 \u00e0 300 euros par panneau (fourniture et pose), soit 2 000 \u00e0 6 000 euros pour un parking de 50 \u00e0 200 places. Le marquage au sol repr\u00e9sente un budget suppl\u00e9mentaire de 1 500 \u00e0 4 000 euros selon la surface.",
    },
    {
      question:
        "Qui peut installer la signalisation d'un parking ?",
      answer:
        "L'installation doit \u00eatre r\u00e9alis\u00e9e par un professionnel qualifi\u00e9 pour garantir la conformit\u00e9 des panneaux (mod\u00e8le, dimensions, r\u00e9tror\u00e9flexion, hauteur). Un installateur qualifi\u00e9 fournit une attestation de conformit\u00e9.",
    },
    {
      question:
        'Faut-il un permis pour installer des panneaux dans un parking priv\u00e9 ?',
      answer:
        "Non. L'installation de signalisation dans un parking priv\u00e9 ne n\u00e9cessite pas d'autorisation administrative. En copropri\u00e9t\u00e9, un vote en AG est requis.",
    },
  ],
  'reglementation-marquage-sol-parking': [
    {
      question:
        'Le marquage au sol est-il obligatoire dans un parking priv\u00e9 ?',
      answer:
        "Non, pour un parking strictement priv\u00e9 (r\u00e9serv\u00e9 aux r\u00e9sidents ou employ\u00e9s sans acc\u00e8s public). Oui, pour un parking priv\u00e9 ouvert au public (commerce, h\u00f4tel, clinique, copropri\u00e9t\u00e9 avec visiteurs). Dans tous les cas, la responsabilit\u00e9 civile du propri\u00e9taire reste engag\u00e9e.",
    },
    {
      question:
        'Quelle est la norme de r\u00e9f\u00e9rence pour le marquage au sol ?',
      answer:
        "L'IISR (7e partie) pour les sp\u00e9cifications techniques (couleurs, dimensions, types de lignes). La norme NF EN 1436 pour les peintures (r\u00e9tror\u00e9flexion, adh\u00e9rence). L'arr\u00eat\u00e9 du 15 janvier 2007 pour l'accessibilit\u00e9 PMR.",
    },
    {
      question: 'Peut-on tracer son parking soi-m\u00eame ?',
      answer:
        "Rien ne l'interdit pour un parking priv\u00e9. Mais un tra\u00e7age non professionnel risque de ne pas respecter les normes (dimensions, couleurs, peinture certifi\u00e9e) et d'engager la responsabilit\u00e9 du propri\u00e9taire.",
    },
    {
      question:
        '\u00c0 quelle fr\u00e9quence faut-il retracer un parking ?',
      answer:
        "Cela d\u00e9pend du trafic et du type de peinture. Peinture acrylique : retra\u00e7age tous les 1 \u00e0 2 ans en zone de fort trafic. Peinture thermoplastique : tous les 3 \u00e0 5 ans. R\u00e9sine : tous les 5 \u00e0 8 ans.",
    },
    {
      question:
        'Quelles sont les sanctions en cas de non-conformit\u00e9 ?',
      answer:
        "Amende administrative pouvant atteindre 45 000 euros pour les ERP. Mise en demeure de la commission d'accessibilit\u00e9. Responsabilit\u00e9 civile engag\u00e9e en cas d'accident. Refus d'indemnisation par l'assurance.",
    },
  ],
  'resine-sol-parking-prix-types': [
    {
      question:
        'La r\u00e9sine \u00e9poxy convient-elle pour un parking ext\u00e9rieur ?',
      answer:
        "Non. L'\u00e9poxy jaunit et se d\u00e9grade sous l'effet des UV. Pour un parking ext\u00e9rieur, utilisez une r\u00e9sine polyur\u00e9thane ou m\u00e9thacrylate, r\u00e9sistantes aux UV et aux intemp\u00e9ries.",
    },
    {
      question:
        "Combien co\u00fbte la r\u00e9sine \u00e9poxy pour un parking de 100 places ?",
      answer:
        "Pour un parking de 100 places (environ 1 500 m\u00b2 de surface trait\u00e9e), comptez 37 500 \u00e0 67 500 euros en r\u00e9sine \u00e9poxy standard (25 \u00e0 45 euros/m\u00b2), pr\u00e9paration du sol incluse.",
    },
    {
      question:
        'Peut-on appliquer de la r\u00e9sine sur un sol humide ?',
      answer:
        "L'\u00e9poxy et la polyur\u00e9thane n\u00e9cessitent un sol sec (humidit\u00e9 moins de 4%). Seul le m\u00e9thacrylate peut \u00eatre appliqu\u00e9 sur un support l\u00e9g\u00e8rement humide.",
    },
    {
      question:
        "Quelle est la dur\u00e9e de vie d'un sol en r\u00e9sine ?",
      answer:
        "8 \u00e0 15 ans pour l'\u00e9poxy, 10 \u00e0 20 ans pour la polyur\u00e9thane, 10 \u00e0 15 ans pour le m\u00e9thacrylate. La dur\u00e9e de vie d\u00e9pend du trafic, de l'entretien et de la qualit\u00e9 de la pr\u00e9paration du support.",
    },
    {
      question:
        "Faut-il fermer le parking pendant l'application ?",
      answer:
        "Oui, par zones. L'application se fait g\u00e9n\u00e9ralement par demi-parking pour maintenir l'acc\u00e8s. En \u00e9poxy, comptez 48 \u00e0 72 heures d'immobilisation par zone. En m\u00e9thacrylate, 4 \u00e0 6 heures suffisent.",
    },
  ],
  'barriere-parking-types-prix': [
    {
      question:
        "Faut-il un permis pour installer une barri\u00e8re de parking ?",
      answer:
        "Non, pour un parking priv\u00e9. Une d\u00e9claration pr\u00e9alable de travaux peut \u00eatre requise si l'installation modifie l'aspect ext\u00e9rieur du b\u00e2timent. En copropri\u00e9t\u00e9, un vote en AG est obligatoire.",
    },
    {
      question:
        "Combien co\u00fbte une barri\u00e8re de parking automatique ?",
      answer:
        "Comptez 3 000 \u00e0 7 000 euros pour une barri\u00e8re levante \u00e9lectrique avec syst\u00e8me de contr\u00f4le d'acc\u00e8s (badge ou t\u00e9l\u00e9commande), pose et mise en service incluses.",
    },
    {
      question: 'Peut-on installer une barri\u00e8re solaire ?',
      answer:
        "Oui. Les barri\u00e8res solaires fonctionnent avec un panneau photovolta\u00efque et une batterie. Elles conviennent aux parkings ext\u00e9rieurs avec un trafic mod\u00e9r\u00e9 (moins de 30 passages/jour). Le surco\u00fbt par rapport \u00e0 une barri\u00e8re filaire est de 500 \u00e0 1 500 euros.",
    },
    {
      question:
        'La barri\u00e8re doit-elle rester ouverte la nuit ?',
      answer:
        "C'est au gestionnaire de d\u00e9cider. En copropri\u00e9t\u00e9, la barri\u00e8re est g\u00e9n\u00e9ralement ferm\u00e9e 24h/24 avec acc\u00e8s par badge. En parking commercial, elle est souvent ouverte pendant les heures d'ouverture et ferm\u00e9e la nuit.",
    },
    {
      question: "Comment s\u00e9curiser l'acc\u00e8s aux secours ?",
      answer:
        "Toute barri\u00e8re doit \u00eatre \u00e9quip\u00e9e d'un d\u00e9brayage manuel (cl\u00e9 ou levier). Les ERP doivent pr\u00e9voir un syst\u00e8me d'ouverture automatique sur alerte incendie. Le triangle de pompiers (DGS) est requis dans certaines configurations.",
    },
  ],
  'peinture-sol-garage-types-application': [
    {
      question:
        'Quelle est la meilleure peinture pour un sol de garage ?',
      answer:
        "La peinture \u00e9poxy bi-composant offre le meilleur rapport performance/prix pour un garage r\u00e9sidentiel. Elle r\u00e9siste aux passages de v\u00e9hicules, aux taches d'huile et dure 5 \u00e0 10 ans avec un entretien minimal.",
    },
    {
      question: 'Peut-on peindre un sol de garage soi-m\u00eame ?',
      answer:
        "Oui. L'application d'une peinture de sol est accessible \u00e0 un bricoleur. Les \u00e9tapes critiques sont la pr\u00e9paration du support (nettoyage, d\u00e9graissage, pon\u00e7age) et le respect des temps de s\u00e9chage. Comptez une journ\u00e9e compl\u00e8te pour un garage de 30 \u00e0 40 m\u00b2.",
    },
    {
      question:
        'Faut-il une peinture antid\u00e9rapante pour le garage ?',
      answer:
        "C'est recommand\u00e9 pour les zones de passage pi\u00e9ton. Ajoutez des granulats antid\u00e9rapants dans la derni\u00e8re couche de peinture ou choisissez une peinture avec finition antid\u00e9rapante int\u00e9gr\u00e9e. Surco\u00fbt : 2 \u00e0 5 euros/m\u00b2.",
    },
    {
      question:
        'Peut-on peindre sur une ancienne peinture de sol ?',
      answer:
        "Oui, si l'ancienne peinture est adh\u00e9rente et en bon \u00e9tat. Poncez l\u00e9g\u00e8rement pour cr\u00e9er une accroche, d\u00e9poussierez et appliquez. Si l'ancienne peinture s'\u00e9caille, il faut la retirer compl\u00e8tement.",
    },
    {
      question:
        'Combien de temps dure une peinture de sol de garage ?',
      answer:
        "De 1 \u00e0 12 ans selon le type : acrylique (1-3 ans), alkyde-ur\u00e9thane (2-4 ans), \u00e9poxy (5-10 ans), polyur\u00e9thane (7-12 ans). La dur\u00e9e de vie d\u00e9pend aussi de la pr\u00e9paration du sol et du volume de trafic.",
    },
  ],
  'butee-parking-types-pose-prix': [
    {
      question: 'Les but\u00e9es de parking sont-elles obligatoires ?',
      answer:
        "Non. Aucune r\u00e9glementation n'impose la pose de but\u00e9es dans un parking priv\u00e9. Elles sont cependant fortement recommand\u00e9es pour prot\u00e9ger les structures, les v\u00e9hicules et les pi\u00e9tons.",
    },
    {
      question:
        'Quelle but\u00e9e choisir pour un parking souterrain ?',
      answer:
        "La but\u00e9e en caoutchouc recycl\u00e9 est le meilleur choix pour un parking souterrain : l\u00e9g\u00e8re, absorbante, avec bandes r\u00e9fl\u00e9chissantes int\u00e9gr\u00e9es. Le b\u00e9ton est aussi adapt\u00e9 si le budget est serr\u00e9, mais ajoutez des bandes r\u00e9fl\u00e9chissantes.",
    },
    {
      question:
        'Peut-on coller une but\u00e9e au lieu de la cheviller ?',
      answer:
        "Le collage seul n'est pas recommand\u00e9 pour les parkings \u00e0 trafic r\u00e9gulier. Le collage structurel peut fonctionner sur sol b\u00e9ton propre et sec, mais un chevillage de s\u00e9curit\u00e9 en compl\u00e9ment est toujours pr\u00e9f\u00e9rable.",
    },
    {
      question:
        'Combien de but\u00e9es faut-il pour un parking de 50 places ?',
      answer:
        "Comptez 1 but\u00e9e par place, moins les places PMR (qui ne doivent pas avoir de but\u00e9es). Pour 50 places dont 3 PMR : 47 but\u00e9es. Budget indicatif en caoutchouc pos\u00e9 inclus : 1 400 \u00e0 2 600 euros.",
    },
    {
      question:
        'Les but\u00e9es g\u00eanent-elles le nettoyage du parking ?',
      answer:
        "L\u00e9g\u00e8rement. Les but\u00e9es chevill\u00e9es sont fixes et obligent \u00e0 nettoyer autour. Pour faciliter l'entretien, les but\u00e9es coll\u00e9es sont plus faciles \u00e0 retirer temporairement.",
    },
  ],
  'dos-dane-parking-reglementation-pose': [
    {
      question:
        "Un dos d'\u00e2ne est-il obligatoire dans un parking priv\u00e9 ?",
      answer:
        "Non. Aucune loi n'impose l'installation de dos d'\u00e2ne dans un parking priv\u00e9. C'est une d\u00e9cision du gestionnaire ou de la copropri\u00e9t\u00e9. Cependant, en cas d'accident li\u00e9 \u00e0 une vitesse excessive, l'absence de dispositif de ralentissement peut \u00eatre retenue comme un manquement \u00e0 l'obligation de s\u00e9curit\u00e9.",
    },
    {
      question:
        "Quelle est la hauteur maximale d'un dos d'\u00e2ne ?",
      answer:
        "10 cm, selon la norme NF P 98-300. Cette limite s'applique aux voies publiques mais constitue la r\u00e9f\u00e9rence pour les parkings priv\u00e9s. Un dos d'\u00e2ne plus haut expose le gestionnaire \u00e0 des r\u00e9clamations pour dommages aux v\u00e9hicules.",
    },
    {
      question:
        "Peut-on installer un dos d'\u00e2ne dans un parking souterrain ?",
      answer:
        "Oui. Privil\u00e9giez les mod\u00e8les en caoutchouc \u00e0 profil bas (5 \u00e0 7 cm) pour respecter la garde au sol r\u00e9duite des v\u00e9hicules en parking souterrain. Ajoutez des bandes r\u00e9fl\u00e9chissantes pour compenser l'\u00e9clairage souvent faible.",
    },
    {
      question: "Combien co\u00fbte un dos d'\u00e2ne pour parking ?",
      answer:
        "Comptez 400 \u00e0 900 euros pos\u00e9 inclus pour un dos d'\u00e2ne modulaire en caoutchouc, et 800 \u00e0 2 000 euros pour un dos d'\u00e2ne en enrob\u00e9 permanent. La signalisation (panneau + marquage) ajoute 150 \u00e0 450 euros.",
    },
    {
      question:
        "Faut-il un vote en AG pour installer un dos d'\u00e2ne en copropri\u00e9t\u00e9 ?",
      answer:
        "Oui. L'installation d'un dos d'\u00e2ne dans le parking d'une copropri\u00e9t\u00e9 est d\u00e9cid\u00e9e en AG \u00e0 la majorit\u00e9 absolue (article 25 de la loi du 10 juillet 1965). Le syndic doit pr\u00e9senter un ou plusieurs devis aux copropri\u00e9taires.",
    },
  ],
  'revetement-sol-industriel-types-prix': [
    {
      question:
        "Combien co\u00fbte un rev\u00eatement de sol industriel au m\u00b2 ?",
      answer:
        "De 12 \u00e0 120 euros/m\u00b2 selon le type de rev\u00eatement et la pr\u00e9paration du support. La r\u00e9sine \u00e9poxy standard, la plus courante, se situe entre 25 et 50 euros/m\u00b2 pos\u00e9 inclus.",
    },
    {
      question:
        "Quelle est la dur\u00e9e de vie d'un sol en r\u00e9sine industrielle ?",
      answer:
        "10 \u00e0 25 ans pour une r\u00e9sine \u00e9poxy ou polyur\u00e9thane correctement pos\u00e9e sur un support bien pr\u00e9par\u00e9. La dur\u00e9e de vie d\u00e9pend du trafic, des contraintes chimiques et de l'entretien. Une peinture de sol industrielle dure 3 \u00e0 6 ans.",
    },
    {
      question:
        "Peut-on appliquer une r\u00e9sine sur un sol existant en mauvais \u00e9tat ?",
      answer:
        "Oui, apr\u00e8s pr\u00e9paration. Le sol doit \u00eatre r\u00e9par\u00e9 (fissures, \u00e9clats, nids de poule), grenaill\u00e9 et ponc\u00e9. Si le b\u00e9ton est trop d\u00e9grad\u00e9, un ragr\u00e9age complet peut \u00eatre n\u00e9cessaire avant l'application de la r\u00e9sine.",
    },
    {
      question: 'Faut-il fermer le site pendant l\u2019application ?',
      answer:
        "Oui, par zones. L'application se fait g\u00e9n\u00e9ralement par tiers ou par demi-surface pour maintenir l'activit\u00e9. En r\u00e9sine \u00e9poxy, comptez 48 \u00e0 72 heures d'immobilisation par zone. En m\u00e9thacrylate, 4 \u00e0 6 heures suffisent.",
    },
    {
      question:
        'La r\u00e9sine \u00e9poxy r\u00e9siste-t-elle aux produits chimiques ?',
      answer:
        "L'\u00e9poxy standard r\u00e9siste aux huiles, graisses, carburants et \u00e0 la plupart des produits d'entretien. Pour une r\u00e9sistance aux acides forts, aux solvants aromatiques ou aux produits chimiques concentr\u00e9s, une formulation novolaque ou vinylester est n\u00e9cessaire (surco\u00fbt de 20 \u00e0 40%).",
    },
  ],
  'panneau-pmr-parking-types-obligations': [
    {
      question:
        'Un panneau PMR est-il obligatoire sur un parking priv\u00e9 ?',
      answer:
        "Oui, si le parking est ouvert au public (commerce, entreprise accueillant des visiteurs, cabinet m\u00e9dical). Les parkings strictement priv\u00e9s (r\u00e9sidence ferm\u00e9e sans acc\u00e8s public) ne sont pas soumis \u00e0 cette obligation, mais la signalisation reste recommand\u00e9e.",
    },
    {
      question:
        'Qui doit payer la mise en conformit\u00e9 PMR du parking ?',
      answer:
        "Le propri\u00e9taire ou l'exploitant du parking. En copropri\u00e9t\u00e9, c'est le syndicat des copropri\u00e9taires (vote en assembl\u00e9e g\u00e9n\u00e9rale). En centre commercial, c'est le gestionnaire du site.",
    },
    {
      question:
        'Peut-on utiliser un panneau PMR fait maison ?',
      answer:
        "Non. Les panneaux doivent \u00eatre conformes \u00e0 l'Instruction Interminist\u00e9rielle sur la Signalisation Routi\u00e8re (IISR) et fabriqu\u00e9s selon les normes NF. Un panneau imprim\u00e9 sur du PVC ou du carton n'est pas r\u00e9glementaire et n'a aucune valeur juridique.",
    },
    {
      question:
        "Quelle est la dur\u00e9e de vie d'un panneau PMR ?",
      answer:
        "10 \u00e0 15 ans pour un panneau en aluminium avec film r\u00e9tror\u00e9fl\u00e9chissant classe 1. Le film perd sa r\u00e9tror\u00e9flexion au fil du temps (UV, intemp\u00e9ries). Un panneau dont le film est d\u00e9grad\u00e9 doit \u00eatre remplac\u00e9.",
    },
    {
      question:
        'Faut-il un panneau par place PMR ou un seul pour le groupe ?',
      answer:
        "Un panneau par place PMR, ou un panneau de zone (CE14) en entr\u00e9e du groupe de places + un panonceau individuel par place. La r\u00e8gle : chaque place doit \u00eatre identifiable individuellement depuis la voie de circulation.",
    },
  ],
  'panneau-limitation-vitesse-parking': [
    {
      question:
        'La limitation de vitesse est-elle obligatoire dans un parking priv\u00e9 ?',
      answer:
        "La loi n'impose pas de vitesse sp\u00e9cifique en parking priv\u00e9. Mais le gestionnaire a une obligation g\u00e9n\u00e9rale de s\u00e9curit\u00e9 envers les usagers (article 1242 du Code civil). L'absence de signalisation de vitesse peut \u00eatre retenue comme un manquement \u00e0 cette obligation en cas d'accident.",
    },
    {
      question:
        "Qui peut verbaliser un exc\u00e8s de vitesse dans un parking priv\u00e9 ?",
      answer:
        "Sur un parking priv\u00e9 non ouvert \u00e0 la circulation publique, les forces de l'ordre ne peuvent pas dresser de contravention pour exc\u00e8s de vitesse. En revanche, sur un parking priv\u00e9 ouvert au public (centre commercial, h\u00f4pital), le Code de la route s'applique et les infractions sont verbalisables.",
    },
    {
      question:
        'Quelle vitesse choisir : 10, 20 ou 30 km/h ?',
      answer:
        "10 km/h pour les parkings couverts et souterrains (visibilit\u00e9 r\u00e9duite, virages serr\u00e9s). 20 km/h pour les parkings ext\u00e9rieurs avec flux pi\u00e9tons importants. 30 km/h uniquement pour les voies d'acc\u00e8s longues sans stationnement lat\u00e9ral. En cas de doute, choisir la vitesse la plus basse.",
    },
    {
      question:
        'Faut-il un arr\u00eat\u00e9 municipal pour poser un panneau de limitation en parking priv\u00e9 ?',
      answer:
        "Non. Le propri\u00e9taire ou gestionnaire du parking peut poser des panneaux de limitation de vitesse sans autorisation administrative. Il est toutefois recommand\u00e9 d'utiliser des panneaux conformes aux normes NF.",
    },
    {
      question:
        "Un panneau de vitesse suffit-il \u00e0 d\u00e9gager la responsabilit\u00e9 du gestionnaire ?",
      answer:
        "Le panneau est n\u00e9cessaire mais pas suffisant. Le juge v\u00e9rifie que le gestionnaire a pris des mesures proportionn\u00e9es au risque : panneau + ralentisseur + marquage au sol + \u00e9clairage. Un panneau seul sans dispositif physique de ralentissement peut \u00eatre jug\u00e9 insuffisant.",
    },
  ],
  'sol-epoxy-entrepot-avantages-pose': [
    {
      question:
        "Combien de temps dure un sol \u00e9poxy en entrep\u00f4t ?",
      answer:
        "10 \u00e0 20 ans selon l'\u00e9paisseur, le trafic et l'entretien. Un syst\u00e8me de 3 mm sous trafic intense (300+ passages de chariot/jour) dure 12-15 ans. Un syst\u00e8me de 2 mm sous trafic mod\u00e9r\u00e9 dure 8-12 ans.",
    },
    {
      question:
        "Peut-on appliquer de l'\u00e9poxy sur un vieux sol b\u00e9ton ?",
      answer:
        "Oui, apr\u00e8s pr\u00e9paration compl\u00e8te. Le sol doit \u00eatre grenaill\u00e9, les fissures r\u00e9par\u00e9es et le taux d'humidit\u00e9 v\u00e9rifi\u00e9. Un vieux b\u00e9ton en bon \u00e9tat structural est un excellent support pour l'\u00e9poxy.",
    },
    {
      question:
        "L'entrep\u00f4t doit-il fermer pendant l'application ?",
      answer:
        "Non. L'application se fait par zones (tiers ou demi-surface). Pendant qu'une zone est trait\u00e9e, le reste de l'entrep\u00f4t fonctionne normalement. Seule la zone en cours d'application est inaccessible pendant 48-72h.",
    },
    {
      question:
        "\u00c9poxy ou polyur\u00e9thane pour un entrep\u00f4t ?",
      answer:
        "Epoxy pour la majorit\u00e9 des entrep\u00f4ts (temp\u00e9rature constante, trafic m\u00e9canique). Polyur\u00e9thane pour les entrep\u00f4ts frigorifiques (r\u00e9sistance aux chocs thermiques) ou les zones de quai (exposition aux UV et aux intemp\u00e9ries). L'\u00e9poxy offre une meilleure r\u00e9sistance m\u00e9canique et un prix inf\u00e9rieur.",
    },
    {
      question:
        'Le marquage des zones est-il inclus dans le prix ?',
      answer:
        "Le marquage est g\u00e9n\u00e9ralement factur\u00e9 en suppl\u00e9ment (3-8 euros/m\u00b2 sur les zones marqu\u00e9es, pas sur toute la surface). Il est int\u00e9gr\u00e9 dans le m\u00eame chantier que la r\u00e9sine, ce qui \u00e9vite une seconde mobilisation.",
    },
  ],
  'signalisation-parking-copropriete': [
    {
      question:
        'Le syndic peut-il faire des travaux de signalisation sans vote en AG ?',
      answer:
        "Les travaux d'entretien courant (retra\u00e7age \u00e0 l'identique, remplacement d'un panneau cass\u00e9) rel\u00e8vent de la gestion courante du syndic et n'exigent pas de vote en AG. En revanche, tout changement (nouveau panneau, modification du sens de circulation, ajout de places PMR) doit \u00eatre vot\u00e9.",
    },
    {
      question:
        'Qui paie les travaux de signalisation du parking ?',
      answer:
        "Les charges sont r\u00e9parties entre les copropri\u00e9taires qui disposent d'une place de parking, selon les tanti\u00e8mes de copropri\u00e9t\u00e9 d\u00e9finis dans le r\u00e8glement. Les copropri\u00e9taires sans place ne participent pas aux charges li\u00e9es au parking.",
    },
    {
      question:
        'Le parking de copropri\u00e9t\u00e9 doit-il avoir des places PMR ?',
      answer:
        "Oui, pour les immeubles construits apr\u00e8s 2007 ou lors de travaux de r\u00e9novation. Le nombre de places PMR d\u00e9pend du nombre total de places (1 place PMR pour 1 \u00e0 25 places, 2 pour 26 \u00e0 50, etc.).",
    },
    {
      question:
        'Peut-on imposer un sens de circulation dans le parking ?',
      answer:
        "Oui, par vote en AG \u00e0 la majorit\u00e9 absolue (article 25 de la loi du 10 juillet 1965). Le sens de circulation modifie l'usage des parties communes, ce qui justifie cette majorit\u00e9.",
    },
    {
      question:
        "Combien co\u00fbte un retra\u00e7age complet du parking ?",
      answer:
        "De 8 \u00e0 15 euros par place pour un retra\u00e7age standard (lignes + num\u00e9ros). Pour 60 places, comptez 500 \u00e0 900 euros. Ajoutez 300-600 euros par place PMR \u00e0 cr\u00e9er et 120-250 euros par panneau suppl\u00e9mentaire.",
    },
  ],
  'ombriere-photovoltaique-parking-2026': [
    {
      question:
        "L'obligation concerne-t-elle aussi les parkings souterrains ?",
      answer:
        "Non. L'obligation d'ombri\u00e8res photovolta\u00efques s'applique uniquement aux parkings ext\u00e9rieurs de plein air. Les parkings couverts ou souterrains ne sont pas concern\u00e9s.",
    },
    {
      question:
        'Peut-on remplacer les ombri\u00e8res par des arbres ?',
      answer:
        "Partiellement. La loi Huwart permet de couvrir jusqu'\u00e0 65% de la surface requise par des dispositifs v\u00e9g\u00e9talis\u00e9s. Mais au moins 35% de la moiti\u00e9 du parking doit \u00eatre couverte par des ombri\u00e8res int\u00e9grant des panneaux photovolta\u00efques.",
    },
    {
      question:
        'Faut-il refaire le marquage apr\u00e8s la pose des ombri\u00e8res ?',
      answer:
        "Les fondations des ombri\u00e8res (poteaux, plots) modifient rarement l'implantation des places de stationnement. En revanche, des retouches de marquage sont fr\u00e9quentes aux abords des poteaux. C'est pourquoi il est plus \u00e9conomique de refaire le marquage complet avant la pose.",
    },
    {
      question:
        'Quel lien entre ombri\u00e8res et bornes de recharge ?',
      answer:
        "Les ombri\u00e8res photovolta\u00efques produisent de l'\u00e9nergie renouvelable qui peut alimenter directement les bornes de recharge. Depuis janvier 2025, les parkings de plus de 20 places doivent proposer au moins une borne.",
    },
  ],
  'nouvelles-normes-signaletique-parking-2026': [
    {
      question:
        "L'arr\u00eat\u00e9 s'applique-t-il aux parkings priv\u00e9s de copropri\u00e9t\u00e9 ?",
      answer:
        "L'arr\u00eat\u00e9 concerne les parkings ouverts au public (ERP, commerces, parkings relais). Les parkings priv\u00e9s de copropri\u00e9t\u00e9 ferm\u00e9s ne sont pas directement vis\u00e9s, mais les syndics ont int\u00e9r\u00eat \u00e0 anticiper.",
    },
    {
      question:
        'Quelles sont les sanctions en cas de non-respect ?',
      answer:
        "La non-conformit\u00e9 est constat\u00e9e lors des commissions de s\u00e9curit\u00e9. Le gestionnaire re\u00e7oit une mise en demeure avec un d\u00e9lai de r\u00e9gularisation. En cas de non-r\u00e9gularisation, des astreintes journali\u00e8res et des sanctions administratives s'appliquent. Pour les ERP, la fermeture administrative du parking est possible en cas de danger pour la s\u00e9curit\u00e9.",
    },
    {
      question:
        'Peut-on \u00e9taler les travaux dans le temps ?',
      answer:
        "Oui. La mise en conformit\u00e9 peut \u00eatre progressive, \u00e0 condition de commencer par les points critiques (s\u00e9curit\u00e9, PMR) et de documenter le plan d'action dans le registre de contr\u00f4le.",
    },
    {
      question:
        "Faut-il un bureau de contr\u00f4le pour l'audit annuel ?",
      answer:
        "L'arr\u00eat\u00e9 n'impose pas sp\u00e9cifiquement un bureau de contr\u00f4le agr\u00e9\u00e9 pour l'audit annuel. Un prestataire qualifi\u00e9 en signalisation routi\u00e8re peut r\u00e9aliser cet audit. L'important est la tra\u00e7abilit\u00e9 : le rapport doit \u00eatre consign\u00e9 dans le registre et disponible lors des contr\u00f4les.",
    },
  ],
  'nids-de-poule-hiver-2026-solutions': [
    {
      question:
        'Peut-on r\u00e9parer un nid de poule soi-m\u00eame ?',
      answer:
        "Les kits de r\u00e9paration vendus en grande surface (enrob\u00e9 \u00e0 froid en sac) permettent un colmatage temporaire pour les petits trous (moins de 15 cm). C'est un d\u00e9pannage, pas une r\u00e9paration. Pour un r\u00e9sultat durable, il faut un professionnel \u00e9quip\u00e9 et des mat\u00e9riaux adapt\u00e9s.",
    },
    {
      question:
        'La r\u00e9paration par r\u00e9sine fonctionne-t-elle en hiver ?',
      answer:
        "Oui. Les formulations modernes de r\u00e9sine polyur\u00e9thane sont con\u00e7ues pour polym\u00e9riser jusqu'\u00e0 -5\u00b0C. R\u00e9nov'Route intervient toute l'ann\u00e9e, y compris en hiver, en adaptant les mat\u00e9riaux aux conditions m\u00e9t\u00e9orologiques.",
    },
    {
      question:
        "Combien de temps dure l'intervention ?",
      answer:
        "Pour un parking de taille moyenne (100 \u00e0 200 places) avec 5 \u00e0 10 nids de poule, l'intervention prend g\u00e9n\u00e9ralement une journ\u00e9e. La circulation pi\u00e9tonne est r\u00e9tablie dans l'heure. Les v\u00e9hicules peuvent circuler apr\u00e8s 2 \u00e0 4 heures.",
    },
    {
      question:
        'Faut-il retracer le parking apr\u00e8s la r\u00e9paration ?',
      answer:
        "Si les nids de poule ont endommag\u00e9 le marquage au sol, un retra\u00e7age partiel ou complet est recommand\u00e9. C'est souvent l'occasion de v\u00e9rifier la conformit\u00e9 globale du parking (places PMR, signalisation, passages pi\u00e9tons).",
    },
  ],
  'signalisation-horizontale-lyon-marquage': [
    {
      question:
        'Quelle est la meilleure p\u00e9riode pour faire du marquage au sol \u00e0 Lyon ?',
      answer:
        "Avril \u00e0 juin et septembre \u00e0 octobre. La temp\u00e9rature doit \u00eatre sup\u00e9rieure \u00e0 5\u00b0C, le sol doit \u00eatre sec et les pr\u00e9visions m\u00e9t\u00e9o favorables sur 24 heures.",
    },
    {
      question:
        "Combien co\u00fbte un retra\u00e7age complet de parking \u00e0 Lyon ?",
      answer:
        "De 8 \u00e0 15 euros/place pour un retra\u00e7age standard. Un parking de 60 places co\u00fbte entre 500 et 900 euros. Ajoutez 300-600 euros par place PMR et 80-150 euros par passage pi\u00e9ton.",
    },
    {
      question:
        'Faut-il un arr\u00eat\u00e9 de circulation pour marquer un parking priv\u00e9 ?',
      answer:
        "Non. L'arr\u00eat\u00e9 de circulation est obligatoire uniquement pour les interventions sur voie publique. Un parking priv\u00e9, m\u00eame ouvert au public, ne n\u00e9cessite pas d'arr\u00eat\u00e9. Il faut simplement baliser la zone de travaux et informer les usagers.",
    },
    {
      question:
        "Quelle est la dur\u00e9e de vie du marquage au sol \u00e0 Lyon ?",
      answer:
        "Avec une peinture acrylique certifi\u00e9e NF EN 1436 (classe P5) : 3 \u00e0 5 ans en parking, 1 \u00e0 2 ans sur voirie \u00e0 fort trafic. Le thermoplastique (classe P6) : 5 \u00e0 8 ans en parking.",
    },
  ],
  'reparation-chaussee-parking-methodes-prix': [
    {
      question:
        'Peut-on r\u00e9parer un parking sans le fermer ?',
      answer:
        "Dans la plupart des cas, les r\u00e9parations se font par zones. Chaque zone est balis\u00e9e et interdite \u00e0 la circulation pendant l'intervention (quelques heures pour la r\u00e9sine, 2-4 heures pour l'enrob\u00e9 \u00e0 chaud). Le reste du parking reste accessible.",
    },
    {
      question:
        "Quelle est la dur\u00e9e de vie d'une r\u00e9paration de chauss\u00e9e ?",
      answer:
        "Elle d\u00e9pend de la m\u00e9thode : 6-18 mois pour l'enrob\u00e9 \u00e0 froid, 5-10 ans pour la r\u00e9sine polyur\u00e9thane, 10-15 ans pour l'enrob\u00e9 \u00e0 chaud.",
    },
    {
      question:
        "Faut-il retracer les places apr\u00e8s une r\u00e9paration de chauss\u00e9e ?",
      answer:
        "Oui, si les r\u00e9parations ont touch\u00e9 des zones marqu\u00e9es. Le marquage d'origine est d\u00e9truit par la d\u00e9coupe ou recouvert par le mat\u00e9riau de r\u00e9paration. Le retra\u00e7age se fait apr\u00e8s s\u00e9chage complet de la r\u00e9paration (24 \u00e0 48 heures selon la m\u00e9thode).",
    },
    {
      question:
        "\u00c0 qui faire appel pour la r\u00e9paration de chauss\u00e9e d'un parking ?",
      answer:
        "Un sp\u00e9cialiste de la r\u00e9novation de parking ma\u00eetrise toutes les m\u00e9thodes (r\u00e9sine, enrob\u00e9, pontage) et peut recommander la solution adapt\u00e9e \u00e0 chaque zone.",
    },
  ],
  'bumper-supermarche-protection-frigo': [
    {
      question:
        'Les bumpers sont-ils obligatoires dans un supermarch\u00e9 ?',
      answer:
        "Non, il n'y a pas d'obligation l\u00e9gale d'installer des bumpers. Mais le Code du travail impose \u00e0 l'employeur de prot\u00e9ger les \u00e9quipements de travail et de pr\u00e9venir les risques. En cas de blessure caus\u00e9e par un meuble endommag\u00e9, l'absence de protection peut \u00eatre retenue comme un manquement \u00e0 l'obligation de s\u00e9curit\u00e9.",
    },
    {
      question:
        'Peut-on installer des bumpers sans fermer le magasin ?',
      answer:
        "Oui. La pose se fait g\u00e9n\u00e9ralement en dehors des heures d'ouverture (t\u00f4t le matin ou apr\u00e8s fermeture). Le scellement chimique n\u00e9cessite 24h de s\u00e9chage, mais le bumper peut \u00eatre mis en service d\u00e8s que le scellement est pris (4-6 heures pour les r\u00e9sines rapides).",
    },
    {
      question:
        "Quelle diff\u00e9rence entre un bumper et une barri\u00e8re de protection ?",
      answer:
        "Le bumper est une barre basse (15-25 cm du sol) con\u00e7u pour stopper les chariots au niveau des roues. La barri\u00e8re de protection est plus haute (50-100 cm) et prot\u00e8ge contre les v\u00e9hicules ou les chariots \u00e9l\u00e9vateurs. En supermarch\u00e9, les bumpers suffisent pour les zones clients.",
    },
    {
      question: 'Les bumpers ab\u00eement-ils le sol ?',
      answer:
        "La fixation par chevilles chimiques cr\u00e9e des trous de 12-16 mm de diam\u00e8tre dans la dalle. Si les bumpers sont retir\u00e9s, les trous peuvent \u00eatre rebouch\u00e9s avec un mortier de r\u00e9paration. Sur un sol en r\u00e9sine, un professionnel peut reprendre les points de per\u00e7age pour un r\u00e9sultat invisible.",
    },
  ],
  'marquage-sol-supermarche-grande-surface': [
    {
      question:
        'Le marquage est-il obligatoire dans un parking de grande surface ?',
      answer:
        "Le marquage des places PMR est obligatoire (arr\u00eat\u00e9 du 15 janvier 2007). Le marquage des autres places n'est pas l\u00e9galement obligatoire, mais il est indispensable pour la s\u00e9curit\u00e9, l'organisation du stationnement et la responsabilit\u00e9 du gestionnaire en cas d'accident.",
    },
    {
      question:
        "Peut-on tracer un parking de supermarch\u00e9 en journ\u00e9e ?",
      answer:
        "Oui, mais par zones avec balisage. La peinture acrylique s\u00e8che en 20-30 minutes et le parking est circulable apr\u00e8s 1 heure. En pratique, les grandes surfaces pr\u00e9f\u00e8rent les interventions de nuit pour \u00e9viter toute g\u00eane.",
    },
    {
      question:
        'Quelle peinture pour un parking de grande surface ?',
      answer:
        "Une peinture acrylique certifi\u00e9e NF EN 1436 (classe P5 minimum) pour les zones de stationnement. Du thermoplastique (classe P6-P7) pour les passages pi\u00e9tons et les zones \u00e0 tr\u00e8s fort trafic (entr\u00e9es, sorties, manoeuvres).",
    },
  ],
  'reparer-nid-de-poule-soi-meme': [
    {
      question:
        "L'enrob\u00e9 \u00e0 froid en sac est-il efficace ?",
      answer:
        "Oui, pour des r\u00e9parations temporaires de petits nids de poule (moins de 30 cm) sur des parkings \u00e0 faible trafic. Non, pour des r\u00e9parations durables ou des zones \u00e0 fort trafic. L'enrob\u00e9 \u00e0 froid en sac n'a pas la densit\u00e9 ni l'adh\u00e9rence d'un enrob\u00e9 \u00e0 chaud ou d'une r\u00e9sine professionnelle.",
    },
    {
      question:
        'Peut-on utiliser du b\u00e9ton pour reboucher un nid de poule ?',
      answer:
        "Non. Le b\u00e9ton n'a pas la m\u00eame \u00e9lasticit\u00e9 que l'enrob\u00e9. Il se fissure sous les contraintes thermiques (dilatation/contraction) et sous le passage des v\u00e9hicules. Il se d\u00e9colle des bords en quelques mois.",
    },
    {
      question:
        "Faut-il un permis ou une autorisation pour r\u00e9parer un nid de poule ?",
      answer:
        "Non, si le parking est priv\u00e9. Sur la voie publique, seules les collectivit\u00e9s ou leurs prestataires sont habilit\u00e9s \u00e0 intervenir. Signalez les nids de poule sur voie publique \u00e0 votre mairie.",
    },
  ],
  'duree-vie-marquage-sol-parking': [
    {
      question:
        "Quelle est la dur\u00e9e de vie d'un marquage au sol de parking ?",
      answer:
        "De 3 \u00e0 5 ans avec une peinture acrylique certifi\u00e9e NF EN 1436 (classe P5). De 5 \u00e0 8 ans avec un thermoplastique (classe P6). De 7 \u00e0 10 ans avec une r\u00e9sine \u00e0 froid (classe P7). Les zones de manoeuvre et les passages pi\u00e9tons s'usent 2 \u00e0 3 fois plus vite.",
    },
    {
      question:
        'Comment savoir si mon marquage doit \u00eatre refait ?',
      answer:
        "3 signes : les lignes sont effac\u00e9es \u00e0 plus de 50%, les passages pi\u00e9tons ne sont plus visibles de nuit (perte de r\u00e9tror\u00e9flexion), les num\u00e9ros de place sont illisibles.",
    },
    {
      question:
        'Le thermoplastique dure-t-il vraiment plus longtemps ?',
      answer:
        "Oui, 2 \u00e0 3 fois plus longtemps que la peinture acrylique. Son \u00e9paisseur (1,5-3 mm vs 0,3-0,5 mm pour la peinture) explique cette diff\u00e9rence. Il est aussi plus r\u00e9sistant \u00e0 l'abrasion des pneus. Son co\u00fbt plus \u00e9lev\u00e9 (15-25 euros/m\u00b2 vs 8-15 euros/m\u00b2) est compens\u00e9 par une fr\u00e9quence de retra\u00e7age divis\u00e9e par 2.",
    },
  ],
  'calendrier-entretien-parking': [
    {
      question:
        "Qui est responsable de l'entretien d'un parking de copropri\u00e9t\u00e9 ?",
      answer:
        "Le syndic est responsable de l'entretien des parties communes, y compris le parking. Les d\u00e9cisions de travaux sont vot\u00e9es en assembl\u00e9e g\u00e9n\u00e9rale. Les travaux d'entretien courant rel\u00e8vent de la gestion courante du syndic ; les travaux de r\u00e9novation importants n\u00e9cessitent un vote \u00e0 la majorit\u00e9 absolue.",
    },
    {
      question:
        'Faut-il fermer le parking pendant les travaux de retra\u00e7age ?',
      answer:
        "Pas forc\u00e9ment. Un prestataire organis\u00e9 travaille par zones pour maintenir l'acc\u00e8s \u00e0 une partie du parking pendant le chantier. Le temps de s\u00e9chage de la peinture est de 1 \u00e0 3 heures par zone. Pour un parking de 200 places, comptez 2 \u00e0 3 jours de travaux avec fermeture partielle par rotation.",
    },
    {
      question:
        'Peut-on faire des retouches localis\u00e9es au lieu de tout retracer ?',
      answer:
        "Oui, et c'est m\u00eame recommand\u00e9. Les retouches cibl\u00e9es sur les zones les plus us\u00e9es (entr\u00e9es, sorties, places proches des acc\u00e8s) permettent de maintenir la conformit\u00e9 \u00e0 moindre co\u00fbt entre deux retra\u00e7ages complets.",
    },
    {
      question: '\u00c0 quelle fr\u00e9quence faut-il inspecter un parking ?',
      answer:
        'Deux inspections compl\u00e8tes par an (mars et septembre) sont le minimum. Les parkings \u00e0 fort trafic (plus de 500 v\u00e9hicules par jour) m\u00e9ritent une inspection visuelle rapide mensuelle des zones les plus sollicit\u00e9es.',
    },
  ],
  'norme-nf-en-1436-marquage-routier': [
    {
      question:
        'La norme NF EN 1436 est-elle obligatoire en parking priv\u00e9 ?',
      answer:
        "Non, au sens strict. Seuls les marquages sur voie publique doivent obligatoirement respecter la norme. Mais en parking priv\u00e9, l'utilisation de produits certifi\u00e9s NF EN 1436 est fortement recommand\u00e9e. En cas de litige ou d'accident, la conformit\u00e9 \u00e0 la norme constitue un \u00e9l\u00e9ment de preuve de la diligence du gestionnaire.",
    },
    {
      question: 'Comment savoir si mon marquage actuel est conforme ?',
      answer:
        "Visuellement, un marquage conforme NF EN 1436 se distingue par sa r\u00e9tror\u00e9flexion (il brille sous les phares la nuit gr\u00e2ce aux microbilles de verre). Un marquage mat et sans reflet est probablement non certifi\u00e9. Pour un diagnostic pr\u00e9cis, un audit technique avec mesure au r\u00e9troflectom\u00e8tre est possible.",
    },
    {
      question:
        'Quelle est la diff\u00e9rence entre NF EN 1436 et la marque NF ?',
      answer:
        "La norme NF EN 1436 d\u00e9finit les crit\u00e8res de performance. La marque NF est une certification d\u00e9livr\u00e9e par l'AFNOR qui atteste qu'un produit sp\u00e9cifique respecte ces crit\u00e8res. Un produit peut \u00eatre conforme NF EN 1436 (il respecte les crit\u00e8res) sans porter la marque NF (il n'a pas \u00e9t\u00e9 certifi\u00e9 par l'AFNOR).",
    },
    {
      question: 'Les microbilles de verre sont-elles obligatoires ?',
      answer:
        "Non, mais elles sont indispensables pour atteindre les classes de r\u00e9tror\u00e9flexion R2 et sup\u00e9rieures. Sans microbilles, le marquage n'est pas r\u00e9tror\u00e9fl\u00e9chissant et donc peu visible de nuit ou en parking couvert. Toute peinture certifi\u00e9e NF EN 1436 de classe R2 ou sup\u00e9rieure int\u00e8gre des microbilles.",
    },
  ],
  'accessibilite-parking-erp-normes': [
    {
      question:
        "Mon parking n'a que 5 places, dois-je avoir une place PMR ?",
      answer:
        "Oui. D\u00e8s la premi\u00e8re place de stationnement accessible au public, une place PMR est obligatoire. La r\u00e8gle des 2% avec arrondi \u00e0 l'entier sup\u00e9rieur s'applique : 5 places = 1 place PMR minimum.",
    },
    {
      question:
        'Les places PMR sont-elles obligatoires en parking priv\u00e9 ?',
      answer:
        "Non, si le parking est strictement priv\u00e9 (usage exclusif des r\u00e9sidents d'une copropri\u00e9t\u00e9 sans ERP). Oui, si le parking dessert un ERP (commerce, bureau recevant du public, cabinet m\u00e9dical).",
    },
    {
      question:
        'Que faire si la pente de mon parking d\u00e9passe 2% ?',
      answer:
        "La pente de la place PMR elle-m\u00eame doit \u00eatre inf\u00e9rieure \u00e0 2%. Si le parking est en pente, la place PMR doit \u00eatre implant\u00e9e dans la zone la plus plate. Si aucune zone ne permet une pente inf\u00e9rieure \u00e0 2%, des travaux de nivellement sont n\u00e9cessaires.",
    },
  ],
  'preparation-sol-avant-resine-epoxy': [
    {
      question:
        "Peut-on appliquer de la r\u00e9sine \u00e9poxy sur un sol peint ?",
      answer:
        "Non, la peinture existante doit \u00eatre int\u00e9gralement retir\u00e9e par grenaillage ou d\u00e9capage chimique. La r\u00e9sine \u00e9poxy appliqu\u00e9e sur une peinture se d\u00e9collera avec la peinture sous-jacente.",
    },
    {
      question:
        'Faut-il grenailler un sol en b\u00e9ton neuf ?',
      answer:
        "Oui. Le b\u00e9ton neuf pr\u00e9sente une couche de laitance en surface qui emp\u00eache l'adh\u00e9rence de la r\u00e9sine. Le grenaillage ou le pon\u00e7age est obligatoire, m\u00eame sur un b\u00e9ton lisse d'apparence propre.",
    },
    {
      question:
        'Combien de temps dure la pr\u00e9paration ?',
      answer:
        "Pour un parking de 50 places (environ 650 m\u00b2) : 2-3 jours de pr\u00e9paration (diagnostic + nettoyage + grenaillage + primaire). L'application de la r\u00e9sine de finition prend 1-2 jours suppl\u00e9mentaires.",
    },
  ],
  'resine-epoxy-ou-peinture-sol-comparatif': [
    {
      question:
        'La r\u00e9sine \u00e9poxy jaunit-elle ?',
      answer:
        "Oui, la r\u00e9sine \u00e9poxy standard jaunit sous les UV. En parking ext\u00e9rieur, l'alternative est la r\u00e9sine polyur\u00e9thane (aliphatique) qui r\u00e9siste aux UV. En parking couvert ou souterrain, le jaunissement n'est pas un probl\u00e8me.",
    },
    {
      question:
        'Peut-on mettre de la r\u00e9sine sur de la peinture ?',
      answer:
        "Non. La peinture existante doit \u00eatre int\u00e9gralement retir\u00e9e (grenaillage ou d\u00e9capage). La r\u00e9sine appliqu\u00e9e sur une peinture se d\u00e9collera avec la peinture. C'est une erreur fr\u00e9quente qui co\u00fbte cher.",
    },
    {
      question:
        'Quelle est la solution interm\u00e9diaire ?',
      answer:
        "La peinture \u00e9poxy monocomposant. Elle co\u00fbte 10-20 euros/m\u00b2 (entre la peinture acrylique et la r\u00e9sine bicomposant), dure 3-5 ans et offre une r\u00e9sistance chimique moyenne. C'est un bon compromis pour les parkings \u00e0 trafic moyen sans agression chimique.",
    },
    {
      question:
        'Faut-il rev\u00eatir tout le sol ou juste tracer les lignes ?',
      answer:
        "Pour un parking standard (copropri\u00e9t\u00e9, bureau), le tra\u00e7age des lignes en peinture suffit. Le rev\u00eatement complet en r\u00e9sine est r\u00e9serv\u00e9 aux usages intensifs (entrep\u00f4t, atelier, showroom) ou aux parkings souterrains.",
    },
  ],
  'resine-sol-parking-souterrain': [
    {
      question:
        'Peut-on mettre de la r\u00e9sine sur un sol humide ?',
      answer:
        "Pas directement. L'humidit\u00e9 du support doit \u00eatre inf\u00e9rieure \u00e0 4,5% pour l'\u00e9poxy et 6% pour le polyur\u00e9thane. Si le taux est sup\u00e9rieur, un primaire anti-humidit\u00e9 doit \u00eatre appliqu\u00e9 avant la r\u00e9sine. Ce traitement ajoute 8-15 euros/m\u00b2 au budget.",
    },
    {
      question:
        'Combien de temps faut-il fermer le parking ?',
      answer:
        "De 48 \u00e0 72 heures pour l'\u00e9poxy et le polyur\u00e9thane (24h entre chaque couche). De 4 \u00e0 8 heures pour la r\u00e9sine MMA. L'intervention se fait par zones (1/3 du parking \u00e0 la fois) pour maintenir l'acc\u00e8s aux r\u00e9sidents.",
    },
    {
      question:
        'La r\u00e9sine r\u00e9siste-t-elle aux pneus chauds ?',
      answer:
        "Oui, l'\u00e9poxy et le polyur\u00e9thane r\u00e9sistent aux temp\u00e9ratures de pneus apr\u00e8s roulage (jusqu'\u00e0 80\u00b0C). La r\u00e9sine MMA r\u00e9siste jusqu'\u00e0 100\u00b0C. Aucune de ces r\u00e9sines ne marque sous le poids d'un v\u00e9hicule \u00e0 l'arr\u00eat.",
    },
  ],
}

export default FAQ_DATA
