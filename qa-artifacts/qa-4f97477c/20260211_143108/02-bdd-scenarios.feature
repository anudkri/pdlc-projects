
Feature: Notes Sorting

  Scenario: Verify ascending sort by date created
    Background:
      Given User is logged into the notes application
    Given Notes exist with various creation dates
    When Navigate to the notes section
    And Click on the sort option
    And Select 'Sort by Date Created - Ascending'
    Then Notes are displayed in ascending order by date created
    Tags: @automated @high
