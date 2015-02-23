window.onload = function() {
	var link        = getURLParameter('link');
	var title       = getURLParameter('title');
	var description = getURLParameter('description');

	if (false != link) {
		var eTitle = document.getElementById("title");
		var eLink = document.getElementById("link");
		var eDescription = document.getElementById("description");

		eTitle.value = title;
		eLink.value = link;
		eDescription.value = description;

		generateBufferUrl(link, title, description);
		generateDeliciousUrl(link, title, description);
		generateFacebookUrl(link, title, description);
		generateGooglePlusUrl(link, title, description);
		generateLinkedInUrl(link, title, description);
		generateRadio3Url(link, title, description);
		generateRedditUrl(link, title, description);
		generateTwitterUrl(link, title, description);
	}
}

function getURLParameter(name) {
	var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
	return results == null ? false : (decodeURIComponent(results[1].replace(/\+/g, '%20')) || false);
}

function generateBufferUrl(link, title, description) {
	var url = 'https://bufferapp.com/add?text=' + (false == title ? '' : encodeURIComponent(title)) + '&url=' + encodeURIComponent(link);
	document.getElementById("buffer").href = url;
}

function generateDeliciousUrl(link, title, description) {
	var url = 'http://delicious.com/save?title=' + (false == title ? '' : encodeURIComponent(title)) + '&url=' + encodeURIComponent(link) + '&notes=' + (false == description ? '' : encodeURIComponent(description)) + '&v=5&noui&jump=close';
	document.getElementById("delicious").href = url;
}

function generateFacebookUrl(link, title, description) {
	var url = 'https://www.facebook.com/sharer.php?t=' + (false == title ? '' : encodeURIComponent(title)) + '&u=' + encodeURIComponent(link);
	document.getElementById("facebook").href = url;
}

function generateGooglePlusUrl(link, title, description) {
	var url = 'https://plus.google.com/share?url=' + encodeURIComponent(link);
	document.getElementById("googleplus").href = url;
}

function generateLinkedInUrl(link, title, description) {
	var url = 'http://www.linkedin.com/shareArticle?title=' + (false == title ? '' : encodeURIComponent(title)) + '&url=' + encodeURIComponent(link) + '&source=RT%20Proxy&mini=true';
	document.getElementById("linkedin").href = url;
}

function generateRadio3Url(link, title, description) {
	var url = 'http://radio3.io/?link=' + encodeURIComponent(link) + '&title=' + encodeURIComponent(title) + '&description=' + encodeURIComponent(description);
	document.getElementById("radio3").href = url;
}

function generateRedditUrl(link, title, description) {
	var url = 'http://www.reddit.com/submit?url=' + encodeURIComponent(link) + '&title=' + (false == title ? '' : encodeURIComponent(title));
	document.getElementById("reddit").href = url;
}

function generateTwitterUrl(link, title, description) {
	var url = 'https://twitter.com/intent/tweet?text=' + (false == title ? '' : encodeURIComponent(title)) + '&url=' + encodeURIComponent(link);
	document.getElementById("twitter").href = url;
}
