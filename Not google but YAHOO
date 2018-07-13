// ==UserScript==
// @name         Google
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Let's mess with Google
// @author       Sophie Guerin
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @match        https://www.google.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle('.gstl_0.sbib_a * { background-image: none !important; background-color: #000000 !important; color: #ffffff !important;  }');
    GM_addStyle('input[name="btnK"], input[name="btnI"] { background-image: none !important; color: #000000 !important; border: none !important; border: solid #000000 !important; border-width 15px !important;}');
    GM_addStyle('@keyframes rotater { from { -webkit-transform: rotate(0deg); } to { -webkit-transform: rotate(360deg);}e }');
    GM_addStyle('#hplogo{content: url("http://www.pearlinux.fr/wp-content/uploads/2016/09/yahoo.jpg") !important; height: auto; padding-top: 0px !important; -webkit-animation: rotater 1.5s ease-in-out; -webkit-animation-iteration-count: 10000;}');

    $('input[value="Google Search"').val("Yahoo Search");
    $('.gsst_a').remove();
    $('#SIvCob').remove();
    $('a.gb_P').remove();
})();
