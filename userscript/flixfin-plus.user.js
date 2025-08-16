
// ==UserScript==
// @name         Flixfin+ (Netflix UI for Jellyfin)
// @namespace    https://local.jellyfin/
// @version      1.0.0
// @description  Netflix-like UI overlay for Jellyfin Web
// @match        *://*/web/*
// @grant        none
(function(){'use strict';
  const css=document.createElement('link');css.rel='stylesheet';css.href='/flixfin/dist/style.css';document.documentElement.appendChild(css);
  const s=document.createElement('script');s.src='/flixfin/dist/inject.js';document.documentElement.appendChild(s);
})();