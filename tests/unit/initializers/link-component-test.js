import {module, test} from 'qunit';
import Ember from 'ember';
import { initialize } from 'coretheloothound/initializers/link-component';

var container, application;

module('LinkComponentInitializer', {
  beforeEach: function() {
    Ember.run(function() {
      container = new Ember.Container();
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  initialize(container, application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
