Feature: Create a new note
  As a user, I want to create a new note easily using a simple and intuitive interface.

  Background:
    Given I am on the notes application homepage

  Scenario: User creates a new note
    When I click the 'New Note' button
    Then a new note should appear in an editable text area

  Scenario: Note auto-saves after inactivity
    Given I create a new note with text 'Sample Note'
    And I wait for the auto-save duration
    Then the note should be saved automatically

  Scenario: Attempt to create a new note without clicking 'New Note'
    When I do not click the 'New Note' button
    Then no new editable text area should appear