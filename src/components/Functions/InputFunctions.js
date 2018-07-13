export function hasAtCharacter(str) {
  return /[@]/g.test(str);
}

export function hasSpecialCharacters(str) {
  return /[~`!#@$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
}

export function hasWhiteSpace(string) {
  return /\s/g.test(string);
}

export function onlyAlphabetsNumbersAndUnderline(str) {
  var regexp = /^[a-zA-Z0-9-_]+$/;
  return str.search(regexp);
}

export function isPasswordValid(password) {
  if (password.length < 8 || hasWhiteSpace(password)) {
    return false;
  } else {
    return true;
  }
}

export function isUsernameValid(username) {
  if (
    username.length > 15 ||
    hasSpecialCharacters(username) ||
    hasWhiteSpace(username) ||
    username.length < 5
  ) {
    return false;
  } else {
    return true;
  }
}

export function usernameToLower(username) {
  return username.toString().toLowerCase();
}

/* taken from StackOverflow. LINK:
 * https://stackoverflow.com/questions/4434076/best-way-to-alphanumeric-check-in-javascript
 */

export function isAlphaNumeric(str) {
  var code = 0;
  var i = 0;
  var len = 0;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (
      !(code > 47 && code < 58) && // numeric (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123)
    ) {
      // lower alpha (a-z)
      return false;
    }
  }
  return true;
}
