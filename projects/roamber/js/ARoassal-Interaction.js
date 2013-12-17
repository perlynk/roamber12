define("roamber/ARoassal-Interaction", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "roamber/ARoassal"], function(smalltalk,nil,_st){
smalltalk.addPackage('ARoassal-Interaction');
smalltalk.packages["ARoassal-Interaction"].transport = {"type":"amd","amdNamespace":"roamber"};

smalltalk.addClass('ROInteraction', smalltalk.ROObject, [], 'ARoassal-Interaction');
smalltalk.addMethod(
smalltalk.method({
selector: "elementToBeAdded",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self;
}, function($ctx1) {$ctx1.fill(self,"elementToBeAdded",{},smalltalk.ROInteraction)})},
args: [],
source: "elementToBeAdded\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROInteraction);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeElement:",
category: 'as yet unclassified',
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"initializeElement:",{element:element},smalltalk.ROInteraction)})},
args: ["element"],
source: "initializeElement: element\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ROInteraction);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._class();
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.ROInteraction)})},
args: [],
source: "key \x0a\x09\x22Used in the dictionary each element has\x22\x0a\x0a\x09^ self class",
messageSends: ["class"],
referencedClasses: []
}),
smalltalk.ROInteraction);


smalltalk.addMethod(
smalltalk.method({
selector: "elementToBeAdded",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementToBeAdded",{},smalltalk.ROInteraction.klass)})},
args: [],
source: "elementToBeAdded\x0a\x09^ self new",
messageSends: ["new"],
referencedClasses: []
}),
smalltalk.ROInteraction.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeElement:",
category: 'as yet unclassified',
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._elementToBeAdded();
_st($2)._initializeElement_(element);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initializeElement:",{element:element},smalltalk.ROInteraction.klass)})},
args: ["element"],
source: "initializeElement: element\x0a\x09^ self elementToBeAdded initializeElement: element; yourself",
messageSends: ["initializeElement:", "elementToBeAdded", "yourself"],
referencedClasses: []
}),
smalltalk.ROInteraction.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.ROInteraction.klass)})},
args: [],
source: "key \x0a\x09\x22Used in the dictionary each element has\x22\x0a\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROInteraction.klass);


