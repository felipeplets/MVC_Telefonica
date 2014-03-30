/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.ux3.ExactAttribute");jQuery.sap.require("sap.ui.ux3.library");jQuery.sap.require("sap.ui.core.Element");sap.ui.core.Element.extend("sap.ui.ux3.ExactAttribute",{metadata:{publicMethods:["getShowSubAttributesIndicator_Computed","scrollTo"],library:"sap.ui.ux3",properties:{"text":{type:"string",group:"Misc",defaultValue:null},"selected":{type:"boolean",group:"Misc",defaultValue:null},"width":{type:"int",group:"Misc",defaultValue:168},"listOrder":{type:"sap.ui.ux3.ExactOrder",group:"",defaultValue:sap.ui.ux3.ExactOrder.Select},"showSubAttributesIndicator":{type:"boolean",group:"Misc",defaultValue:true},"additionalData":{type:"object",group:"Misc",defaultValue:null},"supplyActive":{type:"boolean",group:"Misc",defaultValue:true},"autoActivateSupply":{type:"boolean",group:"Misc",defaultValue:false}},defaultAggregation:"attributes",aggregations:{"attributes":{type:"sap.ui.ux3.ExactAttribute",multiple:true,singularName:"attribute"}},events:{"supplyAttributes":{}}}});sap.ui.ux3.ExactAttribute.M_EVENTS={'supplyAttributes':'supplyAttributes'};(function(){sap.ui.ux3.ExactAttribute._MINWIDTH=70;sap.ui.ux3.ExactAttribute._MAXWIDTH=500;sap.ui.ux3.ExactAttribute.prototype.scrollTo=function(a){if(!(a instanceof sap.ui.ux3.ExactAttribute)){this._scrollToAttributeId=undefined;return}var l=this.getChangeListener();if(l){l=sap.ui.getCore().byId(l.id);if(l&&l._lb){var i=this.indexOfAttribute(a);if(i>=0){l._lb.scrollToIndex(i,true)}this._scrollToAttributeId=undefined;return}}this._scrollToAttributeId=a.getId()};sap.ui.ux3.ExactAttribute.prototype.setText=function(t){this.setProperty("text",t,true);this._handleChange(this,"text");return this};sap.ui.ux3.ExactAttribute.prototype.setWidth=function(w){this._setWidth(w);this._handleChange(this,"width");return this};sap.ui.ux3.ExactAttribute.prototype.setTooltip=function(t){sap.ui.core.Element.prototype.setTooltip.apply(this,arguments);this._handleChange(this,"tooltip",true);return this};sap.ui.ux3.ExactAttribute.prototype.setSelected=function(s){this.setProperty("selected",s,true);if(!this.getSelected()){this._clearSelection()}this._handleChange(this,"selected");return this};sap.ui.ux3.ExactAttribute.prototype.setSupplyActive=function(s){this.setProperty("supplyActive",s,true);return this};sap.ui.ux3.ExactAttribute.prototype.setAutoActivateSupply=function(a){this.setProperty("autoActivateSupply",a,true);return this};sap.ui.ux3.ExactAttribute.prototype.setAdditionalData=function(a){this.setProperty("additionalData",a,true);return this};sap.ui.ux3.ExactAttribute.prototype.setListOrder=function(l){this.setProperty("listOrder",l,true);this._handleChange(this,"order");return this};sap.ui.ux3.ExactAttribute.prototype.getAttributes=function(){if(this.hasListeners("supplyAttributes")&&this.getSupplyActive()){this._bSuppressChange=true;this._bChangedHappenedDuringSuppress=false;this.fireSupplyAttributes({attribute:this});this.setSupplyActive(false);this._bSuppressChange=undefined;if(this._bChangedHappenedDuringSuppress){this._handleChange(this,"attributes")}this._bChangedHappenedDuringSuppress=undefined}return this.getAggregation("attributes",[])};sap.ui.ux3.ExactAttribute.prototype.insertAttribute=function(a,i){this.insertAggregation("attributes",a,i,true);this._handleChange(this,"attributes");this.setSupplyActive(false);return this};sap.ui.ux3.ExactAttribute.prototype.addAttribute=function(a){this.addAggregation("attributes",a,true);this._handleChange(this,"attributes");this.setSupplyActive(false);return this};sap.ui.ux3.ExactAttribute.prototype.removeAttribute=function(e){var a=this.removeAggregation("attributes",e,true);if(a){a.setChangeListener(null);this._handleChange(this,"attributes")}return a};sap.ui.ux3.ExactAttribute.prototype.removeAllAttributes=function(){var a=this.getAttributesInternal();for(var i=0;i<a.length;i++){a[i].setChangeListener(null)}var r=this.removeAllAggregation("attributes",true);if(a.length>0){this._handleChange(this,"attributes")}return r};sap.ui.ux3.ExactAttribute.prototype.destroyAttributes=function(){var a=this.getAttributesInternal();for(var i=0;i<a.length;i++){a[i].setChangeListener(null)}this.destroyAggregation("attributes",true);if(a.length>0){this._handleChange(this,"attributes")}return this};sap.ui.ux3.ExactAttribute.prototype.getShowSubAttributesIndicator_Computed=function(){return this.hasListeners("supplyAttributes")&&this.getSupplyActive()?this.getShowSubAttributesIndicator():this.getAttributesInternal().length>0};sap.ui.ux3.ExactAttribute.prototype.attachSupplyAttributes=function(d,f,l){this.attachEvent("supplyAttributes",d,f,l);if(this.getSelected()){this.getAttributesInternal(true)}return this};sap.ui.ux3.ExactAttribute.prototype._setProperty_Orig=sap.ui.ux3.ExactAttribute.prototype.setProperty;sap.ui.ux3.ExactAttribute.prototype.setProperty=function(p,v,s){this._setProperty_Orig(p,v,s);if(p=="selected"){if(v){this.getAttributesInternal(true)}else{if(this.getAutoActivateSupply()){this.setSupplyActive(true)}}}return this};sap.ui.ux3.ExactAttribute.prototype.setChangeListener=function(c){this._oChangeListener=c};sap.ui.ux3.ExactAttribute.prototype.getChangeListener=function(c){return this._oChangeListener};sap.ui.ux3.ExactAttribute.prototype.getAttributesInternal=function(f){return f?this.getAttributes():this.getAggregation("attributes",[])};sap.ui.ux3.ExactAttribute.prototype._handleChange=function(s,t){if(this._bSuppressChange){this._bChangedHappenedDuringSuppress=true;return}if(this.getChangeListener()){this.getChangeListener()._notifyOnChange(t,s)}else if(this.getParent()&&this.getParent()._handleChange){this.getParent()._handleChange(s,t)}};sap.ui.ux3.ExactAttribute.prototype._clearSelection=function(){this.setProperty("selected",false,true);var v=this.getAttributesInternal();for(var i=0;i<v.length;i++){v[i]._clearSelection()}};sap.ui.ux3.ExactAttribute.prototype._setWidth=function(w){w=Math.round(sap.ui.ux3.ExactAttribute._checkWidth(w));this.setProperty("width",w,true)};sap.ui.ux3.ExactAttribute._checkWidth=function(w){w=Math.max(w,sap.ui.ux3.ExactAttribute._MINWIDTH);w=Math.min(w,sap.ui.ux3.ExactAttribute._MAXWIDTH);return w}}());