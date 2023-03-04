const password=document.querySelector('[data-password]').innerText;
const email=document.querySelector('[data-email]').innerText;
const form=document.querySelector('form')
const successdashboard=document.querySelector('#successfull')
const container=document.querySelector('#container')
const rand = () => { return (Math. random()*100000).toString(36)}
window.addEventListener('load',()=>{
    if(document.cookie==''){
        if(!successdashboard.classList.contains('hide')){
            successdashboard.classList.add('hide')
        }
        if(container.classList.contains('hide')){
            container.classList.remove('hide')
        }
        window.localStorage.clear()
    }else{
               
        if(successdashboard.classList.contains('hide')){
            successdashboard.classList.remove('hide')
        }
        if(!container.classList.contains('hide')){
            container.classList.add('hide')
        }
        count()

    }
})
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const EMAIL=document.querySelector('#Email').value
    const Password=document.querySelector('#pwd').value
    if(email!=EMAIL || password!=Password){
        document.querySelector('.failed').style.display='block'
    }else{
        document.querySelector('.failed').style.display='none'
       
        if(successdashboard.classList.contains('hide')){
            successdashboard.classList.remove('hide')
        }
        if(!container.classList.contains('hide')){
            container.classList.add('hide')
        }
        var date=new Date();
        date.setSeconds(date.getSeconds()+30)
        document.cookie=`Token="${rand()}" ; expires=${date.toUTCString()}; path=/`
        window.localStorage.setItem('expired',date.toUTCString())
    }
    count()
})
document.querySelector('.loggout').addEventListener('click',(e)=>{
    document.cookie=`Token="${rand()}" ; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/`
    if(!successdashboard.classList.contains('hide')){
        successdashboard.classList.add('hide')
    }
    if(container.classList.contains('hide')){
        container.classList.remove('hide')
    }
    window.localStorage.clear()
})
function count(){
    if(window.localStorage.getItem('expired')!=null){
        let d=new Date(window.localStorage.getItem('expired'))
        let now =new Date()
        // console.log(d-now)
        if((d-now)>=0){
            
            const dateSecond=(d-now)/1000;
            var days=Math.floor(dateSecond/3600/24);
            var hour=Math.floor(dateSecond/3600) % 24;
            var minutes=Math.floor(dateSecond/60)%60;
            var seconds=Math.floor(dateSecond%60);
            if(seconds<10 || seconds==0){
                seconds="0"+seconds;
            };
            document.querySelector('.time').innerText=seconds
            setTimeout(count,1000)
        }else {
            if(!successdashboard.classList.contains('hide')){
                successdashboard.classList.add('hide')
            }
            if(container.classList.contains('hide')){
                container.classList.remove('hide')
            }
            window.localStorage.clear()
        };
    }
}
