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
			{
				'start': '12:30am',
				'description': 'stuff is great',
				'tag': 'life',
				'duration': 2.5,
			},
			{
				'start': '12:30am',
				'description': 'stuff is great',
				'tag': 'life',
				'duration': 2.5,
			},
			{
				'start': '12:30am',
				'description': 'stuff is great',
				'tag': 'life',
				'duration': 2.5,
			},
			{
				'start': '12:30am',
				'description': 'stuff is great',
				'tag': 'life',
				'duration': 2.5,
			},
			{
				'start': '12:30am',
				'description': 'stuff is great',
				'tag': 'life',
				'duration': 2.5,
			},
		],		
	},
	methods: {
		addTask: function() {
			console.log('hi');
			return false;
		}
	}
});