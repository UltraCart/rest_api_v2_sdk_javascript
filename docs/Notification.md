# UltraCartRestApiV2.Notification

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_filter_by_distribution_centers** | **Boolean** | True if this notification can be filtered to only send for one or more distribution centers. | [optional] 
**can_include_affiliate** | **Boolean** | True if this notification can include an affiliate information. | [optional] 
**can_include_order** | **Boolean** | True if this notification can include an order attachment. | [optional] 
**can_include_order_plain_text** | **Boolean** | True if this notification can include a plain text rendering of an order directly within an email.  Some desire this over an attachment | [optional] 
**distribution_center_filters** | **[String]** | If this notification supports it, this list of distribution center CODES will filter the notification to just those distribution centers. | [optional] 
**include_affiliate** | **Boolean** | If true, and this notification supports it, affiliate information will be attached to all notifications of this type | [optional] 
**include_order** | **Boolean** | If true, and this notification supports it, the order will be attached to all notifications of this type | [optional] 
**include_order_plain_text** | **Boolean** | If true, and this notification supports it, a plain text order will be directly inserted into all notifications of this type | [optional] 
**name** | **String** | The name of this notification. | [optional] 
**notification_group** | **String** | A group for this notification.  This name is only used for visual grouping within interfaces. | [optional] 
**selected** | **Boolean** | True if this user wishes to receive this email notification. | [optional] 


