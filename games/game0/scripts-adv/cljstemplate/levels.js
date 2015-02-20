// Compiled by ClojureScript 0.0-2719 {}
goog.provide('cljstemplate.levels');
goog.require('cljs.core');
goog.require('cljstemplate.shapeconstance');
goog.require('cljstemplate.constance');
goog.require('cljstemplate.logging');
cljstemplate.levels.log = cljstemplate.logging.logger(cljs.core.constant$keyword$72);
cljstemplate.levels.apply_step = (function apply_step(p__49353,p__49354){
var vec__49359 = p__49353;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49359,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49359,(1),null);
var rotation = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49359,(2),null);
var vec__49360 = p__49354;
var angle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49360,(0),null);
var distance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49360,(1),null);
var new_rotation = (rotation + angle);
var new_x = (x + (distance * (function (){var G__49361 = new_rotation;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__49361) : Math.sin.call(null,G__49361));
})()));
var new_y = (y + (distance * (function (){var G__49362 = new_rotation;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__49362) : Math.cos.call(null,G__49362));
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_x,new_y,new_rotation], null);
});
/**
* @param {...*} var_args
*/
cljstemplate.levels.path = (function() { 
var path__delegate = function (location,steps){
while(true){
var temp__4124__auto__ = cljs.core.first(steps);
if(cljs.core.truth_(temp__4124__auto__)){
var step = temp__4124__auto__;
var G__49363 = cljstemplate.levels.apply_step(location,step);
var G__49364 = cljs.core.rest(steps);
location = G__49363;
steps = G__49364;
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
var G__49365__i = 0, G__49365__a = new Array(arguments.length -  1);
while (G__49365__i < G__49365__a.length) {G__49365__a[G__49365__i] = arguments[G__49365__i + 1]; ++G__49365__i;}
  steps = new cljs.core.IndexedSeq(G__49365__a,0);
} 
return path__delegate.call(this,location,steps);};
path.cljs$lang$maxFixedArity = 1;
path.cljs$lang$applyTo = (function (arglist__49366){
var location = cljs.core.first(arglist__49366);
var steps = cljs.core.rest(arglist__49366);
return path__delegate(location,steps);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;
cljstemplate.levels.pads = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.shapeconstance.tri_pad,(4),cljstemplate.shapeconstance.square_pad,(6),cljstemplate.shapeconstance.hex_pad,(8),cljstemplate.shapeconstance.oct_pad], null);
cljstemplate.levels.angles = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.constance.TAU_3RD,(4),cljstemplate.constance.TAU_4TH,(6),cljstemplate.constance.TAU_6TH,(8),cljstemplate.constance.TAU_8TH], null);
cljstemplate.levels.mk_shapes = (function mk_shapes(shapes,p__49368,p__49369){
var vec__49395 = p__49368;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49395,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49395,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49395,(2),null);
var vec__49396 = p__49369;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49396,(0),null);
var neighbours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49396,(1),null);
var rest = cljs.core.nthnext(vec__49396,(2));
var my_pad = (function (){var G__49397 = n;
return (cljstemplate.levels.pads.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.levels.pads.cljs$core$IFn$_invoke$arity$1(G__49397) : cljstemplate.levels.pads.call(null,G__49397));
})();
var new_shape = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),n))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$73,n,cljs.core.constant$keyword$74,cljstemplate.levels.path.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,r], null),cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),my_pad], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljstemplate.constance.PI,(0)], null)], 0))], null)], null));
var my_angle = (function (){var G__49398 = n;
return (cljstemplate.levels.angles.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.levels.angles.cljs$core$IFn$_invoke$arity$1(G__49398) : cljstemplate.levels.angles.call(null,G__49398));
})();
var neighbours_pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),neighbours);
var neighbour_count = cljs.core.count(neighbours_pairs);
var neighbour_angles = cljs.core.iterate(((function (my_pad,new_shape,my_angle,neighbours_pairs,neighbour_count,vec__49395,x,y,r,vec__49396,n,neighbours,rest){
return (function (p1__49367_SHARP_){
return (p1__49367_SHARP_ + my_angle);
});})(my_pad,new_shape,my_angle,neighbours_pairs,neighbour_count,vec__49395,x,y,r,vec__49396,n,neighbours,rest))
,(cljstemplate.constance.PI + my_angle));
var neighbour_shapes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4567__auto__ = ((function (my_pad,new_shape,my_angle,neighbours_pairs,neighbour_count,neighbour_angles,vec__49395,x,y,r,vec__49396,n,neighbours,rest){
return (function iter__49399(s__49400){
return (new cljs.core.LazySeq(null,((function (my_pad,new_shape,my_angle,neighbours_pairs,neighbour_count,neighbour_angles,vec__49395,x,y,r,vec__49396,n,neighbours,rest){
return (function (){
var s__49400__$1 = s__49400;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__49400__$1);
if(temp__4126__auto__){
var s__49400__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49400__$2)){
var c__4565__auto__ = cljs.core.chunk_first(s__49400__$2);
var size__4566__auto__ = cljs.core.count(c__4565__auto__);
var b__49402 = cljs.core.chunk_buffer(size__4566__auto__);
if((function (){var i__49401 = (0);
while(true){
if((i__49401 < size__4566__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4565__auto__,i__49401);
cljs.core.chunk_append(b__49402,mk_shapes(cljs.core.PersistentVector.EMPTY,cljstemplate.levels.path.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,r], null),cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),my_pad], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(neighbour_angles,i),my_pad], null)], 0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(neighbours_pairs,i)));

var G__49405 = (i__49401 + (1));
i__49401 = G__49405;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49402),iter__49399(cljs.core.chunk_rest(s__49400__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49402),null);
}
} else {
var i = cljs.core.first(s__49400__$2);
return cljs.core.cons(mk_shapes(cljs.core.PersistentVector.EMPTY,cljstemplate.levels.path.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,r], null),cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),my_pad], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(neighbour_angles,i),my_pad], null)], 0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(neighbours_pairs,i)),iter__49399(cljs.core.rest(s__49400__$2)));
}
} else {
return null;
}
break;
}
});})(my_pad,new_shape,my_angle,neighbours_pairs,neighbour_count,neighbour_angles,vec__49395,x,y,r,vec__49396,n,neighbours,rest))
,null,null));
});})(my_pad,new_shape,my_angle,neighbours_pairs,neighbour_count,neighbour_angles,vec__49395,x,y,r,vec__49396,n,neighbours,rest))
;
return iter__4567__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(neighbour_count));
})());
var more_shapes = ((rest)?mk_shapes(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,r], null),rest):cljs.core.PersistentVector.EMPTY);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(shapes,new_shape,cljs.core.array_seq([neighbour_shapes,more_shapes], 0)));
});
/**
* Round a double to the given precision (number of significant digits)
*/
cljstemplate.levels.round2 = (function round2(precision,d){
var factor = (function (){var G__49409 = (10);
var G__49410 = precision;
return (Math.pow.cljs$core$IFn$_invoke$arity$2 ? Math.pow.cljs$core$IFn$_invoke$arity$2(G__49409,G__49410) : Math.pow.call(null,G__49409,G__49410));
})();
return ((function (){var G__49411 = (d * factor);
return (Math.round.cljs$core$IFn$_invoke$arity$1 ? Math.round.cljs$core$IFn$_invoke$arity$1(G__49411) : Math.round.call(null,G__49411));
})() / factor);
});
cljstemplate.levels.round_location = (function round_location(p__49412){
var vec__49414 = p__49412;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49414,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49414,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49414,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljstemplate.levels.round2((2),x),cljstemplate.levels.round2((2),y),cljstemplate.levels.round2((4),r)], null);
});
cljstemplate.levels.round_shapes = (function round_shapes(shapes){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__49415_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__49415_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$74], null),cljstemplate.levels.round_location);
}),shapes);
});
cljstemplate.levels.translate_each = (function translate_each(by_x,by_y,shape){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$74,(0)], null),cljs.core._PLUS_,by_x),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$74,(1)], null),cljs.core._PLUS_,by_y);
});
cljstemplate.levels.translate = (function translate(shapes,by_x,by_y){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljstemplate.levels.translate_each,by_x,by_y),shapes);
});
cljstemplate.levels.padding = cljstemplate.levels.round2((2),(1.1 * cljstemplate.shapeconstance.oct_radius));
cljstemplate.levels.centre = (function centre(shapes){
var xs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$74,shapes));
var ys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$74,shapes));
var min_x = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.min,xs);
var min_y = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.min,ys);
var max_x = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,xs);
var max_y = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,ys);
var new_shapes = cljstemplate.levels.translate(shapes,(cljstemplate.levels.padding - min_x),(cljstemplate.levels.padding - min_y));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_shapes,(((2) * cljstemplate.levels.padding) + (max_x - min_x)),(((2) * cljstemplate.levels.padding) + (max_y - min_y))], null);
});
cljstemplate.levels.add_shape_wires = (function add_shape_wires(channel_count,shape){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,cljs.core.constant$keyword$75,cljs.core.vec((function (){var iter__4567__auto__ = (function iter__49446(s__49447){
return (new cljs.core.LazySeq(null,(function (){
var s__49447__$1 = s__49447;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__49447__$1);
if(temp__4126__auto__){
var s__49447__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49447__$2)){
var c__4565__auto__ = cljs.core.chunk_first(s__49447__$2);
var size__4566__auto__ = cljs.core.count(c__4565__auto__);
var b__49449 = cljs.core.chunk_buffer(size__4566__auto__);
if((function (){var i__49448 = (0);
while(true){
if((i__49448 < size__4566__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4565__auto__,i__49448);
cljs.core.chunk_append(b__49449,cljs.core.vec((function (){var iter__4567__auto__ = ((function (i__49448,i,c__4565__auto__,size__4566__auto__,b__49449,s__49447__$2,temp__4126__auto__){
return (function iter__49464(s__49465){
return (new cljs.core.LazySeq(null,((function (i__49448,i,c__4565__auto__,size__4566__auto__,b__49449,s__49447__$2,temp__4126__auto__){
return (function (){
var s__49465__$1 = s__49465;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__49465__$1);
if(temp__4126__auto____$1){
var s__49465__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49465__$2)){
var c__4565__auto____$1 = cljs.core.chunk_first(s__49465__$2);
var size__4566__auto____$1 = cljs.core.count(c__4565__auto____$1);
var b__49467 = cljs.core.chunk_buffer(size__4566__auto____$1);
if((function (){var i__49466 = (0);
while(true){
if((i__49466 < size__4566__auto____$1)){
var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4565__auto____$1,i__49466);
cljs.core.chunk_append(b__49467,(function (){var a = cljs.core.rand_int(cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(shape));
var b = cljs.core.rand_int(cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod((a + (1)),cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(shape)),b], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
})());

var G__49476 = (i__49466 + (1));
i__49466 = G__49476;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49467),iter__49464(cljs.core.chunk_rest(s__49465__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49467),null);
}
} else {
var j = cljs.core.first(s__49465__$2);
return cljs.core.cons((function (){var a = cljs.core.rand_int(cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(shape));
var b = cljs.core.rand_int(cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod((a + (1)),cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(shape)),b], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
})(),iter__49464(cljs.core.rest(s__49465__$2)));
}
} else {
return null;
}
break;
}
});})(i__49448,i,c__4565__auto__,size__4566__auto__,b__49449,s__49447__$2,temp__4126__auto__))
,null,null));
});})(i__49448,i,c__4565__auto__,size__4566__auto__,b__49449,s__49447__$2,temp__4126__auto__))
;
return iter__4567__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((2))));
})()));

var G__49477 = (i__49448 + (1));
i__49448 = G__49477;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49449),iter__49446(cljs.core.chunk_rest(s__49447__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49449),null);
}
} else {
var i = cljs.core.first(s__49447__$2);
return cljs.core.cons(cljs.core.vec((function (){var iter__4567__auto__ = ((function (i,s__49447__$2,temp__4126__auto__){
return (function iter__49470(s__49471){
return (new cljs.core.LazySeq(null,((function (i,s__49447__$2,temp__4126__auto__){
return (function (){
var s__49471__$1 = s__49471;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__49471__$1);
if(temp__4126__auto____$1){
var s__49471__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49471__$2)){
var c__4565__auto__ = cljs.core.chunk_first(s__49471__$2);
var size__4566__auto__ = cljs.core.count(c__4565__auto__);
var b__49473 = cljs.core.chunk_buffer(size__4566__auto__);
if((function (){var i__49472 = (0);
while(true){
if((i__49472 < size__4566__auto__)){
var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4565__auto__,i__49472);
cljs.core.chunk_append(b__49473,(function (){var a = cljs.core.rand_int(cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(shape));
var b = cljs.core.rand_int(cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod((a + (1)),cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(shape)),b], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
})());

var G__49478 = (i__49472 + (1));
i__49472 = G__49478;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49473),iter__49470(cljs.core.chunk_rest(s__49471__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49473),null);
}
} else {
var j = cljs.core.first(s__49471__$2);
return cljs.core.cons((function (){var a = cljs.core.rand_int(cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(shape));
var b = cljs.core.rand_int(cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod((a + (1)),cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(shape)),b], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
})(),iter__49470(cljs.core.rest(s__49471__$2)));
}
} else {
return null;
}
break;
}
});})(i,s__49447__$2,temp__4126__auto__))
,null,null));
});})(i,s__49447__$2,temp__4126__auto__))
;
return iter__4567__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((2))));
})()),iter__49446(cljs.core.rest(s__49447__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4567__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(channel_count));
})()));
});
cljstemplate.levels.add_blank_wires = (function add_blank_wires(channel_count,shape){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,cljs.core.constant$keyword$75,cljs.core.vec((function (){var iter__4567__auto__ = (function iter__49485(s__49486){
return (new cljs.core.LazySeq(null,(function (){
var s__49486__$1 = s__49486;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__49486__$1);
if(temp__4126__auto__){
var s__49486__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49486__$2)){
var c__4565__auto__ = cljs.core.chunk_first(s__49486__$2);
var size__4566__auto__ = cljs.core.count(c__4565__auto__);
var b__49488 = cljs.core.chunk_buffer(size__4566__auto__);
if((function (){var i__49487 = (0);
while(true){
if((i__49487 < size__4566__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4565__auto__,i__49487);
cljs.core.chunk_append(b__49488,cljs.core.PersistentVector.EMPTY);

var G__49491 = (i__49487 + (1));
i__49487 = G__49491;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49488),iter__49485(cljs.core.chunk_rest(s__49486__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49488),null);
}
} else {
var i = cljs.core.first(s__49486__$2);
return cljs.core.cons(cljs.core.PersistentVector.EMPTY,iter__49485(cljs.core.rest(s__49486__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4567__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(channel_count));
})()));
});
cljstemplate.levels.add_wires = (function add_wires(shapes,channel_count){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljstemplate.levels.add_shape_wires,channel_count),shapes);
});
cljstemplate.levels.blank_wires = (function blank_wires(shapes,channel_count){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljstemplate.levels.add_blank_wires,channel_count),shapes);
});
cljstemplate.levels.endpoint_wiring = (function endpoint_wiring(channel_count,direction,shape){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,cljs.core.constant$keyword$75,cljs.core.vec((function (){var iter__4567__auto__ = (function iter__49522(s__49523){
return (new cljs.core.LazySeq(null,(function (){
var s__49523__$1 = s__49523;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__49523__$1);
if(temp__4126__auto__){
var s__49523__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49523__$2)){
var c__4565__auto__ = cljs.core.chunk_first(s__49523__$2);
var size__4566__auto__ = cljs.core.count(c__4565__auto__);
var b__49525 = cljs.core.chunk_buffer(size__4566__auto__);
if((function (){var i__49524 = (0);
while(true){
if((i__49524 < size__4566__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4565__auto__,i__49524);
cljs.core.chunk_append(b__49525,cljs.core.vec((function (){var iter__4567__auto__ = ((function (i__49524,i,c__4565__auto__,size__4566__auto__,b__49525,s__49523__$2,temp__4126__auto__){
return (function iter__49540(s__49541){
return (new cljs.core.LazySeq(null,((function (i__49524,i,c__4565__auto__,size__4566__auto__,b__49525,s__49523__$2,temp__4126__auto__){
return (function (){
var s__49541__$1 = s__49541;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__49541__$1);
if(temp__4126__auto____$1){
var s__49541__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49541__$2)){
var c__4565__auto____$1 = cljs.core.chunk_first(s__49541__$2);
var size__4566__auto____$1 = cljs.core.count(c__4565__auto____$1);
var b__49543 = cljs.core.chunk_buffer(size__4566__auto____$1);
if((function (){var i__49542 = (0);
while(true){
if((i__49542 < size__4566__auto____$1)){
var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4565__auto____$1,i__49542);
cljs.core.chunk_append(b__49543,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,(1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(9)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),j], null)));

var G__49552 = (i__49542 + (1));
i__49542 = G__49552;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49543),iter__49540(cljs.core.chunk_rest(s__49541__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49543),null);
}
} else {
var j = cljs.core.first(s__49541__$2);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,(1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(9)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),j], null)),iter__49540(cljs.core.rest(s__49541__$2)));
}
} else {
return null;
}
break;
}
});})(i__49524,i,c__4565__auto__,size__4566__auto__,b__49525,s__49523__$2,temp__4126__auto__))
,null,null));
});})(i__49524,i,c__4565__auto__,size__4566__auto__,b__49525,s__49523__$2,temp__4126__auto__))
;
return iter__4567__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(shape)));
})()));

var G__49553 = (i__49524 + (1));
i__49524 = G__49553;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49525),iter__49522(cljs.core.chunk_rest(s__49523__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49525),null);
}
} else {
var i = cljs.core.first(s__49523__$2);
return cljs.core.cons(cljs.core.vec((function (){var iter__4567__auto__ = ((function (i,s__49523__$2,temp__4126__auto__){
return (function iter__49546(s__49547){
return (new cljs.core.LazySeq(null,((function (i,s__49523__$2,temp__4126__auto__){
return (function (){
var s__49547__$1 = s__49547;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__49547__$1);
if(temp__4126__auto____$1){
var s__49547__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49547__$2)){
var c__4565__auto__ = cljs.core.chunk_first(s__49547__$2);
var size__4566__auto__ = cljs.core.count(c__4565__auto__);
var b__49549 = cljs.core.chunk_buffer(size__4566__auto__);
if((function (){var i__49548 = (0);
while(true){
if((i__49548 < size__4566__auto__)){
var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4565__auto__,i__49548);
cljs.core.chunk_append(b__49549,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,(1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(9)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),j], null)));

var G__49554 = (i__49548 + (1));
i__49548 = G__49554;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49549),iter__49546(cljs.core.chunk_rest(s__49547__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49549),null);
}
} else {
var j = cljs.core.first(s__49547__$2);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,(1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(9)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),j], null)),iter__49546(cljs.core.rest(s__49547__$2)));
}
} else {
return null;
}
break;
}
});})(i,s__49523__$2,temp__4126__auto__))
,null,null));
});})(i,s__49523__$2,temp__4126__auto__))
;
return iter__4567__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(shape)));
})()),iter__49522(cljs.core.rest(s__49523__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4567__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(channel_count));
})()));
});
cljstemplate.levels.add_endpoint_wiring = (function add_endpoint_wiring(shapes,shape_id,channel_count,direction){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(shapes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljstemplate.levels.endpoint_wiring,channel_count,direction));
});
cljstemplate.levels.get_sides = (function get_sides(shape){
var map__49574 = shape;
var map__49574__$1 = ((cljs.core.seq_QMARK_(map__49574))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49574):map__49574);
var vec__49575 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49574__$1,cljs.core.constant$keyword$74);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49575,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49575,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49575,(2),null);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49574__$1,cljs.core.constant$keyword$73);
var shape_angle = (function (){var G__49576 = n;
return (cljstemplate.levels.angles.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.levels.angles.cljs$core$IFn$_invoke$arity$1(G__49576) : cljstemplate.levels.angles.call(null,G__49576));
})();
var radius = (function (){var G__49577 = n;
return (cljstemplate.levels.pads.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.levels.pads.cljs$core$IFn$_invoke$arity$1(G__49577) : cljstemplate.levels.pads.call(null,G__49577));
})();
var iter__4567__auto__ = ((function (map__49574,map__49574__$1,vec__49575,x,y,r,n,shape_angle,radius){
return (function iter__49578(s__49579){
return (new cljs.core.LazySeq(null,((function (map__49574,map__49574__$1,vec__49575,x,y,r,n,shape_angle,radius){
return (function (){
var s__49579__$1 = s__49579;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__49579__$1);
if(temp__4126__auto__){
var s__49579__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49579__$2)){
var c__4565__auto__ = cljs.core.chunk_first(s__49579__$2);
var size__4566__auto__ = cljs.core.count(c__4565__auto__);
var b__49581 = cljs.core.chunk_buffer(size__4566__auto__);
if((function (){var i__49580 = (0);
while(true){
if((i__49580 < size__4566__auto__)){
var side_angle = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4565__auto__,i__49580);
cljs.core.chunk_append(b__49581,(function (){var side_x = (x + (radius * (function (){var G__49588 = side_angle;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__49588) : Math.sin.call(null,G__49588));
})()));
var side_y = (y + (radius * (function (){var G__49589 = side_angle;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__49589) : Math.cos.call(null,G__49589));
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [side_x,side_y,shape], null);
})());

var G__49592 = (i__49580 + (1));
i__49580 = G__49592;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49581),iter__49578(cljs.core.chunk_rest(s__49579__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49581),null);
}
} else {
var side_angle = cljs.core.first(s__49579__$2);
return cljs.core.cons((function (){var side_x = (x + (radius * (function (){var G__49590 = side_angle;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__49590) : Math.sin.call(null,G__49590));
})()));
var side_y = (y + (radius * (function (){var G__49591 = side_angle;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__49591) : Math.cos.call(null,G__49591));
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [side_x,side_y,shape], null);
})(),iter__49578(cljs.core.rest(s__49579__$2)));
}
} else {
return null;
}
break;
}
});})(map__49574,map__49574__$1,vec__49575,x,y,r,n,shape_angle,radius))
,null,null));
});})(map__49574,map__49574__$1,vec__49575,x,y,r,n,shape_angle,radius))
;
return iter__4567__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.iterate(((function (iter__4567__auto__,map__49574,map__49574__$1,vec__49575,x,y,r,n,shape_angle,radius){
return (function (p1__49555_SHARP_){
return (p1__49555_SHARP_ + shape_angle);
});})(iter__4567__auto__,map__49574,map__49574__$1,vec__49575,x,y,r,n,shape_angle,radius))
,r)));
});
cljstemplate.levels.close_enough = (function close_enough(p__49593,p__49594){
var vec__49597 = p__49593;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49597,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49597,(1),null);
var vec__49598 = p__49594;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49598,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49598,(1),null);
var x_diff = (x2 - x1);
var y_diff = (y2 - y1);
var h2 = ((x_diff * x_diff) + (y_diff * y_diff));
var limit = (cljstemplate.shapeconstance.shape_side_length / (3));
var l2 = (limit * limit);
return (h2 < l2);
});
cljstemplate.levels.find_neighbours = (function find_neighbours(shapes,p__49599){
var vec__49607 = p__49599;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49607,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49607,(1),null);
var shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49607,(2),null);
return cljs.core.some(cljs.core.identity,(function (){var iter__4567__auto__ = ((function (vec__49607,x,y,shape){
return (function iter__49608(s__49609){
return (new cljs.core.LazySeq(null,((function (vec__49607,x,y,shape){
return (function (){
var s__49609__$1 = s__49609;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__49609__$1);
if(temp__4126__auto__){
var s__49609__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49609__$2)){
var c__4565__auto__ = cljs.core.chunk_first(s__49609__$2);
var size__4566__auto__ = cljs.core.count(c__4565__auto__);
var b__49611 = cljs.core.chunk_buffer(size__4566__auto__);
if((function (){var i__49610 = (0);
while(true){
if((i__49610 < size__4566__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4565__auto__,i__49610);
cljs.core.chunk_append(b__49611,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shape,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(shapes,i)))?null:(cljs.core.truth_(cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljstemplate.levels.close_enough,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),cljstemplate.levels.get_sides(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(shapes,i))))?i:null)));

var G__49614 = (i__49610 + (1));
i__49610 = G__49614;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49611),iter__49608(cljs.core.chunk_rest(s__49609__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49611),null);
}
} else {
var i = cljs.core.first(s__49609__$2);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shape,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(shapes,i)))?null:(cljs.core.truth_(cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljstemplate.levels.close_enough,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),cljstemplate.levels.get_sides(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(shapes,i))))?i:null)),iter__49608(cljs.core.rest(s__49609__$2)));
}
} else {
return null;
}
break;
}
});})(vec__49607,x,y,shape))
,null,null));
});})(vec__49607,x,y,shape))
;
return iter__4567__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(shapes)));
})());
});
cljstemplate.levels.add_neighbours = (function add_neighbours(shapes){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__49615_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__49615_SHARP_,cljs.core.constant$keyword$76,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljstemplate.levels.find_neighbours,shapes),cljstemplate.levels.get_sides(p1__49615_SHARP_)));
}),shapes);
});
cljstemplate.levels.wire = (function wire(level,shape_id,wiring){
return cljs.core.assoc_in(level,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$77,shape_id,cljs.core.constant$keyword$75], null),wiring);
});
cljstemplate.levels.shuffle = (function shuffle(shapes){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__49616_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__49616_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$78,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$79,cljs.core.rand_int(cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(p1__49616_SHARP_))], null)], null)], 0));
}),shapes);
});
cljstemplate.levels.un_shuffle = (function un_shuffle(shapes){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__49617_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__49617_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$78,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$79,(0)], null)], null)], 0));
}),shapes);
});
cljstemplate.levels.shuffle_shapes = (function shuffle_shapes(level){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(level,cljs.core.constant$keyword$77,cljstemplate.levels.shuffle);
});
cljstemplate.levels.mk_level = (function mk_level(start_location,data,p__49618,colours,channels){
var vec__49621 = p__49618;
var start_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49621,(0),null);
var end_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49621,(1),null);
var shapes0 = cljstemplate.levels.mk_shapes(cljs.core.PersistentVector.EMPTY,start_location,data);
var shapes1 = cljstemplate.levels.round_shapes(shapes0);
var vec__49622 = cljstemplate.levels.centre(shapes1);
var shapes2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49622,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49622,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49622,(2),null);
var start = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(channels),start_index);
var end = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(channels),end_index);
var shapes25 = cljstemplate.levels.blank_wires(shapes2,cljs.core.count(channels));
var shapes3 = cljstemplate.levels.add_endpoint_wiring(shapes25,start_index,cljs.core.count(channels),(0));
var shapes4 = cljstemplate.levels.add_endpoint_wiring(shapes3,end_index,cljs.core.count(channels),(1));
var shapes5 = cljstemplate.levels.add_neighbours(shapes4);
var shapes6 = cljstemplate.levels.un_shuffle(shapes5);
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$77,shapes6,cljs.core.constant$keyword$80,width,cljs.core.constant$keyword$81,height,cljs.core.constant$keyword$82,channels,cljs.core.constant$keyword$83,colours,cljs.core.constant$keyword$84,start,cljs.core.constant$keyword$85,end], null);
});
cljstemplate.levels.add_msgs = (function add_msgs(level,start_msg,end_msg){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(level,cljs.core.constant$keyword$86,start_msg),cljs.core.constant$keyword$87,end_msg);
});
cljstemplate.levels.add_distance = (function add_distance(distance,ends,p__49623){
var map__49625 = p__49623;
var map__49625__$1 = ((cljs.core.seq_QMARK_(map__49625))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49625):map__49625);
var shape = map__49625__$1;
var dte = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49625__$1,cljs.core.constant$keyword$88);
var neighbours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49625__$1,cljs.core.constant$keyword$76);
if(cljs.core.truth_(cljs.core.some(ends,neighbours))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,cljs.core.constant$keyword$88,(function (){var x__4135__auto__ = (function (){var or__3811__auto__ = dte;
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
cljstemplate.levels.has_distance = (function has_distance(distance,ends,p__49626,id){
var map__49628 = p__49626;
var map__49628__$1 = ((cljs.core.seq_QMARK_(map__49628))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49628):map__49628);
var dte = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49628__$1,cljs.core.constant$keyword$88);
var neighbours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49628__$1,cljs.core.constant$keyword$76);
if(cljs.core.truth_((function (){var and__3799__auto__ = cljs.core.some(ends,neighbours);
if(cljs.core.truth_(and__3799__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(distance,dte);
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
var new_shapes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljstemplate.levels.add_distance,distance,ends),shapes);
var new_ends = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljstemplate.levels.has_distance,distance,ends),new_shapes,cljs.core.range.cljs$core$IFn$_invoke$arity$0())));
var new_distance = (distance + (1));
if((cljs.core.seq(ends)) && ((distance < (20)))){
var G__49629 = new_shapes;
var G__49630 = new_distance;
var G__49631 = new_ends;
shapes = G__49629;
distance = G__49630;
ends = G__49631;
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
if(cljs.core.empty_QMARK_(items)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.first(items))){
return idx;
} else {
var G__49632 = (idx + (1));
var G__49633 = cljs.core.rest(items);
idx = G__49632;
items = G__49633;
continue;

}
}
break;
}
});
cljstemplate.levels.add_path_to_end = (function add_path_to_end(here_id,from_shape_id,end_id,travelled,shapes,channel_id){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(here_id,end_id)){
return shapes;
} else {
var shape = (function (){var G__49638 = here_id;
return (shapes.cljs$core$IFn$_invoke$arity$1 ? shapes.cljs$core$IFn$_invoke$arity$1(G__49638) : shapes.call(null,G__49638));
})();
var neighbour_ids = cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1(shape);
var available_ids = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (here_id,from_shape_id,end_id,travelled,shapes,channel_id,shape,neighbour_ids){
return (function (p1__49634_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from_shape_id,p1__49634_SHARP_);
});})(here_id,from_shape_id,end_id,travelled,shapes,channel_id,shape,neighbour_ids))
,neighbour_ids));
var min_dte = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$88,shapes),available_ids));
var neighbour_id = (((min_dte < travelled))?cljs.core.rand_nth(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (here_id,from_shape_id,end_id,travelled,shapes,channel_id,shape,neighbour_ids,available_ids,min_dte){
return (function (p1__49635_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(min_dte,cljs.core.constant$keyword$88.cljs$core$IFn$_invoke$arity$1((function (){var G__49639 = p1__49635_SHARP_;
return (shapes.cljs$core$IFn$_invoke$arity$1 ? shapes.cljs$core$IFn$_invoke$arity$1(G__49639) : shapes.call(null,G__49639));
})()));
});})(here_id,from_shape_id,end_id,travelled,shapes,channel_id,shape,neighbour_ids,available_ids,min_dte))
,available_ids)):cljs.core.rand_nth(available_ids));
var wire_to = cljstemplate.levels.index_of(neighbour_ids,neighbour_id);
var wire_from = cljstemplate.levels.index_of(neighbour_ids,from_shape_id);
var wire = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wire_from,wire_to], null);
var new_shapes = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(shapes,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [here_id,cljs.core.constant$keyword$75,channel_id], null),cljs.core.conj,wire);
var G__49640 = neighbour_id;
var G__49641 = here_id;
var G__49642 = end_id;
var G__49643 = (travelled + (1));
var G__49644 = new_shapes;
var G__49645 = channel_id;
here_id = G__49640;
from_shape_id = G__49641;
end_id = G__49642;
travelled = G__49643;
shapes = G__49644;
channel_id = G__49645;
continue;
}
break;
}
});
cljstemplate.levels.merge_spam = (function merge_spam(shape,p__49646){
var vec__49648 = p__49646;
var channel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49648,(0),null);
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49648,(1),null);
var onto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49648,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$75,channel], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,onto], null));
});
cljstemplate.levels.mk_filter = (function mk_filter(collection){
return (function (p__49651){
var vec__49652 = p__49651;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49652,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49652,(1),null);
return cljs.core.not((function (){var and__3799__auto__ = (a < b);
if(and__3799__auto__){
return cljs.core.some(cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null)], true),collection);
} else {
return and__3799__auto__;
}
})());
});
});
cljstemplate.levels.de_dupe_channel_spam = (function de_dupe_channel_spam(channel_wiring){
return cljs.core.filterv(cljstemplate.levels.mk_filter(channel_wiring),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,channel_wiring)));
});
cljstemplate.levels.de_dupe_spam = (function de_dupe_spam(shape){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$75], null),(function (p1__49653_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljstemplate.levels.de_dupe_channel_spam,p1__49653_SHARP_);
}));
});
cljstemplate.levels.spam_each = (function spam_each(p__49654){
var map__49662 = p__49654;
var map__49662__$1 = ((cljs.core.seq_QMARK_(map__49662))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49662):map__49662);
var shape = map__49662__$1;
var wiring = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49662__$1,cljs.core.constant$keyword$75);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49662__$1,cljs.core.constant$keyword$73);
var total_wires = (cljs.core.count(cljs.core.flatten(wiring)) / (2));
var target_wires = ((1) + cljs.core.rand_int(n));
var channel_count = cljs.core.count(wiring);
return cljstemplate.levels.de_dupe_spam(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljstemplate.levels.merge_spam,shape,(function (){var iter__4567__auto__ = ((function (total_wires,target_wires,channel_count,map__49662,map__49662__$1,shape,wiring,n){
return (function iter__49663(s__49664){
return (new cljs.core.LazySeq(null,((function (total_wires,target_wires,channel_count,map__49662,map__49662__$1,shape,wiring,n){
return (function (){
var s__49664__$1 = s__49664;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__49664__$1);
if(temp__4126__auto__){
var s__49664__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49664__$2)){
var c__4565__auto__ = cljs.core.chunk_first(s__49664__$2);
var size__4566__auto__ = cljs.core.count(c__4565__auto__);
var b__49666 = cljs.core.chunk_buffer(size__4566__auto__);
if((function (){var i__49665 = (0);
while(true){
if((i__49665 < size__4566__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4565__auto__,i__49665);
cljs.core.chunk_append(b__49666,(function (){var a = cljs.core.rand_int(n);
var b = cljs.core.rand_int(n);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int(channel_count),cljs.core.mod((a + (1)),n),b], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int(channel_count),a,b], null);
}
})());

var G__49669 = (i__49665 + (1));
i__49665 = G__49669;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49666),iter__49663(cljs.core.chunk_rest(s__49664__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49666),null);
}
} else {
var i = cljs.core.first(s__49664__$2);
return cljs.core.cons((function (){var a = cljs.core.rand_int(n);
var b = cljs.core.rand_int(n);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int(channel_count),cljs.core.mod((a + (1)),n),b], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int(channel_count),a,b], null);
}
})(),iter__49663(cljs.core.rest(s__49664__$2)));
}
} else {
return null;
}
break;
}
});})(total_wires,target_wires,channel_count,map__49662,map__49662__$1,shape,wiring,n))
,null,null));
});})(total_wires,target_wires,channel_count,map__49662,map__49662__$1,shape,wiring,n))
;
return iter__4567__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(total_wires,target_wires));
})()));
});
cljstemplate.levels.spam = (function spam(shapes){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljstemplate.levels.spam_each,shapes);
});
cljstemplate.levels.wire_paths = (function wire_paths(p__49670){
var map__49675 = p__49670;
var map__49675__$1 = ((cljs.core.seq_QMARK_(map__49675))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49675):map__49675);
var level = map__49675__$1;
var vec__49676 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49675__$1,cljs.core.constant$keyword$84);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49676,(0),null);
var vec__49677 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49675__$1,cljs.core.constant$keyword$85);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49677,(0),null);
var shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49675__$1,cljs.core.constant$keyword$77);
var channels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49675__$1,cljs.core.constant$keyword$82);
var shapes0 = cljstemplate.levels.add_distance_to_end(shapes,(0),cljs.core.PersistentHashSet.fromArray([end], true));
var first_id = cljs.core.some(cljs.core.identity,cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1((function (){var G__49678 = start;
return (shapes.cljs$core$IFn$_invoke$arity$1 ? shapes.cljs$core$IFn$_invoke$arity$1(G__49678) : shapes.call(null,G__49678));
})()));
var shapes1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljstemplate.levels.add_path_to_end,first_id,start,end,cljs.core.array_seq([(0)], 0)),shapes0,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(channels)));
var shapes2 = cljstemplate.levels.spam(shapes1);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(level,cljs.core.constant$keyword$77,shapes2);
});
cljstemplate.levels.orange_blue = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(175),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(250)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(150),(225)], null)], null);
cljstemplate.levels.orange_blue_3 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(175),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(250),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(100),(0)], null)], null);
cljstemplate.levels.orange_blue_2 = cljs.core.butlast(cljstemplate.levels.orange_blue_3);
cljstemplate.levels.orange_blue_1 = cljs.core.butlast(cljstemplate.levels.orange_blue_2);
cljstemplate.levels.purple_green = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(175),(0),(125)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(50),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(200),(100)], null)], null);
cljstemplate.levels.purple_green_3 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(250)], null)], null);
cljstemplate.levels.red_white = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(50),(50)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(150),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(250),(250)], null)], null);
cljstemplate.levels.red_white_3 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(50),(150)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(125),(125)], null)], null);
cljstemplate.levels.black_cmy = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200),(200)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)], null);
cljstemplate.levels.black_cmy_3 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(250),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(0),(250)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(250),(250)], null)], null);
cljstemplate.levels.white_rgb = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(250),(250)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(125),(125),(125)], null)], null);
cljstemplate.levels.white_rgb_3 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(0),(100)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(175),(175),(255)], null)], null);
cljstemplate.levels.all_colours = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljstemplate.levels.orange_blue,cljstemplate.levels.orange_blue_3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljstemplate.levels.purple_green,cljstemplate.levels.purple_green_3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljstemplate.levels.black_cmy,cljstemplate.levels.black_cmy_3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljstemplate.levels.white_rgb,cljstemplate.levels.white_rgb_3], null)], null);
cljstemplate.levels.tutorial_levels = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljstemplate.levels.add_msgs(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.mk_level(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),cljstemplate.constance.PI], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(6)], null),cljstemplate.levels.orange_blue,cljstemplate.levels.orange_blue_1),(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(2),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(3),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null)], null)),(4),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(5),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),"Click on shapes to rotate them. Complete the path.","Awesome! You did it."),cljstemplate.levels.add_msgs(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.mk_level(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),cljstemplate.constance.PI], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(9)], null),cljstemplate.levels.orange_blue,cljstemplate.levels.orange_blue_2),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null),cljs.core.PersistentVector.EMPTY], null)),(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null),cljs.core.PersistentVector.EMPTY], null)),(5),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null)], null)),(6),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null)], null)),(7),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null)], null)),(8),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),"Sometimes you need to create more than one path.","Well done!"),cljstemplate.levels.add_msgs(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.mk_level(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),cljstemplate.constance.PI], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null)], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(12)], null),cljstemplate.levels.orange_blue,cljstemplate.levels.orange_blue_3),(1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null),cljs.core.PersistentVector.EMPTY], null)),(4),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null)),(5),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null)),(6),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null)], null)),(7),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),cljs.core.PersistentVector.EMPTY], null)),(8),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null)], null)),(9),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(10),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null)], null)),(11),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),"There may be as many as three paths.","You're getting the hang of this!"),cljstemplate.levels.add_msgs(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.mk_level(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(cljstemplate.constance.PI / (2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),cljs.core.PersistentVector.EMPTY], null)], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),cljs.core.PersistentVector.EMPTY], null)], null)], null)], null)], null)], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(16)], null),cljstemplate.levels.orange_blue,cljstemplate.levels.orange_blue_3),(5),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(6),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(7),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null),cljs.core.PersistentVector.EMPTY], null)),(8),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null)),(9),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null)),(10),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null)], null)),(11),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),cljs.core.PersistentVector.EMPTY], null)),(12),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null)], null)),(13),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(14),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null)], null)),(15),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(18),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null)], null)),"You don't always have to use all the pieces.","Wow! Onto the real levels...")], null);
cljstemplate.levels.unfinished_levels = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljstemplate.levels.mk_level,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),cljstemplate.constance.PI], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(2)], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljstemplate.levels.mk_level,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),cljstemplate.constance.PI], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),cljs.core.PersistentVector.EMPTY,(6),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),cljs.core.PersistentVector.EMPTY,(6),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),cljs.core.PersistentVector.EMPTY], null),(6),cljs.core.PersistentVector.EMPTY], null),(6),cljs.core.PersistentVector.EMPTY,(6),cljs.core.PersistentVector.EMPTY], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(5)], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljstemplate.levels.mk_level,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),cljstemplate.constance.PI], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),cljs.core.PersistentVector.EMPTY,(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(3),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(6),cljs.core.PersistentVector.EMPTY], null)], null),(3),cljs.core.PersistentVector.EMPTY], null)], null),(6),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),cljs.core.PersistentVector.EMPTY,(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(3),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),cljs.core.PersistentVector.EMPTY], null),(3),cljs.core.PersistentVector.EMPTY], null)], null)], null),(6),cljs.core.PersistentVector.EMPTY], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(6)], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljstemplate.levels.mk_level,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),cljstemplate.constance.PI], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null)], null)], null),(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),cljs.core.PersistentVector.EMPTY], null),(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),cljs.core.PersistentVector.EMPTY], null),(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),cljs.core.PersistentVector.EMPTY], null),(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),cljs.core.PersistentVector.EMPTY], null),(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),cljs.core.PersistentVector.EMPTY], null)], null),(3),cljs.core.PersistentVector.EMPTY], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),cljs.core.PersistentVector.EMPTY], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(4)], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljstemplate.levels.mk_level,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),cljstemplate.constance.PI], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(8),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY,(8),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY,(8),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null),(8),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY,(8),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY,(8),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(5)], null))], null);
cljstemplate.levels.start_messages = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Good luck!","You're doing really well!","You're really good at this game!","May the hugs of a thousand kittens be with you.","<img src=\"https://placekitten.com/g/300/300\" width=\"50px\" height=\"50px\" />"], null);
cljstemplate.levels.end_messages = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Wow!","Awesome!","You did it!","You totally nailed that level!","You're really good at this game.","You must be, like, a genius or something."], null);
cljstemplate.levels.add_random_msg = (function add_random_msg(level){
return cljstemplate.levels.add_msgs(level,cljs.core.rand_nth(cljstemplate.levels.start_messages),cljs.core.rand_nth(cljstemplate.levels.end_messages));
});
cljstemplate.levels.finish = (function finish(level,channel_count,p__49679){
var vec__49683 = p__49679;
var colours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49683,(0),null);
var channels = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49683,(1),null);
return cljstemplate.levels.add_random_msg(cljstemplate.levels.wire_paths((function (){var G__49684 = colours;
var G__49685 = cljs.core.take.cljs$core$IFn$_invoke$arity$2(channel_count,channels);
return (level.cljs$core$IFn$_invoke$arity$2 ? level.cljs$core$IFn$_invoke$arity$2(G__49684,G__49685) : level.call(null,G__49684,G__49685));
})()));
});
cljstemplate.levels.finish_level = (function finish_level(n){
var index = cljs.core.mod(((n / (3)) | (0)),cljs.core.count(cljstemplate.levels.unfinished_levels));
var channel_count = (cljs.core.mod(n,(3)) + (1));
var level = (function (){var G__49687 = index;
return (cljstemplate.levels.unfinished_levels.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.levels.unfinished_levels.cljs$core$IFn$_invoke$arity$1(G__49687) : cljstemplate.levels.unfinished_levels.call(null,G__49687));
})();
var colours = cljs.core.rand_nth(cljstemplate.levels.all_colours);
return cljstemplate.levels.finish(level,channel_count,colours);
});
cljstemplate.levels.get_level = (function get_level(n){
var t = cljs.core.count(cljstemplate.levels.tutorial_levels);
if((n < t)){
var G__49689 = n;
return (cljstemplate.levels.tutorial_levels.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.levels.tutorial_levels.cljs$core$IFn$_invoke$arity$1(G__49689) : cljstemplate.levels.tutorial_levels.call(null,G__49689));
} else {
return cljstemplate.levels.finish_level((n - t));
}
});
