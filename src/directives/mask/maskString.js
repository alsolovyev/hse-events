/**
 * Formats string according to the specified pattern
 * @params {String} value
 * @params {String} mask
 * @params {Onject} patterns
 * @usage: maskString('07021991', 'XX.XX.XX', {X: /\d/, S: /[1-2]/});
 * @returns: 07.02.1991
 */
export default function maskString(value, mask, maskPatterns) {
  value = value || ''
  mask = mask || '';
  maskPatterns = maskPatterns || {};

  var maskedValue = '';
  var valueParts = value.split('');
  var maskParts = mask.split('');

  while (valueParts.length > 0) {
    var unmaskedChar = valueParts.shift()

    while (unmaskedChar !== null) {
      var maskChar = maskParts.shift();

      if (maskChar !== undefined) {
        var maskPattern = maskPatterns[maskChar.toUpperCase()];

        if (maskPattern !== undefined) {
          var check = false;

          if (typeof maskPattern === 'function') {
            check = maskPattern(unmaskedChar);
          }
          else if (maskPattern instanceof RegExp) {
            check = maskPattern.test(unmaskedChar);
          }

          if (check) {
            maskedValue += unmaskedChar;
          }
          else {
            maskParts.unshift(maskChar);
          }

          unmaskedChar = null;
        }
        else {
          maskedValue += maskChar;
        }
      }
      else {
        unmaskedChar = null;
      }
    }
  }

  return maskedValue;
}