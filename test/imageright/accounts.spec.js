import { expect } from 'chai'; // eslint-disable-line import/no-extraneous-dependencies
import Library from '../../src';
import Recorder from '../../scripts/recorder';

const baseurl = process.env.IMAGERIGHT_BASEURL || 'https://localhost:8093';
const username = process.env.IMAGERIGHT_USERNAME || 'tester';
const password = process.env.IMAGERIGHT_PASSWORD || 'password';

const accountId = 201;
const type = 'list';
const rec = new Recorder('accounts');

let lib;

describe('Given an ImageRight API instance', () => {
  before(() => {
    rec.before();
    lib = new Library(baseurl).connect(username, password);
  });

  after((done) => {
    rec.after(done);
  });

  describe('the method getAccount', () => {
    it('should return an account object when passed a valid accountId',
      () => lib.then(api => api.getAccount(accountId, type)
        .then(data => expect(data).to.exist)));
  });

  describe('the method getAccountGroups', () => {
    it('should return an array of group objects when passed a valid accountId',
      () => lib.then(api => api.getAccountGroups(accountId)
        .then(data => expect(data).to.be.instanceof(Array))));
  });

  describe('the method getAllAccounts', () => {
    it('should return an array of account objects',
      () => lib.then(api => api.getAllAccounts()
        .then(data => expect(data).to.be.instanceof(Array))));
  });

  describe('the method getCurrentUserAccount', () => {
    it('should return an account object of the current user',
      () => lib.then(api => api.getCurrentUserAccount()
        .then(data => expect(data).to.exist)));
  });

  describe('the method getCurrentUserGroups', () => {
    it('should return an array of group objects for teh current user',
      () => lib.then(api => api.getCurrentUserGroups()
        .then(data => expect(data).to.be.instanceof(Array))));
  });
});
