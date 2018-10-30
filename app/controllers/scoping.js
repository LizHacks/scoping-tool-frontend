import Ember from 'ember';
import { inject } from '@ember/service';
import { get } from '@ember/object';

export default Ember.Controller.extend({
	state: inject(),
	router: inject(),
  ajax: inject(),

  actions: {
    endScope() {
      get(this, 'ajax').request('/end-session', {
        contentType: 'application/json',
        method: 'POST',
        data: {
          id: get(this, 'state.id')
        }
      })
      .then((res) => {
        get(this, 'router').transitionTo('results', get(this, 'state.id'));
        return res;
      });
  }
}
});
