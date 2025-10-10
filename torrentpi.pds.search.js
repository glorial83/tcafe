// ==UserScript==
// @name         torrentpi.pds.search
// @namespace    http://tampermonkey.net/
// @version      2025-10-10
// @description  try to take over the world!
// @author       glorial
// @include      /^https:\/\/torrentpi160\.com\/bbs\/board\.php\?bo_table=zsd&sca=&sfl=wr_subject&stx=.*
// @include      /^https:\/\/torrentpi160\.com\/bbs\/board\.php\?bo_table=zsd&sfl=wr_subject&stx=.*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=torrentpi160.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //다음검색 버튼이 활성화 되어있다면
    const nextButton = document.querySelector('#fboardlist > div.list-page.text-center > ul > li:nth-child(7) > a') || document.querySelector('#fboardlist > div.list-page.text-center > ul > li:nth-child(6) > a');

    if (!!nextButton) {
        //게시물이 없습니다. 라는 말이 안나올 때까지 다음검색 계속
        const notExist = document.querySelector('#fboardlist > div.list-board > div.wr-none');

        if (!!notExist) {
            nextButton.click();
        }
    }

})();
