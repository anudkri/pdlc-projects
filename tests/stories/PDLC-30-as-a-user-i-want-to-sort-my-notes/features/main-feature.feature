Feature: Sort Notes
  As a user, I want to sort my notes by different criteria
  
  Scenario: Sort notes by date created
    Given I am on the notes page
    When I sort notes by date created
    Then the notes should be displayed in order of date created

  Scenario: Sort notes by title
    Given I am on the notes page
    When I sort notes by title
    Then the notes should be displayed in alphabetical order by title

  Scenario: Sort notes with an empty list
    Given I am on the notes page with no notes
    When I attempt to sort notes by date created
    Then no error is displayed and list remains empty

  Scenario: Sort notes with identical titles
    Given I am on the notes page with multiple notes having the same title
    When I sort notes by title
    Then the notes with identical titles should remain in their original order
