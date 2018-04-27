"use strict";

const webdriverio = require('webdriverio');
const options = { desiredCapabilities: { browserName: 'chrome' } };

const client = webdriverio.remote(options);

const chai = require('chai')
const should = chai.should()

const username_constant = Math.random().toString(36).substr(7)
const password = "poopduck"

client
    .init()
    .url('https://app.figure1.com/account/register')
    .waitForVisible(".register-page__username-input")
    .setValue('.register-page__username-input', username_constant)
    .catch(function(err){
        console.log(err)
      })
      .setValue('.register-page__email-input', username_constant+"@yahoo.com")
      .catch(function(err){
          console.log(err) 
      })   
      .setValue('.register-page__password-input', password)
      .catch(function(err){
          console.log(err)
      })
      .setValue('.register-page__confirm-password-input', password)
      .catch(function(err){
          console.log(err)
      })   
      .addValue('.register-page__specialties-list','Physician')
      .catch(function(err){
          console.log(err)
      })
         
    //   .addValue('.register-page__specialties-other-list','Genetics')
    //   .catch(function(err){
    //       console.log(err)
    //   })
      .click('.register-page__terms-checkbox')
      .catch(function(err){
        console.log(err)
      })
      .click('.register-page__submit-button')
      .catch(function(err){
        console.log(err)
      })
      .getText(".invalid-field").then((element) => {
          element.should.equal('Pleasedsfsdf select a valid specialty')
      })
