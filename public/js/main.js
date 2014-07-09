requirejs.config({
  urlRoot: '/js',

  paths: {
    'jquery': 'lib/jquery-2.1.0',
    'backbone': 'lib/backbone',
    'bootstrap': 'lib/bootstrap',
    'thorax': 'lib/thorax',
    'underscore': 'lib/underscore',
    'hbs': 'lib/require-handlebars-plugin/hbs',
    'templates': '../templates'
  },

  shim: {
    'thorax': {
      deps: ['backbone', 'lib/globalHandlebars'],
      exports: 'Thorax'
    },

		'bootstrap': {
			deps: ['jquery']
		}
	},

  hbs: {
    compileOptions: {
      data: true
    }
  }

});

require(['bootstrap', 'app']);