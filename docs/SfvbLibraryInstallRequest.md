# UltraCartRestApiV2.SfvbLibraryInstallRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acknowledge_executable** | **Boolean** | Must be true to install an entry whose content_manifest lists executable content.  Read the manifest first. | [optional] 
**on_conflict** | **String** | What to do when a file the entry installs already exists with different content.  fail refuses and writes nothing, skip keeps the existing file, overwrite replaces it. | [optional] 
**revision_number** | **Number** | A published revision to install.  Defaults to the latest one, or the draft for the owner. | [optional] 



## Enum: OnConflictEnum


* `fail` (value: `"fail"`)

* `skip` (value: `"skip"`)

* `overwrite` (value: `"overwrite"`)




