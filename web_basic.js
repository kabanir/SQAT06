"use strict";

const webdriverio = require('webdriverio');
const options = { desiredCapabilities: { browserName: 'chrome' } };

const client = webdriverio.remote(options);

client
    .init()
    .url('https://app.figure1.com/account/register')
    .waitForVisible(".register-page__username-input")
    .setValue('.register-page__username-input',Math.random().toString(36).substr(7))
    .catch(function(err){
        console.log(err)
      })
      .setValue('.register-page__email-input',Math.random().toString(36).substr(7)+"@yahoo.com")
      .catch(function(err){
          console.log(err) 
      })   
      .setValue('.register-page__password-input','Verycold@2017')
      .catch(function(err){
          console.log(err)
      })   
      .setValue('.register-page__confirm-password-input','Verycold@2017')
      .catch(function(err){
          console.log(err)
      })   
      .addValue('.register-page__specialties-list','Physician')
      .catch(function(err){
          console.log(err)
      })
         
      .addValue('.register-page__specialties-other-list','My specialty is')
      .catch(function(err){
          console.log(err)
      })  