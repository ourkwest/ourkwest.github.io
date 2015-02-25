// Compiled by ClojureScript 0.0-2719 {}
goog.provide('cljstemplate.levels');
goog.require('cljs.core');
goog.require('cljstemplate.shapeconstance');
goog.require('cljstemplate.constance');
goog.require('cljstemplate.logging');
cljstemplate.levels.log = cljstemplate.logging.logger.call(null,new cljs.core.Keyword(null,"levels","levels",-950747887));
cljstemplate.levels.apply_step = (function apply_step(p__11313,p__11314){
var vec__11317 = p__11313;
var x = cljs.core.nth.call(null,vec__11317,(0),null);
var y = cljs.core.nth.call(null,vec__11317,(1),null);
var rotation = cljs.core.nth.call(null,vec__11317,(2),null);
var vec__11318 = p__11314;
var angle = cljs.core.nth.call(null,vec__11318,(0),null);
var distance = cljs.core.nth.call(null,vec__11318,(1),null);
var new_rotation = (rotation + angle);
var new_x = (x + (distance * Math.sin.call(null,new_rotation)));
var new_y = (y + (distance * Math.cos.call(null,new_rotation)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_x,new_y,new_rotation], null);
});
/**
* @param {...*} var_args
*/
cljstemplate.levels.path = (function() { 
var path__delegate = function (location,steps){
while(true){
var temp__4124__auto__ = cljs.core.first.call(null,steps);
if(cljs.core.truth_(temp__4124__auto__)){
var step = temp__4124__auto__;
var G__11319 = cljstemplate.levels.apply_step.call(null,location,step);
var G__11320 = cljs.core.rest.call(null,steps);
location = G__11319;
steps = G__11320;
continue;
} else {
return location;
}
break;
}
};
var path = function (location,var_args){
var steps = null;
if (arguments.length > 1) {
var G__11321__i = 0, G__11321__a = new Array(arguments.length -  1);
while (G__11321__i < G__11321__a.length) {G__11321__a[G__11321__i] = arguments[G__11321__i + 1]; ++G__11321__i;}
  steps = new cljs.core.IndexedSeq(G__11321__a,0);
} 
return path__delegate.call(this,location,steps);};
path.cljs$lang$maxFixedArity = 1;
path.cljs$lang$applyTo = (function (arglist__11322){
var location = cljs.core.first(arglist__11322);
var steps = cljs.core.rest(arglist__11322);
return path__delegate(location,steps);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;
cljstemplate.levels.pads = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.shapeconstance.tri_pad,(4),cljstemplate.shapeconstance.square_pad,(6),cljstemplate.shapeconstance.hex_pad,(8),cljstemplate.shapeconstance.oct_pad], null);
cljstemplate.levels.angles = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.constance.TAU_3RD,(4),cljstemplate.constance.TAU_4TH,(6),cljstemplate.constance.TAU_6TH,(8),cljstemplate.constance.TAU_8TH], null);
cljstemplate.levels.mk_shapes = (function mk_shapes(shapes,p__11324,p__11325){
var vec__11332 = p__11324;
var x = cljs.core.nth.call(null,vec__11332,(0),null);
var y = cljs.core.nth.call(null,vec__11332,(1),null);
var r = cljs.core.nth.call(null,vec__11332,(2),null);
var vec__11333 = p__11325;
var n = cljs.core.nth.call(null,vec__11333,(0),null);
var neighbours = cljs.core.nth.call(null,vec__11333,(1),null);
var rest = cljs.core.nthnext.call(null,vec__11333,(2));
var my_pad = cljstemplate.levels.pads.call(null,n);
var new_shape = ((cljs.core._EQ_.call(null,(0),n))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n","n",562130025),n,new cljs.core.Keyword(null,"location","location",1815599388),cljstemplate.levels.path.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,r], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),my_pad], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljstemplate.constance.PI,(0)], null))], null)], null));
var my_angle = cljstemplate.levels.angles.call(null,n);
var neighbours_pairs = cljs.core.partition.call(null,(2),neighbours);
var neighbour_count = cljs.core.count.call(null,neighbours_pairs);
var neighbour_angles = cljs.core.iterate.call(null,((function (my_pad,new_shape,my_angle,neighbours_pairs,neighbour_count,vec__11332,x,y,r,vec__11333,n,neighbours,rest){
return (function (p1__11323_SHARP_){
return (p1__11323_SHARP_ + my_angle);
});})(my_pad,new_shape,my_angle,neighbours_pairs,neighbour_count,vec__11332,x,y,r,vec__11333,n,neighbours,rest))
,(cljstemplate.constance.PI + my_angle));
var neighbour_shapes = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4567__auto__ = ((function (my_pad,new_shape,my_angle,neighbours_pairs,neighbour_count,neighbour_angles,vec__11332,x,y,r,vec__11333,n,neighbours,rest){
return (function iter__11334(s__11335){
return (new cljs.core.LazySeq(null,((function (my_pad,new_shape,my_angle,neighbours_pairs,neighbour_count,neighbour_angles,vec__11332,x,y,r,vec__11333,n,neighbours,rest){
return (function (){
var s__11335__$1 = s__11335;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11335__$1);
if(temp__4126__auto__){
var s__11335__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11335__$2)){
var c__4565__auto__ = cljs.core.chunk_first.call(null,s__11335__$2);
var size__4566__auto__ = cljs.core.count.call(null,c__4565__auto__);
var b__11337 = cljs.core.chunk_buffer.call(null,size__4566__auto__);
if((function (){var i__11336 = (0);
while(true){
if((i__11336 < size__4566__auto__)){
var i = cljs.core._nth.call(null,c__4565__auto__,i__11336);
cljs.core.chunk_append.call(null,b__11337,mk_shapes.call(null,cljs.core.PersistentVector.EMPTY,cljstemplate.levels.path.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,r], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),my_pad], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,neighbour_angles,i),my_pad], null)),cljs.core.nth.call(null,neighbours_pairs,i)));

var G__11338 = (i__11336 + (1));
i__11336 = G__11338;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11337),iter__11334.call(null,cljs.core.chunk_rest.call(null,s__11335__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11337),null);
}
} else {
var i = cljs.core.first.call(null,s__11335__$2);
return cljs.core.cons.call(null,mk_shapes.call(null,cljs.core.PersistentVector.EMPTY,cljstemplate.levels.path.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,r], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),my_pad], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,neighbour_angles,i),my_pad], null)),cljs.core.nth.call(null,neighbours_pairs,i)),iter__11334.call(null,cljs.core.rest.call(null,s__11335__$2)));
}
} else {
return null;
}
break;
}
});})(my_pad,new_shape,my_angle,neighbours_pairs,neighbour_count,neighbour_angles,vec__11332,x,y,r,vec__11333,n,neighbours,rest))
,null,null));
});})(my_pad,new_shape,my_angle,neighbours_pairs,neighbour_count,neighbour_angles,vec__11332,x,y,r,vec__11333,n,neighbours,rest))
;
return iter__4567__auto__.call(null,cljs.core.range.call(null,neighbour_count));
})());
var more_shapes = ((rest)?mk_shapes.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,r], null),rest):cljs.core.PersistentVector.EMPTY);
return cljs.core.vec.call(null,cljs.core.concat.call(null,shapes,new_shape,neighbour_shapes,more_shapes));
});
/**
* Round a double to the given precision (number of significant digits)
*/
cljstemplate.levels.round2 = (function round2(precision,d){
var factor = Math.pow.call(null,(10),precision);
return (Math.round.call(null,(d * factor)) / factor);
});
cljstemplate.levels.round_location = (function round_location(p__11339){
var vec__11341 = p__11339;
var x = cljs.core.nth.call(null,vec__11341,(0),null);
var y = cljs.core.nth.call(null,vec__11341,(1),null);
var r = cljs.core.nth.call(null,vec__11341,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljstemplate.levels.round2.call(null,(2),x),cljstemplate.levels.round2.call(null,(2),y),cljstemplate.levels.round2.call(null,(4),r)], null);
});
cljstemplate.levels.round_shapes = (function round_shapes(shapes){
return cljs.core.mapv.call(null,(function (p1__11342_SHARP_){
return cljs.core.update_in.call(null,p1__11342_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388)], null),cljstemplate.levels.round_location);
}),shapes);
});
cljstemplate.levels.translate_each = (function translate_each(by_x,by_y,shape){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),(0)], null),cljs.core._PLUS_,by_x),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),(1)], null),cljs.core._PLUS_,by_y);
});
cljstemplate.levels.translate = (function translate(shapes,by_x,by_y){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljstemplate.levels.translate_each,by_x,by_y),shapes);
});
cljstemplate.levels.padding = cljstemplate.levels.round2.call(null,(2),(1.1 * cljstemplate.shapeconstance.oct_radius));
cljstemplate.levels.centre = (function centre(shapes){
var xs = cljs.core.map.call(null,cljs.core.first,cljs.core.map.call(null,new cljs.core.Keyword(null,"location","location",1815599388),shapes));
var ys = cljs.core.map.call(null,cljs.core.second,cljs.core.map.call(null,new cljs.core.Keyword(null,"location","location",1815599388),shapes));
var min_x = cljs.core.reduce.call(null,cljs.core.min,xs);
var min_y = cljs.core.reduce.call(null,cljs.core.min,ys);
var max_x = cljs.core.reduce.call(null,cljs.core.max,xs);
var max_y = cljs.core.reduce.call(null,cljs.core.max,ys);
var new_shapes = cljstemplate.levels.translate.call(null,shapes,(cljstemplate.levels.padding - min_x),(cljstemplate.levels.padding - min_y));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_shapes,(((2) * cljstemplate.levels.padding) + (max_x - min_x)),(((2) * cljstemplate.levels.padding) + (max_y - min_y))], null);
});
cljstemplate.levels.add_shape_wires = (function add_shape_wires(channel_count,shape){
return cljs.core.assoc.call(null,shape,new cljs.core.Keyword(null,"wiring","wiring",-1202756092),cljs.core.vec.call(null,(function (){var iter__4567__auto__ = (function iter__11363(s__11364){
return (new cljs.core.LazySeq(null,(function (){
var s__11364__$1 = s__11364;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11364__$1);
if(temp__4126__auto__){
var s__11364__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11364__$2)){
var c__4565__auto__ = cljs.core.chunk_first.call(null,s__11364__$2);
var size__4566__auto__ = cljs.core.count.call(null,c__4565__auto__);
var b__11366 = cljs.core.chunk_buffer.call(null,size__4566__auto__);
if((function (){var i__11365 = (0);
while(true){
if((i__11365 < size__4566__auto__)){
var i = cljs.core._nth.call(null,c__4565__auto__,i__11365);
cljs.core.chunk_append.call(null,b__11366,cljs.core.vec.call(null,(function (){var iter__4567__auto__ = ((function (i__11365,i,c__4565__auto__,size__4566__auto__,b__11366,s__11364__$2,temp__4126__auto__){
return (function iter__11375(s__11376){
return (new cljs.core.LazySeq(null,((function (i__11365,i,c__4565__auto__,size__4566__auto__,b__11366,s__11364__$2,temp__4126__auto__){
return (function (){
var s__11376__$1 = s__11376;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__11376__$1);
if(temp__4126__auto____$1){
var s__11376__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11376__$2)){
var c__4565__auto____$1 = cljs.core.chunk_first.call(null,s__11376__$2);
var size__4566__auto____$1 = cljs.core.count.call(null,c__4565__auto____$1);
var b__11378 = cljs.core.chunk_buffer.call(null,size__4566__auto____$1);
if((function (){var i__11377 = (0);
while(true){
if((i__11377 < size__4566__auto____$1)){
var j = cljs.core._nth.call(null,c__4565__auto____$1,i__11377);
cljs.core.chunk_append.call(null,b__11378,(function (){var a = cljs.core.rand_int.call(null,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(shape));
var b = cljs.core.rand_int.call(null,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core._EQ_.call(null,a,b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod.call(null,(a + (1)),new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(shape)),b], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
})());

var G__11383 = (i__11377 + (1));
i__11377 = G__11383;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11378),iter__11375.call(null,cljs.core.chunk_rest.call(null,s__11376__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11378),null);
}
} else {
var j = cljs.core.first.call(null,s__11376__$2);
return cljs.core.cons.call(null,(function (){var a = cljs.core.rand_int.call(null,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(shape));
var b = cljs.core.rand_int.call(null,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core._EQ_.call(null,a,b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod.call(null,(a + (1)),new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(shape)),b], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
})(),iter__11375.call(null,cljs.core.rest.call(null,s__11376__$2)));
}
} else {
return null;
}
break;
}
});})(i__11365,i,c__4565__auto__,size__4566__auto__,b__11366,s__11364__$2,temp__4126__auto__))
,null,null));
});})(i__11365,i,c__4565__auto__,size__4566__auto__,b__11366,s__11364__$2,temp__4126__auto__))
;
return iter__4567__auto__.call(null,cljs.core.range.call(null,cljs.core.rand_int.call(null,(2))));
})()));

var G__11384 = (i__11365 + (1));
i__11365 = G__11384;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11366),iter__11363.call(null,cljs.core.chunk_rest.call(null,s__11364__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11366),null);
}
} else {
var i = cljs.core.first.call(null,s__11364__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,(function (){var iter__4567__auto__ = ((function (i,s__11364__$2,temp__4126__auto__){
return (function iter__11379(s__11380){
return (new cljs.core.LazySeq(null,((function (i,s__11364__$2,temp__4126__auto__){
return (function (){
var s__11380__$1 = s__11380;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__11380__$1);
if(temp__4126__auto____$1){
var s__11380__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11380__$2)){
var c__4565__auto__ = cljs.core.chunk_first.call(null,s__11380__$2);
var size__4566__auto__ = cljs.core.count.call(null,c__4565__auto__);
var b__11382 = cljs.core.chunk_buffer.call(null,size__4566__auto__);
if((function (){var i__11381 = (0);
while(true){
if((i__11381 < size__4566__auto__)){
var j = cljs.core._nth.call(null,c__4565__auto__,i__11381);
cljs.core.chunk_append.call(null,b__11382,(function (){var a = cljs.core.rand_int.call(null,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(shape));
var b = cljs.core.rand_int.call(null,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core._EQ_.call(null,a,b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod.call(null,(a + (1)),new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(shape)),b], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
})());

var G__11385 = (i__11381 + (1));
i__11381 = G__11385;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11382),iter__11379.call(null,cljs.core.chunk_rest.call(null,s__11380__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11382),null);
}
} else {
var j = cljs.core.first.call(null,s__11380__$2);
return cljs.core.cons.call(null,(function (){var a = cljs.core.rand_int.call(null,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(shape));
var b = cljs.core.rand_int.call(null,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core._EQ_.call(null,a,b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod.call(null,(a + (1)),new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(shape)),b], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
})(),iter__11379.call(null,cljs.core.rest.call(null,s__11380__$2)));
}
} else {
return null;
}
break;
}
});})(i,s__11364__$2,temp__4126__auto__))
,null,null));
});})(i,s__11364__$2,temp__4126__auto__))
;
return iter__4567__auto__.call(null,cljs.core.range.call(null,cljs.core.rand_int.call(null,(2))));
})()),iter__11363.call(null,cljs.core.rest.call(null,s__11364__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4567__auto__.call(null,cljs.core.range.call(null,channel_count));
})()));
});
cljstemplate.levels.add_blank_wires = (function add_blank_wires(channel_count,shape){
return cljs.core.assoc.call(null,shape,new cljs.core.Keyword(null,"wiring","wiring",-1202756092),cljs.core.vec.call(null,(function (){var iter__4567__auto__ = (function iter__11390(s__11391){
return (new cljs.core.LazySeq(null,(function (){
var s__11391__$1 = s__11391;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11391__$1);
if(temp__4126__auto__){
var s__11391__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11391__$2)){
var c__4565__auto__ = cljs.core.chunk_first.call(null,s__11391__$2);
var size__4566__auto__ = cljs.core.count.call(null,c__4565__auto__);
var b__11393 = cljs.core.chunk_buffer.call(null,size__4566__auto__);
if((function (){var i__11392 = (0);
while(true){
if((i__11392 < size__4566__auto__)){
var i = cljs.core._nth.call(null,c__4565__auto__,i__11392);
cljs.core.chunk_append.call(null,b__11393,cljs.core.PersistentVector.EMPTY);

var G__11394 = (i__11392 + (1));
i__11392 = G__11394;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11393),iter__11390.call(null,cljs.core.chunk_rest.call(null,s__11391__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11393),null);
}
} else {
var i = cljs.core.first.call(null,s__11391__$2);
return cljs.core.cons.call(null,cljs.core.PersistentVector.EMPTY,iter__11390.call(null,cljs.core.rest.call(null,s__11391__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4567__auto__.call(null,cljs.core.range.call(null,channel_count));
})()));
});
cljstemplate.levels.add_wires = (function add_wires(shapes,channel_count){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljstemplate.levels.add_shape_wires,channel_count),shapes);
});
cljstemplate.levels.blank_wires = (function blank_wires(shapes,channel_count){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljstemplate.levels.add_blank_wires,channel_count),shapes);
});
cljstemplate.levels.endpoint_wiring = (function endpoint_wiring(channel_count,direction,shape){
return cljs.core.assoc.call(null,shape,new cljs.core.Keyword(null,"wiring","wiring",-1202756092),cljs.core.vec.call(null,(function (){var iter__4567__auto__ = (function iter__11415(s__11416){
return (new cljs.core.LazySeq(null,(function (){
var s__11416__$1 = s__11416;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11416__$1);
if(temp__4126__auto__){
var s__11416__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11416__$2)){
var c__4565__auto__ = cljs.core.chunk_first.call(null,s__11416__$2);
var size__4566__auto__ = cljs.core.count.call(null,c__4565__auto__);
var b__11418 = cljs.core.chunk_buffer.call(null,size__4566__auto__);
if((function (){var i__11417 = (0);
while(true){
if((i__11417 < size__4566__auto__)){
var i = cljs.core._nth.call(null,c__4565__auto__,i__11417);
cljs.core.chunk_append.call(null,b__11418,cljs.core.vec.call(null,(function (){var iter__4567__auto__ = ((function (i__11417,i,c__4565__auto__,size__4566__auto__,b__11418,s__11416__$2,temp__4126__auto__){
return (function iter__11427(s__11428){
return (new cljs.core.LazySeq(null,((function (i__11417,i,c__4565__auto__,size__4566__auto__,b__11418,s__11416__$2,temp__4126__auto__){
return (function (){
var s__11428__$1 = s__11428;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__11428__$1);
if(temp__4126__auto____$1){
var s__11428__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11428__$2)){
var c__4565__auto____$1 = cljs.core.chunk_first.call(null,s__11428__$2);
var size__4566__auto____$1 = cljs.core.count.call(null,c__4565__auto____$1);
var b__11430 = cljs.core.chunk_buffer.call(null,size__4566__auto____$1);
if((function (){var i__11429 = (0);
while(true){
if((i__11429 < size__4566__auto____$1)){
var j = cljs.core._nth.call(null,c__4565__auto____$1,i__11429);
cljs.core.chunk_append.call(null,b__11430,((cljs.core._EQ_.call(null,direction,(1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(9)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),j], null)));

var G__11435 = (i__11429 + (1));
i__11429 = G__11435;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11430),iter__11427.call(null,cljs.core.chunk_rest.call(null,s__11428__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11430),null);
}
} else {
var j = cljs.core.first.call(null,s__11428__$2);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,direction,(1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(9)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),j], null)),iter__11427.call(null,cljs.core.rest.call(null,s__11428__$2)));
}
} else {
return null;
}
break;
}
});})(i__11417,i,c__4565__auto__,size__4566__auto__,b__11418,s__11416__$2,temp__4126__auto__))
,null,null));
});})(i__11417,i,c__4565__auto__,size__4566__auto__,b__11418,s__11416__$2,temp__4126__auto__))
;
return iter__4567__auto__.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(shape)));
})()));

var G__11436 = (i__11417 + (1));
i__11417 = G__11436;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11418),iter__11415.call(null,cljs.core.chunk_rest.call(null,s__11416__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11418),null);
}
} else {
var i = cljs.core.first.call(null,s__11416__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,(function (){var iter__4567__auto__ = ((function (i,s__11416__$2,temp__4126__auto__){
return (function iter__11431(s__11432){
return (new cljs.core.LazySeq(null,((function (i,s__11416__$2,temp__4126__auto__){
return (function (){
var s__11432__$1 = s__11432;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__11432__$1);
if(temp__4126__auto____$1){
var s__11432__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11432__$2)){
var c__4565__auto__ = cljs.core.chunk_first.call(null,s__11432__$2);
var size__4566__auto__ = cljs.core.count.call(null,c__4565__auto__);
var b__11434 = cljs.core.chunk_buffer.call(null,size__4566__auto__);
if((function (){var i__11433 = (0);
while(true){
if((i__11433 < size__4566__auto__)){
var j = cljs.core._nth.call(null,c__4565__auto__,i__11433);
cljs.core.chunk_append.call(null,b__11434,((cljs.core._EQ_.call(null,direction,(1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(9)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),j], null)));

var G__11437 = (i__11433 + (1));
i__11433 = G__11437;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11434),iter__11431.call(null,cljs.core.chunk_rest.call(null,s__11432__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11434),null);
}
} else {
var j = cljs.core.first.call(null,s__11432__$2);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,direction,(1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(9)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),j], null)),iter__11431.call(null,cljs.core.rest.call(null,s__11432__$2)));
}
} else {
return null;
}
break;
}
});})(i,s__11416__$2,temp__4126__auto__))
,null,null));
});})(i,s__11416__$2,temp__4126__auto__))
;
return iter__4567__auto__.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(shape)));
})()),iter__11415.call(null,cljs.core.rest.call(null,s__11416__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4567__auto__.call(null,cljs.core.range.call(null,channel_count));
})()));
});
cljstemplate.levels.add_endpoint_wiring = (function add_endpoint_wiring(shapes,shape_id,channel_count,direction){
return cljs.core.update_in.call(null,shapes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id], null),cljs.core.partial.call(null,cljstemplate.levels.endpoint_wiring,channel_count,direction));
});
cljstemplate.levels.get_sides = (function get_sides(shape){
var map__11445 = shape;
var map__11445__$1 = ((cljs.core.seq_QMARK_.call(null,map__11445))?cljs.core.apply.call(null,cljs.core.hash_map,map__11445):map__11445);
var vec__11446 = cljs.core.get.call(null,map__11445__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var x = cljs.core.nth.call(null,vec__11446,(0),null);
var y = cljs.core.nth.call(null,vec__11446,(1),null);
var r = cljs.core.nth.call(null,vec__11446,(2),null);
var n = cljs.core.get.call(null,map__11445__$1,new cljs.core.Keyword(null,"n","n",562130025));
var shape_angle = cljstemplate.levels.angles.call(null,n);
var radius = cljstemplate.levels.pads.call(null,n);
var iter__4567__auto__ = ((function (map__11445,map__11445__$1,vec__11446,x,y,r,n,shape_angle,radius){
return (function iter__11447(s__11448){
return (new cljs.core.LazySeq(null,((function (map__11445,map__11445__$1,vec__11446,x,y,r,n,shape_angle,radius){
return (function (){
var s__11448__$1 = s__11448;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11448__$1);
if(temp__4126__auto__){
var s__11448__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11448__$2)){
var c__4565__auto__ = cljs.core.chunk_first.call(null,s__11448__$2);
var size__4566__auto__ = cljs.core.count.call(null,c__4565__auto__);
var b__11450 = cljs.core.chunk_buffer.call(null,size__4566__auto__);
if((function (){var i__11449 = (0);
while(true){
if((i__11449 < size__4566__auto__)){
var side_angle = cljs.core._nth.call(null,c__4565__auto__,i__11449);
cljs.core.chunk_append.call(null,b__11450,(function (){var side_x = (x + (radius * Math.sin.call(null,side_angle)));
var side_y = (y + (radius * Math.cos.call(null,side_angle)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [side_x,side_y,shape], null);
})());

var G__11451 = (i__11449 + (1));
i__11449 = G__11451;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11450),iter__11447.call(null,cljs.core.chunk_rest.call(null,s__11448__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11450),null);
}
} else {
var side_angle = cljs.core.first.call(null,s__11448__$2);
return cljs.core.cons.call(null,(function (){var side_x = (x + (radius * Math.sin.call(null,side_angle)));
var side_y = (y + (radius * Math.cos.call(null,side_angle)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [side_x,side_y,shape], null);
})(),iter__11447.call(null,cljs.core.rest.call(null,s__11448__$2)));
}
} else {
return null;
}
break;
}
});})(map__11445,map__11445__$1,vec__11446,x,y,r,n,shape_angle,radius))
,null,null));
});})(map__11445,map__11445__$1,vec__11446,x,y,r,n,shape_angle,radius))
;
return iter__4567__auto__.call(null,cljs.core.take.call(null,n,cljs.core.iterate.call(null,((function (iter__4567__auto__,map__11445,map__11445__$1,vec__11446,x,y,r,n,shape_angle,radius){
return (function (p1__11438_SHARP_){
return (p1__11438_SHARP_ + shape_angle);
});})(iter__4567__auto__,map__11445,map__11445__$1,vec__11446,x,y,r,n,shape_angle,radius))
,r)));
});
cljstemplate.levels.close_enough = (function close_enough(p__11452,p__11453){
var vec__11456 = p__11452;
var x1 = cljs.core.nth.call(null,vec__11456,(0),null);
var y1 = cljs.core.nth.call(null,vec__11456,(1),null);
var vec__11457 = p__11453;
var x2 = cljs.core.nth.call(null,vec__11457,(0),null);
var y2 = cljs.core.nth.call(null,vec__11457,(1),null);
var x_diff = (x2 - x1);
var y_diff = (y2 - y1);
var h2 = ((x_diff * x_diff) + (y_diff * y_diff));
var limit = (cljstemplate.shapeconstance.shape_side_length / (3));
var l2 = (limit * limit);
return (h2 < l2);
});
cljstemplate.levels.find_neighbours = (function find_neighbours(shapes,p__11458){
var vec__11464 = p__11458;
var x = cljs.core.nth.call(null,vec__11464,(0),null);
var y = cljs.core.nth.call(null,vec__11464,(1),null);
var shape = cljs.core.nth.call(null,vec__11464,(2),null);
return cljs.core.some.call(null,cljs.core.identity,(function (){var iter__4567__auto__ = ((function (vec__11464,x,y,shape){
return (function iter__11465(s__11466){
return (new cljs.core.LazySeq(null,((function (vec__11464,x,y,shape){
return (function (){
var s__11466__$1 = s__11466;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11466__$1);
if(temp__4126__auto__){
var s__11466__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11466__$2)){
var c__4565__auto__ = cljs.core.chunk_first.call(null,s__11466__$2);
var size__4566__auto__ = cljs.core.count.call(null,c__4565__auto__);
var b__11468 = cljs.core.chunk_buffer.call(null,size__4566__auto__);
if((function (){var i__11467 = (0);
while(true){
if((i__11467 < size__4566__auto__)){
var i = cljs.core._nth.call(null,c__4565__auto__,i__11467);
cljs.core.chunk_append.call(null,b__11468,((cljs.core._EQ_.call(null,shape,cljs.core.nth.call(null,shapes,i)))?null:(cljs.core.truth_(cljs.core.some.call(null,cljs.core.partial.call(null,cljstemplate.levels.close_enough,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),cljstemplate.levels.get_sides.call(null,cljs.core.nth.call(null,shapes,i))))?i:null)));

var G__11469 = (i__11467 + (1));
i__11467 = G__11469;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11468),iter__11465.call(null,cljs.core.chunk_rest.call(null,s__11466__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11468),null);
}
} else {
var i = cljs.core.first.call(null,s__11466__$2);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,shape,cljs.core.nth.call(null,shapes,i)))?null:(cljs.core.truth_(cljs.core.some.call(null,cljs.core.partial.call(null,cljstemplate.levels.close_enough,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),cljstemplate.levels.get_sides.call(null,cljs.core.nth.call(null,shapes,i))))?i:null)),iter__11465.call(null,cljs.core.rest.call(null,s__11466__$2)));
}
} else {
return null;
}
break;
}
});})(vec__11464,x,y,shape))
,null,null));
});})(vec__11464,x,y,shape))
;
return iter__4567__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,shapes)));
})());
});
cljstemplate.levels.add_neighbours = (function add_neighbours(shapes){
return cljs.core.mapv.call(null,(function (p1__11470_SHARP_){
return cljs.core.assoc.call(null,p1__11470_SHARP_,new cljs.core.Keyword(null,"neighbours","neighbours",1596930053),cljs.core.mapv.call(null,cljs.core.partial.call(null,cljstemplate.levels.find_neighbours,shapes),cljstemplate.levels.get_sides.call(null,p1__11470_SHARP_)));
}),shapes);
});
cljstemplate.levels.wire = (function wire(level,shape_id,wiring){
return cljs.core.assoc_in.call(null,level,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shapes","shapes",1897594879),shape_id,new cljs.core.Keyword(null,"wiring","wiring",-1202756092)], null),wiring);
});
cljstemplate.levels.shuffle = (function shuffle(shapes){
return cljs.core.mapv.call(null,(function (p1__11471_SHARP_){
return cljs.core.merge.call(null,p1__11471_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.rand_int.call(null,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(p1__11471_SHARP_))], null)], null));
}),shapes);
});
cljstemplate.levels.un_shuffle = (function un_shuffle(shapes){
return cljs.core.mapv.call(null,(function (p1__11472_SHARP_){
return cljs.core.merge.call(null,p1__11472_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),(0)], null)], null));
}),shapes);
});
cljstemplate.levels.shuffle_shapes = (function shuffle_shapes(level){
return cljs.core.update.call(null,level,new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljstemplate.levels.shuffle);
});
cljstemplate.levels.mk_level = (function mk_level(start_location,data,p__11473,colours,channels){
var vec__11476 = p__11473;
var start_index = cljs.core.nth.call(null,vec__11476,(0),null);
var end_index = cljs.core.nth.call(null,vec__11476,(1),null);
var shapes0 = cljstemplate.levels.mk_shapes.call(null,cljs.core.PersistentVector.EMPTY,start_location,data);
var shapes1 = cljstemplate.levels.round_shapes.call(null,shapes0);
var vec__11477 = cljstemplate.levels.centre.call(null,shapes1);
var shapes2 = cljs.core.nth.call(null,vec__11477,(0),null);
var width = cljs.core.nth.call(null,vec__11477,(1),null);
var height = cljs.core.nth.call(null,vec__11477,(2),null);
var start = cljs.core.repeat.call(null,cljs.core.count.call(null,channels),start_index);
var end = cljs.core.repeat.call(null,cljs.core.count.call(null,channels),end_index);
var shapes25 = cljstemplate.levels.blank_wires.call(null,shapes2,cljs.core.count.call(null,channels));
var shapes3 = cljstemplate.levels.add_endpoint_wiring.call(null,shapes25,start_index,cljs.core.count.call(null,channels),(0));
var shapes4 = cljstemplate.levels.add_endpoint_wiring.call(null,shapes3,end_index,cljs.core.count.call(null,channels),(1));
var shapes5 = cljstemplate.levels.add_neighbours.call(null,shapes4);
var shapes6 = cljstemplate.levels.un_shuffle.call(null,shapes5);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"shapes","shapes",1897594879),shapes6,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"channels","channels",1132759174),channels,new cljs.core.Keyword(null,"colours","colours",659341642),colours,new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"end","end",-268185958),end], null);
});
cljstemplate.levels.add_msgs = (function add_msgs(level,start_msg,end_msg){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,level,new cljs.core.Keyword(null,"start-msg","start-msg",-815546523),start_msg),new cljs.core.Keyword(null,"end-msg","end-msg",-2016422505),end_msg);
});
cljstemplate.levels.add_distance = (function add_distance(distance,ends,p__11478){
var map__11480 = p__11478;
var map__11480__$1 = ((cljs.core.seq_QMARK_.call(null,map__11480))?cljs.core.apply.call(null,cljs.core.hash_map,map__11480):map__11480);
var shape = map__11480__$1;
var dte = cljs.core.get.call(null,map__11480__$1,new cljs.core.Keyword(null,"temp-dte","temp-dte",1964905641));
var neighbours = cljs.core.get.call(null,map__11480__$1,new cljs.core.Keyword(null,"neighbours","neighbours",1596930053));
if(cljs.core.truth_(cljs.core.some.call(null,ends,neighbours))){
return cljs.core.assoc.call(null,shape,new cljs.core.Keyword(null,"temp-dte","temp-dte",1964905641),(function (){var x__4135__auto__ = (function (){var or__3811__auto__ = dte;
if(cljs.core.truth_(or__3811__auto__)){
return or__3811__auto__;
} else {
return (1000000);
}
})();
var y__4136__auto__ = distance;
return ((x__4135__auto__ < y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
})());
} else {
return shape;
}
});
cljstemplate.levels.has_distance = (function has_distance(distance,ends,p__11481,id){
var map__11483 = p__11481;
var map__11483__$1 = ((cljs.core.seq_QMARK_.call(null,map__11483))?cljs.core.apply.call(null,cljs.core.hash_map,map__11483):map__11483);
var dte = cljs.core.get.call(null,map__11483__$1,new cljs.core.Keyword(null,"temp-dte","temp-dte",1964905641));
var neighbours = cljs.core.get.call(null,map__11483__$1,new cljs.core.Keyword(null,"neighbours","neighbours",1596930053));
if(cljs.core.truth_((function (){var and__3799__auto__ = cljs.core.some.call(null,ends,neighbours);
if(cljs.core.truth_(and__3799__auto__)){
return cljs.core._EQ_.call(null,distance,dte);
} else {
return and__3799__auto__;
}
})())){
return id;
} else {
return null;
}
});
cljstemplate.levels.add_distance_to_end = (function add_distance_to_end(shapes,distance,ends){
while(true){
var new_shapes = cljs.core.mapv.call(null,cljs.core.partial.call(null,cljstemplate.levels.add_distance,distance,ends),shapes);
var new_ends = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.partial.call(null,cljstemplate.levels.has_distance,distance,ends),new_shapes,cljs.core.range.call(null))));
var new_distance = (distance + (1));
if((cljs.core.seq.call(null,ends)) && ((distance < (20)))){
var G__11484 = new_shapes;
var G__11485 = new_distance;
var G__11486 = new_ends;
shapes = G__11484;
distance = G__11485;
ends = G__11486;
continue;
} else {
return new_shapes;
}
break;
}
});
cljstemplate.levels.index_of = (function index_of(s,v){
var idx = (0);
var items = s;
while(true){
if(cljs.core.empty_QMARK_.call(null,items)){
return null;
} else {
if(cljs.core._EQ_.call(null,v,cljs.core.first.call(null,items))){
return idx;
} else {
var G__11487 = (idx + (1));
var G__11488 = cljs.core.rest.call(null,items);
idx = G__11487;
items = G__11488;
continue;

}
}
break;
}
});
cljstemplate.levels.add_path_to_end = (function add_path_to_end(here_id,from_shape_id,end_id,travelled,shapes,channel_id){
while(true){
if(cljs.core._EQ_.call(null,here_id,end_id)){
return shapes;
} else {
var shape = shapes.call(null,here_id);
var neighbour_ids = new cljs.core.Keyword(null,"neighbours","neighbours",1596930053).cljs$core$IFn$_invoke$arity$1(shape);
var available_ids = cljs.core.filter.call(null,cljs.core.identity,cljs.core.filter.call(null,((function (here_id,from_shape_id,end_id,travelled,shapes,channel_id,shape,neighbour_ids){
return (function (p1__11489_SHARP_){
return cljs.core.not_EQ_.call(null,from_shape_id,p1__11489_SHARP_);
});})(here_id,from_shape_id,end_id,travelled,shapes,channel_id,shape,neighbour_ids))
,neighbour_ids));
var min_dte = cljs.core.reduce.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"temp-dte","temp-dte",1964905641),shapes),available_ids));
var neighbour_id = (((min_dte < travelled))?cljs.core.rand_nth.call(null,cljs.core.filter.call(null,((function (here_id,from_shape_id,end_id,travelled,shapes,channel_id,shape,neighbour_ids,available_ids,min_dte){
return (function (p1__11490_SHARP_){
return cljs.core._EQ_.call(null,min_dte,new cljs.core.Keyword(null,"temp-dte","temp-dte",1964905641).cljs$core$IFn$_invoke$arity$1(shapes.call(null,p1__11490_SHARP_)));
});})(here_id,from_shape_id,end_id,travelled,shapes,channel_id,shape,neighbour_ids,available_ids,min_dte))
,available_ids)):cljs.core.rand_nth.call(null,available_ids));
var wire_to = cljstemplate.levels.index_of.call(null,neighbour_ids,neighbour_id);
var wire_from = cljstemplate.levels.index_of.call(null,neighbour_ids,from_shape_id);
var wire = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wire_from,wire_to], null);
var new_shapes = cljs.core.update_in.call(null,shapes,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [here_id,new cljs.core.Keyword(null,"wiring","wiring",-1202756092),channel_id], null),cljs.core.conj,wire);
var G__11491 = neighbour_id;
var G__11492 = here_id;
var G__11493 = end_id;
var G__11494 = (travelled + (1));
var G__11495 = new_shapes;
var G__11496 = channel_id;
here_id = G__11491;
from_shape_id = G__11492;
end_id = G__11493;
travelled = G__11494;
shapes = G__11495;
channel_id = G__11496;
continue;
}
break;
}
});
cljstemplate.levels.merge_spam = (function merge_spam(shape,p__11497){
var vec__11499 = p__11497;
var channel = cljs.core.nth.call(null,vec__11499,(0),null);
var from = cljs.core.nth.call(null,vec__11499,(1),null);
var onto = cljs.core.nth.call(null,vec__11499,(2),null);
return cljs.core.update_in.call(null,shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wiring","wiring",-1202756092),channel], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,onto], null));
});
cljstemplate.levels.mk_filter = (function mk_filter(collection){
return (function (p__11502){
var vec__11503 = p__11502;
var a = cljs.core.nth.call(null,vec__11503,(0),null);
var b = cljs.core.nth.call(null,vec__11503,(1),null);
return cljs.core.not.call(null,(function (){var and__3799__auto__ = (a < b);
if(and__3799__auto__){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null)], true),collection);
} else {
return and__3799__auto__;
}
})());
});
});
cljstemplate.levels.de_dupe_channel_spam = (function de_dupe_channel_spam(channel_wiring){
return cljs.core.filterv.call(null,cljstemplate.levels.mk_filter.call(null,channel_wiring),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,channel_wiring)));
});
cljstemplate.levels.de_dupe_spam = (function de_dupe_spam(shape){
return cljs.core.update_in.call(null,shape,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wiring","wiring",-1202756092)], null),(function (p1__11504_SHARP_){
return cljs.core.mapv.call(null,cljstemplate.levels.de_dupe_channel_spam,p1__11504_SHARP_);
}));
});
cljstemplate.levels.spam_each = (function spam_each(p__11505){
var map__11511 = p__11505;
var map__11511__$1 = ((cljs.core.seq_QMARK_.call(null,map__11511))?cljs.core.apply.call(null,cljs.core.hash_map,map__11511):map__11511);
var shape = map__11511__$1;
var wiring = cljs.core.get.call(null,map__11511__$1,new cljs.core.Keyword(null,"wiring","wiring",-1202756092));
var n = cljs.core.get.call(null,map__11511__$1,new cljs.core.Keyword(null,"n","n",562130025));
var total_wires = (cljs.core.count.call(null,cljs.core.flatten.call(null,wiring)) / (2));
var target_wires = ((1) + cljs.core.rand_int.call(null,(n - (1))));
var channel_count = cljs.core.count.call(null,wiring);
return cljstemplate.levels.de_dupe_spam.call(null,cljs.core.reduce.call(null,cljstemplate.levels.merge_spam,shape,(function (){var iter__4567__auto__ = ((function (total_wires,target_wires,channel_count,map__11511,map__11511__$1,shape,wiring,n){
return (function iter__11512(s__11513){
return (new cljs.core.LazySeq(null,((function (total_wires,target_wires,channel_count,map__11511,map__11511__$1,shape,wiring,n){
return (function (){
var s__11513__$1 = s__11513;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11513__$1);
if(temp__4126__auto__){
var s__11513__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11513__$2)){
var c__4565__auto__ = cljs.core.chunk_first.call(null,s__11513__$2);
var size__4566__auto__ = cljs.core.count.call(null,c__4565__auto__);
var b__11515 = cljs.core.chunk_buffer.call(null,size__4566__auto__);
if((function (){var i__11514 = (0);
while(true){
if((i__11514 < size__4566__auto__)){
var i = cljs.core._nth.call(null,c__4565__auto__,i__11514);
cljs.core.chunk_append.call(null,b__11515,(function (){var a = cljs.core.rand_int.call(null,n);
var b = cljs.core.rand_int.call(null,n);
if(cljs.core._EQ_.call(null,a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,channel_count),cljs.core.mod.call(null,(a + (1)),n),b], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,channel_count),a,b], null);
}
})());

var G__11516 = (i__11514 + (1));
i__11514 = G__11516;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11515),iter__11512.call(null,cljs.core.chunk_rest.call(null,s__11513__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11515),null);
}
} else {
var i = cljs.core.first.call(null,s__11513__$2);
return cljs.core.cons.call(null,(function (){var a = cljs.core.rand_int.call(null,n);
var b = cljs.core.rand_int.call(null,n);
if(cljs.core._EQ_.call(null,a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,channel_count),cljs.core.mod.call(null,(a + (1)),n),b], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,channel_count),a,b], null);
}
})(),iter__11512.call(null,cljs.core.rest.call(null,s__11513__$2)));
}
} else {
return null;
}
break;
}
});})(total_wires,target_wires,channel_count,map__11511,map__11511__$1,shape,wiring,n))
,null,null));
});})(total_wires,target_wires,channel_count,map__11511,map__11511__$1,shape,wiring,n))
;
return iter__4567__auto__.call(null,cljs.core.range.call(null,total_wires,target_wires));
})()));
});
cljstemplate.levels.spam = (function spam(shapes){
return cljs.core.mapv.call(null,cljstemplate.levels.spam_each,shapes);
});
cljstemplate.levels.wire_paths = (function wire_paths(p__11517){
var map__11521 = p__11517;
var map__11521__$1 = ((cljs.core.seq_QMARK_.call(null,map__11521))?cljs.core.apply.call(null,cljs.core.hash_map,map__11521):map__11521);
var level = map__11521__$1;
var vec__11522 = cljs.core.get.call(null,map__11521__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var start = cljs.core.nth.call(null,vec__11522,(0),null);
var vec__11523 = cljs.core.get.call(null,map__11521__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var end = cljs.core.nth.call(null,vec__11523,(0),null);
var shapes = cljs.core.get.call(null,map__11521__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
var channels = cljs.core.get.call(null,map__11521__$1,new cljs.core.Keyword(null,"channels","channels",1132759174));
var shapes0 = cljstemplate.levels.add_distance_to_end.call(null,shapes,(0),cljs.core.PersistentHashSet.fromArray([end], true));
var first_id = cljs.core.some.call(null,cljs.core.identity,new cljs.core.Keyword(null,"neighbours","neighbours",1596930053).cljs$core$IFn$_invoke$arity$1(shapes.call(null,start)));
var shapes1 = cljs.core.reduce.call(null,cljs.core.partial.call(null,cljstemplate.levels.add_path_to_end,first_id,start,end,(0)),shapes0,cljs.core.range.call(null,cljs.core.count.call(null,channels)));
var shapes2 = cljstemplate.levels.spam.call(null,shapes1);
return cljs.core.assoc.call(null,level,new cljs.core.Keyword(null,"shapes","shapes",1897594879),shapes2);
});
cljstemplate.levels.blue_on_orange = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(175),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(250)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(150),(225)], null)], null);
cljstemplate.levels.orange_yellow_red_channels = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(175),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(250),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(100),(0)], null)], null);
cljstemplate.levels.green_on_pink = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(150),(200)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(0),(50)], null)], null);
cljstemplate.levels.red_yellow_blue_channels = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(50),(50)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(150),(150),(255)], null)], null);
cljstemplate.levels.red_white = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(50),(50)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(150),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(250),(250)], null)], null);
cljstemplate.levels.red_white_3 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(50),(150)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(125),(125)], null)], null);
cljstemplate.levels.black_on_lightgrey = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200),(200)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)], null);
cljstemplate.levels.cyan_magenta_yellow_channels = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(250),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(0),(250)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(250),(250)], null)], null);
cljstemplate.levels.grey_on_black = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(250),(250)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(125),(125),(125)], null)], null);
cljstemplate.levels.red_purple_lilac_channels = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(0),(200)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(175),(175),(255)], null)], null);
cljstemplate.levels.all_colours = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljstemplate.levels.blue_on_orange,cljstemplate.levels.orange_yellow_red_channels], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljstemplate.levels.green_on_pink,cljstemplate.levels.red_yellow_blue_channels], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljstemplate.levels.black_on_lightgrey,cljstemplate.levels.cyan_magenta_yellow_channels], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljstemplate.levels.grey_on_black,cljstemplate.levels.red_purple_lilac_channels], null)], null);
cljstemplate.levels.tutorial_levels = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljstemplate.levels.add_msgs.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.mk_level.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),cljstemplate.constance.PI], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(6)], null),cljstemplate.levels.blue_on_orange,cljs.core.butlast.call(null,cljs.core.butlast.call(null,cljstemplate.levels.orange_yellow_red_channels))),(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(2),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(3),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null)], null)),(4),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(5),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),"Click on shapes to rotate them. Complete the path.","Awesome! You did it."),cljstemplate.levels.add_msgs.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.mk_level.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),cljstemplate.constance.PI], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(9)], null),cljstemplate.levels.blue_on_orange,cljs.core.butlast.call(null,cljstemplate.levels.orange_yellow_red_channels)),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null),cljs.core.PersistentVector.EMPTY], null)),(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null),cljs.core.PersistentVector.EMPTY], null)),(5),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null)], null)),(6),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null)], null)),(7),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null)], null)),(8),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),"Sometimes you need to create more than one path.","Well done!"),cljstemplate.levels.add_msgs.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.mk_level.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),cljstemplate.constance.PI], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null)], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(12)], null),cljstemplate.levels.blue_on_orange,cljstemplate.levels.orange_yellow_red_channels),(1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null),cljs.core.PersistentVector.EMPTY], null)),(4),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null)], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null)),(5),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null)),(6),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null)], null)),(7),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),cljs.core.PersistentVector.EMPTY], null)),(8),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null)], null)),(9),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(10),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null)], null)),(11),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null)], null)),"There may be as many as three paths.","You're getting the hang of this!"),cljstemplate.levels.add_msgs.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.mk_level.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(cljstemplate.constance.PI / (2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),cljs.core.PersistentVector.EMPTY], null)], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),cljs.core.PersistentVector.EMPTY], null)], null)], null)], null)], null)], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(16)], null),cljstemplate.levels.blue_on_orange,cljstemplate.levels.orange_yellow_red_channels),(5),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(6),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(7),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null),cljs.core.PersistentVector.EMPTY], null)),(8),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null)),(9),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null)),(10),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(11),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null),cljs.core.PersistentVector.EMPTY], null)),(12),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null)], null)),(13),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(14),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null)], null)),(15),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(18),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null)], null)),"You don't always have to use all the pieces.","Wow! Onto the real levels...")], null);
cljstemplate.levels.unfinished_levels = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.partial.call(null,cljstemplate.levels.mk_level,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),cljstemplate.constance.PI], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(2)], null)),cljs.core.partial.call(null,cljstemplate.levels.mk_level,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),cljstemplate.constance.PI], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),cljs.core.PersistentVector.EMPTY,(6),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),cljs.core.PersistentVector.EMPTY,(6),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),cljs.core.PersistentVector.EMPTY], null),(6),cljs.core.PersistentVector.EMPTY], null),(6),cljs.core.PersistentVector.EMPTY,(6),cljs.core.PersistentVector.EMPTY], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(5)], null)),cljs.core.partial.call(null,cljstemplate.levels.mk_level,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),cljstemplate.constance.PI], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),cljs.core.PersistentVector.EMPTY,(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(3),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(6),cljs.core.PersistentVector.EMPTY], null)], null),(3),cljs.core.PersistentVector.EMPTY], null)], null),(6),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),cljs.core.PersistentVector.EMPTY,(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(3),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),cljs.core.PersistentVector.EMPTY], null),(3),cljs.core.PersistentVector.EMPTY], null)], null)], null),(6),cljs.core.PersistentVector.EMPTY], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(6)], null)),cljs.core.partial.call(null,cljstemplate.levels.mk_level,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),cljstemplate.constance.PI], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null)], null)], null),(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),cljs.core.PersistentVector.EMPTY], null),(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),cljs.core.PersistentVector.EMPTY], null),(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),cljs.core.PersistentVector.EMPTY], null),(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),cljs.core.PersistentVector.EMPTY], null),(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),cljs.core.PersistentVector.EMPTY], null)], null),(3),cljs.core.PersistentVector.EMPTY], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),cljs.core.PersistentVector.EMPTY], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(4)], null)),cljs.core.partial.call(null,cljstemplate.levels.mk_level,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),cljstemplate.constance.PI], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(8),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY,(8),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY,(8),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null),(8),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY,(8),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY,(8),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(5)], null))], null);
cljstemplate.levels.start_messages = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Good luck!","You're doing really well!","You're really good at this game!","May the hugs of a thousand kittens be with you.","<img src=\"https://placekitten.com/g/300/300\" width=\"50px\" height=\"50px\" />"], null);
cljstemplate.levels.end_messages = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Wow!","Awesome!","You did it!","You totally nailed that level!","You're really good at this game.","You must be, like, a genius or something."], null);
cljstemplate.levels.add_random_msg = (function add_random_msg(level){
return cljstemplate.levels.add_msgs.call(null,level,cljs.core.rand_nth.call(null,cljstemplate.levels.start_messages),cljs.core.rand_nth.call(null,cljstemplate.levels.end_messages));
});
cljstemplate.levels.pick_channels = (function pick_channels(number,channels){
return cljs.core.take.call(null,number,cljs.core.drop.call(null,cljs.core.rand_int.call(null,(3)),cljs.core.cycle.call(null,channels)));
});
cljstemplate.levels.finish = (function finish(level,channel_count,p__11524){
var vec__11526 = p__11524;
var colours = cljs.core.nth.call(null,vec__11526,(0),null);
var channels = cljs.core.nth.call(null,vec__11526,(1),null);
return cljstemplate.levels.add_random_msg.call(null,cljstemplate.levels.wire_paths.call(null,level.call(null,colours,cljstemplate.levels.pick_channels.call(null,channel_count,channels))));
});
cljstemplate.levels.finish_level = (function finish_level(n){
var index = cljs.core.mod.call(null,((n / (3)) | (0)),cljs.core.count.call(null,cljstemplate.levels.unfinished_levels));
var channel_count = (cljs.core.mod.call(null,n,(3)) + (1));
var level = cljstemplate.levels.unfinished_levels.call(null,index);
var colours = cljs.core.rand_nth.call(null,cljstemplate.levels.all_colours);
return cljstemplate.levels.finish.call(null,level,channel_count,colours);
});
cljstemplate.levels.get_level = (function get_level(n){
var t = cljs.core.count.call(null,cljstemplate.levels.tutorial_levels);
if((n < t)){
return cljstemplate.levels.tutorial_levels.call(null,n);
} else {
return cljstemplate.levels.finish_level.call(null,(n - t));
}
});
