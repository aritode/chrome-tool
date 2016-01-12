# chrome-tool

[![Build Status](https://travis-ci.org/JannesMeyer/chrome-tool.svg?branch=master)](https://travis-ci.org/JannesMeyer/chrome-tool)
[![Dependencies](https://david-dm.org/JannesMeyer/chrome-tool.svg)](https://david-dm.org/JannesMeyer/chrome-tool)
[![Development Dependencies](https://david-dm.org/JannesMeyer/chrome-tool/dev-status.svg)](https://david-dm.org/JannesMeyer/chrome-tool#info=devDependencies)

## Windows

```js
import { Windows } from 'chrome-tool';
```

The API works like [chrome.windows.\*](https://developer.chrome.com/extensions/windows#toc) except that it returns promises.

Functions:

- `Windows.get(windowId, getInfo?): Promise`
- `Windows.getCurrent(getInfo?): Promise`
- `Windows.getLastFocused(getInfo?): Promise`
- `Windows.getAll(getInfo?): Promise`
- `Windows.create(createData?): Promise`
- `Windows.update(windowId, updateInfo): Promise`
- `Windows.remove(windowId): Promise`

Events:

- `Windows.onCreated(callback): void`
- `Windows.onRemoved(callback): void`
- `Windows.onFocusChanged(callback): void`

Custom functions:

- `Windows.open(windows: string[][], reuseThreshold = 1): void`
	- `windows`: 2-dimensional array of URLs to open as windows
	- `reuseThreshold`: Re-uses the current window if its number of tabs is less than or equal

## Tabs

```js
import { Tabs } from 'chrome-tool';
```

The API works like [chrome.tabs.\*](https://developer.chrome.com/extensions/tabs#toc) except that it returns promises.

Functions:

- `Tabs.get(tabId: number): Promise`
- `Tabs.getCurrent(): Promise`
- `Tabs.create(createProperties): Promise`
- `Tabs.duplicate(tabId: number): Promise`
- `Tabs.query(queryInfo): Promise`
- `Tabs.highlight(highlightInfo): Promise`
- `Tabs.update(tabId?: number, updateProperties): Promise`
- `Tabs.move(tabIds: number | number[], moveProperties): Promise`
- `Tabs.reload(tabId?: number, reloadProperties?): Promise`
- `Tabs.remove(tabIds: number : number[]): Promise`
- `Tabs.detectLanguage(tabId?: number): Promise`
- `Tabs.captureVisibleTab(windowId?: number, options?): Promise`
- `Tabs.executeScript(tabId?: number, details): Promise`
- `Tabs.insertCSS(tabId?: number, object details): Promise`
- `Tabs.setZoom(tabId?: number, zoomFactor: number): Promise`
- `Tabs.getZoom(tabId?: number): Promise`
- `Tabs.setZoomSettings(tabId?: number, zoomSettings): Promise`
- `Tabs.getZoomSettings(tabId?: number): Promise`

Events:

- `Tabs.onCreated(callback): void`
- `Tabs.onUpdated(callback): void`
- `Tabs.onMoved(callback): void`
- `Tabs.onSelectionChanged(callback): void`
- `Tabs.onActiveChanged(callback): void`
- `Tabs.onActivated(callback): void`
- `Tabs.onHighlightChanged(callback): void`
- `Tabs.onHighlighted(callback): void`
- `Tabs.onDetached(callback): void`
- `Tabs.onAttached(callback): void`
- `Tabs.onRemoved(callback): void`
- `Tabs.onReplaced(callback): void`
- `Tabs.onZoomChange(callback): void`

Custom functions:

- `Tabs.getHighlighted(): Promise`
- `Tabs.getActive(): Promise`
- `Tabs.open(openerTab: { id: number }, url: string): Promise`
- `Tabs.count(): Promise`
- `Tabs.moveHighlighted(direction: number): Promise`
- `Tabs.moveToNewWindow(tabs: Tab[], incognito: boolean): Promise`
- `Tabs.moveToWindow(tabs: Tab[], targetWindowId: number): Promise`
- `Tabs.closeOthers(): Promise`

## Runtime

```js
import * as Runtime from 'chrome-tool/runtime';
```

The API works like [chrome.runtime.\*](https://developer.chrome.com/extensions/tabs#toc) except that it returns promises.

## Contributing

Download source and compile:

	git clone git@github.com:JannesMeyer/chrome-tool.git
	make

Watch for changes and recompile:

	make watch

Run tests:

	npm test
