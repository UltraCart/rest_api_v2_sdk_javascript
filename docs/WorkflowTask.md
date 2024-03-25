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
**dependant_workflow_task_uuid** | **String** | Dependant Workflow Task UUID (must be completed before this task can be completed) | [optional] 
**due_dts** | **String** | Date/time that the workflow task is due | [optional] 
**expiration_dts** | **String** | Date/time that the workflow task will expire and be closed.  This is set by system generated tasks. | [optional] 
**global_task_number** | **Number** | Global task numer | [optional] 
**histories** | [**[WorkflowTaskHistory]**](WorkflowTaskHistory.md) | Array of history records for the task | [optional] 
**last_update_dts** | **String** | Date/time that the workflow task was last updated | [optional] 
**merchant_id** | **String** | Merchant ID | [optional] 
**notes** | [**[WorkflowNote]**](WorkflowNote.md) | Notes on the Workflow Task | [optional] 
**object_email** | **String** | Object is associated with customer email | [optional] 
**object_id** | **String** | Object ID | [optional] 
**object_task_number** | **Number** | Object specific task numer | [optional] 
**object_type** | **String** | Object Type | [optional] 
**object_url** | **String** | Object URL | [optional] 
**priority** | **String** | Priority | [optional] 
**properties** | [**[Property]**](Property.md) | Properties | [optional] 
**related_workflow_task_uuid** | **String** | Related Workflow Task UUID | [optional] 
**status** | **String** | Status of the workflow task | [optional] 
**system_task_type** | **String** | Constant for the type of system generated task | [optional] 
**tags** | **[String]** | Tags | [optional] 
**task_context** | **String** | User friendly string of the task context | [optional] 
**task_details** | **String** | Task Details | [optional] 
**task_name** | **String** | Task Name | [optional] 
**workflow_task_uuid** | **String** | Workflow Task UUID | [optional] 


<a name="ObjectTypeEnum"></a>
## Enum: ObjectTypeEnum


* `order` (value: `"order"`)

* `auto_order` (value: `"auto order"`)

* `item` (value: `"item"`)

* `customer_profile` (value: `"customer profile"`)

* `storefront` (value: `"storefront"`)




<a name="PriorityEnum"></a>
## Enum: PriorityEnum


* `_1___low` (value: `"1 - low"`)

* `_2___medium` (value: `"2 - medium"`)

* `_3___high` (value: `"3 - high"`)

* `_4___critical` (value: `"4 - critical"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `open` (value: `"open"`)

* `closed` (value: `"closed"`)

* `delayed` (value: `"delayed"`)

* `awaiting_customer_feedback` (value: `"awaiting customer feedback"`)

* `closed___system` (value: `"closed - system"`)

* `closed___customer` (value: `"closed - customer"`)

* `closed___expiration` (value: `"closed - expiration"`)




<a name="SystemTaskTypeEnum"></a>
## Enum: SystemTaskTypeEnum


* `order_accounts_receivable` (value: `"order_accounts_receivable"`)

* `order_fraud_review` (value: `"order_fraud_review"`)

* `auto_order_card_update_issue` (value: `"auto_order_card_update_issue"`)

* `auto_order_canceled_payment` (value: `"auto_order_canceled_payment"`)

* `item_low_stock` (value: `"item_low_stock"`)

* `item_out_of_stock` (value: `"item_out_of_stock"`)




