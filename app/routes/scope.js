import Ember from 'ember';
import { inject } from '@ember/service';
import { get } from '@ember/object';

export default Ember.Route.extend({
	router: inject(),
	ajax: inject(),

	model(params) {
		return get(this, 'ajax').request(`/get-session-details/${params.id}`, {
			method: 'GET',
		});
	},
	actions: {
		scoreToggled(choice) {
			this.controller.set('score', choice);
		}
	},
});
