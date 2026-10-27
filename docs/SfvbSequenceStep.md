# UltraCartRestApiV2.SfvbSequenceStep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branches** | [**[SfvbSequenceBranch]**](SfvbSequenceBranch.md) | Its two sides, for a condition, split or InboxGeek step.  Absent for every other type. | [optional] 
**config_error** | **Boolean** | True when the step&#39;s settings could not be read. | [optional] 
**config_json** | **String** | The step&#39;s settings as the admin stores them.  A webhook&#39;s header and parameter values are masked. | [optional] 
**config_merchant_notes** | **String** | A note stored inside the step&#39;s settings, when there is one. | [optional] 
**disabled** | **Boolean** | True when the step is switched off in its settings. | [optional] 
**email_uuids** | **[String]** | The emails it sends.  One for an email step, one per variant for an experiment. | [optional] 
**filter_profile_equation_json** | **String** | The step&#39;s audience filter as stored, when it has one. | [optional] 
**item_ids** | **[String]** | The items it names, for a cart or rate limiter step. | [optional] 
**label** | **String** | The type as the admin names it, such as Time Delay.  The type itself for one it doesn&#39;t know. | [optional] 
**list_uuids** | **[String]** | The lists it subscribes or unsubscribes, for a list step. | [optional] 
**merchant_notes** | **String** | The note stored on the step. | [optional] 
**name** | **String** | The step&#39;s own display name from its settings, when it has one. | [optional] 
**number_waiting** | **Number** | How many customers are waiting on this step now.  Only when waiting counts were asked for. | [optional] 
**postcard_uuid** | **String** | The postcard it sends, for a postcard step. | [optional] 
**step_uuid** | **String** | The step uuid. | [optional] 
**type** | **String** | The step type, such as email, wait, condition or webhook. | [optional] 
**unreachable** | **Boolean** | True for a step no branch leads to.  Listed at the end so nothing is hidden. | [optional] 


