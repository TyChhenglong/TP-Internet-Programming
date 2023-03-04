const form=document.querySelector('form')
const dashboard=document.querySelector('.dashbord')
var Books=[
    {
        id:0,
        imgurl:"https://i.ibb.co/qyj7dRd/image.png",
        Name:"C Programing",
        Price:25.6,
        Category:"Code"
    },
    {
        id:1,
        imgurl:"https://i.ibb.co/qyj7dRd/image.png",
        Name:"C/C++",
        Price:15,
        Category:"Code"
    },
    {
        id:2,
        imgurl:"https://i.ibb.co/qyj7dRd/image.png",
        Name:"Cambodia Map",
        Price:8.9,
        Category:"Traveling"
    },
]

const Render=()=>{
    dashboard.innerHTML="";
    let tmpHtml="";
    Books.forEach((item)=>{
        tmpHtml+=`<div id=${item.id} class="card">
        <div class="action"> 
            <button data-id="${item.id}" class="delete" style="--svg-btn:rgb(255, 43, 43);">
                Delete&nbsp;
                <svg data-id="${item.id}" class="delete" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                  
            </button>
            <button data-id="${item.id}" class="edit" style="--svg-btn:rgb(24, 151, 249);">
                Edit&nbsp;
                <svg data-id="${item.id}" class="edit" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                  
            </button>
        </div>
        <div class="infor">
            <img src="${item.imgurl}" alt="image" >
            <div class="book_infor">
                <p>
                    Name: ${item.Name}
                </p>
                <p>Price: ${item.Price} riel</p>
                <p>Category: ${item.Category}</p>

            </div>
        </div>
    </div>`
    })
    dashboard.innerHTML=tmpHtml;
}
window.addEventListener('load',()=>{
    Render()
})
dashboard.addEventListener('click',(e)=>{
    const ele=e.target;
    if(ele.classList.contains('delete')){
        // console.log(ele);
        const id=ele.getAttribute('data-id')
        // console.log(id)
        document.getElementById(`${id}`).remove()
        Books=Books.filter((item)=>{
            if(item.id!=id){
                return item
            }
        })
    }
    if(ele.classList.contains('edit')){
        const tmpBook={
            id:parseInt(ele.getAttribute('data-id')),
            imgurl:"https://i.ibb.co/qyj7dRd/image.png",
            Name:"",
            Price:0,
            Category:""

        }
        Books.forEach((item)=>{
            if(item.id==ele.getAttribute('data-id')){
                tmpBook.imgurl=item.imgurl;
                tmpBook.Name=item.Name;
                tmpBook.Price=item.Price;
                tmpBook.Category=item.Category;
            }
        })
        form.setAttribute('data-id',tmpBook.id)
        form.setAttribute('data-status','1')
        document.querySelector('#Name').value=tmpBook.Name
        document.querySelector('#Category').value=tmpBook.Category
        document.querySelector('#Price').value=tmpBook.Price
        document.querySelector('#Add').value="Save";
    }
})
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(form.getAttribute("data-status")=='0' && form.getAttribute("data-id")=='-1' ){
        // alert("It work")
        let tmpBook={
            id:Books.length>0?Books[Books.length-1].id+1:0,
            imgurl:"https://i.ibb.co/qyj7dRd/image.png",
            Name:document.querySelector('#Name').value,
            Price:document.querySelector('#Price').value,
            Category:document.querySelector('#Category').value
        }
        Books=[...Books,tmpBook]
        Render()
    }else{
        const id=form.getAttribute('data-id')
        Books=Books.filter((item)=>{
            if(item.id==id){
                    item.id=Books.length>0?Books[Books.length-1].id+1:0,
                    item.imgurl="https://i.ibb.co/qyj7dRd/image.png",
                    item.Name=document.querySelector('#Name').value,
                    item.Price=document.querySelector('#Price').value,
                    item.Category=document.querySelector('#Category').value
            }
            return item
        })

        Render()
    }
    document.querySelector('#Name').value=""
    document.querySelector('#Category').value=""
    document.querySelector('#Price').value=""
    document.querySelector('#Add').value="Add";
})