function print_output(resu,id){
	console.log(resu);
	if (id===0){
	document.getElementsByName('result')[0].value=resu;}
	else{
	document.getElementById(id).value=resu;}
}

function decode(txt,key,brute)
{
	var inp;
	var resu='',ch;
	for (let i=0; i<txt.length; i++){
		let inp=txt.charCodeAt(i);
		if (inp>96 && inp<123) inp-=32;
		if (inp<91 && inp>64){
		inp = inp - key;
		if (inp>90) inp-=26;
		if (inp<65) inp+=26;
		}
		ch=String.fromCharCode(inp);
		resu+=ch;
	}
	print_output(resu,brute);
}

function cesar_encode()
{
	//A=65;
	//Z=90;
	//a=97;
	//z=122;
	
	//input
	var inp;
	var resu='',ch;
	var key=document.getElementById("key").value;
	key=parseFloat(key);
	var txt=document.getElementById("txt").value;
	for (let i=0,counter=0; i<txt.length; i++){
		//transformation by letter
		let inp=txt.charCodeAt(i);
		if (inp>96 && inp<123) inp-=32;
		
		if (inp<91 && inp>64){
		inp = inp + key;
		if (inp>90) inp-=26;
		if (inp<65) inp+=26;
		}
		if (counter>=5){ 
			counter=0; resu+=' ';
		}
		counter++;
		//output
		ch=String.fromCharCode(inp);
		resu+=ch;
	}
	print_output(resu,0)
}

function cesar_decode()
{
	var key=document.getElementById("key").value;
	key=parseFloat(key);
	var txt=document.getElementById("txt").value;
	decode(txt,key,0);
}

function cesar_bruteforce()
{
	
	var key=document.getElementById("key").value;
	key=parseFloat(key);
	var txt=document.getElementById("txt").value;
	
	for (let j=1; j<26; j++){
		decode(txt,j,j);
	}
	
} 
