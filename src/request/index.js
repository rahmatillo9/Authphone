export async function getData(route){
    const req = fetch (process.env.BASE_URL + route);

    if(req.status ===200){
        const {data} = await req.json();
        return data
    }else{
        throw new Error("Somthing went wrong :(")
    }
}