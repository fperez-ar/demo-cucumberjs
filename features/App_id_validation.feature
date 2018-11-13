Feature: App id validation

	Scenario: Weather request with valid app id
		When Weather request with valid application id is sent
		Then 200 response code

	Scenario: Weather request with invalid app id
		When Weather request with invalid application id is sent
		Then 401 response code
