import Ember from 'ember';
import { inject } from '@ember/service';
import { get } from '@ember/object';

export default Ember.Route.extend({
	ajax: inject(),

	model(params) {
		return get(this, 'ajax').request(`/get-session-result/${params.id}`);
	}
});
