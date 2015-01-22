/* Copyright (c) AerServ, 2015
 *
 * This unpublished material is proprietary to AerServ, LLC.
 * All rights reserved. The methods and
 * techniques described herein are considered trade secrets
 * and/or confidential. Reproduction or distribution, in whole
 * or in part, is forbidden except by express written permission
 * of AerServ.
 */

 /**
 * The AerServSDK class is how your statically interact with the AerServSDK.
 * @constructor
 */ 
function AerServSDK(){}

/**
 * align banner to top of screen
 */
AerServSDK.BANNER_TOP = 0;
/**
 * align banner to bottom of screen
 */
AerServSDK.BANNER_BOTTOM = 1;

/**
 * loadInterstitial will load a full screen ad 
 * @param {string} plc - the placement
 * @param {function} onAdLoadedCallback - the callback function for when the ad is loaded
 * @param {function} onAdFailedCallback - the callback function for when the ad has failed to load 
 * @param {function} onAdShownCallback - the callback function for when the ad has finished 
 * @param {function} onAdClickedCallback - the callback function for when the ad has been touched 
 * @param {function} onAdDismissedCallback - the callback function for when the ad has been dismissed 
 * @param {string} keyWords - comma seperated string of keywords to filter ads with 
 *
 */
AerServSDK.loadInterstitial = function(plc, onAdLoadedCallback, onAdFailedCallback, onAdShownCallback,
	 																	  onAdClickedCallback, onAdDismissedCallback, keyWords) {

	if(keyWords == null)
				keyWords = "";

	this.onAdLoadedCallback = onAdLoadedCallback;
	this.onAdFailedCallback = onAdFailedCallback; 
	this.onAdShownCallback = onAdShownCallback;
	this.onAdClickedCallback = onAdClickedCallback;
	this.onAdDismissedCallback = onAdDismissedCallback;

	self = this;
	
	cordova.exec(function(winParams){

								console.log(winParams[0]);
								console.log(winParams[1]);
								self[winParams[0]](winParams[1]);

							},
							function(error){


							},
							"AerServSDKPhoneGapPlugin",
							"loadInterstitial",
							[plc, keyWords]

			);


}

/**
 * loadBanner will load a banner that you can align to top or bottom of the screen via the BANNER_TOP and BANNER_BOTTOM 
 * @param {string} plc - the placement
 * @param {int} width - the width of the placement
 * @param {int} height - the height of the placement
 * @param {int} position - the position of the placement.  Either AerServSDK.BANNER_TOP or AerServSDK.BANNER_BOTTOM
 * @param {function} onAdLoadedCallback - the callback function for when the ad is loaded
 * @param {function} onAdFailedCallback - the callback function for when the ad has failed to load 
 * @param {function} onAdShownCallback - the callback function for when the ad has finished 
 * @param {function} onAdClickedCallback - the callback function for when the ad has been touched 
 * @param {function} onAdDismissedCallback - the callback function for when the ad has been dismissed 
 * @param {string} keyWords - comma seperated string of keywords to filter ads with 
 *
 */
AerServSDK.loadBanner = function(plc, width, height, position, onAdLoadedCallback, onAdFailedCallback, onAdShownCallback,
																 onAdClickedCallback, onAdDismissedCallback, keyWords) {

	if(keyWords == null)
				keyWords = "";

	this.onAdLoadedCallback = onAdLoadedCallback;
	this.onAdFailedCallback = onAdFailedCallback; 
	this.onAdShownCallback = onAdShownCallback;
	this.onAdClickedCallback = onAdClickedCallback;
	this.onAdDismissedCallback = onAdDismissedCallback;

	self = this;
	
	cordova.exec(function(winParams){

								console.log(winParams[0]);
								console.log(winParams[1]);
								self[winParams[0]](winParams[1]);

							},
							function(error){


							},
							"AerServSDKPhoneGapPlugin",
							"loadBanner",
							[plc, width, height, position, keyWords]

			);


}

/**
 * killBanner will remove the banner from the view
 */
AerServSDK.killBanner = function() {

	
	cordova.exec(function(winParams){

							},
							function(error){


							},
							"AerServSDKPhoneGapPlugin",
							"killBanner",
							[]

	);


}


module.exports = AerServSDK;
