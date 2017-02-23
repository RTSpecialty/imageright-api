import { expect } from 'chai'; // eslint-disable-line import/no-extraneous-dependencies
import Library from '../../src';
import Recorder from '../../scripts/recorder';

const rec = new Recorder('objecttypes');

const baseurl = process.env.IMAGERIGHT_BASEURL || 'https://localhost:8093';
const username = process.env.IMAGERIGHT_USERNAME || '<username>';
const password = process.env.IMAGERIGHT_PASSWORD || '<password>';


// const typeId = '2376';
const objectId = '5738532';
const fileTypeId = '1886';

let lib;

describe('ImageRight API - ObjectTypes', () => {
  before(() => {
    rec.before();
    lib = new Library(baseurl).connect(username, password);
  });

  after((done) => {
    rec.after(done);
  });

  // describe('the method getAllowedTypes', () => {
  //   it('should return an array of type objects',
  //     () => lib.then(api => api.getAllowedTypes(typeId)
  //       .then(data => expect(data).to.be.instanceof(Array))));
  // });

  describe('the method getAllowedTypesForContainer', () => {
    it('should return an array of type objects',
      () => lib.then(api => api.getAllowedTypesForContainer(objectId)
        .then(data => expect(data).to.be.instanceof(Array))));
  });

  describe('the method getFileTypeExtensions', () => {
    it('should return an array of type objects',
      () => lib.then(api => api.getFileTypeExtensions(fileTypeId)
        .then(data => expect(data).to.exist)));
  });

  describe('the method getFileTypeTemplate', () => {
    it('should return an array of type objects',
      () => lib.then(api => api.getFileTypeTemplate(fileTypeId)
        .then(data => expect(data).to.exist)));
  });
});


//
// getAttributeDefinitionsForType(objectTypeId) {
//   return objecttypes.getAttributeDefinitionsForType(this.api, objectTypeId);
// }
// getObjectType(objectTypeId) {
//   return objecttypes.getObjectType(this.api, objectTypeId);
// }
// getSortOptionsForType(objectTypeId) {
//   return objecttypes.getSortOptionsForType(this.api, objectTypeId);
// }
// getTypesForClass(standardObjectClass) {
//   return objecttypes.getTypesForClass(this.api, standardObjectClass);
// }
