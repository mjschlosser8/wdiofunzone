
describe('Open Mercury Travels home page', function() {
  it('should allow the user to log in', function() {
    browser.url('http://newtours.demoaut.com/mercurywelcome.php');
    const signinlink = $('=SIGN-ON');
    signinlink.click();
    console.log(signinlink.getText());
    browser.pause(5000);
    //browser.geturl().should.be.equal('http://newtours.demoaut.com/mercurysignon.php')
  });
});
