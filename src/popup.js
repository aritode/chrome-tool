import Chrome from './chrome';

var popupResponse;

/**
 * Open a popup. There should only be one at a time.
 */
export function show({ url, width, height, parent }) {
	popupResponse = Promise.defer();
	var left = Math.round(parent.left + (parent.width - width) / 2);
	var top = Math.round(parent.top + (parent.height - height) / 3);
	Chrome.createWindow({ type: 'popup', url, width, height, left, top });
	return popupResponse.promise;
}

Chrome.onMessage('popup_close', message => popupResponse.reject(message));
Chrome.onMessage('popup_return', message => popupResponse.resolve(message));