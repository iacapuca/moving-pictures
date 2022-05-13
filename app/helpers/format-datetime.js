import { helper } from '@ember/component/helper';

export default helper(function formatDatetime(positional /*, named*/) {
  return new Date(positional).toLocaleString(navigator.language);
});
