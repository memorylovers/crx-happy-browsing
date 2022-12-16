import constentScript from "./scripts/content-script-execute?script";

const isTargetSites = (url: string | undefined): boolean => {
  if (url == null || url.startsWith("chrome://")) return false;
  return true;
};

chrome.tabs.onUpdated.addListener((tabId, info, tab) => {
  console.debug({
    tabId: tabId,
    changeInfo: info,
    tab: tab,
    tabUrl: tab.url,
    locationHref: location.href,
  });

  if (!isTargetSites(tab.url) || info.status != "complete") return;

  chrome.scripting.executeScript({
    target: { tabId },
    files: [constentScript],
  });
});
