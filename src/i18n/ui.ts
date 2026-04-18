export const languages = {
  fr: 'Français',
  en: 'English',
};

export const defaultLang = 'fr';

export const ui = {
  fr: {
    'nav.blog': 'Blog',
    'nav.about': 'À propos',
    'home.title': 'FAILSAFE.',
    'home.subtitle': 'Évaluer, Invalider, Fiabiliser.',
    'home.desc': "Un espace dédié à l'ingénierie de la fiabilité pour les systèmes IA et RAG. Mettre à l'épreuve les modèles pour garantir leur intégrité technique.",
    'home.recent': 'Articles récents',
    'home.none': 'Aucun article publié pour le moment.',
    'post.readingTime': 'min de lecture',
    'post.back': 'Retour au journal',
    'footer.by': 'Par',
  },
  en: {
    'nav.blog': 'Blog',
    'nav.about': 'About',
    'home.title': 'FAILSAFE.',
    'home.subtitle': 'Evaluate, Invalidate, Reliable.',
    'home.desc': 'A space dedicated to reliability engineering for AI and RAG systems. Stress-testing models to guarantee technical integrity.',
    'home.recent': 'Recent Posts',
    'home.none': 'No posts published yet.',
    'post.readingTime': 'min read',
    'post.back': 'Back to journal',
    'footer.by': 'By',
  },
} as const;
