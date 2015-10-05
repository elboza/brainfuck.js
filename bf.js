function char2bf(c){
	rc="";
	a=c.charCodeAt(0);
	div=Math.floor(a/10);
	r=a%10;
	
	rc += Array(11).join('+');
	rc += "[>";
	rc += Array(div+1).join('+');
	rc += "<-]>";
	rc += Array(r+1).join('+');
	rc += ".[-]";
	
	return rc;
}
function string2bf(s){
	rc="";
	for(i=0;i<s.length;i++){
		rc += char2bf(s.charAt(i));
	}
	return rc;
}
function pretty_bf(s){
	//str.match(/.{1,3}/g)
	x=string2bf(s);
	r=x.match(/.{1,5}/g);
	return r.join(' ');
}
function run(code,env){
	ip=0;
	ep=0;
	if(env==null){
		xenv=[0,0,0,0,0,0,0,0,0,0];
	}
	else{
		xenv=env.split("");
	}
	output="";
	while(ip<=code.length){
		switch(code[ip]){
			case '+':
				xenv[ep]=String.fromCharCode(xenv[ep].charCodeAt(0)+1);
				//xenv[ep]+=1;
				break;
			case '-':
				xenv[ep]=String.fromCharCode(xenv[ep].charCodeAt(0)-1);
				//xenv[ep]-=1;
				break;
			case '>':
				++ep;if(ep>=env.length) ep=0;
				break;
			case '<':
				--ep;if(ep<0) ep=env.length-1;
				break;
			case '.':
				output+=xenv[ep];
				break;
			case ',':
				xenv[ep]=prompt("input a character",0);
				break;
			case '[':
				if(xenv[ep]==0){
					nest=1;ip++;
					while(nest){
						if(code[ip]=='[') nest++;
						if(code[ip]==']') nest--;
						++ip;
					}
					ip-=2;
				}
				break;
			case ']':
				if(xenv[ep]!=0){
					nest=1;ip--;
					while(nest){
						if(code[ip]==']') nest++;
						if(code[ip]=='[') nest--;
						--ip;
					}
					++ip;
				}
				break;
			default:
				
		}
		ip++;
	}
	env=xenv.join("");
	return({"out":output,"env":env});
}
function out(){
	alert("out");
}
