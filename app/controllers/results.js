import Ember from 'ember';
import { inject } from '@ember/service';
import { get } from '@ember/object';

export default Ember.Controller.extend({
	ajax: inject(),

	init: function() {
		console.log(get(this, 'model'));
		get(this, 'ajax').request('')
	}
});
