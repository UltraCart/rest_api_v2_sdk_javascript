# UltraCartRestApiV2.SfvbPreviewSessionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bytesStored** | **Number** | Bytes stored in this session by the request that returned this response. | [optional] 
**expiresInSeconds** | **Number** | Seconds until this session expires. | [optional] 
**maxBytes** | **Number** | Maximum bytes one preview session may hold. | [optional] 
**ownerLogin** | **String** | Login this session belongs to.  Sessions are keyed by user, not by token. | [optional] 
**previewSessionId** | **String** | The preview session id. | [optional] 
**skipped** | [**[SfvbErrorDetail]**](SfvbErrorDetail.md) | Containers that were sent but could not be stored, with the reason. | [optional] 
**storedKeys** | **[String]** | Preview map keys that were stored.  A container whose owner type could not be resolved is silently dropped by the underlying store, so compare this against what you sent. | [optional] 


