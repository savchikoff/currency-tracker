import { useEffect } from "react";
import { NotificationWrapper, NotificationTitle, NotificationContent } from "./styled";

export default function Notification({ active, handleNotificationActive }) {

  useEffect(() => {
    let timeoutId;
    if (active) {
      timeoutId = setTimeout(() => {
        handleNotificationActive();
      }, 2000);
    }
    return () => clearTimeout(timeoutId);
  }, [active]);

  return (
    <>
      {active && (
        <NotificationWrapper>
          <NotificationTitle>Chart status</NotificationTitle>
          <NotificationContent>
            Your chart has been successfully built!
          </NotificationContent>
        </NotificationWrapper>
      )}
    </>
  );
}