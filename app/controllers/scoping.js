import Ember from 'ember';
import { inject } from '@ember/service';

export default Ember.Controller.extend({
	state: inject(),
});
