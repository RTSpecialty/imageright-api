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

  describe('the method createDocument', () => {
    it('should create a document');
  });

  describe('the method findDocuments', () => {
    it('should return an array of document objects', () =>
      lib.then((api) =>
        api.findDocuments(search).then((data) => expect(data).to.be.instanceof(Array))
      ));
  });

  describe('the method getDocumentById', () => {
    it('should get a document by id');
  });

  describe('the method moveDocument', () => {
    it('should move a document');
  });

  describe('the method updateProperties', () => {
    it('should update properties of a document');
  });

  describe('the method copyDocument', () => {
    it('should copy a document');
  });

  describe('the method deleteDocument', () => {
    it('should delete a document');
  });

  describe('the method moveDocumentV2', () => {
    it('should move a document');
  });
});
