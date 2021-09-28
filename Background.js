const onExecuted = (result) => {
  browser.tabs.create({
    url: result[0],
  });
};

const onError = (e) => {
  console.log(`Error: ${e}`);
};

const run = () => {
  const executing = browser.tabs.executeScript({
    file: '/AxieAddon.js',
    allFrames: true,
  });
  executing.then(onExecuted, onError);
};

browser.browserAction.onClicked.addListener(run);
