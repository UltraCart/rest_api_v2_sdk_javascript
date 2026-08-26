# UltraCartRestApiV2.SfvbErrorDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | Stable machine readable code.  Namespaced sfvb.*  Safe to match on; these are never reworded. | [optional] 
**column** | **Number** | 1-indexed column number.  Populated for Velocity problems. | [optional] 
**did_you_mean** | **[String]** | Close matches for an unrecognized value, best match first.  Populated for unknown element types and unknown configuration keys. | [optional] 
**expected** | **String** | Description of what was expected instead. | [optional] 
**found** | **String** | The value that was actually found, when the problem is about a value. | [optional] 
**line** | **Number** | 1-indexed line number.  Populated for Velocity problems; null for CJSON problems, which carry a pointer instead. | [optional] 
**message** | **String** | Human readable description of the problem. | [optional] 
**pointer** | **String** | JSON Pointer (RFC 6901) to the offending node within the submitted CJSON.  Null for whole-document problems. | [optional] 
**severity** | **String** | error or warning.  Warnings never fail a request. | [optional] 
**suggestion** | **String** | Optional pointer at a known good example, typically a storefront library fragment that solves the same problem properly. | [optional] 



## Enum: SeverityEnum


* `error` (value: `"error"`)

* `warning` (value: `"warning"`)




