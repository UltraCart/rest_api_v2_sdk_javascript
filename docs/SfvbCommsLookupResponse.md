# UltraCartRestApiV2.SfvbCommsLookupResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archived** | **Boolean** | True when the uuid is an archived campaign or flow.  It is still on its storefront and can be read; it sends nothing. | [optional] 
**communication_sequence_uuid** | **String** | The sequence it belongs to, when there is one. | [optional] 
**kind** | **String** | campaign, flow, sequence, step, email, postcard, list or segment. | [optional] 
**name** | **String** | The campaign, flow, list or segment name, or the email subject. | [optional] 
**next** | **String** | The CLI command that reads it. | [optional] 
**notes** | **[String]** | What the answer means, in sentences. | [optional] 
**owner** | [**SfvbCommsLookupOwner**](SfvbCommsLookupOwner.md) |  | [optional] 
**step_uuid** | **String** | The step that sends it, for an email or postcard a step names, or the step itself. | [optional] 
**storefront_oid** | **Number** | The storefront it lives on, for the --storefront option. | [optional] 
**uuid** | **String** | The uuid looked up. | [optional] 


