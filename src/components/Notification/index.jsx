import { useState, useEffect } from "react";
import { NotificationWrapper, NotificationTitle, NotificationContent, NotificationFooter, ActionButton } from "./styled";

export default function Notification({ active }) {
  const [active, setActive] = useState(active);

  useEffect(() => {
    let timeoutId;
    if (active) {
      timeoutId = setTimeout(() => {
        setActive(false);
      }, 5000);
    }
    return () => clearTimeout(timeoutId);
  }, [active]);

  return (
    <>
      {active && (
        <NotificationWrapper>
          <NotificationTitle>Notification title</NotificationTitle>
          <NotificationContent>
            This is the content of the notification
          </NotificationContent>
        </NotificationWrapper>
      )}
    </>
  );
}