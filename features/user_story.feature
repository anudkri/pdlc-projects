Feature: NoteEase - Simple Note-Taking App

  Scenario: New user signs up successfully
    Given I am on the Welcome screen
    When I click on the Sign Up button
    And I enter a valid email and password
    Then I should be registered and logged into the app

  Scenario: New user attempts to sign up with invalid email
    Given I am on the Welcome screen
    When I click on the Sign Up button
    And I enter an invalid email "invalidemail"
    Then I should see an error message for invalid email format

  Scenario: New user attempts to sign up with weak password
    Given I am on the Welcome screen
    When I click on the Sign Up button
    And I enter a password "123"
    Then I should see an error message for weak password

  Scenario: Returning user logs in successfully
    Given I am on the Welcome screen
    When I enter a valid email and password
    Then I should see my list of notes

  Scenario: Returning user fails to log in with incorrect credentials
    Given I am on the Welcome screen
    When I enter an invalid email or password
    Then I should see an error prompt for incorrect credentials

  Scenario: User creates a new note
    Given I am logged in and on the Note List screen
    When I click on the New Note button
    And I enter "My Note Title" and "This is the content"
    Then the note should be saved and appear in the note list

  Scenario: User edits an existing note
    Given I am logged in and have at least one saved note
    When I select a note and modify its content
    Then the note should be updated with the new content

  Scenario: User deletes a note
    Given I am logged in and have at least one saved note
    When I delete a note
    Then I should be prompted for confirmation
    And the note should be removed after confirmation