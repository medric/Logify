/**
 * Simple custom loggin' class
 * @param {integer} fontSize 
 * @author m3dric
 */

// Font
const DEFAULT_FONT_SIZE = 12;

// Colors
const INFO_COLOR = '#81C784';
const WARNING_COLOR = '#FFB74D';
const ERROR_COLOR = '#E57373';

function Logify(fontSize) {
	// Object properties
	this.fontSize = fontSize || DEFAULT_FONT_SIZE;
}

Logify.prototype.info = function(message) {
	log('%c%s',
            'color: #FFF; background: ' +  INFO_COLOR + '; font-size: ' + DEFAULT_FONT_SIZE + 'px',
            message);
}

Logify.prototype.warning = function(message) {
	log('%c%s',
            'color: #FFF; background: ' +  WARNING_COLOR + '; font-size: ' + DEFAULT_FONT_SIZE + 'px',
            message);
}

Logify.prototype.error = function(message) {
	log('%c%s',
            'color: #FFF; background: ' +  ERROR_COLOR + '; font-size: ' + DEFAULT_FONT_SIZE + 'px',
            message);
}

// Private
//
var log = function() {
	console.log.apply(console, arguments);
}

