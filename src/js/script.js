const token="​nkXqdVdcTQAcWulaSu8G1CLE​"

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