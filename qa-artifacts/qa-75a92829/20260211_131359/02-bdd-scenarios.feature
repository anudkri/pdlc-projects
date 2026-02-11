
Feature: Notes Sorting

  Scenario: Sort Notes by Date Created - Ascending Order
    Given User is logged into the application
    And User has created at least five notes with different creation dates
    When User navigates to the notes section of the application
    And User clicks on the 'Sort by Date Created' button or option
    And User selects 'Ascending Order' if applicable
    Then Notes are displayed in ascending order, starting from the earliest to the latest creation date
    Tags: @sorting @automated @high
