# UltraCartRestApiV2.SfvbRedirectDeleteResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applied** | **Boolean** | True when this call deleted rules. | [optional] 
**deletable** | **Number** | Rows that can be, or on an apply could be, deleted. | [optional] 
**deleted** | **Number** | Rules deleted.  Zero on a dry run. | [optional] 
**limit** | **Number** | The most rules a storefront can have for add and import to work. | [optional] 
**not_found** | **Number** | Rows naming no rule on this storefront.  Skipped. | [optional] 
**plan_hash** | **String** | Send this to apply exactly these rows.  Also what an approval for them is bound to. | [optional] 
**rows** | [**[SfvbRedirectDeleteRowResult]**](SfvbRedirectDeleteRowResult.md) | One result per row, in request order. | [optional] 
**rule_count** | **Number** | The storefront&#39;s redirect rules now.  After an apply, after the delete. | [optional] 
**stale** | **Number** | Rows whose rule changed since its hash was read.  Skipped. | [optional] 
**total** | **Number** | Rows in the request. | [optional] 


