import { expect } from 'chai'; // eslint-disable-line import/no-extraneous-dependencies
import Library from '../../src';
import Recorder from '../../scripts/recorder';

const baseurl = process.env.IMAGERIGHT_BASEURL || 'https://localhost:8093';
const username = process.env.IMAGERIGHT_USERNAME || 'tester';
const password = process.env.IMAGERIGHT_PASSWORD || 'password';

const containerId = 2586;
const rec = new Recorder('containers');

let lib;

describe('ImageRight API - Containers', () => {
  before(() => {
    rec.before();
    lib = new Library(baseurl).connect(username, password);
  });

  after((done) => {
    rec.after(done);
  });

  describe('the method getContainers', () => {
    it('should return an array of container objects when passed a valid containerId, recursive = false',
      () => lib.then(api => api.getContainers(containerId, false)
        .then(data => expect(data).to.exist)));
    it('should return an array of container objects when passed a valid containerId, recursive = true',
      () => lib.then(api => api.getContainers(containerId, true)
        .then(data => expect(data).to.exist)));
  });
});
