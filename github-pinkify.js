// ==UserScript==
// @name         Gut Hub Pinkster
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You;-0[
// @match        https://github.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
/* makes the backgroud of any github page pink */
    GM_addStyle(' body, .pagehead , td, #readme > h3, .markdown-body, .file-header { background-color: pink !important; } ');
/*Makes the header hot pink*/
    GM_addStyle('header *, header { background-color: #ff69b4 !important; }');
/* Removes white from buttons */
    GM_addStyle('button * { background-image: none !important; }');
/* Makes buttons purple */
    GM_addStyle('.btn, .btn * { background-image: none !important; background-color: #a36ed4 !important; }');
/* Makes the borders purple */
    GM_addStyle('.file-wrap, tbody, tr, .overall-summary { border: 2px solid #a36ed4 !important; border-color: #a36ed4 !important; }');
/* Fills in a bar with purple */
    GM_addStyle('.commit-tease *, .commit-tease { background-color: #a36ed4 !important; border: none; color: white !important; }');
/* Changes the box colors */
    GM_addStyle('.reponav-item.selected, .reponav-item.selected * { border-color: #ff69b4 #a36ed4 #a 36ed4; background-color: #7fcce5 !important; }');
/*Makes boxes blue*/
    GM_addStyle('.social-count, .social-count.js-social-count { background-color: #7fcce5 !important; border: 1px solid #a36ed4}');

/*Makes the buttons text white*/
    GM_addStyle('.btn, .btn * {color: #ffffff !important; }');
/*using nano hehe France is in the finals and theyll win*/
    // Your code here...
})();
