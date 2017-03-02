# UltraCartRestApiV2.Webhook

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiUserOid** | **Integer** | Populated if webhook associated with an API user | [optional] 
**apiVersion** | **String** | Version of the API objects that are sent in notifications | [optional] 
**applicationProfile** | [**ApiUserApplicationProfile**](ApiUserApplicationProfile.md) |  | [optional] 
**authenticationType** | **String** | The type of authentication this webhook will use when communicating with your server | [optional] 
**basicPassword** | **String** | Basic authentication password | [optional] 
**basicUsername** | **String** | Basic authentication user name | [optional] 
**consecutiveFailures** | **Integer** | The number of consecutive failures that have occurred trying to deliver notifications to the target server | [optional] 
**disabled** | **Boolean** | True if the webhook has been disabled | [optional] 
**eventCategories** | [**[WebhookEventCategory]**](WebhookEventCategory.md) | The categories of events.  Individual events and subscriptions are handled in the child objects.  _placeholders parameter effects the population of this on a retrieval. | [optional] 
**maximumEvents** | **Integer** | The maximum number of events in the payload that UltraCart will deliver | [optional] 
**maximumSize** | **Integer** | The maximum size of the payload that UltraCart will deliver | [optional] 
**merchantId** | **String** | The UltraCart merchant ID that owns this webhook | [optional] 
**nextRetryAfter** | **String** | The next time UltraCart will attempt delivery if failures have been occurring | [optional] 
**pending** | **Integer** | The number of pending events for this webhook | [optional] 
**webhookOid** | **Integer** | The object identifier for this webhook | [optional] 
**webhookUrl** | **String** | The URL to deliver events to.  Must be HTTPS for customer related information. | [optional] 


<a name="ApiVersionEnum"></a>
## Enum: ApiVersionEnum


* `01` (value: `"2016-10-01"`)




<a name="AuthenticationTypeEnum"></a>
## Enum: AuthenticationTypeEnum


* `none` (value: `"none"`)

* `basic` (value: `"basic"`)




