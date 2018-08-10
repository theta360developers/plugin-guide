!function(r,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():e()(r.lunr)}(this,function(){return function(r){if(void 0===r)throw new Error("Lunr is not present. Please include / require Lunr before this script.");if(void 0===r.stemmerSupport)throw new Error("Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script.");r.du=function(){this.pipeline.reset(),this.pipeline.add(r.du.trimmer,r.du.stopWordFilter,r.du.stemmer),this.searchPipeline&&(this.searchPipeline.reset(),this.searchPipeline.add(r.du.stemmer))},r.du.wordCharacters="A-Za-zªºÀ-ÖØ-öø-ʸˠ-ˤᴀ-ᴥᴬ-ᵜᵢ-ᵥᵫ-ᵷᵹ-ᶾḀ-ỿⁱⁿₐ-ₜKÅℲⅎⅠ-ↈⱠ-ⱿꜢ-ꞇꞋ-ꞭꞰ-ꞷꟷ-ꟿꬰ-ꭚꭜ-ꭤﬀ-ﬆＡ-Ｚａ-ｚ",r.du.trimmer=r.trimmerSupport.generateTrimmer(r.du.wordCharacters),r.Pipeline.registerFunction(r.du.trimmer,"trimmer-du"),r.du.stemmer=function(){var e=r.stemmerSupport.Among,i=r.stemmerSupport.SnowballProgram,n=new function(){function r(r){return v.cursor=r,r>=v.limit||(v.cursor++,!1)}function n(){for(;!v.in_grouping(g,97,232);){if(v.cursor>=v.limit)return!0;v.cursor++}for(;!v.out_grouping(g,97,232);){if(v.cursor>=v.limit)return!0;v.cursor++}return!1}function o(){return l<=v.cursor}function t(){return a<=v.cursor}function s(){var r=v.limit-v.cursor;v.find_among_b(_,3)&&(v.cursor=v.limit-r,v.ket=v.cursor,v.cursor>v.limit_backward&&(v.cursor--,v.bra=v.cursor,v.slice_del()))}function u(){var r;m=!1,v.ket=v.cursor,v.eq_s_b(1,"e")&&(v.bra=v.cursor,o()&&(r=v.limit-v.cursor,v.out_grouping_b(g,97,232)&&(v.cursor=v.limit-r,v.slice_del(),m=!0,s())))}function c(){var r;o()&&(r=v.limit-v.cursor,v.out_grouping_b(g,97,232)&&(v.cursor=v.limit-r,v.eq_s_b(3,"gem")||(v.cursor=v.limit-r,v.slice_del(),s())))}var a,l,m,d=[new e("",-1,6),new e("á",0,1),new e("ä",0,1),new e("é",0,2),new e("ë",0,2),new e("í",0,3),new e("ï",0,3),new e("ó",0,4),new e("ö",0,4),new e("ú",0,5),new e("ü",0,5)],f=[new e("",-1,3),new e("I",0,2),new e("Y",0,1)],_=[new e("dd",-1,-1),new e("kk",-1,-1),new e("tt",-1,-1)],w=[new e("ene",-1,2),new e("se",-1,3),new e("en",-1,2),new e("heden",2,1),new e("s",-1,3)],b=[new e("end",-1,1),new e("ig",-1,2),new e("ing",-1,1),new e("lijk",-1,3),new e("baar",-1,4),new e("bar",-1,5)],p=[new e("aa",-1,-1),new e("ee",-1,-1),new e("oo",-1,-1),new e("uu",-1,-1)],g=[17,65,16,1,0,0,0,0,0,0,0,0,0,0,0,0,128],h=[1,0,0,17,65,16,1,0,0,0,0,0,0,0,0,0,0,0,0,128],k=[17,67,16,1,0,0,0,0,0,0,0,0,0,0,0,0,128],v=new i;this.setCurrent=function(r){v.setCurrent(r)},this.getCurrent=function(){return v.getCurrent()},this.stem=function(){var e=v.cursor;return function(){for(var e,i,n,o=v.cursor;;){if(v.bra=v.cursor,e=v.find_among(d,11))switch(v.ket=v.cursor,e){case 1:v.slice_from("a");continue;case 2:v.slice_from("e");continue;case 3:v.slice_from("i");continue;case 4:v.slice_from("o");continue;case 5:v.slice_from("u");continue;case 6:if(v.cursor>=v.limit)break;v.cursor++;continue}break}for(v.cursor=o,v.bra=o,v.eq_s(1,"y")?(v.ket=v.cursor,v.slice_from("Y")):v.cursor=o;;)if(i=v.cursor,v.in_grouping(g,97,232)){if(n=v.cursor,v.bra=n,v.eq_s(1,"i"))v.ket=v.cursor,v.in_grouping(g,97,232)&&(v.slice_from("I"),v.cursor=i);else if(v.cursor=n,v.eq_s(1,"y"))v.ket=v.cursor,v.slice_from("Y"),v.cursor=i;else if(r(i))break}else if(r(i))break}(),v.cursor=e,l=v.limit,a=l,n()||((l=v.cursor)<3&&(l=3),n()||(a=v.cursor)),v.limit_backward=e,v.cursor=v.limit,function(){var r,e,i,n,a,l,d=v.limit-v.cursor;if(v.ket=v.cursor,r=v.find_among_b(w,5))switch(v.bra=v.cursor,r){case 1:o()&&v.slice_from("heid");break;case 2:c();break;case 3:o()&&v.out_grouping_b(k,97,232)&&v.slice_del()}if(v.cursor=v.limit-d,u(),v.cursor=v.limit-d,v.ket=v.cursor,v.eq_s_b(4,"heid")&&(v.bra=v.cursor,t()&&(e=v.limit-v.cursor,v.eq_s_b(1,"c")||(v.cursor=v.limit-e,v.slice_del(),v.ket=v.cursor,v.eq_s_b(2,"en")&&(v.bra=v.cursor,c())))),v.cursor=v.limit-d,v.ket=v.cursor,r=v.find_among_b(b,6))switch(v.bra=v.cursor,r){case 1:if(t()){if(v.slice_del(),i=v.limit-v.cursor,v.ket=v.cursor,v.eq_s_b(2,"ig")&&(v.bra=v.cursor,t()&&(n=v.limit-v.cursor,!v.eq_s_b(1,"e")))){v.cursor=v.limit-n,v.slice_del();break}v.cursor=v.limit-i,s()}break;case 2:t()&&(a=v.limit-v.cursor,v.eq_s_b(1,"e")||(v.cursor=v.limit-a,v.slice_del()));break;case 3:t()&&(v.slice_del(),u());break;case 4:t()&&v.slice_del();break;case 5:t()&&m&&v.slice_del()}v.cursor=v.limit-d,v.out_grouping_b(h,73,232)&&(l=v.limit-v.cursor,v.find_among_b(p,4)&&v.out_grouping_b(g,97,232)&&(v.cursor=v.limit-l,v.ket=v.cursor,v.cursor>v.limit_backward&&(v.cursor--,v.bra=v.cursor,v.slice_del())))}(),v.cursor=v.limit_backward,function(){for(var r;;)if(v.bra=v.cursor,r=v.find_among(f,3))switch(v.ket=v.cursor,r){case 1:v.slice_from("y");break;case 2:v.slice_from("i");break;case 3:if(v.cursor>=v.limit)return;v.cursor++}}(),!0}};return function(r){return"function"==typeof r.update?r.update(function(r){return n.setCurrent(r),n.stem(),n.getCurrent()}):(n.setCurrent(r),n.stem(),n.getCurrent())}}(),r.Pipeline.registerFunction(r.du.stemmer,"stemmer-du"),r.du.stopWordFilter=r.generateStopWordFilter(" aan al alles als altijd andere ben bij daar dan dat de der deze die dit doch doen door dus een eens en er ge geen geweest haar had heb hebben heeft hem het hier hij hoe hun iemand iets ik in is ja je kan kon kunnen maar me meer men met mij mijn moet na naar niet niets nog nu of om omdat onder ons ook op over reeds te tegen toch toen tot u uit uw van veel voor want waren was wat werd wezen wie wil worden wordt zal ze zelf zich zij zijn zo zonder zou".split(" ")),r.Pipeline.registerFunction(r.du.stopWordFilter,"stopWordFilter-du")}});