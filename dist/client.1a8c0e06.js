webpackJsonp([0],[,,,function(e,t,s){"use strict";t.a={name:"app"}},function(e,t,s){"use strict";var i=s(21);t.a={data:function(){return{message:"CeeLo",tagLine:"That game you see people playing in the back alley"}},components:{"app-input":i.a}}},function(e,t,s){"use strict";t.a={props:["msg"],data:function(){return{message:""}},methods:{changeMessage:function(e){this.message=e.target.value,this.$emit("messageChanged",this.message)}}}},function(e,t,s){"use strict";t.a={data:function(){return{message:"Touch a Die to Roll",rolling:{0:"display:none;",1:""},dice1:{num:"4",glow:""},dice2:{num:"5",glow:""},dice3:{num:"6",glow:""}}},methods:{roll:function(){var e=this;e.rolling[1]=e.rolling[0],e.rolling[0]="",e.message="Hot Dice!",setTimeout(function(){e.dice1.num=Math.floor(6*Math.random())+1,e.dice2.num=Math.floor(6*Math.random())+1,e.dice3.num=Math.floor(6*Math.random())+1;var t=JSON.stringify([e.dice1.num,e.dice2.num,e.dice3.num].sort());"[1,2,3]"==t?(e.dice1.glow="fade",e.dice2.glow="fade",e.dice3.glow="fade",e.message="1-2-3 Thats an automatic loss"):"[4,5,6]"==t?(e.dice1.glow="glow",e.dice2.glow="glow",e.dice3.glow="glow",e.message="Cee-Lo! Automatic win"):e.dice1.num==e.dice2.num?e.dice2.num==e.dice3.num?(e.dice1.glow="glow",e.dice2.glow="glow",e.dice3.glow="glow",e.message="Triple "+e.dice1.num+"'s!"):(e.dice1.glow="fade",e.dice2.glow="fade",e.dice3.glow="glow",e.message="Your Score is a "+e.dice3.num):e.dice2.num==e.dice3.num?(e.dice1.glow="glow",e.dice2.glow="fade",e.dice3.glow="fade",e.message="Your Score is a "+e.dice1.num):e.dice1.num==e.dice3.num?(e.dice1.glow="fade",e.dice2.glow="glow",e.dice3.glow="fade",e.message="Your Score is a "+e.dice2.num):(e.message="Nothin, roll again",e.dice1.glow="",e.dice2.glow="",e.dice3.glow=""),e.rolling[1]="",e.rolling[0]="display:none;"},3e3)}}}},function(e,t,s){"use strict";t.a={data:function(){return{display:"display:none;"}},methods:{show:function(){this.display=this.display="",console.log(this.display)}}}},function(e,t,s){s(9),s(11),e.exports=s(16)},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(10),n=s.n(i);n.a.install({onUpdateReady:function(){n.a.applyUpdate()}})},,function(e,t,s){window.Promise||(window.Promise=s(12)),Object.assign=s(15)},,,,,function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(17),n=s(18),a=s(20),o=s(24),l=s(27),c=s(29);i.a.component("app-message",a.a),i.a.component("app-style",o.a),i.a.component("dice",l.a),i.a.component("rules",c.a),new i.a({el:"#app",render:function(e){return e(n.a)}})},,function(e,t,s){"use strict";var i=s(3),n=s(19),a=s(0),o=a(i.a,n.a,!1,null,null,null);t.a=o.exports},function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div"),e._v(" "),s("app-message"),e._v(" "),s("div"),e._v(" "),s("div"),e._v(" "),s("dice",{staticClass:"container"}),e._v(" "),s("div"),e._v(" "),s("div"),e._v(" "),s("rules",{staticClass:"container"}),e._v(" "),s("div"),e._v(" "),s("app-style")],1)},n=[],a={render:i,staticRenderFns:n};t.a=a},function(e,t,s){"use strict";var i=s(4),n=s(23),a=s(0),o=a(i.a,n.a,!1,null,null,null);t.a=o.exports},function(e,t,s){"use strict";var i=s(5),n=s(22),a=s(0),o=a(i.a,n.a,!1,null,null,null);t.a=o.exports},function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("input",{attrs:{type:"text"},domProps:{value:e.msg},on:{input:e.changeMessage}}),e._v(" "),s("p",[e._v(e._s(e.message))])])},n=[],a={render:i,staticRenderFns:n};t.a=a},function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"title"},[s("h1",[e._v(e._s(e.message))]),e._v(" "),s("h2",[e._v(e._s(e.tagLine))])])])},n=[],a={render:i,staticRenderFns:n};t.a=a},function(e,t,s){"use strict";function i(e){s(25),s(26)}var n=s(0),a=i,o=n(null,null,!1,a,null,null);t.a=o.exports},,function(e,t){},function(e,t,s){"use strict";var i=s(6),n=s(28),a=s(0),o=a(i.a,n.a,!1,null,null,null);t.a=o.exports},function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"dice"}},[s("a",{staticClass:"die",style:e.rolling[1],on:{click:e.roll}},[s("img",{class:e.dice1.glow,attrs:{src:"/static/dice/"+e.dice1.num+".svg"}}),e._v(" "),s("img",{class:e.dice2.glow,attrs:{src:"/static/dice/"+e.dice2.num+".svg"}}),e._v(" "),s("img",{class:e.dice3.glow,attrs:{src:"/static/dice/"+e.dice3.num+".svg"}})]),e._v(" "),s("a",{staticClass:"die",style:e.rolling[0]},[s("img",{staticClass:"spun",attrs:{src:"/static/dice/"+e.dice1.num+".svg"}}),e._v(" "),s("img",{staticClass:"spun",attrs:{src:"/static/dice/"+e.dice2.num+".svg"}}),e._v(" "),s("img",{staticClass:"spun",attrs:{src:"/static/dice/"+e.dice3.num+".svg"}})]),e._v(" "),s("br"),e._v(" "),s("h3",[e._v(e._s(e.message))])])},n=[],a={render:i,staticRenderFns:n};t.a=a},function(e,t,s){"use strict";var i=s(7),n=s(30),a=s(0),o=a(i.a,n.a,!1,null,null,null);t.a=o.exports},function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",[s("div",{staticClass:"rules",style:e.display},[e._v("\n              1. Throw a dollar in the pot\n                  "),s("br"),e._v("\n              2. Keep Rolling until you have a score, then pass to the next player\n                  "),s("br"),e._v("\n              3. Once everyone has their score, the player with the highest score wins\n                  "),s("br"),e._v("\n              4. ✨ Money Get ✨\n                  "),s("br"),e._v(" "),s("h4",[e._v(" How to Score ")]),e._v(" "),s("b",[e._v("4-5-6")]),e._v(" Highest possible roll Automatic Win\n              "),s("br"),e._v(" "),s("b",[e._v("Trips")]),e._v(' Rolling three of the same number is known as rolling "trips". Higher trips beat lower trips, so 4-4-4 is better than 3-3-3. Any trips beats any established point.\n              '),s("br"),e._v(" "),s("b",[e._v(" Point ")]),e._v('Rolling a pair, and another number, establishes the singleton as a "point". A higher point beats a lower point, so 2-2-6 is better than 5-5-2.\n              '),s("br"),e._v(" "),s("b",[e._v("1-2-3")]),e._v("The lowest possible roll. If you roll 1-2-3, you automatically lose. \n          ")])])])},n=[],a={render:i,staticRenderFns:n};t.a=a}],[8]);
//# sourceMappingURL=client.1a8c0e06.js.map