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
			get(this, 'ajax').request('/test-url', {
				method: 'POST',
				data: {
					title: get(this, 'scopeTopic'),
					description: get(this, 'scopeDescription')
				}
			})
			.then((res) => {
				get(this, 'state').setProperties({
					'scopingUrl': res.created.url,
					'id': res.created.id,
					'created_at': res.created.created
				});
				get(this, 'router').transitionTo('scoping', res.created.id);
				return res;
			})
			.catch((error) => {
				get(this, 'router').transitionTo('scoping', 'testing');
				return error;
			});
		},

		clearForm() {
			set(this, 'scopeTopic', '');
			set(this, 'scopeDescription', '');
		}

	}
});
