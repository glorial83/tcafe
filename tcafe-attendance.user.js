// ==UserScript==
// @name         tcafe 2.자동출첵
// @namespace    http://tampermonkey.net/
// @version      2024-09-19
// @description  try to take over the world!
// @author       glorial
// @match        https://tcafe2a.com/community/attendance
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

  // 로그인이 없거나 다른날짜라면 출첵하기
  if (!loginDate || loginDate != nowDate) {
    set_cookie("loginDate", nowDate);

    const attendanceLink = document.querySelector(
      "#cnftjr > div > form > table > tbody > tr > td > img"
    );
    attendanceLink.click();
  }
})();
