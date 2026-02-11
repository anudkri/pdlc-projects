
Feature: Notes Sorting

  Scenario: Verify sorting functionality with multiple notes
    Given User account with multiple notes created on different dates
    When Log in to the application.
    And Navigate to the notes section.
    And Select the option to sort notes by date created.
    Then Notes are displayed in ascending order based on their creation date.
    Tags: @sorting @automated @high
