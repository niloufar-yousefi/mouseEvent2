let delta = 0
let skew = 0 
let wrapper = document.getElementById('wrapper')
let _top = document.getElementsByClassName('top')[0]
let handle = document.getElementsByClassName('handle')[0]

if(wrapper.className.indexOf('skewed') != -1){
    skew = 1000;   
  }
wrapper.addEventListener('mousemove',(e)=>{
    delta = (e.clientX - window.innerWidth / 2) * 0.5;  
    handle.style.left = e.clientX + delta + 'px';
    _top.style.width= e.clientX + skew + delta + 'px';    
})