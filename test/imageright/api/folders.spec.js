import { expect } from 'chai'; // eslint-disable-line import/no-extraneous-dependencies
import Library from '../../../src';
import Recorder from '../../../scripts/recorder';

const rec = new Recorder('folders');

const baseurl = process.env.IMAGERIGHT_BASEURL || 'https://localhost:8093';
const username = process.env.IMAGERIGHT_USERNAME || '<username>';
const password = process.env.IMAGERIGHT_PASSWORD || '<password>';

const search = { FileId: 5738532 };

let lib;

describe('ImageRight API - Folders', () => {
  before(() => {
    rec.before();
    lib = new Library(baseurl).connect(username, password);
  });

  after((done) => {
    rec.after(done);
  });

  describe('the method findFolders', () => {
    it('should return an array of file objects', () =>
      lib.then((api) =>
        api.findFolders(search).then((data) => expect(data).to.be.instanceof(Array))
      ));
  });
});
