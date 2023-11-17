export const routes = {
  stats: '/statistiques',
  campagnes: {
    list: '/campagnes',
    editCampagne: (slug: string) => `/campagnes/${slug}`,
  },
  roles: {
    list: '/utilisateurs',
    editUtilisateur: (slug: string) => `/utilisateurs/${slug}`,
  },
  categories: {
    list: '/categories',
    editCategorie: (slug: string) => `/categories/${slug}`,
  },
  donnees: {
    list: '/donnees',
    editDonnees: (slug: string) => `/donnees/${slug}`,
  },
  signIn: '/signin',
};
