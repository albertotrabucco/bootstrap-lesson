let bar = document.getElementsByClassName("progress-bar")[0]
var i = 0;
var animation = setInterval(function(){
    i++;
    if(i <= 100){
            bar.style = "width: "+i+"%";
            bar.innerText = i + "%";    
        }else{
        clearInterval(animation);
    }
},100)
    




//$progress-bar-animation-timing:     1s linear infinite;
//$progress-bar-transition:           width .6s ease;