// ==UserScript==
// @name         torrentpi.pds.upper50
// @namespace    http://tampermonkey.net/
// @updateURL    https://github.com/KID-joker/userscript/blob/main/multiple-search.js
// @downloadURL  https://github.com/KID-joker/userscript/blob/main/multiple-search.js
// @version      2026-05-04
// @description  try to take over the world!
// @author       glorial
// @include      https://*torrentpi*.com/bbs/board.php?bo_table=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=torrentpi160.com
// @grant        none
// ==/UserScript==
// 추천이 50이상인 것들만 하이라이트 처리

(function() {
    'use strict';
    const items = document.querySelectorAll('#fboardlist > div.list-board > ul > li > div:nth-child(7)');

    items.forEach(div => {
        const value = parseInt(div.innerText.trim());
        if (value >= 50) {
            // 여기에 적용하고 싶은 스타일을 작성하세요
            div.parentElement.style.backgroundColor='#e3f2fd';
            div.parentElement.style.fontWeight = 'bold';
        }
    });

    const pdsTable = document.querySelector("#thema_wrapper > div.at-body > div > div > div.col-md-9.pull-right.at-col.at-main > div.row.at-row > div > div.col-sm-9");
    pdsTable.style.width = '100%';
})();
