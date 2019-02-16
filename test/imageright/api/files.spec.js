import { expect } from 'chai'; // eslint-disable-line import/no-extraneous-dependencies
import Library from '../../../src';
import Recorder from '../../../scripts/recorder';

const rec = new Recorder('files');

const baseurl = process.env.IMAGERIGHT_BASEURL || 'https://localhost:8093';
const username = process.env.IMAGERIGHT_USERNAME || '<username>';
const password = process.env.IMAGERIGHT_PASSWORD || '<password>';

const search = { FileNumberPart1: 'WG165500' };

let lib;

describe('ImageRight API - Files', () => {
  before(() => {
    rec.before();
    lib = new Library(baseurl).connect(username, password);
  });

  after((done) => {
    rec.after(done);
  });

  describe('the method createFile', () => {
    it('should create a file');
  });

  describe('the method findFiles', () => {
    it('should return an array of file objects', () =>
      lib.then((api) =>
        api.findFiles(search).then((data) => expect(data).to.be.instanceof(Array))
      ));
  });

  describe('the method getFileById', () => {
    it('should get a file');
  });

  describe('the method getRelatedFiles', () => {
    it('should get an array of related files');
  });
});
