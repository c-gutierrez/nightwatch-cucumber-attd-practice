const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');

Given('I am on the home screen', () => {
    return client
        .url('http://localhost:8080')
        .waitForElementVisible('#title', 5000)
        .assert
        .containsText('#title', 'ATDD');
});

Given('I am not registered', () => {
    return client
        .assert
        .containsText('h1', 'Home Page');
});

Given('I see the Register button', () => {
    return client
        .assert
        .elementPresent('#registerButton');
});

When('I press the Register button', () => {
    return client
        .click('#registerButton');
});

Then('I should see the Register form', () => {
    return client
        .assert
        .elementPresent('#registerForm');
});

Given('I fill name input with {string}', (name) => {
    return client
        .setValue('#inputName', name);
});

Given('lastname input with {string}', (lastname) => {
    return client
        .setValue('input[name="lastname"]', lastname);
});

Given('email input with {string}', (email) => {
    return client
        .setValue('input[name="email"]', email);
});

Given('pass input with {string}', (pass) => {
    return client
        .setValue('input[name="pass"]', pass);
});

Given('I press the submit button', () => {
    return client
        .click('#submit');
});

Then('I go to the welcome screen', () => {
    return client
        .assert
        .containsText('h1', 'Welcome Page');
});

Then('the site should shows {string}', (message) => {
    return client
        .assert
        .containsText('h2', message);
});
