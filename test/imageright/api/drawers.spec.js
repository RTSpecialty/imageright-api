import { expect } from 'chai'; // eslint-disable-line import/no-extraneous-dependencies
import Library from '../../../src';
import Recorder from '../../../scripts/recorder';

const rec = new Recorder('drawers');

const baseurl = process.env.IMAGERIGHT_BASEURL || 'https://localhost:8093';
const username = process.env.IMAGERIGHT_USERNAME || '<username>';
const password = process.env.IMAGERIGHT_PASSWORD || '<password>';

const drawerId = 2377;
const drawerName = 'TRAINING';
const containerId = -1;

let lib;

describe('ImageRight API - Drawers', () => {
  before(() => {
    rec.before();
    lib = new Library(baseurl).connect(username, password);
  });

  after((done) => {
    rec.after(done);
  });

  describe('the method getDrawerById', () => {
    it('should return a drawer object when passed a valid drawer id', () =>
      lib.then((api) => api.getDrawerById(drawerId).then((data) => expect(data).to.exist)));
  });

  describe('the method getDrawers', () => {
    it('should return an array of drawer objects', () =>
      lib.then((api) => api.getDrawers().then((data) => expect(data).to.be.instanceof(Array))));
  });

  describe('the method getDrawerByName', () => {
    it('should return a drawer object when passed a valid drawer name', () =>
      lib.then((api) => api.getDrawerByName(drawerName).then((data) => expect(data).to.exist)));
  });

  describe('the method getDrawersInContainer', () => {
    it('should return an array of drawers when passed a valid container id', () =>
      lib.then((api) =>
        api.getDrawersInContainer(containerId).then((data) => expect(data).to.be.instanceof(Array))
      ));
  });

  describe('the method getDrawersInContainerByName', () => {
    it('should return a drawer object when passed a containerId and valid drawer name', () =>
      lib.then((api) =>
        api
          .getDrawersInContainerByName(containerId, drawerName)
          .then((data) => expect(data).to.exist)
      ));
  });
});
