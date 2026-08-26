# UltraCartRestApiV2.ConversationPbxPayConnector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | Description of the connector | [optional] 
**environment** | **String** | Environment the connector points at.  Only live connectors are returned.  Sandbox and unconfigured connectors are ignored. | [optional] 
**friendly_name** | **String** | Friendly name of the connector as shown in the Twilio console | [optional] 
**merchant_id** | **String** | Merchant Id | [optional] 
**processor** | **String** | Payment processor behind this connector | [optional] 
**processor_account_id** | **String** | The processor account this connector is bound to (Stripe connected account id or Braintree merchant id).  A payment captured with this connector can only be charged within this account. | [optional] 
**sid** | **String** | Twilio installed add-on SID for this connector | [optional] 
**unique_name** | **String** | Unique name of the connector.  This is the value used for the paymentConnector attribute of the Twilio Pay verb. | [optional] 



## Enum: EnvironmentEnum


* `live` (value: `"live"`)





## Enum: ProcessorEnum


* `stripe` (value: `"stripe"`)

* `braintree` (value: `"braintree"`)

* `generic` (value: `"generic"`)

* `unknown` (value: `"unknown"`)




