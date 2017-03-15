import { expect } from 'chai'; // eslint-disable-line import/no-extraneous-dependencies
import FormData from 'form-data';
import concat from 'concat-stream'; // eslint-disable-line import/no-extraneous-dependencies
import fs from 'fs';
import Library from '../../src';
import Recorder from '../../scripts/recorder';

// const rec = new Recorder('pages', { reset: true, reqheaders: true });
const rec = new Recorder('pages');

const baseurl = process.env.IMAGERIGHT_BASEURL || 'https://localhost:8093';
const username = process.env.IMAGERIGHT_USERNAME || '<username>';
const password = process.env.IMAGERIGHT_PASSWORD || '<password>';

const pageId = 27990255;
const docId = 5738548;
const newPage = new Promise((resolve) => {
  const fd = new FormData();
  fd.append('PageCreateData', JSON.stringify({ docId: 5738548 }), { contentType: 'application/json' });
  fd.append('image0', fs.createReadStream('test/samples/sample.pdf'), 'sample.pdf');
  fd.pipe(concat({ encoding: 'buffer' }, data => resolve({ data, headers: fd.getHeaders() })));
});

let lib;

describe('ImageRight API - Pages', () => {
  before(() => {
    rec.before();
    lib = new Library(baseurl).connect(username, password);
  });

  after((done) => {
    rec.after(done);
  });

  describe('the method checkReadPermissions', () => {
    it('should return a permission object',
      () => lib.then(api => api.checkReadPermissions(pageId)
        .then(data => expect(data).to.exist)));
  });

  // describe('the method createPage', () => {
  //   it('should return a page object',
  //     () => lib.then(api => newPage.then(page => api.createPage(page))
  //       .then(res => expect(res).to.exist)));
  // });

  describe('the method getAllPagesFromDocument', () => {
    it('should return an array of page objects',
      () => lib.then(api => api.getAllPagesFromDocument(docId)
        .then(data => expect(data).to.be.instanceof(Array))));
  });
});
