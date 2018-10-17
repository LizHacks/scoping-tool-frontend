import Ember from 'ember';
import { inject } from '@ember/service';
import { get } from '@ember/object';

export default Ember.Route.extend({
	poll: inject(),
	ajax: inject(),

	model: function(params) {
		return get(this, 'ajax').request( `/get-response-count/${params.id}`, {});
	},

	actions: {
		didTransition() {
			let pollFunction = () => this.refresh();
			let pollId = this.get('poll').addPoll({
				interval: 5 * 1000, // one minute
				callback: pollFunction
			});

			this.set('pollId', pollId);
		},


		willTransition() {
			let pollId = this.get('pollId');
			this.get('poll').stopPoll(pollId);
		}
	}
});
