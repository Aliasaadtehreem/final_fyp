import React, { createContext, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NotificationsContext = createContext();

export const NotificationsProvider = ({ children }) => {
  const showToast = (title, opts = {}) => {
    toast(`${title}`, { position: "top-right", autoClose: 4000, ...opts });
  };

  const showBrowserNotification = (title, options = {}) => {
    if (!("Notification" in window)) return false;
    if (Notification.permission === "granted") {
      new Notification(title, options);
      return true;
    }
    // ask permission then show if granted
    if (Notification.permission !== "denied") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") new Notification(title, options);
      });
    }
    return false;
  };

  const notify = ({ title, body }) => {
    // preference: show browser notification if permitted; always show in-app toast
    showToast(title);
    showBrowserNotification(title, { body });
  };

  return (
    <NotificationsContext.Provider value={{ notify }}>
      {children}
    </NotificationsContext.Provider>
  );
};

export const useNotifications = () => useContext(NotificationsContext);
