import { expect } from 'chai'; // eslint-disable-line import/no-extraneous-dependencies
import Library from '../../../src';
import Recorder from '../../../scripts/recorder';

const rec = new Recorder('objecttypes');

const baseurl = process.env.IMAGERIGHT_BASEURL || 'https://localhost:8093';
const username = process.env.IMAGERIGHT_USERNAME || '<username>';
const password = process.env.IMAGERIGHT_PASSWORD || '<password>';

const objectId = '5738532';
const drawerTypeId = '1904';
const fileTypeId = '1886';
const folderTypeId = '91';

let lib;

describe('ImageRight API - ObjectTypes', () => {
  before(() => {
    rec.before();
    lib = new Library(baseurl).connect(username, password);
  });

  after((done) => {
    rec.after(done);
  });

  describe('the method getAllowedTypes', () => {
    // Retrieves allowed child types for a given type ID.
    // The type ID must be a drawer type ID or a location type ID.
    it('Drawer Type - should return an array of type objects', () =>
      lib.then((api) =>
        api
          .getAllowedTypes(drawerTypeId)
          .then((data) => expect(data).to.exist && expect(data).to.be.instanceof(Array))
      ));
  });

  describe('the method getAllowedTypesForContainer', () => {
    // Retrieves allowed child types for a given container ID(Root,Location,Drawer,File,Folder).
    it('should return an array of type objects', () =>
      lib.then((api) =>
        api
          .getAllowedTypesForContainer(objectId)
          .then((data) => expect(data).to.exist && expect(data).to.be.instanceof(Array))
      ));
  });

  describe('the method getAttributeDefinitionsForType', () => {
    // Retrieves the attribute definitions for a given type ID.
    it('Drawer Type - should return an array of type objects', () =>
      lib.then((api) =>
        api
          .getAttributeDefinitionsForType(drawerTypeId)
          .then((data) => expect(data).to.exist && expect(data).to.be.instanceof(Array))
      ));
    it('File Type - should return an array of type objects', () =>
      lib.then((api) =>
        api
          .getAttributeDefinitionsForType(fileTypeId)
          .then((data) => expect(data).to.exist && expect(data).to.be.instanceof(Array))
      ));
    it('Folder Type - should return an array of type objects', () =>
      lib.then((api) =>
        api
          .getAttributeDefinitionsForType(folderTypeId)
          .then((data) => expect(data).to.exist && expect(data).to.be.instanceof(Array))
      ));
  });

  describe('the method getFileTypeExtensions', () => {
    // Retrieves a template tree of allowed types for a specified file type ID.
    it('File Type - should return an object', () =>
      lib.then((api) =>
        api
          .getFileTypeExtensions(fileTypeId)
          .then((data) => expect(data).to.exist && expect(data).to.be.instanceof(Object))
      ));
  });

  describe('the method getFileTypeTemplate', () => {
    // Retrieves a template tree of allowed types for a specified file type ID.
    it('File Type - should return an object', () =>
      lib.then((api) =>
        api
          .getFileTypeTemplate(fileTypeId)
          .then((data) => expect(data).to.exist && expect(data).to.be.instanceof(Object))
      ));
  });

  describe('the method getObjectType', () => {
    // Retrieves the type data for a particular object type ID.
    it('Drawer Type - should return an object', () =>
      lib.then((api) =>
        api
          .getObjectType(drawerTypeId)
          .then((data) => expect(data).to.exist && expect(data).to.be.instanceof(Object))
      ));
    it('File Type - should return an object', () =>
      lib.then((api) =>
        api
          .getObjectType(fileTypeId)
          .then((data) => expect(data).to.exist && expect(data).to.be.instanceof(Object))
      ));
    it('Folder Type - should return an object', () =>
      lib.then((api) =>
        api
          .getObjectType(folderTypeId)
          .then((data) => expect(data).to.exist && expect(data).to.be.instanceof(Object))
      ));
  });

  describe('the method getSortOptionsForType', () => {
    // Retrieves the sorting options for a given type ID.
    // The type ID must be a file or folder type ID.
    it('File Type - should return an object', () =>
      lib.then((api) =>
        api
          .getSortOptionsForType(fileTypeId)
          .then((data) => expect(data).to.exist && expect(data).to.be.instanceof(Object))
      ));
    it('Folder Type - should return an object', () =>
      lib.then((api) =>
        api
          .getSortOptionsForType(folderTypeId)
          .then((data) => expect(data).to.exist && expect(data).to.be.instanceof(Object))
      ));
  });

  describe('the method getTypesForClass', () => {
    // Retrieves all the object type data for a particular class.
    // Values: RootContainer, FileContainer, Drawer, File, Folder, Document
    it('RootContainer - should return an array of type objects', () =>
      lib.then((api) =>
        api
          .getTypesForClass('RootContainer')
          .then((data) => expect(data).to.exist && expect(data).to.be.instanceof(Array))
      ));
    it('FileContainer - should return an array of type objects', () =>
      lib.then((api) =>
        api
          .getTypesForClass('FileContainer')
          .then((data) => expect(data).to.exist && expect(data).to.be.instanceof(Array))
      ));
    it('Drawer - should return an array of type objects', () =>
      lib.then((api) =>
        api
          .getTypesForClass('Drawer')
          .then((data) => expect(data).to.exist && expect(data).to.be.instanceof(Array))
      ));
    it('File - should return an array of type objects', () =>
      lib.then((api) =>
        api
          .getTypesForClass('File')
          .then((data) => expect(data).to.exist && expect(data).to.be.instanceof(Array))
      ));
    it('Folder - should return an array of type objects', () =>
      lib.then((api) =>
        api
          .getTypesForClass('Folder')
          .then((data) => expect(data).to.exist && expect(data).to.be.instanceof(Array))
      ));
    it('Document - should return an array of type objects', () =>
      lib.then((api) =>
        api
          .getTypesForClass('Document')
          .then((data) => expect(data).to.exist && expect(data).to.be.instanceof(Array))
      ));
  });
});
