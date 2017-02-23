import { expect } from 'chai'; // eslint-disable-line import/no-extraneous-dependencies
import Library from '../../src';
import Recorder from '../../scripts/recorder';

const rec = new Recorder('images');

const baseurl = process.env.IMAGERIGHT_BASEURL || 'https://localhost:8093';
const username = process.env.IMAGERIGHT_USERNAME || '<username>';
const password = process.env.IMAGERIGHT_PASSWORD || '<password>';

const imageId = 28226516;
const version = 0;

let lib;

describe('ImageRight API - Images', () => {
  before(() => {
    rec.before();
    lib = new Library(baseurl).connect(username, password);
  });

  after((done) => {
    rec.after(done);
  });

  describe('the method getImageById', () => {
    it('should return a image object',
      () => lib.then(api => api.getImageById(imageId, version)
        .then(data => expect(data).to.exist)));
  });
});
