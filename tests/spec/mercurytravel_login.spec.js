require('dotenv').config();

describe('Open Mercury Travels home page', function() {
  it('should allow the user to log in', function() {
    browser.url('http://newtours.demoaut.com/mercurywelcome.php');
    const signinlink = $('=SIGN-ON');
    signinlink.click();
    $('body').waitForExist(10000);
    expect(browser.getUrl()).to.include('mercurysignon.php');
    $('input[name="userName"]').addValue(process.env.MT_LOGIN);
    $('input[name="password"]').addValue(process.env.MT_PASS);
    $('input[name="login"]').click();
    $('body').waitForExist(10000);
  });
});
