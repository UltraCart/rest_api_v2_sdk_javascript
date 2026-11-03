# UltraCartRestApiV2.SfvbTrackingSettingsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advanced** | [**SfvbTrackingAdvanced**](SfvbTrackingAdvanced.md) |  | [optional] 
**changes** | [**[SfvbTrackingChange]**](SfvbTrackingChange.md) | On a write, each setting it changed, or would change on a dry run.  Empty when nothing changed.  Absent on a read. | [optional] 
**currencies** | **[String]** | The currency codes default_currency accepts. | [optional] 
**dry_run** | **Boolean** | On a write, true when nothing was saved.  Absent on a read. | [optional] 
**privacy** | [**SfvbTrackingPrivacy**](SfvbTrackingPrivacy.md) |  | [optional] 
**storefront_oid** | **Number** | The storefront these settings belong to. | [optional] 


