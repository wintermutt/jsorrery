
(function(ns){
	'use strict';
	require.config({
		baseUrl: './js/',
		paths:{
			'jquery' : 'vendor/jquery.min',
			'vendor/jquery.scrollto' : 'vendor/jquery.scrollTo-1.4.2-min',
			'three' : 'vendor/three.min',
			'_' : 'vendor/underscore-min',
			'ui' : 'vendor/jquery-ui-1.10.3.custom.min',
			'three/controls/OrbitControls' : 'vendor/three/controls/OrbitControls',
			'three/controls/TrackballControls' : 'vendor/three/controls/TrackballControls',
			'three/stats' : 'vendor/three/stats.min',
			'three/RingGeometry2' : 'vendor/three/RingGeometry2'
		},
		shim: {
			'three': {
				deps: []
			},
			'jquery': {
				deps: []
			},
			'ui': {
				deps: ['jquery']
			},
			'vendor/jquery.autosize': {
				deps: ['jquery']
			},
			'vendor/jquery.scrollto': {
				deps: ['jquery']
			},
			'three/controls/OrbitControls' : {
				deps: ['three']
			},
			'three/controls/TrackballControls' : {
				deps: ['three']
			},
			'three/RingGeometry2' : {
				deps: ['three']
			}
		}
	});
		
	require([
		'jquery',
		'jsorrery/Main'
	], function($, JSOrrery){
		$(function(){
			ns.app = JSOrrery.init();
		});
	});
	
})(window.jsorrery = window.jsorrery || {});