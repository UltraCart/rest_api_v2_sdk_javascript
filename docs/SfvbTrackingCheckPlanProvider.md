# UltraCartRestApiV2.SfvbTrackingCheckPlanProvider

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**events** | [**[SfvbTrackingCheckPlanEvent]**](SfvbTrackingCheckPlanEvent.md) | The dataLayer, gtag and fbq calls it makes, where the template makes them. | [optional] 
**expect** | **String** | must_load, must_not_load (held back by a gate this consent state and region have not granted, or never sent for this event), or may_load (depends on something the plan cannot know).  A missing may_load request is a warning, never a fail. | [optional] 
**gate** | [**SfvbTrackingCheckPlanGate**](SfvbTrackingCheckPlanGate.md) |  | [optional] 
**name** | **String** | A name to show. | [optional] 
**note** | **String** | Why the expectation is what it is, when that is not obvious. | [optional] 
**provider** | **String** | The provider key, as tracking/providers names it.  For custom or affiliate network HTML, the host. | [optional] 
**requests** | [**[SfvbTrackingCheckPlanRequest]**](SfvbTrackingCheckPlanRequest.md) | The requests it makes. | [optional] 
**source** | **String** | provider for a provider in the catalog, custom_html for the storefront Tracking or Conversion HTML, affiliate_network for an affiliate network pixel. | [optional] 
**template** | **String** | The storefront template that writes it, tracking.vm or conversion.vm.  Left out for custom and affiliate network HTML. | [optional] 



## Enum: ExpectEnum


* `must_load` (value: `"must_load"`)

* `must_not_load` (value: `"must_not_load"`)

* `may_load` (value: `"may_load"`)





## Enum: SourceEnum


* `provider` (value: `"provider"`)

* `custom_html` (value: `"custom_html"`)

* `affiliate_network` (value: `"affiliate_network"`)




