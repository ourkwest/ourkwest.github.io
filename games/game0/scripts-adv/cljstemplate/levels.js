// Compiled by ClojureScript 0.0-2719 {}
goog.provide('cljstemplate.levels');
goog.require('cljs.core');
goog.require('cljstemplate.shapeconstance');
goog.require('cljstemplate.constance');
goog.require('cljstemplate.logging');
cljstemplate.levels.log = cljstemplate.logging.logger(cljs.core.constant$keyword$104);
cljstemplate.levels.apply_step = (function apply_step(p__28167,p__28168){
var vec__28173 = p__28167;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28173,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28173,(1),null);
var rotation = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28173,(2),null);
var vec__28174 = p__28168;
var angle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28174,(0),null);
var distance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28174,(1),null);
var new_rotation = (rotation + angle);
var new_x = (x + (distance * (function (){var G__28175 = new_rotation;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__28175) : Math.sin.call(null,G__28175));
})()));
var new_y = (y + (distance * (function (){var G__28176 = new_rotation;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__28176) : Math.cos.call(null,G__28176));
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
var G__28177 = cljstemplate.levels.apply_step(location,step);
var G__28178 = cljs.core.rest(steps);
location = G__28177;
steps = G__28178;
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
var G__28179__i = 0, G__28179__a = new Array(arguments.length -  1);
while (G__28179__i < G__28179__a.length) {G__28179__a[G__28179__i] = arguments[G__28179__i + 1]; ++G__28179__i;}
  steps = new cljs.core.IndexedSeq(G__28179__a,0);
} 
return path__delegate.call(this,location,steps);};
path.cljs$lang$maxFixedArity = 1;
path.cljs$lang$applyTo = (function (arglist__28180){
var location = cljs.core.first(arglist__28180);
var steps = cljs.core.rest(arglist__28180);
return path__delegate(location,steps);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;
cljstemplate.levels.pads = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.shapeconstance.tri_pad,(4),cljstemplate.shapeconstance.square_pad,(6),cljstemplate.shapeconstance.hex_pad,(8),cljstemplate.shapeconstance.oct_pad], null);
cljstemplate.levels.angles = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.constance.TAU_3RD,(4),cljstemplate.constance.TAU_4TH,(6),cljstemplate.constance.TAU_6TH,(8),cljstemplate.constance.TAU_8TH], null);
cljstemplate.levels.mk_shapes = (function mk_shapes(shapes,p__28182,p__28183){
var vec__28209 = p__28182;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28209,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28209,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28209,(2),null);
var vec__28210 = p__28183;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28210,(0),null);
var neighbours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28210,(1),null);
var rest = cljs.core.nthnext(vec__28210,(2));
var my_pad = (function (){var G__28211 = n;
return (cljstemplate.levels.pads.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.levels.pads.cljs$core$IFn$_invoke$arity$1(G__28211) : cljstemplate.levels.pads.call(null,G__28211));
})();
var new_shape = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),n))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$105,n,cljs.core.constant$keyword$106,cljstemplate.levels.path.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,r], null),cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),my_pad], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljstemplate.constance.PI,(0)], null)], 0))], null)], null));
var my_angle = (function (){var G__28212 = n;
return (cljstemplate.levels.angles.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.levels.angles.cljs$core$IFn$_invoke$arity$1(G__28212) : cljstemplate.levels.angles.call(null,G__28212));
})();
var neighbours_pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),neighbours);
var neighbour_count = cljs.core.count(neighbours_pairs);
var neighbour_angles = cljs.core.iterate(((function (my_pad,new_shape,my_angle,neighbours_pairs,neighbour_count,vec__28209,x,y,r,vec__28210,n,neighbours,rest){
return (function (p1__28181_SHARP_){
return (p1__28181_SHARP_ + my_angle);
});})(my_pad,new_shape,my_angle,neighbours_pairs,neighbour_count,vec__28209,x,y,r,vec__28210,n,neighbours,rest))
,(cljstemplate.constance.PI + my_angle));
var neighbour_shapes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4567__auto__ = ((function (my_pad,new_shape,my_angle,neighbours_pairs,neighbour_count,neighbour_angles,vec__28209,x,y,r,vec__28210,n,neighbours,rest){
return (function iter__28213(s__28214){
return (new cljs.core.LazySeq(null,((function (my_pad,new_shape,my_angle,neighbours_pairs,neighbour_count,neighbour_angles,vec__28209,x,y,r,vec__28210,n,neighbours,rest){
return (function (){
var s__28214__$1 = s__28214;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__28214__$1);
if(temp__4126__auto__){
var s__28214__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28214__$2)){
var c__4565__auto__ = cljs.core.chunk_first(s__28214__$2);
var size__4566__auto__ = cljs.core.count(c__4565__auto__);
var b__28216 = cljs.core.chunk_buffer(size__4566__auto__);
if((function (){var i__28215 = (0);
while(true){
if((i__28215 < size__4566__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4565__auto__,i__28215);
cljs.core.chunk_append(b__28216,mk_shapes(cljs.core.PersistentVector.EMPTY,cljstemplate.levels.path.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,r], null),cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),my_pad], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(neighbour_angles,i),my_pad], null)], 0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(neighbours_pairs,i)));

var G__28219 = (i__28215 + (1));
i__28215 = G__28219;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28216),iter__28213(cljs.core.chunk_rest(s__28214__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28216),null);
}
} else {
var i = cljs.core.first(s__28214__$2);
return cljs.core.cons(mk_shapes(cljs.core.PersistentVector.EMPTY,cljstemplate.levels.path.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,r], null),cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),my_pad], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(neighbour_angles,i),my_pad], null)], 0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(neighbours_pairs,i)),iter__28213(cljs.core.rest(s__28214__$2)));
}
} else {
return null;
}
break;
}
});})(my_pad,new_shape,my_angle,neighbours_pairs,neighbour_count,neighbour_angles,vec__28209,x,y,r,vec__28210,n,neighbours,rest))
,null,null));
});})(my_pad,new_shape,my_angle,neighbours_pairs,neighbour_count,neighbour_angles,vec__28209,x,y,r,vec__28210,n,neighbours,rest))
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
var factor = (function (){var G__28223 = (10);
var G__28224 = precision;
return (Math.pow.cljs$core$IFn$_invoke$arity$2 ? Math.pow.cljs$core$IFn$_invoke$arity$2(G__28223,G__28224) : Math.pow.call(null,G__28223,G__28224));
})();
return ((function (){var G__28225 = (d * factor);
return (Math.round.cljs$core$IFn$_invoke$arity$1 ? Math.round.cljs$core$IFn$_invoke$arity$1(G__28225) : Math.round.call(null,G__28225));
})() / factor);
});
cljstemplate.levels.round_location = (function round_location(p__28226){
var vec__28228 = p__28226;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28228,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28228,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28228,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljstemplate.levels.round2((2),x),cljstemplate.levels.round2((2),y),cljstemplate.levels.round2((4),r)], null);
});
cljstemplate.levels.round_shapes = (function round_shapes(shapes){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__28229_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__28229_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$106], null),cljstemplate.levels.round_location);
}),shapes);
});
cljstemplate.levels.translate_each = (function translate_each(by_x,by_y,shape){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$106,(0)], null),cljs.core._PLUS_,by_x),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$106,(1)], null),cljs.core._PLUS_,by_y);
});
cljstemplate.levels.translate = (function translate(shapes,by_x,by_y){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljstemplate.levels.translate_each,by_x,by_y),shapes);
});
cljstemplate.levels.padding = cljstemplate.levels.round2((2),(1.1 * cljstemplate.shapeconstance.oct_radius));
cljstemplate.levels.centre = (function centre(shapes){
var xs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$106,shapes));
var ys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$106,shapes));
var min_x = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.min,xs);
var min_y = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.min,ys);
var max_x = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,xs);
var max_y = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,ys);
var new_shapes = cljstemplate.levels.translate(shapes,(cljstemplate.levels.padding - min_x),(cljstemplate.levels.padding - min_y));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_shapes,(((2) * cljstemplate.levels.padding) + (max_x - min_x)),(((2) * cljstemplate.levels.padding) + (max_y - min_y))], null);
});
cljstemplate.levels.add_shape_wires = (function add_shape_wires(channel_count,shape){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,cljs.core.constant$keyword$107,cljs.core.vec((function (){var iter__4567__auto__ = (function iter__28260(s__28261){
return (new cljs.core.LazySeq(null,(function (){
var s__28261__$1 = s__28261;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__28261__$1);
if(temp__4126__auto__){
var s__28261__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28261__$2)){
var c__4565__auto__ = cljs.core.chunk_first(s__28261__$2);
var size__4566__auto__ = cljs.core.count(c__4565__auto__);
var b__28263 = cljs.core.chunk_buffer(size__4566__auto__);
if((function (){var i__28262 = (0);
while(true){
if((i__28262 < size__4566__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4565__auto__,i__28262);
cljs.core.chunk_append(b__28263,cljs.core.vec((function (){var iter__4567__auto__ = ((function (i__28262,i,c__4565__auto__,size__4566__auto__,b__28263,s__28261__$2,temp__4126__auto__){
return (function iter__28278(s__28279){
return (new cljs.core.LazySeq(null,((function (i__28262,i,c__4565__auto__,size__4566__auto__,b__28263,s__28261__$2,temp__4126__auto__){
return (function (){
var s__28279__$1 = s__28279;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__28279__$1);
if(temp__4126__auto____$1){
var s__28279__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__28279__$2)){
var c__4565__auto____$1 = cljs.core.chunk_first(s__28279__$2);
var size__4566__auto____$1 = cljs.core.count(c__4565__auto____$1);
var b__28281 = cljs.core.chunk_buffer(size__4566__auto____$1);
if((function (){var i__28280 = (0);
while(true){
if((i__28280 < size__4566__auto____$1)){
var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4565__auto____$1,i__28280);
cljs.core.chunk_append(b__28281,(function (){var a = cljs.core.rand_int(cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(shape));
var b = cljs.core.rand_int(cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod((a + (1)),cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(shape)),b], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
})());

var G__28290 = (i__28280 + (1));
i__28280 = G__28290;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28281),iter__28278(cljs.core.chunk_rest(s__28279__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28281),null);
}
} else {
var j = cljs.core.first(s__28279__$2);
return cljs.core.cons((function (){var a = cljs.core.rand_int(cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(shape));
var b = cljs.core.rand_int(cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod((a + (1)),cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(shape)),b], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
})(),iter__28278(cljs.core.rest(s__28279__$2)));
}
} else {
return null;
}
break;
}
});})(i__28262,i,c__4565__auto__,size__4566__auto__,b__28263,s__28261__$2,temp__4126__auto__))
,null,null));
});})(i__28262,i,c__4565__auto__,size__4566__auto__,b__28263,s__28261__$2,temp__4126__auto__))
;
return iter__4567__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((2))));
})()));

var G__28291 = (i__28262 + (1));
i__28262 = G__28291;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28263),iter__28260(cljs.core.chunk_rest(s__28261__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28263),null);
}
} else {
var i = cljs.core.first(s__28261__$2);
return cljs.core.cons(cljs.core.vec((function (){var iter__4567__auto__ = ((function (i,s__28261__$2,temp__4126__auto__){
return (function iter__28284(s__28285){
return (new cljs.core.LazySeq(null,((function (i,s__28261__$2,temp__4126__auto__){
return (function (){
var s__28285__$1 = s__28285;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__28285__$1);
if(temp__4126__auto____$1){
var s__28285__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__28285__$2)){
var c__4565__auto__ = cljs.core.chunk_first(s__28285__$2);
var size__4566__auto__ = cljs.core.count(c__4565__auto__);
var b__28287 = cljs.core.chunk_buffer(size__4566__auto__);
if((function (){var i__28286 = (0);
while(true){
if((i__28286 < size__4566__auto__)){
var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4565__auto__,i__28286);
cljs.core.chunk_append(b__28287,(function (){var a = cljs.core.rand_int(cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(shape));
var b = cljs.core.rand_int(cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod((a + (1)),cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(shape)),b], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
})());

var G__28292 = (i__28286 + (1));
i__28286 = G__28292;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28287),iter__28284(cljs.core.chunk_rest(s__28285__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28287),null);
}
} else {
var j = cljs.core.first(s__28285__$2);
return cljs.core.cons((function (){var a = cljs.core.rand_int(cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(shape));
var b = cljs.core.rand_int(cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod((a + (1)),cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(shape)),b], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
})(),iter__28284(cljs.core.rest(s__28285__$2)));
}
} else {
return null;
}
break;
}
});})(i,s__28261__$2,temp__4126__auto__))
,null,null));
});})(i,s__28261__$2,temp__4126__auto__))
;
return iter__4567__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((2))));
})()),iter__28260(cljs.core.rest(s__28261__$2)));
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,cljs.core.constant$keyword$107,cljs.core.vec((function (){var iter__4567__auto__ = (function iter__28299(s__28300){
return (new cljs.core.LazySeq(null,(function (){
var s__28300__$1 = s__28300;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__28300__$1);
if(temp__4126__auto__){
var s__28300__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28300__$2)){
var c__4565__auto__ = cljs.core.chunk_first(s__28300__$2);
var size__4566__auto__ = cljs.core.count(c__4565__auto__);
var b__28302 = cljs.core.chunk_buffer(size__4566__auto__);
if((function (){var i__28301 = (0);
while(true){
if((i__28301 < size__4566__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4565__auto__,i__28301);
cljs.core.chunk_append(b__28302,cljs.core.PersistentVector.EMPTY);

var G__28305 = (i__28301 + (1));
i__28301 = G__28305;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28302),iter__28299(cljs.core.chunk_rest(s__28300__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28302),null);
}
} else {
var i = cljs.core.first(s__28300__$2);
return cljs.core.cons(cljs.core.PersistentVector.EMPTY,iter__28299(cljs.core.rest(s__28300__$2)));
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,cljs.core.constant$keyword$107,cljs.core.vec((function (){var iter__4567__auto__ = (function iter__28336(s__28337){
return (new cljs.core.LazySeq(null,(function (){
var s__28337__$1 = s__28337;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__28337__$1);
if(temp__4126__auto__){
var s__28337__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28337__$2)){
var c__4565__auto__ = cljs.core.chunk_first(s__28337__$2);
var size__4566__auto__ = cljs.core.count(c__4565__auto__);
var b__28339 = cljs.core.chunk_buffer(size__4566__auto__);
if((function (){var i__28338 = (0);
while(true){
if((i__28338 < size__4566__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4565__auto__,i__28338);
cljs.core.chunk_append(b__28339,cljs.core.vec((function (){var iter__4567__auto__ = ((function (i__28338,i,c__4565__auto__,size__4566__auto__,b__28339,s__28337__$2,temp__4126__auto__){
return (function iter__28354(s__28355){
return (new cljs.core.LazySeq(null,((function (i__28338,i,c__4565__auto__,size__4566__auto__,b__28339,s__28337__$2,temp__4126__auto__){
return (function (){
var s__28355__$1 = s__28355;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__28355__$1);
if(temp__4126__auto____$1){
var s__28355__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__28355__$2)){
var c__4565__auto____$1 = cljs.core.chunk_first(s__28355__$2);
var size__4566__auto____$1 = cljs.core.count(c__4565__auto____$1);
var b__28357 = cljs.core.chunk_buffer(size__4566__auto____$1);
if((function (){var i__28356 = (0);
while(true){
if((i__28356 < size__4566__auto____$1)){
var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4565__auto____$1,i__28356);
cljs.core.chunk_append(b__28357,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,(1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(9)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),j], null)));

var G__28366 = (i__28356 + (1));
i__28356 = G__28366;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28357),iter__28354(cljs.core.chunk_rest(s__28355__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28357),null);
}
} else {
var j = cljs.core.first(s__28355__$2);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,(1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(9)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),j], null)),iter__28354(cljs.core.rest(s__28355__$2)));
}
} else {
return null;
}
break;
}
});})(i__28338,i,c__4565__auto__,size__4566__auto__,b__28339,s__28337__$2,temp__4126__auto__))
,null,null));
});})(i__28338,i,c__4565__auto__,size__4566__auto__,b__28339,s__28337__$2,temp__4126__auto__))
;
return iter__4567__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(shape)));
})()));

var G__28367 = (i__28338 + (1));
i__28338 = G__28367;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28339),iter__28336(cljs.core.chunk_rest(s__28337__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28339),null);
}
} else {
var i = cljs.core.first(s__28337__$2);
return cljs.core.cons(cljs.core.vec((function (){var iter__4567__auto__ = ((function (i,s__28337__$2,temp__4126__auto__){
return (function iter__28360(s__28361){
return (new cljs.core.LazySeq(null,((function (i,s__28337__$2,temp__4126__auto__){
return (function (){
var s__28361__$1 = s__28361;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__28361__$1);
if(temp__4126__auto____$1){
var s__28361__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__28361__$2)){
var c__4565__auto__ = cljs.core.chunk_first(s__28361__$2);
var size__4566__auto__ = cljs.core.count(c__4565__auto__);
var b__28363 = cljs.core.chunk_buffer(size__4566__auto__);
if((function (){var i__28362 = (0);
while(true){
if((i__28362 < size__4566__auto__)){
var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4565__auto__,i__28362);
cljs.core.chunk_append(b__28363,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,(1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(9)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),j], null)));

var G__28368 = (i__28362 + (1));
i__28362 = G__28368;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28363),iter__28360(cljs.core.chunk_rest(s__28361__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28363),null);
}
} else {
var j = cljs.core.first(s__28361__$2);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,(1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(9)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),j], null)),iter__28360(cljs.core.rest(s__28361__$2)));
}
} else {
return null;
}
break;
}
});})(i,s__28337__$2,temp__4126__auto__))
,null,null));
});})(i,s__28337__$2,temp__4126__auto__))
;
return iter__4567__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(shape)));
})()),iter__28336(cljs.core.rest(s__28337__$2)));
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
var map__28388 = shape;
var map__28388__$1 = ((cljs.core.seq_QMARK_(map__28388))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28388):map__28388);
var vec__28389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28388__$1,cljs.core.constant$keyword$106);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28389,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28389,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28389,(2),null);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28388__$1,cljs.core.constant$keyword$105);
var shape_angle = (function (){var G__28390 = n;
return (cljstemplate.levels.angles.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.levels.angles.cljs$core$IFn$_invoke$arity$1(G__28390) : cljstemplate.levels.angles.call(null,G__28390));
})();
var radius = (function (){var G__28391 = n;
return (cljstemplate.levels.pads.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.levels.pads.cljs$core$IFn$_invoke$arity$1(G__28391) : cljstemplate.levels.pads.call(null,G__28391));
})();
var iter__4567__auto__ = ((function (map__28388,map__28388__$1,vec__28389,x,y,r,n,shape_angle,radius){
return (function iter__28392(s__28393){
return (new cljs.core.LazySeq(null,((function (map__28388,map__28388__$1,vec__28389,x,y,r,n,shape_angle,radius){
return (function (){
var s__28393__$1 = s__28393;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__28393__$1);
if(temp__4126__auto__){
var s__28393__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28393__$2)){
var c__4565__auto__ = cljs.core.chunk_first(s__28393__$2);
var size__4566__auto__ = cljs.core.count(c__4565__auto__);
var b__28395 = cljs.core.chunk_buffer(size__4566__auto__);
if((function (){var i__28394 = (0);
while(true){
if((i__28394 < size__4566__auto__)){
var side_angle = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4565__auto__,i__28394);
cljs.core.chunk_append(b__28395,(function (){var side_x = (x + (radius * (function (){var G__28402 = side_angle;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__28402) : Math.sin.call(null,G__28402));
})()));
var side_y = (y + (radius * (function (){var G__28403 = side_angle;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__28403) : Math.cos.call(null,G__28403));
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [side_x,side_y,shape], null);
})());

var G__28406 = (i__28394 + (1));
i__28394 = G__28406;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28395),iter__28392(cljs.core.chunk_rest(s__28393__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28395),null);
}
} else {
var side_angle = cljs.core.first(s__28393__$2);
return cljs.core.cons((function (){var side_x = (x + (radius * (function (){var G__28404 = side_angle;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__28404) : Math.sin.call(null,G__28404));
})()));
var side_y = (y + (radius * (function (){var G__28405 = side_angle;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__28405) : Math.cos.call(null,G__28405));
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [side_x,side_y,shape], null);
})(),iter__28392(cljs.core.rest(s__28393__$2)));
}
} else {
return null;
}
break;
}
});})(map__28388,map__28388__$1,vec__28389,x,y,r,n,shape_angle,radius))
,null,null));
});})(map__28388,map__28388__$1,vec__28389,x,y,r,n,shape_angle,radius))
;
return iter__4567__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.iterate(((function (iter__4567__auto__,map__28388,map__28388__$1,vec__28389,x,y,r,n,shape_angle,radius){
return (function (p1__28369_SHARP_){
return (p1__28369_SHARP_ + shape_angle);
});})(iter__4567__auto__,map__28388,map__28388__$1,vec__28389,x,y,r,n,shape_angle,radius))
,r)));
});
cljstemplate.levels.close_enough = (function close_enough(p__28407,p__28408){
var vec__28411 = p__28407;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28411,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28411,(1),null);
var vec__28412 = p__28408;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28412,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28412,(1),null);
var x_diff = (x2 - x1);
var y_diff = (y2 - y1);
var h2 = ((x_diff * x_diff) + (y_diff * y_diff));
var limit = (cljstemplate.shapeconstance.shape_side_length / (3));
var l2 = (limit * limit);
return (h2 < l2);
});
cljstemplate.levels.find_neighbours = (function find_neighbours(shapes,p__28413){
var vec__28421 = p__28413;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28421,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28421,(1),null);
var shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28421,(2),null);
return cljs.core.some(cljs.core.identity,(function (){var iter__4567__auto__ = ((function (vec__28421,x,y,shape){
return (function iter__28422(s__28423){
return (new cljs.core.LazySeq(null,((function (vec__28421,x,y,shape){
return (function (){
var s__28423__$1 = s__28423;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__28423__$1);
if(temp__4126__auto__){
var s__28423__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28423__$2)){
var c__4565__auto__ = cljs.core.chunk_first(s__28423__$2);
var size__4566__auto__ = cljs.core.count(c__4565__auto__);
var b__28425 = cljs.core.chunk_buffer(size__4566__auto__);
if((function (){var i__28424 = (0);
while(true){
if((i__28424 < size__4566__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4565__auto__,i__28424);
cljs.core.chunk_append(b__28425,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shape,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(shapes,i)))?null:(cljs.core.truth_(cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljstemplate.levels.close_enough,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),cljstemplate.levels.get_sides(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(shapes,i))))?i:null)));

var G__28428 = (i__28424 + (1));
i__28424 = G__28428;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28425),iter__28422(cljs.core.chunk_rest(s__28423__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28425),null);
}
} else {
var i = cljs.core.first(s__28423__$2);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shape,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(shapes,i)))?null:(cljs.core.truth_(cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljstemplate.levels.close_enough,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),cljstemplate.levels.get_sides(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(shapes,i))))?i:null)),iter__28422(cljs.core.rest(s__28423__$2)));
}
} else {
return null;
}
break;
}
});})(vec__28421,x,y,shape))
,null,null));
});})(vec__28421,x,y,shape))
;
return iter__4567__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(shapes)));
})());
});
cljstemplate.levels.add_neighbours = (function add_neighbours(shapes){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__28429_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__28429_SHARP_,cljs.core.constant$keyword$108,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljstemplate.levels.find_neighbours,shapes),cljstemplate.levels.get_sides(p1__28429_SHARP_)));
}),shapes);
});
cljstemplate.levels.wire = (function wire(level,shape_id,wiring){
return cljs.core.assoc_in(level,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$109,shape_id,cljs.core.constant$keyword$107], null),wiring);
});
cljstemplate.levels.shuffle = (function shuffle(shapes){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__28430_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__28430_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$110,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$111,cljs.core.rand_int(cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(p1__28430_SHARP_))], null)], null)], 0));
}),shapes);
});
cljstemplate.levels.un_shuffle = (function un_shuffle(shapes){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__28431_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__28431_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$110,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$111,(0)], null)], null)], 0));
}),shapes);
});
cljstemplate.levels.shuffle_shapes = (function shuffle_shapes(level){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(level,cljs.core.constant$keyword$109,cljstemplate.levels.shuffle);
});
cljstemplate.levels.mk_level = (function mk_level(start_location,data,p__28432,colours,channels){
var vec__28435 = p__28432;
var start_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28435,(0),null);
var end_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28435,(1),null);
var shapes0 = cljstemplate.levels.mk_shapes(cljs.core.PersistentVector.EMPTY,start_location,data);
var shapes1 = cljstemplate.levels.round_shapes(shapes0);
var vec__28436 = cljstemplate.levels.centre(shapes1);
var shapes2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28436,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28436,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28436,(2),null);
var start = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(channels),start_index);
var end = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(channels),end_index);
var shapes25 = cljstemplate.levels.blank_wires(shapes2,cljs.core.count(channels));
var shapes3 = cljstemplate.levels.add_endpoint_wiring(shapes25,start_index,cljs.core.count(channels),(0));
var shapes4 = cljstemplate.levels.add_endpoint_wiring(shapes3,end_index,cljs.core.count(channels),(1));
var shapes5 = cljstemplate.levels.add_neighbours(shapes4);
var shapes6 = cljstemplate.levels.un_shuffle(shapes5);
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$109,shapes6,cljs.core.constant$keyword$112,width,cljs.core.constant$keyword$113,height,cljs.core.constant$keyword$114,channels,cljs.core.constant$keyword$115,colours,cljs.core.constant$keyword$116,start,cljs.core.constant$keyword$117,end], null);
});
cljstemplate.levels.add_msg = (function add_msg(level,msg){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(level,cljs.core.constant$keyword$118,msg);
});
cljstemplate.levels.add_distance = (function add_distance(distance,ends,p__28437){
var map__28439 = p__28437;
var map__28439__$1 = ((cljs.core.seq_QMARK_(map__28439))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28439):map__28439);
var shape = map__28439__$1;
var dte = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28439__$1,cljs.core.constant$keyword$119);
var neighbours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28439__$1,cljs.core.constant$keyword$108);
if(cljs.core.truth_(cljs.core.some(ends,neighbours))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,cljs.core.constant$keyword$119,(function (){var x__4135__auto__ = (function (){var or__3811__auto__ = dte;
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
cljstemplate.levels.has_distance = (function has_distance(distance,ends,p__28440,id){
var map__28442 = p__28440;
var map__28442__$1 = ((cljs.core.seq_QMARK_(map__28442))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28442):map__28442);
var dte = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28442__$1,cljs.core.constant$keyword$119);
var neighbours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28442__$1,cljs.core.constant$keyword$108);
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
var G__28443 = new_shapes;
var G__28444 = new_distance;
var G__28445 = new_ends;
shapes = G__28443;
distance = G__28444;
ends = G__28445;
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
var G__28446 = (idx + (1));
var G__28447 = cljs.core.rest(items);
idx = G__28446;
items = G__28447;
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
var shape = (function (){var G__28452 = here_id;
return (shapes.cljs$core$IFn$_invoke$arity$1 ? shapes.cljs$core$IFn$_invoke$arity$1(G__28452) : shapes.call(null,G__28452));
})();
var neighbour_ids = cljs.core.constant$keyword$108.cljs$core$IFn$_invoke$arity$1(shape);
var available_ids = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (here_id,from_shape_id,end_id,travelled,shapes,channel_id,shape,neighbour_ids){
return (function (p1__28448_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from_shape_id,p1__28448_SHARP_);
});})(here_id,from_shape_id,end_id,travelled,shapes,channel_id,shape,neighbour_ids))
,neighbour_ids));
var min_dte = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$119,shapes),available_ids));
var neighbour_id = (((min_dte < travelled))?cljs.core.rand_nth(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (here_id,from_shape_id,end_id,travelled,shapes,channel_id,shape,neighbour_ids,available_ids,min_dte){
return (function (p1__28449_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(min_dte,cljs.core.constant$keyword$119.cljs$core$IFn$_invoke$arity$1((function (){var G__28453 = p1__28449_SHARP_;
return (shapes.cljs$core$IFn$_invoke$arity$1 ? shapes.cljs$core$IFn$_invoke$arity$1(G__28453) : shapes.call(null,G__28453));
})()));
});})(here_id,from_shape_id,end_id,travelled,shapes,channel_id,shape,neighbour_ids,available_ids,min_dte))
,available_ids)):cljs.core.rand_nth(available_ids));
var wire_to = cljstemplate.levels.index_of(neighbour_ids,neighbour_id);
var wire_from = cljstemplate.levels.index_of(neighbour_ids,from_shape_id);
var wire = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wire_from,wire_to], null);
var new_shapes = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(shapes,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [here_id,cljs.core.constant$keyword$107,channel_id], null),cljs.core.conj,wire);
var G__28454 = neighbour_id;
var G__28455 = here_id;
var G__28456 = end_id;
var G__28457 = (travelled + (1));
var G__28458 = new_shapes;
var G__28459 = channel_id;
here_id = G__28454;
from_shape_id = G__28455;
end_id = G__28456;
travelled = G__28457;
shapes = G__28458;
channel_id = G__28459;
continue;
}
break;
}
});
cljstemplate.levels.merge_spam = (function merge_spam(shape,p__28460){
var vec__28462 = p__28460;
var channel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28462,(0),null);
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28462,(1),null);
var onto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28462,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$107,channel], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,onto], null));
});
cljstemplate.levels.mk_filter = (function mk_filter(collection){
return (function (p__28465){
var vec__28466 = p__28465;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28466,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28466,(1),null);
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
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$107], null),(function (p1__28467_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljstemplate.levels.de_dupe_channel_spam,p1__28467_SHARP_);
}));
});
cljstemplate.levels.spam_each = (function spam_each(p__28468){
var map__28476 = p__28468;
var map__28476__$1 = ((cljs.core.seq_QMARK_(map__28476))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28476):map__28476);
var shape = map__28476__$1;
var wiring = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28476__$1,cljs.core.constant$keyword$107);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28476__$1,cljs.core.constant$keyword$105);
var total_wires = (cljs.core.count(cljs.core.flatten(wiring)) / (2));
var target_wires = ((1) + cljs.core.rand_int(n));
var channel_count = cljs.core.count(wiring);
return cljstemplate.levels.de_dupe_spam(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljstemplate.levels.merge_spam,shape,(function (){var iter__4567__auto__ = ((function (total_wires,target_wires,channel_count,map__28476,map__28476__$1,shape,wiring,n){
return (function iter__28477(s__28478){
return (new cljs.core.LazySeq(null,((function (total_wires,target_wires,channel_count,map__28476,map__28476__$1,shape,wiring,n){
return (function (){
var s__28478__$1 = s__28478;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__28478__$1);
if(temp__4126__auto__){
var s__28478__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28478__$2)){
var c__4565__auto__ = cljs.core.chunk_first(s__28478__$2);
var size__4566__auto__ = cljs.core.count(c__4565__auto__);
var b__28480 = cljs.core.chunk_buffer(size__4566__auto__);
if((function (){var i__28479 = (0);
while(true){
if((i__28479 < size__4566__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4565__auto__,i__28479);
cljs.core.chunk_append(b__28480,(function (){var a = cljs.core.rand_int(n);
var b = cljs.core.rand_int(n);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int(channel_count),cljs.core.mod((a + (1)),n),b], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int(channel_count),a,b], null);
}
})());

var G__28483 = (i__28479 + (1));
i__28479 = G__28483;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28480),iter__28477(cljs.core.chunk_rest(s__28478__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28480),null);
}
} else {
var i = cljs.core.first(s__28478__$2);
return cljs.core.cons((function (){var a = cljs.core.rand_int(n);
var b = cljs.core.rand_int(n);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int(channel_count),cljs.core.mod((a + (1)),n),b], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int(channel_count),a,b], null);
}
})(),iter__28477(cljs.core.rest(s__28478__$2)));
}
} else {
return null;
}
break;
}
});})(total_wires,target_wires,channel_count,map__28476,map__28476__$1,shape,wiring,n))
,null,null));
});})(total_wires,target_wires,channel_count,map__28476,map__28476__$1,shape,wiring,n))
;
return iter__4567__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(total_wires,target_wires));
})()));
});
cljstemplate.levels.spam = (function spam(shapes){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljstemplate.levels.spam_each,shapes);
});
cljstemplate.levels.wire_paths = (function wire_paths(p__28484){
var map__28489 = p__28484;
var map__28489__$1 = ((cljs.core.seq_QMARK_(map__28489))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28489):map__28489);
var level = map__28489__$1;
var vec__28490 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28489__$1,cljs.core.constant$keyword$116);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28490,(0),null);
var vec__28491 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28489__$1,cljs.core.constant$keyword$117);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28491,(0),null);
var shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28489__$1,cljs.core.constant$keyword$109);
var channels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28489__$1,cljs.core.constant$keyword$114);
var shapes0 = cljstemplate.levels.add_distance_to_end(shapes,(0),cljs.core.PersistentHashSet.fromArray([end], true));
var first_id = cljs.core.some(cljs.core.identity,cljs.core.constant$keyword$108.cljs$core$IFn$_invoke$arity$1((function (){var G__28492 = start;
return (shapes.cljs$core$IFn$_invoke$arity$1 ? shapes.cljs$core$IFn$_invoke$arity$1(G__28492) : shapes.call(null,G__28492));
})()));
var shapes1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljstemplate.levels.add_path_to_end,first_id,start,end,cljs.core.array_seq([(0)], 0)),shapes0,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(channels)));
var shapes2 = cljstemplate.levels.spam(shapes1);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(level,cljs.core.constant$keyword$109,shapes2);
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
cljstemplate.levels.white_rgb = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(125),(125),(125)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(250),(250)], null)], null);
cljstemplate.levels.white_rgb_3 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(0),(100)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(175),(175),(255)], null)], null);
cljstemplate.levels.all_colours = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljstemplate.levels.orange_blue,cljstemplate.levels.orange_blue_3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljstemplate.levels.purple_green,cljstemplate.levels.purple_green_3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljstemplate.levels.black_cmy,cljstemplate.levels.black_cmy_3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljstemplate.levels.white_rgb,cljstemplate.levels.white_rgb_3], null)], null);
cljstemplate.levels.tutorial_levels = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljstemplate.levels.add_msg(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.mk_level(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),cljstemplate.constance.PI], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(6)], null),cljstemplate.levels.orange_blue,cljstemplate.levels.orange_blue_1),(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(2),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(3),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null)], null)),(4),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(5),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),"Click on shapes to rotate them. Form a path."),cljstemplate.levels.add_msg(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.mk_level(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),cljstemplate.constance.PI], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(9)], null),cljstemplate.levels.orange_blue,cljstemplate.levels.orange_blue_2),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null),cljs.core.PersistentVector.EMPTY], null)),(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null),cljs.core.PersistentVector.EMPTY], null)),(5),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null)], null)),(6),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null)], null)),(7),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null)], null)),(8),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),"Sometimes you need to create more than one path."),cljstemplate.levels.add_msg(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.mk_level(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),cljstemplate.constance.PI], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null)], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(12)], null),cljstemplate.levels.orange_blue,cljstemplate.levels.orange_blue_3),(1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null),cljs.core.PersistentVector.EMPTY], null)),(4),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null)),(5),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null)),(6),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null)], null)),(7),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),cljs.core.PersistentVector.EMPTY], null)),(8),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null)], null)),(9),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(10),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null)], null)),(11),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),"There may be as many as three paths."),cljstemplate.levels.add_msg(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.wire(cljstemplate.levels.mk_level(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(cljstemplate.constance.PI / (2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),cljs.core.PersistentVector.EMPTY], null)], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),cljs.core.PersistentVector.EMPTY], null)], null)], null)], null)], null)], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(16)], null),cljstemplate.levels.orange_blue,cljstemplate.levels.orange_blue_3),(5),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(6),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(7),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null),cljs.core.PersistentVector.EMPTY], null)),(8),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null)),(9),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null)),(10),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null)], null)),(11),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),cljs.core.PersistentVector.EMPTY], null)),(12),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null)], null)),(13),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(14),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null)], null)),(15),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(18),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null)], null)),"You don't always have to use all the pieces.")], null);
cljstemplate.levels.unfinished_levels = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljstemplate.levels.mk_level,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),cljstemplate.constance.PI], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(2)], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljstemplate.levels.mk_level,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),cljstemplate.constance.PI], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),cljs.core.PersistentVector.EMPTY,(6),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),cljs.core.PersistentVector.EMPTY,(6),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),cljs.core.PersistentVector.EMPTY], null),(6),cljs.core.PersistentVector.EMPTY], null),(6),cljs.core.PersistentVector.EMPTY,(6),cljs.core.PersistentVector.EMPTY], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(5)], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljstemplate.levels.mk_level,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),cljstemplate.constance.PI], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),cljs.core.PersistentVector.EMPTY,(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(3),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(6),cljs.core.PersistentVector.EMPTY], null)], null),(3),cljs.core.PersistentVector.EMPTY], null)], null),(6),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),cljs.core.PersistentVector.EMPTY,(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(3),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),cljs.core.PersistentVector.EMPTY], null),(3),cljs.core.PersistentVector.EMPTY], null)], null)], null),(6),cljs.core.PersistentVector.EMPTY], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(6)], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljstemplate.levels.mk_level,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),cljstemplate.constance.PI], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null)], null)], null),(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),cljs.core.PersistentVector.EMPTY], null),(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),cljs.core.PersistentVector.EMPTY], null),(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),cljs.core.PersistentVector.EMPTY], null),(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),cljs.core.PersistentVector.EMPTY], null),(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),cljs.core.PersistentVector.EMPTY], null)], null),(3),cljs.core.PersistentVector.EMPTY], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),cljs.core.PersistentVector.EMPTY], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(4)], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljstemplate.levels.mk_level,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),cljstemplate.constance.PI], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(8),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY,(8),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY,(8),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null),(8),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY,(8),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY,(8),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(5)], null))], null);
cljstemplate.levels.add_random_msg = (function add_random_msg(level){
return cljstemplate.levels.add_msg(level,cljs.core.rand_nth(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Good luck!","Wow!","Awesome!","You're doing really well!","Keep going!","May the hugs of a thousand kittens be with you.","<img src=\"https://placekitten.com/g/300/300\" width=\"50px\" height=\"50px\" />"], null)));
});
cljstemplate.levels.finish = (function finish(level,channel_count,p__28493){
var vec__28497 = p__28493;
var colours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28497,(0),null);
var channels = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28497,(1),null);
return cljstemplate.levels.add_random_msg(cljstemplate.levels.wire_paths((function (){var G__28498 = colours;
var G__28499 = cljs.core.take.cljs$core$IFn$_invoke$arity$2(channel_count,channels);
return (level.cljs$core$IFn$_invoke$arity$2 ? level.cljs$core$IFn$_invoke$arity$2(G__28498,G__28499) : level.call(null,G__28498,G__28499));
})()));
});
cljstemplate.levels.finish_level = (function finish_level(n){
var index = cljs.core.mod(((n / (3)) | (0)),cljs.core.count(cljstemplate.levels.unfinished_levels));
var channel_count = (cljs.core.mod(n,(3)) + (1));
var level = (function (){var G__28501 = index;
return (cljstemplate.levels.unfinished_levels.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.levels.unfinished_levels.cljs$core$IFn$_invoke$arity$1(G__28501) : cljstemplate.levels.unfinished_levels.call(null,G__28501));
})();
var colours = cljs.core.rand_nth(cljstemplate.levels.all_colours);
return cljstemplate.levels.finish(level,channel_count,colours);
});
cljstemplate.levels.get_level = (function get_level(n){
var t = cljs.core.count(cljstemplate.levels.tutorial_levels);
if((n < t)){
var G__28503 = n;
return (cljstemplate.levels.tutorial_levels.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.levels.tutorial_levels.cljs$core$IFn$_invoke$arity$1(G__28503) : cljstemplate.levels.tutorial_levels.call(null,G__28503));
} else {
return cljstemplate.levels.finish_level((n - t));
}
});
