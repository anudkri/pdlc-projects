Feature: Delete a note
  As a user, I want to delete a note so that I can remove notes I no longer need.

  Scenario: Successfully delete a note
    Given the user is logged in and on the notes page
    When the user selects a note to delete
    And confirms the deletion action
    Then the note is removed from the user's note list

  Scenario: Cancel deletion of a note
    Given the user is logged in and on the notes page
    When the user selects a note to delete
    And cancels the deletion action
    Then the note remains in the user's note list

  Scenario: Attempt to delete a non-existent note
    Given the user is logged in and on the notes page
    When the user tries to delete a non-existent note
    Then the system should show an error message
    And no changes are made to the user's note list