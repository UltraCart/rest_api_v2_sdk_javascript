# UltraCartRestApiV2.EmailCommseqStep

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alt_child_email_communication_sequence_steps** | [**[EmailCommseqStep]**](EmailCommseqStep.md) | Array of child steps for the alternate path | [optional] 
**child_email_communication_sequence_steps** | [**[EmailCommseqStep]**](EmailCommseqStep.md) | Array of child steps | [optional] 
**email_communication_sequence_step_uuid** | **String** | Email commseq step UUID | [optional] 
**filter_profile_equation_json** | **String** | Filter profile equation JSON | [optional] 
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




