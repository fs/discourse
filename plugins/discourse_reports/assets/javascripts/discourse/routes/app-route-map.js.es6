export default function() {
  this.resource('homepageReports', { path: '/homepage' });
  this.resource('termsOfUse', { path: '/terms-of-use' });
  this.resource('supporters', { path: '/supporters' });
  this.resource('privacyPolicy', { path: '/privacy-policy' });
  this.resource('contributors', { path: '/contributors' });
  this.resource('communities', { path: '/communities' });
  this.resource('contact', { path: '/contact' });
  this.resource('about-site', { path: '/about-site' });

  this.resource('topicBySlug', { path: '/:part-slug/:chapter-slug/:slug' });

  // User routes
  this.resource('user', { path: '/users/:username' }, function() {
    this.resource('userActivity', { path: '/activity' }, function() {
      var self = this;
      _.map(Discourse.UserAction.TYPES, function (id, userAction) {
        self.route(userAction, { path: userAction.replace('_', '-') });
      });
    });

    this.route('badges');
    this.route('notifications');
    this.route('recipes');

    this.route('flaggedPosts', { path: '/flagged-posts' });
    this.route('deletedPosts', { path: '/deleted-posts' });

    this.resource('userPrivateMessages', { path: '/private-messages' }, function() {
      this.route('mine');
      this.route('unread');
    });

    this.resource('preferences', function() {
      this.route('username');
      this.route('email');
      this.route('about', { path: '/about-me' });
      this.route('badgeTitle', { path: '/badge_title' });
      this.route('card-badge', { path: '/card-badge' });
    });

    this.route('invited');
  });
};
