
Feature: Adding Customer ID


  Scenario Outline: Generate Customer ID
    Given Use should launch browser and url
    And User click Add customer
    When User provide valid detailsoutline "<fname>", "<lname>", "<email>" , "<address>", "<phone>"
    Then Verify customer ID generated for entered details



    Examples: 
      | fname  | lname | email  |address| phone | 
      | fnamea | lnamea | test1@gmail.com | chennai |367895678|
			| fnameb | lnameb | test2@gmail.com  |madurai |567676756|
			| fnamec | lnamec | test3@gmail.com |bangalore| 367895678|
			| fnamec | lnamed | test4@gmail.com | trichy|362345478|
			
			
			