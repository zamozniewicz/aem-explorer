import browser from "webextension-polyfill";

export type Tab = browser.Tabs.Tab & { id: number; url: string };
