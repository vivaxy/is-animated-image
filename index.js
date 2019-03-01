module.exports = function getImageMeta(buffer) {
  if (!buffer instanceof Uint8Array) {
    buffer = new Uint8Array(buffer);
  }
  if (check(buffer, [0xFF, 0xD8, 0xFF])) {
    return {
      ext: 'jpg',
      mime: 'image/jpeg',
      animated: false,
    };
  }
  if (check(buffer, [0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A])) {
    // apng has `61 63 54 4C` before first `00 00 00 08`
    if (findIndex(buffer, [0x61, 0x63, 0x54, 0x4C]) === -1) {
      return {
        ext: 'png',
        mime: 'image/png',
        animated: false,
      };
    }
    return {
      ext: 'png',
      mime: 'image/png',
      animated: true,
    };
  }
  if (check(buffer, [0x47, 0x49, 0x46])) {
    return {
      ext: 'gif',
      mime: 'image/gif',
      animated: true,
    };
  }
  if (check(buffer, [0x57, 0x45, 0x42, 0x50], 8)) {
    if (findIndex(buffer, [0x41, 0x4E, 0x49, 0x4D]) === -1) {
      return {
        ext: 'webp',
        mime: 'image/webp',
        animated: false,
      };
    }
    return {
      ext: 'webp',
      mime: 'image/webp',
      animated: true,
    };
  }
  return null;
};

function check(buffer, codes, offset) {
  offset = offset || 0;
  for (var i = 0; i < codes.length; i++) {
    if (buffer[i + offset] !== codes[i]) {
      return false;
    }
  }
  return true;
}

function findIndex(buffer, codes, from, to) {
  from = from || 0;
  to = to || buffer.length;

  outer: for (var i = from; i < to; i++) {
    for (var j = 0; j < codes.length; j++) {
      if (buffer[i + j] !== codes[j]) {
        continue outer;
      }
    }
    return i;
  }
  return -1;
}
