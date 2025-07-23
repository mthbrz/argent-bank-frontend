import { useDispatch, useSelector } from 'react-redux';
import '../main.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateUserName } from '../actions/user.action';

 function Profile() {

const dispatch = useDispatch();
const user = useSelector(state => state.user.user);

const { isLoggedIn, isUserChecked } = useSelector((state) => state.user);
const navigate = useNavigate();

useEffect(() => {
  if (!isUserChecked) return;
  if (!isLoggedIn) navigate("/");
}, [isLoggedIn, isUserChecked, navigate]);

const [isEditing, setIsEditing] = useState(false);

const [userName, setUserName] = useState(user?.userName || '');


if (!isUserChecked) return <div>Chargement...</div>;

return (
<>
<main className="main bg-dark">
      <div className="header">
        {!isEditing ? (
      <div className="header">
        <h1>Welcome back<br />{user?.firstName} {user?.lastName}!</h1>
  <button className="edit-button" onClick={() => setIsEditing(true)}>
    Edit Name
  </button>
  </div>
 ) : ( 
  <>
  <h2 className="edit-user">Edit user info</h2>
  <form className="edit-form"
  onSubmit={(e) => {
    e.preventDefault();
    dispatch(updateUserName(userName));
    setIsEditing(false);
  }}>
      <div className="edit-wrapper">
        <label htmlFor="userName">User Name :</label>
        <input
          type="text"
          id="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="edit-wrapper">
        <label htmlFor="firstName">First Name :</label>
        <input type="text" id="firstName" defaultValue={user?.firstName} disabled />
      </div>
      <div className="edit-wrapper">
        <label htmlFor="lastName">Last Name :</label>
        <input type="text" id="lastName" defaultValue={user?.lastName} disabled />
      </div>
      <div className="button-wrapper">
        <button type="submit" className="form-button">Save</button>
        <button
          type="button"
          className="form-button"
          onClick={() => setIsEditing(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  </>
)} 

      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
         </>
     )
 }

 export default Profile;
