define(function (require) {

	var Thorax = require('thorax');
	var Animal = require('models/animalModal');
	var ModalView = require('views/modalView');
	var $ = require('jquery');

	$(function() {
		var app = {};
		var 


		function createAnimal (animalObject) {
			for (var i = 0; i < animalObject.animalList.length; i++) {
				if (animalObject.animalList[i].name {
					var animal = new Animal();
					animal.set({
						animalModal: animalObject.animalList[i].animalModal,
			      animalname: animalObject.animalList[i].animalName,
			      animal1: animalObject.animalList[i].animal1,
			      animal2: animalObject.animalList[i].animal2,
			      animal3: animalObject.animalList[i].animal3,
			      animal1Alt: animalObject.animalList[i].animal1Alt, 
			      animal2Alt: animalObject.animalList[i].animal2Alt,
			     	animal3Alt: animalObject.animalList[i].animal3Alt
					});
					animalList.add(animal);
				}
			}
		}
	});
});