smalltalk.addClass('ROAbstractPopup', smalltalk.ROInteraction, [], 'ARoassal-Interaction');
smalltalk.addMethod(
smalltalk.method({
selector: "createPopupFor:",
category: 'not yet classified',
fn: function (element){
var self=this;
var popupElement,popupPosition;
function $ROMouseDragged(){return smalltalk.ROMouseDragged||(typeof ROMouseDragged=="undefined"?nil:ROMouseDragged)}
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$6,$5,$8,$7,$4,$11,$10,$9,$12;
popupElement=self._createElementFor_(element);
$1=popupElement;
$2=self._popupPositionFor_(element);
$ctx1.sendIdx["popupPositionFor:"]=1;
_st($1)._translateTo_($2);
$ctx1.sendIdx["translateTo:"]=1;
_st(popupElement)._on_do_($ROMouseDragged(),(function(e){
return smalltalk.withContext(function($ctx2) {
_st($Transcript())._show_("ROMouseDragged event catched".__comma(_st($String())._cr()));
$3=_st(popupElement)._svgElement();
$6=_st(element)._position();
$ctx2.sendIdx["position"]=1;
$5=_st($6)._x();
$ctx2.sendIdx["x"]=1;
$8=_st(popupElement)._position();
$ctx2.sendIdx["position"]=2;
$7=_st($8)._x();
$4=_st($5).__minus($7);
$ctx2.sendIdx["-"]=1;
$11=_st(element)._position();
$ctx2.sendIdx["position"]=3;
$10=_st($11)._y();
$ctx2.sendIdx["y"]=1;
$9=_st($10).__minus(_st(_st(popupElement)._position())._y());
_st($3)._translate_y_($4,$9);
return _st(popupElement)._translateTo_(self._popupPositionFor_(_st(e)._element()));
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)})}));
_st(self._receivingViewFor_(element))._add_(popupElement);
$12=popupElement;
return $12;
}, function($ctx1) {$ctx1.fill(self,"createPopupFor:",{element:element,popupElement:popupElement,popupPosition:popupPosition},smalltalk.ROAbstractPopup)})},
args: ["element"],
source: "createPopupFor: element\x0a\x09| popupElement popupPosition |\x0a\x09popupElement := self createElementFor: element.\x0a\x09\x22\x09popupElement := (ROElement on: 'toasty!') + ROBox.\x22\x0a\x09\x0a\x09\x22 positioning \x22\x0a\x09popupElement translateTo: (self popupPositionFor: element).\x0a\x0a\x22\x09popupElement on: ROMouseLeave do: [ :e | popupElement view remove: popupElement ifAbsent: [  ] ].\x22\x0a\x09popupElement on: ROMouseDragged do: [ :e | \x0a\x09\x09Transcript show: 'ROMouseDragged event catched',(String cr).\x0a\x09\x09popupElement svgElement \x0a\x09\x09\x09\x09translate: (element position x - (popupElement position x) )\x0a\x09\x09\x09\x09y: (element position y - (popupElement position y) ).\x0a\x09\x09popupElement translateTo: (self popupPositionFor: (e element)).\x0a\x0a\x09].\x0a\x0a\x09(self receivingViewFor: element) add: popupElement.\x09\x0a\x0a\x0a\x22\x09self popups add: popupElement.\x22\x0a\x0a\x09^ popupElement",
messageSends: ["createElementFor:", "translateTo:", "popupPositionFor:", "on:do:", "show:", ",", "cr", "translate:y:", "svgElement", "-", "x", "position", "y", "element", "add:", "receivingViewFor:"],
referencedClasses: ["ROMouseDragged", "Transcript", "String"]
}),
smalltalk.ROAbstractPopup);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeElement:",
category: 'not yet classified',
fn: function (element){
var self=this;
var svgElement,popupElement;
function $ROMouseEnter(){return smalltalk.ROMouseEnter||(typeof ROMouseEnter=="undefined"?nil:ROMouseEnter)}
function $ROMouseLeave(){return smalltalk.ROMouseLeave||(typeof ROMouseLeave=="undefined"?nil:ROMouseLeave)}
function $ROMouseDragging(){return smalltalk.ROMouseDragging||(typeof ROMouseDragging=="undefined"?nil:ROMouseDragging)}
function $ROMouseDragged(){return smalltalk.ROMouseDragged||(typeof ROMouseDragged=="undefined"?nil:ROMouseDragged)}
return smalltalk.withContext(function($ctx1) { 
svgElement=_st(_st(element)._shape())._svgElement();
popupElement=self._createPopupFor_(element);
_st(element)._signalUpdate();
$ctx1.sendIdx["signalUpdate"]=1;
_st(popupElement)._hide();
$ctx1.sendIdx["hide"]=1;
_st(element)._on_do_($ROMouseEnter(),(function(evt){
return smalltalk.withContext(function($ctx2) {
_st(popupElement)._translateTo_(_st(evt)._position());
_st(popupElement)._signalUpdate();
return _st(popupElement)._show();
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,1)})}));
$ctx1.sendIdx["on:do:"]=1;
_st(element)._on_do_($ROMouseLeave(),(function(evt){
return smalltalk.withContext(function($ctx2) {
return _st(popupElement)._hide();
$ctx2.sendIdx["hide"]=2;
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,2)})}));
$ctx1.sendIdx["on:do:"]=2;
_st(element)._on_do_($ROMouseDragging(),(function(evt){
return smalltalk.withContext(function($ctx2) {
return _st(popupElement)._hide();
$ctx2.sendIdx["hide"]=3;
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,3)})}));
$ctx1.sendIdx["on:do:"]=3;
_st(element)._on_do_($ROMouseDragged(),(function(evt){
return smalltalk.withContext(function($ctx2) {
return _st(popupElement)._hide();
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,4)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeElement:",{element:element,svgElement:svgElement,popupElement:popupElement},smalltalk.ROAbstractPopup)})},
args: ["element"],
source: "initializeElement: element\x0a\x09| svgElement popupElement     |\x0a\x09svgElement := element shape svgElement.\x0a\x09\x0a\x09popupElement := self createPopupFor: element.\x0a\x09\x0a\x09element signalUpdate.\x0a\x09popupElement hide.\x0a\x0a\x09\x0a\x09element on: ROMouseEnter \x0a\x09\x09do: [ :evt |\x0a\x0a\x09\x09\x09popupElement translateTo: evt position.\x0a\x09\x09\x09popupElement signalUpdate.\x0a\x0a\x09\x09\x09popupElement show.\x0a\x0a\x09].\x0a\x09element on: ROMouseLeave \x0a\x09\x09do: [:evt |\x0a\x09\x09popupElement hide.\x0a\x09].\x0a\x09\x09\x09\x0a\x09element on: ROMouseDragging \x0a\x09\x09do: [ :evt | \x0a\x0a\x09\x09\x09popupElement hide.\x09\x09\x0a\x09].\x09\x0a\x0a\x09element on: ROMouseDragged \x0a\x09\x09do: [ :evt | \x0a\x09\x09\x09popupElement hide.\x09\x09\x0a\x09].",
messageSends: ["svgElement", "shape", "createPopupFor:", "signalUpdate", "hide", "on:do:", "translateTo:", "position", "show"],
referencedClasses: ["ROMouseEnter", "ROMouseLeave", "ROMouseDragging", "ROMouseDragged"]
}),
smalltalk.ROAbstractPopup);

smalltalk.addMethod(
smalltalk.method({
selector: "popupPositionFor:",
category: 'not yet classified',
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $4,$3,$2,$1;
$4=_st(element)._position();
$ctx1.sendIdx["position"]=1;
$3=_st($4)._x();
$2=_st($3).__plus((10));
$ctx1.sendIdx["+"]=1;
$1=_st($2).__at(_st(_st(_st(element)._position())._y()).__plus((10)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"popupPositionFor:",{element:element},smalltalk.ROAbstractPopup)})},
args: ["element"],
source: "popupPositionFor: element\x0a\x09^  (element position x + 10)@(element position y + 10).",
messageSends: ["@", "+", "x", "position", "y"],
referencedClasses: []
}),
smalltalk.ROAbstractPopup);

