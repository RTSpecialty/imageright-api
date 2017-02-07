import { expect } from 'chai'; // eslint-disable-line import/no-extraneous-dependencies
import Library from '../../src';
import Recorder from '../../scripts/recorder';

const rec = new Recorder('attributes');

const baseurl = process.env.IMAGERIGHT_BASEURL || 'https://localhost:8093';
const username = process.env.IMAGERIGHT_USERNAME || '<username>';
const password = process.env.IMAGERIGHT_PASSWORD || '<password>';

const objId = 2377;
// const attId = 387;
const attName = 'GlobalFunctionsPath';

let lib;

describe('ImageRight API - Attributes', () => {
  before(() => {
    rec.before();
    lib = new Library(baseurl).connect(username, password);
  });

  after((done) => {
    rec.after(done);
  });

  // describe('the method getAttributeById', () => {
  //   it('should return an attibute object given a valid object ID and attribute ID',
  //     () => lib.then(api => api.getAttributeById(objId, attId)
  //       .then(data => expect(data).to.exist)));
  // });

  describe('the method getAttributeByName', () => {
    it('should return an attibute object given a valid object ID and attribute name',
      () => lib.then(api => api.getAttributeByName(objId, attName)
        .then(data => expect(data).to.exist)));
  });

  describe('the method getAttributeByObject', () => {
    it('should return an array of attribute objects given a valid object ID',
      () => lib.then(api => api.getAttributeByObject(objId)
        .then(data => expect(data).to.be.instanceof(Array))));
  });
});
