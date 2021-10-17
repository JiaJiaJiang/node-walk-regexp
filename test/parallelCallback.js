const {walkFilter}=require('../index.js');

walkFilter(__dirname+'/..',info=>{
	if(info.size>2048)return true;//get file which size > 2048 Bytes
},async (dir,info)=>{
	return new Promise((ok,fail)=>{
		setTimeout(()=>{//set a random timout,in parallel mode the log will print in random order
			console.log(info.type,'\t',dir,info.name,info.size);
			ok();
		},5000*Math.random());
	})
},{
	withStats:true,//include stats object in callback info
	asyncCallbackInParallel:true,
});