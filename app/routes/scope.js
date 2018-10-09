import Ember from 'ember';
import { inject } from '@ember/service';
import { get } from '@ember/object';

export default Ember.Route.extend({

	ajax: inject(),

	model( /* params */ ) {
		// return get(this, 'ajax').request(`/scope?id=${params}`, {
		// 	method: 'GET'
		// })
		// .then((res) => res.result )
		// .catch((error) => {
		// 	throw error;
		// });

		return {
      title: "A Feature",
      message: "This is a message description",
      created_at: "1234567890",
      expires: "9999999999"
    };
  }
});
