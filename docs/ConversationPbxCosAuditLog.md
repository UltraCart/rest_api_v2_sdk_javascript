# UltraCartRestApiV2.ConversationPbxCosAuditLog

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **String** | Action taken | [optional] 
**agent_login** | **String** | Login of the agent who attempted the call | [optional] 
**audit_log_uuid** | **String** | Audit log entry unique identifier | [optional] 
**class_of_service_name** | **String** | Name of the class of service (denormalized for display) | [optional] 
**class_of_service_uuid** | **String** | UUID of the class of service that was evaluated | [optional] 
**destination** | **String** | Phone number the agent tried to dial | [optional] 
**merchant_id** | **String** | Merchant Id | [optional] 
**rule_triggered** | **String** | Rule that triggered the action | [optional] 
**supervisor_login** | **String** | Login of supervisor who approved/denied (null for timeouts and direct blocks) | [optional] 
**timestamp** | **String** | ISO 8601 timestamp of the event | [optional] 


<a name="ActionEnum"></a>
## Enum: ActionEnum


* `blocked` (value: `"blocked"`)

* `override_requested` (value: `"override_requested"`)

* `override_approved` (value: `"override_approved"`)

* `override_denied` (value: `"override_denied"`)

* `override_timeout` (value: `"override_timeout"`)




<a name="RuleTriggeredEnum"></a>
## Enum: RuleTriggeredEnum


* `outbound_disabled` (value: `"outbound_disabled"`)

* `time_range` (value: `"time_range"`)

* `country_blocked` (value: `"country_blocked"`)

* `premium_blocked` (value: `"premium_blocked"`)




