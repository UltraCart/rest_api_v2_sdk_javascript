# UltraCartRestApiV2.SfvbDocsGap

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duplicate** | **Boolean** | On submit, true when this account had already sent the same report.  The earlier report_id is returned and nothing new is kept. | [optional] 
**received_at** | **String** | When UltraCart received the report. | [optional] 
**report_id** | **String** | The report&#39;s id.  Quote it to UltraCart, or look the report up with GET docs/gaps/{report_id}. | [optional] 
**status** | **String** | received until UltraCart staff look at it, then accepted, declined or fixed. | [optional] 
**status_at** | **String** | When the status last changed.  Absent while the report is received. | [optional] 
**storefront_oid** | **Number** | The storefront named when the report was sent, if one was. | [optional] 



## Enum: StatusEnum


* `received` (value: `"received"`)

* `accepted` (value: `"accepted"`)

* `declined` (value: `"declined"`)

* `fixed` (value: `"fixed"`)




