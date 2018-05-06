const { Given, When, Then } = require('cucumber')
const chai = require('chai')
const should = chai.should()
const username_constant = Math.random().toString(36).substr(7)
const password = "poopduck"

"use strict";

Given('I go figure1 registration page', function(callback) {
  this.browser
    .init()
    .url('https://app.figure1.com/account/register/').then(function(){
      callback();
    })
    .catch(function(err){
      console.log(err)
      callback(err)
    })
  })

When('I put valid credentials on sign up page fields', function(callback) {
  this.browser
    .waitForVisible('.register-page__username-input', 2000)
    .setValue('.register-page__username-input', username_constant)
    .waitForVisible('.register-page__email-input', 2000)
    .setValue('.register-page__email-input', username_constant+"@yahoo.com")
    .waitForVisible('.register-page__password-input', 2000)
    .setValue('.register-page__password-input', password)
    .waitForVisible('.register-page__confirm-password-input', 2000)
    .setValue('.register-page__confirm-password-input', password)
    .waitForVisible('.register-page__specialties-list', 2000)
    .addValue('.register-page__specialties-list','Physician')
    .waitForVisible('.register-page__specialties-other-list')
    .addValue('.register-page__specialties-other-list','Genetics')
    .waitForVisible('.register-page__terms-checkbox')
    .scroll('.register-page__terms-checkbox')
    .click('.register-page__terms-checkbox')
    .waitForVisible('.register-page__submit-button')
    .click('.register-page__submit-button')
    .then(function(){
      callback();
    })
    .catch(function(err){
      console.log(err)
      callback(err)
  })
}) 

Then('I should see the result for sign in', function(callback) { 
  this.browser
  .waitForVisible('.header-search', 5000)
  .isVisible('.header-search').then(function(result){
      result.should.be.true;
      callback();
}).catch(function(error){
  callback(error);
  })
})




