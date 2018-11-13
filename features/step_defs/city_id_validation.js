const fs = require('fs');
const path = require('path');
const assert = require('assert');
const request = require('request');
const { Given, When, Then, After } = require('cucumber');

const api_key = 'a66e83ff8c1cac1ea15902f0ed3f5ff3';
const api_uri = 'http://api.openweathermap.org/data/2.5/forecast';

function get_api_uri(city_id) {
	var uri_array = [];
	uri_array.push(api_uri);
	uri_array.push('?');
	uri_array.push('id=');
	uri_array.push(city_id);
	uri_array.push('&appid=');
	uri_array.push(api_key);

	return uri_array.join('');
};


When('Weather request with valid city id is sent', function (done) {
	   const valid_city_id = '524901';
	   var target_uri = get_api_uri(valid_city_id);

	   request.get(target_uri)
	   	.on('response', (response) => {
		    this.response = response.statusCode;
			done();
		})
		.on('error', ()=> {
			return 'fail';
		});

		return 'fail';
	 });

When('Weather request with invalid city id is sent', function (done) {
	   const invalid_city_id = '0';
	   var target_uri = get_api_uri(invalid_city_id);

	   request.get(target_uri)
	   	.on('response', (response) => {
		    this.response = response.statusCode;
			done();
		})
		.on('error', ()=> {
			return 'fail';
		});

		return 'fail';
	 });
