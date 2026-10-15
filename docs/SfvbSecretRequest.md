# UltraCartRestApiV2.SfvbSecretRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **String** | When the request was made, ISO 8601 UTC. | [optional] 
**delegated** | **Boolean** | True when the requester handed it to a colleague to fill in. | [optional] 
**description** | **String** | The sentence the person reads.  Written by the server, not the agent. | [optional] 
**expires_at** | **String** | When a pending request lapses, ISO 8601 UTC. | [optional] 
**expires_in_seconds** | **Number** | Seconds until expires_at.  Zero once passed. | [optional] 
**fulfilled_at** | **String** | When the values were entered, ISO 8601 UTC. | [optional] 
**handle_count** | **Number** | How many handles the request made. | [optional] 
**handles** | [**[SfvbSecretHandle]**](SfvbSecretHandle.md) | Every handle with its status.  Left out of the list endpoint; read one request for them. | [optional] 
**interval_seconds** | **Number** | Poll no more often than this. | [optional] 
**keys** | **[String]** | The bulk keys, or empty. | [optional] 
**label** | **String** | The label the agent sent, as stored and shown. | [optional] 
**reason** | **String** | The reason the agent sent, as stored and shown. | [optional] 
**request_id** | **String** | The request id. | [optional] 
**request_url** | **String** | The page where the person enters the values.  Show it to them.  Never open or fill it in yourself. | [optional] 
**requires_totp** | **Boolean** | True when the person must enter a code from their authenticator app. | [optional] 
**sinks** | **[String]** | The secret fields being collected. | [optional] 
**status** | **String** | pending, fulfilled, cancelled or expired. | [optional] 
**target_id** | **String** | The object the values are for, or empty for a bulk request or an open one. | [optional] 
**user_code** | **String** | Short matching code.  Print it next to request_url so the person can check the page shows the same code. | [optional] 



## Enum: StatusEnum


* `pending` (value: `"pending"`)

* `fulfilled` (value: `"fulfilled"`)

* `cancelled` (value: `"cancelled"`)

* `expired` (value: `"expired"`)




