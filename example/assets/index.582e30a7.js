var e=Object.defineProperty,r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,n=(r,t,a)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a,o=(e,o)=>{for(var i in o||(o={}))t.call(o,i)&&n(e,i,o[i]);if(r)for(var i of r(o))a.call(o,i)&&n(e,i,o[i]);return e};import{i}from"./animate.193f5b76.js";import{n as s,r as c}from"./function.b7cba7b9.js";import{f as l,g as f,E as h}from"./constants.3b37bb64.js";import{m as d,k as u,d as m,o as p,c as v}from"./vendor.e458434b.js";function g(e){let r;r=e.split(",")[0].indexOf("base64")>=0?atob(e.split(",")[1]):unescape(e.split(",")[1]);const t=e.split(",")[0].split(":")[1].split(";")[0],a=new Uint8Array(r.length);for(let n=0;n<r.length;n++)a[n]=r.charCodeAt(n);return new Blob([a.buffer],{type:t})}class w{constructor(e){const{files:r,size:t}=e;this.files=r,this.index=0,this.size=t||0,this.complete=e.complete}readImage(){this.start(this.files)}start(e){e.map((e=>{this.readFileContent(e)}))}readFileContent(e){if(this.size&&e.size>this.size)return void this.complete({errorCode:101,errorMsg:`上传失败，您的图片超过最大值${this.size}kb`,file:e,data:null});const r=new FileReader;r.onload=()=>{this.complete({errorCode:0,errorMsg:"上传成功",file:e,data:r.result})},r.onerror=()=>{this.complete({errorCode:102,errorMsg:"上传失败",file:e,data:null})},r.readAsDataURL(e)}}var b={exports:{}};!function(e){function r(e){var r,t,a,n,o,i=Math.floor,s=new Array(64),c=new Array(64),l=new Array(64),f=new Array(64),h=new Array(65535),d=new Array(65535),u=new Array(64),m=new Array(64),p=[],v=0,g=7,w=new Array(64),b=new Array(64),y=new Array(64),A=new Array(256),x=new Array(2048),k=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],M=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],C=[0,1,2,3,4,5,6,7,8,9,10,11],I=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],P=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],U=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],T=[0,1,2,3,4,5,6,7,8,9,10,11],E=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],S=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];function O(e,r){for(var t=0,a=0,n=new Array,o=1;o<=16;o++){for(var i=1;i<=e[o];i++)n[r[a]]=[],n[r[a]][0]=t,n[r[a]][1]=o,a++,t++;t*=2}return n}function B(e){for(var r=e[0],t=e[1]-1;t>=0;)r&1<<t&&(v|=1<<g),t--,--g<0&&(255==v?(L(255),L(0)):L(v),g=7,v=0)}function L(e){p.push(e)}function D(e){L(e>>8&255),L(255&e)}function X(e,r,t,a,n){for(var o,i=n[0],s=n[240],c=function(e,r){var t,a,n,o,i,s,c,l,f,h,d=0;for(f=0;f<8;++f){t=e[d],a=e[d+1],n=e[d+2],o=e[d+3],i=e[d+4],s=e[d+5],c=e[d+6];var m=t+(l=e[d+7]),p=t-l,v=a+c,g=a-c,w=n+s,b=n-s,y=o+i,A=o-i,x=m+y,k=m-y,M=v+w,C=v-w;e[d]=x+M,e[d+4]=x-M;var I=.707106781*(C+k);e[d+2]=k+I,e[d+6]=k-I;var P=.382683433*((x=A+b)-(C=g+p)),U=.5411961*x+P,T=1.306562965*C+P,E=.707106781*(M=b+g),S=p+E,O=p-E;e[d+5]=O+U,e[d+3]=O-U,e[d+1]=S+T,e[d+7]=S-T,d+=8}for(d=0,f=0;f<8;++f){t=e[d],a=e[d+8],n=e[d+16],o=e[d+24],i=e[d+32],s=e[d+40],c=e[d+48];var B=t+(l=e[d+56]),L=t-l,D=a+c,X=a-c,z=n+s,R=n-s,q=o+i,j=o-i,Y=B+q,F=B-q,Q=D+z,G=D-z;e[d]=Y+Q,e[d+32]=Y-Q;var $=.707106781*(G+F);e[d+16]=F+$,e[d+48]=F-$;var H=.382683433*((Y=j+R)-(G=X+L)),V=.5411961*Y+H,_=1.306562965*G+H,N=.707106781*(Q=R+X),J=L+N,K=L-N;e[d+40]=K+V,e[d+24]=K-V,e[d+8]=J+_,e[d+56]=J-_,d++}for(f=0;f<64;++f)h=e[f]*r[f],u[f]=h>0?h+.5|0:h-.5|0;return u}(e,r),l=0;l<64;++l)m[k[l]]=c[l];var f=m[0]-t;t=m[0],0==f?B(a[0]):(B(a[d[o=32767+f]]),B(h[o]));for(var p=63;p>0&&0==m[p];p--);if(0==p)return B(i),t;for(var v,g=1;g<=p;){for(var w=g;0==m[g]&&g<=p;++g);var b=g-w;if(b>=16){v=b>>4;for(var y=1;y<=v;++y)B(s);b&=15}o=32767+m[g],B(n[(b<<4)+d[o]]),B(h[o]),g++}return 63!=p&&B(i),t}function z(e){if(e<=0&&(e=1),e>100&&(e=100),o!=e){(function(e){for(var r=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],t=0;t<64;t++){var a=i((r[t]*e+50)/100);a<1?a=1:a>255&&(a=255),s[k[t]]=a}for(var n=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],o=0;o<64;o++){var h=i((n[o]*e+50)/100);h<1?h=1:h>255&&(h=255),c[k[o]]=h}for(var d=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],u=0,m=0;m<8;m++)for(var p=0;p<8;p++)l[u]=1/(s[k[u]]*d[m]*d[p]*8),f[u]=1/(c[k[u]]*d[m]*d[p]*8),u++})(e<50?Math.floor(5e3/e):Math.floor(200-2*e)),o=e}}this.encode=function(e,o){(new Date).getTime(),o&&z(o),p=new Array,v=0,g=7,D(65496),D(65504),D(16),L(74),L(70),L(73),L(70),L(0),L(1),L(1),L(0),D(1),D(1),L(0),L(0),function(e){if(e){D(65505),69===e[0]&&120===e[1]&&105===e[2]&&102===e[3]?D(e.length+2):(D(e.length+5+2),L(69),L(120),L(105),L(102),L(0));for(var r=0;r<e.length;r++)L(e[r])}}(e.exifBuffer),function(){D(65499),D(132),L(0);for(var e=0;e<64;e++)L(s[e]);L(1);for(var r=0;r<64;r++)L(c[r])}(),function(e,r){D(65472),D(17),L(8),D(r),D(e),L(3),L(1),L(17),L(0),L(2),L(17),L(1),L(3),L(17),L(1)}(e.width,e.height),function(){D(65476),D(418),L(0);for(var e=0;e<16;e++)L(M[e+1]);for(var r=0;r<=11;r++)L(C[r]);L(16);for(var t=0;t<16;t++)L(I[t+1]);for(var a=0;a<=161;a++)L(P[a]);L(1);for(var n=0;n<16;n++)L(U[n+1]);for(var o=0;o<=11;o++)L(T[o]);L(17);for(var i=0;i<16;i++)L(E[i+1]);for(var s=0;s<=161;s++)L(S[s])}(),D(65498),D(12),L(3),L(1),L(0),L(2),L(17),L(3),L(17),L(0),L(63),L(0);var i=0,h=0,d=0;v=0,g=7,this.encode.displayName="_encode_";for(var u,m,A,k,O,R,q,j,Y,F=e.data,Q=e.width,G=e.height,$=4*Q,H=0;H<G;){for(u=0;u<$;){for(R=O=$*H+u,q=-1,j=0,Y=0;Y<64;Y++)R=O+(j=Y>>3)*$+(q=4*(7&Y)),H+j>=G&&(R-=$*(H+1+j-G)),u+q>=$&&(R-=u+q-$+4),m=F[R++],A=F[R++],k=F[R++],w[Y]=(x[m]+x[A+256>>0]+x[k+512>>0]>>16)-128,b[Y]=(x[m+768>>0]+x[A+1024>>0]+x[k+1280>>0]>>16)-128,y[Y]=(x[m+1280>>0]+x[A+1536>>0]+x[k+1792>>0]>>16)-128;i=X(w,l,i,r,a),h=X(b,f,h,t,n),d=X(y,f,d,t,n),u+=32}H+=8}if(g>=0){var V=[];V[1]=g+1,V[0]=(1<<g+1)-1,B(V)}return D(65497),Buffer.from(p)},(new Date).getTime(),e||(e=50),function(){for(var e=String.fromCharCode,r=0;r<256;r++)A[r]=e(r)}(),r=O(M,C),t=O(U,T),a=O(I,P),n=O(E,S),function(){for(var e=1,r=2,t=1;t<=15;t++){for(var a=e;a<r;a++)d[32767+a]=t,h[32767+a]=[],h[32767+a][1]=t,h[32767+a][0]=a;for(var n=-(r-1);n<=-e;n++)d[32767+n]=t,h[32767+n]=[],h[32767+n][1]=t,h[32767+n][0]=r-1+n;e<<=1,r<<=1}}(),function(){for(var e=0;e<256;e++)x[e]=19595*e,x[e+256>>0]=38470*e,x[e+512>>0]=7471*e+32768,x[e+768>>0]=-11059*e,x[e+1024>>0]=-21709*e,x[e+1280>>0]=32768*e+8421375,x[e+1536>>0]=-27439*e,x[e+1792>>0]=-5329*e}(),z(e),(new Date).getTime()}b.exports=function(e,t){void 0===t&&(t=50);return{data:new r(t).encode(e,t),width:e.width,height:e.height}}}();var y,A,x={exports:{}};y=x,A=function(){var e=new Int32Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]),r=4017,t=799,a=3406,n=2276,o=1567,i=3784,s=5793,c=2896;function l(){}function f(e,r){for(var t,a,n=0,o=[],i=16;i>0&&!e[i-1];)i--;o.push({children:[],index:0});var s,c=o[0];for(t=0;t<i;t++){for(a=0;a<e[t];a++){for((c=o.pop()).children[c.index]=r[n];c.index>0;){if(0===o.length)throw new Error("Could not recreate Huffman Table");c=o.pop()}for(c.index++,o.push(c);o.length<=t;)o.push(s={children:[],index:0}),c.children[c.index]=s.children,c=s;n++}t+1<i&&(o.push(s={children:[],index:0}),c.children[c.index]=s.children,c=s)}return o[0].children}function h(r,t,a,n,o,i,s,c,l,f){a.precision,a.samplesPerLine,a.scanLines;var h=a.mcusPerLine,d=a.progressive;a.maxH,a.maxV;var u=t,m=0,p=0;function v(){if(p>0)return p--,m>>p&1;if(255==(m=r[t++])){var e=r[t++];if(e)throw new Error("unexpected marker: "+(m<<8|e).toString(16))}return p=7,m>>>7}function g(e){for(var r,t=e;null!==(r=v());){if("number"==typeof(t=t[r]))return t;if("object"!=typeof t)throw new Error("invalid huffman sequence")}return null}function w(e){for(var r=0;e>0;){var t=v();if(null===t)return;r=r<<1|t,e--}return r}function b(e){var r=w(e);return r>=1<<e-1?r:r+(-1<<e)+1}var y,A=0,x=0;function k(e,r,t,a,n){var o=t%h,i=(t/h|0)*e.v+a,s=o*e.h+n;void 0===e.blocks[i]&&f.tolerantDecoding||r(e,e.blocks[i][s])}var M,C,I,P,U,T,E=n.length;T=d?0===i?0===c?function(e,r){var t=g(e.huffmanTableDC),a=0===t?0:b(t)<<l;r[0]=e.pred+=a}:function(e,r){r[0]|=v()<<l}:0===c?function(r,t){if(A>0)A--;else for(var a=i,n=s;a<=n;){var o=g(r.huffmanTableAC),c=15&o,f=o>>4;if(0!==c)t[e[a+=f]]=b(c)*(1<<l),a++;else{if(f<15){A=w(f)+(1<<f)-1;break}a+=16}}}:function(r,t){for(var a=i,n=s,o=0;a<=n;){var c=e[a],f=t[c]<0?-1:1;switch(x){case 0:var h=g(r.huffmanTableAC),d=15&h;if(o=h>>4,0===d)o<15?(A=w(o)+(1<<o),x=4):(o=16,x=1);else{if(1!==d)throw new Error("invalid ACn encoding");y=b(d),x=o?2:3}continue;case 1:case 2:t[c]?t[c]+=(v()<<l)*f:0==--o&&(x=2==x?3:0);break;case 3:t[c]?t[c]+=(v()<<l)*f:(t[c]=y<<l,x=0);break;case 4:t[c]&&(t[c]+=(v()<<l)*f)}a++}4===x&&0==--A&&(x=0)}:function(r,t){var a=g(r.huffmanTableDC),n=0===a?0:b(a);t[0]=r.pred+=n;for(var o=1;o<64;){var i=g(r.huffmanTableAC),s=15&i,c=i>>4;if(0!==s)t[e[o+=c]]=b(s),o++;else{if(c<15)break;o+=16}}};var S,O,B,L,D,X,z,R,q,j=0;for(O=1==E?n[0].blocksPerLine*n[0].blocksPerColumn:h*a.mcusPerColumn,o||(o=O);j<O;){for(C=0;C<E;C++)n[C].pred=0;if(A=0,1==E)for(M=n[0],U=0;U<o;U++)X=T,R=void 0,q=void 0,R=(z=j)/(D=M).blocksPerLine|0,q=z%D.blocksPerLine,void 0===D.blocks[R]&&f.tolerantDecoding||X(D,D.blocks[R][q]),j++;else for(U=0;U<o;U++){for(C=0;C<E;C++)for(B=(M=n[C]).h,L=M.v,I=0;I<L;I++)for(P=0;P<B;P++)k(M,T,j,I,P);if(++j===O)break}if(j===O)do{if(255===r[t]&&0!==r[t+1])break;t+=1}while(t<r.length-2);if(p=0,(S=r[t]<<8|r[t+1])<65280)throw new Error("marker was not found");if(!(S>=65488&&S<=65495))break;t+=2}return t-u}function d(e,l){var f,h,d=[],u=l.blocksPerLine,m=l.blocksPerColumn,p=u<<3,g=new Int32Array(64),w=new Uint8Array(64);function b(e,f,h){var d,u,m,p,v,g,w,b,y,A,x=l.quantizationTable,k=h;for(A=0;A<64;A++)k[A]=e[A]*x[A];for(A=0;A<8;++A){var M=8*A;0!=k[1+M]||0!=k[2+M]||0!=k[3+M]||0!=k[4+M]||0!=k[5+M]||0!=k[6+M]||0!=k[7+M]?(d=s*k[0+M]+128>>8,u=s*k[4+M]+128>>8,m=k[2+M],p=k[6+M],v=c*(k[1+M]-k[7+M])+128>>8,b=c*(k[1+M]+k[7+M])+128>>8,g=k[3+M]<<4,w=k[5+M]<<4,y=d-u+1>>1,d=d+u+1>>1,u=y,y=m*i+p*o+128>>8,m=m*o-p*i+128>>8,p=y,y=v-w+1>>1,v=v+w+1>>1,w=y,y=b+g+1>>1,g=b-g+1>>1,b=y,y=d-p+1>>1,d=d+p+1>>1,p=y,y=u-m+1>>1,u=u+m+1>>1,m=y,y=v*n+b*a+2048>>12,v=v*a-b*n+2048>>12,b=y,y=g*t+w*r+2048>>12,g=g*r-w*t+2048>>12,w=y,k[0+M]=d+b,k[7+M]=d-b,k[1+M]=u+w,k[6+M]=u-w,k[2+M]=m+g,k[5+M]=m-g,k[3+M]=p+v,k[4+M]=p-v):(y=s*k[0+M]+512>>10,k[0+M]=y,k[1+M]=y,k[2+M]=y,k[3+M]=y,k[4+M]=y,k[5+M]=y,k[6+M]=y,k[7+M]=y)}for(A=0;A<8;++A){var C=A;0!=k[8+C]||0!=k[16+C]||0!=k[24+C]||0!=k[32+C]||0!=k[40+C]||0!=k[48+C]||0!=k[56+C]?(d=s*k[0+C]+2048>>12,u=s*k[32+C]+2048>>12,m=k[16+C],p=k[48+C],v=c*(k[8+C]-k[56+C])+2048>>12,b=c*(k[8+C]+k[56+C])+2048>>12,g=k[24+C],w=k[40+C],y=d-u+1>>1,d=d+u+1>>1,u=y,y=m*i+p*o+2048>>12,m=m*o-p*i+2048>>12,p=y,y=v-w+1>>1,v=v+w+1>>1,w=y,y=b+g+1>>1,g=b-g+1>>1,b=y,y=d-p+1>>1,d=d+p+1>>1,p=y,y=u-m+1>>1,u=u+m+1>>1,m=y,y=v*n+b*a+2048>>12,v=v*a-b*n+2048>>12,b=y,y=g*t+w*r+2048>>12,g=g*r-w*t+2048>>12,w=y,k[0+C]=d+b,k[56+C]=d-b,k[8+C]=u+w,k[48+C]=u-w,k[16+C]=m+g,k[40+C]=m-g,k[24+C]=p+v,k[32+C]=p-v):(y=s*h[A+0]+8192>>14,k[0+C]=y,k[8+C]=y,k[16+C]=y,k[24+C]=y,k[32+C]=y,k[40+C]=y,k[48+C]=y,k[56+C]=y)}for(A=0;A<64;++A){var I=128+(k[A]+8>>4);f[A]=I<0?0:I>255?255:I}}v(p*m*8);for(var y=0;y<m;y++){var A=y<<3;for(f=0;f<8;f++)d.push(new Uint8Array(p));for(var x=0;x<u;x++){b(l.blocks[y][x],w,g);var k=0,M=x<<3;for(h=0;h<8;h++){var C=d[A+h];for(f=0;f<8;f++)C[M+f]=w[k++]}}}return d}function u(e){return e<0?0:e>255?255:e}l.prototype={load:function(e){var r=new XMLHttpRequest;r.open("GET",e,!0),r.responseType="arraybuffer",r.onload=function(){var e=new Uint8Array(r.response||r.mozResponseArrayBuffer);this.parse(e),this.onload&&this.onload()}.bind(this),r.send(null)},parse:function(r){var t=1e3*this.opts.maxResolutionInMP*1e3,a=0;function n(){var e=r[a]<<8|r[a+1];return a+=2,e}function o(e){var r,t,a=0,n=0;for(t in e.components)e.components.hasOwnProperty(t)&&(a<(r=e.components[t]).h&&(a=r.h),n<r.v&&(n=r.v));var o=Math.ceil(e.samplesPerLine/8/a),i=Math.ceil(e.scanLines/8/n);for(t in e.components)if(e.components.hasOwnProperty(t)){r=e.components[t];var s=Math.ceil(Math.ceil(e.samplesPerLine/8)*r.h/a),c=Math.ceil(Math.ceil(e.scanLines/8)*r.v/n),l=o*r.h,f=i*r.v,h=[];v(f*l*256);for(var d=0;d<f;d++){for(var u=[],m=0;m<l;m++)u.push(new Int32Array(64));h.push(u)}r.blocksPerLine=s,r.blocksPerColumn=c,r.blocks=h}e.maxH=a,e.maxV=n,e.mcusPerLine=o,e.mcusPerColumn=i}r.length;var i,s,c,l,u=null,m=null,p=[],g=[],w=[],b=[],y=n(),A=-1;if(this.comments=[],65496!=y)throw new Error("SOI not found");for(y=n();65497!=y;){switch(y){case 65280:break;case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:var x=(c=void 0,l=void 0,c=n(),l=r.subarray(a,a+c-2),a+=l.length,l);if(65534===y){var k=String.fromCharCode.apply(null,x);this.comments.push(k)}65504===y&&74===x[0]&&70===x[1]&&73===x[2]&&70===x[3]&&0===x[4]&&(u={version:{major:x[5],minor:x[6]},densityUnits:x[7],xDensity:x[8]<<8|x[9],yDensity:x[10]<<8|x[11],thumbWidth:x[12],thumbHeight:x[13],thumbData:x.subarray(14,14+3*x[12]*x[13])}),65505===y&&69===x[0]&&120===x[1]&&105===x[2]&&102===x[3]&&0===x[4]&&(this.exifBuffer=x.subarray(5,x.length)),65518===y&&65===x[0]&&100===x[1]&&111===x[2]&&98===x[3]&&101===x[4]&&0===x[5]&&(m={version:x[6],flags0:x[7]<<8|x[8],flags1:x[9]<<8|x[10],transformCode:x[11]});break;case 65499:for(var M=n()+a-2;a<M;){var C=r[a++];v(256);var I=new Int32Array(64);if(C>>4==0)for(_=0;_<64;_++)I[e[_]]=r[a++];else{if(C>>4!=1)throw new Error("DQT: invalid table spec");for(_=0;_<64;_++)I[e[_]]=n()}p[15&C]=I}break;case 65472:case 65473:case 65474:n(),(i={}).extended=65473===y,i.progressive=65474===y,i.precision=r[a++],i.scanLines=n(),i.samplesPerLine=n(),i.components={},i.componentsOrder=[];var P=i.scanLines*i.samplesPerLine;if(P>t){var U=Math.ceil((P-t)/1e6);throw new Error(`maxResolutionInMP limit exceeded by ${U}MP`)}var T,E=r[a++];for(H=0;H<E;H++){T=r[a];var S=r[a+1]>>4,O=15&r[a+1],B=r[a+2];i.componentsOrder.push(T),i.components[T]={h:S,v:O,quantizationIdx:B},a+=3}o(i),g.push(i);break;case 65476:var L=n();for(H=2;H<L;){var D=r[a++],X=new Uint8Array(16),z=0;for(_=0;_<16;_++,a++)z+=X[_]=r[a];v(16+z);var R=new Uint8Array(z);for(_=0;_<z;_++,a++)R[_]=r[a];H+=17+z,(D>>4==0?b:w)[15&D]=f(X,R)}break;case 65501:n(),s=n();break;case 65500:n(),n();break;case 65498:n();var q=r[a++],j=[];for(H=0;H<q;H++){N=i.components[r[a++]];var Y=r[a++];N.huffmanTableDC=b[Y>>4],N.huffmanTableAC=w[15&Y],j.push(N)}var F=r[a++],Q=r[a++],G=r[a++],$=h(r,a,i,j,s,F,Q,G>>4,15&G,this.opts);a+=$;break;case 65535:255!==r[a]&&a--;break;default:if(255==r[a-3]&&r[a-2]>=192&&r[a-2]<=254){a-=3;break}if(224===y||225==y){if(-1!==A)throw new Error(`first unknown JPEG marker at offset ${A.toString(16)}, second unknown JPEG marker ${y.toString(16)} at offset ${(a-1).toString(16)}`);A=a-1;const e=n();if(255===r[a+e-2]){a+=e-2;break}}throw new Error("unknown JPEG marker "+y.toString(16))}y=n()}if(1!=g.length)throw new Error("only single frame JPEGs supported");for(var H=0;H<g.length;H++){var V=g[H].components;for(var _ in V)V[_].quantizationTable=p[V[_].quantizationIdx],delete V[_].quantizationIdx}for(this.width=i.samplesPerLine,this.height=i.scanLines,this.jfif=u,this.adobe=m,this.components=[],H=0;H<i.componentsOrder.length;H++){var N=i.components[i.componentsOrder[H]];this.components.push({lines:d(0,N),scaleX:N.h/i.maxH,scaleY:N.v/i.maxV})}},getData:function(e,r){var t,a,n,o,i,s,c,l,f,h,d,m,p,g,w,b,y,A,x,k,M,C=this.width/e,I=this.height/r,P=0,U=e*r*this.components.length;v(U);var T=new Uint8Array(U);switch(this.components.length){case 1:for(t=this.components[0],h=0;h<r;h++)for(i=t.lines[0|h*t.scaleY*I],f=0;f<e;f++)d=i[0|f*t.scaleX*C],T[P++]=d;break;case 2:for(t=this.components[0],a=this.components[1],h=0;h<r;h++)for(i=t.lines[0|h*t.scaleY*I],s=a.lines[0|h*a.scaleY*I],f=0;f<e;f++)d=i[0|f*t.scaleX*C],T[P++]=d,d=s[0|f*a.scaleX*C],T[P++]=d;break;case 3:for(M=!0,this.adobe&&this.adobe.transformCode?M=!0:void 0!==this.opts.colorTransform&&(M=!!this.opts.colorTransform),t=this.components[0],a=this.components[1],n=this.components[2],h=0;h<r;h++)for(i=t.lines[0|h*t.scaleY*I],s=a.lines[0|h*a.scaleY*I],c=n.lines[0|h*n.scaleY*I],f=0;f<e;f++)M?(d=i[0|f*t.scaleX*C],m=s[0|f*a.scaleX*C],A=u(d+1.402*((p=c[0|f*n.scaleX*C])-128)),x=u(d-.3441363*(m-128)-.71413636*(p-128)),k=u(d+1.772*(m-128))):(A=i[0|f*t.scaleX*C],x=s[0|f*a.scaleX*C],k=c[0|f*n.scaleX*C]),T[P++]=A,T[P++]=x,T[P++]=k;break;case 4:if(!this.adobe)throw new Error("Unsupported color mode (4 components)");for(M=!1,this.adobe&&this.adobe.transformCode?M=!0:void 0!==this.opts.colorTransform&&(M=!!this.opts.colorTransform),t=this.components[0],a=this.components[1],n=this.components[2],o=this.components[3],h=0;h<r;h++)for(i=t.lines[0|h*t.scaleY*I],s=a.lines[0|h*a.scaleY*I],c=n.lines[0|h*n.scaleY*I],l=o.lines[0|h*o.scaleY*I],f=0;f<e;f++)M?(d=i[0|f*t.scaleX*C],m=s[0|f*a.scaleX*C],p=c[0|f*n.scaleX*C],g=l[0|f*o.scaleX*C],w=255-u(d+1.402*(p-128)),b=255-u(d-.3441363*(m-128)-.71413636*(p-128)),y=255-u(d+1.772*(m-128))):(w=i[0|f*t.scaleX*C],b=s[0|f*a.scaleX*C],y=c[0|f*n.scaleX*C],g=l[0|f*o.scaleX*C]),T[P++]=255-w,T[P++]=255-b,T[P++]=255-y,T[P++]=255-g;break;default:throw new Error("Unsupported color mode")}return T},copyToImageData:function(e,r){var t,a,n,o,i,s,c,l,f,h=e.width,d=e.height,m=e.data,p=this.getData(h,d),v=0,g=0;switch(this.components.length){case 1:for(a=0;a<d;a++)for(t=0;t<h;t++)n=p[v++],m[g++]=n,m[g++]=n,m[g++]=n,r&&(m[g++]=255);break;case 3:for(a=0;a<d;a++)for(t=0;t<h;t++)c=p[v++],l=p[v++],f=p[v++],m[g++]=c,m[g++]=l,m[g++]=f,r&&(m[g++]=255);break;case 4:for(a=0;a<d;a++)for(t=0;t<h;t++)i=p[v++],s=p[v++],n=p[v++],c=255-u(i*(1-(o=p[v++])/255)+o),l=255-u(s*(1-o/255)+o),f=255-u(n*(1-o/255)+o),m[g++]=c,m[g++]=l,m[g++]=f,r&&(m[g++]=255);break;default:throw new Error("Unsupported color mode")}}};var m=0,p=0;function v(e=0){var r=m+e;if(r>p){var t=Math.ceil((r-p)/1024/1024);throw new Error(`maxMemoryUsageInMB limit exceeded by at least ${t}MB`)}m=r}return l.resetMaxMemoryUsage=function(e){m=0,p=e},l.getBytesAllocated=function(){return m},l.requestMemoryAllocation=v,l}(),y.exports=function(e,r={}){var t=o(o({},{colorTransform:void 0,useTArray:!1,formatAsRGBA:!0,tolerantDecoding:!0,maxResolutionInMP:100,maxMemoryUsageInMB:512}),r),a=new Uint8Array(e),n=new A;n.opts=t,A.resetMaxMemoryUsage(1024*t.maxMemoryUsageInMB*1024),n.parse(a);var i=t.formatAsRGBA?4:3,s=n.width*n.height*i;try{A.requestMemoryAllocation(s);var c={width:n.width,height:n.height,exifBuffer:n.exifBuffer,data:t.useTArray?new Uint8Array(s):Buffer.alloc(s)};n.comments.length>0&&(c.comments=n.comments)}catch(l){throw l instanceof RangeError?new Error("Could not allocate enough memory for the image. Required: "+s):l}return n.copyToImageData(c,t.formatAsRGBA),c};var k={encode:b.exports,decode:x.exports};const M=i?(e=>{const r=/OS (\d)_.* like Mac OS X/g.exec(e),t=/Android (\d.*?);/g.exec(e)||/Android\/(\d.*?) /g.exec(e),a=null==r?void 0:r.pop(),n=null==t?void 0:t.pop();return{oldIOS:!!a&&+a<8.3,oldAndroid:!!n&&+n.substr(0,3)<4.5,ios:/\(i[^;]+;( U;)? CPU.+Mac OS X/.test(e),android:/Android/g.test(e),mQQBrowser:/MQQBrowser/g.test(e)}})(navigator.userAgent):{oldIOS:!1,oldAndroid:!1,ios:!1,android:!1,mQQBrowser:!1};function C(e){const r=function(e){e=e.replace(/^data:([^;]+);base64,/gim,"").replace(/\s/g,"");const r=atob(e),t=r.length,a=new ArrayBuffer(t),n=new Uint8Array(a);for(let o=0;o<t;o++)n[o]=r.charCodeAt(o);return a}(e),t=new DataView(r);if(65496!==t.getUint16(0,!1))return-2;const a=t.byteLength;let n=2;for(;n<a;){const e=t.getUint16(n,!1);if(n+=2,65505===e){if(1165519206!==t.getUint32(n+=2,!1))return-1;const e=18761===t.getUint16(n+=6,!1);n+=t.getUint32(n+4,e);const r=t.getUint16(n,e);n+=2;for(let a=0;a<r;a++)if(274===t.getUint16(n+12*a,e))return t.getUint16(n+12*a+8,e)}else{if(65280!=(65280&e))break;n+=t.getUint16(n,!1)}}return-1}function I(e,r,t,a,n){if(!i)return;const{width:o,height:s}=function(e,r,t,a){const n={width:e.width,height:e.height};if("5678".indexOf(r)>-1&&(n.width=e.height,n.height=e.width),n.width<t||n.height<a)return n;const o=+n.width/+n.height;return t&&a?o>=t/a?n.width>t&&(n.width=t,n.height=Math.ceil(t/o)):n.height>a&&(n.height=a,n.width=Math.ceil(a*o)):t?t<n.width&&(n.width=t,n.height=Math.ceil(t/o)):a<n.height&&(n.width=Math.ceil(a*o),n.height=a),(n.width>=3264||n.height>=2448)&&(n.width*=.8,n.height*=.8),n}(e,r,t,a),c=document.createElement("canvas"),l=c.getContext("2d");c.width=+o,c.height=+s,l.drawImage(e,0,0,o,s);let f=null;if(CSS&&CSS.supports&&!CSS.supports("image-orientation:none"))switch(r){case 3:l.rotate(180*Math.PI/180),l.drawImage(e,-o,-s,o,s);break;case 6:l.rotate(90*Math.PI/180),l.drawImage(e,0,-o,s,o);break;case 8:l.rotate(270*Math.PI/180),l.drawImage(e,-s,0,s,o);break;case 2:l.translate(o,0),l.scale(-1,1),l.drawImage(e,0,0,o,s);break;case 4:l.translate(o,0),l.scale(-1,1),l.rotate(180*Math.PI/180),l.drawImage(e,-o,-s,o,s);break;case 5:l.translate(o,0),l.scale(-1,1),l.rotate(90*Math.PI/180),l.drawImage(e,0,-o,s,o);break;case 7:l.translate(o,0),l.scale(-1,1),l.rotate(270*Math.PI/180),l.drawImage(e,-s,0,s,o);break;default:l.drawImage(e,0,0,o,s)}else"5678".includes(r)?l.drawImage(e,0,0,s,o):l.drawImage(e,0,0,o,s);if(M.oldIOS||M.oldAndroid||M.mQQBrowser||!navigator.userAgent){const e=l.getImageData(0,0,c.width,c.height);f=k.encode(e,100*n)}else f=c.toDataURL("image/jpeg",n);return f}const P=function(e,r=s){return new Promise(((t,a)=>{const{dataUrl:n,width:o,height:i,quality:s}=e,c=C(n),l=g(n);if(c>1||s<1||o||i){const e=new Image;e.src=n,e.onload=()=>{const a=I(e,c,o,i,s),n=g(a);r(a,n),t({dataUrl:a,blob:n})},e.onerror=()=>{r(null),a(new Error("image load error"))}}else r(n,l),t({dataUrl:n,blob:l})}))},U="the number of pictures exceeds the limit",T={name:{type:String,default:()=>c("image-reader")},disabled:{type:Boolean,deault:()=>!1},maxSize:{type:[String,Number],default:Number.MAX_VALUE},accept:{type:Array,default:()=>[]},isCameraOnly:{type:Boolean,default:!1},isMultiple:{type:Boolean,default:!1},maxAmount:{type:Number,default:Number.MAX_VALUE},beforeRead:{type:Function,default:void 0},isProcessor:{type:Boolean,default:()=>!1},processorOption:{type:Object,default:()=>({width:300,height:300,quality:.8})}},E=(e,{emit:r})=>{const t=d(Date.now()),a=()=>{t.value=Date.now()},n=u((()=>{if(e.accept.length){let r="";return e.accept.forEach((e=>{r+=`image/${e},`})),r.substring(0,r.length-1)}return"image/*"})),o=t=>{if(0===t.errorCode)if(e.isProcessor&&e.processorOption&&t.data){const{width:a,height:n,quality:o}=e.processorOption;P({dataUrl:t.data,width:a,height:n,quality:o}).then((({dataUrl:e})=>{r(f,{dataUrl:e,blob:g(e),file:t.file,errorMsg:"上传成功",errorCode:0})}))}else r(f,{dataUrl:t.data,blob:g(t.data),file:t.file,errorMsg:"上传成功",errorCode:0});else r(h,t)};return{inputTempKey:t,acceptType:n,onFileChange:t=>{const{files:n}=t.target;if(!n||!n.length||e.disabled)return;if(e.beforeRead){if(!e.beforeRead(n))return void a()}const i=[].slice.call(n);if(r(l,{files:i}),i&&e.maxAmount&&i.length>e.maxAmount)return r(h,{errorCode:"103",errorMsg:U,data:null}),void a();(r=>{const t={files:r,size:1e3*+e.maxSize,complete:o};new w(t).readImage()})(i)}}};var S=m({name:"MdImageReader",props:T,emits:[l,f,h],setup(e,r){const{inputTempKey:t,acceptType:a,onFileChange:n}=E(e,r);return{inputTempKey:t,acceptType:a,onFileChange:n}}});S.render=function(e,r,t,a,n,o){return p(),v("div",{class:["md-image-reader",{disabled:e.disabled}]},[(p(),v("input",{key:e.inputTempKey,class:"md-image-reader-file",type:"file",name:e.name,maxSize:e.maxSize,maxAmount:e.maxAmount,disabled:e.disabled,accept:e.acceptType,capture:e.isCameraOnly,multiple:e.isMultiple,onChange:r[1]||(r[1]=(...r)=>e.onFileChange&&e.onFileChange(...r))},null,40,["name","maxSize","maxAmount","disabled","accept","capture","multiple"]))],2)},S.install=e=>{e.component(S.name,S)};export{S as _,P as a,T as i};
