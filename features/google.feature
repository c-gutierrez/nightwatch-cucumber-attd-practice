# features/google.feature

Feature: Google Search

More text and description

Scenario: Searching Google

  Given I open Google's search page
  Then the title is "Google"
  And the Google search form exists
  And I search "atdd"
  And I click on search button
  Then I should see the result list
