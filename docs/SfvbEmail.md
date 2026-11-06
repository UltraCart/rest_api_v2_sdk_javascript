# UltraCartRestApiV2.SfvbEmail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_last_modified_dts** | **String** | When the email container was last changed (ISO 8601, UTC). | [optional] 
**email_template_vm_path** | **String** | The Velocity template the email body renders inside, as stored, such as templates/template_email.vm.  It is looked up in the storefront&#39;s active theme. | [optional] 
**email_uuid** | **String** | The email uuid.  The same uuid the email container (owner type email) and the email render take. | [optional] 
**hash_sha256** | **String** | Hash of the subject and preview text.  Send it as If-Match when updating.  A change to the email body does not change it. | [optional] 
**live** | **Boolean** | True when the email is in a flow or campaign that is sending, so a change reaches customers and needs sfvb_publish.  An email in neither is reported live. | [optional] 
**notes** | **[String]** | What a write did beyond the fields asked for, such as a step label it could not refresh.  Only on a write. | [optional] 
**pending_review** | **Boolean** | True while a change waits for review.  An edit puts it back to needing review. | [optional] 
**preview_text** | **String** | The preview text an inbox shows after the subject. | [optional] 
**rejected** | **Boolean** | True when review rejected the email.  An edit puts it back to needing review. | [optional] 
**requires_review** | **Boolean** | True when a change to this email must be reviewed before it sends. | [optional] 
**subject** | **String** | The subject line.  Merge tokens such as firstName are filled in at send. | [optional] 
**suspended_for_spam** | **Boolean** | True when UltraCart suspended the email for spam.  Edits are refused until the merchant resolves it with UltraCart support. | [optional] 
**template_exists** | **Boolean** | True when the file at template_path exists.  False means the email can&#39;t render. | [optional] 
**template_note** | **String** | Why there is no template file, or null when there is one. | [optional] 
**template_path** | **String** | The theme file that template is, as the render finds it.  Read it with the files endpoints, whose read also reports valid and velocity_errors.  Null when it couldn&#39;t be worked out, with template_note saying why. | [optional] 
**transactional** | **Boolean** | True for a transactional email, which skips the marketing footer rules. | [optional] 
**version** | **Number** | The email version.  Every save adds one. | [optional] 


