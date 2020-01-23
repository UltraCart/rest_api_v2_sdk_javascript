# UltraCartRestApiV2.WebhookEventSubscription

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | **String** | Comment about the event to provide further clarification to the end user | [optional] 
**deprecated_flag** | **Boolean** | True if the event is deprecated.  See the API change log for details on when it will be discontinued. | [optional] 
**discontinued_flag** | **Boolean** | True if the event is discontinued.  See the API change log for details on migration details. | [optional] 
**event_description** | **String** | Description of the event | [optional] 
**event_name** | **String** | Event name | [optional] 
**expansion** | **String** | The expand string for the notification object.  See the individual resource _expand documentation for valid values. | [optional] 
**subscribed** | **Boolean** | True if this is event is subscribed to | [optional] 
**supports_reflow** | **Boolean** | True if the event can be triggered to reflow existing records | [optional] 
**webhook_event_oid** | **Number** | The webhook event object identifier | [optional] 


