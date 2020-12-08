import {Application} from 'spectron';
import assert from 'assert';
import path from 'path';

const mainDir = path.join(__dirname, '..');

const app: Application = new Application({
  path: path.join(mainDir, 'node_modules', '.bin', 'electron'),
  chromeDriverArgs: [
    '--no-sandbox',
    '--whitelisted-ips=',
    '--disable-dev-shm-usage',
    '--remote-debugging-port=9515'
  ],
  args: [path.join(mainDir, 'src', 'main', 'index.js')]
})
describe('App launching...', () => {
  app.start().then(function () {
    // Check if the window is visible
    return app.browserWindow.isVisible()
  }).then(function (isVisible) {
    // Verify the window is visible
    assert.equal(isVisible, true)
  }).then(function () {
    // Get the window's title
    return app.client.getTitle()
  }).then(function (title) {
    // Verify the window's title
    assert.equal(title, 'My App')
  }).then(function () {
    // Stop the application
    console.log('App test succesull!')
    return app.stop()
  }).catch(function (error) {
    // Log any failures
    console.error('Test failed', error.message)
  })
})