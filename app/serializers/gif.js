import JSONAPISerializer from '@ember-data/serializer/json-api';
import { underscore } from '@ember/string';

export default class GifSerializer extends JSONAPISerializer {
  normalize(typeClass, hash) {
    hash.attributes = {};

    typeClass.fields.forEach((type, field) => {
      hash.attributes[field] = hash[field];
    });

    return super.normalize(...arguments);
  }

  keyForAttribute(attr) {
    return underscore(attr);
  }
}
