# UltraCartRestApiV2.SfvbLibraryInstallReceipt

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cjson** | **String** | The fragment, with its file paths rewritten to where they were installed.  Ready to place. | [optional] 
**conflicts** | [**[SfvbLibraryInstallConflict]**](SfvbLibraryInstallConflict.md) | Paths that already held a different file.  With on_conflict fail these refuse the install. | [optional] 
**content_manifest** | [**SfvbLibraryContentManifest**](SfvbLibraryContentManifest.md) |  | [optional] 
**files_skipped** | **[String]** | Paths not written, because an identical or chosen existing file was kept, or the file could not be fetched. | [optional] 
**files_written** | **[String]** | Storefront paths this install wrote. | [optional] 
**library_oid** | **Number** | The entry. | [optional] 
**revision_number** | **Number** | The revision installed. | [optional] 
**unresolved_parameters** | **[String]** | Required parameters with no default.  Replace them in the cjson before placing it. | [optional] 


