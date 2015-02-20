// Compiled by ClojureScript 0.0-2719 {}
goog.provide('cljstemplate.logging');
goog.require('cljs.core');
cljstemplate.logging.config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"core","core",-86019209),true,new cljs.core.Keyword(null,"shape","shape",1190694006),true,new cljs.core.Keyword(null,"changes","changes",1492088),true,new cljs.core.Keyword(null,"levels","levels",-950747887),false], null);
cljstemplate.logging.logger = (function logger(log_name){
if(cljs.core.truth_(cljs.core.get.call(null,cljstemplate.logging.config,log_name,true))){
return (function (x){
console.log([cljs.core.str("<"),cljs.core.str(cljs.core.name.call(null,log_name)),cljs.core.str(">")].join(''),x);

return x;
});
} else {
return cljs.core.identity;
}
});
cljstemplate.logging.change_log = cljstemplate.logging.logger.call(null,new cljs.core.Keyword(null,"changes","changes",1492088));
cljstemplate.logging.value_store = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljstemplate.logging.log_when_changes = (function log_when_changes(key,value){
if(cljs.core._EQ_.call(null,value,cljs.core.deref.call(null,cljstemplate.logging.value_store).call(null,key))){
return value;
} else {
cljs.core.swap_BANG_.call(null,cljstemplate.logging.value_store,cljs.core.assoc,key,value);

return cljstemplate.logging.change_log.call(null,[cljs.core.str(key),cljs.core.str(" : "),cljs.core.str(value)].join(''));
}
});

//# sourceMappingURL=logging.js.map