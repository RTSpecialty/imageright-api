import { expect } from 'chai'; // eslint-disable-line import/no-extraneous-dependencies
import Library from '../src';
import { version, apiVersion } from '../package.json';
import Recorder from '../scripts/recorder';

const baseurl = process.env.IMAGERIGHT_BASEURL || 'https://localhost:8093';
const username = process.env.IMAGERIGHT_USERNAME || 'tester';
const password = process.env.IMAGERIGHT_PASSWORD || 'password';
const rec = new Recorder('authentication');

let lib;
let connected;

describe('Given an instance of the library', () => {
  before(() => {
    lib = new Library(baseurl);
  });

  describe('the property version', () => {
    it('should return the library\'s version', () => {
      expect(lib.version).to.be.equal(version);
    });
  });

  describe('the property baseUrl', () => {
    it('should return the BaseUrl', () => {
      expect(lib.baseUrl).to.be.equal(baseurl);
    });
  });

  describe('when connected', () => {
    before(() => {
      rec.before();
      connected = lib.connect(username, password);
    });

    after((done) => {
      rec.after(done);
    });

    it('the promise should return an api', () => connected.then(api => expect(api).to.exist));
    it('the api should have a version', () => connected.then(api => expect(api.version).to.be.equal(apiVersion)));
    it('the api should have the BaseUrl', () => connected.then(api => expect(api.baseUrl).to.be.equal(baseurl)));
    it('the api should have an AccessToken', () => connected.then(api => expect(api.AccessToken).to.exist));
  });
});
