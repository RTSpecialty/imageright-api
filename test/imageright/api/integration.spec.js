// import { expect } from 'chai'; // eslint-disable-line import/no-extraneous-dependencies
// import Library from '../../../src';
// import Recorder from '../../../scripts/recorder';

// const rec = new Recorder('integration');

// const baseurl = process.env.IMAGERIGHT_BASEURL || 'https://localhost:8093';
// const username = process.env.IMAGERIGHT_USERNAME || '<username>';
// const password = process.env.IMAGERIGHT_PASSWORD || '<password>';

// let lib;

describe('ImageRight API - Integration', () => {
  // before(() => {
  //   rec.before();
  //   lib = new Library(baseurl).connect(username, password);
  // });

  // after((done) => {
  //   rec.after(done);
  // });

  describe('the method findVapTasks', () => {
    it('should return Vap Tasks');
  });

  describe('the method findVapTasksByClientId', () => {
    it('should return Vap Tasks');
  });

  describe('the method getClientFiles', () => {
    it('should return client files');
  });

  describe('the method getPolicyFolder', () => {
    it('should return policy folder');
  });

  describe('the method getVersion', () => {
    it('should return the version');
  });
});
