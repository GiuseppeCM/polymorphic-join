var path = require('path');

var apos = require('apostrophe')({
  shortName: 'polymorphic-join',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user accounts.

  modules: {
    'apostrophe-db': {
      uri: 'mongodb://localdocker:27018'
    },
    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },
    'a-types': { extend: 'apostrophe-pieces' },
    'b-types': { extend: 'apostrophe-pieces' },
    'c-types': { extend: 'apostrophe-pieces' },
    'd-types': { extend: 'apostrophe-pieces' },
    'e-types': { extend: 'apostrophe-pieces' },
    'f-types': { extend: 'apostrophe-pieces' },
    'all-types-widgets': { extend: 'apostrophe-widgets' }

  }
});
