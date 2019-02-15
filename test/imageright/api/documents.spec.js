import { expect } from 'chai'; // eslint-disable-line import/no-extraneous-dependencies
import Library from '../../../src';
import Recorder from '../../../scripts/recorder';

const rec = new Recorder('documents');

const baseurl = process.env.IMAGERIGHT_BASEURL || 'https://localhost:8093';
const username = process.env.IMAGERIGHT_USERNAME || '<username>';
const password = process.env.IMAGERIGHT_PASSWORD || '<password>';

const search = { FileId: 5738532 };

let lib;

describe('ImageRight API - Documents', () => {
  before(() => {
    rec.before();
    lib = new Library(baseurl).connect(username, password);
  });

  after((done) => {
    rec.after(done);
  });

  describe('the method findDocuments', () => {
    it('should return an array of document objects', () =>
      lib.then((api) =>
        api.findDocuments(search).then((data) => expect(data).to.be.instanceof(Array))
      ));
  });
});
