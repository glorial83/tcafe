// ==UserScript==
// @name         torrentpi.login.check
// @namespace    http://tampermonkey.net/
// @version      2025-10-10
// @description  try to take over the world!
// @author       glorial
// @include      https://*torrentpi*/?captcha_key=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=torrentpi160.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    const userNm = document.querySelector('#thema_wrapper > aside.at-lnb > div > div.pull-right > ul > li:nth-child(1) > a > b');
    if (!userNm) {
        return;
    }

    // 오늘 로그인 되었는지 확인
    const loginDate = get_cookie("loginDate");
    const nowDate = new Date().toDateString();

    // 로그인이 없거나 다른날짜라면 출첵으로 이동
    if (!loginDate || loginDate != nowDate) {
        const attendanceLink = document.querySelector(
            '#thema_wrapper > div.at-body > div > div.hidden-sm.hidden-xs > div > div > div > div > div:nth-child(2) > nav:nth-child(1) > nav > ul > span:nth-child(1) > a'
        );

        if (!attendanceLink) {
            return;
        }

        attendanceLink.click();
    }
})();
