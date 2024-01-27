import { Component } from "react";
import { NotificationWrapper, NotificationTitle, NotificationContent } from "./styled";

export default class Notification extends Component {

  constructor(props) {
    super(props);
    this.timer = null;
  }

  componentDidUpdate(prevProps) {
    if (this.props.active !== prevProps.active) {
      console.log('Hello');
      this.timer = setTimeout(() => {
        this.props.handleNotificationActive();
      }, 5000);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <>
        {this.props.active && (
          <NotificationWrapper>
            <NotificationTitle>Chart status</NotificationTitle>
            <NotificationContent>
              ✅ Your chart has been successfully built!
            </NotificationContent>
          </NotificationWrapper>
        )}
      </>
    )
  }
}
