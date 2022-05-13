import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | gif grid', function (hooks) {
  setupApplicationTest(hooks);

  test('should visit / and render a gif grid with at least 50 gif cards', async function (assert) {
    await visit('/');

    assert.dom('[data-test-grid]').exists();
    assert.dom('.gif-card').exists({ count: 50 });
  });
});
