// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__26774){
var map__26799 = p__26774;
var map__26799__$1 = ((((!((map__26799 == null)))?((((map__26799.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26799.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26799):map__26799);
var m = map__26799__$1;
var n = cljs.core.get.call(null,map__26799__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__26799__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__6369__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6369__auto__)){
var ns = temp__6369__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26801_26823 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26802_26824 = null;
var count__26803_26825 = (0);
var i__26804_26826 = (0);
while(true){
if((i__26804_26826 < count__26803_26825)){
var f_26827 = cljs.core._nth.call(null,chunk__26802_26824,i__26804_26826);
cljs.core.println.call(null,"  ",f_26827);

var G__26828 = seq__26801_26823;
var G__26829 = chunk__26802_26824;
var G__26830 = count__26803_26825;
var G__26831 = (i__26804_26826 + (1));
seq__26801_26823 = G__26828;
chunk__26802_26824 = G__26829;
count__26803_26825 = G__26830;
i__26804_26826 = G__26831;
continue;
} else {
var temp__6369__auto___26832 = cljs.core.seq.call(null,seq__26801_26823);
if(temp__6369__auto___26832){
var seq__26801_26833__$1 = temp__6369__auto___26832;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26801_26833__$1)){
var c__24506__auto___26834 = cljs.core.chunk_first.call(null,seq__26801_26833__$1);
var G__26835 = cljs.core.chunk_rest.call(null,seq__26801_26833__$1);
var G__26836 = c__24506__auto___26834;
var G__26837 = cljs.core.count.call(null,c__24506__auto___26834);
var G__26838 = (0);
seq__26801_26823 = G__26835;
chunk__26802_26824 = G__26836;
count__26803_26825 = G__26837;
i__26804_26826 = G__26838;
continue;
} else {
var f_26839 = cljs.core.first.call(null,seq__26801_26833__$1);
cljs.core.println.call(null,"  ",f_26839);

var G__26840 = cljs.core.next.call(null,seq__26801_26833__$1);
var G__26841 = null;
var G__26842 = (0);
var G__26843 = (0);
seq__26801_26823 = G__26840;
chunk__26802_26824 = G__26841;
count__26803_26825 = G__26842;
i__26804_26826 = G__26843;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26844 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__23603__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26844);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26844)))?cljs.core.second.call(null,arglists_26844):arglists_26844));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26805_26845 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26806_26846 = null;
var count__26807_26847 = (0);
var i__26808_26848 = (0);
while(true){
if((i__26808_26848 < count__26807_26847)){
var vec__26809_26849 = cljs.core._nth.call(null,chunk__26806_26846,i__26808_26848);
var name_26850 = cljs.core.nth.call(null,vec__26809_26849,(0),null);
var map__26812_26851 = cljs.core.nth.call(null,vec__26809_26849,(1),null);
var map__26812_26852__$1 = ((((!((map__26812_26851 == null)))?((((map__26812_26851.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26812_26851.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26812_26851):map__26812_26851);
var doc_26853 = cljs.core.get.call(null,map__26812_26852__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26854 = cljs.core.get.call(null,map__26812_26852__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_26850);

cljs.core.println.call(null," ",arglists_26854);

if(cljs.core.truth_(doc_26853)){
cljs.core.println.call(null," ",doc_26853);
} else {
}

var G__26855 = seq__26805_26845;
var G__26856 = chunk__26806_26846;
var G__26857 = count__26807_26847;
var G__26858 = (i__26808_26848 + (1));
seq__26805_26845 = G__26855;
chunk__26806_26846 = G__26856;
count__26807_26847 = G__26857;
i__26808_26848 = G__26858;
continue;
} else {
var temp__6369__auto___26859 = cljs.core.seq.call(null,seq__26805_26845);
if(temp__6369__auto___26859){
var seq__26805_26860__$1 = temp__6369__auto___26859;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26805_26860__$1)){
var c__24506__auto___26861 = cljs.core.chunk_first.call(null,seq__26805_26860__$1);
var G__26862 = cljs.core.chunk_rest.call(null,seq__26805_26860__$1);
var G__26863 = c__24506__auto___26861;
var G__26864 = cljs.core.count.call(null,c__24506__auto___26861);
var G__26865 = (0);
seq__26805_26845 = G__26862;
chunk__26806_26846 = G__26863;
count__26807_26847 = G__26864;
i__26808_26848 = G__26865;
continue;
} else {
var vec__26814_26866 = cljs.core.first.call(null,seq__26805_26860__$1);
var name_26867 = cljs.core.nth.call(null,vec__26814_26866,(0),null);
var map__26817_26868 = cljs.core.nth.call(null,vec__26814_26866,(1),null);
var map__26817_26869__$1 = ((((!((map__26817_26868 == null)))?((((map__26817_26868.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26817_26868.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26817_26868):map__26817_26868);
var doc_26870 = cljs.core.get.call(null,map__26817_26869__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26871 = cljs.core.get.call(null,map__26817_26869__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_26867);

cljs.core.println.call(null," ",arglists_26871);

if(cljs.core.truth_(doc_26870)){
cljs.core.println.call(null," ",doc_26870);
} else {
}

var G__26872 = cljs.core.next.call(null,seq__26805_26860__$1);
var G__26873 = null;
var G__26874 = (0);
var G__26875 = (0);
seq__26805_26845 = G__26872;
chunk__26806_26846 = G__26873;
count__26807_26847 = G__26874;
i__26808_26848 = G__26875;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6369__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6369__auto__)){
var fnspec = temp__6369__auto__;
cljs.core.print.call(null,"Spec");

var seq__26819 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__26820 = null;
var count__26821 = (0);
var i__26822 = (0);
while(true){
if((i__26822 < count__26821)){
var role = cljs.core._nth.call(null,chunk__26820,i__26822);
var temp__6369__auto___26876__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6369__auto___26876__$1)){
var spec_26877 = temp__6369__auto___26876__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_26877));
} else {
}

var G__26878 = seq__26819;
var G__26879 = chunk__26820;
var G__26880 = count__26821;
var G__26881 = (i__26822 + (1));
seq__26819 = G__26878;
chunk__26820 = G__26879;
count__26821 = G__26880;
i__26822 = G__26881;
continue;
} else {
var temp__6369__auto____$1 = cljs.core.seq.call(null,seq__26819);
if(temp__6369__auto____$1){
var seq__26819__$1 = temp__6369__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26819__$1)){
var c__24506__auto__ = cljs.core.chunk_first.call(null,seq__26819__$1);
var G__26882 = cljs.core.chunk_rest.call(null,seq__26819__$1);
var G__26883 = c__24506__auto__;
var G__26884 = cljs.core.count.call(null,c__24506__auto__);
var G__26885 = (0);
seq__26819 = G__26882;
chunk__26820 = G__26883;
count__26821 = G__26884;
i__26822 = G__26885;
continue;
} else {
var role = cljs.core.first.call(null,seq__26819__$1);
var temp__6369__auto___26886__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6369__auto___26886__$2)){
var spec_26887 = temp__6369__auto___26886__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_26887));
} else {
}

var G__26888 = cljs.core.next.call(null,seq__26819__$1);
var G__26889 = null;
var G__26890 = (0);
var G__26891 = (0);
seq__26819 = G__26888;
chunk__26820 = G__26889;
count__26821 = G__26890;
i__26822 = G__26891;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1467728149279