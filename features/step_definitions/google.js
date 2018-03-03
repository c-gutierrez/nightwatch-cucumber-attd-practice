// features/step_definitions/google.js

const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');

Given(/^I open Google's search page$/, () => {
  return client
    .url('http://google.com')
    .waitForElementVisible('body', 1000);
});

Then(/^the title is "([^"]*)"$/, (title) => {
  return client.assert.title(title);
});

Then(/^the Google search form exists$/, () => {
  return client.assert.visible('input[name="q"]');
});

Then('I search {string}', string => {
    return client.pause(1000).setValue('input[name="q"]', string);
});

Then('I click on search button', () => {
    return client.pause(1500).keys("\uE006");
});

Then('I should see the result list', () => {
    return client
        .waitForElementVisible('#search', 10000)
	.pause(2000);
});


