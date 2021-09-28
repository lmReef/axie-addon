const onExecuted = (result) => {
  browser.tabs.create({
    url: result[0],
  });
};

const onError = (e) => {
  console.log(`Error: ${e}`);
};

const run = () => {
  browser.tabs.query({ currentWindow: true, active: true }).then((tabs) => {
    const url = tabs[0].url;
    const regex = '.*://(.*.)?marketplace.axieinfinity.com/axie/.*';
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
