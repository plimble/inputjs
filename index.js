var joi = require('joi');

module.exports = function InputJS(data, schema) {
  var valid = joi.validate(data, schema, {stripUnknown: true});

  this.schema = function() {
    return schema;
  };
  this.validateError = function() {
    return valid.error;
  };
  var keys = Object.keys(valid.value);
  var len = keys.length;
  var i = 0;

  while (i < len) {
    this[keys[i]] = data[keys[i]];
    i++;
  }
}
