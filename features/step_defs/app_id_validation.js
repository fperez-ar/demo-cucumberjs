const fs = require('fs');
const path = require('path');
const assert = require('assert');
const request = require('request');
const { Given, When, Then, After } = require('cucumber');

const city_id = '524901';
const api_uri = 'http://api.openweathermap.org/data/2.5/forecast';

function get_api_uri(api_key) {
	var uri_array = [];
	uri_array.push(api_uri);
	uri_array.push('?');
	uri_array.push('id=');
	uri_array.push(city_id);
	uri_array.push('&appid=');
	uri_array.push(api_key);

	return uri_array.join('');
};


When('Weather request with valid application id is sent', function (done) {
	   const valid_api_key = 'a66e83ff8c1cac1ea15902f0ed3f5ff3';
	   var target_uri = get_api_uri(valid_api_key);

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

When('Weather request with invalid application id is sent', function (done) {
	   const invalid_api_key = '0';
	   var target_uri = get_api_uri(invalid_api_key);

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

Then('{int} response code', function (int) {
	   assert.equal(int, this.response);
     });

After( function () {
	this.response = undefined;
});
