// constants
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';



const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const removeUser = () => ({
  type: REMOVE_USER,
})




export const addNewPlayed = (data) => async (dispatch) => {

  const res = await fetch('/api/users/played', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
  });

  if (res.ok) {
      const updatedUser = await res.json();
      dispatch(setUser(updatedUser))
  }

}

export const addReview = (data) =>  async (dispatch) => {

  const res = await fetch('/api/reviews/', {
    method: 'POST',
    headers: {'Content-Type': 'application/json' },
    body:JSON.stringify(data)
  });
  if (res.ok) {
    const updatedUser = await res.json();
    dispatch(setUser(updatedUser))
  }

}

export const updateReview = (data) => async (dispatch) => {
  const res = await fetch(`/api/reviews/${data.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  if (res.ok) {
    const updatedUser = await res.json();
    dispatch(setUser(updatedUser))
  }

}

export const deleteReview = (id) => async (dispatch) => {
  const res = await fetch(`/api/reviews/${id}`, {
    method: 'DELETE'
  })

  if (res.ok) {
    const updatedUser = await res.json();
    dispatch(setUser(updatedUser))
  }
  
}

export const removePlayed = (data) => async(dispatch) => {
  const res = await fetch(`/api/users/played/${data.user_id}/${data.game_id}`, {
    method: 'DELETE'
  })
  if(res.ok){
    const updatedUser = await res.json()
    dispatch(setUser(updatedUser))
  }
}



export const addNewPlaying = (data) => async (dispatch) => {

  const res = await fetch('/api/users/playing', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
  });

  if (res.ok) {
      const updatedUser = await res.json();
      dispatch(setUser(updatedUser))
  }

}



export const removePlaying = (data) => async(dispatch) => {
  const res = await fetch(`/api/users/playing/${data.user_id}/${data.game_id}`, {
    method: 'DELETE'
  })
  if(res.ok){
    const updatedUser = await res.json()
    dispatch(setUser(updatedUser))
  }
}



export const addWantToPlay = (data) => async (dispatch) => {

  const res = await fetch('/api/users/want_to_play', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
  });

  if (res.ok) {
      const updatedUser = await res.json();
      dispatch(setUser(updatedUser))
  }

}



export const removeWantToPlay = (data) => async(dispatch) => {
  const res = await fetch(`/api/users/want_to_play/${data.user_id}/${data.game_id}`, {
    method: 'DELETE'
  })
  if(res.ok){
    const updatedUser = await res.json()
    dispatch(setUser(updatedUser))
  }
}

export const authenticate = () => async (dispatch) => {
  const response = await fetch('/api/auth/', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }
  
    dispatch(setUser(data));
  }
}




export const login = (email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  
  
  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }

}

export const logout = () => async (dispatch) => {
  const response = await fetch('/api/auth/logout', {
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (response.ok) {
    dispatch(removeUser());
  }
};


export const signUp = (username, email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  
  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}





const initialState = { user: null };



export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
              return { user: action.payload }
          case REMOVE_USER:
              return { user: null }
          default:
              return state;
  }
}
