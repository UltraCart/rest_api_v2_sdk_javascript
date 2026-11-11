# UltraCartRestApiV2.SfvbThemeUpgradeCheckResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_versions** | **[String]** | Newer versions this account may upgrade to, oldest first.  Pass one as upgrade_to_version on duplicateSfvbTheme. | [optional] 
**can_duplicate_and_upgrade** | **Boolean** | True when duplicateSfvbTheme with upgrade_to_version set to to_version will be accepted.  When false, reason says why. | [optional] 
**change_log** | [**[SfvbThemeChangeLogEntry]**](SfvbThemeChangeLogEntry.md) | What changed in each version after the theme&#39;s current one, up to to_version. | [optional] 
**customized_files** | **[String]** | The theme&#39;s files that were edited after the theme was installed or last upgraded.  Only these can merge, conflict or be overwritten - every other file is simply replaced with the new version&#39;s. | [optional] 
**existing_merge_conflicts** | **[String]** | Files in this theme that still have unresolved conflicts from an earlier upgrade.  While any exist the theme can&#39;t be upgraded again, and the predicted lists above are empty. | [optional] 
**files_merged** | **[String]** | Customized files the upgrade would merge with the new version cleanly.  Worth reviewing after the upgrade, but nothing to resolve. | [optional] 
**files_overwritten** | **[String]** | Customized files that can&#39;t be merged (not a text type that merges) and are replaced by the new version&#39;s, losing the edits.  Copy anything you need from them first. | [optional] 
**files_with_merge_conflicts** | **[String]** | Customized files whose edits collide with the new version.  The upgrade writes them with conflict marker lines and flags them, and the theme can&#39;t be activated until each is resolved. | [optional] 
**from_version** | **String** | The theme&#39;s current version. | [optional] 
**reason** | **String** | Why can_duplicate_and_upgrade is false.  Null when it is true. | [optional] 
**theme_oid** | **Number** | The theme that was checked. | [optional] 
**to_version** | **String** | The version the check was run against.  Null when no upgrade is available. | [optional] 


