import { expect } from 'chai';
import { cleanse, replace } from '../../scripts/recorder';

const sensitive = {
  scope: 'https://production.server:8093',
  path: '/api/authenticate',
  body: '{"UserName":"Jeremy","Password":"Password123"}',
  response: '111222333444555666777888999000',
};

const safe = {
  scope: 'https://localhost:8093',
  path: '/api/authenticate',
  body: '{"UserName":"<username>","Password":"<password>"}',
  response: 'XXXXXXXX',
};

const env = {
  scope: process.env.IMAGERIGHT_BASEURL || 'https://localhost:8093',
  username: process.env.IMAGERIGHT_USERNAME || '<username>',
  password: process.env.IMAGERIGHT_PASSWORD || '<password>',
};

let obj = {};

describe('Nock Recorder Utility', () => {
  describe('the cleanse function removes sensitive information', () => {
    before(() => {
      obj = cleanse(sensitive);
    });
    it('should return a new object', () => {
      expect(obj).to.not.equal(sensitive);
    });
    it('should set the scope to localhost', () => {
      expect(obj.scope).to.be.equal(safe.scope);
    });
    describe('when the path is "/api/authenticate"', () => {
      it('should change the body', () => {
        expect(obj.body).to.be.equal(safe.body);
      });
      it('should change the response', () => {
        expect(obj.response).to.be.equal(safe.response);
      });
    });
    describe('when the path is not "/api/authenticate"', () => {
      before(() => {
        const copy = { ...sensitive, path: '/some/other/path' };
        obj = cleanse(copy);
      });
      it('should not change the body', () => {
        expect(obj.body).to.be.equal(sensitive.body);
      });
      it('should not change the response', () => {
        expect(obj.response).to.be.equal(sensitive.response);
      });
    });
  });
  describe('the replace function restores sensitive information', () => {
    before(() => {
      obj = replace(safe);
    });
    it('should return a new object', () => {
      expect(obj).to.not.equal(safe);
    });
    it('should set the scope to process.env.IMAGERIGHT_BASEURL', () => {
      expect(obj.scope).to.be.equal(env.scope);
    });
    describe('when the path is "/api/authenticate"', () => {
      it('should change the body', () => {
        expect(obj.body.UserName).to.be.equal(env.username);
        expect(obj.body.Password).to.be.equal(env.password);
      });
    });
    describe('when the path is not "/api/authenticate"', () => {
      before(() => {
        const copy = { ...safe, path: '/some/other/path' };
        obj = cleanse(copy);
      });
      it('should not change the body', () => {
        expect(obj.body).to.be.equal(safe.body);
      });
    });
  });
});
