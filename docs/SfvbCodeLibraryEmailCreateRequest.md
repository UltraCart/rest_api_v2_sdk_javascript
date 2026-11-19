# UltraCartRestApiV2.SfvbCodeLibraryEmailCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_cjson** | **String** | The email body, a container that passes the email container rules. | [optional] 
**description** | **String** | Up to 1000 characters on one line, or empty. | [optional] 
**preview_text** | **String** | The preview text a new email started from the item takes, 5 to 150 characters on one line. | [optional] 
**subject** | **String** | The subject a new email started from the item takes, 5 to 150 characters on one line. | [optional] 
**title** | **String** | The title the new-email picker shows, 4 to 100 characters on one line. | [optional] 
**uuid** | **String** | A UUID the caller makes for this save.  Sending the same uuid again returns the item it saved, unchanged, so a retry after an uncertain response never makes a second item. | [optional] 


