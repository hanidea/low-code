'use strict';

const core = require('./.');
const assert = require('assert').strict;

assert.strictEqual(core(), 'Hello from cli');
console.info("cli tests passed");
