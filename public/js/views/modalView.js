define (function (require) {
	var Thorax = require('thorax');
	var template = require('hbs!templates/modalLayout');
	
	var ModalView = Thorax.View.extend ({

		el: "#animalModal",

		initialize: function () {
			this.render();
		},
		
		template: template
	
	});
	
	return ModalView;

});