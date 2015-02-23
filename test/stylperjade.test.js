var glob = require('glob')
  , stylperjade = require('../lib/stylperjade')
  , assert = require('assert')
  , fixturesPath = __dirname + '/fixtures/'

describe('stylperjade', function () {

  it('should not error on simple test case', function (done) {
    stylperjade([ fixturesPath + 'test.css' ], [ fixturesPath + 'test.jade' ], function (err, output) {
      if (err) done(err)
      console.log(output)
      assert(!err)
      done()
    })
  })

  it.skip('should not error on project1 test cases', function (done) {
    var cssFiles = glob(fixturesPath + 'skip/project1/**/*.css', { sync: true })
      , jadeFiles = glob(fixturesPath + 'skip/project1/**/*.jade', { sync: true })

    stylperjade(cssFiles, jadeFiles, function (err, output) {
      if (err) done(err)
      console.log(output)
      assert(!err)
      done()
    })
  })

  it.skip('should not error on project2 test cases', function (done) {
    var cssFiles = glob(fixturesPath + 'skip/project2/**/*.css', { sync: true })
      , jadeFiles = glob(fixturesPath + 'skip/project2/**/*.jade', { sync: true })

    stylperjade(cssFiles, jadeFiles, function (err, output) {
      if (err) done(err)
      console.log(output)
      assert(!err)
      done()
    })
  })

  it.skip('should not error on project3 test cases', function (done) {
    var cssFiles = glob(fixturesPath + 'skip/project3/**/*.css', { sync: true })
      , jadeFiles = glob(fixturesPath + 'skip/project3/**/*.jade', { sync: true })

    stylperjade(cssFiles, jadeFiles, function (err, output) {
      if (err) done(err)
      console.log(output)
      assert(!err)
      done()
    })
  })

})
