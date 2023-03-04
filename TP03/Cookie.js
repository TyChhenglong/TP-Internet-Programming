const form=document.querySelector('form')
const container=document.querySelector('#container')
var MainTask;
var date=new Date();
date.setMonth(date.getMonth()+10)
const getCookie=()=>{
    const tmptask=document.cookie.split(';').toString().split('=')
    let tmparr=[];
    for(let i=1;i<tmptask.length;i++){
        if(i<tmptask.length-1){
            let tmpitem=tmptask[i].split(',')
            tmpitem.pop()
            tmparr=[...tmparr,JSON.parse(tmpitem)]
        }else{
            let tmpitem=tmptask[i].split(',')
            tmparr=[...tmparr,JSON.parse(tmpitem)]
        }
        
    }
    return tmparr
}

var Tasks=document.cookie!=''? getCookie(): [
    {
        id:0,
        Title:"Rap",
        Assigner:"Long",
        DeadLine:"02-10-2001",
        expired:date
    },
    {
        id:1,
        Title:"Rock",
        Assigner:"Smey",
        DeadLine:"02-10-2001",
        expired:date
    },
    {
        id:2,
        Title:"Bix Box",
        Assigner:"Friend",
        DeadLine:"02-10-2001",
        expired:date
    },
    {
        id:3,
        Title:"Dancing",
        Assigner:"Family",
        DeadLine:"02-10-2001",
        expired:date
    },]
    
    function renderer(){
        const taskContainer=document.querySelector('.task_container')
        taskContainer.innerHTML=''
        let tmpContainer='';
        Tasks.forEach((item)=>{
            tmpContainer+=`            <div id="${item.id}" class="task">
            <div class="title">${item.Title}</div>
            <div class="Assigner">${item.Assigner}</div>
            <button class="delBtn" data-id="${item.id}">
            Set expired &nbsp; 
            <svg class="delete" data-id="${item.id}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
            </svg>
            </button>
            </div>`
        })
        taskContainer.innerHTML=tmpContainer
    }
    
    form.addEventListener('submit',(e)=>{
        const title=document.querySelector('.TitleVal')
        const Assigner=document.querySelector('.AssingerVal')
        const DeadLine=document.querySelector('.DateVal')
        e.preventDefault()
        const tmpTask={
            id:Tasks[Tasks.length-1]!=null || Tasks[Tasks.length-1]!=undefined ?Tasks[Tasks.length-1].id  + 1 :0 ,
            Title:title.value,
            Assigner:Assigner.value,
            DeadLine:DeadLine.value,
        }
        // console.log((Tasks));
        title.value=''
        Assigner.value=''
        DeadLine.value=''
        Tasks.push(tmpTask)
        // console.log(tmpTask);
        renderer()
        deletion()
        Save();
    })
    // document.onload(   renderer())
    renderer()
    
    window.addEventListener('load',()=>{
        deletion()
        if(Tasks.length>0){
            Save();
        }
    })
    function deletion(){
        const taskContainer=document.querySelector('.task_container')
        // console.log(item.childNodes[0].innerText)
        taskContainer.addEventListener('click',(e)=>{
            const target=e.target;
            if(target.classList.contains('delete') ||  target.classList.contains('delBtn')){

                const id=target.getAttribute('data-id')

                Tasks=Tasks.filter((data)=>{
                    if(data.id==id){
                        data.expired="Thu, 01 Jan 1970 00:00:00 GMT";
                    }
                    // if(data.id==id)
                    return data
                })
                Save();
                Tasks=getCookie();
                renderer()
            }
        })
        
    }
    const clearCookies = () => {
        document.cookie.split(';').forEach(cookie => 
            document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`))
        }; 
    const Save=()=>{
        clearCookies()

        let tmp="";
        let i=0;
        // console.log(Tasks)
        Tasks.forEach((item)=>{
            // console.log(item)
            document.cookie=`Task${i}=${JSON.stringify(item)} ; expires=${item.expired}; path=/`
            i++;
        })
    }
