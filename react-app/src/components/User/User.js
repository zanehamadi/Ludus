import Lists from './Lists';

function User({user}) {


  return (

    <>
        {user.id ? 

          <div className="profileContainer">
                <h1 id="userProfileHeader">{`${user.username.toUpperCase()}'S PROFILE`}</h1>
                  <h2 id="gameListHeader">GAMES LIST</h2>
                <div>
                  <Lists user={user}/>
                </div>


          </div>
          
        :
          <div>
            User not found.
          </div>



        }
    
    </>

  );
}
export default User;
