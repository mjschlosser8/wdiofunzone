require('dotenv').config();

describe('Open Dynamic content page', function() {
  it('Clicks start button and loads content', function() {
    browser.url('http://the-internet.herokuapp.com/dynamic_loading/2');
    $('button*=Start').click();
    browser.pause(1000);
    $('#finish').waitForDisplayed(10000);
  });
});
