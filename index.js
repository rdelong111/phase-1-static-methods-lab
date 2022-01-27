class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    let array = string.split(' ');
    const excepts = {
      'the': true,
      'a': true,
      'an': true,
      'but': true,
      'of': true,
      'and': true,
      'for': true,
      'at': true,
      'by': true,
      'from': true
    };
    for (let i = 0; i < array.length; i++) {
      if (!(array[i] in excepts) || i === 0) {
        array[i] = array[i][0].toUpperCase() + array[i].slice(1);
      }
    }
    return array.join(' ');
  }
}