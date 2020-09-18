


(function(){
    let sidebarOpen = false;
  let button = document.querySelector('#menue')
    button.addEventListener('click',function(e){
        e.stopPropagation();
        e.preventDefault();
        
        document.body.classList.add("has-sidebar")
        sidebarOpen= true;
    })
     document.body.addEventListener('click',function(){
        if(sidebarOpen){
            document.body.classList.remove("has-sidebar")
        }

     })
    

})()


    const ratio = .1    
   const options = {
       root: null,
       rooMargin:'0px',
       threshold: ratio,
   }
   const handleIntersect = function( entries, observer){
       entries.forEach(function(entry){
           if(entry.intersectionRatio > ratio){
               console.log('visible')
               entry.target.classList.add('reveal-visible')
               observer.unobserve(entry.target)

           }
       })
    console.log('handleIntersect')
   }

const observer = new IntersectionObserver(handleIntersect,options)
observer.observe(document.querySelectorAll('.reveal').forEach(function(r){
    observer.observe(r)
}));



           
          
