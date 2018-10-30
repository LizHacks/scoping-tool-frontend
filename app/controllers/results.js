import Ember from 'ember';
import { inject } from '@ember/service';
import { get } from '@ember/object';

export default Ember.Controller.extend({
	ajax: inject(),
	init: function() {
		get(this, 'ajax').request('')
	}
});
