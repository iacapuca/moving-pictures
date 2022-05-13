import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | format-datetime', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('inputValue', '2022-05-10 04:36:44');

    await render(hbs`{{format-datetime this.inputValue}}`);

    assert.dom(this.element).hasText('10/05/2022 04:36:44');
  });
});
