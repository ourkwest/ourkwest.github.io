// Compiled by ClojureScript 0.0-2719 {}
goog.provide('cljstemplate.logging');
goog.require('cljs.core');
cljstemplate.logging.config = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$69,true,cljs.core.constant$keyword$70,true,cljs.core.constant$keyword$71,true,cljs.core.constant$keyword$72,false], null);
cljstemplate.logging.logger = (function logger(log_name){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljstemplate.logging.config,log_name,true))){
return (function (x){
console.log([cljs.core.str("<"),cljs.core.str(cljs.core.name(log_name)),cljs.core.str(">")].join(''),x);

return x;
});
} else {
return cljs.core.identity;
}
});
cljstemplate.logging.change_log = cljstemplate.logging.logger(cljs.core.constant$keyword$71);
cljstemplate.logging.value_store = (function (){var G__16960 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16960) : cljs.core.atom.call(null,G__16960));
})();
cljstemplate.logging.log_when_changes = (function log_when_changes(key,value){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(function (){var G__16963 = cljstemplate.logging.value_store;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16963) : cljs.core.deref.call(null,G__16963));
})().call(null,key))){
return value;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljstemplate.logging.value_store,cljs.core.assoc,key,value);

var G__16964 = [cljs.core.str(key),cljs.core.str(" : "),cljs.core.str(value)].join('');
return (cljstemplate.logging.change_log.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.logging.change_log.cljs$core$IFn$_invoke$arity$1(G__16964) : cljstemplate.logging.change_log.call(null,G__16964));
}
});