smalltalk.addMethod(
smalltalk.method({
selector: "popups",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._popups();
return $1;
}, function($ctx1) {$ctx1.fill(self,"popups",{},smalltalk.ROAbstractPopup)})},
args: [],
source: "popups\x0a\x09^self class popups",
messageSends: ["popups", "class"],
referencedClasses: []
}),
smalltalk.ROAbstractPopup);

smalltalk.addMethod(
smalltalk.method({
selector: "receivingViewFor:",
category: 'not yet classified',
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(element)._view();
return $1;
}, function($ctx1) {$ctx1.fill(self,"receivingViewFor:",{element:element},smalltalk.ROAbstractPopup)})},
args: ["element"],
source: "receivingViewFor: element\x0a\x09^ element view",
messageSends: ["view"],
referencedClasses: []
}),
smalltalk.ROAbstractPopup);

smalltalk.addMethod(
smalltalk.method({
selector: "removeAllPopups",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._popups())._do_((function(p){
return smalltalk.withContext(function($ctx2) {
return self._removePopup_(p);
}, function($ctx2) {$ctx2.fillBlock({p:p},$ctx1,1)})}));
_st(self._class())._resetPopups();
return self}, function($ctx1) {$ctx1.fill(self,"removeAllPopups",{},smalltalk.ROAbstractPopup)})},
args: [],
source: "removeAllPopups\x0a\x09\x0a\x09self popups do: [ :p | self removePopup: p ].\x0a\x09self class resetPopups",
messageSends: ["do:", "popups", "removePopup:", "resetPopups", "class"],
referencedClasses: []
}),
smalltalk.ROAbstractPopup);

smalltalk.addMethod(
smalltalk.method({
selector: "removePopup:",
category: 'not yet classified',
fn: function (el){
var self=this;
return smalltalk.withContext(function($ctx1) { 
if(($receiver = el) == nil || $receiver == null){
el;
} else {
_st(el)._remove();
};
return self}, function($ctx1) {$ctx1.fill(self,"removePopup:",{el:el},smalltalk.ROAbstractPopup)})},
args: ["el"],
source: "removePopup: el\x0a\x09el ifNotNil: [ el remove ].",
messageSends: ["ifNotNil:", "remove"],
referencedClasses: []
}),
smalltalk.ROAbstractPopup);


