const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');

Given('I am on the home screen', () => {
    return Promise.reject('Test fail!');
});

Given('I am not registered', () => {
    return Promise.reject('Test fail!');
});

Given('I see the Register button', () => {
    return Promise.reject('Test fail!');
});

When('I press the Register button', () => {
    return Promise.reject('Test fail!');
});

Then('I should see the Register form', () => {
    return Promise.reject('Test fail!');
});

Given('I fill name input with {string}', (name) => {
    return Promise.reject('Test fail!');
});

Given('lastname input with {string}', (lastname) => {
    return Promise.reject('Test fail!');
});

Given('email input with {string}', (email) => {
    return Promise.reject('Test fail!');
});

Given('pass input with {string}', (email) => {
    return Promise.reject('Test fail!');
});

Given('I press the submit button', () => {
    return Promise.reject('Test fail!');
});

Then('I go to the welcome screen', () => {
    return Promise.reject('Test fail!');
});

Then('the site should shows {string}', (message) => {
    return Promise.reject('Test fail!');
});
