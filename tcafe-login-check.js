// ==UserScript==
// @name         tcafe 1.처음로그인체크
// @namespace    http://tampermonkey.net/
// @version      2024-09-19
// @description  try to take over the world!
// @author       glorial
// @match        https://tcafe2a.com/
// @icon         https://tcafe2a.com/favicon.ico
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // 로그인 여부
  const olAfterHd = document.getElementById("ol_after_hd");
  if (!olAfterHd) {
    return;
  }

  // 오늘 로그인 되었는지 확인
  const loginDate = get_cookie("loginDate");
  const nowDate = new Date().toDateString();

  // 로그인이 없거나 다른날짜라면 출첵으로 이동
  if (!loginDate || loginDate != nowDate) {
    const attendanceLink = document.querySelector(
      "#thema_wrapper > div > div.at-body > div > div > div > div.col-md-2.hidden-sm.hidden-xs.pull-left.at-col.at-side > div > div:nth-child(4) > ul > li:nth-child(1) > a"
    );
    if (!attendanceLink) {
      return;
    }

    attendanceLink.click();
  }
})();
