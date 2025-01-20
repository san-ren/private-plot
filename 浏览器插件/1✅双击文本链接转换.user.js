// ==UserScript==
// @name         1✅双击文本链接转换
// @namespace    http://tampermonkey.net/
// @version      1.9
// @description  双击文本转换为超链接并在新标签页中打开，支持不含http的链接
// @author       Your Name
// @match        *://*/*
// @run-at       document-idle
// ==/UserScript==
(function() {
    'use strict';
    const urlRegex = /(https?:\/\/)?(([0-9a-z.]+\.[a-z]+)|(([0-9]{1,3}\.){3}[0-9]{1,3}))(:[0-9]+)?(\/[0-9a-z%/.\-_]*)?(\?[0-9a-z=&%_\-]*)?(\#[0-9a-z=&%_\-]*)?/ig

    document.addEventListener('dblclick', (event) => {
        const target = event.composedPath()[0];
        const text = target.textContent || target.innerText || '';
        const urls = text.match(urlRegex);

        if (urls) {
            if (urls.length === 1) {
                const fullUrl = /^https?:\/\//i.test(urls[0]) ? urls[0] : 'https://' + urls[0];
                window.open(fullUrl, '_blank');
            } else {
                let newHTML = text;
                urls.forEach(url => {
                    const fullUrl = /^https?:\/\//i.test(url) ? url : 'https://' + url;
                    const link = `<a href="${fullUrl}" target="_blank">${url}</a>`;
                    newHTML = newHTML.replace(url, link);
                });
                target.innerHTML = newHTML;
            }
        }
    }, { capture: true, passive: true });
})();