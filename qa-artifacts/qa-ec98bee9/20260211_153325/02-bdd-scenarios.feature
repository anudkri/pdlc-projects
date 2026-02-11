
Feature: User Authentication

  Scenario: User Login with Valid Credentials
    Background:
      Given User account with active status
      Given Access to the login page
    Given User is on the login page
    And User has valid credentials
    When User enters valid username and password
    And User clicks on the 'Login' button
    Then User is successfully logged in
    And User is redirected to the dashboard
    Tags: @authentication @login @automated @high
