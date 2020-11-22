const eejs = require('ep_etherpad-lite/node/eejs');
const express = require('ep_etherpad-lite/node_modules/express');
const settings = require('ep_etherpad-lite/node/utils/Settings');

exports.eejsBlock_styles = function (hook_name, args, cb) {
  args.content += "<link href='/static/plugins/ep_visual_slider/static/css/visual_slider.css' rel='stylesheet'>";
  return cb();
};

exports.eejsBlock_body = function (hook_name, args, cb) {
  args.content += eejs.require('ep_visual_slider/templates/visual_slider.ejs', {}, module);
  return cb();
};

exports.eejsBlock_scripts = function (hook_name, args, cb) {
  args.content += "<script src='/static/plugins/ep_visual_slider/static/js/visual_slider.js'></script>";
  return cb();
};

exports.eejsBlock_mySettings = function (hook_name, args, cb) {
  let checked_state = 'unchecked';
  if (settings.ep_visual_slider) {
    if (settings.ep_visual_slider.disable_by_default === true) {
      checked_state = 'unchecked';
    } else {
      checked_state = 'checked';
    }
  }
  args.content += eejs.require('ep_visual_slider/templates/visual_slider_entry.ejs', {checked: checked_state});
  return cb();
};
