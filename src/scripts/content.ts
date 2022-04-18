import React from "react";

const persistDisabledStorageKey = "aemExplorerPersistDisabled";
const wcmModeParam = "wcmmode";

let persistDisabled = false;

chrome.storage.sync.get(persistDisabledStorageKey, (storage) => {
  persistDisabled = storage[persistDisabledStorageKey] || false;
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes[persistDisabledStorageKey]) {
    persistDisabled = changes[persistDisabledStorageKey].newValue;
  }
});

const isCurrentlyDisabled = () => {
  const url = window.location.href;
  const { search } = new URL(url);
  const searchParams = new URLSearchParams(search);

  return searchParams.get(wcmModeParam) === "disabled";
};

const isInternalLink = (anchor: HTMLAnchorElement) => {
  const url = new URL(anchor.href);

  return window.location.origin === url.origin;
};

document.body.addEventListener("click", ({ target }) => {
  if (!(target instanceof Element)) {
    return;
  }

  const anchor = target.closest("a");
  if (anchor === null) {
    return;
  }

  if (isInternalLink(anchor) && isCurrentlyDisabled() && persistDisabled) {
    const url = new URL(anchor.href);
    url.searchParams.set(wcmModeParam, "disabled");
    anchor.href = url.toString();
  }
});

export {};
