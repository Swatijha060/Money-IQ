import React from "react";

const getInitials = (name) => {
  if (!name) return "";
  const words = name.trim().split(" ").filter(Boolean);
  return words.map(word => word[0].toUpperCase()).slice(0, 2).join("");
};

const CharAvatar = ({ fullName, width = 'w-12', height = 'h-12', className = '' }) => {
  return (
    <div className={`${width} ${height} ${className} flex items-center justify-center rounded-full text-gray-900 font-medium bg-gray-100`}>
      {getInitials(fullName)}
    </div>
  );
};

export default CharAvatar;

