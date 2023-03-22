Feature: Google Search
  As a user, I want to search for Apple and verify the number of search results

  Scenario: Search for Apple
    Given I am on the Google search page
    When I search for "Apple"
    Then I should see at least 100000 results
    Then Snapshot "Apple"
    Then Snapshot
