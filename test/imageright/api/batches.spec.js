// import { expect } from 'chai'; // eslint-disable-line import/no-extraneous-dependencies
// import Library from '../../../src';
import Recorder from '../../../scripts/recorder';

const rec = new Recorder('batches');

// const baseurl = process.env.IMAGERIGHT_BASEURL || 'https://localhost:8093';
// const username = process.env.IMAGERIGHT_USERNAME || '<username>';
// const password = process.env.IMAGERIGHT_PASSWORD || '<password>';

// let lib;

describe('ImageRight API - Batches', () => {
  before(() => {
    rec.before();
    // lib = new Library(baseurl).connect(username, password);
  });

  after((done) => {
    rec.after(done);
  });

  describe('the method createBatch', () => {
    it('should create a batch');
  });
});
