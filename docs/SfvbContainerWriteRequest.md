# UltraCartRestApiV2.SfvbContainerWriteRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_warnings** | **Boolean** | Store the container even if quality warnings were raised.  Warnings never block by default; this field exists so a caller can opt into treating them as blocking by setting it false. | [optional] 
**cjson** | **String** | The container JSON to store. | [optional] 
**comment** | **String** | Optional comment recorded against the version this write creates. | [optional] 
**marketing_email** | **Boolean** | For email containers, whether this is a marketing email.  Selects whether CAN-SPAM footer rules apply. | [optional] 


