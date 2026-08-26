# UltraCartRestApiV2.SfvbRenderRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ancestors_cjson** | **String** | The chain of ancestor nodes above this one, as CJSON.  Elements that inherit layout or styling from a parent render differently without it, so supply it when rendering a node from inside a container rather than a standalone fragment. | [optional] 
**child_containers_json** | **String** | Child containers this node references, as a JSON object keyed by container id.  Compiled into the render context so nested containers resolve. | [optional] 
**cjson** | **String** | The CJSON node to render. | [optional] 
**context_affiliate_oid** | **Number** | Affiliate oid for the rendering context. | [optional] 
**context_blog_post_oid** | **Number** | Blog post oid for the rendering context. | [optional] 
**context_group_path** | **String** | Catalog group path for the rendering context. | [optional] 
**context_item_id** | **String** | Item id for the rendering context.  Required for item bound elements. | [optional] 
**context_order_id** | **String** | Order id for the rendering context. | [optional] 
**context_page_number** | **String** | Page number for paginated elements.  Defaults to 1. | [optional] 
**context_upsell_offer_oid** | **Number** | Upsell offer oid for the rendering context. | [optional] 
**language_iso_code** | **String** | Language ISO code.  Defaults to ENG. | [optional] 
**uri** | **String** | Storefront URI the node would appear on.  Affects rendering of anything page relative. | [optional] 


