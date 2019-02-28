describe('Testing Key Press page', function() {
  it('Opens the key press page and types TEST', function(){
    browser.url('http://the-internet.herokuapp.com/key_presses');
    browser.keys(['T']);
    browser.keys(['e']);
    browser.keys(['s']);
    browser.keys(['t']);
    browser.keys(['i']);
    browser.keys(['n']);
    browser.keys(['g']);
  });
});
