(function(root){
 class OrderState{
 constructor(model){this.model=model;this.items=[];this.tickets=[];this.number=101;this.serial=0;this.sent=false;this.service='Dine-in';this.table='5';this.revision=0;this.reviewedRevision=null;}
 changed(){this.revision++;this.reviewedRevision=null;}
 upsert(d,id=null){if(this.sent)throw Error('Start a new order first.');const errors=this.model.validate(d);if(errors.length)throw Error(errors.join(' '));if(!Number.isInteger(Number(d.seat))||Number(d.seat)<1||Number(d.seat)>6)throw Error('Choose a valid seat.');if(id!==null){const i=this.items.findIndex(x=>x.id===id);if(i<0)throw Error('Item not found.');this.items[i]={...d,id};}else{this.items.push({...d,id:++this.serial});}this.changed();}
 remove(id){if(this.sent)throw Error('Sent orders cannot be edited in this demo.');this.items=this.items.filter(x=>x.id!==id);this.changed();}
 context(service,table){if(this.sent)throw Error('Start a new order first.');if(!['Dine-in','Takeout'].includes(service))throw Error('Invalid service.');this.service=service;this.table=table;this.changed();}
 total(){return this.items.reduce((sum,x)=>sum+this.model.total(x),0)}
 review(){if(this.sent||!this.items.length)throw Error('Add a meal before reviewing.');this.reviewedRevision=this.revision;return this.items.map(x=>({...x}));}
 send(confirmed){if(this.sent)throw Error('Tickets already generated.');if(!confirmed||this.reviewedRevision!==this.revision||!this.items.length)throw Error('Review and confirm the current order first.');const all=this.items.flatMap(item=>this.model.lines(item).map(line=>({...line,seat:item.seat})));for(const station of ['KITCHEN','SWEET','BEVERAGE']){const lines=all.filter(x=>x.station===station);if(lines.length)this.tickets.push({id:++this.serial,order:this.number,service:this.service,table:this.table,station,lines:JSON.parse(JSON.stringify(lines)),ready:false});}this.sent=true;return this.tickets.filter(t=>t.order===this.number);}
 clear(){if(this.sent)throw Error('Start a new order first.');this.items=[];this.changed();}
 newOrder(){if(!this.sent&&this.items.length)throw Error('Clear or send this order first.');this.items=[];this.number++;this.sent=false;this.changed();}
 }
 root.OrderState=OrderState;if(typeof module!=='undefined')module.exports=OrderState;
})(typeof window==='undefined'?globalThis:window);
