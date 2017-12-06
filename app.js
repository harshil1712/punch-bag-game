new Vue({
	el:'#vue-app',
	data:{
		health:100,
		end:false
	},
	methods:{
		punch:function(){
			this.health -=10;
			if(this.health <= 0){
				end=true;
			}
		},
		restart:function(){
			this.health=100;
			this.end=false;
		}
	}
});