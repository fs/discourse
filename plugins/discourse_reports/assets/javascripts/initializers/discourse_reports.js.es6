var PREFIX = 'discourse/plugins/Discourse reports/discourse/';
var ADMIN_PREFIX = 'discourse/plugins/Discourse reports/admin/';

export default {
  name: 'apply-discourse-reports',

  initialize: function(container) {
    require(PREFIX + 'components/bread-crumbs').default;

    require(PREFIX + 'controllers/user/index').default;
    require(PREFIX + 'controllers/composer').default;
    require(PREFIX + 'controllers/homepage').default;
    require(PREFIX + 'controllers/quote-button').default;
    require(PREFIX + 'controllers/topic').default;

    require(PREFIX + 'models/composer').default;
    require(PREFIX + 'models/topic').default;

    require(PREFIX + 'routes/application').default;
    require(PREFIX + 'routes/discovery-homepage').default;
    require(PREFIX + 'routes/login').default;
    require(PREFIX + 'routes/signup').default;
    require(PREFIX + 'routes/user-index').default;

    require(PREFIX + 'views/login').default;
    require(PREFIX + 'views/post').default;
    require(PREFIX + 'views/signup').default;
    require(PREFIX + 'views/topic').default;
    require(PREFIX + 'views/terms-of-use').default;
    require(PREFIX + 'views/supporters').default;
    require(PREFIX + 'views/contributors').default;
    require(PREFIX + 'views/privacy-policy').default;
    require(PREFIX + 'views/communities').default;
    require(PREFIX + 'views/contact').default;
    require(PREFIX + 'views/about-site').default;

    require(ADMIN_PREFIX + 'controllers/admin-toc').default;
    require(ADMIN_PREFIX + 'controllers/admin-part').default;
    require(ADMIN_PREFIX + 'controllers/admin-chapter').default;

    require(ADMIN_PREFIX + 'models/part').default;
    require(ADMIN_PREFIX + 'models/chapter').default;

    require(ADMIN_PREFIX + 'routes/admin-toc').default;

    require(ADMIN_PREFIX + 'views/admin-toc').default;
    require(ADMIN_PREFIX + 'views/admin-part').default;
    require(ADMIN_PREFIX + 'views/admin-chapter').default;
  }
};
