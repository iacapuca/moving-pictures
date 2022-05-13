import Model, { attr } from '@ember-data/model';

export default class GifModel extends Model {
  @attr title;
  @attr trending_datetime;
  @attr images;
  @attr rating;
}
