'use strict';
// Keep explicit platform links visible; only highlight the detected platform.
const platform = navigator.userAgentData?.platform || navigator.platform || '';
const type = /mac/i.test(platform) ? 'mac' : /win/i.test(platform) ? 'win' : /linux/i.test(platform) ? 'linux' : '';
if (type) {
  for (const link of document.querySelectorAll('[data-download]')) {
    if (link.dataset.download.startsWith(type)) link.closest('article').classList.add('current-platform');
  }
}
