import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, triggerEvent } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | gif-grid', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('gifs', [
      {
        title: 'Test',
        rating: 'PG',
        trending_datetime: '24/11/2018',
        images: {
          original: {
            url: 'https://media3.giphy.com/media/6nZBAn0yfZnxIcJJ5g/giphy.gif?cid=de23ef0417nnnnrglpj52fjumeyvjbn1y5u1imzvseoppihx&rid=giphy.gif&ct=g',
          },
        },
      },
    ]);
    await render(hbs`<GifGrid @gifs={{this.gifs}} />`);
    assert.dom('[data-test-grid]').exists();
    assert.dom('[data-test-card]').exists({ count: 1 });

    await triggerEvent('[data-test-card]', 'mouseOver');

    assert.dom('[data-test-card]').hasText('Test Trending at: Invalid Date PG');
  });
});
