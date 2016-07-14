d=(w,h,c)=>`<div style=float:left;width:${w}em;height:${h}em;background:#${['0048e0','fff','d72828'][~~c]}>`;

document.write(d(25)+(a=[252,61,94,61,476]).concat(b=[261,70,485],810,b,a).map(v=>d(v>>5,v/4&7,v&3)).join(e='</div>')+e+e)
