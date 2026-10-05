# UltraCartRestApiV2.SfvbLibraryInstallRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**installed_dts** | **String** | When it was installed, ISO 8601. | [optional] 
**installed_revision_number** | **Number** | The revision installed most recently on this storefront. | [optional] 
**latest_revision_number** | **Number** | The latest published revision, or null when it can no longer be read. | [optional] 
**library_oid** | **Number** | The entry. | [optional] 
**name** | **String** | The entry name, when the entry is still visible to this account. | [optional] 
**retired** | **Boolean** | True when the owner retired the entry.  The installed copy keeps working. | [optional] 
**storefront_oid** | **Number** | The storefront it was installed on. | [optional] 
**update_available** | **Boolean** | True when a newer revision has been published.  Nothing updates automatically. | [optional] 


