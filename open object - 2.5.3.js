/*
* Open Object
*
* versi 2.5.3
*
* Ini adalah project terbuka.
* Open object berfungsi untuk
* menampilkan struktur objek
* secara keseluruhan.
*
* require:
* - JQuery.js
*
* Dibuat oleh Restu Fauzi.
*  ©2020
*/
"use strict";!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],b):(a||self).openObject=b(jQuery||$)}
(this,function($){
	const 
	a = {
		a(a){
			a.d = Object.getOwnPropertyDescriptor(Object.prototype.hasOwnProperty.call(a.o,a.n)?a.o:a.p,a.n)||{};
			a.v = !(a.d.get||a.d.set);
			
			var b = a.v?a.d.value:null,
			c = "string"==typeof b;
			b = this.b(b);
			return $('<div>')
			.append( this.d(a) )
			.append(...b(1).map(this.c(1,c)))
			.append(...b(3).map(this.c(3,c)))
			.append(...b(0).map(this.c(0,c)))
			.append(...b(2).map(this.c(2,c)))
			.append($('<div></div>').css("border","red solid 1pt").append(...b(-1).map(this.c(-1))))
		}, 
		b(_){
			var a = _,
			b = b=>{
				if(e.includes(b))return;
				c = {
					m: Object.prototype.propertyIsEnumerable.call(a,b)-0,
					n: b,
					o: _,
					p: a
				},
				c.m = e.m? (d.push(c),e.m>1? c.m:c.m+2):(d.s.push(c),-1),
				e.push(b)
			},
			c,
			d = [],
			e = [];
			d.s = [], e.m = 2;
			while(a !== undefined && a !== null){
				Object .getOwnPropertyNames(a)
				.forEach(b),
				e.m = !1,
				Object .getOwnPropertySymbols(a)
				.forEach(b),
				e.m = !0,
				a = Object .getPrototypeOf(a)
			}
			return d.sort(this.g),a=>a<0?d.s:d.filter(b=>b.m==a)
		},
		c(b,c){
			var background = ["#f88","#f88","#ffa","#f88","#ffa"][b+1],
				color = b<2?"#000":"#00f";
			return d=>{
				if(c&&d.n>=0)return'';
				var e = d,f = $('<div>');
				return $('<div>').css("padding-left",'30px')
				.append(
					$(`<p>${b>-1?d.n:'<span style="color:#ccf">Symbol(</span>'+d.n.description+'<span style="color:#ccf">)</span>'}</p>`).css({
						background,
						color,
						"font-size":"12pt",
						"margin":"0 0 1px 0"
					}).click(()=>{
						try{
							f.html()?f.empty():f.append(a.a(e))
						}catch(a){
							f.empty().append(a)
						}
					}),
					f
				)
			}
		},
		d(a){
			if(!a.v)
				return $('<fieldset>').append(a.d.get?['get: ',this.e({o:a.o,v:a.d.get})]:'',a.d.set?['set: ',this.e({o:a.o,v:a.d.set})]:'');
			if(a.d.value?.constructor == Symbol)
				return $('<fieldset>').append('<legend>Symbol description</legend>',$('<code>').text(a.d.value?.description));
			if("function"==typeof a.d.value)
				return $('<fieldset>').append(this.e({o:a.o,v:a.d.value}));
			if("object"!=typeof a.d.value)
				return this.f(a);
			return''
		},
		e(a){
			const _ = a, b = $('<div>'),
			c = $('<input placeholder="arguments..."/>'),
			d = this.h;
			a = $('<input type="button" value="run" />')
				.click(a=>{
					try{
						a = _.v.apply(_.o,d(`[${c.val()}]`));
						b.empty().append(openObject(a))
					} catch(a) {
						b.text(a)
					}
				});
			return  $('<div>').append(c,a,b)
		},
		f(a){
			const _ = a, b = $('<span>'),
			c = $('<input type="checkbox"/>')[0],
			d = $('<textarea>').css('background-color','#aaf').val(_.d.value),
			e = this;
			a = $('<input type="button" value="change" />')
				.click(()=>{
					try{
						_.o[_.n] = c.checked ? e.h(d.val()) : d.val();
						a.parent().empty().append(e.a(_).children());
						b.hide()
					} catch(a) {
						b.show().text(a)
					}
				});
			a = $('<fieldset>').append(c,'executable\n',a,'<br>',d,b);
			return a
		},
		g: (a,b)=>String(a.n).localeCompare(b.n),
		h: (a)=>eval.call(null,a)
	};
	function openObject(_){
		return a.a({n:'_',o:{_},p:null}).get(0)
	}
	return openObject
});
