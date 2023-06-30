// isLoggedIn

export const isLoggedIn =()=>{
    let data =localStorage.getItem("data")
    if(data==null){
        return false
    } else{
        return true
    }
};
//doLogin => data set in local Storage

export const doLogin=(data,next)=>{
    localStorage.setItem("data",JSON.stringify(data))
    next()
};
//doLogout => remove from local Storage

export const doLogout=(next)=>{
    localStorage.removeItem("data")
    next()
};
//getCurrentUser
export const getCurrentUser=()=>{
    if(isLoggedIn()){
return JSON.parse(localStorage.getItem("data")).user;
    }else{
        return undefined;
    }
};