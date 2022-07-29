Feature: as a user I expect to be able to navigate to the home page

  Scenario: As a user I expect to be able to see contacts
    Given I am on the home page
    Then the logo is visible
    When I click the logo
    Then catalog with birds is displayed