@register

Feature: Site register

Scenario: Register a new User
    Given I am on the home screen
    And I am not registered
    Then I see the Register button
    When I press the Register button
    Then I should see the Register form
    Given I fill name input with "Carlos"
    And lastname input with "Gutierrez"
    And email input with "carlos.gutierrez@gigigo.com.mx"
    And pass input with "123456"
    And I press the submit button
    Then I go to the welcome screen
    And the site should shows "Welcome Carlos"
