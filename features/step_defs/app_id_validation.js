const fs = require('fs');
const path = require('path');
const assert = require('assert');
const request = require('request');
const { Given, When, Then, After } = require('cucumber');

const api_key = 'a66e83ff8c1cac1ea15902f0ed3f5ff3';
const api_uri = 'http://api.openweathermap.org/data/2.5/forecast';

function get_api_call(city_id){
	var uri_array = [];
	uri_array.push(api_uri);
	uri_array.push('?');
	uri_array.push('id=');
	uri_array.push(city_id);
	uri_array.push('&appid=');
	uri_array.push(api_key);
	return uri_array.join('');
};

var res;

When('Weather request with valid application id is sent', function (done) {
           // Write code here that turns the phrase above into concrete actions
		   const city_id = '524901';
		   var target_uri = get_api_call(city_id);

		   request.get(target_uri)
		   	.on('response', (response)=> {
			    res = response.statusCode;
				done();
			})
			.pipe(fs.createWriteStream('response.json'))
			.on('error', ()=> {
				return 'fail';
			});

			return 'fail';
         });
Then('{int} response code', function (int, done) {
	   assert.equal(res, '200');
	   done();
     });

Then('JSON response with weather', function (done) {
           //validate json
		   
		   done();
         });

After(()=>{
	var file_path = path.join(process.cwd(), 'response.json');
	fs.unlink(file_path, (err)=>{
		if (err) throw (err);
	});
});
