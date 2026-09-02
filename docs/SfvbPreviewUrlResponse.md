# UltraCartRestApiV2.SfvbPreviewUrlResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expires_in_seconds** | **Number** | Seconds until the session expires. | [optional] 
**path** | **String** | Storefront path being previewed. | [optional] 
**preview_session_id** | **String** | The preview session id used. | [optional] 
**preview_url** | **String** | URL that renders the storefront page with the preview session&#39;s containers substituted for the stored ones. | [optional] 
**requires_browser_session** | **Boolean** | Always true.  The preview only applies to a request carrying the UltraCart admin session cookie of the user who authorised this token.  Fetched without it, the URL returns the LIVE page with a 200 and no error, so a successful fetch is not evidence the preview was applied.  Present this URL for a human to open; do not fetch it. | [optional] 
**shareable** | **Boolean** | The session is keyed by individual login, so anyone else opening this URL sees the live page rather than the preview.  This is false in every response, which means it is absent from the JSON - false booleans are omitted across this API, so a generated client sees undefined rather than false.  Do not test it for equality with false.  usage_note carries the same warning as a string and does survive. | [optional] 
**usage_note** | **String** | Plain language restatement of the two flags above, safe to show a user. | [optional] 


