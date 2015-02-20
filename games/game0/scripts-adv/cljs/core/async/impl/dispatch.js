// Compiled by ClojureScript 0.0-2719 {}
goog.provide('cljs.core.async.impl.dispatch');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.dispatch.message_channel = null;
cljs.core.async.impl.dispatch.tasks = cljs.core.async.impl.buffers.ring_buffer((32));
cljs.core.async.impl.dispatch.running_QMARK_ = false;
cljs.core.async.impl.dispatch.queued_QMARK_ = false;
cljs.core.async.impl.dispatch.TASK_BATCH_SIZE = (1024);
cljs.core.async.impl.dispatch.process_messages = (function process_messages(){
cljs.core.async.impl.dispatch.running_QMARK_ = true;

cljs.core.async.impl.dispatch.queued_QMARK_ = false;

var count_38599 = (0);
while(true){
var m_38600 = cljs.core.async.impl.dispatch.tasks.pop();
if((m_38600 == null)){
} else {
(m_38600.cljs$core$IFn$_invoke$arity$0 ? m_38600.cljs$core$IFn$_invoke$arity$0() : m_38600.call(null));

if((count_38599 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE)){
var G__38601 = (count_38599 + (1));
count_38599 = G__38601;
continue;
} else {
}
}
break;
}

cljs.core.async.impl.dispatch.running_QMARK_ = false;

if((cljs.core.async.impl.dispatch.tasks.length > (0))){
return (cljs.core.async.impl.dispatch.queue_dispatcher.cljs$core$IFn$_invoke$arity$0 ? cljs.core.async.impl.dispatch.queue_dispatcher.cljs$core$IFn$_invoke$arity$0() : cljs.core.async.impl.dispatch.queue_dispatcher.call(null));
} else {
return null;
}
});
if(typeof MessageChannel !== 'undefined'){
cljs.core.async.impl.dispatch.message_channel = (new MessageChannel());

cljs.core.async.impl.dispatch.message_channel.port1.onmessage = (function (msg){
return cljs.core.async.impl.dispatch.process_messages();
});
} else {
}
cljs.core.async.impl.dispatch.queue_dispatcher = (function queue_dispatcher(){
if(cljs.core.truth_((function (){var and__3799__auto__ = cljs.core.async.impl.dispatch.queued_QMARK_;
if(and__3799__auto__){
return cljs.core.async.impl.dispatch.running_QMARK_;
} else {
return and__3799__auto__;
}
})())){
return null;
} else {
cljs.core.async.impl.dispatch.queued_QMARK_ = true;

if(typeof MessageChannel !== 'undefined'){
return cljs.core.async.impl.dispatch.message_channel.port2.postMessage((0));
} else {
if(typeof setImmediate !== 'undefined'){
var G__38605 = cljs.core.async.impl.dispatch.process_messages;
return setImmediate(G__38605);
} else {
var G__38606 = cljs.core.async.impl.dispatch.process_messages;
var G__38607 = (0);
return setTimeout(G__38606,G__38607);

}
}
}
});
cljs.core.async.impl.dispatch.run = (function run(f){
cljs.core.async.impl.dispatch.tasks.unbounded_unshift(f);

return cljs.core.async.impl.dispatch.queue_dispatcher();
});
cljs.core.async.impl.dispatch.queue_delay = (function queue_delay(f,delay){
var G__38610 = f;
var G__38611 = delay;
return setTimeout(G__38610,G__38611);
});
