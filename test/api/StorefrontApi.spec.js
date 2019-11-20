/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.UltraCartRestApiV2);
  }
}(this, function(expect, UltraCartRestApiV2) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new UltraCartRestApiV2.StorefrontApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('StorefrontApi', function() {
    describe('archiveEmailList', function() {
      it('should call archiveEmailList successfully', function(done) {
        //uncomment below and update the code to test archiveEmailList
        //instance.archiveEmailList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('archiveEmailSegment', function() {
      it('should call archiveEmailSegment successfully', function(done) {
        //uncomment below and update the code to test archiveEmailSegment
        //instance.archiveEmailSegment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cloneEmailCampaign', function() {
      it('should call cloneEmailCampaign successfully', function(done) {
        //uncomment below and update the code to test cloneEmailCampaign
        //instance.cloneEmailCampaign(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cloneEmailFlow', function() {
      it('should call cloneEmailFlow successfully', function(done) {
        //uncomment below and update the code to test cloneEmailFlow
        //instance.cloneEmailFlow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createEmailSendingDomain', function() {
      it('should call createEmailSendingDomain successfully', function(done) {
        //uncomment below and update the code to test createEmailSendingDomain
        //instance.createEmailSendingDomain(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteEmailEmail', function() {
      it('should call deleteEmailEmail successfully', function(done) {
        //uncomment below and update the code to test deleteEmailEmail
        //instance.deleteEmailEmail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteEmailListCustomer', function() {
      it('should call deleteEmailListCustomer successfully', function(done) {
        //uncomment below and update the code to test deleteEmailListCustomer
        //instance.deleteEmailListCustomer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteEmailSendingDomain', function() {
      it('should call deleteEmailSendingDomain successfully', function(done) {
        //uncomment below and update the code to test deleteEmailSendingDomain
        //instance.deleteEmailSendingDomain(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteExperiment', function() {
      it('should call deleteExperiment successfully', function(done) {
        //uncomment below and update the code to test deleteExperiment
        //instance.deleteExperiment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('geocodeAddress', function() {
      it('should call geocodeAddress successfully', function(done) {
        //uncomment below and update the code to test geocodeAddress
        //instance.geocodeAddress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCountries', function() {
      it('should call getCountries successfully', function(done) {
        //uncomment below and update the code to test getCountries
        //instance.getCountries(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmailBaseTemplates', function() {
      it('should call getEmailBaseTemplates successfully', function(done) {
        //uncomment below and update the code to test getEmailBaseTemplates
        //instance.getEmailBaseTemplates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmailCampaign', function() {
      it('should call getEmailCampaign successfully', function(done) {
        //uncomment below and update the code to test getEmailCampaign
        //instance.getEmailCampaign(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmailCampaigns', function() {
      it('should call getEmailCampaigns successfully', function(done) {
        //uncomment below and update the code to test getEmailCampaigns
        //instance.getEmailCampaigns(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmailCampaignsWithStats', function() {
      it('should call getEmailCampaignsWithStats successfully', function(done) {
        //uncomment below and update the code to test getEmailCampaignsWithStats
        //instance.getEmailCampaignsWithStats(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmailCommseq', function() {
      it('should call getEmailCommseq successfully', function(done) {
        //uncomment below and update the code to test getEmailCommseq
        //instance.getEmailCommseq(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmailCommseqEmailStats', function() {
      it('should call getEmailCommseqEmailStats successfully', function(done) {
        //uncomment below and update the code to test getEmailCommseqEmailStats
        //instance.getEmailCommseqEmailStats(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmailCommseqStatOverall', function() {
      it('should call getEmailCommseqStatOverall successfully', function(done) {
        //uncomment below and update the code to test getEmailCommseqStatOverall
        //instance.getEmailCommseqStatOverall(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmailCommseqStepWaiting', function() {
      it('should call getEmailCommseqStepWaiting successfully', function(done) {
        //uncomment below and update the code to test getEmailCommseqStepWaiting
        //instance.getEmailCommseqStepWaiting(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmailCommseqs', function() {
      it('should call getEmailCommseqs successfully', function(done) {
        //uncomment below and update the code to test getEmailCommseqs
        //instance.getEmailCommseqs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmailDashboardActivity', function() {
      it('should call getEmailDashboardActivity successfully', function(done) {
        //uncomment below and update the code to test getEmailDashboardActivity
        //instance.getEmailDashboardActivity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmailDashboardStats', function() {
      it('should call getEmailDashboardStats successfully', function(done) {
        //uncomment below and update the code to test getEmailDashboardStats
        //instance.getEmailDashboardStats(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmailEmail', function() {
      it('should call getEmailEmail successfully', function(done) {
        //uncomment below and update the code to test getEmailEmail
        //instance.getEmailEmail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmailEmails', function() {
      it('should call getEmailEmails successfully', function(done) {
        //uncomment below and update the code to test getEmailEmails
        //instance.getEmailEmails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmailEmailsMultiple', function() {
      it('should call getEmailEmailsMultiple successfully', function(done) {
        //uncomment below and update the code to test getEmailEmailsMultiple
        //instance.getEmailEmailsMultiple(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmailFlow', function() {
      it('should call getEmailFlow successfully', function(done) {
        //uncomment below and update the code to test getEmailFlow
        //instance.getEmailFlow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmailFlows', function() {
      it('should call getEmailFlows successfully', function(done) {
        //uncomment below and update the code to test getEmailFlows
        //instance.getEmailFlows(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmailList', function() {
      it('should call getEmailList successfully', function(done) {
        //uncomment below and update the code to test getEmailList
        //instance.getEmailList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmailListCustomerEditorUrl', function() {
      it('should call getEmailListCustomerEditorUrl successfully', function(done) {
        //uncomment below and update the code to test getEmailListCustomerEditorUrl
        //instance.getEmailListCustomerEditorUrl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmailListCustomers', function() {
      it('should call getEmailListCustomers successfully', function(done) {
        //uncomment below and update the code to test getEmailListCustomers
        //instance.getEmailListCustomers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmailLists', function() {
      it('should call getEmailLists successfully', function(done) {
        //uncomment below and update the code to test getEmailLists
        //instance.getEmailLists(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmailSegment', function() {
      it('should call getEmailSegment successfully', function(done) {
        //uncomment below and update the code to test getEmailSegment
        //instance.getEmailSegment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmailSegmentCustomerEditorUrl', function() {
      it('should call getEmailSegmentCustomerEditorUrl successfully', function(done) {
        //uncomment below and update the code to test getEmailSegmentCustomerEditorUrl
        //instance.getEmailSegmentCustomerEditorUrl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmailSegmentCustomers', function() {
      it('should call getEmailSegmentCustomers successfully', function(done) {
        //uncomment below and update the code to test getEmailSegmentCustomers
        //instance.getEmailSegmentCustomers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmailSegments', function() {
      it('should call getEmailSegments successfully', function(done) {
        //uncomment below and update the code to test getEmailSegments
        //instance.getEmailSegments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmailSendingDomain', function() {
      it('should call getEmailSendingDomain successfully', function(done) {
        //uncomment below and update the code to test getEmailSendingDomain
        //instance.getEmailSendingDomain(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmailSendingDomainStatus', function() {
      it('should call getEmailSendingDomainStatus successfully', function(done) {
        //uncomment below and update the code to test getEmailSendingDomainStatus
        //instance.getEmailSendingDomainStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmailSendingDomains', function() {
      it('should call getEmailSendingDomains successfully', function(done) {
        //uncomment below and update the code to test getEmailSendingDomains
        //instance.getEmailSendingDomains(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmailTemplate', function() {
      it('should call getEmailTemplate successfully', function(done) {
        //uncomment below and update the code to test getEmailTemplate
        //instance.getEmailTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmailTemplates', function() {
      it('should call getEmailTemplates successfully', function(done) {
        //uncomment below and update the code to test getEmailTemplates
        //instance.getEmailTemplates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmailThirdPartyProviders', function() {
      it('should call getEmailThirdPartyProviders successfully', function(done) {
        //uncomment below and update the code to test getEmailThirdPartyProviders
        //instance.getEmailThirdPartyProviders(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getExperiments', function() {
      it('should call getExperiments successfully', function(done) {
        //uncomment below and update the code to test getExperiments
        //instance.getExperiments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getHistogramPropertyNames', function() {
      it('should call getHistogramPropertyNames successfully', function(done) {
        //uncomment below and update the code to test getHistogramPropertyNames
        //instance.getHistogramPropertyNames(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getHistogramPropertyValues', function() {
      it('should call getHistogramPropertyValues successfully', function(done) {
        //uncomment below and update the code to test getHistogramPropertyValues
        //instance.getHistogramPropertyValues(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('importEmailThirdPartyProviderList', function() {
      it('should call importEmailThirdPartyProviderList successfully', function(done) {
        //uncomment below and update the code to test importEmailThirdPartyProviderList
        //instance.importEmailThirdPartyProviderList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('insertEmailCampaign', function() {
      it('should call insertEmailCampaign successfully', function(done) {
        //uncomment below and update the code to test insertEmailCampaign
        //instance.insertEmailCampaign(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('insertEmailCommseq', function() {
      it('should call insertEmailCommseq successfully', function(done) {
        //uncomment below and update the code to test insertEmailCommseq
        //instance.insertEmailCommseq(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('insertEmailEmail', function() {
      it('should call insertEmailEmail successfully', function(done) {
        //uncomment below and update the code to test insertEmailEmail
        //instance.insertEmailEmail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('insertEmailFlow', function() {
      it('should call insertEmailFlow successfully', function(done) {
        //uncomment below and update the code to test insertEmailFlow
        //instance.insertEmailFlow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('insertEmailList', function() {
      it('should call insertEmailList successfully', function(done) {
        //uncomment below and update the code to test insertEmailList
        //instance.insertEmailList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('insertEmailSegment', function() {
      it('should call insertEmailSegment successfully', function(done) {
        //uncomment below and update the code to test insertEmailSegment
        //instance.insertEmailSegment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('search', function() {
      it('should call search successfully', function(done) {
        //uncomment below and update the code to test search
        //instance.search(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchEmailListCustomers', function() {
      it('should call searchEmailListCustomers successfully', function(done) {
        //uncomment below and update the code to test searchEmailListCustomers
        //instance.searchEmailListCustomers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchEmailSegmentCustomers', function() {
      it('should call searchEmailSegmentCustomers successfully', function(done) {
        //uncomment below and update the code to test searchEmailSegmentCustomers
        //instance.searchEmailSegmentCustomers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('startEmailCampaign', function() {
      it('should call startEmailCampaign successfully', function(done) {
        //uncomment below and update the code to test startEmailCampaign
        //instance.startEmailCampaign(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('subscribeToEmailList', function() {
      it('should call subscribeToEmailList successfully', function(done) {
        //uncomment below and update the code to test subscribeToEmailList
        //instance.subscribeToEmailList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateEmailCampaign', function() {
      it('should call updateEmailCampaign successfully', function(done) {
        //uncomment below and update the code to test updateEmailCampaign
        //instance.updateEmailCampaign(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateEmailCommseq', function() {
      it('should call updateEmailCommseq successfully', function(done) {
        //uncomment below and update the code to test updateEmailCommseq
        //instance.updateEmailCommseq(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateEmailEmail', function() {
      it('should call updateEmailEmail successfully', function(done) {
        //uncomment below and update the code to test updateEmailEmail
        //instance.updateEmailEmail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateEmailFlow', function() {
      it('should call updateEmailFlow successfully', function(done) {
        //uncomment below and update the code to test updateEmailFlow
        //instance.updateEmailFlow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateEmailList', function() {
      it('should call updateEmailList successfully', function(done) {
        //uncomment below and update the code to test updateEmailList
        //instance.updateEmailList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateEmailSegment', function() {
      it('should call updateEmailSegment successfully', function(done) {
        //uncomment below and update the code to test updateEmailSegment
        //instance.updateEmailSegment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateExperiment', function() {
      it('should call updateExperiment successfully', function(done) {
        //uncomment below and update the code to test updateExperiment
        //instance.updateExperiment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
