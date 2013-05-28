var OSMBuildings=function(){function g(a,b){var c=a[0]-b[0],e=a[1]-b[1];return c*c+e*e}function F(a){var b,c,e,d,g=0,q,m;q=0;for(m=a.length-3;q<m;q+=2)b=a[q],c=a[q+1],e=a[q+2],d=a[q+3],g+=b*d-e*c;if("CW"===(0<g/2?"CW":"CCW"))return a;b=[];for(c=a.length-2;0<=c;c-=2)b.push(a[c],a[c+1]);return b}var G=G||Array,T=T||Array,f=Math,xa=f.exp,ya=f.log,za=f.sin,Aa=f.cos,ia=f.tan,Ba=f.atan,U=f.min,Y=f.max,la=document,Q,ma=function(a){var b,c,e;if(0===a.s)b=c=e=a.l;else{e=0.5>a.l?a.l*(1+a.s):a.l+a.s-a.l*a.s;
var d=2*a.l-e;a.h/=360;b=R(d,e,a.h+1/3);c=R(d,e,a.h);e=R(d,e,a.h-1/3)}return new z(255*b<<0,255*c<<0,255*e<<0,a.a)},R=function(a,b,c){0>c&&(c+=1);1<c&&(c-=1);return c<1/6?a+6*(b-a)*c:0.5>c?b:c<2/3?a+6*(b-a)*(2/3-c):a},z=function(a,b,c,e){this.r=a;this.g=b;this.b=c;this.a=4>arguments.length?1:e},f=z.prototype;f.toString=function(){return"rgba("+[this.r<<0,this.g<<0,this.b<<0,this.a.toFixed(2)].join()+")"};f.adjustLightness=function(a){var b=z.toHSLA(this);b.l*=a;b.l=Math.min(1,Math.max(0,b.l));return ma(b)};
f.adjustAlpha=function(a){return new z(this.r,this.g,this.b,this.a*a)};z.parse=function(a){var b;a+="";if(~a.indexOf("#"))return b=a.match(/^#?(\w{2})(\w{2})(\w{2})(\w{2})?$/),new z(parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16),b[4]?parseInt(b[4],16)/255:1);if(b=a.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/))return new z(parseInt(b[1],10),parseInt(b[2],10),parseInt(b[3],10),b[4]?parseFloat(b[5]):1);if(b=a.match(/hsla?\(([\d.]+)\D+([\d.]+)\D+([\d.]+)(\D+([\d.]+))?\)/))return ma({h:parseInt(b[1],
10),s:parseFloat(b[2]),l:parseFloat(b[3]),a:b[4]?parseFloat(b[5]):1})};z.toHSLA=function(a){var b=a.r/255,c=a.g/255,e=a.b/255,d=Math.max(b,c,e),g=Math.min(b,c,e),q,m=(d+g)/2,f;if(d===g)q=g=0;else{f=d-g;g=0.5<m?f/(2-d-g):f/(d+g);switch(d){case b:q=(c-e)/f+(c<e?6:0);break;case c:q=(e-b)/f+2;break;case e:q=(b-c)/f+4}q/=6}return{h:360*q,s:g,l:m,a:a.a}};Q=z;var na,f=Math,A=f.sin,D=f.cos,Ca=f.tan,oa=f.asin,pa=f.atan2,V=f.PI,w=180/V,Da=357.5291/w,Ea=0.98560028/w,Fa=1.9148/w,Ga=0.02/w,Ha=3E-4/w,Ia=102.9372/
w,qa=23.45/w,Ja=280.16/w,Ka=360.9856235/w;na=function(a,b,c){c=-c/w;b/=w;a=a.valueOf()/864E5-0.5+2440588;var e=Da+Ea*(a-2451545),d=Fa*A(e)+Ga*A(2*e)+Ha*A(3*e),d=e+Ia+d+V,e=oa(A(d)*A(qa)),d=pa(A(d)*D(qa),D(d));c=Ja+Ka*(a-2451545)-c-d;return{altitude:oa(A(b)*A(e)+D(b)*D(e)*D(c)),azimuth:pa(A(c),D(c)*A(b)-Ca(e)*D(b))-V/2}};var ra,M=function(a){var b=parseFloat(a);return~a.indexOf("m")?b<<0:~a.indexOf("yd")?b*La<<0:~a.indexOf("ft")?b*sa<<0:~a.indexOf("'")?(a=a.split("'"),a[0]*sa+a[1]*Ma<<0):b<<0},u=function(a){a=
a.toLowerCase();return"#"===a[0]?a:Na[a]||null},E=function(a){a=a.toLowerCase();return"#"===a[0]?a:Oa[Pa[a]||a]||null},ta=function(a){return(a=a.tags)&&!a.landuse&&(a.building||a["building:part"])&&(!a.layer||0<=a.layer)},ua=function(a){if(a){for(var b=[],c,e=0,d=a.length;e<d;e++)c=N[a[e]],b.push(c[0],c[1]);b[b.length-2]!==b[0]&&b[b.length-1]!==b[1]&&b.push(b[0],b[1]);if(!(8>b.length))return b}},ja=function(a){var b=0,c=0;a.height&&(b=M(a.height));!b&&a["building:height"]&&(b=M(a["building:height"]));
!b&&a.levels&&(b=a.levels*I<<0);!b&&a["building:levels"]&&(b=a["building:levels"]*I<<0);a.min_height&&(c=M(a.min_height));!c&&a["building:min_height"]&&(c=M(a["building:min_height"]));!c&&a.min_level&&(c=a.min_level*I<<0);!c&&a["building:min_level"]&&(c=a["building:min_level"]*I<<0);var e,d;a["building:material"]&&(e=E(a["building:material"]));a["building:facade:material"]&&(e=E(a["building:facade:material"]));a["building:cladding"]&&(e=E(a["building:cladding"]));a["building:color"]&&(e=u(a["building:color"]));
a["building:colour"]&&(e=u(a["building:colour"]));a["roof:material"]&&(d=E(a["roof:material"]));a["building:roof:material"]&&(d=E(a["building:roof:material"]));a["roof:color"]&&(d=u(a["roof:color"]));a["roof:colour"]&&(d=u(a["roof:colour"]));a["building:roof:color"]&&(d=u(a["building:roof:color"]));a["building:roof:colour"]&&(d=u(a["building:roof:colour"]));return{height:b,minHeight:c,wallColor:e,roofColor:d}},va=function(a,b,c){a={id:a,footprint:F(c)};b.height&&(a.height=b.height);b.minHeight&&(a.minHeight=
b.minHeight);b.wallColor&&(a.wallColor=b.wallColor);b.roofColor&&(a.roofColor=b.roofColor);ka.push(a)},La=0.9144,sa=0.3048,Ma=0.0254,I=3,Na={black:"#000000",white:"#ffffff",brown:"#8b4513",green:"#00ff7f",grey:"#bebebe",gray:"#bebebe",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",yellow:"#ffff00",red:"#ff0000",blue:"#0000ff"},Pa={asphalt:"tar_paper",bitumen:"tar_paper",block:"stone",bricks:"brick",glas:"glass",glassfront:"glass",grass:"plants",masonry:"stone",granite:"stone",panels:"panel",paving_stones:"stone",
plastered:"plaster",rooftiles:"roof_tiles",roofingfelt:"tar_paper",sandstone:"stone",sheet:"canvas",sheets:"canvas",shingle:"tar_paper",shingles:"tar_paper",slates:"slate",steel:"metal",tar:"tar_paper",tent:"canvas",thatch:"plants",tile:"roof_tiles",tiles:"roof_tiles"},Oa={brick:"#cc7755",bronze:"#ffeecc",canvas:"#fff8f0",concrete:"#999999",copper:"#a0e0d0",glass:"#e8f8f8",gold:"#ffcc00",plants:"#009933",metal:"#aaaaaa",panel:"#fff8f0",plaster:"#999999",roof_tiles:"#f08060",silver:"#cccccc",slate:"#666666",
stone:"#996666",tar_paper:"#333333",wood:"#deb887"},N,O,ka;ra=function(a){N={};O={};ka=[];for(var b,c=0,e=a.length;c<e;c++)switch(b=a[c],b.type){case "node":N[b.id]=[b.lat,b.lon];break;case "way":var d=void 0,g=void 0;ta(b)?(d=ja(b.tags),(g=ua(b.nodes))&&va(b.id,d,g)):(d=b.tags)&&(!d.highway&&!d.railway&&!d.landuse)&&(O[b.id]=b);break;case "relation":var f=d=d=void 0,g=void 0;if(ta(b)&&("multipolygon"===b.tags.type||"building"===b.tags.type)){a:{for(var d=b.members,g=void 0,f=0,m=d.length;f<m;f++)if(g=
d[f],"way"===g.type&&"outer"===g.role){d=g;break a}d=void 0}if(d&&(b=ja(b.tags),d=O[d.ref]))if(f=ja(d.tags),g=ua(d.nodes)){m=void 0;for(m in b)f[m]||(f[m]=b[m]);va(d.id,f,g)}}}N=O=null;return ka};var Z=Math.PI,wa=Z/2,Qa=Z/4,Ra=180/Z,Sa=256,$="latitude",aa="longitude",f=function(){function a(a,b){var l={};a/=D;b/=D;l[$]=0>=b?90:1<=b?-90:Ra*(2*Ba(xa(Z*(1-2*b)))-wa);l[aa]=360*(1===a?1:(a%1+1)%1)-180;return l}function b(a,b){var l=U(1,Y(0,0.5-ya(ia(Qa+wa*a/180))/Z/2));return{x:(b/360+0.5)*D<<0,y:l*D<<
0}}function c(a){J=a;D=Sa<<J;a=J;var b=I,l=O;a=U(Y(a,b),l);H=1-U(Y(0+0.3*((a-b)/(l-b)),0),0.3);M=P.adjustAlpha(H)+"";ba=E.adjustAlpha(H)+"";ca=W.adjustAlpha(H)+"";x.scale(J)}function e(){da.render();ha.render();d()}function d(){B.clearRect(0,0,m,C);if(!(J<I||ea)){var a,b,l,y,c,d,e,j,h,k=z,n=K,p=ha.getMaxHeight(),w=[fa+k,ga+n],r,s,t,v,S,A;x.rendering.sort(function(a,b){return g(b.center,w)/b.height-g(a.center,w)/a.height});a=0;for(b=x.rendering.length;a<b;a++)if(c=x.rendering[a],!(c.height<=p)){s=
!1;d=c.footprint;r=[];l=0;for(y=d.length-1;l<y;l+=2)r[l]=j=d[l]-k,r[l+1]=h=d[l+1]-n,s||(s=0<j&&j<m&&0<h&&h<C);if(s){l=c.isNew?c.height*L:c.height;d=X/(X-l);c.minHeight&&(l=c.isNew?c.minHeight*L:c.minHeight,e=X/(X-l));j=[];l=0;for(y=r.length-3;l<y;l+=2)h=r[l],t=r[l+1],s=r[l+2],v=r[l+3],S=q(h,t,d),A=q(s,v,d),c.minHeight&&(t=q(h,t,e),v=q(s,v,e),h=t.x,t=t.y,s=v.x,v=v.y),(s-h)*(S.y-t)>(S.x-h)*(v-t)&&(B.fillStyle=h<s&&t<v||h>s&&t>v?c.altColor||ba:c.wallColor||M,f([s,v,h,t,S.x,S.y,A.x,A.y])),j[l]=S.x,j[l+
1]=S.y;B.fillStyle=c.roofColor||ca;B.strokeStyle=c.altColor||ba;f(j,!0)}}}}function f(a,b){if(a.length){B.beginPath();B.moveTo(a[0],a[1]);for(var l=2,c=a.length;l<c;l+=2)B.lineTo(a[l],a[l+1]);B.closePath();b&&B.stroke();B.fill()}}function q(a,b,l){return{x:(a-fa)*l+fa<<0,y:(b-ga)*l+ga<<0}}var m=0,C=0,w=0,A=0,z=0,K=0,J,D,u,B,P=new Q(200,190,180),E=P.adjustLightness(0.8),W=P.adjustLightness(1.2),M=P+"",ba=E+"",ca=W+"",L=1,N,H=1,I=14,O=20,R,fa,ga,X,ea,V={container:null,items:[],init:function(a){var b=
this.container=la.createElement("DIV");b.style.pointerEvents="none";b.style.position="absolute";b.style.left=0;b.style.top=0;da.init(this.create());ha.init(this.create());B=this.create();a.appendChild(b);return b},create:function(){var a=la.createElement("CANVAS");a.style.webkitTransform="translate3d(0,0,0)";a.style.imageRendering="optimizeSpeed";a.style.position="absolute";a.style.left=0;a.style.top=0;var b=a.getContext("2d");b.lineCap="round";b.lineJoin="round";b.lineWidth=1;b.mozImageSmoothingEnabled=
!1;b.webkitImageSmoothingEnabled=!1;this.items.push(a);this.container.appendChild(a);return b},setSize:function(a,b){for(var l=this.items,c=0,d=l.length;c<d;c++)l[c].width=a,l[c].height=b}},x={url:"",raw:[],rendering:[],init:function(){},load:function(a){this.url=a;this.update()},update:function(){if(this.url&&!(14>J)){var b=a(z-w,K-A),c=a(z+m+w,K+C+A);u&&u.abort();var l={w:b[aa],n:b[$],e:c[aa],s:c[$]},b=this.url.replace(/\{ *([\w_]+) *\}/g,function(a,b){return l[b]||a}),y=this.set.bind(this),d=new XMLHttpRequest;
d.onreadystatechange=function(){4===d.readyState&&d.status&&!(200>d.status||299<d.status)&&d.responseText&&y(JSON.parse(d.responseText))};d.open("GET",b);d.send(null);u=d}},set:function(a){if(a){var b,c,y=this.raw,g={};b=0;for(c=y.length;b<c;b++)g[y[b].id]=1;if("FeatureCollection"===a.type){b=a.features;var e,f;a=[];var j,h,k,n,p,m,r,s;c=0;for(y=b.length;c<y;c++)if(j=b[c],"Feature"===j.type&&(h=j.geometry,j=j.properties,"LineString"===h.type&&(m=k.length-1,k[0][0]===k[m][0]&&k[0][1]===k[m][1]&&(k=
h.coordinates)),"Polygon"===h.type&&(k=h.coordinates),"MultiPolygon"===h.type&&(k=h.coordinates[0]),k)){if(j.color||j.wallColor)n=j.color||j.wallColor;j.roofColor&&(p=j.roofColor);h=k[0];s=[];r=j.height;e=m=0;for(f=h.length;e<f;e++)s.push(h[e][1],h[e][0]),m+=r||h[e][2]||0;e={id:j.id||s[0]+","+s[1],footprint:F(s)};m&&(e.height=m/h.length<<0);j.minHeight&&(e.minHeight=j.minHeight);n&&(e.wallColor=n);p&&(e.roofColor=p);a.push(e)}y=this.raw=a}else a.osm3s&&(y=this.raw=ra(a.elements));this.n=-90;this.w=
180;this.s=90;this.e=-180;b=0;for(c=y.length;b<c;b++){k=y[b];k.isNew=!g[k.id];k.wallColor&&(k.wallColor=Q.parse(k.wallColor),k.altColor=k.wallColor.adjustLightness(0.8));k.roofColor&&(k.roofColor=Q.parse(k.roofColor));n=k;p=k.footprint;h=void 0;h=j=a=0;for(m=p.length-3;h<m;h+=2)a+=p[h],j+=p[h+1];h=(p.length-2)/2;n.center=[a/h,j/h];k=k.footprint;n=0;for(p=k.length-1;n<p;n+=2)this.n=Y(k[n],this.n),this.e=Y(k[n+1],this.e),this.s=U(k[n],this.s),this.w=U(k[n+1],this.w)}this.scale(J);clearInterval(N);L=
0;ha.render();N=setInterval(function(){L+=0.1;if(1<L){clearInterval(N);L=1;for(var a=0,b=x.rendering.length;a<b;a++)x.rendering[a].isNew=!1}da.render();d()},33)}},scale:function(a){var c,d,y,e=this.raw,g=[],f,j,h,k,n,p,m=O-a;a=0;for(c=e.length;a<c;a++)if(f=e[a],k=3*(f.height||5)>>m)if(n=3*f.minHeight>>m,!(n>R)){j=f.footprint;p=new G(j.length);d=0;for(y=j.length-1;d<y;d+=2)h=b(j[d],j[d+1]),p[d]=h.x,p[d+1]=h.y;d=p.length/2;y=new T(d);j=0;h=d-1;var r=void 0,s=void 0,t=void 0,v=void 0,q=[],w=[],z=[];
for(y[j]=y[h]=1;h;){s=0;for(r=j+1;r<h;r++){var t=p[2*r],A=p[2*r+1],x=p[2*j],C=p[2*j+1],D=p[2*h],F=p[2*h+1],B=D-x,u=F-C,E=void 0;if(0!==B||0!==u)E=((t-x)*B+(A-C)*u)/(B*B+u*u),1<E?(x=D,C=F):0<E&&(x+=B*E,C+=u*E);B=t-x;u=A-C;t=B*B+u*u;t>s&&(v=r,s=t)}2<s&&(y[v]=1,q.push(j),w.push(v),q.push(v),w.push(h));j=q.pop();h=w.pop()}for(r=0;r<d;r++)y[r]&&z.push(p[2*r],p[2*r+1]);p=z;8>p.length||(h=b(f.center[0],f.center[1]),d=[h.x,h.y],g.push({footprint:p,height:U(k,R),minHeight:n,wallColor:f.wallColor&&f.wallColor.adjustAlpha(H)+
"",altColor:f.altColor&&f.altColor.adjustAlpha(H)+"",roofColor:f.roofColor&&f.roofColor.adjustAlpha(H)+"",center:d,isNew:f.isNew}))}this.rendering=g}},da={enabled:!0,context:null,color:new Q(0,0,0),colorStr:this.color+"",date:null,alpha:1,length:0,directionX:0,directionY:0,init:function(a){this.context=a;this.setDate((new Date).setHours(10))},setEnabled:function(a){this.enabled=!!a},render:function(){var b=this.context,c,d,e,g;b.clearRect(0,0,m,C);if(this.enabled&&!(J<I||ea))if(c=a(z+w,K+A),c=na(this.date,
c.latitude,c.longitude),!(0>=c.altitude)){d=1/ia(c.altitude);e=0.4/d;this.directionX=Aa(c.azimuth)*d;this.directionY=za(c.azimuth)*d;this.color.a=e;g=this.color+"";var f,q,j,h,k,n,p=z,B=K,r,s,t,v,u,D,E=[];b.beginPath();c=0;for(d=x.rendering.length;c<d;c++){q=x.rendering[c];s=!1;j=q.footprint;r=[];e=0;for(f=j.length-1;e<f;e+=2)r[e]=k=j[e]-p,r[e+1]=n=j[e+1]-B,s||(s=0<k&&k<m&&0<n&&n<C);if(s){j=q.isNew?q.height*L:q.height;q.minHeight&&(h=q.isNew?q.minHeight*L:q.minHeight);k=null;e=0;for(f=r.length-3;e<
f;e+=2)n=r[e],t=r[e+1],s=r[e+2],v=r[e+3],u=this.project(n,t,j),D=this.project(s,v,j),q.minHeight&&(t=this.project(n,t,h),v=this.project(s,v,h),n=t.x,t=t.y,s=v.x,v=v.y),(s-n)*(u.y-t)>(u.x-n)*(v-t)?(1===k&&b.lineTo(n,t),k=0,e||b.moveTo(n,t),b.lineTo(s,v)):(0===k&&b.lineTo(u.x,u.y),k=1,e||b.moveTo(u.x,u.y),b.lineTo(D.x,D.y));b.closePath();E.push(r)}}b.fillStyle=g;b.fill();b.globalCompositeOperation="destination-out";b.beginPath();c=0;for(d=E.length;c<d;c++){h=E[c];b.moveTo(h[0],h[1]);e=2;for(f=h.length;e<
f;e+=2)b.lineTo(h[e],h[e+1]);b.lineTo(h[0],h[1]);b.closePath()}b.fillStyle="#00ff00";b.fill();b.globalCompositeOperation="source-over"}},project:function(a,b,c){return{x:a+this.directionX*c,y:b+this.directionY*c}},setDate:function(a){this.date=a;this.render()}},ha={context:null,maxHeight:8,init:function(a){this.context=a},render:function(){var a=this.context;a.clearRect(0,0,m,C);if(!(J<I||ea)){var b,c,d,e,f,g,j,h=z,k=K,n,p;a.beginPath();b=0;for(c=x.rendering.length;b<c;b++){d=x.rendering[b];p=!1;
f=d.footprint;n=[];d=0;for(e=f.length-1;d<e;d+=2)n[d]=g=f[d]-h,n[d+1]=j=f[d+1]-k,p||(p=0<g&&g<m&&0<j&&j<C);if(p){d=0;for(e=n.length-3;d<e;d+=2)p=n[d],f=n[d+1],d?a.lineTo(p,f):a.moveTo(p,f);a.closePath()}}a.fillStyle=ca;a.strokeStyle=ba;a.stroke();a.fill()}},getMaxHeight:function(){return this.maxHeight}};this.setStyle=function(a){a=a||{};if(a.color||a.wallColor)P=Q.parse(a.color||a.wallColor),M=P.adjustAlpha(H)+"",E=P.adjustLightness(0.8),ba=E.adjustAlpha(H)+"",W=P.adjustLightness(1.2),ca=W.adjustAlpha(H)+
"";a.roofColor&&(W=Q.parse(a.roofColor),ca=W.adjustAlpha(H)+"");void 0!==a.shadows&&da.setEnabled(a.shadows);e();return this};this.setCamOffset=function(a,b){fa=w+a;ga=C+b};this.setMaxZoom=function(a){O=a};this.setDate=function(a){da.setDate(a);return this};this.appendTo=function(a){return V.init(a)};this.loadData=function(a){x.load(a);return this};this.setData=function(a){x.set(a);return this};this.onMoveEnd=function(){var b=a(z,K),c=a(z+m,K+C);e();(b[$]>x.n||b[aa]<x.w||c[$]<x.s||c[aa]>x.e)&&x.update()};
this.onZoomEnd=function(a){ea=!1;c(a.zoom);x.update();e()};this.onZoomStart=function(){ea=!0;e()};this.setOrigin=function(a,b){z=a;K=b};this.setSize=function(a,b){m=a;C=b;w=m/2<<0;A=C/2<<0;fa=w;ga=C;X=m/(1.5/(window.devicePixelRatio||1))/ia(45)<<0;V.setSize(m,C);R=X-50};this.setZoom=c;this.render=d};f.VERSION="0.1.8a";f.ATTRIBUTION='&copy; <a href="http://osmbuildings.org">OSM Buildings</a>';f.OSM_XAPI_URL="http://overpass-api.de/api/interpreter?data=[out:json];(way[%22building%22]({s},{w},{n},{e});node(w);way[%22building:part%22=%22yes%22]({s},{w},{n},{e});node(w);relation[%22building%22]({s},{w},{n},{e});way(r);node(w););out;";
return f}();
OpenLayers.Layer.Buildings=OpenLayers.Class(OpenLayers.Layer,{CLASS_NAME:"OpenLayers.Layer.Buildings",name:"OSM Buildings",attribution:OSMBuildings.ATTRIBUTION,isBaseLayer:!1,alwaysInRange:!0,dxSum:0,dySum:0,initialize:function(g){g=g||{};g.projection="EPSG:900913";OpenLayers.Layer.prototype.initialize.call(this,this.name,g)},setOrigin:function(){var g=this.map.getLonLatFromPixel(new OpenLayers.Pixel(0,0)),F=this.map.resolution,G=this.maxExtent,T=Math.round((g.lon-G.left)/F),g=Math.round((G.top-g.lat)/
F);this.osmb.setOrigin(T,g)},setMap:function(g){this.map||OpenLayers.Layer.prototype.setMap.call(this,g);this.osmb||(this.osmb=new OSMBuildings,this.container=this.osmb.appendTo(this.div));this.osmb.setSize(this.map.size.w,this.map.size.h);this.osmb.setZoom(this.map.zoom);this.setOrigin()},removeMap:function(g){this.container.parentNode.removeChild(this.container);OpenLayers.Layer.prototype.removeMap.call(this,g)},onMapResize:function(){OpenLayers.Layer.prototype.onMapResize.call(this);this.osmb.onResize({width:this.map.size.w,
height:this.map.size.h})},moveTo:function(g,F,G){g=OpenLayers.Layer.prototype.moveTo.call(this,g,F,G);if(!G){G=parseInt(this.map.layerContainerDiv.style.left,10);var T=parseInt(this.map.layerContainerDiv.style.top,10);this.div.style.left=-G+"px";this.div.style.top=-T+"px"}this.setOrigin();this.dySum=this.dxSum=0;this.osmb.setCamOffset(this.dxSum,this.dySum);if(F)this.osmb.onZoomEnd({zoom:this.map.zoom});else this.osmb.onMoveEnd();return g},moveByPx:function(g,F){this.dxSum+=g;this.dySum+=F;var G=
OpenLayers.Layer.prototype.moveByPx.call(this,g,F);this.osmb.setCamOffset(this.dxSum,this.dySum);this.osmb.render();return G},setStyle:function(g){return this.osmb.setStyle(g)},setDate:function(g){return this.osmb.setDate(g)},load:function(g){this.osmb.loadData(g)},geoJSON:function(g){this.osmb.setData(g)}});