smalltalk.ROAbstractPopup.klass.iVarNames = ['popups'];
smalltalk.addMethod(
smalltalk.method({
selector: "popups",
category: 'not yet classified',
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@popups"];
if(($receiver = $2) == nil || $receiver == null){
self["@popups"]=_st($OrderedCollection())._new();
$1=self["@popups"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"popups",{},smalltalk.ROAbstractPopup.klass)})},
args: [],
source: "popups\x0a\x0a\x09^ popups ifNil: [ popups := OrderedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.ROAbstractPopup.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "resetPopups",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@popups"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"resetPopups",{},smalltalk.ROAbstractPopup.klass)})},
args: [],
source: "resetPopups\x0a\x0a\x09popups := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractPopup.klass);


smalltalk.addClass('ROPopup', smalltalk.ROAbstractPopup, ['text'], 'ARoassal-Interaction');
smalltalk.addMethod(
smalltalk.method({
selector: "createElementFor:",
category: 'not yet classified',
fn: function (anElement){
var self=this;
function $ROLabel(){return smalltalk.ROLabel||(typeof ROLabel=="undefined"?nil:ROLabel)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st($ROLabel())._new())._elementOn_(_st(self["@text"])._roValue_(_st(anElement)._model())))._color_(_st($Color())._black());
return $1;
}, function($ctx1) {$ctx1.fill(self,"createElementFor:",{anElement:anElement},smalltalk.ROPopup)})},
args: ["anElement"],
source: "createElementFor: anElement\x0a\x0a\x09^ (ROLabel new elementOn: (text roValue: anElement model)) color: Color black",
messageSends: ["color:", "elementOn:", "new", "roValue:", "model", "black"],
referencedClasses: ["ROLabel", "Color"]
}),
smalltalk.ROPopup);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROPopup.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@text"]="yourself";
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROPopup)})},
args: [],
source: "initialize \x0a\x09super initialize.\x0a\x09text := #yourself.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.ROPopup);

smalltalk.addMethod(
smalltalk.method({
selector: "text:",
category: 'not yet classified',
fn: function (textBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@text"]=textBlock;
return self}, function($ctx1) {$ctx1.fill(self,"text:",{textBlock:textBlock},smalltalk.ROPopup)})},
args: ["textBlock"],
source: "text: textBlock\x0a\x09text := textBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROPopup);


smalltalk.addMethod(
smalltalk.method({
selector: "text:",
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._text_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"text:",{aString:aString},smalltalk.ROPopup.klass)})},
args: ["aString"],
source: "text: aString\x0a\x09^ self new text: aString.",
messageSends: ["text:", "new"],
referencedClasses: []
}),
smalltalk.ROPopup.klass);


