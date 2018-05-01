# UltraCartRestApiV2.WebhookEventCategory

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_category** | **String** | Name of the event category | [optional] 
**events** | [**[WebhookEventSubscription]**](WebhookEventSubscription.md) | The events within the category.  Individual subscription flags contained within the child object. | [optional] 
**subscribed** | **Boolean** | True if all the events within this category are subscribed.  This is a convenience flag to make user interfaces easier. | [optional] 


