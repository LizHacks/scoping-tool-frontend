import Ember from 'ember';
import { inject } from '@ember/service';
import { get, set } from '@ember/object';

export default Ember.Controller.extend({

	state: inject(),
	ajax: inject(),
	router: inject(),

	scopeDescription: '',
	scopeTopic: '',

	actions: {

		startSession() {
			get(this, 'ajax').request('/create-new-session', {
				method: 'POST',
				contentType: 'application/json',
				data: {
					title: get(this, 'scopeTopic'),
					description: get(this, 'scopeDescription')
				}
			})
			.then((res) => {
				get(this, 'state').setProperties({
					'scopingUrl': res.url,
					'id': res.id,
					'created_at': res.created_at,
					'scopeTopic': get(this, 'scopeTopic'),
					'scopeDescription': get(this, 'scopeDescription')
				});
				get(this, 'router').transitionTo('scoping', res.id);
				return res;
			})
			.catch((error) => {
				return error;
			});
		},

		clearForm() {
			set(this, 'scopeTopic', '');
			set(this, 'scopeDescription', '');
		}

	}
});
