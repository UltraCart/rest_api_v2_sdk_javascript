# UltraCartRestApiV2.WebhookLog

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery_dts** | **String** | Date/time of delivery | [optional] 
**duration** | **Number** | Number of milliseconds to process the notification | [optional] 
**queue_delay** | **Number** | Number of milliseconds of delay caused by queuing | [optional] 
**request** | **String** | Request payload (first 100,000 characters) | [optional] 
**request_headers** | [**[HTTPHeader]**](HTTPHeader.md) | Request headers sent to the server | [optional] 
**request_id** | **String** | Request id is a unique string that you can look up in the logs | [optional] 
**response** | **String** | Response payload (first 100,000 characters) | [optional] 
**response_headers** | [**[HTTPHeader]**](HTTPHeader.md) | Response headers received from the server | [optional] 
**status_code** | **Number** | HTTP status code received from the server | [optional] 
**success** | **Boolean** | True if the delivery was successful | [optional] 
**uri** | **String** | URI of the webhook delivered to | [optional] 


