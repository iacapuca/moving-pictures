import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'moving-pictures/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = 'https://api.giphy.com';
  namespace = 'v1';

  ajaxOptions(url, method, options) {
    options.data ??= {};
    options.data.api_key = ENV.API_KEY;
    return super.ajaxOptions(...arguments);
  }
}
