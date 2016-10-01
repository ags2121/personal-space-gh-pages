// Compiled by ClojureScript 1.9.89 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__23603__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__23603__auto__){
return or__23603__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__23603__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30006_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30006_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__30011 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30012 = null;
var count__30013 = (0);
var i__30014 = (0);
while(true){
if((i__30014 < count__30013)){
var n = cljs.core._nth.call(null,chunk__30012,i__30014);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30015 = seq__30011;
var G__30016 = chunk__30012;
var G__30017 = count__30013;
var G__30018 = (i__30014 + (1));
seq__30011 = G__30015;
chunk__30012 = G__30016;
count__30013 = G__30017;
i__30014 = G__30018;
continue;
} else {
var temp__6369__auto__ = cljs.core.seq.call(null,seq__30011);
if(temp__6369__auto__){
var seq__30011__$1 = temp__6369__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30011__$1)){
var c__24506__auto__ = cljs.core.chunk_first.call(null,seq__30011__$1);
var G__30019 = cljs.core.chunk_rest.call(null,seq__30011__$1);
var G__30020 = c__24506__auto__;
var G__30021 = cljs.core.count.call(null,c__24506__auto__);
var G__30022 = (0);
seq__30011 = G__30019;
chunk__30012 = G__30020;
count__30013 = G__30021;
i__30014 = G__30022;
continue;
} else {
var n = cljs.core.first.call(null,seq__30011__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30023 = cljs.core.next.call(null,seq__30011__$1);
var G__30024 = null;
var G__30025 = (0);
var G__30026 = (0);
seq__30011 = G__30023;
chunk__30012 = G__30024;
count__30013 = G__30025;
i__30014 = G__30026;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30077_30088 = cljs.core.seq.call(null,deps);
var chunk__30078_30089 = null;
var count__30079_30090 = (0);
var i__30080_30091 = (0);
while(true){
if((i__30080_30091 < count__30079_30090)){
var dep_30092 = cljs.core._nth.call(null,chunk__30078_30089,i__30080_30091);
topo_sort_helper_STAR_.call(null,dep_30092,(depth + (1)),state);

var G__30093 = seq__30077_30088;
var G__30094 = chunk__30078_30089;
var G__30095 = count__30079_30090;
var G__30096 = (i__30080_30091 + (1));
seq__30077_30088 = G__30093;
chunk__30078_30089 = G__30094;
count__30079_30090 = G__30095;
i__30080_30091 = G__30096;
continue;
} else {
var temp__6369__auto___30097 = cljs.core.seq.call(null,seq__30077_30088);
if(temp__6369__auto___30097){
var seq__30077_30098__$1 = temp__6369__auto___30097;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30077_30098__$1)){
var c__24506__auto___30099 = cljs.core.chunk_first.call(null,seq__30077_30098__$1);
var G__30100 = cljs.core.chunk_rest.call(null,seq__30077_30098__$1);
var G__30101 = c__24506__auto___30099;
var G__30102 = cljs.core.count.call(null,c__24506__auto___30099);
var G__30103 = (0);
seq__30077_30088 = G__30100;
chunk__30078_30089 = G__30101;
count__30079_30090 = G__30102;
i__30080_30091 = G__30103;
continue;
} else {
var dep_30104 = cljs.core.first.call(null,seq__30077_30098__$1);
topo_sort_helper_STAR_.call(null,dep_30104,(depth + (1)),state);

var G__30105 = cljs.core.next.call(null,seq__30077_30098__$1);
var G__30106 = null;
var G__30107 = (0);
var G__30108 = (0);
seq__30077_30088 = G__30105;
chunk__30078_30089 = G__30106;
count__30079_30090 = G__30107;
i__30080_30091 = G__30108;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30081){
var vec__30085 = p__30081;
var seq__30086 = cljs.core.seq.call(null,vec__30085);
var first__30087 = cljs.core.first.call(null,seq__30086);
var seq__30086__$1 = cljs.core.next.call(null,seq__30086);
var x = first__30087;
var xs = seq__30086__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30085,seq__30086,first__30087,seq__30086__$1,x,xs,get_deps__$1){
return (function (p1__30027_SHARP_){
return clojure.set.difference.call(null,p1__30027_SHARP_,x);
});})(vec__30085,seq__30086,first__30087,seq__30086__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30121 = cljs.core.seq.call(null,provides);
var chunk__30122 = null;
var count__30123 = (0);
var i__30124 = (0);
while(true){
if((i__30124 < count__30123)){
var prov = cljs.core._nth.call(null,chunk__30122,i__30124);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30125_30133 = cljs.core.seq.call(null,requires);
var chunk__30126_30134 = null;
var count__30127_30135 = (0);
var i__30128_30136 = (0);
while(true){
if((i__30128_30136 < count__30127_30135)){
var req_30137 = cljs.core._nth.call(null,chunk__30126_30134,i__30128_30136);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30137,prov);

var G__30138 = seq__30125_30133;
var G__30139 = chunk__30126_30134;
var G__30140 = count__30127_30135;
var G__30141 = (i__30128_30136 + (1));
seq__30125_30133 = G__30138;
chunk__30126_30134 = G__30139;
count__30127_30135 = G__30140;
i__30128_30136 = G__30141;
continue;
} else {
var temp__6369__auto___30142 = cljs.core.seq.call(null,seq__30125_30133);
if(temp__6369__auto___30142){
var seq__30125_30143__$1 = temp__6369__auto___30142;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30125_30143__$1)){
var c__24506__auto___30144 = cljs.core.chunk_first.call(null,seq__30125_30143__$1);
var G__30145 = cljs.core.chunk_rest.call(null,seq__30125_30143__$1);
var G__30146 = c__24506__auto___30144;
var G__30147 = cljs.core.count.call(null,c__24506__auto___30144);
var G__30148 = (0);
seq__30125_30133 = G__30145;
chunk__30126_30134 = G__30146;
count__30127_30135 = G__30147;
i__30128_30136 = G__30148;
continue;
} else {
var req_30149 = cljs.core.first.call(null,seq__30125_30143__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30149,prov);

var G__30150 = cljs.core.next.call(null,seq__30125_30143__$1);
var G__30151 = null;
var G__30152 = (0);
var G__30153 = (0);
seq__30125_30133 = G__30150;
chunk__30126_30134 = G__30151;
count__30127_30135 = G__30152;
i__30128_30136 = G__30153;
continue;
}
} else {
}
}
break;
}

var G__30154 = seq__30121;
var G__30155 = chunk__30122;
var G__30156 = count__30123;
var G__30157 = (i__30124 + (1));
seq__30121 = G__30154;
chunk__30122 = G__30155;
count__30123 = G__30156;
i__30124 = G__30157;
continue;
} else {
var temp__6369__auto__ = cljs.core.seq.call(null,seq__30121);
if(temp__6369__auto__){
var seq__30121__$1 = temp__6369__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30121__$1)){
var c__24506__auto__ = cljs.core.chunk_first.call(null,seq__30121__$1);
var G__30158 = cljs.core.chunk_rest.call(null,seq__30121__$1);
var G__30159 = c__24506__auto__;
var G__30160 = cljs.core.count.call(null,c__24506__auto__);
var G__30161 = (0);
seq__30121 = G__30158;
chunk__30122 = G__30159;
count__30123 = G__30160;
i__30124 = G__30161;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30121__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30129_30162 = cljs.core.seq.call(null,requires);
var chunk__30130_30163 = null;
var count__30131_30164 = (0);
var i__30132_30165 = (0);
while(true){
if((i__30132_30165 < count__30131_30164)){
var req_30166 = cljs.core._nth.call(null,chunk__30130_30163,i__30132_30165);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30166,prov);

var G__30167 = seq__30129_30162;
var G__30168 = chunk__30130_30163;
var G__30169 = count__30131_30164;
var G__30170 = (i__30132_30165 + (1));
seq__30129_30162 = G__30167;
chunk__30130_30163 = G__30168;
count__30131_30164 = G__30169;
i__30132_30165 = G__30170;
continue;
} else {
var temp__6369__auto___30171__$1 = cljs.core.seq.call(null,seq__30129_30162);
if(temp__6369__auto___30171__$1){
var seq__30129_30172__$1 = temp__6369__auto___30171__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30129_30172__$1)){
var c__24506__auto___30173 = cljs.core.chunk_first.call(null,seq__30129_30172__$1);
var G__30174 = cljs.core.chunk_rest.call(null,seq__30129_30172__$1);
var G__30175 = c__24506__auto___30173;
var G__30176 = cljs.core.count.call(null,c__24506__auto___30173);
var G__30177 = (0);
seq__30129_30162 = G__30174;
chunk__30130_30163 = G__30175;
count__30131_30164 = G__30176;
i__30132_30165 = G__30177;
continue;
} else {
var req_30178 = cljs.core.first.call(null,seq__30129_30172__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30178,prov);

var G__30179 = cljs.core.next.call(null,seq__30129_30172__$1);
var G__30180 = null;
var G__30181 = (0);
var G__30182 = (0);
seq__30129_30162 = G__30179;
chunk__30130_30163 = G__30180;
count__30131_30164 = G__30181;
i__30132_30165 = G__30182;
continue;
}
} else {
}
}
break;
}

