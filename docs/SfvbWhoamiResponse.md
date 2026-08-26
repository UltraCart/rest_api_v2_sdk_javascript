# UltraCartRestApiV2.SfvbWhoamiResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actingAsUser** | **Boolean** | True when this token resolves to a merchant user.  Preview sessions and file writes need one, because they are recorded against the person who approved the token.  Only device flow tokens resolve a user, so a plain API key will see this false. | [optional] 
**applicationName** | **String** | Description of the application this credential belongs to. | [optional] 
**authenticationType** | **String** | How this token authenticated - Oauth2, Simple Key, Public/Private Key or Browser Key. | [optional] 
**canPublish** | **Boolean** | True when this token may write a target that is currently live - an active upsell offer, an email on a delivering flow, the active theme, the storefront root.  Never infer this; it is the difference between a draft edit and a shopper visible change. | [optional] 
**canRead** | **Boolean** | True when this token may read.  Do not infer this from the requested scope name. | [optional] 
**canWrite** | **Boolean** | True when this token may write.  Writing a target that is not currently live needs only this. | [optional] 
**deviceScope** | **String** | Device scope name, when this is a device flow token. | [optional] 
**login** | **String** | Login of the user who approved this token.  Populated for device flow tokens; null for plain API key credentials. | [optional] 
**merchantId** | **String** | Merchant id this token acts against. | [optional] 
**scopes** | **[String]** | Scopes granted to this token. | [optional] 
**storefronts** | [**[SfvbStorefront]**](SfvbStorefront.md) | Storefronts reachable with this token.  Empty unless the token holds sfvb_read, because storefront inventory is resource data rather than identity. | [optional] 
**storefrontsWithheld** | **Boolean** | True when storefronts was emptied because the token lacks sfvb_read, rather than because the account has none.  Without this the two look identical. | [optional] 
**userName** | **String** | Display name of the approving user, when known. | [optional] 


