import Ember from 'ember';
import { inject } from '@ember/service';
import { get } from '@ember/object';

export default Ember.Controller.extend({
	state: inject(),
	router: inject(),

	actions: {
		endScope() {
			get(this, 'router').transitionTo('results', get(this, 'state.id'));
		}
	}
});
