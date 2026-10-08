# UltraCartRestApiV2.SfvbRedirectDeleteRowResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hash_sha256** | **String** | The rule&#39;s current hash.  Absent when not_found. | [optional] 
**note** | **String** | The rule&#39;s note. | [optional] 
**redirect_id** | **Number** | The rule. | [optional] 
**result** | **String** | deletable, stale (the rule changed since its hash was read), not_found, or deleted after an apply. | [optional] 
**source** | **String** | The rule&#39;s source, for a backup. | [optional] 
**status** | **String** | The rule&#39;s status (301, 302 or rewrite). | [optional] 
**target** | **String** | The rule&#39;s target, for a backup. | [optional] 
**type** | **String** | exact or pattern. | [optional] 



## Enum: ResultEnum


* `deletable` (value: `"deletable"`)

* `stale` (value: `"stale"`)

* `not_found` (value: `"not_found"`)

* `deleted` (value: `"deleted"`)




