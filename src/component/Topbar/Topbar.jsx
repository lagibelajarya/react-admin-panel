import './topbar.scss';
import { NotificationsNone, Language, Settings } from '@mui/icons-material';
import pp from '../../images/manProfile.jpg';

export default function Topbar() {
  const profileImg = {
    backgroundImage: `url( ${pp} )`,
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">ReactAdmin</span>
        </div>
        <div className="topRight">
          <div className="topRight-icon">
            <NotificationsNone />
            <span className="topRight-icon__badge"> 2</span>
          </div>
          <div className="topRight-icon">
            <Language />
          </div>
          <div className="topRight-icon">
            <Settings />
          </div>
          <div className="topRight-profile" style={profileImg}></div>
        </div>
      </div>
    </div>
  );
}
