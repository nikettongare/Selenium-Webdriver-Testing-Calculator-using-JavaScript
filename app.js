require('chromedriver');
const {
  Builder,
  Browser,
  By,
  Key,
  until,
  WebDriverWait,
} = require('selenium-webdriver');

const keyMap = {
  0: 'bkEvMb',
  1: 'N10B9',
  2: 'lVjWed',
  3: 'KN1kY',
  4: 'xAP7E',
  5: 'Ax5wH',
  6: 'abcgof',
  7: 'rk7bOd',
  8: 'T7PMFe',
  9: 'XoxYJ',
  equals: 'Pt8tGc',
  plus: 'XSr6wc',
  minus: 'pPHzQc',
  multiply: 'YovRWb',
  divide: 'WxTTNd',
};

(async () => {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get('https://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('calculator', Key.RETURN);
    await driver.wait(until.titleIs('calculator - Google Search'), 1000);

    await driver.findElement(By.xpath(`//*[@jsname='${keyMap[4]}']`)).click();
    await driver.findElement(By.xpath(`//*[@jsname='${keyMap.plus}']`)).click();
    await driver.findElement(By.xpath(`//*[@jsname='${keyMap[8]}']`)).click();
    await driver.findElement(By.xpath(`//*[@jsname='${keyMap.equals}']`)).click();
    const text = await driver
      .findElement(By.xpath("//*[@jsname='VssY5c']"))
      .getText();

    console.log(`The result is: ${text}`);
  } catch (error) {
    console.log(`error is ${error}`);
  } finally {
    await driver.quit();
  }
})();
