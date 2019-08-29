
Feature: Adding Tarrif pplan


  Scenario: Generate Tarrif plan 
    Given Use should launch browser and url
    And User click Tarrif plan
    When User provide valid detailstwodlist
    
	| 2000 | 100 | 20 | 100 | 5 | 11 | 1 |
	| 1000 | 50 | 10 | 50 | 10 | 12 | 45 |
         
    Then Verify Tarrif plan added



   