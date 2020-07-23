# UltraCartRestApiV2.AffiliateLink

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affiliate_link_oid** | **Number** | Unique object identifier associated with this link | [optional] 
**affiliate_managed_link_oid** | **Number** | Managed link OID that this link object was generated from | [optional] 
**affiliate_oid** | **Number** | Affiliate object ID associated with this link | [optional] 
**affiliate_program_item_oid** | **Number** | The affiliate program item this managed link is associated with | [optional] 
**code** | **String** | Code associated with the link | [optional] 
**creative_oid** | **Number** | Creative (image or text) associated with this link | [optional] 
**custom_html** | **String** | Custom HTML associated with this link | [optional] 
**custom_html_approval_status** | **String** | Approved status of the custom html | [optional] 
**custom_landing_url** | **String** | Custom landing page URL if configured | [optional] 
**deleted** | **Boolean** | True if the link has been deleted | [optional] 
**invisible_link_approval_status** | **String** | Invisible link approval status | [optional] 
**invisible_link_url_prefix** | **String** | Invisible link URL prefix | [optional] 
**name** | **String** | Name of the link | [optional] 
**type** | **String** | Type of link | [optional] 


<a name="CustomHtmlApprovalStatusEnum"></a>
## Enum: CustomHtmlApprovalStatusEnum


* `Pending` (value: `"Pending"`)

* `Approved` (value: `"Approved"`)

* `Rejected` (value: `"Rejected"`)




<a name="InvisibleLinkApprovalStatusEnum"></a>
## Enum: InvisibleLinkApprovalStatusEnum


* `Pending` (value: `"Pending"`)

* `Approved` (value: `"Approved"`)

* `Rejected` (value: `"Rejected"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `image` (value: `"image"`)

* `text` (value: `"text"`)

* `invisible` (value: `"invisible"`)

* `direct` (value: `"direct"`)




