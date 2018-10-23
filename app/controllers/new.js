import Ember from 'ember';
import { inject } from '@ember/service';
import { get, set } from '@ember/object';

export default Ember.Controller.extend({

	state: inject(),
	ajax: inject(),
	router: inject(),
	isDisabled: false,
	buttonText: 'Summon the underlings!',
	isLoading: '',
	scopeDescription: '',
	scopeTopic: '',

	actions: {

		startSession() {
			set(this, 'isLoading', 'is-loading');
			get(this, 'ajax').request('/create-new-session', {
				method: 'POST',
				contentType: 'application/json',
				data: {
					title: get(this, 'scopeTopic'),
					description: get(this, 'scopeDescription')
				}
			})
			.then((res) => {
				set(this, 'isLoading', '');
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
				set(this, 'isDisabled', true);
				set(this, 'buttonText', 'Pls refresh pls');
				set(this, 'isLoading', 'is-danger is-disabled');
				return error;
			});
		},

		clearForm() {
			get(this, 'router').transitionTo('home');
		}

	}
});
