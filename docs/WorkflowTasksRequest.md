# UltraCartRestApiV2.WorkflowTasksRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_to_group_id** | **Number** | Assigned to group ID | [optional] 
**assigned_to_me** | **Boolean** | Tasks are assigned to me either by direct user id or a group that the user is a member of | [optional] 
**assigned_to_user_id** | **Number** | Assigned to user ID | [optional] 
**created_by** | [**WorkflowUser**](WorkflowUser.md) |  | [optional] 
**created_dts_begin** | **String** | Date/time that the workflow task was created | [optional] 
**created_dts_end** | **String** | Date/time that the workflow task was created | [optional] 
**delay_until_dts_begin** | **String** | Date/time that the workflow task should delay until | [optional] 
**delay_until_dts_end** | **String** | Date/time that the workflow task should delay until | [optional] 
**due_dts_begin** | **String** | Date/time that the workflow task is due | [optional] 
**due_dts_end** | **String** | Date/time that the workflow task is due | [optional] 
**last_update_dts_begin** | **String** | Date/time that the workflow task was last updated | [optional] 
**last_update_dts_end** | **String** | Date/time that the workflow task was last updated | [optional] 
**object_email** | **String** | Object is associated with customer email | [optional] 
**object_type** | **String** | Object Type | [optional] 
**priority** | **String** | Priority | [optional] 
**status** | **String** | Status of the workflow task | [optional] 
**unassigned** | **Boolean** | Tasks that are unassigned to a user or group | [optional] 



## Enum: ObjectTypeEnum


* `order` (value: `"order"`)

* `auto order` (value: `"auto order"`)

* `item` (value: `"item"`)

* `customer profile` (value: `"customer profile"`)





## Enum: PriorityEnum


* `1 - low` (value: `"1 - low"`)

* `2 - medium` (value: `"2 - medium"`)

* `3 - high` (value: `"3 - high"`)

* `4 - critical` (value: `"4 - critical"`)





## Enum: StatusEnum


* `open` (value: `"open"`)

* `closed` (value: `"closed"`)

* `delayed` (value: `"delayed"`)

* `awaiting customer feedback` (value: `"awaiting customer feedback"`)




