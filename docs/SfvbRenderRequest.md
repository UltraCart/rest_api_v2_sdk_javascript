# UltraCartRestApiV2.SfvbRenderRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ancestorsCjson** | **String** | The chain of ancestor nodes above this one, as CJSON.  Elements that inherit layout or styling from a parent render differently without it, so supply it when rendering a node from inside a container rather than a standalone fragment. | [optional] 
**childContainersJson** | **String** | Child containers this node references, as a JSON object keyed by container id.  Compiled into the render context so nested containers resolve. | [optional] 
**cjson** | **String** | The CJSON node to render. | [optional] 
**contextAffiliateOid** | **Number** | Affiliate oid for the rendering context. | [optional] 
**contextBlogPostOid** | **Number** | Blog post oid for the rendering context. | [optional] 
**contextGroupPath** | **String** | Catalog group path for the rendering context. | [optional] 
**contextItemId** | **String** | Item id for the rendering context.  Required for item bound elements. | [optional] 
**contextOrderId** | **String** | Order id for the rendering context. | [optional] 
**contextPageNumber** | **String** | Page number for paginated elements.  Defaults to 1. | [optional] 
**contextUpsellOfferOid** | **Number** | Upsell offer oid for the rendering context. | [optional] 
**languageIsoCode** | **String** | Language ISO code.  Defaults to ENG. | [optional] 
**uri** | **String** | Storefront URI the node would appear on.  Affects rendering of anything page relative. | [optional] 


