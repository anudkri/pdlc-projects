
Feature: Notes Sorting

  Scenario: Verify sorting in ascending order
    Background:
      Given User is logged in and on the notes page
    Given Multiple notes with varying creation dates are present
    When Locate the sorting dropdown or button
    And Select the option to sort notes by date created in ascending order
    Then Notes are displayed in ascending order of their creation dates
    Tags: @sorting @automated @high
