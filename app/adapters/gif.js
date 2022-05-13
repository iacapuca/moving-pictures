import ApplicationAdapter from './application';

export default class GifAdapter extends ApplicationAdapter {
  urlForFindAll(...args) {
    const baseUrl = super.urlForFindAll(...args);
    return `${baseUrl}/trending`;
  }
}
