const extract = (str, pattern) => (str.match(pattern) || []).pop() || '';
export function removeWhiteSpace(str) {
    return extract(str, '/^\S*$/;');
  }