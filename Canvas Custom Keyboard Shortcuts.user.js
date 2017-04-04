// ==UserScript==
// @name         Canvas Custom Keyboard Shortcuts
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Uses https://craig.is/killing/mice library
// @author       Adam Williams
// @match       https://*.instructure.com/*
// @require     http://cdn.craig.is/js/mousetrap/mousetrap.min.js?9d308

// ==/UserScript==
// Working Examples
/*
Mousetrap.bind('1', function() {console.log('1 worked');});    // Basic Example
Mousetrap.bind('2', function() {alert('2 worked');});  // Alert Example
*/

Mousetrap.bind('0', function() {alert('Keyboard Shortcuts:');}); // Show an alert
Mousetrap.bind('1', function() {document.getElementById("global_nav_profile_link").click();}); // Toggle Account Drawer
Mousetrap.bind('2', function() {document.getElementById("global_nav_accounts_link").click();}); // Toggle Admin Drawer
alert('Keyboard Shortcuts Enabled! Use "0" for help.');

// For later
/*
3 : global_nav_dashboard_link
4 : global_nav_courses_link
5 : 
*/