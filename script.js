/*
$(function(){
	firebase.initializeApp({
		apiKey: "AIzaSyBZJYrWhbPw6thPNKEvK34tmlzk6qDJjaY",
		authDomain: "to-do-cfe37.firebaseapp.com",
		databaseURL: "https://to-do-cfe37.firebaseio.com",
		storageBucket: "",
	});
});
*/

new Vue({
	
	el: '#app',
	data: {
		items: [
			"alpha",
			"beta",
			"gamma",
			"epsilon yo! this is really cool thing we're working on ok."
		],		
	},
	methods: {
		addTask: function() {
			console.log('hi');
			return false;
		}
	}
});