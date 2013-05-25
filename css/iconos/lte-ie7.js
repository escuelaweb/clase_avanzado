/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-twitter' : '&#xe000;',
			'icon-facebook' : '&#xe001;',
			'icon-feed' : '&#xe002;',
			'icon-google-plus' : '&#xe003;',
			'icon-youtube' : '&#xe004;',
			'icon-flickr' : '&#xe005;',
			'icon-picassa' : '&#xe006;',
			'icon-github' : '&#xe007;',
			'icon-wordpress' : '&#xe008;',
			'icon-steam' : '&#xe009;',
			'icon-screen' : '&#xe00a;',
			'icon-laptop' : '&#xe00b;',
			'icon-mobile' : '&#xe00c;',
			'icon-mobile-2' : '&#xe00d;',
			'icon-tablet' : '&#xe00f;',
			'icon-tv' : '&#xe00e;',
			'icon-location' : '&#xe010;',
			'icon-location-2' : '&#xe011;',
			'icon-compass' : '&#xe012;',
			'icon-history' : '&#xe013;',
			'icon-clock' : '&#xe014;',
			'icon-credit' : '&#xe015;',
			'icon-coin' : '&#xe016;',
			'icon-support' : '&#xe017;',
			'icon-books' : '&#xe018;',
			'icon-pencil' : '&#xe019;',
			'icon-home' : '&#xe01a;',
			'icon-users' : '&#xe01b;',
			'icon-user' : '&#xe01c;',
			'icon-disk' : '&#xe01d;',
			'icon-box-remove' : '&#xe01e;',
			'icon-box-add' : '&#xe01f;',
			'icon-bubble' : '&#xe020;',
			'icon-bubbles' : '&#xe021;',
			'icon-spinner' : '&#xe022;',
			'icon-spinner-2' : '&#xe023;',
			'icon-zoom-in' : '&#xe024;',
			'icon-zoom-out' : '&#xe025;',
			'icon-search' : '&#xe026;',
			'icon-settings' : '&#xe027;',
			'icon-cog' : '&#xe028;',
			'icon-equalizer' : '&#xe029;',
			'icon-cog-2' : '&#xe02a;',
			'icon-lock' : '&#xe02b;',
			'icon-unlocked' : '&#xe02c;',
			'icon-lock-2' : '&#xe02d;',
			'icon-firefox' : '&#xe02f;',
			'icon-IE' : '&#xe030;',
			'icon-opera' : '&#xe031;',
			'icon-safari' : '&#xe032;',
			'icon-pinterest' : '&#xe033;',
			'icon-stumbleupon' : '&#xe034;',
			'icon-html5' : '&#xe035;',
			'icon-html5-2' : '&#xe036;',
			'icon-css3' : '&#xe02e;',
			'icon-chrome' : '&#xe037;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};