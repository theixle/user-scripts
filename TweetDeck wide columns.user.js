// ==UserScript==
// @name          TweetDeck wide columns
// @namespace     http://userstyles.org
// @description	  Makes columns of TweetDeck web-app wider
// @author        Hott Dogg
// @homepage      https://userstyles.org/styles/70450
// @include       https://web.tweetdeck.com/*
// @include       https://tweetdeck.twitter.com/*
// @run-at        document-start
// @version       0.20131024070948
// ==/UserScript==
(function() {var css = "";
if (false || (document.location.href.indexOf("https://web.tweetdeck.com/") == 0))
	css += ".column{width:50%!important}";
if (false || (document.location.href.indexOf("https://tweetdeck.twitter.com/") == 0))
	css += ".column{width:50%!important}";
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node); 
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
