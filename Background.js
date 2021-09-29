const onExecuted = (result) => {
  browser.tabs.query({ currentWindow: true, active: true }).then((tabs) => {
    browser.tabs.create({
      url: result[0],
      index: tabs[0].index + 1,
    });
  }, console.error);
};

const onError = (e) => {
  console.log(`Error: ${e}`);
};

const run = () => {
  browser.tabs.query({ currentWindow: true, active: true }).then((tabs) => {
    console.log(`index: ${tabs[0].index}`);
    const url = tabs[0].url;
    const regex = '.*://(.*.)?marketplace.axieinfinity.com/axie/[0-9]*';
    if (url.match(regex)) {
      const executing = browser.tabs.executeScript({
        file: '/AxieAddon.js',
        allFrames: true,
      });
      executing.then(onExecuted, onError);
    }
  }, console.error);
};

browser.browserAction.onClicked.addListener(run);