smalltalk.addClass('ROClickable', smalltalk.ROInteraction, [], 'ARoassal-Interaction');
smalltalk.ROClickable.comment="REFACTOR:\x0a- Move to ARoassal-Raphaeljs";
smalltalk.addMethod(
smalltalk.method({
selector: "initializeElement:",
category: 'not yet classified',
fn: function (element){
var self=this;
var svgElement;
function $ROMouseLeftClick(){return smalltalk.ROMouseLeftClick||(typeof ROMouseLeftClick=="undefined"?nil:ROMouseLeftClick)}
return smalltalk.withContext(function($ctx1) { 
svgElement=_st(_st(element)._shape())._svgElement();
_st(svgElement)._unclick();
_st(svgElement)._click_((function(){
var ev;
return smalltalk.withContext(function($ctx2) {
ev=_st($ROMouseLeftClick())._new();
ev;
return _st(element)._announce_(ev);
}, function($ctx2) {$ctx2.fillBlock({ev:ev},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeElement:",{element:element,svgElement:svgElement},smalltalk.ROClickable)})},
args: ["element"],
source: "initializeElement: element\x0a\x09| svgElement |\x0a\x09svgElement := element shape svgElement.\x0a\x09svgElement unclick.\x0a\x09svgElement\x09click: [ \x0a\x09\x09| ev |\x0a\x09\x09\x22 see ROMorph>>roMouseClick:\x22\x0a\x09\x09ev := ROMouseLeftClick new.\x0a\x09\x09element announce: ev.\x0a\x09\x09].",
messageSends: ["svgElement", "shape", "unclick", "click:", "new", "announce:"],
referencedClasses: ["ROMouseLeftClick"]
}),
smalltalk.ROClickable);



smalltalk.addClass('RODraggable', smalltalk.ROInteraction, [], 'ARoassal-Interaction');
smalltalk.addMethod(
smalltalk.method({
selector: "initializeElement:",
category: 'as yet unclassified',
fn: function (element){
var self=this;
var svgElement,originX,originY;
function $RORaphaelCanvas(){return smalltalk.RORaphaelCanvas||(typeof RORaphaelCanvas=="undefined"?nil:RORaphaelCanvas)}
function $ROMouseDragging(){return smalltalk.ROMouseDragging||(typeof ROMouseDragging=="undefined"?nil:ROMouseDragging)}
function $ROMouseDragged(){return smalltalk.ROMouseDragged||(typeof ROMouseDragged=="undefined"?nil:ROMouseDragged)}
return smalltalk.withContext(function($ctx1) { 
var $5,$4,$3,$2,$9,$8,$7,$6,$1,$12,$11,$10,$14,$13,$16,$15;
svgElement=_st(_st(element)._shape())._svgElement();
_st(svgElement)._drag_onStart_onEnd_((function(dx,dy,x,y){
return smalltalk.withContext(function($ctx2) {
$5=_st($RORaphaelCanvas())._origin();
$ctx2.sendIdx["origin"]=1;
$4=_st($5)._x();
$ctx2.sendIdx["x"]=1;
$3=_st(x).__minus($4);
$ctx2.sendIdx["-"]=2;
$2=_st($3).__minus(originX);
$ctx2.sendIdx["-"]=1;
$9=_st($RORaphaelCanvas())._origin();
$ctx2.sendIdx["origin"]=2;
$8=_st($9)._y();
$ctx2.sendIdx["y"]=1;
$7=_st(y).__minus($8);
$ctx2.sendIdx["-"]=4;
$6=_st($7).__minus(originY);
$ctx2.sendIdx["-"]=3;
$1=_st($2).__at($6);
_st(element)._translateTo_($1);
return _st(element)._signalUpdate();
}, function($ctx2) {$ctx2.fillBlock({dx:dx,dy:dy,x:x,y:y},$ctx1,1)})}),(function(x,y){
var evt;
return smalltalk.withContext(function($ctx2) {
$12=_st($RORaphaelCanvas())._origin();
$ctx2.sendIdx["origin"]=3;
$11=_st($12)._x();
$ctx2.sendIdx["x"]=2;
$10=_st(x).__minus($11);
$ctx2.sendIdx["-"]=6;
$14=_st(element)._position();
$ctx2.sendIdx["position"]=1;
$13=_st($14)._x();
originX=_st($10).__minus($13);
$ctx2.sendIdx["-"]=5;
originX;
$16=_st(_st($RORaphaelCanvas())._origin())._y();
$ctx2.sendIdx["y"]=2;
$15=_st(y).__minus($16);
originY=_st($15).__minus(_st(_st(element)._position())._y());
$ctx2.sendIdx["-"]=7;
originY;
evt=_st($ROMouseDragging())._new();
$ctx2.sendIdx["new"]=1;
evt;
return _st(element)._announce_(evt);
$ctx2.sendIdx["announce:"]=1;
}, function($ctx2) {$ctx2.fillBlock({x:x,y:y,evt:evt},$ctx1,2)})}),(function(){
var evt;
return smalltalk.withContext(function($ctx2) {
evt=_st($ROMouseDragged())._new();
evt;
return _st(element)._announce_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeElement:",{element:element,svgElement:svgElement,originX:originX,originY:originY},smalltalk.RODraggable)})},
args: ["element"],
source: "initializeElement: element\x0a\x09| svgElement originX originY |\x0a\x09svgElement := element shape svgElement.\x0a\x09\x0a\x09svgElement\x09\x0a\x09\x09drag: [ :dx :dy :x :y |\x0a\x09\x09\x09\x22update element position and redraw\x22\x0a\x09\x09\x09element translateTo: (x  - (RORaphaelCanvas origin x) - originX ) @ (y  - (RORaphaelCanvas origin y) - originY). \x0a\x09\x09\x09element signalUpdate.\x0a\x09\x09]\x0a \x09\x09onStart: [ :x :y |\x0a\x09\x09\x09| evt |\x0a\x09\x09\x09\x22 Save mouse position when click\x22\x0a\x09\x09\x09originX := (x - (RORaphaelCanvas origin x)) - element position x.\x0a\x09\x09\x09originY := (y - (RORaphaelCanvas origin y)) - element position y.\x0a\x09\x09\x09\x0a\x09\x09\x09\x22 Announce that an element is being dragged\x22\x0a\x09\x09\x09evt := ROMouseDragging new.\x0a\x09\x09\x09element announce: evt.\x0a\x09\x09]\x0a     \x09onEnd: [ \x0a\x09\x09\x09| evt |\x0a\x09\x09\x09\x22 Announce that an element is was dragged\x22\x0a\x09\x09\x09evt := ROMouseDragged new.\x0a\x09\x09\x09element announce: evt.\x0a\x09\x09].",
messageSends: ["svgElement", "shape", "drag:onStart:onEnd:", "translateTo:", "@", "-", "x", "origin", "y", "signalUpdate", "position", "new", "announce:"],
referencedClasses: ["RORaphaelCanvas", "ROMouseDragging", "ROMouseDragged"]
}),
smalltalk.RODraggable);



smalltalk.addClass('ROHighlight', smalltalk.ROInteraction, ['color'], 'ARoassal-Interaction');
smalltalk.ROHighlight.comment="REFACTOR:\x0a- Move to ARoassal-Raphaeljs";
smalltalk.addMethod(
smalltalk.method({
selector: "color",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@color"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"color",{},smalltalk.ROHighlight)})},
args: [],
source: "color\x0a\x09^ color",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROHighlight);

smalltalk.addMethod(
smalltalk.method({
selector: "color:",
category: 'not yet classified',
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@color"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.ROHighlight)})},
args: ["aColor"],
source: "color: aColor\x0a\x09color := aColor",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROHighlight);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROHighlight.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@color"]=_st(self._class())._defaultColor();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROHighlight)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09color := self class defaultColor.",
messageSends: ["initialize", "defaultColor", "class"],
referencedClasses: []
}),
smalltalk.ROHighlight);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeElement:",
category: 'not yet classified',
fn: function (element){
var self=this;
function $ROMouseEnter(){return smalltalk.ROMouseEnter||(typeof ROMouseEnter=="undefined"?nil:ROMouseEnter)}
function $ROMouseLeave(){return smalltalk.ROMouseLeave||(typeof ROMouseLeave=="undefined"?nil:ROMouseLeave)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4;
_st(element)._on_do_($ROMouseEnter(),(function(evt){
return smalltalk.withContext(function($ctx2) {
$1=_st(evt)._element();
$ctx2.sendIdx["element"]=1;
_st($1)._color_(self._color());
$ctx2.sendIdx["color:"]=1;
$3=_st(evt)._element();
$ctx2.sendIdx["element"]=2;
$2=_st($3)._view();
$ctx2.sendIdx["view"]=1;
return _st($2)._signalUpdate();
$ctx2.sendIdx["signalUpdate"]=1;
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,1)})}));
$ctx1.sendIdx["on:do:"]=1;
_st(element)._on_do_($ROMouseLeave(),(function(evt){
return smalltalk.withContext(function($ctx2) {
$4=_st(evt)._element();
$ctx2.sendIdx["element"]=3;
_st($4)._color_(_st(_st(_st(element)._shape())._class())._defaultColor());
return _st(_st(_st(evt)._element())._view())._signalUpdate();
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeElement:",{element:element},smalltalk.ROHighlight)})},
args: ["element"],
source: "initializeElement: element\x0a\x0a\x09element on: ROMouseEnter do: [:evt | evt element color: (self color). evt element view signalUpdate].\x0a\x09element on: ROMouseLeave do: [:evt | evt element color: (element shape class defaultColor). evt element view signalUpdate].",
messageSends: ["on:do:", "color:", "element", "color", "signalUpdate", "view", "defaultColor", "class", "shape"],
referencedClasses: ["ROMouseEnter", "ROMouseLeave"]
}),
smalltalk.ROHighlight);


smalltalk.addMethod(
smalltalk.method({
selector: "color:",
category: 'not yet classified',
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._color_(aColor);
return $1;
}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.ROHighlight.klass)})},
args: ["aColor"],
source: "color: aColor\x0a\x09^ self new color: aColor",
messageSends: ["color:", "new"],
referencedClasses: []
}),
smalltalk.ROHighlight.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultColor",
category: 'not yet classified',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._red();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultColor",{},smalltalk.ROHighlight.klass)})},
args: [],
source: "defaultColor\x0a\x09^ Color red.",
messageSends: ["red"],
referencedClasses: ["Color"]
}),
smalltalk.ROHighlight.klass);


smalltalk.addClass('ROHoverable', smalltalk.ROInteraction, [], 'ARoassal-Interaction');
smalltalk.addMethod(
smalltalk.method({
selector: "initializeElement:",
category: 'not yet classified',
fn: function (element){
var self=this;
var svgElement;
function $ROMouseEnter(){return smalltalk.ROMouseEnter||(typeof ROMouseEnter=="undefined"?nil:ROMouseEnter)}
function $RORaphaelCanvas(){return smalltalk.RORaphaelCanvas||(typeof RORaphaelCanvas=="undefined"?nil:RORaphaelCanvas)}
function $ROMouseLeave(){return smalltalk.ROMouseLeave||(typeof ROMouseLeave=="undefined"?nil:ROMouseLeave)}
return smalltalk.withContext(function($ctx1) { 
var $1,$5,$7,$6,$4,$9,$8,$3,$10,$2;
svgElement=_st(_st(element)._shape())._svgElement();
_st(svgElement)._hover_whenLeave_((function(e){
var ev;
return smalltalk.withContext(function($ctx2) {
ev=_st($ROMouseEnter())._new();
$ctx2.sendIdx["new"]=1;
ev;
$1=ev;
$5=_st(e)._pageX();
$7=_st($RORaphaelCanvas())._origin();
$ctx2.sendIdx["origin"]=1;
$6=_st($7)._x();
$4=_st($5).__minus($6);
$ctx2.sendIdx["-"]=2;
$9="#roassal-canvas"._asJQuery();
$ctx2.sendIdx["asJQuery"]=1;
$8=_st($9)._scrollLeft();
$3=_st($4).__minus($8);
$ctx2.sendIdx["-"]=1;
$10=_st(_st(_st(e)._pageY()).__minus(_st(_st($RORaphaelCanvas())._origin())._y())).__minus(_st("#roassal-canvas"._asJQuery())._scrollTop());
$ctx2.sendIdx["-"]=3;
$2=_st($3).__at($10);
_st($1)._position_($2);
_st(ev)._element_(element);
return _st(element)._announce_(ev);
$ctx2.sendIdx["announce:"]=1;
}, function($ctx2) {$ctx2.fillBlock({e:e,ev:ev},$ctx1,1)})}),(function(){
var ev;
return smalltalk.withContext(function($ctx2) {
ev=_st($ROMouseLeave())._new();
ev;
return _st(element)._announce_(ev);
}, function($ctx2) {$ctx2.fillBlock({ev:ev},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeElement:",{element:element,svgElement:svgElement},smalltalk.ROHoverable)})},
args: ["element"],
source: "initializeElement: element\x0a\x09| svgElement      |\x0a\x09svgElement := element shape svgElement.\x0a\x0a\x09svgElement\x09\x0a\x09\x09hover: [ :e|\x0a\x09\x09| ev |\x0a\x09\x09ev := ROMouseEnter new.\x0a\x22\x09\x09ev position: (e clientX  -  (RORaphaelCanvas origin x)) @ (e clientY -  (RORaphaelCanvas origin y)).\x22\x0a\x09\x09ev position: (e pageX  -  (RORaphaelCanvas origin x) - ('#roassal-canvas' asJQuery scrollLeft) ) @ (e pageY -  (RORaphaelCanvas origin y) - ('#roassal-canvas' asJQuery scrollTop)).\x0a\x09\x09ev element: element.\x0a\x09\x09element announce: ev.\x0a\x09\x09]\x0a\x09\x09whenLeave: [\x0a\x09\x09| ev |\x0a\x09\x09ev := ROMouseLeave new.\x0a\x09\x09element announce: ev.\x0a\x09].",
messageSends: ["svgElement", "shape", "hover:whenLeave:", "new", "position:", "@", "-", "pageX", "x", "origin", "scrollLeft", "asJQuery", "pageY", "y", "scrollTop", "element:", "announce:"],
referencedClasses: ["ROMouseEnter", "RORaphaelCanvas", "ROMouseLeave"]
}),
smalltalk.ROHoverable);


});
