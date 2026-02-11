
Feature: Notes Sorting

  Scenario: Sort notes by date created in ascending order
    Given User is logged into the notes application
    And There are multiple notes with different creation dates
    When Navigate to the notes list view
    And Activate the sort option and select 'Sort by date created ascending'
    Then Notes are displayed in ascending order by date created
    Tags: @high @automated
