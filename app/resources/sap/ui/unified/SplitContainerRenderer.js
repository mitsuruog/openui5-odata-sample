/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.unified.SplitContainerRenderer");sap.ui.unified.SplitContainerRenderer={};
sap.ui.unified.SplitContainerRenderer.render=function(r,c){var i=c.getId();r.write("<div");r.writeControlData(c);r.addClass("sapUiUfdSpltCont");if(sap.ui.getCore().getConfiguration().getAnimation()){r.addClass("sapUiUfdSpltContAnim")}if(!c.getShowSecondaryContent()){r.addClass("sapUiUfdSpltContPaneHidden")}r.writeClasses();r.write(">");var C=i+"-canvas";r.write("<section id='",C,"' class='sapUiUfdSpltContCanvas'>");this.renderContent(r,C,c.getContent(),c._bRootContent);r.write("</section>");var s=i+"-pane";var w=c.getShowSecondaryContent()?c.getSecondaryContentWidth():"0";r.write("<aside id='",s,"' style='width:",w,"'");r.addClass("sapUiUfdSpltContPane");if(!c.getShowSecondaryContent()){r.addClass("sapUiUfdSplitContSecondClosed")}r.writeClasses();r.write(">");this.renderContent(r,s,c.getSecondaryContent(),c._bRootContent);r.write("</aside>");r.write("</div>")};
sap.ui.unified.SplitContainerRenderer.renderContent=function(r,I,c,R){r.write("<div id='",I,"cntnt' class='sapUiUfdSpltContCntnt'");if(R){r.writeAttribute("data-sap-ui-root-content","true")}r.write(">");for(var i=0;i<c.length;i++){r.renderControl(c[i])}r.write("</div>")};
