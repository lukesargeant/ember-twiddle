'use strict';

module.exports = function(environment) {
  var deployTarget = process.env.DEPLOY_TARGET;
  var rootURL = process.env.TWIDDLE_ROOT_URL || '/';
  var host = process.env.GH_API_HOST || 'https://api.github.com';
  var toriiGHEBaseURL = process.env.TORII_GHE_OAUTH || null;
  var toriiProvider = process.env.TORII_PROVIDER || 'github-oauth2';
  var githubOauthURL = process.env.GATEKEEPER_URL || 'http://localhost:9999/authenticate/';
  var assetsHost = process.env.TWIDDLE_ASSET_HOST || '/';
  var githubApiKey = process.env.GH_API_KEY || '2b84ab967ef8266ca0dc'

  var ENV = {
    modulePrefix: 'ember-twiddle',
    environment,
    rootURL,
    locationType: 'auto',
    host: host,
    githubOauthUrl: githubOauthURL,
    githubApiKey: githubApiKey,
    addonUrl: 'https://emw2ujz4u1.execute-api.us-east-1.amazonaws.com/canary/addon',
    assetsHost: assetsHost,
    maxNumFilesInitiallyExpanded: 12,
    toriiProvider: toriiProvider,
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse
        Date: false
      }
    },


    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      rootElement: '#main-app'
    },

    torii: {
      sessionServiceName: 'session',
      providers: {}
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.rootURL = '/',
    ENV.assetsHost = '/',

    ENV['ember-cli-mirage'] = {
      enabled: false
    };
  }

  if (environment === 'test') {
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';

    ENV.APP.autoboot = false;
    ENV.host = undefined;
  }

  if (deployTarget === 'production') {
    ENV.githubOauthUrl = process.env.GATEKEEPER_URL || 'https://ember-twiddle.herokuapp.com/authenticate/';
    ENV.assetsHost = process.env.TWIDDLE_ASSET_HOST || '//assets.ember-twiddle.com/';
    ENV.githubApiKey = process.env.GH_API_KEY || '3df37009938c0790d952'
    // we only need to set the baseUrl if we are using GH Enterprise
    if( toriiGHEBaseURL ) {
      ENV.torii.providers[toriiProvider].baseUrl = toriiGHEBaseURL;
    }
    ENV.addonUrl = "https://howq105a2c.execute-api.us-east-1.amazonaws.com/production/addon";
  }

  // staging to GH Enterprise is not currently supported.
  if (deployTarget === 'staging') {
    ENV.githubOauthUrl = 'https://canary-twiddle-gatekeeper.herokuapp.com/authenticate/';
    ENV.assetsHost = '//canary-assets.ember-twiddle.com/';
    ENV.githubApiKey = '085e033505c9d26ec27a';
  }

  ENV.torii.providers[toriiProvider] = {
    scope: 'gist',
    apiKey: ENV.githubApiKey
  }

  return ENV;
};
