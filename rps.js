let choices=["rock","paper","scissors"]
        let cs=0
        let us=0
        let x;
        let result='';
        function compchoice(){
             x=Math.floor(Math.random()*3);
            
            console.log('compchoice is ',x)
            return x;
        }
        function reset(){
          
            us=0
            cs=0
                        document.querySelector('.status').innerText=result
            document.querySelector('.scoreboard').innerText="user"+us+"  "+"comp"+cs
            document.querySelector('.choicees').innerHTML=""
        }
        function game(user){
            let cc=compchoice()
            if(cc===user){
                result="Draw"
            }else if(user===0&&cc===2||user===1&&cc===0||user===2&&cc===1){
                result="Win"
                us++;
            }
            else{
                result="Loss"
                cs++
            }
            console.log(result)
            document.querySelector('.status').innerText=result
            document.querySelector('.scoreboard').innerText="user : "+us+"  "+"comp : "+cs
            document.querySelector('.choicees').innerHTML = `
                You: <img src="${choices[user]}-emoji.png" alt="${choices[user]}">
                Comp: <img src="${choices[cc]}-emoji.png" alt="${choices[cc]}">
            `;
        }