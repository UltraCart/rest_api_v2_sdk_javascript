# UltraCartRestApiV2.EmailCommseqStep

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alt_child_email_communication_sequence_steps** | [**[EmailCommseqStep]**](EmailCommseqStep.md) | Array of child steps for the alternate path | [optional] 
**child_email_communication_sequence_steps** | [**[EmailCommseqStep]**](EmailCommseqStep.md) | Array of child steps | [optional] 
**email_communication_sequence_step_uuid** | **String** | Email commseq step UUID | [optional] 
**email_pending_review** | **Boolean** | True if the content of the email associated with this step is pending review by UltraCart | [optional] 
**email_rejected** | **Boolean** | True if the content of the email associated with this step was rejected during review by UltraCart | [optional] 
**email_requires_review** | **Boolean** | True if the content of the email associated with this step requires review by UltraCart | [optional] 
**filter_profile_equation_json** | **String** | Filter profile equation JSON | [optional] 
**merchant_notes** | **String** | Internal merchant notes | [optional] 
**step_config_json** | **String** | Arbitrary Configuration for a step | [optional] 
**type** | **String** | Type of step | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `begin` (value: `"begin"`)

* `wait` (value: `"wait"`)

* `email` (value: `"email"`)

* `merge` (value: `"merge"`)

* `condition` (value: `"condition"`)

* `end` (value: `"end"`)




