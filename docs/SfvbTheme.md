# UltraCartRestApiV2.SfvbTheme

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** | True when this theme is the one serving live traffic.  Writing to an active theme requires the sfvb_publish scope. | [optional] 
**description** | **String** | What the theme is, where the author supplied a description. | [optional] 
**fs_directory_oid** | **Number** | Oid of the theme root directory in the storefront file system. | [optional] 
**path** | **String** | Root path of the theme in the storefront file system, for example /themes/mytheme/ | [optional] 
**storefront_oid** | **Number** | StoreFront oid this theme belongs to. | [optional] 
**theme_name** | **String** | Theme name. | [optional] 
**theme_oid** | **Number** | StoreFront theme oid. | [optional] 
**upgrade_available** | **Boolean** | True when a newer version of this theme exists.  Relevant because an upgrade is what produces the merge conflicts that block activation. | [optional] 
**valid** | **Boolean** | False when the theme contains templates that failed validation.  Worth checking before choosing a theme to work in. | [optional] 
**version** | **String** | Theme version. | [optional] 


