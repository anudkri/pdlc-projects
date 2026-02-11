
Feature: Note Sorting

  Scenario: Verify sorting of notes by date created in ascending order
    Given User is logged into the application
    And User has created multiple notes with different creation dates
    When Navigate to the notes section
    And Select the option to sort notes by date created
    And Choose 'Ascending' order
    Then Notes are displayed in ascending order based on their creation dates
    Tags: @high @automated
