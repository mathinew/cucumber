Feature: Adding Customer ID

  Scenario: Generate Customer ID
    Given Use should launch browser and url
    And User click Add customer
    When User provide valid detailsonedmap
      | fname   | fnamea         |
      | lname   | lnamea         |
      | email   | test@gmail.com |
      | address | chennai        |
      | phone   |      123456789 |
    Then Verify customer ID generated for entered details
