import React, { useContext } from 'react';
import { SIDE_MENU_DATA } from '../../utils/data';
import { UserContext } from '../../context/UserContext';
import { useNavigate, useLocation } from 'react-router-dom';
import CharAvatar from '../cards/CharAvatar';

const SideMenu = () => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation(); 

  const handleClick = (route) => {
    if (route === "logout") {
      handleLogout();
    } else {
      navigate(route);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/login");
  };

  return (
    <div className="w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-200/50 p-5 sticky top-[61px] z-20">
      <div className="flex flex-col items-center justify-center gap-3 mt-3 mb-7">
      {user?.profileImageUrl ? (
  <img
    src={user.profileImageUrl}
    alt="Profile"
    className="w-20 h-20 bg-slate rounded-full object-cover mx-auto"
  />
) : (
  <CharAvatar 
    fullName={user?.fullName}
    width="w-20"
    height="h-20"
    style="text-xl"
  />
)}

        <h5 className=" text-gray-950 mt-2 font-semibold">{user?.fullName || ""}</h5>
      </div>

      {SIDE_MENU_DATA.map((item, index) => {
        const isActive = location.pathname === item.path;

        return (
          <button
            key={`menu_${index}`}
            onClick={() => handleClick(item.path)}
            className={`w-full flex items-center gap-4 text-sm py-3 px-4 mb-2 rounded-lg transition-all
              ${isActive ? 'bg-blue-500 text-white' : 'text-gray-800 hover:bg-blue-100'}`}
          >
            <item.icon className="text-xl" />
            {item.label}
          </button>
        );
      })}
    </div>
  );
};

export default SideMenu;



