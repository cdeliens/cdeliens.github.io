(function(){
  
    var list = document.querySelector('#list')
  
    function  handleClick(e){
        var t = e.target;
        if(t.classList.contains('checked')){
          t.classList.remove('checked');
        } else {
          t.classList.add('checked');
        }
    }
    
    list.addEventListener('click',function(e){
        handleClick(e)
    },false)
    
  })();