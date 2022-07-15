import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import './user.scss';
import UserList from '../UserList/UserList';
import { useEffect, useState } from 'react';
import { userRows } from '../../DummyData';

export default function User(props) {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    let targetUser = userRows.find((row) => row.id == userId);
    if (targetUser) {
      setUser(targetUser);
    }
  }, []);
  return user ? (
    <div className="user">
      <div className="user__title">
        <h1 className="user__title-text">Edit User</h1>
        <Link to="/newuser">
          <button className="user__title-btn">Create</button>
        </Link>
      </div>
      <div className="user__container">
        <div className="user__container-info">
          <div className="user__container-info__title">
            <img src={user.avatar} alt="" className="user__container-info__title--img" />
            <div className="user__container-info__title--name">
              <span>{user.username}</span>
              <span>{user.email}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <div className="userShowBottomAcount">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">{user.username}</span>
              </div>
              <div className="userShowInfo">
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">{user.transaction}</span>
              </div>
            </div>
            <div className="userShowBottomContact">
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">+1 123 456 67</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">{user.email}</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">New York | USA</span>
              </div>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input type="text" placeholder="annabeck99" className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input type="text" placeholder="Anna Becker" className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input type="text" placeholder="annabeck99@gmail.com" className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input type="text" placeholder="+1 123 456 67" className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input type="text" placeholder="New York | USA" className="userUpdateInput" />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img className="userUpdateImg" src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: 'none' }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
