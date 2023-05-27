import { createContext,useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

const GITHUB_URL=process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN=process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider=({children})=>{
  const initialState={ 
    users:[],
    user:{},
    repos:[],
    loading:false,
  }

  const [state,dispatch] = useReducer(githubReducer,initialState )

 


// Get single user
const getUser = async (login) => {
  setLoading()

const response = await fetch(`${ GITHUB_URL}/users/${login}`,{
    headers:{
        Authorization:`token ${GITHUB_TOKEN}`,
    },
})

if (response.status ===404) {
  window.location = '/notfound'
  
} else{

  const data = await response.json()
  
  dispatch({
    type:'GET_USER',
    payload:data,
  })
}


 
}

// Get User repos 
const getUserRepos =async(login)=>{
  setLoading()

  // to get all the repos remove line number 75-77 and in line 82 remove (?${params})
  const params =new URLSearchParams({
    sort: 'created',
    per_page:10,
  })
 


const response = await fetch(`${ GITHUB_URL}/users/${login}/repos?${params}`,{
    headers:{
        Authorization:`token ${GITHUB_TOKEN}`,
    },
})
const  data = await response.json()

dispatch({
  type:'GET_REPOS',
  payload:data,
})
 
}

//  clear users from state
     const clearUsers = () => dispatch({type:'CLEAR_USERS'})


    // set loading 
    const setLoading = () => dispatch ({type:'SET_LOADING'

    })


  return ( 
  <GithubContext.Provider value={{
    // users: state.users,
    // loading: state.loading,
    // user: state.user, 
    // repos: state.repos,
    ...state,
    dispatch, 
    clearUsers,
    getUser,
    getUserRepos,

  }}>
    {children}
  </GithubContext.Provider>
)
}
export default GithubContext
