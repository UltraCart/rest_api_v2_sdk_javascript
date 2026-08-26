# UltraCartRestApiV2.SfvbPreviewUrlResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiresInSeconds** | **Number** | Seconds until the session expires. | [optional] 
**path** | **String** | Storefront path being previewed. | [optional] 
**previewSessionId** | **String** | The preview session id used. | [optional] 
**previewUrl** | **String** | URL that renders the storefront page with the preview session&#39;s containers substituted for the stored ones. | [optional] 
**requiresBrowserSession** | **Boolean** | Always true.  The preview only applies to a request carrying the UltraCart admin session cookie of the user who authorised this token.  Fetched without it, the URL returns the LIVE page with a 200 and no error, so a successful fetch is not evidence the preview was applied.  Present this URL for a human to open; do not fetch it. | [optional] 
**shareable** | **Boolean** | Always false.  The session is keyed by individual login, so anyone else opening this URL sees the live page rather than the preview. | [optional] 
**usageNote** | **String** | Plain language restatement of the two flags above, safe to show a user. | [optional] 


