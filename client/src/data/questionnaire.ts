export type FieldType = 'radio' | 'checkbox' | 'text' | 'textarea';

export interface Option {
  label: string;
  value: string;
}

export interface Field {
  id: string;
  name: string;
  label: string;
  type: FieldType;
  options?: Option[];
  placeholder?: string;
  required?: boolean;
}

export interface Section {
  id: string;
  title: string;
  description?: string;
  fields: Field[];
}

export const questionnaire: Section[] = [
  {
    id: 'profil',
    title: '1. Profil du participant',
    description: 'Ces questions nous permettent de mieux connaître la communauté.',
    fields: [
      {
        id: 'profil.city',
        name: 'profil.city',
        label: 'Ville / Pays',
        type: 'text',
        placeholder: 'Ex: Dakar, Sénégal'
      },
      {
        id: 'profil.name',
        name: 'profil.name',
        label: 'Nom ou pseudonyme (facultatif)',
        type: 'text',
        placeholder: 'Votre nom'
      },
      {
        id: 'profil.contact',
        name: 'profil.contact',
        label: 'Contact (facultatif)',
        type: 'text',
        placeholder: 'Email ou téléphone'
      },
      {
        id: 'profil.role',
        name: 'profil.role',
        label: '1.1. Quel est votre profil principal ?',
        type: 'radio',
        required: true,
        options: [
          { label: 'Étudiant(e)', value: 'etudiant' },
          { label: 'Développeur(se) junior', value: 'dev_junior' },
          { label: 'Développeur(se) confirmé(e)', value: 'dev_confirme' },
          { label: 'Lead developer / Tech lead', value: 'lead_dev' },
          { label: 'Freelance', value: 'freelance' },
          { label: 'Entrepreneur(e) / Fondateur(trice)', value: 'entrepreneur' },
          { label: 'Enseignant(e) / Formateur(trice)', value: 'enseignant' },
          { label: 'Recruteur / Responsable RH', value: 'recruteur' },
          { label: 'Autre', value: 'autre' }
        ]
      },
      {
        id: 'profil.experience',
        name: 'profil.experience',
        label: '1.2. Depuis combien de temps utilisez-vous Laravel ?',
        type: 'radio',
        options: [
          { label: 'Je découvre Laravel', value: 'decouverte' },
          { label: 'Moins de 1 an', value: '<1' },
          { label: '1 à 2 ans', value: '1-2' },
          { label: '3 à 5 ans', value: '3-5' },
          { label: 'Plus de 5 ans', value: '>5' },
          { label: 'Je n’utilise pas encore Laravel, mais je souhaite apprendre', value: 'souhaite_apprendre' }
        ]
      },
      {
        id: 'profil.context',
        name: 'profil.context',
        label: '1.3. Dans quel cadre utilisez-vous principalement Laravel ?',
        type: 'checkbox',
        options: [
          { label: 'Études / apprentissage personnel', value: 'etudes' },
          { label: 'Projets professionnels en entreprise', value: 'entreprise' },
          { label: 'Missions freelance', value: 'freelance' },
          { label: 'Création de startup ou de SaaS', value: 'startup' },
          { label: 'Formation / enseignement', value: 'formation' },
          { label: 'Projet associatif ou communautaire', value: 'associatif' },
          { label: 'Autre', value: 'autre' }
        ]
      },
      {
        id: 'profil.prior_larafest',
        name: 'profil.prior_larafest',
        label: '1.4. Avez-vous déjà participé à une édition du Larafest Sénégal ?',
        type: 'radio',
        options: [
          { label: 'Oui, une fois', value: 'oui_une_fois' },
          { label: 'Oui, plusieurs fois', value: 'oui_plusieurs_fois' },
          { label: 'Non, jamais', value: 'non_jamais' },
          { label: 'Je connaissais l’événement, mais je n’ai pas pu participer', value: 'connaissais_pas_participe' },
          { label: 'Je découvre le Larafest avec ce questionnaire', value: 'decouvre' }
        ]
      }
    ]
  },
  {
    id: 'interest',
    title: '2. Intérêt pour le Larafest 2026',
    fields: [
      {
        id: 'interest.attend',
        name: 'interest.attend',
        label: '2.1. Souhaitez-vous participer au Larafest Sénégal 2026 ?',
        type: 'radio',
        options: [
          { label: 'Oui, certainement', value: 'oui_certainement' },
          { label: 'Oui, probablement', value: 'oui_probablement' },
          { label: 'Peut-être, selon la date et le prix', value: 'peut_etre' },
          { label: 'Non, probablement pas', value: 'non_probablement_pas' },
          { label: 'Non', value: 'non' }
        ]
      },
      {
        id: 'interest.expectation',
        name: 'interest.expectation',
        label: '2.2. Qu’attendez-vous principalement de cet événement ? (jusqu’à 3)',
        type: 'checkbox',
        options: [
          { label: 'Découvrir Laravel et son écosystème', value: 'decouvrir_ecosysteme' },
          { label: 'Améliorer mes compétences techniques', value: 'competences' },
          { label: 'Participer à des ateliers pratiques', value: 'ateliers' },
          { label: 'Rencontrer des experts et des speakers', value: 'rencontrer_experts' },
          { label: 'Développer mon réseau professionnel', value: 'reseau' },
          { label: 'Trouver des opportunités de stage ou d’emploi', value: 'opportunites_emploi' },
          { label: 'Découvrir des projets, startups et solutions locales', value: 'decouvrir_projets' },
          { label: 'Présenter un projet ou partager une expérience', value: 'presenter_projet' },
          { label: 'Rencontrer des entreprises qui recrutent', value: 'rencontrer_entreprises' },
          { label: 'Passer un bon moment avec la communauté', value: 'fun' }
        ]
      },
      {
        id: 'interest.accompany',
        name: 'interest.accompany',
        label: '2.3. Avec qui pensez-vous venir ?',
        type: 'radio',
        options: [
          { label: 'Seul(e)', value: 'seul' },
          { label: 'Avec des collègues', value: 'collegues' },
          { label: 'Avec des amis / camarades de formation', value: 'amis' },
          { label: 'Avec une équipe ou une communauté', value: 'equipe' },
          { label: 'Je ne sais pas encore', value: 'nsp' }
        ]
      }
    ]
  },
  {
    id: 'conferences',
    title: '3. Conférences et contenus techniques',
    fields: [
      {
        id: 'conferences.topics',
        name: 'conferences.topics',
        label: '3.1. Quels sujets souhaitez-vous voir au programme ?',
        type: 'checkbox',
        options: [
          { label: 'Nouveautés de Laravel', value: 'nouveautes' },
          { label: 'Laravel pour les startups et les SaaS', value: 'startups_saas' },
          { label: 'Architecture d’une application Laravel professionnelle', value: 'architecture' },
          { label: 'API REST avec Laravel', value: 'api_rest' },
          { label: 'Authentification : Sanctum, Passport et bonnes pratiques', value: 'auth' },
          { label: 'Laravel Horizon et gestion des files d’attente', value: 'horizon' },
          { label: 'Laravel Reverb et applications temps réel', value: 'reverb' },
          { label: 'Laravel Octane et optimisation des performances', value: 'octane' },
          { label: 'Livewire', value: 'livewire' },
          { label: 'Inertia.js avec React ou Vue', value: 'inertia' },
          { label: 'Blade et composants réutilisables', value: 'blade' },
          { label: 'Tests automatisés avec Pest / PHPUnit', value: 'tests' },
          { label: 'Sécurité des applications Laravel', value: 'securite' },
          { label: 'Déploiement, CI/CD et DevOps', value: 'devops' },
          { label: 'Docker pour les projets Laravel', value: 'docker' },
          { label: 'Multi-tenant / applications SaaS', value: 'multitenant' },
          { label: 'Paiement en ligne et intégrations locales', value: 'paiement' },
          { label: 'PHP moderne et Design Patterns', value: 'php_moderne' },
          { label: 'Intelligence artificielle intégrée à Laravel', value: 'ia' },
          { label: 'Retours d’expérience sur des projets africains', value: 'retours_exp' },
          { label: 'Open source et contribution à Laravel', value: 'opensource' }
        ]
      },
      {
        id: 'conferences.level',
        name: 'conferences.level',
        label: '3.2. Quel niveau de contenu préférez-vous ?',
        type: 'radio',
        options: [
          { label: 'Débutant', value: 'debutant' },
          { label: 'Intermédiaire', value: 'intermediaire' },
          { label: 'Avancé', value: 'avance' },
          { label: 'Un programme équilibré pour tous les niveaux', value: 'equilibre' }
        ]
      },
      {
        id: 'conferences.format',
        name: 'conferences.format',
        label: '3.3. Quels formats préférez-vous ? (jusqu’à 3)',
        type: 'checkbox',
        options: [
          { label: 'Conférences courtes (20 à 30 minutes)', value: 'courtes' },
          { label: 'Conférences approfondies (45 à 60 minutes)', value: 'approfondies' },
          { label: 'Démonstrations en direct', value: 'demos' },
          { label: 'Ateliers pratiques avec ordinateur', value: 'ateliers' },
          { label: 'Sessions de questions-réponses', value: 'qa' },
          { label: 'Tables rondes', value: 'tables_rondes' },
          { label: 'Retours d’expérience / études de cas', value: 'cas' },
          { label: 'Live coding', value: 'live_coding' },
          { label: 'Challenges ou mini-hackathon', value: 'hackathon' }
        ]
      },
      {
        id: 'conferences.absolute_topic',
        name: 'conferences.absolute_topic',
        label: '3.4. Quel sujet aimeriez-vous absolument voir traité ?',
        type: 'textarea'
      }
    ]
  },
  {
    id: 'speakers',
    title: '4. Speakers et communauté',
    fields: [
      {
        id: 'speakers.invited_speaker',
        name: 'speakers.invited_speaker',
        label: '4.1. Quel speaker, expert ou créateur de contenu aimeriez-vous voir invité ?',
        type: 'textarea'
      },
      {
        id: 'speakers.origin',
        name: 'speakers.origin',
        label: '4.2. Préférez-vous des speakers :',
        type: 'checkbox',
        options: [
          { label: 'Sénégalais', value: 'senegalais' },
          { label: 'Africains francophones', value: 'africains' },
          { label: 'Internationaux', value: 'internationaux' },
          { label: 'Membres de l’équipe Laravel', value: 'equipe_laravel' },
          { label: 'Peu importe, tant que le contenu est de qualité', value: 'peu_importe' }
        ]
      },
      {
        id: 'speakers.intervene',
        name: 'speakers.intervene',
        label: '4.3. Seriez-vous intéressé(e) pour intervenir ?',
        type: 'radio',
        options: [
          { label: 'Oui, comme speaker', value: 'oui_speaker' },
          { label: 'Oui, pour un atelier', value: 'oui_atelier' },
          { label: 'Oui, pour présenter un projet', value: 'oui_projet' },
          { label: 'Oui, pour participer à une table ronde', value: 'oui_table_ronde' },
          { label: 'Peut-être, j’aimerais être accompagné(e)', value: 'peut_etre' },
          { label: 'Non', value: 'non' }
        ]
      },
      {
        id: 'speakers.theme_proposal',
        name: 'speakers.theme_proposal',
        label: '4.4. Quel thème pourriez-vous proposer ?',
        type: 'textarea'
      }
    ]
  },
  {
    id: 'organization',
    title: '5. Organisation et expérience participant',
    fields: [
      {
        id: 'organization.duration',
        name: 'organization.duration',
        label: '5.1. Quelle durée vous conviendrait le mieux ?',
        type: 'radio',
        options: [
          { label: 'Une demi-journée', value: 'demi_journee' },
          { label: 'Une journée complète', value: 'journee' },
          { label: 'Deux jours', value: 'deux_jours' },
          { label: 'Un week-end complet', value: 'weekend' }
        ]
      },
      {
        id: 'organization.day',
        name: 'organization.day',
        label: '5.2. Quel jour serait le plus pratique ?',
        type: 'checkbox',
        options: [
          { label: 'Vendredi', value: 'vendredi' },
          { label: 'Samedi', value: 'samedi' },
          { label: 'Dimanche', value: 'dimanche' },
          { label: 'Peu importe', value: 'peu_importe' }
        ]
      },
      {
        id: 'organization.location',
        name: 'organization.location',
        label: '5.3. Quel lieu vous conviendrait le mieux ?',
        type: 'radio',
        options: [
          { label: 'Dakar centre', value: 'dakar_centre' },
          { label: 'Diamniadio', value: 'diamniadio' },
          { label: 'Université / école', value: 'universite' },
          { label: 'Hôtel ou centre de conférence', value: 'hotel' },
          { label: 'Espace de coworking', value: 'coworking' },
          { label: 'Peu importe si le lieu est accessible', value: 'accessible' }
        ]
      },
      {
        id: 'organization.services',
        name: 'organization.services',
        label: '5.4. Quels services sont importants pour vous ?',
        type: 'checkbox',
        options: [
          { label: 'Pauses café', value: 'pauses_cafe' },
          { label: 'Déjeuner', value: 'dejeuner' },
          { label: 'Connexion Wi-Fi', value: 'wifi' },
          { label: 'Prises électriques', value: 'prises' },
          { label: 'Badge participant', value: 'badge' },
          { label: 'Goodies / t-shirt', value: 'goodies' },
          { label: 'Certificat de participation', value: 'certificat' },
          { label: 'Espace networking', value: 'networking' },
          { label: 'Stand entreprises et recruteurs', value: 'stands' },
          { label: 'Espace de prière', value: 'priere' },
          { label: 'Accessibilité pour les personnes à mobilité réduite', value: 'accessibilite' },
          { label: 'Captation vidéo ou replay', value: 'video' }
        ]
      },
      {
        id: 'organization.food_influence',
        name: 'organization.food_influence',
        label: '5.5. La restauration influence-t-elle votre décision de participer ?',
        type: 'radio',
        options: [
          { label: 'Oui, beaucoup', value: 'beaucoup' },
          { label: 'Oui, un peu', value: 'un_peu' },
          { label: 'Non', value: 'non' },
          { label: 'Je préfère un billet moins cher sans restauration', value: 'moins_cher_sans_resto' }
        ]
      }
    ]
  },
  {
    id: 'tickets',
    title: '6. Billetterie et tarification',
    fields: [
      {
        id: 'tickets.ready_to_buy',
        name: 'tickets.ready_to_buy',
        label: '6.1. Si le billet comprend les conférences, les pauses café, le déjeuner et un badge, seriez-vous prêt(e) à acheter une place ?',
        type: 'radio',
        options: [
          { label: 'Oui', value: 'oui' },
          { label: 'Peut-être', value: 'peut_etre' },
          { label: 'Non', value: 'non' }
        ]
      },
      {
        id: 'tickets.max_price',
        name: 'tickets.max_price',
        label: '6.2. Quel prix maximum seriez-vous prêt(e) à payer ?',
        type: 'radio',
        options: [
          { label: 'Gratuit uniquement', value: 'gratuit' },
          { label: '2 500 FCFA', value: '2500' },
          { label: '5 000 FCFA', value: '5000' },
          { label: '7 500 FCFA', value: '7500' },
          { label: '10 000 FCFA', value: '10000' },
          { label: 'Plus de 10 000 FCFA', value: '10000+' }
        ]
      },
      {
        id: 'tickets.ticket_type',
        name: 'tickets.ticket_type',
        label: '6.3. Quel type de billet vous intéresserait ?',
        type: 'radio',
        options: [
          { label: 'Billet étudiant à tarif réduit', value: 'etudiant' },
          { label: 'Billet standard', value: 'standard' },
          { label: 'Billet premium avec avantages', value: 'premium' },
          { label: 'Billet groupe / entreprise', value: 'groupe' },
          { label: 'Pass atelier pratique', value: 'pass_atelier' },
          { label: 'Billet en ligne pour suivre à distance', value: 'en_ligne' }
        ]
      },
      {
        id: 'tickets.payment_method',
        name: 'tickets.payment_method',
        label: '6.4. Quel moyen de paiement préférez-vous ?',
        type: 'checkbox',
        options: [
          { label: 'Wave', value: 'wave' },
          { label: 'Orange Money', value: 'orange_money' },
          { label: 'Free Money', value: 'free_money' },
          { label: 'Carte bancaire', value: 'cb' },
          { label: 'Virement bancaire', value: 'virement' },
          { label: 'Paiement en espèces', value: 'especes' },
          { label: 'Autre', value: 'autre' }
        ]
      }
    ]
  },
  {
    id: 'blockers',
    title: '7. Freins à la participation',
    fields: [
      {
        id: 'blockers.preventing_elements',
        name: 'blockers.preventing_elements',
        label: '7.1. Quels éléments pourraient vous empêcher de participer ?',
        type: 'checkbox',
        options: [
          { label: 'Le prix du billet', value: 'prix' },
          { label: 'Le coût du transport', value: 'transport' },
          { label: 'La distance', value: 'distance' },
          { label: 'La date choisie', value: 'date' },
          { label: 'Mon emploi du temps professionnel', value: 'emploi_du_temps' },
          { label: 'Mes cours ou examens', value: 'cours' },
          { label: 'Le manque d’informations sur le programme', value: 'manque_info' },
          { label: 'Le niveau technique trop élevé', value: 'niveau_eleve' },
          { label: 'Le manque d’ateliers pratiques', value: 'manque_ateliers' },
          { label: 'L’absence de restauration', value: 'absence_resto' },
          { label: 'Je ne connais personne sur place', value: 'connais_personne' },
          { label: 'Autre', value: 'autre' }
        ]
      },
      {
        id: 'blockers.facilitating_solution',
        name: 'blockers.facilitating_solution',
        label: '7.2. Quelle solution faciliterait votre participation ?',
        type: 'radio',
        options: [
          { label: 'Un tarif étudiant', value: 'tarif_etudiant' },
          { label: 'Une réduction early bird', value: 'early_bird' },
          { label: 'Un paiement en plusieurs fois', value: 'paiement_plusieurs_fois' },
          { label: 'Un transport organisé', value: 'transport_organise' },
          { label: 'Une diffusion en ligne', value: 'diffusion_ligne' },
          { label: 'Une attestation pour l’employeur ou l’école', value: 'attestation' },
          { label: 'Un programme publié suffisamment tôt', value: 'programme_tot' },
          { label: 'Autre', value: 'autre' }
        ]
      }
    ]
  },
  {
    id: 'communication',
    title: '8. Communication et inscription',
    fields: [
      {
        id: 'communication.info_channels',
        name: 'communication.info_channels',
        label: '8.1. Où souhaitez-vous recevoir les informations sur l’événement ?',
        type: 'checkbox',
        options: [
          { label: 'WhatsApp', value: 'whatsapp' },
          { label: 'LinkedIn', value: 'linkedin' },
          { label: 'Facebook', value: 'facebook' },
          { label: 'Instagram', value: 'instagram' },
          { label: 'X / Twitter', value: 'twitter' },
          { label: 'Email', value: 'email' },
          { label: 'Communautés Discord / Slack / Telegram', value: 'communautes' },
          { label: 'Écoles et universités', value: 'ecoles' },
          { label: 'Entreprises et espaces de coworking', value: 'entreprises' }
        ]
      },
      {
        id: 'communication.when_program',
        name: 'communication.when_program',
        label: '8.2. Quand aimeriez-vous connaître la date et le programme ?',
        type: 'radio',
        options: [
          { label: 'Au moins 1 mois avant', value: '1_mois' },
          { label: 'Au moins 2 mois avant', value: '2_mois' },
          { label: 'Au moins 3 mois avant', value: '3_mois' },
          { label: 'Le plus tôt possible', value: 'tot' }
        ]
      },
      {
        id: 'communication.opening_notif',
        name: 'communication.opening_notif',
        label: '8.3. Souhaitez-vous être informé(e) de l’ouverture des inscriptions ?',
        type: 'radio',
        options: [
          { label: 'Oui', value: 'oui' },
          { label: 'Non', value: 'non' }
        ]
      }
    ]
  },
  {
    id: 'partners',
    title: '9. Partenariats, emploi et projets',
    fields: [
      {
        id: 'partners.recruitment_space',
        name: 'partners.recruitment_space',
        label: '9.1. Seriez-vous intéressé(e) par un espace recrutement ?',
        type: 'radio',
        options: [
          { label: 'Oui, pour rechercher un emploi', value: 'recherche_emploi' },
          { label: 'Oui, pour rechercher un stage', value: 'recherche_stage' },
          { label: 'Oui, pour recruter', value: 'recruter' },
          { label: 'Oui, pour développer mon réseau', value: 'reseau' },
          { label: 'Non', value: 'non' }
        ]
      },
      {
        id: 'partners.discover_startups',
        name: 'partners.discover_startups',
        label: '9.2. Souhaitez-vous découvrir des projets ou startups Laravel créés au Sénégal ou en Afrique ?',
        type: 'radio',
        options: [
          { label: 'Oui, beaucoup', value: 'oui_beaucoup' },
          { label: 'Oui', value: 'oui' },
          { label: 'Peu importe', value: 'peu_importe' },
          { label: 'Non', value: 'non' }
        ]
      },
      {
        id: 'partners.company_support',
        name: 'partners.company_support',
        label: '9.3. Votre entreprise ou organisation pourrait-elle soutenir l’événement ?',
        type: 'radio',
        options: [
          { label: 'Oui, comme sponsor', value: 'sponsor' },
          { label: 'Oui, comme partenaire média', value: 'partenaire_media' },
          { label: 'Oui, en mettant un lieu à disposition', value: 'lieu' },
          { label: 'Oui, en proposant des speakers', value: 'speakers' },
          { label: 'Peut-être, je souhaite recevoir un dossier de partenariat', value: 'dossier' },
          { label: 'Non', value: 'non' }
        ]
      }
    ]
  },
  {
    id: 'suggestions',
    title: '10. Suggestions finales',
    fields: [
      {
        id: 'suggestions.success_criteria',
        name: 'suggestions.success_criteria',
        label: '10.1. Qu’est-ce qui ferait du Larafest Sénégal 2026 une édition réussie selon vous ?',
        type: 'textarea'
      },
      {
        id: 'suggestions.activity_idea',
        name: 'suggestions.activity_idea',
        label: '10.2. Avez-vous une idée d’activité, d’atelier ou d’animation à proposer ?',
        type: 'textarea'
      },
      {
        id: 'suggestions.remarks',
        name: 'suggestions.remarks',
        label: '10.3. Autres remarques ou suggestions :',
        type: 'textarea'
      }
    ]
  }
];
