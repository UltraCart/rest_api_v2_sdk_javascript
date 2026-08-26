# UltraCartRestApiV2.SfvbPreviewSessionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bytes_stored** | **Number** | Bytes stored in this session by the request that returned this response. | [optional] 
**expires_in_seconds** | **Number** | Seconds until this session expires. | [optional] 
**max_bytes** | **Number** | Maximum bytes one preview session may hold. | [optional] 
**owner_login** | **String** | Login this session belongs to.  Sessions are keyed by user, not by token. | [optional] 
**preview_session_id** | **String** | The preview session id. | [optional] 
**skipped** | [**[SfvbErrorDetail]**](SfvbErrorDetail.md) | Containers that were sent but could not be stored, with the reason. | [optional] 
**stored_keys** | **[String]** | Preview map keys that were stored.  A container whose owner type could not be resolved is silently dropped by the underlying store, so compare this against what you sent. | [optional] 


