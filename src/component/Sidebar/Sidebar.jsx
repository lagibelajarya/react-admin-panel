import { AttachMoney, BarChart, BubbleChart, ChatBubble, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PersonOutline, Report, Storefront, Timeline, TrendingDown, TrendingUp, WorkOutline } from '@mui/icons-material';
import './sidebar.scss';
import { Link, NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-menu__title">Dashboard</h3>
          <nav className="sidebar-menu__list">
            <NavLink exact activeclassname="active" to="/" color="#555" className="sidebar-menu__list--item">
              <LineStyle />
              Home
            </NavLink>
            <a exact  to="" color="#555" className="sidebar-menu__list--item">
              <Timeline />
              Analytics
            </a>
            <a exact  to="" color="#555" className="sidebar-menu__list--item">
              <TrendingUp />
              Sales
            </a>
          </nav>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-menu__title">Quick Menu</h3>
          <nav className="sidebar-menu__list">
            <NavLink exact activeclassname="active" to="/userlist" color="#555" className="sidebar-menu__list--item">
              <PersonOutline />
              Users
            </NavLink>
            <NavLink  to="/productlist" color="#555" className="sidebar-menu__list--item">
              <Storefront />
              Products
            </NavLink>
            <a   to="/" color="#555" className="sidebar-menu__list--item">
              <AttachMoney />
              Transactions
            </a>
            <a   to="/" color="#555" className="sidebar-menu__list--item">
              <BarChart />
              Report
            </a>
          </nav>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-menu__title">Notifications</h3>
          <nav className="sidebar-menu__list">
            <NavLink exact  to="/notifications" color="#555" className="sidebar-menu__list--item">
              <MailOutline />
              Mail
            </NavLink>
            <a   to="/" color="#555" className="sidebar-menu__list--item">
              <DynamicFeed />
              Feedback
            </a>
            <a   to="/" color="#555" className="sidebar-menu__list--item">
              <ChatBubbleOutline />
              Message
            </a>
          </nav>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-menu__title">Staff</h3>
          <nav className="sidebar-menu__list">
            <NavLink exact activeclassname="active" to="/staff" color="#555" className="sidebar-menu__list--item">
              <WorkOutline />
              Manage
            </NavLink>
            <a   to="/" color="#555" className="sidebar-menu__list--item">
              <Timeline />
              Analytics
            </a>
            <a   to="/" color="#555" className="sidebar-menu__list--item">
              <Report />
              Sales
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
