var key = [...range(65,90).map(e=>String.fromCharCode(e)),...range(65,91).map(e=>String.fromCharCode(e).toLowerCase()),...range(0,10).map(e=>e+'')];
function encrypt(data,pass){
	var counter = 0;
	var result = [];
	for(let i of data.split('')){
		enchar(i);
	}
	function enchar(c){
		if(key.includes(c)){
			let n = key[(key.indexOf(c)+key.indexOf(pass[counter]))%key.length];
			result.push(n);
			console.log(n);
			counter = (counter+1) % pass.length;
		} else {
			result.push(c);
		}
	}
	return result.join('');
}
function decrypt(data,pass){
	var counter = 0;
	var result = [];
	for(let i of data.split('')){
		dechar(i);
	}
	function dechar(c){
		if(key.includes(c)){
			let n = key[(key.length + key.indexOf(c)-key.indexOf(pass[counter]))%key.length];
			counter = (counter+1) % pass.length;
			result.push(n);
		} else {
			result.push(c);
		}
	}
	return result.join('');
}
function range(min,max){
	var result = [];
	for(let i=min;i<max;i++) result.push(i);
	return result;
}