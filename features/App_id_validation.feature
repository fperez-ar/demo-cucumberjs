Feature: App id validation

	Scenario: Send weather request with valid app id
		When Weather request with valid application id is sent
		Then 200 response code
		And JSON response with weather
