Feature: NoteTaker Pro - Main Features

  Scenario: User successfully logs in
    Given the user is on the login page
    When the user enters valid credentials
    Then the user should be redirected to the note list page
    And a message "Login successful" is displayed

  Scenario: User fails to log in with invalid credentials
    Given the user is on the login page
    When the user enters invalid credentials
    Then an error message "Invalid username or password" is displayed

  Scenario: User creates a new note
    Given the user is logged in
    When the user creates a new note with title "Meeting Notes" and body "Discuss project timeline"
    Then the note should appear in the user's note list with the correct title

  Scenario: User organizes notes using tags
    Given the user is logged in
    When the user creates a new tag "Work"
    And applies the tag to an existing note
    Then the note should be displayed under the "Work" tag

  Scenario: User searches for notes
    Given the user is logged in
    When the user searches for "project"
    Then the search results should include notes with the keyword "project"

  Scenario: User edits a note
    Given the user is logged in
    And the user opens an existing note
    When the user updates the note's body
    Then the changes should be saved and visible in the note list