var G__30183 = cljs.core.next.call(null,seq__30121__$1);
var G__30184 = null;
var G__30185 = (0);
var G__30186 = (0);
seq__30121 = G__30183;
chunk__30122 = G__30184;
count__30123 = G__30185;
i__30124 = G__30186;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30191_30195 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30192_30196 = null;
var count__30193_30197 = (0);
var i__30194_30198 = (0);
while(true){
if((i__30194_30198 < count__30193_30197)){
var ns_30199 = cljs.core._nth.call(null,chunk__30192_30196,i__30194_30198);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30199);

var G__30200 = seq__30191_30195;
var G__30201 = chunk__30192_30196;
var G__30202 = count__30193_30197;
var G__30203 = (i__30194_30198 + (1));
seq__30191_30195 = G__30200;
chunk__30192_30196 = G__30201;
count__30193_30197 = G__30202;
i__30194_30198 = G__30203;
continue;
} else {
var temp__6369__auto___30204 = cljs.core.seq.call(null,seq__30191_30195);
if(temp__6369__auto___30204){
var seq__30191_30205__$1 = temp__6369__auto___30204;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30191_30205__$1)){
var c__24506__auto___30206 = cljs.core.chunk_first.call(null,seq__30191_30205__$1);
var G__30207 = cljs.core.chunk_rest.call(null,seq__30191_30205__$1);
var G__30208 = c__24506__auto___30206;
var G__30209 = cljs.core.count.call(null,c__24506__auto___30206);
var G__30210 = (0);
seq__30191_30195 = G__30207;
chunk__30192_30196 = G__30208;
count__30193_30197 = G__30209;
i__30194_30198 = G__30210;
continue;
} else {
var ns_30211 = cljs.core.first.call(null,seq__30191_30205__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30211);

var G__30212 = cljs.core.next.call(null,seq__30191_30205__$1);
var G__30213 = null;
var G__30214 = (0);
var G__30215 = (0);
seq__30191_30195 = G__30212;
chunk__30192_30196 = G__30213;
count__30193_30197 = G__30214;
i__30194_30198 = G__30215;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__23603__auto__ = goog.require__;
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__30216__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30216 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30217__i = 0, G__30217__a = new Array(arguments.length -  0);
while (G__30217__i < G__30217__a.length) {G__30217__a[G__30217__i] = arguments[G__30217__i + 0]; ++G__30217__i;}
  args = new cljs.core.IndexedSeq(G__30217__a,0);
} 
return G__30216__delegate.call(this,args);};
G__30216.cljs$lang$maxFixedArity = 0;
G__30216.cljs$lang$applyTo = (function (arglist__30218){
var args = cljs.core.seq(arglist__30218);
return G__30216__delegate(args);
});
G__30216.cljs$core$IFn$_invoke$arity$variadic = G__30216__delegate;
return G__30216;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30220 = cljs.core._EQ_;
var expr__30221 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30220.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30221))){
var path_parts = ((function (pred__30220,expr__30221){
return (function (p1__30219_SHARP_){
return clojure.string.split.call(null,p1__30219_SHARP_,/[\/\\]/);
});})(pred__30220,expr__30221))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30220,expr__30221){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30223){if((e30223 instanceof Error)){
var e = e30223;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30223;

}
}})());
});
;})(path_parts,sep,root,pred__30220,expr__30221))
} else {
if(cljs.core.truth_(pred__30220.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30221))){
return ((function (pred__30220,expr__30221){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__30220,expr__30221){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30220,expr__30221))
);

return deferred.addErrback(((function (deferred,pred__30220,expr__30221){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30220,expr__30221))
);
});
;})(pred__30220,expr__30221))
} else {
return ((function (pred__30220,expr__30221){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30220,expr__30221))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30224,callback){
var map__30227 = p__30224;
var map__30227__$1 = ((((!((map__30227 == null)))?((((map__30227.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30227.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30227):map__30227);
var file_msg = map__30227__$1;
var request_url = cljs.core.get.call(null,map__30227__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30227,map__30227__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30227,map__30227__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__26206__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26206__auto__){
return (function (){
var f__26207__auto__ = (function (){var switch__26183__auto__ = ((function (c__26206__auto__){
return (function (state_30251){
var state_val_30252 = (state_30251[(1)]);
if((state_val_30252 === (7))){
var inst_30247 = (state_30251[(2)]);
var state_30251__$1 = state_30251;
var statearr_30253_30273 = state_30251__$1;
(statearr_30253_30273[(2)] = inst_30247);

(statearr_30253_30273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (1))){
var state_30251__$1 = state_30251;
var statearr_30254_30274 = state_30251__$1;
(statearr_30254_30274[(2)] = null);

(statearr_30254_30274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (4))){
var inst_30231 = (state_30251[(7)]);
var inst_30231__$1 = (state_30251[(2)]);
var state_30251__$1 = (function (){var statearr_30255 = state_30251;
(statearr_30255[(7)] = inst_30231__$1);

return statearr_30255;
})();
if(cljs.core.truth_(inst_30231__$1)){
var statearr_30256_30275 = state_30251__$1;
(statearr_30256_30275[(1)] = (5));

} else {
var statearr_30257_30276 = state_30251__$1;
(statearr_30257_30276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (6))){
var state_30251__$1 = state_30251;
var statearr_30258_30277 = state_30251__$1;
(statearr_30258_30277[(2)] = null);

(statearr_30258_30277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (3))){
var inst_30249 = (state_30251[(2)]);
var state_30251__$1 = state_30251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30251__$1,inst_30249);
} else {
if((state_val_30252 === (2))){
var state_30251__$1 = state_30251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30251__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30252 === (11))){
var inst_30243 = (state_30251[(2)]);
var state_30251__$1 = (function (){var statearr_30259 = state_30251;
(statearr_30259[(8)] = inst_30243);

return statearr_30259;
})();
var statearr_30260_30278 = state_30251__$1;
(statearr_30260_30278[(2)] = null);

(statearr_30260_30278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (9))){
var inst_30235 = (state_30251[(9)]);
var inst_30237 = (state_30251[(10)]);
var inst_30239 = inst_30237.call(null,inst_30235);
var state_30251__$1 = state_30251;
var statearr_30261_30279 = state_30251__$1;
(statearr_30261_30279[(2)] = inst_30239);

(statearr_30261_30279[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (5))){
var inst_30231 = (state_30251[(7)]);
var inst_30233 = figwheel.client.file_reloading.blocking_load.call(null,inst_30231);
var state_30251__$1 = state_30251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30251__$1,(8),inst_30233);
} else {
if((state_val_30252 === (10))){
var inst_30235 = (state_30251[(9)]);
var inst_30241 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30235);
var state_30251__$1 = state_30251;
var statearr_30262_30280 = state_30251__$1;
(statearr_30262_30280[(2)] = inst_30241);

(statearr_30262_30280[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (8))){
var inst_30231 = (state_30251[(7)]);
var inst_30237 = (state_30251[(10)]);
var inst_30235 = (state_30251[(2)]);
var inst_30236 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30237__$1 = cljs.core.get.call(null,inst_30236,inst_30231);
var state_30251__$1 = (function (){var statearr_30263 = state_30251;
(statearr_30263[(9)] = inst_30235);

(statearr_30263[(10)] = inst_30237__$1);

return statearr_30263;
})();
if(cljs.core.truth_(inst_30237__$1)){
var statearr_30264_30281 = state_30251__$1;
(statearr_30264_30281[(1)] = (9));

} else {
var statearr_30265_30282 = state_30251__$1;
(statearr_30265_30282[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26206__auto__))
;
return ((function (switch__26183__auto__,c__26206__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26184__auto__ = null;
var figwheel$client$file_reloading$state_machine__26184__auto____0 = (function (){
var statearr_30269 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30269[(0)] = figwheel$client$file_reloading$state_machine__26184__auto__);

(statearr_30269[(1)] = (1));

return statearr_30269;
});
var figwheel$client$file_reloading$state_machine__26184__auto____1 = (function (state_30251){
while(true){
var ret_value__26185__auto__ = (function (){try{while(true){
var result__26186__auto__ = switch__26183__auto__.call(null,state_30251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26186__auto__;
}
break;
}
}catch (e30270){if((e30270 instanceof Object)){
var ex__26187__auto__ = e30270;
var statearr_30271_30283 = state_30251;
(statearr_30271_30283[(5)] = ex__26187__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30284 = state_30251;
state_30251 = G__30284;
continue;
} else {
return ret_value__26185__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26184__auto__ = function(state_30251){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26184__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26184__auto____1.call(this,state_30251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26184__auto____0;
figwheel$client$file_reloading$state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26184__auto____1;
return figwheel$client$file_reloading$state_machine__26184__auto__;
})()
;})(switch__26183__auto__,c__26206__auto__))
})();
var state__26208__auto__ = (function (){var statearr_30272 = f__26207__auto__.call(null);
(statearr_30272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26206__auto__);

return statearr_30272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26208__auto__);
});})(c__26206__auto__))
);

return c__26206__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30285,callback){
var map__30288 = p__30285;
var map__30288__$1 = ((((!((map__30288 == null)))?((((map__30288.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30288.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30288):map__30288);
var file_msg = map__30288__$1;
var namespace = cljs.core.get.call(null,map__30288__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30288,map__30288__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30288,map__30288__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30290){
var map__30293 = p__30290;
var map__30293__$1 = ((((!((map__30293 == null)))?((((map__30293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30293):map__30293);
var file_msg = map__30293__$1;
var namespace = cljs.core.get.call(null,map__30293__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__23591__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__23591__auto__){
var or__23603__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
var or__23603__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__23603__auto____$1)){
return or__23603__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__23591__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30295,callback){
var map__30298 = p__30295;
var map__30298__$1 = ((((!((map__30298 == null)))?((((map__30298.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30298.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30298):map__30298);
var file_msg = map__30298__$1;
var request_url = cljs.core.get.call(null,map__30298__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30298__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__26206__auto___30402 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26206__auto___30402,out){
return (function (){
var f__26207__auto__ = (function (){var switch__26183__auto__ = ((function (c__26206__auto___30402,out){
return (function (state_30384){
var state_val_30385 = (state_30384[(1)]);
if((state_val_30385 === (1))){
var inst_30358 = cljs.core.seq.call(null,files);
var inst_30359 = cljs.core.first.call(null,inst_30358);
var inst_30360 = cljs.core.next.call(null,inst_30358);
var inst_30361 = files;
var state_30384__$1 = (function (){var statearr_30386 = state_30384;
(statearr_30386[(7)] = inst_30359);

(statearr_30386[(8)] = inst_30361);

(statearr_30386[(9)] = inst_30360);

return statearr_30386;
})();
var statearr_30387_30403 = state_30384__$1;
(statearr_30387_30403[(2)] = null);

(statearr_30387_30403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30385 === (2))){
var inst_30367 = (state_30384[(10)]);
var inst_30361 = (state_30384[(8)]);
var inst_30366 = cljs.core.seq.call(null,inst_30361);
var inst_30367__$1 = cljs.core.first.call(null,inst_30366);
var inst_30368 = cljs.core.next.call(null,inst_30366);
var inst_30369 = (inst_30367__$1 == null);
var inst_30370 = cljs.core.not.call(null,inst_30369);
var state_30384__$1 = (function (){var statearr_30388 = state_30384;
(statearr_30388[(11)] = inst_30368);

(statearr_30388[(10)] = inst_30367__$1);

return statearr_30388;
})();
if(inst_30370){
var statearr_30389_30404 = state_30384__$1;
(statearr_30389_30404[(1)] = (4));

} else {
var statearr_30390_30405 = state_30384__$1;
(statearr_30390_30405[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30385 === (3))){
var inst_30382 = (state_30384[(2)]);
var state_30384__$1 = state_30384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30384__$1,inst_30382);
} else {
if((state_val_30385 === (4))){
var inst_30367 = (state_30384[(10)]);
var inst_30372 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30367);
var state_30384__$1 = state_30384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30384__$1,(7),inst_30372);
} else {
if((state_val_30385 === (5))){
var inst_30378 = cljs.core.async.close_BANG_.call(null,out);
var state_30384__$1 = state_30384;
var statearr_30391_30406 = state_30384__$1;
(statearr_30391_30406[(2)] = inst_30378);

(statearr_30391_30406[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30385 === (6))){
var inst_30380 = (state_30384[(2)]);
var state_30384__$1 = state_30384;
var statearr_30392_30407 = state_30384__$1;
(statearr_30392_30407[(2)] = inst_30380);

(statearr_30392_30407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30385 === (7))){
var inst_30368 = (state_30384[(11)]);
var inst_30374 = (state_30384[(2)]);
var inst_30375 = cljs.core.async.put_BANG_.call(null,out,inst_30374);
var inst_30361 = inst_30368;
var state_30384__$1 = (function (){var statearr_30393 = state_30384;
(statearr_30393[(12)] = inst_30375);

(statearr_30393[(8)] = inst_30361);

return statearr_30393;
})();
var statearr_30394_30408 = state_30384__$1;
(statearr_30394_30408[(2)] = null);

(statearr_30394_30408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__26206__auto___30402,out))
;
return ((function (switch__26183__auto__,c__26206__auto___30402,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26184__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26184__auto____0 = (function (){
var statearr_30398 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30398[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26184__auto__);

(statearr_30398[(1)] = (1));

return statearr_30398;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26184__auto____1 = (function (state_30384){
while(true){
var ret_value__26185__auto__ = (function (){try{while(true){
var result__26186__auto__ = switch__26183__auto__.call(null,state_30384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26186__auto__;
}
break;
}
}catch (e30399){if((e30399 instanceof Object)){
var ex__26187__auto__ = e30399;
var statearr_30400_30409 = state_30384;
(statearr_30400_30409[(5)] = ex__26187__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30410 = state_30384;
state_30384 = G__30410;
continue;
} else {
return ret_value__26185__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26184__auto__ = function(state_30384){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26184__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26184__auto____1.call(this,state_30384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26184__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26184__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26184__auto__;
})()
;})(switch__26183__auto__,c__26206__auto___30402,out))
})();
var state__26208__auto__ = (function (){var statearr_30401 = f__26207__auto__.call(null);
(statearr_30401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26206__auto___30402);

return statearr_30401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26208__auto__);
});})(c__26206__auto___30402,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30411,opts){
var map__30415 = p__30411;
var map__30415__$1 = ((((!((map__30415 == null)))?((((map__30415.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30415.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30415):map__30415);
var eval_body__$1 = cljs.core.get.call(null,map__30415__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30415__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__23591__auto__ = eval_body__$1;
if(cljs.core.truth_(and__23591__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__23591__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30417){var e = e30417;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__6367__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30418_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30418_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__6367__auto__)){
var file_msg = temp__6367__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30427){
var vec__30428 = p__30427;
var k = cljs.core.nth.call(null,vec__30428,(0),null);
var v = cljs.core.nth.call(null,vec__30428,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30431){
var vec__30432 = p__30431;
var k = cljs.core.nth.call(null,vec__30432,(0),null);
var v = cljs.core.nth.call(null,vec__30432,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30438,p__30439){
var map__30686 = p__30438;
var map__30686__$1 = ((((!((map__30686 == null)))?((((map__30686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30686):map__30686);
var opts = map__30686__$1;
var before_jsload = cljs.core.get.call(null,map__30686__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30686__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30686__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30687 = p__30439;
var map__30687__$1 = ((((!((map__30687 == null)))?((((map__30687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30687):map__30687);
var msg = map__30687__$1;
var files = cljs.core.get.call(null,map__30687__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30687__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30687__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26206__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26206__auto__,map__30686,map__30686__$1,opts,before_jsload,on_jsload,reload_dependents,map__30687,map__30687__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26207__auto__ = (function (){var switch__26183__auto__ = ((function (c__26206__auto__,map__30686,map__30686__$1,opts,before_jsload,on_jsload,reload_dependents,map__30687,map__30687__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30840){
var state_val_30841 = (state_30840[(1)]);
if((state_val_30841 === (7))){
var inst_30704 = (state_30840[(7)]);
var inst_30702 = (state_30840[(8)]);
var inst_30703 = (state_30840[(9)]);
var inst_30701 = (state_30840[(10)]);
var inst_30709 = cljs.core._nth.call(null,inst_30702,inst_30704);
var inst_30710 = figwheel.client.file_reloading.eval_body.call(null,inst_30709,opts);
var inst_30711 = (inst_30704 + (1));
var tmp30842 = inst_30702;
var tmp30843 = inst_30703;
var tmp30844 = inst_30701;
var inst_30701__$1 = tmp30844;
var inst_30702__$1 = tmp30842;
var inst_30703__$1 = tmp30843;
var inst_30704__$1 = inst_30711;
var state_30840__$1 = (function (){var statearr_30845 = state_30840;
(statearr_30845[(7)] = inst_30704__$1);

(statearr_30845[(8)] = inst_30702__$1);

(statearr_30845[(11)] = inst_30710);

(statearr_30845[(9)] = inst_30703__$1);

(statearr_30845[(10)] = inst_30701__$1);

return statearr_30845;
})();
var statearr_30846_30932 = state_30840__$1;
(statearr_30846_30932[(2)] = null);

(statearr_30846_30932[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (20))){
var inst_30744 = (state_30840[(12)]);
var inst_30752 = figwheel.client.file_reloading.sort_files.call(null,inst_30744);
var state_30840__$1 = state_30840;
var statearr_30847_30933 = state_30840__$1;
(statearr_30847_30933[(2)] = inst_30752);

(statearr_30847_30933[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (27))){
var state_30840__$1 = state_30840;
var statearr_30848_30934 = state_30840__$1;
(statearr_30848_30934[(2)] = null);

(statearr_30848_30934[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (1))){
var inst_30693 = (state_30840[(13)]);
var inst_30690 = before_jsload.call(null,files);
var inst_30691 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30692 = (function (){return ((function (inst_30693,inst_30690,inst_30691,state_val_30841,c__26206__auto__,map__30686,map__30686__$1,opts,before_jsload,on_jsload,reload_dependents,map__30687,map__30687__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30435_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30435_SHARP_);
});
;})(inst_30693,inst_30690,inst_30691,state_val_30841,c__26206__auto__,map__30686,map__30686__$1,opts,before_jsload,on_jsload,reload_dependents,map__30687,map__30687__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30693__$1 = cljs.core.filter.call(null,inst_30692,files);
var inst_30694 = cljs.core.not_empty.call(null,inst_30693__$1);
var state_30840__$1 = (function (){var statearr_30849 = state_30840;
(statearr_30849[(14)] = inst_30691);

(statearr_30849[(13)] = inst_30693__$1);

(statearr_30849[(15)] = inst_30690);

return statearr_30849;
})();
if(cljs.core.truth_(inst_30694)){
var statearr_30850_30935 = state_30840__$1;
(statearr_30850_30935[(1)] = (2));

} else {
var statearr_30851_30936 = state_30840__$1;
(statearr_30851_30936[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (24))){
var state_30840__$1 = state_30840;
var statearr_30852_30937 = state_30840__$1;
(statearr_30852_30937[(2)] = null);

(statearr_30852_30937[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (39))){
var inst_30794 = (state_30840[(16)]);
var state_30840__$1 = state_30840;
var statearr_30853_30938 = state_30840__$1;
(statearr_30853_30938[(2)] = inst_30794);

(statearr_30853_30938[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (46))){
var inst_30835 = (state_30840[(2)]);
var state_30840__$1 = state_30840;
var statearr_30854_30939 = state_30840__$1;
(statearr_30854_30939[(2)] = inst_30835);

(statearr_30854_30939[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (4))){
var inst_30738 = (state_30840[(2)]);
var inst_30739 = cljs.core.List.EMPTY;
var inst_30740 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30739);
var inst_30741 = (function (){return ((function (inst_30738,inst_30739,inst_30740,state_val_30841,c__26206__auto__,map__30686,map__30686__$1,opts,before_jsload,on_jsload,reload_dependents,map__30687,map__30687__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30436_SHARP_){
var and__23591__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30436_SHARP_);
if(cljs.core.truth_(and__23591__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30436_SHARP_));
} else {
return and__23591__auto__;
}
});
;})(inst_30738,inst_30739,inst_30740,state_val_30841,c__26206__auto__,map__30686,map__30686__$1,opts,before_jsload,on_jsload,reload_dependents,map__30687,map__30687__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30742 = cljs.core.filter.call(null,inst_30741,files);
var inst_30743 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30744 = cljs.core.concat.call(null,inst_30742,inst_30743);
var state_30840__$1 = (function (){var statearr_30855 = state_30840;
(statearr_30855[(17)] = inst_30740);

(statearr_30855[(12)] = inst_30744);

(statearr_30855[(18)] = inst_30738);

return statearr_30855;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30856_30940 = state_30840__$1;
(statearr_30856_30940[(1)] = (16));

} else {
var statearr_30857_30941 = state_30840__$1;
(statearr_30857_30941[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (15))){
var inst_30728 = (state_30840[(2)]);
var state_30840__$1 = state_30840;
var statearr_30858_30942 = state_30840__$1;
(statearr_30858_30942[(2)] = inst_30728);

(statearr_30858_30942[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (21))){
var inst_30754 = (state_30840[(19)]);
var inst_30754__$1 = (state_30840[(2)]);
var inst_30755 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30754__$1);
var state_30840__$1 = (function (){var statearr_30859 = state_30840;
(statearr_30859[(19)] = inst_30754__$1);

return statearr_30859;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30840__$1,(22),inst_30755);
} else {
if((state_val_30841 === (31))){
var inst_30838 = (state_30840[(2)]);
var state_30840__$1 = state_30840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30840__$1,inst_30838);
} else {
if((state_val_30841 === (32))){
var inst_30794 = (state_30840[(16)]);
var inst_30799 = inst_30794.cljs$lang$protocol_mask$partition0$;
var inst_30800 = (inst_30799 & (64));
var inst_30801 = inst_30794.cljs$core$ISeq$;
var inst_30802 = (inst_30800) || (inst_30801);
var state_30840__$1 = state_30840;
if(cljs.core.truth_(inst_30802)){
var statearr_30860_30943 = state_30840__$1;
(statearr_30860_30943[(1)] = (35));

} else {
var statearr_30861_30944 = state_30840__$1;
(statearr_30861_30944[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (40))){
var inst_30815 = (state_30840[(20)]);
var inst_30814 = (state_30840[(2)]);
var inst_30815__$1 = cljs.core.get.call(null,inst_30814,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30816 = cljs.core.get.call(null,inst_30814,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30817 = cljs.core.not_empty.call(null,inst_30815__$1);
var state_30840__$1 = (function (){var statearr_30862 = state_30840;
(statearr_30862[(21)] = inst_30816);

(statearr_30862[(20)] = inst_30815__$1);

return statearr_30862;
})();
if(cljs.core.truth_(inst_30817)){
var statearr_30863_30945 = state_30840__$1;
(statearr_30863_30945[(1)] = (41));

} else {
var statearr_30864_30946 = state_30840__$1;
(statearr_30864_30946[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (33))){
var state_30840__$1 = state_30840;
var statearr_30865_30947 = state_30840__$1;
(statearr_30865_30947[(2)] = false);

(statearr_30865_30947[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (13))){
var inst_30714 = (state_30840[(22)]);
var inst_30718 = cljs.core.chunk_first.call(null,inst_30714);
var inst_30719 = cljs.core.chunk_rest.call(null,inst_30714);
var inst_30720 = cljs.core.count.call(null,inst_30718);
var inst_30701 = inst_30719;
var inst_30702 = inst_30718;
var inst_30703 = inst_30720;
var inst_30704 = (0);
var state_30840__$1 = (function (){var statearr_30866 = state_30840;
(statearr_30866[(7)] = inst_30704);

(statearr_30866[(8)] = inst_30702);

(statearr_30866[(9)] = inst_30703);

(statearr_30866[(10)] = inst_30701);

return statearr_30866;
})();
var statearr_30867_30948 = state_30840__$1;
(statearr_30867_30948[(2)] = null);

(statearr_30867_30948[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (22))){
var inst_30754 = (state_30840[(19)]);
var inst_30757 = (state_30840[(23)]);
var inst_30762 = (state_30840[(24)]);
var inst_30758 = (state_30840[(25)]);
var inst_30757__$1 = (state_30840[(2)]);
var inst_30758__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30757__$1);
var inst_30759 = (function (){var all_files = inst_30754;
var res_SINGLEQUOTE_ = inst_30757__$1;
var res = inst_30758__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30754,inst_30757,inst_30762,inst_30758,inst_30757__$1,inst_30758__$1,state_val_30841,c__26206__auto__,map__30686,map__30686__$1,opts,before_jsload,on_jsload,reload_dependents,map__30687,map__30687__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30437_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30437_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30754,inst_30757,inst_30762,inst_30758,inst_30757__$1,inst_30758__$1,state_val_30841,c__26206__auto__,map__30686,map__30686__$1,opts,before_jsload,on_jsload,reload_dependents,map__30687,map__30687__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30760 = cljs.core.filter.call(null,inst_30759,inst_30757__$1);
var inst_30761 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30762__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30761);
var inst_30763 = cljs.core.not_empty.call(null,inst_30762__$1);
var state_30840__$1 = (function (){var statearr_30868 = state_30840;
(statearr_30868[(23)] = inst_30757__$1);

(statearr_30868[(24)] = inst_30762__$1);

(statearr_30868[(25)] = inst_30758__$1);

(statearr_30868[(26)] = inst_30760);

return statearr_30868;
})();
if(cljs.core.truth_(inst_30763)){
var statearr_30869_30949 = state_30840__$1;
(statearr_30869_30949[(1)] = (23));

} else {
var statearr_30870_30950 = state_30840__$1;
(statearr_30870_30950[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (36))){
var state_30840__$1 = state_30840;
var statearr_30871_30951 = state_30840__$1;
(statearr_30871_30951[(2)] = false);

(statearr_30871_30951[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (41))){
var inst_30815 = (state_30840[(20)]);
var inst_30819 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30820 = cljs.core.map.call(null,inst_30819,inst_30815);
var inst_30821 = cljs.core.pr_str.call(null,inst_30820);
var inst_30822 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30821)].join('');
var inst_30823 = figwheel.client.utils.log.call(null,inst_30822);
var state_30840__$1 = state_30840;
var statearr_30872_30952 = state_30840__$1;
(statearr_30872_30952[(2)] = inst_30823);

(statearr_30872_30952[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (43))){
var inst_30816 = (state_30840[(21)]);
var inst_30826 = (state_30840[(2)]);
var inst_30827 = cljs.core.not_empty.call(null,inst_30816);
var state_30840__$1 = (function (){var statearr_30873 = state_30840;
(statearr_30873[(27)] = inst_30826);

return statearr_30873;
})();
if(cljs.core.truth_(inst_30827)){
var statearr_30874_30953 = state_30840__$1;
(statearr_30874_30953[(1)] = (44));

} else {
var statearr_30875_30954 = state_30840__$1;
(statearr_30875_30954[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (29))){
var inst_30794 = (state_30840[(16)]);
var inst_30754 = (state_30840[(19)]);
var inst_30757 = (state_30840[(23)]);
var inst_30762 = (state_30840[(24)]);
var inst_30758 = (state_30840[(25)]);
var inst_30760 = (state_30840[(26)]);
var inst_30790 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30793 = (function (){var all_files = inst_30754;
var res_SINGLEQUOTE_ = inst_30757;
var res = inst_30758;
var files_not_loaded = inst_30760;
var dependencies_that_loaded = inst_30762;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30794,inst_30754,inst_30757,inst_30762,inst_30758,inst_30760,inst_30790,state_val_30841,c__26206__auto__,map__30686,map__30686__$1,opts,before_jsload,on_jsload,reload_dependents,map__30687,map__30687__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30792){
var map__30876 = p__30792;
var map__30876__$1 = ((((!((map__30876 == null)))?((((map__30876.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30876.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30876):map__30876);
var namespace = cljs.core.get.call(null,map__30876__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30794,inst_30754,inst_30757,inst_30762,inst_30758,inst_30760,inst_30790,state_val_30841,c__26206__auto__,map__30686,map__30686__$1,opts,before_jsload,on_jsload,reload_dependents,map__30687,map__30687__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30794__$1 = cljs.core.group_by.call(null,inst_30793,inst_30760);
var inst_30796 = (inst_30794__$1 == null);
var inst_30797 = cljs.core.not.call(null,inst_30796);
var state_30840__$1 = (function (){var statearr_30878 = state_30840;
(statearr_30878[(16)] = inst_30794__$1);

(statearr_30878[(28)] = inst_30790);

return statearr_30878;
})();
if(inst_30797){
var statearr_30879_30955 = state_30840__$1;
(statearr_30879_30955[(1)] = (32));

} else {
var statearr_30880_30956 = state_30840__$1;
(statearr_30880_30956[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (44))){
var inst_30816 = (state_30840[(21)]);
var inst_30829 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30816);
var inst_30830 = cljs.core.pr_str.call(null,inst_30829);
var inst_30831 = [cljs.core.str("not required: "),cljs.core.str(inst_30830)].join('');
var inst_30832 = figwheel.client.utils.log.call(null,inst_30831);
var state_30840__$1 = state_30840;
var statearr_30881_30957 = state_30840__$1;
(statearr_30881_30957[(2)] = inst_30832);

(statearr_30881_30957[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (6))){
var inst_30735 = (state_30840[(2)]);
var state_30840__$1 = state_30840;
var statearr_30882_30958 = state_30840__$1;
(statearr_30882_30958[(2)] = inst_30735);

(statearr_30882_30958[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (28))){
var inst_30760 = (state_30840[(26)]);
var inst_30787 = (state_30840[(2)]);
var inst_30788 = cljs.core.not_empty.call(null,inst_30760);
var state_30840__$1 = (function (){var statearr_30883 = state_30840;
(statearr_30883[(29)] = inst_30787);

return statearr_30883;
})();
if(cljs.core.truth_(inst_30788)){
var statearr_30884_30959 = state_30840__$1;
(statearr_30884_30959[(1)] = (29));

} else {
var statearr_30885_30960 = state_30840__$1;
(statearr_30885_30960[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (25))){
var inst_30758 = (state_30840[(25)]);
var inst_30774 = (state_30840[(2)]);
var inst_30775 = cljs.core.not_empty.call(null,inst_30758);
var state_30840__$1 = (function (){var statearr_30886 = state_30840;
(statearr_30886[(30)] = inst_30774);

return statearr_30886;
})();
if(cljs.core.truth_(inst_30775)){
var statearr_30887_30961 = state_30840__$1;
(statearr_30887_30961[(1)] = (26));

} else {
var statearr_30888_30962 = state_30840__$1;
(statearr_30888_30962[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (34))){
var inst_30809 = (state_30840[(2)]);
var state_30840__$1 = state_30840;
if(cljs.core.truth_(inst_30809)){
var statearr_30889_30963 = state_30840__$1;
(statearr_30889_30963[(1)] = (38));

} else {
var statearr_30890_30964 = state_30840__$1;
(statearr_30890_30964[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (17))){
var state_30840__$1 = state_30840;
var statearr_30891_30965 = state_30840__$1;
(statearr_30891_30965[(2)] = recompile_dependents);

(statearr_30891_30965[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (3))){
var state_30840__$1 = state_30840;
var statearr_30892_30966 = state_30840__$1;
(statearr_30892_30966[(2)] = null);

(statearr_30892_30966[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (12))){
var inst_30731 = (state_30840[(2)]);
var state_30840__$1 = state_30840;
var statearr_30893_30967 = state_30840__$1;
(statearr_30893_30967[(2)] = inst_30731);

(statearr_30893_30967[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (2))){
var inst_30693 = (state_30840[(13)]);
var inst_30700 = cljs.core.seq.call(null,inst_30693);
var inst_30701 = inst_30700;
var inst_30702 = null;
var inst_30703 = (0);
var inst_30704 = (0);
var state_30840__$1 = (function (){var statearr_30894 = state_30840;
(statearr_30894[(7)] = inst_30704);

(statearr_30894[(8)] = inst_30702);

(statearr_30894[(9)] = inst_30703);

(statearr_30894[(10)] = inst_30701);

return statearr_30894;
})();
var statearr_30895_30968 = state_30840__$1;
(statearr_30895_30968[(2)] = null);

(statearr_30895_30968[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (23))){
var inst_30754 = (state_30840[(19)]);
var inst_30757 = (state_30840[(23)]);
var inst_30762 = (state_30840[(24)]);
var inst_30758 = (state_30840[(25)]);
var inst_30760 = (state_30840[(26)]);
var inst_30765 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30767 = (function (){var all_files = inst_30754;
var res_SINGLEQUOTE_ = inst_30757;
var res = inst_30758;
var files_not_loaded = inst_30760;
var dependencies_that_loaded = inst_30762;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30754,inst_30757,inst_30762,inst_30758,inst_30760,inst_30765,state_val_30841,c__26206__auto__,map__30686,map__30686__$1,opts,before_jsload,on_jsload,reload_dependents,map__30687,map__30687__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30766){
var map__30896 = p__30766;
var map__30896__$1 = ((((!((map__30896 == null)))?((((map__30896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30896):map__30896);
var request_url = cljs.core.get.call(null,map__30896__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30754,inst_30757,inst_30762,inst_30758,inst_30760,inst_30765,state_val_30841,c__26206__auto__,map__30686,map__30686__$1,opts,before_jsload,on_jsload,reload_dependents,map__30687,map__30687__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30768 = cljs.core.reverse.call(null,inst_30762);
var inst_30769 = cljs.core.map.call(null,inst_30767,inst_30768);
var inst_30770 = cljs.core.pr_str.call(null,inst_30769);
var inst_30771 = figwheel.client.utils.log.call(null,inst_30770);
var state_30840__$1 = (function (){var statearr_30898 = state_30840;
(statearr_30898[(31)] = inst_30765);

return statearr_30898;
})();
var statearr_30899_30969 = state_30840__$1;
(statearr_30899_30969[(2)] = inst_30771);

(statearr_30899_30969[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (35))){
var state_30840__$1 = state_30840;
var statearr_30900_30970 = state_30840__$1;
(statearr_30900_30970[(2)] = true);

(statearr_30900_30970[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (19))){
var inst_30744 = (state_30840[(12)]);
var inst_30750 = figwheel.client.file_reloading.expand_files.call(null,inst_30744);
var state_30840__$1 = state_30840;
var statearr_30901_30971 = state_30840__$1;
(statearr_30901_30971[(2)] = inst_30750);

(statearr_30901_30971[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (11))){
var state_30840__$1 = state_30840;
var statearr_30902_30972 = state_30840__$1;
(statearr_30902_30972[(2)] = null);

(statearr_30902_30972[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (9))){
var inst_30733 = (state_30840[(2)]);
var state_30840__$1 = state_30840;
var statearr_30903_30973 = state_30840__$1;
(statearr_30903_30973[(2)] = inst_30733);

(statearr_30903_30973[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (5))){
var inst_30704 = (state_30840[(7)]);
var inst_30703 = (state_30840[(9)]);
var inst_30706 = (inst_30704 < inst_30703);
var inst_30707 = inst_30706;
var state_30840__$1 = state_30840;
if(cljs.core.truth_(inst_30707)){
var statearr_30904_30974 = state_30840__$1;
(statearr_30904_30974[(1)] = (7));

} else {
var statearr_30905_30975 = state_30840__$1;
(statearr_30905_30975[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (14))){
var inst_30714 = (state_30840[(22)]);
var inst_30723 = cljs.core.first.call(null,inst_30714);
var inst_30724 = figwheel.client.file_reloading.eval_body.call(null,inst_30723,opts);
var inst_30725 = cljs.core.next.call(null,inst_30714);
var inst_30701 = inst_30725;
var inst_30702 = null;
var inst_30703 = (0);
var inst_30704 = (0);
var state_30840__$1 = (function (){var statearr_30906 = state_30840;
(statearr_30906[(7)] = inst_30704);

(statearr_30906[(8)] = inst_30702);

(statearr_30906[(32)] = inst_30724);

(statearr_30906[(9)] = inst_30703);

(statearr_30906[(10)] = inst_30701);

return statearr_30906;
})();
var statearr_30907_30976 = state_30840__$1;
(statearr_30907_30976[(2)] = null);

(statearr_30907_30976[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (45))){
var state_30840__$1 = state_30840;
var statearr_30908_30977 = state_30840__$1;
(statearr_30908_30977[(2)] = null);

(statearr_30908_30977[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (26))){
var inst_30754 = (state_30840[(19)]);
var inst_30757 = (state_30840[(23)]);
var inst_30762 = (state_30840[(24)]);
var inst_30758 = (state_30840[(25)]);
var inst_30760 = (state_30840[(26)]);
var inst_30777 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30779 = (function (){var all_files = inst_30754;
var res_SINGLEQUOTE_ = inst_30757;
var res = inst_30758;
var files_not_loaded = inst_30760;
var dependencies_that_loaded = inst_30762;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30754,inst_30757,inst_30762,inst_30758,inst_30760,inst_30777,state_val_30841,c__26206__auto__,map__30686,map__30686__$1,opts,before_jsload,on_jsload,reload_dependents,map__30687,map__30687__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30778){
var map__30909 = p__30778;
var map__30909__$1 = ((((!((map__30909 == null)))?((((map__30909.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30909.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30909):map__30909);
var namespace = cljs.core.get.call(null,map__30909__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30909__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30754,inst_30757,inst_30762,inst_30758,inst_30760,inst_30777,state_val_30841,c__26206__auto__,map__30686,map__30686__$1,opts,before_jsload,on_jsload,reload_dependents,map__30687,map__30687__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30780 = cljs.core.map.call(null,inst_30779,inst_30758);
var inst_30781 = cljs.core.pr_str.call(null,inst_30780);
var inst_30782 = figwheel.client.utils.log.call(null,inst_30781);
var inst_30783 = (function (){var all_files = inst_30754;
var res_SINGLEQUOTE_ = inst_30757;
var res = inst_30758;
var files_not_loaded = inst_30760;
var dependencies_that_loaded = inst_30762;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30754,inst_30757,inst_30762,inst_30758,inst_30760,inst_30777,inst_30779,inst_30780,inst_30781,inst_30782,state_val_30841,c__26206__auto__,map__30686,map__30686__$1,opts,before_jsload,on_jsload,reload_dependents,map__30687,map__30687__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30754,inst_30757,inst_30762,inst_30758,inst_30760,inst_30777,inst_30779,inst_30780,inst_30781,inst_30782,state_val_30841,c__26206__auto__,map__30686,map__30686__$1,opts,before_jsload,on_jsload,reload_dependents,map__30687,map__30687__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30784 = setTimeout(inst_30783,(10));
var state_30840__$1 = (function (){var statearr_30911 = state_30840;
(statearr_30911[(33)] = inst_30777);

(statearr_30911[(34)] = inst_30782);

return statearr_30911;
})();
var statearr_30912_30978 = state_30840__$1;
(statearr_30912_30978[(2)] = inst_30784);

(statearr_30912_30978[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (16))){
var state_30840__$1 = state_30840;
var statearr_30913_30979 = state_30840__$1;
(statearr_30913_30979[(2)] = reload_dependents);

(statearr_30913_30979[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (38))){
var inst_30794 = (state_30840[(16)]);
var inst_30811 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30794);
var state_30840__$1 = state_30840;
var statearr_30914_30980 = state_30840__$1;
(statearr_30914_30980[(2)] = inst_30811);

(statearr_30914_30980[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (30))){
var state_30840__$1 = state_30840;
var statearr_30915_30981 = state_30840__$1;
(statearr_30915_30981[(2)] = null);

(statearr_30915_30981[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (10))){
var inst_30714 = (state_30840[(22)]);
var inst_30716 = cljs.core.chunked_seq_QMARK_.call(null,inst_30714);
var state_30840__$1 = state_30840;
if(inst_30716){
var statearr_30916_30982 = state_30840__$1;
(statearr_30916_30982[(1)] = (13));

} else {
var statearr_30917_30983 = state_30840__$1;
(statearr_30917_30983[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (18))){
var inst_30748 = (state_30840[(2)]);
var state_30840__$1 = state_30840;
if(cljs.core.truth_(inst_30748)){
var statearr_30918_30984 = state_30840__$1;
(statearr_30918_30984[(1)] = (19));

} else {
var statearr_30919_30985 = state_30840__$1;
(statearr_30919_30985[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (42))){
var state_30840__$1 = state_30840;
var statearr_30920_30986 = state_30840__$1;
(statearr_30920_30986[(2)] = null);

(statearr_30920_30986[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (37))){
var inst_30806 = (state_30840[(2)]);
var state_30840__$1 = state_30840;
var statearr_30921_30987 = state_30840__$1;
(statearr_30921_30987[(2)] = inst_30806);

(statearr_30921_30987[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (8))){
var inst_30714 = (state_30840[(22)]);
var inst_30701 = (state_30840[(10)]);
var inst_30714__$1 = cljs.core.seq.call(null,inst_30701);
var state_30840__$1 = (function (){var statearr_30922 = state_30840;
(statearr_30922[(22)] = inst_30714__$1);

return statearr_30922;
})();
if(inst_30714__$1){
var statearr_30923_30988 = state_30840__$1;
(statearr_30923_30988[(1)] = (10));

} else {
var statearr_30924_30989 = state_30840__$1;
(statearr_30924_30989[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26206__auto__,map__30686,map__30686__$1,opts,before_jsload,on_jsload,reload_dependents,map__30687,map__30687__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26183__auto__,c__26206__auto__,map__30686,map__30686__$1,opts,before_jsload,on_jsload,reload_dependents,map__30687,map__30687__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26184__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26184__auto____0 = (function (){
var statearr_30928 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30928[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26184__auto__);

(statearr_30928[(1)] = (1));

return statearr_30928;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26184__auto____1 = (function (state_30840){
while(true){
var ret_value__26185__auto__ = (function (){try{while(true){
var result__26186__auto__ = switch__26183__auto__.call(null,state_30840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26186__auto__;
}
break;
}
}catch (e30929){if((e30929 instanceof Object)){
var ex__26187__auto__ = e30929;
var statearr_30930_30990 = state_30840;
(statearr_30930_30990[(5)] = ex__26187__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30991 = state_30840;
state_30840 = G__30991;
continue;
} else {
return ret_value__26185__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26184__auto__ = function(state_30840){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26184__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26184__auto____1.call(this,state_30840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26184__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26184__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26184__auto__;
})()
;})(switch__26183__auto__,c__26206__auto__,map__30686,map__30686__$1,opts,before_jsload,on_jsload,reload_dependents,map__30687,map__30687__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26208__auto__ = (function (){var statearr_30931 = f__26207__auto__.call(null);
(statearr_30931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26206__auto__);

return statearr_30931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26208__auto__);
});})(c__26206__auto__,map__30686,map__30686__$1,opts,before_jsload,on_jsload,reload_dependents,map__30687,map__30687__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26206__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30994,link){
var map__30997 = p__30994;
var map__30997__$1 = ((((!((map__30997 == null)))?((((map__30997.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30997.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30997):map__30997);
var file = cljs.core.get.call(null,map__30997__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6369__auto__ = link.href;
if(cljs.core.truth_(temp__6369__auto__)){
var link_href = temp__6369__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6369__auto__,map__30997,map__30997__$1,file){
return (function (p1__30992_SHARP_,p2__30993_SHARP_){
if(cljs.core._EQ_.call(null,p1__30992_SHARP_,p2__30993_SHARP_)){
return p1__30992_SHARP_;
} else {
return false;
}
});})(link_href,temp__6369__auto__,map__30997,map__30997__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__6369__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31003){
var map__31004 = p__31003;
var map__31004__$1 = ((((!((map__31004 == null)))?((((map__31004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31004):map__31004);
var match_length = cljs.core.get.call(null,map__31004__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31004__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30999_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30999_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__6369__auto__)){
var res = temp__6369__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args31006 = [];
var len__24786__auto___31009 = arguments.length;
var i__24787__auto___31010 = (0);
while(true){
if((i__24787__auto___31010 < len__24786__auto___31009)){
args31006.push((arguments[i__24787__auto___31010]));

var G__31011 = (i__24787__auto___31010 + (1));
i__24787__auto___31010 = G__31011;
continue;
} else {
}
break;
}

var G__31008 = args31006.length;
switch (G__31008) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31006.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31013_SHARP_,p2__31014_SHARP_){
return cljs.core.assoc.call(null,p1__31013_SHARP_,cljs.core.get.call(null,p2__31014_SHARP_,key),p2__31014_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31015){
var map__31018 = p__31015;
var map__31018__$1 = ((((!((map__31018 == null)))?((((map__31018.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31018.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31018):map__31018);
var f_data = map__31018__$1;
var file = cljs.core.get.call(null,map__31018__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6369__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6369__auto__)){
var link = temp__6369__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31020,files_msg){
var map__31027 = p__31020;
var map__31027__$1 = ((((!((map__31027 == null)))?((((map__31027.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31027.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31027):map__31027);
var opts = map__31027__$1;
var on_cssload = cljs.core.get.call(null,map__31027__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31029_31033 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__31030_31034 = null;
var count__31031_31035 = (0);
var i__31032_31036 = (0);
while(true){
if((i__31032_31036 < count__31031_31035)){
var f_31037 = cljs.core._nth.call(null,chunk__31030_31034,i__31032_31036);
figwheel.client.file_reloading.reload_css_file.call(null,f_31037);

var G__31038 = seq__31029_31033;
var G__31039 = chunk__31030_31034;
var G__31040 = count__31031_31035;
var G__31041 = (i__31032_31036 + (1));
seq__31029_31033 = G__31038;
chunk__31030_31034 = G__31039;
count__31031_31035 = G__31040;
i__31032_31036 = G__31041;
continue;
} else {
var temp__6369__auto___31042 = cljs.core.seq.call(null,seq__31029_31033);
if(temp__6369__auto___31042){
var seq__31029_31043__$1 = temp__6369__auto___31042;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31029_31043__$1)){
var c__24506__auto___31044 = cljs.core.chunk_first.call(null,seq__31029_31043__$1);
var G__31045 = cljs.core.chunk_rest.call(null,seq__31029_31043__$1);
var G__31046 = c__24506__auto___31044;
var G__31047 = cljs.core.count.call(null,c__24506__auto___31044);
var G__31048 = (0);
seq__31029_31033 = G__31045;
chunk__31030_31034 = G__31046;
count__31031_31035 = G__31047;
i__31032_31036 = G__31048;
continue;
} else {
var f_31049 = cljs.core.first.call(null,seq__31029_31043__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31049);

var G__31050 = cljs.core.next.call(null,seq__31029_31043__$1);
var G__31051 = null;
var G__31052 = (0);
var G__31053 = (0);
seq__31029_31033 = G__31050;
chunk__31030_31034 = G__31051;
count__31031_31035 = G__31052;
i__31032_31036 = G__31053;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__31027,map__31027__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__31027,map__31027__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1467727672726