# UltraCartRestApiV2.AffiliateLink

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affiliateLinkOid** | **Integer** | Unique object identifier associated with this link | [optional] 
**affiliateManagedLinkOid** | **Integer** | Managed link OID that this link object was generated from | [optional] 
**affiliateOid** | **Integer** | Affiliate object ID associated with this link | [optional] 
**affiliateProgramItemOid** | **Integer** | The affiliate program item this managed link is associated with | [optional] 
**code** | **String** | Code associated with the link | [optional] 
**creativeOid** | **Integer** | Creative (image or text) associated with this link | [optional] 
**customHtml** | **String** | Custom HTML associated with this link | [optional] 
**customHtmlApprovalStatus** | **String** | Approved status of the custom html | [optional] 
**customLandingUrl** | **String** | Custom landing page URL if configured | [optional] 
**deleted** | **Boolean** | True if the link has been deleted | [optional] 
**invisibleLinkApprovalStatus** | **String** | Invisible link approval status | [optional] 
**invisibleLinkUrlPrefix** | **String** | Invisible link URL prefix | [optional] 
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




