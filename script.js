function calcdiscount(){
    var amt = parseFloat(document.getElementById("n1").value)
    var discount=0, rest=0
    var msg="";
    if (amt>=5000){
        discount=amt*30/100;
        resl=amt-discount;
    }
    else if (amt>=3000){
        discount=amt*20/100;
        resl=amt-discount;
    }
    else if (amt>=2000){
        discount=amt*15/100;
        resl=amt-discount;
    }
    else{
        discount="0";
        rest=amt;
        msg="shop more to get discount"
    }
    document.getElementById("result").innerHTML="your total discount: "+discount+"<br/> plese your pay :"+rest+"<br/>"+msg
}   
    document.getElementById("btn").addEventListener("click", calcdiscount)