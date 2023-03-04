const form=document.querySelector('form')
const container=document.querySelector('#container')
var MainTask;
var Tasks=window.localStorage.getItem('Tasks')!=null? JSON.parse(window.localStorage.getItem('Tasks')) : [
    {
        id:0,
        Title:"Rap",
        Assigner:"Long",
        DeadLine:"02-10-2001",
    },
    {
        id:1,
        Title:"Rock",
        Assigner:"Smey",
        DeadLine:"02-10-2000",
    },
    {
        id:2,
        Title:"Bix Box",
        Assigner:"Long",
        DeadLine:"02-10-2002",
    },
    {
        id:3,
        Title:"Kiss",
        Assigner:"Me",
        DeadLine:"02-10-2003",
    },]
    
    function renderer(){
        const taskContainer=document.querySelector('.task_container')
        taskContainer.innerHTML=''
        let tmpContainer='';
        Tasks.forEach((item)=>{
            tmpContainer+=`            <div id="${item.id}" class="task">
            <div class="title">${item.Title}</div>
            <div class="Assigner">${item.Assigner}</div>
            <div class="dealine">${item.DeadLine}</div>
            <div class="delBtn" data-id="${item.id}">
            <svg class="delete" data-id="${item.id}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
            </svg>
            </div>
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
                document.getElementById(target.getAttribute('data-id')).remove()
                Tasks=Tasks.filter((data)=>{
                    if(data.id!=target.getAttribute('data-id')){
                        return Tasks;
                    }
                })
                
                Save();
            }
        })
        
    }
    const Save=()=>{
        window.localStorage.setItem('Tasks',JSON.stringify(Tasks))
    }