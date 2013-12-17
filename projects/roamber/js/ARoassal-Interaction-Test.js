define("roamber/ARoassal-Interaction-Test", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "roamber/ARoassal-Test"], function(smalltalk,nil,_st){
smalltalk.addPackage('ARoassal-Interaction-Test');
smalltalk.packages["ARoassal-Interaction-Test"].transport = {"type":"amd","amdNamespace":"roamber"};

smalltalk.addClass('ROPopupTest', smalltalk.ROTest, ['text'], 'ARoassal-Interaction-Test');
smalltalk.addMethod(
smalltalk.method({
selector: "test1",
category: 'not yet classified',
fn: function (){
var self=this;
var view,element;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $ROPopup(){return smalltalk.ROPopup||(typeof ROPopup=="undefined"?nil:ROPopup)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
view=_st($ROView())._new();
$ctx1.sendIdx["new"]=1;
element=_st(_st($ROElement())._new())._size_((100));
_st(element).__plus($ROBox());
_st(element).__at($ROPopup());
_st(view)._add_(element);
$2=_st($ROPopup())._popup();
$ctx1.sendIdx["popup"]=1;
$1=_st($2)._isNil();
self._deny_($1);
self._assert_(_st(_st(_st($ROPopup())._popup())._size()).__eq((1)));
return self}, function($ctx1) {$ctx1.fill(self,"test1",{view:view,element:element},smalltalk.ROPopupTest)})},
args: [],
source: "test1\x0a\x09|view element|\x0a\x09view := ROView new.\x0a\x09element := ROElement new size: 100.\x0a\x09element + ROBox.\x0a\x09element @ ROPopup.\x0a\x09\x0a\x09view add: element.\x0a\x09\x0a\x09self deny: ROPopup popup isNil.\x0a\x09self assert: ROPopup popup size = 1.",
messageSends: ["new", "size:", "+", "@", "add:", "deny:", "isNil", "popup", "assert:", "=", "size"],
referencedClasses: ["ROView", "ROElement", "ROBox", "ROPopup"]
}),
smalltalk.ROPopupTest);


});
