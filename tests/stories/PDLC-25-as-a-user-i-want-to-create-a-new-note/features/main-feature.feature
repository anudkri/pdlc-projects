Feature: Create a new note

  Scenario: User creates a new note successfully
    Given the user is on the Notes page
    When the user enters a title "Sample Note Title" and a body "Sample Note Body"
    And the user saves the note
    Then the note is added to the user's note list

  Scenario: User attempts to save a note without a title
    Given the user is on the Notes page
    When the user enters a body "Sample Note Body" but leaves the title empty
    And the user attempts to save the note
    Then an error message "Title cannot be empty" is displayed

  Scenario: User attempts to save a note without a body
    Given the user is on the Notes page
    When the user enters a title "Sample Note Title" but leaves the body empty
    And the user attempts to save the note
    Then an error message "Body cannot be empty" is displayed