import AuthLogo from './extensions/logo.png';
import MenuLogo from './extensions/logo.png';
import favicon from './extensions/favicon.ico';

export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: AuthLogo,
    },
   // Replace the favicon
    head: {
      favicon: favicon,
    },
    // Add a new locale, other than 'en'
    locales: ['sr', 'en'],
    // Replace the Strapi logo in the main navigation
    menu: {
      logo: MenuLogo,
    },
    // Override or extend the theme
    theme: {
      colors: {
        alternative100: '#f6ecfc',
        alternative200: '#e0c1f4',
        alternative500: '#ac73e6',
        alternative600: '#9736e8',
        alternative700: '#8312d1',
        danger700: '#b72b1a'
      },
    },
    // Extend the translations
    translations: {
      sr: {
        'Auth.form.email.label': 'test',
        Users: 'Utilisateurs',
        City: 'CITY (SERBIAN)',
        // Customize the label of the Content Manager table.
        Id: 'ID serbian',
      },
      en: {
        "app.components.LeftMenu.navbrand.title": "Nar events Dashboard",
        "app.components.LeftMenu.navbrand.workplace": "Nar Events",
      }
    },
   // Disable video tutorials
    tutorials: false,
   // Disable notifications about new Strapi releases
    notifications: { release: false },
  },

  bootstrap() {
  },
};
