/*jshint couch:true, indent:2, white:true, laxcomma:true, strict:true, unused:true, eqnull:true, camelcase: false, trailing: true */
/*global toJSON */

function(doc, req) {
  'use strict';
  
  var data = JSON.parse(req.body);
  
  if (doc == null) {
    doc = {
      _id: data._id
    , type: 'form'
    , token: data.token
    , created_at: new Date()
    , form_name: data.form_name
    , website_url: data.website_url
    , website_success_page: data.website_success_page
    , website_error_page: data.website_error_page
    , form_subject: data.form_subject
    , form_intro: data.form_intro
    , form_destination: data.form_destination
    , creator_email: data.creator_email
    , sender_name: data.sender_name
    , sender_email: data.sender_email
    , colours: data.colours
    };
  }

  // remove form
  if (data.action == 'delete') {
    doc.deleted = true;
  }

  return [doc, toJSON(doc)];
}