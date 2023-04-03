const puppeteer = require('puppeteer');

class BrowserUtilities {
  static getBrowser() {
    return puppeteer.launch({ headless: true });
  }

  static closeBrowser(browser) {
    if (!browser) {
      return;
    }
    return browser.close();
  }
}

module.exports = BrowserUtilities;
