import Ember from 'ember';
import { inject } from '@ember/service';
import { get, set } from '@ember/object';

export default Ember.Controller.extend({
	router: inject(),
	ajax: inject(),
	state: inject(),

	actions: {
		submitScope() {
			return get(this, 'ajax').request('/submit', {
				method: 'POST',
				contentType: 'application/json',
				data: {
					session_id: get(this, 'model.session_id'),
					name: get(this, 'name'),
					value: get(this, 'score')
				}
			})
			.then((res) => {
				get(this, 'router').transitionTo('scoping', get(this, 'model.session_id'));
				return res;
			})
			.catch((error) => {
				return error;
			});
		},

		setScore(score) {
			set(this,'score', score);
		}
	}

});
