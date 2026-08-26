# UltraCartRestApiV2.SfvbThemeDuplicateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**folder** | **String** | Directory name for the new theme under /themes/.  Letters and numbers; it is cleansed before use.  Must not already exist - a collision is refused rather than resolved, because silently creating a differently named theme leaves you unsure what you made. | [optional] 
**targetStorefrontOid** | **Number** | Storefront to create the copy on.  Defaults to the storefront in the path.  Supply it only when copying a theme between storefronts you own. | [optional] 
**themeName** | **String** | Name for the new theme. | [optional] 


