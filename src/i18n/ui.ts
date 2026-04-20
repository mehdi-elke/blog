export const languages = {
  fr: 'Français',
  en: 'English',
};

export const defaultLang = 'fr';

export const ui = {
  fr: {
    'nav.blog': 'Blog',
    'nav.about': 'À propos',
    'home.title': 'Open Drafts.',
    'home.subtitle': 'Explorer, partager, découvrir.',
    'home.desc': "Un carnet d'exploration technique pour partager mes apprentissages et réflexions, du code à la science.",
    'home.recent': 'Articles récents',
    'home.none': 'Aucun article publié pour le moment.',
    'post.readingTime': 'min de lecture',
    'post.back': 'Retour au journal',
    'footer.by': 'Par',
  },
  en: {
    'nav.blog': 'Blog',
    'nav.about': 'About',
    'home.title': 'Open Drafts.',
    'home.subtitle': 'Explore, share, discover.',
    'home.desc': 'A technical exploration journal to share my learnings and thoughts, from code to science.',
    'home.recent': 'Recent Posts',
    'home.none': 'No posts published yet.',
    'post.readingTime': 'min read',
    'post.back': 'Back to journal',
    'footer.by': 'By',
  },
} as const;
