/**
 * @since 2019-03-01 16:14
 * @author vivaxy
 */
const path = require('path');
const fse = require('fs-extra');
const glob = require('fast-glob');
const getFileMeta = require('../index.js');

const types = {
  ANIMATED: 0,
  STATIC: 1,
  NOT_RECOGNIZED: 2,
};
const fixturesDir = path.join(__dirname, 'fixtures');

test('all', async function () {
  const filenames = await glob('*', {
    cwd: fixturesDir,
  });
  for (let i = 0; i < filenames.length; i++) {
    const filename = filenames[i];
    const filenameWOExt = path.basename(filename, path.extname(filename));
    const splits = filenameWOExt.split('-');
    if (splits.length !== 2) {
      throw new Error('Error fixture: filename should be `type-ext.xx`');
    }
    let type = types.NOT_RECOGNIZED;
    if (splits[0].includes('animated')) {
      type = types.ANIMATED;
    } else if (splits[0].includes('static')) {
      type = types.STATIC;
    }
    const ext = splits[1];
    const buffer = await fse.readFile(path.join(fixturesDir, filename));
    const result = getFileMeta(buffer);
    expect(type === types.NOT_RECOGNIZED).toBe(result === null);
    if (result) {
      expect(result.ext).toBe(ext);
      expect(result.animated).toBe(type === types.ANIMATED);
    }
  }
});
