let index;
    let ls=[] ; 
     function handle(){
        if(event.key==='Enter'){
            ad();
        }
     }
     function ad(){
       z=document.querySelector('.date');
        x=document.querySelector('.inp');
        ls.push({
            name:x.value,
            duedate:z.value
        });
        console.log(...ls)
        x.value=null

        
       renderls()


        
        
    }
   
     function delll(index){
        ls.splice(index,1);
        renderls();
    }
    
    
   
    function renderls(){
        let y=""
        for ( index = 0; index < ls.length; index++) {
            let ele=ls[index]
            let {name,duedate}=ele
             y += `<div>${name}</div><div>${duedate}</div>
                <button class="del" onclick="
                 delll(${index})">Delete</button>`;
            
        }
        document.querySelector('.ll').innerHTML=y
    }