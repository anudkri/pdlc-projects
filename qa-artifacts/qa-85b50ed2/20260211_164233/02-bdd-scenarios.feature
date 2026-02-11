
Feature: Notes Management

  Scenario: Verify sorting functionality orders notes by creation date
    Background:
      Given User is logged into the notes application
    Given User has a set of notes with distinct creation dates
    When User navigates to the notes section
    And User initiates sorting by creation date
    Then Notes are displayed in order of their creation date, from earliest to latest
    Tags: @sorting @automated @high
