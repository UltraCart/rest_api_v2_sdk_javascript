# UltraCartRestApiV2.SfvbValidateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cjson** | **String** | The container JSON to validate. | [optional] 
**containerName** | **String** | Container name it will be stored under, for example upsell-offer or email-footer.  Some rules key off the name. | [optional] 
**includeWarnings** | **Boolean** | Include quality warnings as well as errors.  Defaults to true. | [optional] 
**marketingEmail** | **Boolean** | For email containers, whether this is a marketing email.  Marketing emails carry CAN-SPAM footer requirements that transactional emails do not. | [optional] 
**ownerType** | **String** | Where this container is destined to live.  Determines which contextual rules apply. | [optional] 



## Enum: OwnerTypeEnum


* `theme` (value: `"theme"`)

* `page` (value: `"page"`)

* `item` (value: `"item"`)

* `upsell` (value: `"upsell"`)

* `email` (value: `"email"`)

* `postcard` (value: `"postcard"`)




