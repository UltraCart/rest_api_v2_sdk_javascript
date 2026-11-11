# UltraCartRestApiV2.SfvbThemesResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_theme_oid** | **Number** | Oid of the active theme, repeated here so a caller does not have to scan the list. | [optional] 
**theme_count** | **Number** | How many themes the storefront holds now.  When it equals theme_limit, delete an inactive theme in the admin before duplicating. | [optional] 
**theme_limit** | **Number** | Most themes a storefront can hold, active and inactive together.  A duplicate or install at the limit is refused with sfvb.theme_limit_reached. | [optional] 
**themes** | [**[SfvbTheme]**](SfvbTheme.md) | Themes belonging to the storefront.  Exactly one is flagged active. | [optional] 


