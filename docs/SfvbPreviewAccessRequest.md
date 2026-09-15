# UltraCartRestApiV2.SfvbPreviewAccessRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **String** | Storefront path to land on, beginning with a slash.  Defaults to / | [optional] 
**preview_session_id** | **String** | Staged preview session to show.  It must be one this user created and it must not have expired.  Leave it out to show the saved containers with nothing staged. | [optional] 
**theme_oid** | **Number** | Theme to show, which may be inactive.  Must belong to this storefront.  Defaults to the active theme. | [optional] 


