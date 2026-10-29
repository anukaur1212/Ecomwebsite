import { Bell, CalendarDays, UserRound } from "lucide-react";
import "/src/App.css";

const Header = () => {

  return (
    <div className="header">
      <div className="header-left">

        {/* Welcome Section */}
        <div className="welcome">

          <h1>
            Welcome to Dashboard
            <span>👋</span>
          </h1>
          <p>
            Manage your RGP, NRGP requests and approvals.
          </p>
        </div>

        {/* Right Section */}
        <div className="header-right">

          {/* Date */}
          <div className="date">

            <div className="calendar">
              <CalendarDays size={19} />
            </div>

            <span className="date-style">
              {new Date().toLocaleDateString("en-IN", {
                dateStyle: "full"
              })}
            </span>
          </div>

          {/* Notifications */}
          <button
            aria-label="Notifications"
            className="notification-btn">

            <Bell size={23}
              className="bell-icon" />
            <span />
          </button>

          {/* Profile */}
          <div className="profile">

            <div className="profile-icon">

              <div className="user-icon">
                <UserRound size={22} />
              </div>
            </div>

            <div>
              <p className="user-heading">
                Admin
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}


export default Header
