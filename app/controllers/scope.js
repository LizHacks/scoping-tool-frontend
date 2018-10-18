import Ember from 'ember';
import { inject } from '@ember/service';
import { get } from '@ember/object';

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
				get(this, 'router').transitionTo('home');
				return res;
			})
			.catch((error) => {
				return error;
			});
		}
	}

});
