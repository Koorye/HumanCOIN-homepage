import{d as an,h as ue,m as xn,i as le,c as s,o as a,k as V,x as ge,j as Xn,g as sn,y as ye,s as tn,F as x,r as z,u as t,e as $n,a as o,t as c,n as Dn,z as de,f as E,l as B,b as Z,B as xe,C as ve,E as ln,_ as $e,q as we,G as ze}from"./index-CLp2sPcZ.js";const Me=an({__name:"PlotBox",props:{h:{}},setup(n){const e=xn(null),i=xn(0);let u=null;function L(_){const f=_.getBoundingClientRect().width;f>0&&Math.abs(f-i.value)>.5&&(i.value=f)}return ue(()=>{const _=e.value;_&&(L(_),!(typeof ResizeObserver>"u")&&(u=new ResizeObserver(()=>L(_)),u.observe(_)))}),le(()=>{u?.disconnect(),u=null}),(_,f)=>(a(),s("div",{ref_key:"el",ref:e,class:"pbox",style:V({height:`${n.h}px`})},[i.value>0?ge(_.$slots,"default",{w:i.value,h:n.h},void 0,!0,0):Xn("",!0)],4))}}),hn=sn(Me,[["__scopeId","data-v-95ffa012"]]),Se=["data-on","width","height","viewBox","aria-label"],Ee={"aria-hidden":"true"},Oe=["x1","x2","y1","y2"],Te=["y"],Re=["x1","x2","y1","y2"],Be=["x","y"],Ce=["d"],Ae=["d"],Fe=["x","y","fill"],Ie=an({__name:"RankCurve",props:{series:{},yMax:{},h:{},aria:{},on:{type:Boolean}},setup(n){const{t:e}=$n();function i(u,L,_,f){const G=Math.max(70,L-46),y=10,w=_-26,C=Math.max(2,...u.map(m=>m.values.length)),P=Math.log10(C),k=m=>30+Math.log10(Math.max(m,1))/P*(G-30),O=Math.log10(f),M=m=>w-Math.log10(Math.max(m,1))/O*(w-y),T=u.map(m=>{const S=[];let j=[];const mn=()=>{if(!j.length)return;const J=j.map(Sn=>`${Sn.x.toFixed(1)},${Sn.y.toFixed(1)}`).join(" L"),K=`M${J}`,Mn=`M${j[0].x.toFixed(1)},${w.toFixed(1)} L${J} L${j[j.length-1].x.toFixed(1)},${w.toFixed(1)} Z`;S.push({line:K,area:Mn}),j=[]};return m.values.forEach((J,K)=>{J>0?j.push({x:k(K+1),y:M(J)}):mn()}),mn(),{id:m.id,colour:m.colour,dash:m.dash,paths:S}}),R=m=>m>=1e6?`${m/1e6}M`:m>=1e3?`${m/1e3}k`:String(m),nn=Math.log10(f)>=6?2:1,rn=[1,10,100,1e3,1e4,1e5,1e6].filter(m=>m<=f),wn=rn.filter((m,S)=>S%nn===0||S===rn.length-1).map(m=>({y:M(m),label:R(m)})),_n=u[0]?.values.length??0,zn=[1,10,100,_n].filter((m,S,j)=>m>=1&&m<=_n&&j.indexOf(m)===S).map(m=>({x:k(m),label:String(m)})),X=u.map(m=>{const S=m.values.length,j=m.values[S-1]??1;return{id:m.id,colour:m.colour,x:k(S)+5,y:M(j),count:S}});X.sort((m,S)=>m.y-S.y);for(let m=1;m<X.length;m+=1){const S=X[m-1];Math.abs(X[m].x-S.x)<58&&X[m].y-S.y<14&&(X[m].y=S.y+14)}return{runs:T,ends:X,yt:wn,xt:zn,x0:30,x1:G,base:w}}return(u,L)=>(a(),ye(hn,{h:n.h},{default:tn(({w:_})=>[(a(!0),s(x,null,z([i(n.series,_,n.h,n.yMax)],f=>(a(),s("svg",{key:0,class:"plot","data-on":n.on===!1?"false":"true",width:_,height:n.h,viewBox:`0 0 ${_} ${n.h}`,role:"img","aria-label":t(e)(n.aria)},[o("g",Ee,[(a(!0),s(x,null,z(f.yt,d=>(a(),s("line",{key:`g${d.label}`,class:"grid",x1:f.x0,x2:f.x1,y1:d.y,y2:d.y},null,8,Oe))),128)),(a(!0),s(x,null,z(f.yt,d=>(a(),s("text",{key:`y${d.label}`,class:"t-tick",x:"25",y:d.y+3.6,"text-anchor":"end"},c(d.label),9,Te))),128)),o("line",{class:"base",x1:f.x0,x2:f.x1,y1:f.base,y2:f.base},null,8,Re),(a(!0),s(x,null,z(f.xt,d=>(a(),s("text",{key:`x${d.label}`,class:"t-tick",x:d.x,y:n.h-10,"text-anchor":"middle"},c(d.label),9,Be))),128))]),(a(!0),s(x,null,z(f.runs,(d,v)=>(a(),s("g",{key:d.id},[(a(!0),s(x,null,z(d.paths,($,g)=>(a(),s("path",{key:`a${g}`,class:"area",d:$.area,style:V({fill:d.colour,"--i":v})},null,12,Ce))),128)),(a(!0),s(x,null,z(d.paths,($,g)=>(a(),s("path",{key:`l${g}`,class:Dn(["curve",{"curve--dash":!!d.dash}]),pathLength:1,d:$.line,style:V({stroke:d.colour,strokeDasharray:d.dash||void 0,"--i":v})},null,14,Ae))),128))]))),128)),(a(!0),s(x,null,z(f.ends,d=>(a(),s("text",{key:`e${d.id}`,class:"t-end",x:d.x,y:d.y+3.6,fill:d.colour},c(d.id)+" "+c(d.count),9,Fe))),128))],8,Se))),128))]),_:1},8,["h"]))}}),Kn=sn(Ie,[["__scopeId","data-v-5bcf3ae3"]]),je=`category,name,unit,L3,L2_estimated,L1
residential,kitchen,hours,35.108,271.52,868.22
industrial,factory_workshop,hours,0,311.052,857.146
professional,office,hours,162.374,177.078,789.172
residential,living_room,hours,0,43.286,758.961
residential,dining_room,hours,75.219,174.127,400.511
residential,storage_room,hours,0,98.377,502.795
industrial,workroom,hours,65.538,110,387.614
commercial,retail_store,hours,32.72,157.403,354.991
commercial,logistics_facility,hours,0,127.89,401.032
residential,bathroom,hours,0,169.208,338.894
residential,bedroom,hours,0,51.156,431.32
commercial,entertainment_venue,hours,0,0,472.792
professional,classroom,hours,0,12.5,338.894
professional,laboratory,hours,34.107,37.5,215.659
public,park_garden,hours,0,17.708,247.554
other,other,hours,0,64.117,177.474
commercial,restaurant,hours,0,28,197.688
public,public_facility,hours,0,0,215.265
commercial,beverage_shop,hours,29.72,32,141.206
commercial,pet_shop,hours,0,0,202.625
professional,healthcare_facility,hours,0,0,200.256
public,street,hours,0,0,193.738
public,farm,hours,0,19.675,150.685
residential,study_room,hours,34.494,34,95.362
public,indoor_sports_venue,hours,0,0,157.598
commercial,hotel,hours,0,38.377,112.965
industrial,industrial_warehouse,hours,0,0,126.571
residential,laundry_area,hours,30.72,25.026,69.354
commercial,performance_venue,hours,0,0,123.827
public,sports_area,hours,0,0,118.395
public,transportation,hours,0,0,90
commercial,hair_salon,hours,0,0,78.405
industrial,construction_site,hours,0,0,74.533
commercial,beauty_salon,hours,0,0,56.482
industrial,equipment_room,hours,0,0,15.605
professional,conference_center,hours,0,0,14.738
residential,balcony,hours,0,0,13.004
industrial,testing_lab,hours,0,0,8.669
`,De=`layer,name,unit,L3,L2_estimated,L1,zh
subtask,wipe,occurrences,30,546,4016,擦拭
subtask,open,occurrences,125,672,2882,打开
subtask,fold,occurrences,26,281,2565,折叠
subtask,close,occurrences,153,578,1401,关闭
subtask,arrange,occurrences,16,199,1812,摆放整理
subtask,remove,occurrences,37,342,1572,移除
subtask,throw,occurrences,0,139,1665,丢弃
subtask,organize,occurrences,16,132,1062,整理归置
subtask,pour,occurrences,67,64,889,倾倒
subtask,unfold,occurrences,0,79,868,展开
subtask,collect,occurrences,22,120,802,收集
subtask,hang,occurrences,13,7,874,悬挂
subtask,insert,occurrences,48,144,596,插入
subtask,stack,occurrences,22,105,645,堆叠
subtask,clean,occurrences,2,28,720,清洁
subtask,cover,occurrences,0,54,620,覆盖
subtask,wrap,occurrences,36,126,336,包裹
subtask,cut,occurrences,40,32,418,切割
subtask,secure,occurrences,22,101,364,固定
subtask,tear,occurrences,0,0,443,撕开
subtask,install,occurrences,3,11,419,安装
subtask,spray,occurrences,0,24,396,喷洒
subtask,rinse,occurrences,0,13,398,冲洗
subtask,sort,occurrences,34,98,246,分类
subtask,tie,occurrences,1,40,319,系紧
subtask,tighten,occurrences,25,20,305,拧紧
subtask,sweep,occurrences,38,38,260,清扫
subtask,attach,occurrences,9,54,272,附着安装
subtask,seal,occurrences,0,27,300,密封
subtask,unscrew,occurrences,30,22,259,拧松螺丝
subtask,stick,occurrences,0,29,249,粘贴
subtask,coil,occurrences,0,82,165,盘绕
subtask,screw,occurrences,2,6,206,拧入螺丝
subtask,disassemble,occurrences,1,6,202,拆解
subtask,wash,occurrences,0,8,188,清洗
subtask,check,occurrences,89,52,51,检查
subtask,assemble,occurrences,19,14,155,组装
subtask,connect,occurrences,0,20,154,连接
subtask,replace,occurrences,7,31,96,更换
subtask,dry,occurrences,0,6,126,晾干／擦干
subtask,thread,occurrences,0,15,105,穿线
subtask,write,occurrences,43,56,21,书写
subtask,untie,occurrences,0,1,98,解开绳结
subtask,peel,occurrences,0,10,84,剥离
subtask,rearrange,occurrences,2,13,79,重新整理
subtask,button,occurrences,0,10,78,扣纽扣
subtask,separate,occurrences,4,16,67,分离
subtask,apply,occurrences,1,4,77,涂抹／施加
subtask,scrape,occurrences,0,4,77,刮除
subtask,cap,occurrences,19,41,21,盖盖
subtask,untangle,occurrences,2,0,76,解开缠绕
subtask,reassemble,occurrences,0,2,76,重新组装
subtask,scrub,occurrences,0,3,64,刷洗
subtask,scoop,occurrences,0,0,64,舀取
subtask,bind,occurrences,0,9,55,捆绑
subtask,wind,occurrences,0,0,62,缠绕
subtask,unzip,occurrences,0,8,54,拉开拉链
subtask,slice,occurrences,0,31,30,切片
subtask,crumple,occurrences,0,0,59,揉皱
subtask,staple,occurrences,0,7,50,装订
subtask,zip,occurrences,0,7,50,拉上拉链
subtask,draw,occurrences,23,0,32,绘画
subtask,fill,occurrences,0,9,40,填充
subtask,erase,occurrences,2,0,40,擦除
subtask,unplug,occurrences,0,2,37,拔掉插头
subtask,test,occurrences,5,4,29,测试
subtask,stamp,occurrences,0,0,32,盖章
subtask,wring,occurrences,0,2,29,拧干
subtask,loosen,occurrences,0,0,28,旋松
subtask,stir,occurrences,9,0,19,搅拌
subtask,drape,occurrences,0,0,26,披挂／覆盖
subtask,load,occurrences,0,5,20,装载
subtask,discard,occurrences,15,0,9,弃置
subtask,tuck,occurrences,0,0,24,塞入／掖好
subtask,unwrap,occurrences,0,0,24,拆开包裹
subtask,detach,occurrences,0,6,18,拆卸／分离
subtask,trim,occurrences,0,1,22,修剪
subtask,divide,occurrences,0,4,18,分成若干份
subtask,unroll,occurrences,0,5,17,展开卷材
subtask,punch,occurrences,0,0,21,打孔
subtask,reattach,occurrences,0,1,20,重新固定
subtask,scan,occurrences,0,0,17,扫描
subtask,plug,occurrences,0,1,16,插接电源
subtask,tape,occurrences,0,5,12,贴胶带
subtask,disconnect,occurrences,0,1,15,断开连接
subtask,switch,occurrences,0,5,11,切换
subtask,wet,occurrences,0,2,12,润湿
subtask,pry,occurrences,0,1,12,撬开
subtask,reinsert,occurrences,0,1,11,重新插入
subtask,clamp,occurrences,0,1,10,夹紧
subtask,dispense,occurrences,0,4,7,分配／挤出
subtask,pack,occurrences,0,4,7,打包
subtask,brush,occurrences,0,1,9,刷拭
subtask,pair,occurrences,0,0,9,配对
subtask,polish,occurrences,0,2,7,抛光
subtask,soak,occurrences,0,1,7,浸泡
subtask,dice,occurrences,0,0,7,切丁
subtask,sew,occurrences,0,0,7,缝制
subtask,uncap,occurrences,4,0,0,取下盖子
atomic,place,occurrences,715.0,3593.0,20457.0,放置
atomic,grasp,occurrences,728.0,2081.0,16403.0,抓握
atomic,pick,occurrences,49.0,1131.0,17326.0,拿起
atomic,move,occurrences,4.0,415.0,13158.0,移动
atomic,reach,occurrences,634.0,986.0,1397.0,伸手接近
atomic,push,occurrences,0,508.0,1230.0,推动
atomic,adjust,occurrences,163.0,561.0,970.0,调整
atomic,transport,occurrences,127.0,339.0,655.0,搬运／转移
atomic,turn,occurrences,4.0,75.0,955.0,转动
atomic,pull,occurrences,3.0,117.0,823.0,拉动
atomic,lift,occurrences,404.0,275.0,61.0,抬起
atomic,hold,occurrences,83.0,170.0,398.0,握持
atomic,release,occurrences,48.0,67.0,522.0,松开
atomic,spread,occurrences,0,19.0,599.0,展开铺开
atomic,roll,occurrences,0,18.0,485.0,滚动／卷动
atomic,lay,occurrences,0,26.0,463.0,平放
atomic,align,occurrences,58.0,148.0,251.0,对齐
atomic,flip,occurrences,13.0,62.0,358.0,翻转
atomic,straighten,occurrences,5.0,46.0,304.0,摆正
atomic,press,occurrences,10.0,46.0,150.0,按压
atomic,squeeze,occurrences,0,21.0,184.0,挤压
atomic,position,occurrences,42.0,99.0,50.0,定位
atomic,reposition,occurrences,41.0,96.0,51.0,重新定位
atomic,carry,occurrences,0,14.0,152.0,携带
atomic,stand,occurrences,0,0,162.0,立起
atomic,dip,occurrences,0,4.0,146.0,蘸取
atomic,rotate,occurrences,9.0,36.0,91.0,旋转
atomic,shake,occurrences,17.0,51.0,42.0,摇晃
atomic,drop,occurrences,4.0,12.0,85.0,松手落下
atomic,bring,occurrences,0,5.0,49.0,拿到近处
atomic,drag,occurrences,0,5.0,45.0,拖动
atomic,lower,occurrences,5.0,12.0,24.0,降低／放下
atomic,tilt,occurrences,11.0,0,25.0,倾斜
atomic,slide,occurrences,0,5.0,29.0,滑动
atomic,retract,occurrences,0,3.0,28.0,撤回
atomic,tap,occurrences,0,3.0,28.0,轻敲
atomic,transfer,occurrences,0,3.0,28.0,转移
atomic,orient,occurrences,4.0,12.0,10.0,调整朝向
atomic,lean,occurrences,0,0,25.0,倾靠
atomic,adjust_grip,occurrences,4.0,10.0,10.0,调整握姿
atomic,rub,occurrences,0,1.0,14.0,摩擦
atomic,bend,occurrences,0,0,14.0,弯曲
atomic,pinch,occurrences,0,3.0,11.0,捏取
atomic,poke,occurrences,0,3.0,11.0,戳碰
atomic,extend,occurrences,0,0,11.0,伸展
atomic,feel,occurrences,0,0,11.0,触摸感知
`,Ne=`category,name,unit,L3,L2_estimated,L1,zh
,box,annotation occurrences,13848.17,47519.9,119507.814,盒子
,bottle,annotation occurrences,11512.236,38148.921,72244.254,瓶子
,rack,annotation occurrences,17026.343,52701.769,32454.822,置物架
,paper,annotation occurrences,9166.967,29663.844,43258.824,纸张
,pen,annotation occurrences,10551.527,33407.421,35056.793,笔
,cloth,annotation occurrences,5174.941,18050.469,50512.926,布料
,cup,annotation occurrences,4107.924,14729.779,48120.142,杯子
,bag,annotation occurrences,643.421,4104.993,43494.636,袋子
,tray,annotation occurrences,2898.242,10274.008,31585.644,托盘
,cabinet,annotation occurrences,8681.564,26415.008,7406.328,柜子
,towel,annotation occurrences,1061,4723.67,30813.406,毛巾
,card,annotation occurrences,5444.156,16983.005,13010.742,卡片
,book,annotation occurrences,2685.944,9199.117,22825.723,书籍
,table,annotation occurrences,673.57,3480.556,29196.94,桌子
,plate,annotation occurrences,1397.785,5435.529,24843.501,盘子
,cable,annotation occurrences,2007.421,7127.708,22108.931,线缆
,bowl,annotation occurrences,1210.682,4822.366,23806.389,碗
,keyboard,annotation occurrences,2576,8648.85,18417,键盘
,bin,annotation occurrences,2514.447,8381.056,16754.28,垃圾桶
,lid,annotation occurrences,1244.467,4812.64,21584.78,盖子
,basket,annotation occurrences,748.411,3333.635,21768.066,篮子
,mouse,annotation occurrences,2121,7181.55,16371,鼠标
,shirt,annotation occurrences,606,2887.093,21381.867,衬衫
,folder,annotation occurrences,2273,7553.287,14685.734,文件夹
,package,annotation occurrences,1197.457,4515.626,18465.092,包裹
,pad,annotation occurrences,2956.222,9413.15,10889.669,垫子
,brush,annotation occurrences,606,2749.0,18619.994,刷子
,tissue,annotation occurrences,37.421,1062.008,18994.92,纸巾
,tape,annotation occurrences,1735.887,5826.919,12385.133,胶带
,part,annotation occurrences,3929.156,11977.417,3798.984,零件
,spoon,annotation occurrences,758,3056.76,15655.208,勺子
,scissors,annotation occurrences,1212,4250.464,12289.273,剪刀
,eraser,annotation occurrences,1661.046,5416.676,8670.737,橡皮擦
,sponge,annotation occurrences,455,1985.664,12413.275,海绵
,pliers,annotation occurrences,2636.914,8079.515,3375.457,钳子
,pot,annotation occurrences,3143.325,9491.412,1228.752,锅
,comb,annotation occurrences,454,1876.982,10299.638,梳子
,chair,annotation occurrences,0,586.757,11735.141,椅子
,screwdriver,annotation occurrences,1673.719,5286.434,5305.553,螺丝刀
,monitor,annotation occurrences,2918.802,8781.205,496.01,显示器
,stapler,annotation occurrences,1061,3491.641,6172.819,订书机
,rope,annotation occurrences,303,1356.862,8957.237,绳子
,drawer,annotation occurrences,299.364,1339.429,8826.72,抽屉
,vase,annotation occurrences,2207.811,6635.835,248.005,花瓶
,object,annotation occurrences,112.262,745.429,8172.889,物体
,can,annotation occurrences,236.195,138.892,8606.105,罐头罐
,whiteboard,annotation occurrences,2058.129,6205.389,620.012,白板
,chopsticks,annotation occurrences,1571.662,4810.807,1916.401,筷子
,glasses,annotation occurrences,1160.037,3645.258,3302.974,眼镜
,label,annotation occurrences,149.682,801.326,7045.594,标签
,kettle,annotation occurrences,1234.878,3848.363,2874.602,水壶
,shoe,annotation occurrences,0,368.625,7372.509,鞋子
,clip,annotation occurrences,336.785,1300.633,5805.569,夹子
,screw,annotation occurrences,340.421,1309.649,5767.744,螺丝
,nut,annotation occurrences,1086.513,3403.759,2884.372,螺母
,roll,annotation occurrences,1421.98,4344.851,1578.213,卷筒
,cart,annotation occurrences,0,349.461,6989.229,手推车
,container,annotation occurrences,187.103,872.441,6222.668,容器
,flower,annotation occurrences,1609.083,4831.758,90.184,花朵
,cable tie,annotation occurrences,935.513,2934.488,2558.96,扎带
,dustpan,annotation occurrences,0,4669.8,1341.481,簸箕
,snack,annotation occurrences,0,276.187,5523.745,零食
,candy,annotation occurrences,673.57,2146.966,2525.141,糖果
,sink,annotation occurrences,0,249.132,4982.644,水槽
,detergent,annotation occurrences,0,230.532,4610.636,清洁剂
,refrigerator,annotation occurrences,0,217.004,4340.086,冰箱
,jar,annotation occurrences,224.523,847.173,3472.069,罐子
,rod,annotation occurrences,0,415.036,3810.257,杆件
,hanger,annotation occurrences,0,200.095,4001.897,衣架
,knife,annotation occurrences,0,193.331,3866.622,刀具
,mirror,annotation occurrences,0,190.513,3810.257,镜子
,hook,annotation occurrences,336.785,1134.357,2480.049,挂钩
,stamp,annotation occurrences,0,186.567,3731.346,印章
,wrench,annotation occurrences,598.729,1860.441,1285.116,扳手
,board,annotation occurrences,37.421,281.356,3381.885,板材
,band,annotation occurrences,0,175.294,3505.887,带子
,frame,annotation occurrences,561.308,1749.307,1307.662,框架
,clipboard,annotation occurrences,898.093,2694.842,11.273,写字板夹
,pillow,annotation occurrences,0,160.076,3201.518,枕头
,note,annotation occurrences,224.523,790.808,2344.774,便条
,wall,annotation occurrences,748.411,2257.069,236.732,墙面
,bed,annotation occurrences,0,148.803,2976.059,床
,pants,annotation occurrences,0,148.239,2964.786,裤子
,cosmetics,annotation occurrences,0,0,2885.875,化妆品
,handle,annotation occurrences,74.841,346.835,2446.23,把手
,keycap,annotation occurrences,710.99,2132.97,0,键帽
,faucet,annotation occurrences,0,133.021,2660.416,水龙头
,caliper,annotation occurrences,673.57,2020.709,0,游标卡尺
,base,annotation occurrences,374.205,1173.344,1014.565,底座
,bucket,annotation occurrences,0,120.057,2401.138,水桶
,washing machine,annotation occurrences,0,113.293,2265.863,洗衣机
,necklace,annotation occurrences,0,0,2356.046,项链
,basin,annotation occurrences,0,112.166,2243.317,盆
,bread,annotation occurrences,0,106.529,2130.588,面包
,curtain,annotation occurrences,0,105.966,2119.315,窗帘
,door,annotation occurrences,0,104.838,2096.769,门
,earring,annotation occurrences,0,0,2141.86,耳环
,battery,annotation occurrences,0,100.329,2006.585,电池
,squeegee,annotation occurrences,0,98.075,1961.493,刮水器
,blanket,annotation occurrences,0,96.384,1927.674,毯子
,weight plate,annotation occurrences,0,0,1972.766,杠铃片
,lipstick,annotation occurrences,0,0,1961.493,口红
,dumbbell,annotation occurrences,0,0,1916.401,哑铃
,trash,annotation occurrences,0,90.747,1814.945,垃圾
,ink,annotation occurrences,0,90.184,1803.672,墨水
,plant,annotation occurrences,336.785,1035.719,507.283,植物
,block,annotation occurrences,224.523,719.225,913.109,积木块
,remote control,annotation occurrences,0,83.42,1668.397,遥控器
,ball,annotation occurrences,0,83.42,1668.397,球
,water,annotation occurrences,0,83.42,1668.397,水
,ring,annotation occurrences,37.421,188.354,1521.848,戒指
,envelope,annotation occurrences,0,82.856,1657.124,信封
,tube,annotation occurrences,0,82.856,1657.124,管子
,drink,annotation occurrences,149.682,501.466,1048.384,饮料
,fork,annotation occurrences,0,78.911,1578.213,叉子
,bed sheet,annotation occurrences,0,77.22,1544.394,床单
,vacuum cleaner,annotation occurrences,0,72.147,1442.938,吸尘器
,ashtray,annotation occurrences,0,0,1476.756,烟灰缸
,glue,annotation occurrences,0,65.383,1307.662,胶水
,food,annotation occurrences,0,65.383,1307.662,食物
,bench,annotation occurrences,0,63.692,1273.843,长凳
,broom,annotation occurrences,0,63.692,1273.843,扫帚
,pump,annotation occurrences,0,62.001,1240.024,泵
,piece,annotation occurrences,0,61.438,1228.752,小块
,beverage,annotation occurrences,0,60.874,1217.479,饮品
,strap,annotation occurrences,0,59.747,1194.933,绑带
,straw,annotation occurrences,0,59.183,1183.66,吸管
,powder,annotation occurrences,0,59.183,1183.66,粉末
,scoop,annotation occurrences,0,57.492,1149.841,舀勺
,bracelet,annotation occurrences,0,0,1172.387,手链
,refill,annotation occurrences,37.421,160.735,969.474,替换芯
,cylinder,annotation occurrences,149.682,475.538,529.829,圆柱体
,debris,annotation occurrences,0,54.674,1093.476,碎屑
,bracket,annotation occurrences,74.841,264.542,800.379,支架
,bubble wrap,annotation occurrences,0,51.856,1037.111,气泡膜
,tape dispenser,annotation occurrences,0,51.292,1025.838,胶带切割器
,cat litter,annotation occurrences,0,0,1070.93,猫砂
,barrel,annotation occurrences,0,49.601,992.02,桶
,liquid,annotation occurrences,0,49.601,992.02,液体
,fan,annotation occurrences,0,49.037,980.747,风扇
,belt,annotation occurrences,0,49.037,980.747,皮带
,potato,annotation occurrences,0,46.219,924.382,土豆
,charger,annotation occurrences,0,46.219,924.382,充电器
,device,annotation occurrences,37.421,151.153,777.834,设备
,plastic wrap,annotation occurrences,0,45.655,913.109,保鲜膜
,mask,annotation occurrences,0,43.965,879.29,口罩
,dropper,annotation occurrences,0,43.965,879.29,滴管
,soap,annotation occurrences,0,43.401,868.017,肥皂
,dishwasher,annotation occurrences,0,43.401,868.017,洗碗机
,flashlight,annotation occurrences,0,43.401,868.017,手电筒
,treadmill,annotation occurrences,0,0,901.836,跑步机
,mop,annotation occurrences,0,41.146,822.925,拖把
,pillowcase,annotation occurrences,0,41.146,822.925,枕套
,key,annotation occurrences,0,40.019,800.379,钥匙
,scanner,annotation occurrences,0,39.455,789.106,扫描仪
,circuit board,annotation occurrences,0,39.455,789.106,电路板
,pill,annotation occurrences,187.103,564.69,67.638,药片
,hand sanitizer,annotation occurrences,0,38.892,777.834,免洗洗手液
,tong,annotation occurrences,0,38.328,766.561,夹钳
,toy,annotation occurrences,0,37.764,755.288,玩具
,kit,annotation occurrences,74.841,247.633,462.191,套件
,microwave,annotation occurrences,0,37.201,744.015,微波炉
,toothpaste,annotation occurrences,0,0,777.834,牙膏
,glove,annotation occurrences,37.421,142.135,597.466,手套
,tablet,annotation occurrences,187.103,561.872,11.273,平板电脑
,hair,annotation occurrences,0,36.073,721.469,头发
,gripper,annotation occurrences,187.103,561.308,0,夹持器
,lint roller,annotation occurrences,0,35.51,710.196,粘毛滚筒
,cushion,annotation occurrences,0,35.51,710.196,靠垫
,toiletries,annotation occurrences,0,34.946,698.923,洗漱用品
,tweezers,annotation occurrences,0,34.946,698.923,镊子
,nail clipper,annotation occurrences,0,0,698.923,指甲剪
,equipment,annotation occurrences,0,33.255,665.104,器材
,shoelace,annotation occurrences,0,32.692,653.831,鞋带
,lamp,annotation occurrences,0,32.128,642.558,台灯
,pan,annotation occurrences,0,31.564,631.285,平底锅
,laptop,annotation occurrences,37.421,135.935,473.464,笔记本电脑
,machine,annotation occurrences,0,30.437,608.739,机器
,polish,annotation occurrences,0,29.873,597.466,抛光剂
,hole punch,annotation occurrences,0,29.873,597.466,打孔器
,cutlery,annotation occurrences,0,29.31,586.193,餐具
,sofa,annotation occurrences,0,28.746,574.92,沙发
,lanyard,annotation occurrences,0,28.182,563.647,挂绳
,lighter,annotation occurrences,0,28.182,563.647,打火机
,hard drive,annotation occurrences,0,28.182,563.647,硬盘
,noodle,annotation occurrences,0,27.619,552.375,面条
,strainer,annotation occurrences,0,27.619,552.375,滤网
,casing,annotation occurrences,0,27.055,541.102,外壳
,cotton swab,annotation occurrences,0,27.055,541.102,棉签
,power strip,annotation occurrences,0,25.928,518.556,插线板
,umbrella,annotation occurrences,0,25.364,507.283,雨伞
,disc,annotation occurrences,0,24.8,496.01,圆盘
,socket,annotation occurrences,0,24.8,496.01,插座
,hat,annotation occurrences,0,24.8,496.01,帽子
,staple,annotation occurrences,0,24.8,496.01,订书钉
,shower head,annotation occurrences,0,24.8,496.01,花洒喷头
,power bank,annotation occurrences,37.421,129.735,349.461,充电宝
,bar,annotation occurrences,74.841,234.669,202.913,条状物
,crumb,annotation occurrences,0,24.237,484.737,碎屑颗粒
,water dispenser,annotation occurrences,0,23.673,473.464,饮水机
,peeler,annotation occurrences,0,23.11,462.191,削皮器
,mattress,annotation occurrences,0,23.11,462.191,床垫
,connector,annotation occurrences,0,21.982,439.645,连接器
,shampoo,annotation occurrences,0,0,450.918,洗发水
,tie,annotation occurrences,0,21.419,428.372,领带
,housing,annotation occurrences,0,21.419,428.372,壳体
,sign,annotation occurrences,0,21.419,428.372,标牌
,robotic arm,annotation occurrences,112.262,336.785,0,机械臂
,chart,annotation occurrences,112.262,336.785,0,图表
,shuttlecock,annotation occurrences,0,0,439.645,羽毛球
,palette,annotation occurrences,0,20.855,417.099,调色盘
,stationery,annotation occurrences,0,20.855,417.099,文具
,ladle,annotation occurrences,0,20.855,417.099,汤勺
,lip gloss,annotation occurrences,0,0,428.372,唇彩
,hose,annotation occurrences,0,20.291,405.826,软管
,calendar,annotation occurrences,0,20.291,405.826,日历
,file,annotation occurrences,0,20.291,405.826,文件
,power supply,annotation occurrences,0,19.728,394.553,电源
,module,annotation occurrences,0,19.728,394.553,模块
,railing,annotation occurrences,0,19.164,383.28,栏杆
,coat,annotation occurrences,0,19.164,383.28,外套
,printer,annotation occurrences,0,19.164,383.28,打印机
,suitcase,annotation occurrences,0,18.6,372.007,行李箱
,barbell,annotation occurrences,0,0,383.28,杠铃
,kettlebell,annotation occurrences,0,0,372.007,壶铃
,apron,annotation occurrences,0,17.473,349.461,围裙
,floor,annotation occurrences,0,17.473,349.461,地板
,ketchup,annotation occurrences,0,17.473,349.461,番茄酱
,nail,annotation occurrences,0,16.909,338.188,钉子
,headphones,annotation occurrences,0,16.909,338.188,耳机
,needle,annotation occurrences,0,16.346,326.916,针
,nozzle,annotation occurrences,0,16.346,326.916,喷嘴
,shell,annotation occurrences,0,16.346,326.916,外壳
,scale,annotation occurrences,0,16.346,326.916,秤
,garbage,annotation occurrences,0,16.346,326.916,垃圾
,waste,annotation occurrences,0,15.782,315.643,废弃物
,racket,annotation occurrences,0,0,326.916,球拍
,leaf,annotation occurrences,37.421,120.153,157.821,叶片
,spatula,annotation occurrences,0,14.655,293.097,锅铲
,jacket,annotation occurrences,0,14.655,293.097,夹克
,juice,annotation occurrences,0,14.655,293.097,果汁
,watch,annotation occurrences,0,14.655,293.097,手表
,sleeve,annotation occurrences,0,14.091,281.824,袖子
,spray,annotation occurrences,0,14.091,281.824,喷雾剂
,post,annotation occurrences,0,14.091,281.824,柱子
,lemon slice,annotation occurrences,37.421,112.262,146,柠檬片
,jigger,annotation occurrences,37.421,112.262,146,量酒器
,mint sprig,annotation occurrences,37.421,112.262,146,薄荷枝
,tag,annotation occurrences,0,13.528,270.551,吊牌
,grinder,annotation occurrences,0,13.528,270.551,研磨机
,hammer,annotation occurrences,0,13.528,270.551,锤子
,bike,annotation occurrences,0,0,281.824,自行车
,stove,annotation occurrences,0,12.964,259.278,炉灶
,terminal,annotation occurrences,0,12.4,248.005,端子
,baseboard,annotation occurrences,0,12.4,248.005,踢脚板
,yogurt,annotation occurrences,0,12.4,248.005,酸奶
,washer,annotation occurrences,37.421,117.334,101.457,垫圈
,egg,annotation occurrences,0,11.837,236.732,鸡蛋
,windowsill,annotation occurrences,0,11.837,236.732,窗台
,stirrer,annotation occurrences,0,11.837,236.732,搅拌棒
,pitcher,annotation occurrences,37.421,116.771,90.184,水罐
,pastry,annotation occurrences,0,11.273,225.459,糕点
,ruler,annotation occurrences,0,11.273,225.459,尺子
,tableware,annotation occurrences,0,11.273,225.459,餐具
,milk,annotation occurrences,0,10.709,214.186,牛奶
,hoodie,annotation occurrences,0,10.709,214.186,连帽衫
,floss,annotation occurrences,0,0,214.186,牙线
,funnel,annotation occurrences,0,10.146,202.913,漏斗
,whistle,annotation occurrences,0,0,202.913,哨子
,accessory,annotation occurrences,0,9.582,191.64,配件
,ginger,annotation occurrences,0,9.582,191.64,生姜
,orange,annotation occurrences,0,9.582,191.64,橙子
,filter,annotation occurrences,0,9.582,191.64,过滤器
,fastener,annotation occurrences,0,9.582,191.64,紧固件
,collar,annotation occurrences,0,9.018,180.367,衣领
,film,annotation occurrences,0,9.018,180.367,薄膜
,vest,annotation occurrences,0,9.018,180.367,背心
,scraper,annotation occurrences,0,9.018,180.367,刮刀
,chessboard,annotation occurrences,0,8.455,169.094,棋盘
,computer,annotation occurrences,0,8.455,169.094,电脑
,dress,annotation occurrences,0,8.455,169.094,连衣裙
,model,annotation occurrences,0,8.455,169.094,模型
,tomato,annotation occurrences,0,8.455,169.094,番茄
,counter,annotation occurrences,0,8.455,169.094,台面
,sausage,annotation occurrences,0,8.455,169.094,香肠
,paperclip,annotation occurrences,0,8.455,169.094,回形针
,jewelry,annotation occurrences,0,0,169.094,首饰
,coffee machine,annotation occurrences,0,7.891,157.821,咖啡机
,lead,annotation occurrences,0,7.891,157.821,引线
,cube,annotation occurrences,0,7.891,157.821,立方体
,stopper,annotation occurrences,0,7.891,157.821,塞子
,garlic,annotation occurrences,0,7.891,157.821,大蒜
,almond,annotation occurrences,0,7.891,157.821,杏仁
,newspaper,annotation occurrences,37.421,112.825,11.273,报纸
,cuticle pusher,annotation occurrences,0,0,157.821,死皮推棒
,puff,annotation occurrences,0,7.327,146.548,粉扑
,letter,annotation occurrences,0,7.327,146.548,信件
,grain,annotation occurrences,0,7.327,146.548,谷物
,pipe,annotation occurrences,0,7.327,146.548,管道
,roller,annotation occurrences,0,7.327,146.548,滚轮
,chassis,annotation occurrences,0,7.327,146.548,底盘
,cucumber,annotation occurrences,0,7.327,146.548,黄瓜
,cutter,annotation occurrences,0,7.327,146.548,切割器
,basketball,annotation occurrences,0,0,146.548,篮球
,sweatshirt,annotation occurrences,0,6.764,135.275,卫衣
,residue,annotation occurrences,0,6.764,135.275,残留物
,core,annotation occurrences,0,6.764,135.275,芯体
,switch,annotation occurrences,0,6.764,135.275,开关
,petal,annotation occurrences,0,6.764,135.275,花瓣
,token,annotation occurrences,0,6.764,135.275,代币
,spring,annotation occurrences,0,6.764,135.275,弹簧
,colander,annotation occurrences,0,6.764,135.275,滤水篮
,wok,annotation occurrences,0,6.764,135.275,炒锅
,seal,annotation occurrences,0,6.764,135.275,密封件
,eyeliner,annotation occurrences,0,0,135.275,眼线笔
,foil,annotation occurrences,0,6.2,124.002,锡箔纸
,pepper,annotation occurrences,0,6.2,124.002,辣椒
,headband,annotation occurrences,0,6.2,124.002,头带
,motor,annotation occurrences,0,6.2,124.002,电机
,bathrobe,annotation occurrences,0,6.2,124.002,浴袍
,wallet,annotation occurrences,0,6.2,124.002,钱包
,shovel,annotation occurrences,0,5.636,112.729,铲子
,showerhead,annotation occurrences,0,5.636,112.729,花洒
,coffee,annotation occurrences,0,5.636,112.729,咖啡
,generator,annotation occurrences,0,5.636,112.729,发电机
,lotion,annotation occurrences,0,5.636,112.729,乳液
,seed,annotation occurrences,0,5.636,112.729,种子
,cream,annotation occurrences,0,5.636,112.729,面霜
,cone,annotation occurrences,0,5.636,112.729,锥体
,anvil,annotation occurrences,0,5.073,101.457,铁砧
,first aid kit,annotation occurrences,0,5.073,101.457,急救箱
,flier,annotation occurrences,0,5.073,101.457,传单
,sweater,annotation occurrences,0,5.073,101.457,毛衣
,pulley,annotation occurrences,0,5.073,101.457,滑轮
,light string,annotation occurrences,0,5.073,101.457,灯串
,cake,annotation occurrences,0,5.073,101.457,蛋糕
,blender,annotation occurrences,0,5.073,101.457,搅拌机
,peanut,annotation occurrences,0,5.073,101.457,花生
,rotor,annotation occurrences,0,5.073,101.457,转子
,teapot,annotation occurrences,0,5.073,101.457,茶壶
,banknote,annotation occurrences,0,5.073,101.457,纸币
,herb,annotation occurrences,0,5.073,101.457,香草
,hub,annotation occurrences,0,5.073,101.457,轮毂
,eggshell,annotation occurrences,0,5.073,101.457,蛋壳
,blush,annotation occurrences,0,0,101.457,腮红
,divider,annotation occurrences,0,4.509,90.184,分隔板
,coil,annotation occurrences,0,4.509,90.184,线圈
,toothpick,annotation occurrences,0,4.509,90.184,牙签
,paintbrush,annotation occurrences,0,4.509,90.184,画笔
,bean,annotation occurrences,0,4.509,90.184,豆子
,croissant,annotation occurrences,0,4.509,90.184,牛角包
,fruit,annotation occurrences,0,4.509,90.184,水果
,cleaning agent,annotation occurrences,0,4.509,90.184,清洁剂
,nib,annotation occurrences,0,4.509,90.184,笔尖
,notepad,annotation occurrences,0,4.509,90.184,记事本
,portafilter,annotation occurrences,0,4.509,90.184,咖啡粉碗手柄
,scalpel,annotation occurrences,0,4.509,90.184,手术刀
,sock,annotation occurrences,0,4.509,90.184,袜子
,locker,annotation occurrences,0,4.509,90.184,储物柜
,gel,annotation occurrences,0,4.509,90.184,凝胶
,adapter,annotation occurrences,0,4.509,90.184,适配器
,brooch,annotation occurrences,0,0,90.184,胸针
,carrot,annotation occurrences,0,3.946,78.911,胡萝卜
,reflector,annotation occurrences,0,3.946,78.911,反光板
,tamper,annotation occurrences,0,3.946,78.911,压粉器
,lens,annotation occurrences,0,3.946,78.911,镜头
,net,annotation occurrences,0,3.946,78.911,网
,onion,annotation occurrences,0,3.946,78.911,洋葱
,cleaning supplies,annotation occurrences,0,3.946,78.911,清洁用品
,dust,annotation occurrences,0,3.946,78.911,灰尘
,electric drill,annotation occurrences,0,3.946,78.911,电钻
,menu,annotation occurrences,0,3.946,78.911,菜单
,router,annotation occurrences,0,3.946,78.911,路由器
,spool,annotation occurrences,0,3.946,78.911,线轴
,peg,annotation occurrences,0,3.946,78.911,木钉
,filler,annotation occurrences,0,3.946,78.911,填充料
,turntable,annotation occurrences,0,3.946,78.911,转盘
,steamer,annotation occurrences,0,3.946,78.911,蒸汽机
,toilet,annotation occurrences,0,3.946,78.911,马桶
,conditioner,annotation occurrences,0,0,78.911,护发素
,nipple,annotation occurrences,0,0,78.911,奶嘴
,dispenser,annotation occurrences,0,3.382,67.638,分配器
,keychain,annotation occurrences,0,3.382,67.638,钥匙扣
,plug,annotation occurrences,0,3.382,67.638,插头
,chalk,annotation occurrences,0,3.382,67.638,粉笔
,compressor,annotation occurrences,0,3.382,67.638,压缩机
,engine,annotation occurrences,0,3.382,67.638,发动机
,headboard,annotation occurrences,0,3.382,67.638,床头板
,paint,annotation occurrences,0,3.382,67.638,颜料
,stuffing,annotation occurrences,0,3.382,67.638,填充物
,wristband,annotation occurrences,0,3.382,67.638,腕带
,cpu,annotation occurrences,0,3.382,67.638,处理器
,oil,annotation occurrences,0,3.382,67.638,油
,usb drive,annotation occurrences,0,3.382,67.638,U盘
,lace,annotation occurrences,0,3.382,67.638,花边
,coin,annotation occurrences,0,3.382,67.638,硬币
,lock,annotation occurrences,0,3.382,67.638,锁
,apple,annotation occurrences,0,3.382,67.638,苹果
,buckle,annotation occurrences,0,3.382,67.638,搭扣
,pin,annotation occurrences,0,2.818,56.365,销钉
,starter,annotation occurrences,0,2.818,56.365,启动器
,medicine,annotation occurrences,0,2.818,56.365,药品
,clove,annotation occurrences,0,2.818,56.365,丁香
,pedal,annotation occurrences,0,2.818,56.365,踏板
,express waybill,annotation occurrences,0,2.818,56.365,快递面单
,granules,annotation occurrences,0,2.818,56.365,颗粒物
,handcart,annotation occurrences,0,2.818,56.365,手推货车
,hay,annotation occurrences,0,2.818,56.365,干草
,matchbox,annotation occurrences,0,2.818,56.365,火柴盒
,ribbon,annotation occurrences,0,2.818,56.365,丝带
,rose,annotation occurrences,0,2.818,56.365,玫瑰
,gear,annotation occurrences,0,2.818,56.365,齿轮
,photo,annotation occurrences,0,2.818,56.365,照片
,alarm,annotation occurrences,0,2.818,56.365,闹钟
,tea,annotation occurrences,0,2.818,56.365,茶叶
,mouthwash,annotation occurrences,0,0,56.365,漱口水
,eyeshadow,annotation occurrences,0,0,56.365,眼影
,bangle,annotation occurrences,0,0,56.365,手镯
,handkerchief,annotation occurrences,0,0,45.092,手帕
,vegetable,annotation occurrences,0,0,45.092,蔬菜
,ornament,annotation occurrences,0,0,45.092,装饰品
,picture,annotation occurrences,0,0,45.092,图片
,rice,annotation occurrences,0,0,45.092,米饭
,chain,annotation occurrences,0,0,45.092,链条
,utensil,annotation occurrences,0,0,45.092,器具
,bead,annotation occurrences,0,0,45.092,珠子
,fries,annotation occurrences,0,0,45.092,薯条
,map,annotation occurrences,0,0,45.092,地图
,ingredient,annotation occurrences,0,0,45.092,食材
,insole,annotation occurrences,0,0,45.092,鞋垫
,iron,annotation occurrences,0,0,45.092,熨斗
,main unit,annotation occurrences,0,0,45.092,主机
,cage,annotation occurrences,0,0,45.092,笼子
,shredder,annotation occurrences,0,0,45.092,碎纸机
,sauce,annotation occurrences,0,0,45.092,酱料
,appliance,annotation occurrences,0,0,45.092,电器
,bandage,annotation occurrences,0,0,45.092,绷带
,butter,annotation occurrences,0,0,45.092,黄油
,cabbage,annotation occurrences,0,0,45.092,卷心菜
,compass,annotation occurrences,0,0,45.092,指南针
,stator,annotation occurrences,0,0,45.092,定子
,tile,annotation occurrences,0,0,45.092,瓷砖
,timer,annotation occurrences,0,0,45.092,计时器
,pegs,annotation occurrences,0,0,45.092,木钉
,facial cleanser,annotation occurrences,0,0,45.092,洗面奶
,hula hoop,annotation occurrences,0,0,45.092,呼啦圈
,lip balm,annotation occurrences,0,0,45.092,润唇膏
,mascara,annotation occurrences,0,0,45.092,睫毛膏
,skirt,annotation occurrences,0,0,33.819,裙子
,mushroom,annotation occurrences,0,0,33.819,蘑菇
,diffuser,annotation occurrences,0,0,33.819,扩散器
,cooler,annotation occurrences,0,0,33.819,冷却器
,crossbar,annotation occurrences,0,0,33.819,横杆
,grille,annotation occurrences,0,0,33.819,格栅
,bulb,annotation occurrences,0,0,33.819,灯泡
,oven,annotation occurrences,0,0,33.819,烤箱
,support,annotation occurrences,0,0,33.819,支撑件
,whisk,annotation occurrences,0,0,33.819,打蛋器
,bathtub,annotation occurrences,0,0,33.819,浴缸
,camisole,annotation occurrences,0,0,33.819,吊带背心
,cardigan,annotation occurrences,0,0,33.819,开衫
,flowerpot,annotation occurrences,0,0,33.819,花盆
,gasket,annotation occurrences,0,0,33.819,密封垫片
,hairband,annotation occurrences,0,0,33.819,发带
,hairpin,annotation occurrences,0,0,33.819,发夹
,humidifier,annotation occurrences,0,0,33.819,加湿器
,jelly,annotation occurrences,0,0,33.819,果冻
,knot,annotation occurrences,0,0,33.819,绳结
,latch,annotation occurrences,0,0,33.819,门闩
,disk,annotation occurrences,0,0,33.819,磁盘
,schoolbag,annotation occurrences,0,0,33.819,书包
,sepal,annotation occurrences,0,0,33.819,花萼
,spinner,annotation occurrences,0,0,33.819,旋转器
,sportswear,annotation occurrences,0,0,33.819,运动服
,wool,annotation occurrences,0,0,33.819,羊毛
,sterilizer,annotation occurrences,0,0,33.819,消毒器
,track,annotation occurrences,0,0,33.819,轨道
,tripod,annotation occurrences,0,0,33.819,三脚架
,window,annotation occurrences,0,0,33.819,窗户
,stepper,annotation occurrences,0,0,33.819,踏步机
,pendant,annotation occurrences,0,0,33.819,吊坠
,diaper,annotation occurrences,0,0,33.819,尿布
,grip strengthener,annotation occurrences,0,0,33.819,握力器
,backrest,annotation occurrences,0,0,22.546,靠背
,badge,annotation occurrences,0,0,22.546,徽章
,banana,annotation occurrences,0,0,22.546,香蕉
,bookend,annotation occurrences,0,0,22.546,书立
,button,annotation occurrences,0,0,22.546,纽扣
,clothespin,annotation occurrences,0,0,22.546,晾衣夹
,decoration,annotation occurrences,0,0,22.546,装饰物
,painting,annotation occurrences,0,0,22.546,绘画作品
,duster,annotation occurrences,0,0,22.546,除尘掸
,filling,annotation occurrences,0,0,22.546,馅料
,receipt,annotation occurrences,0,0,22.546,收据
,wheel,annotation occurrences,0,0,22.546,轮子
,brace,annotation occurrences,0,0,22.546,撑杆
,yam,annotation occurrences,0,0,22.546,山药
,album,annotation occurrences,0,0,22.546,相册
,balloon,annotation occurrences,0,0,22.546,气球
,camera,annotation occurrences,0,0,22.546,相机
,cardstock,annotation occurrences,0,0,22.546,卡纸
,care solution,annotation occurrences,0,0,22.546,护理液
,cigarette butt,annotation occurrences,0,0,22.546,烟头
,corn kernels,annotation occurrences,0,0,22.546,玉米粒
,correction fluid,annotation occurrences,0,0,22.546,修正液
,daliyuan pie,annotation occurrences,0,0,22.546,达利园派
,earplug,annotation occurrences,0,0,22.546,耳塞
,electric griddle,annotation occurrences,0,0,22.546,电饼铛
,express delivery slip,annotation occurrences,0,0,22.546,快递单
,fire extinguisher,annotation occurrences,0,0,22.546,灭火器
,grinding trough,annotation occurrences,0,0,22.546,研磨槽
,lampshade,annotation occurrences,0,0,22.546,灯罩
,mortar,annotation occurrences,0,0,22.546,研钵
,pestle,annotation occurrences,0,0,22.546,研杵
,pillar,annotation occurrences,0,0,22.546,立柱
,radish,annotation occurrences,0,0,22.546,萝卜
,scarf,annotation occurrences,0,0,22.546,围巾
,slips,annotation occurrences,0,0,22.546,纸条
,syrup,annotation occurrences,0,0,22.546,糖浆
,television,annotation occurrences,0,0,22.546,电视机
,thermometer,annotation occurrences,0,0,22.546,温度计
,vanity,annotation occurrences,0,0,22.546,梳妆台
,washbasin,annotation occurrences,0,0,22.546,洗脸盆
,zucchini,annotation occurrences,0,0,22.546,西葫芦
,makeup,annotation occurrences,0,0,22.546,化妆品
,blood lancet,annotation occurrences,0,0,22.546,采血针
,comedone extractor,annotation occurrences,0,0,22.546,粉刺针
,concealer,annotation occurrences,0,0,22.546,遮瑕膏
,perfume,annotation occurrences,0,0,22.546,香水
,scoreboard,annotation occurrences,0,0,22.546,记分牌
,sunscreen,annotation occurrences,0,0,22.546,防晒霜
,wig,annotation occurrences,0,0,22.546,假发
,adhesive backing,annotation occurrences,0,0,11.273,背胶
,blower,annotation occurrences,0,0,11.273,吹风机
,air column,annotation occurrences,0,0,11.273,气柱袋
,clock,annotation occurrences,0,0,11.273,时钟
,armchair,annotation occurrences,0,0,11.273,扶手椅
,backboard,annotation occurrences,0,0,11.273,背板
,skewer,annotation occurrences,0,0,11.273,竹签
,barrier,annotation occurrences,0,0,11.273,隔离栏
,bedding,annotation occurrences,0,0,11.273,床上用品
,bell,annotation occurrences,0,0,11.273,铃铛
,bitter melon,annotation occurrences,0,0,11.273,苦瓜
,blueprint,annotation occurrences,0,0,11.273,蓝图
,bow,annotation occurrences,0,0,11.273,蝴蝶结
,bubble mailer,annotation occurrences,0,0,11.273,气泡快递袋
,calyx,annotation occurrences,0,0,11.273,花萼
,cauliflower,annotation occurrences,0,0,11.273,花椰菜
,cereal,annotation occurrences,0,0,11.273,谷物早餐
,chicken essence seasoning,annotation occurrences,0,0,11.273,鸡精调味料
,chicken-flavor essence,annotation occurrences,0,0,11.273,鸡味精
,chive,annotation occurrences,0,0,11.273,韭菜
,cola,annotation occurrences,0,0,11.273,可乐
,corkboard,annotation occurrences,0,0,11.273,软木公告板
,corner guard,annotation occurrences,0,0,11.273,护角
,date slices,annotation occurrences,0,0,11.273,枣片
,dice,annotation occurrences,0,0,11.273,骰子
,dishcloth,annotation occurrences,0,0,11.273,洗碗布
,doormat,annotation occurrences,0,0,11.273,门垫
,dummy,annotation occurrences,0,0,11.273,假人模型
,expander,annotation occurrences,0,0,11.273,扩胸器
,eyelash,annotation occurrences,0,0,11.273,睫毛
,fragrance sachet,annotation occurrences,0,0,11.273,香包
,freezer,annotation occurrences,0,0,11.273,冷冻柜
,french press body,annotation occurrences,0,0,11.273,法压壶壶身
,game controller,annotation occurrences,0,0,11.273,游戏手柄
,gauze,annotation occurrences,0,0,11.273,纱布
,globe,annotation occurrences,0,0,11.273,地球仪
,goggles,annotation occurrences,0,0,11.273,护目镜
,gourd,annotation occurrences,0,0,11.273,葫芦
,graffiti,annotation occurrences,0,0,11.273,涂鸦
,ham,annotation occurrences,0,0,11.273,火腿
,hardboard,annotation occurrences,0,0,11.273,硬纸板
,headset,annotation occurrences,0,0,11.273,头戴式耳机
,helmet,annotation occurrences,0,0,11.273,头盔
,hotels,annotation occurrences,0,0,11.273,酒店（场所）
,hygrometer,annotation occurrences,0,0,11.273,湿度计
,i o shield,annotation occurrences,0,0,11.273,主板I/O挡板
,ice maker,annotation occurrences,0,0,11.273,制冰机
,induction cooker,annotation occurrences,0,0,11.273,电磁炉
,inner layer,annotation occurrences,0,0,11.273,内层材料
,insecticide aerosol,annotation occurrences,0,0,11.273,杀虫喷雾剂
,keyhole,annotation occurrences,0,0,11.273,锁孔
,keypad,annotation occurrences,0,0,11.273,数字键盘
,lettuce,annotation occurrences,0,0,11.273,生菜
,line,annotation occurrences,0,0,11.273,线条
,linen,annotation occurrences,0,0,11.273,亚麻织物
,lotus root,annotation occurrences,0,0,11.273,莲藕
,luffa,annotation occurrences,0,0,11.273,丝瓜
,grid,annotation occurrences,0,0,11.273,网格
,mold,annotation occurrences,0,0,11.273,模具
,microphone,annotation occurrences,0,0,11.273,麦克风
,microscope,annotation occurrences,0,0,11.273,显微镜
,monosodium glutamate,annotation occurrences,0,0,11.273,味精
,mosquito repellent,annotation occurrences,0,0,11.273,驱蚊剂
,nba special issue,annotation occurrences,0,0,11.273,NBA特刊
,oat toast,annotation occurrences,0,0,11.273,燕麦吐司
,parcel,annotation occurrences,0,0,11.273,包裹
,peach,annotation occurrences,0,0,11.273,桃子
,pickled mustard tuber slices,annotation occurrences,0,0,11.273,榨菜片
,pigment,annotation occurrences,0,0,11.273,颜料
,hole,annotation occurrences,0,0,11.273,孔洞
,houses,annotation occurrences,0,0,11.273,房屋（场所）
,skeleton,annotation occurrences,0,0,11.273,骨架
,pulp mold,annotation occurrences,0,0,11.273,纸浆模具
,raisin,annotation occurrences,0,0,11.273,葡萄干
,sachima,annotation occurrences,0,0,11.273,沙琪玛
,safe,annotation occurrences,0,0,11.273,保险柜
,salt,annotation occurrences,0,0,11.273,盐
,sensor,annotation occurrences,0,0,11.273,传感器
,guide,annotation occurrences,0,0,11.273,导向件
,shoebox,annotation occurrences,0,0,11.273,鞋盒
,skimmer,annotation occurrences,0,0,11.273,漏勺
,soap dispenser,annotation occurrences,0,0,11.273,皂液器
,soybean paste,annotation occurrences,0,0,11.273,豆瓣酱
,speaker,annotation occurrences,0,0,11.273,扬声器
,spork,annotation occurrences,0,0,11.273,勺叉两用餐具
,stain,annotation occurrences,0,0,11.273,污渍
,kitchenware,annotation occurrences,0,0,11.273,厨具
,story,annotation occurrences,0,0,11.273,故事文本
,suction head,annotation occurrences,0,0,11.273,吸头
,sugar-free pickled mustard tubers,annotation occurrences,0,0,11.273,无糖榨菜
,suit,annotation occurrences,0,0,11.273,西装
,syringe,annotation occurrences,0,0,11.273,注射器
,tail,annotation occurrences,0,0,11.273,尾部
,test instrument,annotation occurrences,0,0,11.273,测试仪器
,thermostat,annotation occurrences,0,0,11.273,恒温器
,thumbtack,annotation occurrences,0,0,11.273,图钉
,transformer,annotation occurrences,0,0,11.273,变压器
,velcro,annotation occurrences,0,0,11.273,魔术贴
,vinegar,annotation occurrences,0,0,11.273,醋
,body wash samples,annotation occurrences,0,0,11.273,沐浴露试用装
,mannequin head,annotation occurrences,0,0,11.273,假人头模
,pacifier,annotation occurrences,0,0,11.273,安抚奶嘴
,baby supplies,annotation occurrences,0,0,11.273,婴儿用品
`,Ue=`\uFEFFpanel,bin,level,count,percentage
duration,0-10 s,L1,0.0,0.0
duration,0-10 s,L2,0.0,0.0
duration,0-10 s,L3,0.0,0.0
duration,10-20 s,L1,96.7093514882402,0.03474930073216174
duration,10-20 s,L2,3841.8802110258725,3.6807567725307835
duration,10-20 s,L3,1279.014914483822,4.241601974925823
duration,20-30 s,L1,3032.3624969656144,1.089578977776521
duration,20-30 s,L2,12160.1470441686,11.650166358477422
duration,20-30 s,L3,4002.842973106772,13.274643217823396
duration,30-40 s,L1,18896.933133435046,6.789986720665113
duration,30-40 s,L2,11557.163768189715,11.072471413587552
duration,30-40 s,L3,3537.43903717267,11.731222393373496
duration,40-50 s,L1,30565.66316040136,10.9827581810214
duration,40-50 s,L2,13541.426128258357,12.973516401752432
duration,40-50 s,L3,4004.3809900794627,13.279743749298797
duration,50-60 s,L1,32458.75136390286,11.662976694367346
duration,50-60 s,L2,13139.608659651196,12.588550632998787
duration,50-60 s,L3,3838.8903638186885,12.730926562547932
duration,60-70 s,L1,24942.75054878872,8.962350864409911
duration,60-70 s,L2,13660.78011736468,13.087864840433802
duration,60-70 s,L3,4137.880863308413,13.722469881361759
duration,70-80 s,L1,18516.08047924414,6.653139939961274
duration,70-80 s,L2,10083.772286110452,9.660872045994491
duration,70-80 s,L3,3052.656087382744,10.123534872333781
duration,80-90 s,L1,16395.889483199768,5.891319563778455
duration,80-90 s,L2,7464.027796153877,7.150996218519627
duration,80-90 s,L3,2214.744440664625,7.3447653245468745
duration,90-100 s,L1,12866.051116284165,4.622989117339796
duration,90-100 s,L2,4795.948382060386,4.594812570499986
duration,90-100 s,L3,1384.2152754153906,4.5904783278417955
duration,100-110 s,L1,10703.9138954979,3.8460967552972445
duration,100-110 s,L2,3026.783190522597,2.899843856538024
duration,100-110 s,L3,830.5291652492347,2.754286996705079
duration,110-120 s,L1,11899.063526211765,4.275534170588549
duration,110-120 s,L2,1824.1363408794582,1.7476344450934187
duration,110-120 s,L3,409.72772152295573,1.358781585041172
duration,120-130 s,L1,9561.408895331273,3.435575443471301
duration,120-130 s,L2,1726.6326231912428,1.6542199059836746
duration,120-130 s,L3,416.1873928082275,1.3802038172377669
duration,130-140 s,L1,7642.369113389898,2.746032090388515
duration,130-140 s,L2,1163.7386811873864,1.114933000759213
duration,130-140 s,L3,260.5400751726302,0.8640300319293337
duration,140-150 s,L1,6154.443307962433,2.211395258641895
duration,140-150 s,L2,937.0787106203209,0.8977788533362818
duration,140-150 s,L3,209.78551507406587,0.6957124932418011
duration,150-160 s,L1,5246.773611464391,1.8852542312882397
duration,150-160 s,L2,942.4497858939831,0.9029246727276745
duration,150-160 s,L3,226.70370177358734,0.7518183394709786
duration,160-170 s,L1,5006.747992108039,1.7990089788686585
duration,160-170 s,L2,554.8647601967895,0.5315944568161467
duration,160-170 s,L3,101.50912019712868,0.3366350773750652
duration,170-180 s,L1,5588.16927394697,2.007923449535508
duration,170-180 s,L2,573.7849122690226,0.5497211224204834
duration,170-180 s,L3,98.12548285722437,0.3254139081292296
duration,180-190 s,L1,5612.637905046401,2.0167154412870176
duration,180-190 s,L2,382.1410154494497,0.36611452034361214
duration,180-190 s,L3,33.836373399042884,0.11221169245835502
duration,190-200 s,L1,4336.77356914735,1.5582758713868192
duration,190-200 s,L2,399.5550948121994,0.38279827596094673
duration,190-200 s,L3,60.905472118277196,0.20198104642503906
duration,200-210 s,L1,3542.1256448704903,1.272745472599661
duration,200-210 s,L2,177.10628224352448,0.16967867606979148
duration,200-210 s,L3,0.0,0.0
duration,210-220 s,L1,2776.607043331047,0.9976817306595374
duration,210-220 s,L2,220.037648324255,0.2108095567261283
duration,210-220 s,L3,27.06909871923431,0.08976935396668403
duration,220-230 s,L1,2754.4687580506047,0.9897270714557889
duration,220-230 s,L2,137.72343790253007,0.13194749678585085
duration,220-230 s,L3,0.0,0.0
duration,230-240 s,L1,2782.4329078785295,0.9997750620289441
duration,230-240 s,L2,220.32894155162924,0.21108863349597992
duration,230-240 s,L3,27.06909871923431,0.08976935396668403
duration,240-250 s,L1,2660.0897523813574,0.9558151032713896
duration,240-250 s,L2,133.0044876190677,0.1274264531142544
duration,240-250 s,L3,0.0,0.0
duration,250-260 s,L1,2503.956582508775,0.8997138225712726
duration,250-260 s,L2,125.19782912543873,0.11994719568223078
duration,250-260 s,L3,0.0,0.0
duration,260-270 s,L1,2090.3201996373878,0.7510872953433524
duration,260-270 s,L2,104.51600998186927,0.10013274502276501
duration,260-270 s,L3,0.0,0.0
duration,270-280 s,L1,1692.996237498954,0.6083220959497719
duration,270-280 s,L2,84.64981187494776,0.08109970931888393
duration,270-280 s,L3,0.0,0.0
duration,280-290 s,L1,1905.0577070273862,0.6845193577961994
duration,280-290 s,L2,95.25288535136919,0.09125810374148319
duration,280-290 s,L3,0.0,0.0
duration,290-300 s,L1,1960.9860066832355,0.7046153389425097
duration,290-300 s,L2,98.04930033416173,0.09393724073205889
duration,290-300 s,L3,0.0,0.0
duration,>300 s,L1,24113.35928684757,8.66433659854727
duration,>300 s,L2,1205.6679643424015,1.155103824539003
duration,>300 s,L3,0.0,0.0
subtask,0,L1,0.0,0.0
subtask,0,L2,0.0,0.0
subtask,0,L3,0.0,0.0
subtask,1,L1,0.0,0.0
subtask,1,L2,91.3582081774158,0.08752676424169642
subtask,1,L3,30.4527360591386,0.10099052321251953
subtask,2,L1,22.403097305326177,0.00804981062963002
subtask,2,L2,96.63100886892828,0.09257843055856661
subtask,2,L3,31.836951334553987,0.10558100154036132
subtask,3,L1,0.0,0.0
subtask,3,L2,944.0348178332966,0.9044432304975296
subtask,3,L3,314.67827261109886,1.0435687398627018
subtask,4,L1,9506.53984377501,3.415860068028535
subtask,4,L2,8002.228254805842,7.666625252833901
subtask,4,L3,2508.9670875390316,8.32049699578703
subtask,5,L1,0.0,0.0
subtask,5,L2,13597.146650405375,13.026900077972472
subtask,5,L3,4532.382216801801,15.030756204796681
subtask,6,L1,44979.752411762565,16.161983503783254
subtask,6,L2,16759.71635276761,16.056835737382876
subtask,6,L3,4836.909577393188,16.040661436921873
subtask,7,L1,0.0,0.0
subtask,7,L2,11988.227095280898,11.485456507715943
subtask,7,L3,3996.075698426971,13.252200879331749
subtask,8,L1,59222.82605745312,21.2797600357106
subtask,8,L2,14705.7465096805,14.089006706998267
subtask,8,L3,3914.8684022692664,12.982892817431694
subtask,9,L1,0.0,0.0
subtask,9,L2,7276.358297766899,6.971197333795715
subtask,9,L3,2425.4527659223018,8.043538136673904
subtask,10,L1,49511.69244325089,17.790385976045307
subtask,10,L2,9821.15368370019,9.409267324785334
subtask,10,L3,2448.5230205125586,8.120046108804603
subtask,11,L1,0.0,0.0
subtask,11,L2,3451.310086702375,3.3065666491307537
subtask,11,L3,1150.4366955674584,3.8151975435840724
subtask,12,L1,36800.23858709404,13.22294626113518
subtask,12,L2,5531.252663795683,5.299279150978138
subtask,12,L3,1230.4135781470143,4.08042518030382
subtask,13,L1,0.0,0.0
subtask,13,L2,2376.2362227964213,2.276579979013821
subtask,13,L3,792.0787409321404,2.6267737098205837
subtask,14,L1,18704.520716153118,6.720849694619137
subtask,14,L2,2674.723231913006,2.562548832796735
subtask,14,L3,579.8323987017803,1.9229003662181747
subtask,15,L1,0.0,0.0
subtask,15,L2,1093.5300675781589,1.0476688447112148
subtask,15,L3,364.5100225260529,1.2088259596650064
subtask,16,L1,15670.410459823348,5.630642717431826
subtask,16,L2,1650.9620955848127,1.5817229014781715
subtask,16,L3,289.14719086454835,0.9588999173713977
subtask,17,L1,0.0,0.0
subtask,17,L2,258.38685141087296,0.24755044431994944
subtask,17,L3,86.12895047029099,0.2856297626212674
subtask,18,L1,8962.298170229995,3.220304857555529
subtask,18,L2,1138.3769258519767,1.0906348843197233
subtask,18,L3,230.08733911349162,0.7630395087168143
subtask,19,L1,0.0,0.0
subtask,19,L2,247.31312920754982,0.2369411395633802
subtask,19,L3,82.43770973584995,0.2733884870803559
subtask,20,L1,6524.438669132681,2.3443408308844425
subtask,20,L2,591.9912663363897,0.5671639257760468
subtask,20,L3,88.58977762658502,0.29379061298187503
subtask,21,L1,0.0,0.0
subtask,21,L2,243.62188847310878,0.23340470464452376
subtask,21,L3,81.20729615770293,0.2693080619000521
subtask,22,L1,4908.555693280433,1.7637268301515547
subtask,22,L2,245.42778466402177,0.23513486390771837
subtask,22,L3,0.0,0.0
subtask,23,L1,0.0,0.0
subtask,23,L2,81.20729615770293,0.07780156821484124
subtask,23,L3,27.06909871923431,0.08976935396668403
subtask,24,L1,3806.9376697561233,1.3678968984818054
subtask,24,L2,275.2454203799506,0.2637019869240173
subtask,24,L3,28.29951229738132,0.09384977914698783
subtask,25,L1,0.0,0.0
subtask,25,L2,88.58977762658502,0.0848744380525541
subtask,25,L3,29.52992587552834,0.09793020432729167
subtask,26,L1,2405.5524340612637,0.8643555527134641
subtask,26,L2,120.27762170306346,0.11523333533328248
subtask,26,L3,0.0,0.0
subtask,27,L1,0.0,0.0
subtask,27,L2,0.0,0.0
subtask,27,L3,0.0,0.0
subtask,28,L1,2016.2787574793572,0.7244829566667021
subtask,28,L2,100.81393787396799,0.09658593298410531
subtask,28,L3,0.0,0.0
subtask,29,L1,0.0,0.0
subtask,29,L2,0.0,0.0
subtask,29,L3,0.0,0.0
subtask,30,L1,2144.4477775240125,0.7705362467936633
subtask,30,L2,188.42968503390375,0.1805271901356825
subtask,30,L3,27.06909871923431,0.08976935396668403
subtask,>30,L1,13118.999562455385,4.713877759342587
subtask,>30,L2,737.1572742804436,0.7062418609359924
subtask,>30,L3,27.06909871923431,0.08976935396668403
`,cn=["L1","L2","L3"],D=n=>{const e=Number(n);return Number.isFinite(e)?e:0};function Un(n){const e=[];let i=[],u="",L=!1;for(let d=0;d<n.length;d+=1){const v=n[d];if(L){v==='"'?n[d+1]==='"'?(u+='"',d+=1):L=!1:u+=v;continue}v==='"'?L=!0:v===","?(i.push(u),u=""):v===`
`?(i.push(u),e.push(i),i=[],u=""):v!=="\r"&&(u+=v)}(u||i.length)&&(i.push(u),e.push(i));const[_,...f]=e.filter(d=>d.some(v=>v.trim()!==""));return _?f.map(d=>{const v={};return _.forEach(($,g)=>{v[$.trim()]=(d[g]??"").trim()}),v}):[]}const qe=[{id:"L1",name:{en:"Visual intention",zh:"视觉意图"},color:"var(--c-blue)",tint:"var(--t-blue)",question:{en:"What was seen",zh:"看到了什么"},adds:{en:"Four-lens headband",zh:"四目头带"},setting:{open:100,controlled:0}},{id:"L2",name:{en:"Motor intention",zh:"动作意图"},color:"var(--c-teal)",tint:"var(--t-teal)",question:{en:"How the body executed",zh:"身体如何执行"},adds:{en:"Wrist cameras · surface EMG",zh:"腕部相机 · 表面肌电"},setting:{open:60,controlled:40}},{id:"L3",name:{en:"Cognitive intention",zh:"认知意图"},color:"var(--c-violet)",tint:"var(--t-violet)",question:{en:"What the brain decided",zh:"大脑决定了什么"},adds:{en:"EEG · eye tracker · gloves",zh:"脑电 · 眼动 · 手套"},setting:{open:30,controlled:70}}],He=[{id:"residential",name:{en:"Residential",zh:"居住"}},{id:"commercial",name:{en:"Commercial",zh:"商业"}},{id:"professional",name:{en:"Professional",zh:"专业"}},{id:"industrial",name:{en:"Industrial",zh:"工业"}},{id:"public",name:{en:"Public",zh:"公共"}},{id:"other",name:{en:"Residual",zh:"残余类"}}],Ze={kitchen:"厨房",living_room:"客厅",dining_room:"餐厅",storage_room:"储藏室",bathroom:"浴室",bedroom:"卧室",study_room:"书房",laundry_area:"洗衣区",balcony:"阳台",retail_store:"零售店",logistics_facility:"物流中心",entertainment_venue:"娱乐场所",restaurant:"餐馆",beverage_shop:"饮品店",pet_shop:"宠物店",hotel:"酒店",performance_venue:"演出场所",hair_salon:"理发店",beauty_salon:"美容院",office:"办公室",classroom:"教室",laboratory:"实验室",healthcare_facility:"医疗机构",conference_center:"会议中心",factory_workshop:"车间",workroom:"工作间",industrial_warehouse:"工业仓库",construction_site:"施工现场",equipment_room:"设备间",testing_lab:"检测实验室",park_garden:"公园与花园",public_facility:"公共设施",street:"街道",farm:"农场",indoor_sports_venue:"室内运动馆",sports_area:"运动场地",transportation:"交通空间",other:"其他"},Qn=n=>n.split("_").map(e=>e&&e[0].toUpperCase()+e.slice(1)).join(" "),We=Un(je),U=We.map(n=>{const e=n.name.replace(/_/g,"-"),i={L1:D(n.L1),L2:D(n.L2_estimated),L3:D(n.L3)},u=i.L1+i.L2+i.L3;return{key:e,name:{en:Qn(n.name),zh:Ze[n.name]??Qn(n.name)},zone:n.category||"other",image:`scenes/${n.name}.jpg`,hours:i,total:u,share:0,tiers:{L1:0,L2:0,L3:0},blurb:{en:"Recorded across the corpus; tier coverage follows the report’s table.",zh:"全库记录；层级覆盖依照报告表格。"}}}),Ge=U.reduce((n,e)=>n+e.total,0),qn=Math.round(Ge*1e3)/1e3;for(const n of U)n.share=n.total/qn*100,n.tiers={L1:n.total?n.hours.L1/n.total*100:0,L2:n.total?n.hours.L2/n.total*100:0,L3:n.total?n.hours.L3/n.total*100:0};const An=n=>Math.round(n*1e3)/1e3,pn=qe.map(n=>{const e=An(U.reduce((i,u)=>i+u.hours[n.id],0));return{...n,hours:e,share:e/qn*100}});function ne(n){return pn.find(e=>e.id===n)}function ee(n,e){return ne(n).hours*ne(n).setting[e]/100}cn.reduce((n,e)=>n+ee(e,"controlled"),0),cn.reduce((n,e)=>n+ee(e,"open"),0);const he=He.map(n=>{const e=U.filter(u=>u.zone===n.id),i=e.reduce((u,L)=>u+L.total,0);return{...n,note:{en:`${e.length} classes, ${Math.round(i).toLocaleString("en-US")} h`,zh:`${e.length} 个类别，${Math.round(i).toLocaleString("en-US")} 小时`}}}),Pe=he.map(n=>{const e=U.filter(L=>L.zone===n.id).sort((L,_)=>_.total-L.total),i={L1:e.reduce((L,_)=>L+_.hours.L1,0),L2:e.reduce((L,_)=>L+_.hours.L2,0),L3:e.reduce((L,_)=>L+_.hours.L3,0)},u=i.L1+i.L2+i.L3;return{zone:n,scenes:e,hours:u,share:u/qn*100,tiers:i,tierShare:{L1:u?i.L1/u*100:0,L2:u?i.L2/u*100:0,L3:u?i.L3/u*100:0}}});An(U.reduce((n,e)=>n+e.hours.L1,0)),An(U.reduce((n,e)=>n+e.hours.L2,0)),An(U.reduce((n,e)=>n+e.hours.L3,0));const pe=Un(De),bn=pe.filter(n=>n.layer==="subtask").map(n=>{const e={L1:D(n.L1),L2:D(n.L2_estimated),L3:D(n.L3)},i=e.L1+e.L2+e.L3,u=cn.reduce((L,_)=>e[_]>e[L]?_:L,"L1");return{verb:n.name,name:{en:n.name,zh:n.zh||n.name},total:i,tiers:e,origin:u}}),Ve=[...bn].sort((n,e)=>e.total-n.total),Y={entries:bn.reduce((n,e)=>n+e.total,0),top10:Ve.slice(0,10).reduce((n,e)=>n+e.total,0),types:bn.length};pe.filter(n=>n.layer!=="subtask").map(n=>({name:n.name,zh:n.zh,total:D(n.L1)+D(n.L2_estimated)+D(n.L3)}));const Xe=Un(Ne),W=Xe.map(n=>{const e={L1:D(n.L1),L2:D(n.L2_estimated),L3:D(n.L3)};return{rank:0,name:n.name,zh:n.zh||n.name,total:e.L1+e.L2+e.L3,tiers:e}}).sort((n,e)=>e.total-n.total).map((n,e)=>({...n,rank:e+1})),gn={entries:W.length,instances:W.reduce((n,e)=>n+e.total,0),top20:W.slice(0,20).reduce((n,e)=>n+e.total,0)},oe=Un(Ue);function be(n){const e=[];for(const i of oe)i.panel===n&&!e.includes(i.bin)&&e.push(i.bin);return e.map(i=>{const u=L=>D(oe.find(_=>_.panel===n&&_.bin===i&&_.level===L)?.percentage);return{label:i,L1:u("L1"),L2:u("L2"),L3:u("L3")}})}const vn=be("duration");be("subtask");function Zn(n,e){let i=0;for(const u of n)if(i+=u[e],i>=50)return u.label;return n[n.length-1]?.label??""}const Wn={L1:Zn(vn,"L1"),L2:Zn(vn,"L2"),L3:Zn(vn,"L3")},te=U.map(n=>({key:n.key,file:n.image,scene:n})),Nn={L1:"#9dbdd9",L2:"#5b8cba",L3:"#1f5f96"},Fn={L1:"",L2:"5 3",L3:"1.4 2.8"},In={L1:"circle",L2:"square",L3:"diamond"};function jn(n,e,i){if(n==="circle")return`M${e-2.4},${i}a${2.4},${2.4} 0 1,0 ${2*2.4},0a${2.4},${2.4} 0 1,0 ${-2*2.4},0Z`;if(n==="square")return`M${e-2.1},${i-2.1}h${2*2.1}v${2*2.1}h${-2*2.1}Z`;const u=2.9;return`M${e},${i-u}L${e+u},${i}L${e},${i+u}L${e-u},${i}Z`}const Ye=["width","height","viewBox"],Je=["x2","y1","y2","stroke","stroke-dasharray"],Ke=["d","fill"],Qe=an({__name:"TierGlyph",props:{id:{},w:{default:26},h:{default:10}},setup(n){return(e,i)=>(a(),s("svg",{class:"glyph",width:n.w,height:n.h,viewBox:`0 0 ${n.w} ${n.h}`,"aria-hidden":"true",focusable:"false"},[o("line",{x1:1,x2:n.w-1,y1:n.h/2,y2:n.h/2,stroke:t(Nn)[n.id],"stroke-width":"1.3","stroke-dasharray":t(Fn)[n.id]||void 0},null,8,Je),o("path",{d:t(jn)(t(In)[n.id],n.w/2,n.h/2),fill:t(Nn)[n.id]},null,8,Ke)],8,Ye))}}),Vn=sn(Qe,[["__scopeId","data-v-25bebfe6"]]),no={key:0,class:"top__bar"},eo={class:"top__k mono"},oo={class:"top__a mono"},to=["data-on","width","viewBox","aria-label"],co=["x2","y1","y2"],ao=["x","y","width","height","fill"],so=["x","y","transform"],ro=["x","y","transform"],Gn=264,io=54,Bn=120,Cn=6,uo=an({__name:"TopBars",props:{kicker:{},total:{},rows:{},n:{default:20},bare:{type:Boolean,default:!1}},setup(n){const e=n,{t:i,isZh:u}=$n(),L=k=>Math.round(k).toLocaleString("en-US"),{el:_,shown:f}=de({margin:"0px 0px -10% 0px",threshold:.25}),d=typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,v=B(()=>d||f.value),$=io+Bn,g=B(()=>e.rows.slice(0,e.n)),q=B(()=>u.value?`${e.total} 中的前 ${g.value.length}`:`Top ${g.value.length} of ${e.total}`),G=k=>(k-Cn*2)/Math.max(g.value.length,1),y=k=>Math.max(4,G(k)-3),w=(k,O)=>Cn+O*G(k)+G(k)/2,C=(k,O)=>w(k,O)-y(k)/2,P=B(()=>{const k=Math.max(1,...g.value.map(O=>O.total));return g.value.map(O=>{let M=0;const T=["L1","L2","L3"].map(R=>{const N=O.tiers[R],nn=$-(M+N)/k*Bn,rn=N/k*Bn;return M+=N,{id:R,y:nn,h:rn,fill:Nn[R]}}).filter(R=>R.h>.2);return{row:O,top:$-O.total/k*Bn,segs:T}})});return(k,O)=>(a(),s("section",{ref_key:"rootEl",ref:_,class:Dn(["top",{"top--bare":n.bare}])},[n.bare?Xn("",!0):(a(),s("header",no,[o("p",eo,c(t(i)(n.kicker)),1),o("p",oo,c(q.value),1)])),E(hn,{h:Gn},{default:tn(({w:M})=>[(a(),s("svg",{class:"plot","data-on":v.value?"true":"false",width:M,height:Gn,viewBox:`0 0 ${M} ${Gn}`,role:"img","aria-label":`${q.value}, ranked by count`},[o("line",{class:"base",x1:Cn,x2:M-Cn,y1:$+.5,y2:$+.5},null,8,co),(a(!0),s(x,null,z(P.value,(T,R)=>(a(),s("g",{key:T.row.label},[o("title",null,c(T.row.label)+" · "+c(L(T.row.total)),1),o("g",{class:"grow",style:V({"--i":R})},[(a(!0),s(x,null,z(T.segs,N=>(a(),s("rect",{key:N.id,x:C(M,R),y:N.y,width:y(M),height:Math.max(.4,N.h-1),fill:N.fill},null,8,ao))),128))],4),o("text",{class:"t-val",x:w(M,R)+3.6,y:T.top-5,transform:`rotate(-90 ${w(M,R)+3.6} ${T.top-5})`,"text-anchor":"start"},c(L(T.row.total)),9,so),o("text",{class:"t-lab",x:w(M,R)+3.6,y:$+8,transform:`rotate(-90 ${w(M,R)+3.6} ${$+8})`,"text-anchor":"end"},c(T.row.label),9,ro)]))),128))],8,to))]),_:1})],2))}}),ce=sn(uo,[["__scopeId","data-v-e8958630"]]),lo=["data-on"],ho={class:"plate"},po={class:"cell cell--a"},bo={class:"cell__head"},_o={class:"cell__top"},mo={class:"cell__t"},ko={class:"cell__okey"},Lo={class:"cell__s"},fo=["width","viewBox","aria-label"],go=["x1","x2","y1","y2"],yo=["d","fill"],xo=["y"],vo=["y","width","fill"],$o=["x","y","width","fill"],wo=["x","y","width"],zo=["x","y"],Mo=["x2","y1","y2"],So=["y"],Eo=["x","y"],Oo={class:"cell cell--b"},To={class:"cell__head"},Ro={class:"cell__t"},Bo={class:"cell__s"},Co=["width","viewBox","aria-label"],Ao=["d","fill"],Fo=["y"],Io=["d"],jo=["d"],Do=["x2","y1","y2"],No=["y"],Uo=["x","y"],qo=["x","y"],Ho={class:"cell cell--c"},Zo={class:"cell__head"},Wo={class:"cell__t"},Go={class:"cell__s"},Po=["width","viewBox","aria-label"],Vo=["d","fill"],Xo=["y"],Yo=["x","y","width"],Jo=["x","y"],Ko={class:"cell cell--d"},Qo={class:"cell__head"},nt={class:"cell__t"},et={class:"cell__s"},ot=["width","viewBox","aria-label"],tt=["x","y","width","height","fill"],ct=["x","y","transform"],at=["x","transform"],st=["x"],rt=["x1","x2"],it=["x2","y1","y2"],ut={id:"data-tasks",class:"cell cell--e"},lt={class:"cell__head"},dt={class:"cell__top"},ht={class:"cell__t"},pt={class:"cell__q mono"},bt={class:"cell__s"},_t={class:"cell__legend"},mt={class:"cell__foot"},kt={id:"data-objects",class:"cell cell--f"},Lt={class:"cell__head"},ft={class:"cell__top"},gt={class:"cell__t"},yt={class:"cell__q mono"},xt={class:"cell__s"},vt={class:"cell__legend"},$t={class:"cell__foot"},wt={class:"stats__note"},H=22,A=24,I=118,Pn=320,ae=150,zt=5,Mt=11,se=18.5,St=74,yn=190,re=194,dn=20,Et=an({__name:"FigureStats",setup(n){const{t:e,isZh:i}=$n(),{el:u,shown:L}=de({margin:"0px 0px -10% 0px",threshold:.25}),_=typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,f=B(()=>_||L.value),d=r=>Math.round(r).toLocaleString("en-US"),v=r=>r.toLocaleString("en-US",{minimumFractionDigits:1,maximumFractionDigits:1}),$=Nn,g=[10,44,78],q=Math.max(...pn.map(r=>r.hours)),G=pn.map(r=>{const b=r.hours*r.setting.controlled/100;return{id:r.id,hours:r.hours,open:r.hours-b,ctrl:b}}),y=(r,b)=>A+b/q*Math.max(40,r-A-62),w=cn.map(r=>({id:r,shares:vn.map(b=>b[r])})),C=Math.max(...w.flatMap(r=>r.shares)),P=r=>Math.max(2,(r-A-4)/Math.max(1,vn.length));function k(r,b,h){const p=P(r),l=g[b],Q=h.map((On,Tn)=>{const en=A+(Tn+.5)*p,on=l+H-On/C*H;return`${en.toFixed(1)},${on.toFixed(1)}`}),F=(l+H).toFixed(1),En=(A+.5*p).toFixed(1),kn=(A+(h.length-.5)*p).toFixed(1);return{line:`M${Q.join(" L")}`,area:`M${En},${F} L${Q.join(" L")} L${kn},${F} Z`}}const O=B(()=>Pe.map(r=>({id:r.zone.id,name:e(r.zone.name),scenes:r.scenes.map(b=>({key:b.key,name:e(b.name),total:b.total,hours:b.hours}))}))),M=B(()=>O.value.flatMap(r=>r.scenes)),T=B(()=>M.value.length),R=B(()=>cn.map(r=>{const b=M.value.map(h=>h.hours[r]>0);return{id:r,cells:b,reached:b.filter(Boolean).length}})),N=r=>Math.max(1.2,(r-A-52)/Math.max(T.value,1)),nn=Math.max(...M.value.map(r=>r.total));function rn(r){const h=r-1,p=12,l=O.value,Q=Math.max(1,l.reduce((on,Rn)=>on+Rn.scenes.length,0)),F=(h-1-p*(l.length-1))/Q,En=Math.max(1.5,F-6),kn=yn-St,On=[],Tn=[];let en=1;return l.forEach(on=>{const Rn=en;for(const Ln of on.scenes){let Jn=0;const ke=cn.map(fn=>{const Hn=Ln.hours[fn],Le=yn-(Jn+Hn)/nn*kn,fe=Hn/nn*kn;return Jn+=Hn,{id:fn,y:Le,h:fe,fill:$[fn]}}).filter(fn=>fn.h>.15);On.push({key:Ln.key,name:Ln.name,total:Ln.total,top:yn-Ln.total/nn*kn,x:en,w:En,segs:ke}),en+=F}const Yn=en-F+En;Tn.push({id:on.id,name:on.name,cx:Math.min(r-40,Math.max(40,(Rn+Yn)/2)),x0:Rn,x1:Yn}),en+=p}),{bars:On,zones:Tn}}function wn(r){return cn.map(b=>({id:b,colour:$[b],dash:Fn[b],values:r.map(h=>h.tiers[b]).filter(h=>h>0).sort((h,p)=>p-h)}))}const _n=B(()=>wn(bn)),zn=B(()=>wn(W)),X=B(()=>[...bn].sort((r,b)=>b.total-r.total).map(r=>({label:e(r.name),total:r.total,tiers:r.tiers}))),m=B(()=>[...W].sort((r,b)=>b.total-r.total).map(r=>({label:i.value?r.zh:r.name,total:r.total,tiers:r.tiers}))),S=Math.round(Y.top10/Y.entries*100),j=Math.round(gn.top20/gn.instances*100),mn=[...bn].sort((r,b)=>b.total-r.total).at(-1)?.total??0,J=W[W.length-1]?.total??0,K=r=>Number.isInteger(r)?String(r):r>=10?String(Math.round(r)):r.toFixed(1),Mn=r=>Math.pow(10,Math.ceil(Math.log10(Math.max(2,...r.flatMap(b=>b.values))))),Sn=B(()=>Mn(_n.value)),_e=B(()=>Mn(zn.value)),un={a:{en:"Hours per tier, split into open and controlled collection.",zh:"各层级时长，分为开放与受控采集。"},b:{en:"Episode length per tier over ten-second bins to 300 s.",zh:"各层级片段长度，10 秒一档，到 300 秒。"},c:{en:"Of the thirty-eight scene classes, how many each tier records. Derived from panel d.",zh:"38 个场景类别中，每一层实际记录了多少个；由面板 d 数得。"},d:{en:"Thirty-eight scene classes in zone order, each bar stacked by the tier that records it.",zh:"38 个场景类别按区域排列，条形按记录它的层级堆叠。"},e:{en:"Rank within each tier against that tier’s count for the verb, on log axes.",zh:"各层内部排序与该层动词计数的关系，双对数轴。"},f:{en:"Rank within each tier against that tier’s instance count for the object entry, on log axes.",zh:"各层内部排序与该层物体实例数的关系，双对数轴。"}},me={en:"Every count is read from the report’s Fig. 2 tables — scenes, actions, objects, episode profiles — not modelled; the L2 columns are the report’s estimate. (c) is counted from (d).",zh:"所有计数取自报告 Fig. 2 的四张表——场景、动作、物体、片段分布——未经拟合；其中 L2 一列为报告的估计值。(c) 由 (d) 数得。"};return(r,b)=>(a(),s("div",{ref_key:"rootEl",ref:u,class:"stats","data-on":f.value?"true":"false"},[o("div",ho,[o("figure",po,[o("figcaption",bo,[o("div",_o,[o("p",mo,[b[0]||(b[0]=o("span",{class:"cell__n"},"(a)",-1)),Z(" "+c(t(e)({en:"Recorded hours",zh:"录制时长"})),1)]),o("ul",ko,[o("li",null,[b[1]||(b[1]=o("i",{class:"sw sw--flat"},null,-1)),Z(c(t(e)({en:"open",zh:"开放"})),1)]),o("li",null,[b[2]||(b[2]=o("i",{class:"sw sw--hatch"},null,-1)),Z(c(t(e)({en:"controlled",zh:"受控"})),1)])])]),o("p",Lo,c(t(e)({en:"10,000 · 2,000 · 500 h",zh:"10,000 · 2,000 · 500 小时"})),1)]),E(hn,{h:I},{default:tn(({w:h})=>[(a(),s("svg",{class:"plot",width:h,height:I,viewBox:`0 0 ${h} ${I}`,role:"img","aria-label":t(e)(un.a)},[b[3]||(b[3]=o("defs",null,[o("pattern",{id:"hc-hatch",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},[o("line",{x1:"0",y1:"0",x2:"0",y2:"4",stroke:"#fff","stroke-width":"1","stroke-opacity":"0.9"})])],-1)),(a(),s(x,null,z([25,50,75],p=>o("line",{key:p,class:"grid",x1:y(h,p/100*t(q)),x2:y(h,p/100*t(q)),y1:g[0]-3,y2:g[2]+H+3},null,8,go)),64)),(a(!0),s(x,null,z(t(G),(p,l)=>(a(),s("g",{key:p.id},[o("path",{d:t(jn)(t(In)[p.id],4,g[l]+11),fill:t($)[p.id]},null,8,yo),o("text",{class:"t-id",x:"10.5",y:g[l]+15},c(p.id),9,xo),o("g",{class:"grow",style:V({"--i":l})},[o("rect",{x:A,y:g[l],width:Math.max(1.5,y(h,p.open)-A-(p.ctrl>0?1:0)),height:H,fill:t($)[p.id]},null,8,vo),p.ctrl>0?(a(),s(x,{key:0},[o("rect",{x:y(h,p.open),y:g[l],width:Math.max(1.5,y(h,p.hours)-y(h,p.open)),height:H,fill:t($)[p.id]},null,8,$o),o("rect",{x:y(h,p.open),y:g[l],width:Math.max(1.5,y(h,p.hours)-y(h,p.open)),height:H,fill:"url(#hc-hatch)"},null,8,wo)],64)):Xn("",!0)],4),o("text",{class:"t-val",x:h,y:g[l]+15,"text-anchor":"end"},c(d(p.hours))+" h ",9,zo)]))),128)),o("line",{class:"base",x1:A,x2:h-62,y1:g[2]+H+4,y2:g[2]+H+4},null,8,Mo),o("text",{class:"t-tick",x:A,y:I-2},"0",8,So),o("text",{class:"t-tick",x:h-62,y:I-2,"text-anchor":"end"},"10,000 h",8,Eo)],8,fo))]),_:1})]),o("figure",Oo,[o("figcaption",To,[o("p",Ro,[b[4]||(b[4]=o("span",{class:"cell__n"},"(b)",-1)),Z(" "+c(t(e)({en:"Episode length",zh:"片段长度"})),1)]),o("p",Bo,c(t(e)({en:"median bin",zh:"中位数区间"}))+" "+c(t(Wn).L1)+" / "+c(t(Wn).L2)+" / "+c(t(Wn).L3),1)]),E(hn,{h:I},{default:tn(({w:h})=>[(a(),s("svg",{class:"plot",width:h,height:I,viewBox:`0 0 ${h} ${I}`,role:"img","aria-label":t(e)(un.b)},[(a(!0),s(x,null,z(t(w),(p,l)=>(a(),s("g",{key:p.id},[o("path",{d:t(jn)(t(In)[p.id],4,g[l]+11),fill:t($)[p.id]},null,8,Ao),o("text",{class:"t-id",x:"10.5",y:g[l]+15},c(p.id),9,Fo),o("path",{class:"spark",d:k(h,l,p.shares).area,style:V({fill:t($)[p.id],"--i":l})},null,12,Io),o("path",{class:Dn(["spark-line",{"is-dash":!!t(Fn)[p.id]}]),pathLength:1,d:k(h,l,p.shares).line,style:V({stroke:t($)[p.id],strokeDasharray:t(Fn)[p.id]||void 0,"--i":l})},null,14,jo),o("line",{class:"base",x1:A,x2:h-4,y1:g[l]+H+.5,y2:g[l]+H+.5},null,8,Do)]))),128)),o("text",{class:"t-tick",x:A,y:I-2},"0",8,No),o("text",{class:"t-tick",x:(A+h)/2,y:I-2,"text-anchor":"middle"},"150",8,Uo),o("text",{class:"t-tick",x:h-4,y:I-2,"text-anchor":"end"},"300+ s",8,qo)],8,Co))]),_:1})]),o("figure",Ho,[o("figcaption",Zo,[o("p",Wo,[b[5]||(b[5]=o("span",{class:"cell__n"},"(c)",-1)),Z(" "+c(t(e)({en:"Classes reached",zh:"覆盖类别"})),1)]),o("p",Go,c(t(e)({en:"derived from (d) ·",zh:"由 (d) 数得 ·"}))+" "+c(T.value)+" "+c(t(e)({en:"classes",zh:"类"})),1)]),E(hn,{h:I},{default:tn(({w:h})=>[(a(),s("svg",{class:"plot",width:h,height:I,viewBox:`0 0 ${h} ${I}`,role:"img","aria-label":t(e)(un.c)},[(a(!0),s(x,null,z(R.value,(p,l)=>(a(),s("g",{key:p.id},[o("path",{d:t(jn)(t(In)[p.id],4,g[l]+11),fill:t($)[p.id]},null,8,Vo),o("text",{class:"t-id",x:"10.5",y:g[l]+15},c(p.id),9,Xo),o("g",{class:"grow",style:V({"--i":l})},[(a(!0),s(x,null,z(p.cells,(Q,F)=>(a(),s("rect",{key:F,class:Dn(["cellmark",{"is-off":!Q}]),x:A+zt+F*N(h),y:g[l]+7,width:Math.max(1,N(h)-1.6),height:8,style:V({"--c":t($)[p.id]})},null,14,Yo))),128))],4),o("text",{class:"t-val",x:h,y:g[l]+15,"text-anchor":"end"},c(p.reached)+"/"+c(p.cells.length),9,Jo)]))),128))],8,Po))]),_:1})]),o("figure",Ko,[o("figcaption",Qo,[o("p",nt,[b[6]||(b[6]=o("span",{class:"cell__n"},"(d)",-1)),Z(" "+c(t(e)({en:"Scene vocabulary",zh:"场景词表"})),1)]),o("p",et,c(T.value)+" "+c(t(e)({en:"classes · five zones + residual",zh:"个类别 · 五个区域加残余类"})),1)]),E(hn,{h:Pn},{default:tn(({w:h})=>[(a(),s("svg",{class:"plot",width:h,height:Pn,viewBox:`0 0 ${h} ${Pn}`,role:"img","aria-label":t(e)(un.d)},[(a(!0),s(x,null,z([rn(h)],p=>(a(),s(x,{key:0},[(a(!0),s(x,null,z(p.bars,(l,Q)=>(a(),s("g",{key:l.key},[o("title",null,c(l.name)+" · "+c(d(l.total))+" h",1),o("g",{class:"grow",style:V({"--i":Q})},[(a(!0),s(x,null,z(l.segs,F=>(a(),s("rect",{key:F.id,x:l.x,y:F.y,width:l.w,height:Math.max(.4,F.h-1),fill:F.fill},null,8,tt))),128))],4),o("text",{class:"t-dv",x:l.x+l.w/2+3.6,y:l.top-4,transform:`rotate(-90 ${l.x+l.w/2+3.6} ${l.top-4})`,"text-anchor":"start"},c(v(l.total)),9,ct),o("text",{class:"t-lab",x:l.x+l.w/2,y:re,transform:`rotate(-90 ${l.x+l.w/2} ${re})`,"text-anchor":"end"},c(l.name),9,at)]))),128)),(a(!0),s(x,null,z(p.zones,l=>(a(),s("text",{key:`z${l.id}`,class:"t-zone",x:l.cx,y:Mt,"text-anchor":"middle"},c(l.name),9,st))),128)),(a(!0),s(x,null,z(p.zones,l=>(a(),s("line",{key:`r${l.id}`,class:"group-rule",x1:l.x0,x2:l.x1+2,y1:se,y2:se},null,8,rt))),128))],64))),128)),o("line",{class:"base",x1:"1",x2:h-1,y1:yn+.5,y2:yn+.5},null,8,it)],8,ot))]),_:1})]),o("figure",ut,[o("figcaption",lt,[o("div",dt,[o("p",ht,[b[7]||(b[7]=o("span",{class:"cell__n"},"(e)",-1)),Z(" "+c(t(e)({en:"Action vocabulary",zh:"动作词表"})),1)]),o("p",pt,c(t(e)({en:`Top ${dn} of ${t(Y).types}`,zh:`${t(Y).types} 中的前 ${dn}`})),1)]),o("p",bt,c(t(Y).types)+" "+c(t(e)({en:"types ·",zh:"种 ·"}))+" "+c(d(t(Y).entries))+" "+c(t(e)({en:"occurrences",zh:"次"})),1)]),o("ul",_t,[(a(!0),s(x,null,z(t(pn),h=>(a(),s("li",{key:h.id},[E(Vn,{id:h.id,w:24,h:9},null,8,["id"]),Z(c(h.id),1)]))),128))]),E(Kn,{series:_n.value,"y-max":Sn.value,h:ae,aria:un.e,on:f.value},null,8,["series","y-max","aria","on"]),E(ce,{class:"cell__top20",kicker:{en:"Actions · verbs",zh:"动作 · 动词"},total:t(Y).types,rows:X.value,n:dn,bare:""},null,8,["total","rows"]),o("p",mt,c(t(e)({en:"top 10 =",zh:"前 10 个 ="}))+" "+c(t(S))+"% "+c(t(e)({en:`of occurrences · rank ${t(Y).types} = ${K(t(mn))}`,zh:`的次数 · 第 ${t(Y).types} 位 = ${K(t(mn))}`})),1)]),o("figure",kt,[o("figcaption",Lt,[o("div",ft,[o("p",gt,[b[8]||(b[8]=o("span",{class:"cell__n"},"(f)",-1)),Z(" "+c(t(e)({en:"Object vocabulary",zh:"物体词表"})),1)]),o("p",yt,c(t(e)({en:`Top ${dn} of ${t(W).length}`,zh:`${t(W).length} 条中的前 ${dn}`})),1)]),o("p",xt,c(t(W).length)+" "+c(t(e)({en:"entries ·",zh:"条 ·"}))+" "+c(d(t(gn).instances))+" "+c(t(e)({en:"annotation occurrences",zh:"次标注"})),1)]),o("ul",vt,[(a(!0),s(x,null,z(t(pn),h=>(a(),s("li",{key:h.id},[E(Vn,{id:h.id,w:24,h:9},null,8,["id"]),Z(c(h.id),1)]))),128))]),E(Kn,{series:zn.value,"y-max":_e.value,h:ae,aria:un.f,on:f.value},null,8,["series","y-max","aria","on"]),E(ce,{class:"cell__top20",kicker:{en:"Objects · entries",zh:"物体 · 条目"},total:t(W).length,rows:m.value,n:dn,bare:""},null,8,["total","rows"]),o("p",$t,c(t(e)({en:"top 20 =",zh:"前 20 条 ="}))+" "+c(t(j))+"% "+c(t(e)({en:`of annotations · rank ${t(gn).entries} = ${K(t(J))}`,zh:`的标注 · 第 ${t(gn).entries} 条 = ${K(t(J))}`})),1)])]),o("p",wt,c(t(e)(me)),1)],8,lo))}}),Ot=sn(Et,[["__scopeId","data-v-5b89640b"]]),Tt=["aria-label"],Rt={class:"strip__k mono"},Bt=["aria-label"],Ct=["src","alt","onError"],At={key:1,class:"tile__fallback"},Ft={class:"tile__cap"},It={class:"tile__name"},jt={class:"tile__meta"},Dt=88,ie=1,Nt=an({__name:"SceneStrip",setup(n){const{t:e,isZh:i}=$n(),u=y=>{const w=he.find(C=>C.id===y);return w?e(w.name):y},L=i.value?"场景 · FIG. 8 — 38 类全部":`Scenes · Fig. 8 — ${U.length} of ${U.length} classes`,_=i.value?"报告 fig. 8 的 38 幅真实场景画面，按区域顺序排列；悬停或聚焦某幅可读取类别、区域、小时与占比。":"38 real scene frames from the report’s figure 8, in zone order; hover or focus a tile for its class, zone, hours and share.",f=xn(11),d=xn(null);let v=null;function $(y){const w=y.getBoundingClientRect().width;if(w<=0)return;const C=Math.max(2,Math.floor((w+ie)/(Dt+ie)));C!==f.value&&(f.value=C)}ue(()=>{const y=d.value;y&&($(y),!(typeof ResizeObserver>"u")&&(v=new ResizeObserver(()=>$(y)),v.observe(y)))}),le(()=>{v?.disconnect(),v=null});const g=B(()=>{const y=te.length,w=Math.max(1,Math.ceil(y/f.value)),C=Math.ceil(y/w),P=[];for(let k=0;k<y;k+=C)P.push(te.slice(k,k+C));return P}),q=xn(new Set);function G(y){const w=new Set(q.value);w.add(y),q.value=w}return(y,w)=>(a(),s("section",{class:"strip",role:"group","aria-label":t(_)},[o("p",Rt,c(t(L)),1),o("div",{ref_key:"gridEl",ref:d,class:"strip__grid"},[(a(!0),s(x,null,z(g.value,(C,P)=>(a(),s("div",{key:P,class:"strip__row"},[(a(!0),s(x,null,z(C,k=>(a(),s("figure",{key:k.key,class:"tile",tabindex:"0","aria-label":`${t(e)(k.scene.name)} · ${u(k.scene.zone)} · ${Math.round(k.scene.total).toLocaleString("en-US")} h · ${k.scene.share.toFixed(1)}%`},[q.value.has(k.key)?(a(),s("span",At,c(t(e)(k.scene.name)),1)):(a(),s("img",{key:0,src:k.file,alt:t(e)(k.scene.name),width:"900",height:"676",draggable:"false",loading:"lazy",decoding:"async",onError:O=>G(k.key)},null,40,Ct)),o("figcaption",Ft,[o("span",It,c(t(e)(k.scene.name)),1),o("span",jt,c(u(k.scene.zone))+" · "+c(Math.round(k.scene.total).toLocaleString("en-US"))+" h · "+c(k.scene.share.toFixed(1))+"% ",1)])],8,Bt))),128))]))),128))],512)],8,Tt))}}),Ut=sn(Nt,[["__scopeId","data-v-7950d752"]]),qt={id:"data",class:"section section--tinted"},Ht={class:"shell"},Zt={class:"data-lead"},Wt={class:"dstats"},Gt={class:"dstats__v"},Pt={class:"dstats__l"},Vt={class:"dstats__v"},Xt={class:"dstats__l"},Yt={class:"dstats__l"},Jt={class:"dstats__l"},Kt={class:"dfig"},Qt={class:"dfig__key"},nc={class:"dfig__id mono"},ec={class:"dfig__v mono"},oc={class:"dfig__band-strip"},tc=an({__name:"DataSection",setup(n){const{t:e,list:i}=$n(),u=L=>L.toLocaleString("en-US");return(L,_)=>{const f=xe("reveal");return a(),s("section",qt,[o("div",Ht,[E(we,{num:t(ln).num,kicker:t(ln).kicker,title:t(ln).title,"aside-wide":""},{aside:tn(()=>[o("div",Zt,[(a(!0),s(x,null,z(t(i)(t(ln).body),(d,v)=>(a(),s("p",{key:v},[E($e,{text:d},null,8,["text"])]))),128))])]),_:1},8,["num","kicker","title"]),o("ul",Wt,[o("li",null,[o("p",Gt,[Z(c(u(t(qn))),1),_[0]||(_[0]=o("span",null,"h",-1))]),o("p",Pt,c(t(e)({en:"Recording volume",zh:"采集规模"})),1)]),o("li",null,[o("p",Vt,c(t(U).length),1),o("p",Xt,c(t(e)({en:"Scene classes",zh:"场景类别"})),1)]),o("li",null,[_[1]||(_[1]=o("p",{class:"dstats__v"},"99",-1)),o("p",Yt,c(t(e)({en:"Task verbs",zh:"任务动词"})),1)]),o("li",null,[_[2]||(_[2]=o("p",{class:"dstats__v"},"635",-1)),o("p",Jt,c(t(e)({en:"Object classes",zh:"物体类别"})),1)])]),ve((a(),s("figure",Kt,[E(ze,{n:"03",title:t(ln).statsTitle,aside:t(ln).statsAside},null,8,["title","aside"]),o("ul",Qt,[(a(!0),s(x,null,z(t(pn),d=>(a(),s("li",{key:d.id},[E(Vn,{id:d.id,w:24,h:9},null,8,["id"]),o("span",nc,c(d.id),1),o("span",null,c(t(e)(d.name)),1),o("span",ec,c(u(d.hours))+" h",1)]))),128))]),E(Ot,{id:"data-stats"})])),[[f]]),o("div",oc,[E(Ut,{id:"data-scenes"})])])])}}}),ac=sn(tc,[["__scopeId","data-v-19195ca9"]]);export{ac as default};
