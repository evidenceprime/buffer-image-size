'use strict';

var fs = require('fs');
var expect = require('expect.js');
var glob = require('glob');
var path = require('path');

var imageSize = require('..');

// Test all invalid files
describe('Invalid Images', function () {

  var invalidFiles = glob.sync('specs/images/invalid/**/*.*');
  invalidFiles.forEach(function (file) {

    describe(file, function () {
      var buffer = null;
      var bufferSize = 8192;

      beforeEach(function () {
        buffer = Buffer.alloc(bufferSize);
        var filepath = path.resolve(file);
        var descriptor = fs.openSync(filepath, 'r');
        fs.readSync(descriptor, buffer, 0, bufferSize, 0);
      });

      it('should throw when called synchronously', function () {
        expect(imageSize.bind(null, buffer)).to.throwException(function (e) {
          expect(e).to.be.a(TypeError);
          expect(e.message).to.match(/^invalid \w+$/);
        });
      });
    });
  });
});
