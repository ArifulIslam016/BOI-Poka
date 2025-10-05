const getFromLs=()=>{
    const storedBook=localStorage.getItem("ReadedBOOk")
    if(storedBook){
        return JSON.parse(storedBook)
    }
    else{
        return []
    }
}

const setItemToLs=(id)=>{
    const alreadyStored=getFromLs()
    if(alreadyStored.includes(id)){
        alert("Item Already added")
    }else{
        alreadyStored.push(id)
        const toBeSet = JSON.stringify(alreadyStored);
        localStorage.setItem("ReadedBOOk", toBeSet);
    }
}
export { setItemToLs, getFromLs };