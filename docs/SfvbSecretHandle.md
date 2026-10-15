# UltraCartRestApiV2.SfvbSecretHandle

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expires_at** | **String** | When it stops being usable, ISO 8601 UTC. | [optional] 
**fingerprint** | **String** | The last few characters of the value, as a mask shows them, so the person can tell values apart.  Empty until entered. | [optional] 
**handle** | **String** | The handle.  Safe to log and keep in plans.  It works only for the sign-in that requested it. | [optional] 
**key** | **String** | The bulk key it is for, or empty. | [optional] 
**sink** | **String** | The secret field it can be written to. | [optional] 
**status** | **String** | pending (no value yet), ready, in_use (a write holds it), consumed, revoked or expired. | [optional] 
**target_id** | **String** | The object it can be written to, or empty when the request named none. | [optional] 
**uses_left** | **Number** | Writes left.  Empty once the handle is gone. | [optional] 



## Enum: StatusEnum


* `pending` (value: `"pending"`)

* `ready` (value: `"ready"`)

* `in_use` (value: `"in_use"`)

* `consumed` (value: `"consumed"`)

* `revoked` (value: `"revoked"`)

* `expired` (value: `"expired"`)




