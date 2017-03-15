import nock from 'nock'; // eslint-disable-line
import path from 'path';
import fs from 'fs';

let recording = false;
let fixture = null;

function cleanse(obj) {
  const clean = { ...obj };
  clean.scope = 'https://localhost:8093';
  if (clean.path === '/api/authenticate') {
    clean.body = '{"UserName":"<username>","Password":"<password>"}';
    clean.response = 'XXXXXXXX';
  }
  return clean;
}

function replace(obj) {
  const restored = { ...obj };
  restored.scope = process.env.IMAGERIGHT_BASEURL || 'https://localhost:8093';
  if (restored.path === '/api/authenticate') {
    restored.body = {
      UserName: process.env.IMAGERIGHT_USERNAME || 'tester',
      Password: process.env.IMAGERIGHT_PASSWORD || 'password',
    };
  }
  return restored;
}

// starts recording, one fixture at a time
function record(name, reqheaders) {
  if (recording) return recording;
  recording = true;
  fixture = name;
  nock.recorder.rec({
    output_objects: true,
    dont_print: true,
    enable_reqheaders_recording: reqheaders });
  return recording;
}

class Recorder {
  constructor(name, options = {}) {
    // options tell us where to store our fixtures
    const test = options.test || 'test';
    const fixtures = options.fixtures || 'fixtures';
    this.name = name;
    this.path = path.join(test, fixtures, `${name}.json`);
    this.reset = options.reset || false;
    this.reqheaders = options.reqheaders || false;
    this.nocks = null;
  }

  // ensure the fixtures exist and load them
  before() {
    if (this.reset) return record(this.name, this.reqheaders);
    if (fs.existsSync(this.path)) {
      try {
        this.nocks = nock.define(nock.loadDefs(this.path).map(replace));
        return this.nocks;
      } catch (e) {
        return record(this.name, this.reqheaders);
      }
    }
    return record(this.name, this.reqheaders);
  }

  // saves our recording if fixtures didn't already exist
  after(done) {
    if (recording && this.name === fixture) {
      const objs = nock.recorder.play();
      fs.writeFile(this.path, JSON.stringify(objs.map(cleanse)), done);
    } else {
      done();
    }
  }
}

export default Recorder;
