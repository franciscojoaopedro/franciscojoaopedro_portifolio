const token="​nkXqdVdcTQAcWulaSu8G1CLE​"
const btnBemVindo=document.querySelector('#bem-vindo');
const apresentation=document.querySelector('#apresentation')
const option={
    headers:{
        Authorization: `Bearer <${token}>`
    },
    method:"get"
}

async function BuscarDate(){
    await fetch("https://api.vercel.com/v9/projects",option)
    .then(response=>  response.json())
    .then(data=>{
        console.log(data)
    })
}

btnBemVindo.addEventListener('click',(event)=>{
    event.preventDefault()
    apresentation.style.display="block"
})