Feature: City id validation

	Scenario: Weather request with valid city id
		When Weather request with valid city id is sent
		Then 200 response code

	Scenario: Weather request with invalid city id
		When Weather request with invalid city id is sent
		Then 400 response code
