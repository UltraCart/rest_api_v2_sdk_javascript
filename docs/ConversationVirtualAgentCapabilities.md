# UltraCartRestApiV2.ConversationVirtualAgentCapabilities

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_storefront_and_item** | **Boolean** | Permission flag to allow this Agent access to the storefront and item information. | [optional] 
**cancel_subscription** | **Boolean** |  | [optional] 
**delay_subscription** | **Boolean** |  | [optional] 
**generate_coupon** | **Boolean** | Permission flag to allow this Agent to generate coupons based upon the agent prompt instructions | [optional] 
**lookup_order_information** | **Boolean** |  | [optional] 
**lookup_subscription_information** | **Boolean** |  | [optional] 
**open_support_ticket** | **Boolean** |  | [optional] 
**open_support_ticket_channel** | **String** | Channel to use to open the support ticket | [optional] 
**open_support_ticket_channel_email** | **String** | Email to send support ticket to | [optional] 
**open_support_ticket_zoho_desk_department_id** | **String** | Department ID to open a Zoho Desk ticket for | [optional] 
**pause_subscription** | **Boolean** |  | [optional] 
**resume_subscription** | **Boolean** |  | [optional] 
**transfer_chat_to_live_agent** | **Boolean** |  | [optional] 
**update_subscription_credit_card** | **Boolean** |  | [optional] 
**zoho_desk_available** | **Boolean** | True if Zoho Desk is connected to UltraCart | [optional] 
**zoho_desk_departments** | [**[ConversationVirtualAgentCapabilityZohoDeskDepartment]**](ConversationVirtualAgentCapabilityZohoDeskDepartment.md) | Array of Zoho Desk Department if zoho desk is connected to UltraCart | [optional] 



## Enum: OpenSupportTicketChannelEnum


* `none` (value: `"none"`)

* `email` (value: `"email"`)

* `ultracart_task` (value: `"ultracart_task"`)

* `zoho_desk_ticket` (value: `"zoho_desk_ticket"`)




