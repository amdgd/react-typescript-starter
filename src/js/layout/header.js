"use strict";

// Class definition
var KTLayoutHeader = function() {
    // Private variables
    var header;

    // Private functions
    var handleSticky = function() {
        if (!header) {
            return;
        }
        
        var sticky = KTSticky.getInstance(header);
        var timer;

        if (!sticky) {
            return;
        }

        sticky.on('kt.sticky.change', function() {
            timer = setTimeout(function() {
                KTMenu.updateDropdowns(); 
            }, 300);              
        });
    }

    // Public methods
	return {
		init: function() {
            // Elements
            header = document.querySelector('#kt_header');

            // Handle sticky mode
            handleSticky();
		}
	};
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTLayoutHeader.init();
});

// Webpack support
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = KTLayoutHeader;
}