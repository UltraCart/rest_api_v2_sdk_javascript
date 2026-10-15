# UltraCartRestApiV2.SfvbCommsDnsRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The host name, relative to the domain.  @ is the domain itself. | [optional] 
**purpose** | **String** | What the record is for.  verification proves the domain is yours, spf lists who may send for it, and dkim signs its mail. | [optional] 
**type** | **String** | The record type. | [optional] 
**value** | **String** | The value to publish. | [optional] 



## Enum: PurposeEnum


* `verification` (value: `"verification"`)

* `spf` (value: `"spf"`)

* `dkim` (value: `"dkim"`)





## Enum: TypeEnum


* `TXT` (value: `"TXT"`)

* `CNAME` (value: `"CNAME"`)




