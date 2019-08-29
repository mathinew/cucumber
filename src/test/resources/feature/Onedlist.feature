
Feature: Adding Customer ID


  Scenario: Generate Customer ID
    Given Use should launch browser and url
    And User click Add customer
    When User provide valid detailsonedlist
    | fnamea | lnamea | test1@gmail.com | chennai |367895678|
    Then Verify customer ID generated for entered details



   