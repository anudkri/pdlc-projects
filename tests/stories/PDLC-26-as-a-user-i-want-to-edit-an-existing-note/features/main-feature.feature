Feature: Edit an existing note

  Scenario: Successfully editing a note
    Given a user has logged into their account
    And a note exists with the title 'Sample Note' and body 'Sample Body'
    When the user selects the note
    And the user changes the title to 'Updated Note'
    And the user changes the body to 'Updated Body'
    And the user saves the note
    Then the note should be updated with title 'Updated Note' and body 'Updated Body'

  Scenario: Editing a note without making changes
    Given a user has logged into their account
    And a note exists with the title 'Sample Note' and body 'Sample Body'
    When the user selects the note
    And the user saves the note without making changes
    Then the note should remain with title 'Sample Note' and body 'Sample Body'

  Scenario: Trying to edit a non-existent note
    Given a user has logged into their account
    When the user tries to select a note that does not exist
    Then an error message should be displayed saying 'Note not found'

  Scenario: Handling a network error during note editing
    Given a user has logged into their account
    And a note exists with the title 'Sample Note' and body 'Sample Body'
    When the user selects the note
    And a network error occurs while saving
    Then an error message should be displayed saying 'Unable to save changes. Please try again.'