# UltraCartRestApiV2.Webhook

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_user_oid** | **Number** | Populated if webhook associated with an API user | [optional] 
**api_version** | **String** | Version of the API objects that are sent in notifications | [optional] 
**application_profile** | [**ApiUserApplicationProfile**](ApiUserApplicationProfile.md) |  | [optional] 
**authentication_type** | **String** | The type of authentication this webhook will use when communicating with your server | [optional] 
**basic_password** | **String** | Basic authentication password | [optional] 
**basic_username** | **String** | Basic authentication user name | [optional] 
**consecutive_failures** | **Number** | The number of consecutive failures that have occurred trying to deliver notifications to the target server | [optional] 
**disabled** | **Boolean** | True if the webhook has been disabled | [optional] 
**event_categories** | [**[WebhookEventCategory]**](WebhookEventCategory.md) | The categories of events.  Individual events and subscriptions are handled in the child objects.  _placeholders parameter effects the population of this on a retrieval. | [optional] 
**iam_access_key** | **String** | IAM Access Key for AWS SQS Delivery | [optional] 
**iam_secret_key** | **String** | IAM Secret Key for AWS SQS Delivery | [optional] 
**maximum_events** | **Number** | The maximum number of events in the payload that UltraCart will deliver | [optional] 
**maximum_size** | **Number** | The maximum size of the payload that UltraCart will deliver | [optional] 
**merchant_id** | **String** | The UltraCart merchant ID that owns this webhook | [optional] 
**next_retry_after** | **String** | The next time UltraCart will attempt delivery if failures have been occurring | [optional] 
**pending** | **Number** | The number of pending events for this webhook | [optional] 
**webhook_oid** | **Number** | The object identifier for this webhook | [optional] 
**webhook_url** | **String** | The URL to deliver events to.  Must be HTTPS for customer related information. | [optional] 


<a name="ApiVersionEnum"></a>
## Enum: ApiVersionEnum


* `_20170301` (value: `"2017-03-01"`)




<a name="AuthenticationTypeEnum"></a>
## Enum: AuthenticationTypeEnum


* `none` (value: `"none"`)

* `basic` (value: `"basic"`)




