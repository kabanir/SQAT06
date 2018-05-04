const { Given, When, Then } = require('cucumber')
const chai = require('chai')
const should = chai.should()
const WebdriverIO = require('webdriverIO');
const options = { desiredCapabilities: { browserName: 'chrome' } };
const client = webdriverio.remote(options);

const username_constant = Math.random().toString(36).substr(7)
const password = "poopduck"



"use strict";


Given('I go figure1 registration page'), function(callback) {this.browser
.init()
.url('https://app.figure1.com/account/register/').then(function() 
{callback();
})
})

When('I enter to create an account', function(callback) {this.browser
  .waitforvisible('.register-page_username-input')
  .setvalue('#.register-page__username-input', 'WebdriverIO')
.click('#search_button_homepage'). then(function()
{callback();
})  
})

Then('I should see the search results', function(callback) { this.browser
.getTitle().then(function(result){result.should.equal("WebdriverIO at DuckDuckGO");
callback();
}).catch(function(error){
  callback(error);
})
}

// Given ('I go to figure1', function(callback) {this.browser
// .init()
// .url('https://app.figure1.com/account/register').then(function() {
// callback();
// })
// })

// When('I sign up with valid credentials', function(callback){
// this.browser
// .waitforvisible('.register-page_username-input')
// .setValue('.register-page__username-input', username_constant).then(function() {callback();
// }).catch(function(error) {callback(error);
// })
// .setValue('.register-page__email-input', username_constant        +"@yahoo.com").then(function() {callback();
// }).catch(function(err) {callback(error);
// })
// .setValue('.register-page__password-input', password)
// .then(function() {callback();
// }).catch(function(err) {callback(error);
// })
