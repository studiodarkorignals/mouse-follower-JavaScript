var main=document.querySelector("#main");
var crsr=document.querySelector("#cursor");
main.addEventListener('mousemove',function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
})
var h1=document.querySelector('h1');
h1.addEventListener('mouseover',function(){
    crsr.style.width='80px'
    crsr.style.height='80px'

})