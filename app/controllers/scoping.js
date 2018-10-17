import Ember from 'ember';
import { inject } from '@ember/service';
import { get, set } from '@ember/object';

export default Ember.Controller.extend({
	state: inject(),
});
