# UltraCartRestApiV2.WorkflowTask

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_to_group** | **String** | Assigned to group | [optional] 
**assigned_to_group_id** | **Number** | Assigned to group ID | [optional] 
**assigned_to_user** | **String** | Assigned to user | [optional] 
**assigned_to_user_id** | **Number** | Assigned to user ID | [optional] 
**attachments** | [**[WorkflowAttachment]**](WorkflowAttachment.md) | Attachments to the Workflow Task | [optional] 
**created_by** | [**WorkflowUser**](WorkflowUser.md) |  | [optional] 
**created_dts** | **String** | Date/time that the workflow task was created | [optional] 
**delay_until_dts** | **String** | Date/time that the workflow task should delay until | [optional] 
**due_dts** | **String** | Date/time that the workflow task is due | [optional] 
**histories** | [**[WorkflowTaskHistory]**](WorkflowTaskHistory.md) | Array of history records for the task | [optional] 
**last_update_dts** | **String** | Date/time that the workflow task was last updated | [optional] 
**merchant_id** | **String** | Merchant ID | [optional] 
**notes** | [**[WorkflowNote]**](WorkflowNote.md) | Notes on the Workflow Task | [optional] 
**object_email** | **String** | Object is associated with customer email | [optional] 
**object_id** | **String** | Object ID | [optional] 
**object_type** | **String** | Object Type | [optional] 
**object_url** | **String** | Object URL | [optional] 
**priority** | **String** | Priority | [optional] 
**status** | **String** | Status of the workflow task | [optional] 
**task_details** | **String** | Task Details | [optional] 
**task_name** | **String** | Task Name | [optional] 
**workflow_task_uuid** | **String** | Workflow Task UUID | [optional] 



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




