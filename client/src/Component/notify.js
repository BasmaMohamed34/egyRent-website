import 'react-notifications/lib/notifications.css';
import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
 
class Notify extends React.Component {
  createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success('Success message', 'mohamed liked by post and250 other');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      }
    };
  };
 
  render() {
    return (
      <div className="m-5">
        <button className='btn btn-info btn-lg btn-block  p-3'
          onClick={this.createNotification('info')}>Info
        </button>
        <hr/>
        <button className='btn btn-success btn-lg btn-block  p-3'
          onClick={this.createNotification('success')}>Success
        </button>
        <hr/>
        <button className='btn btn-warning btn-lg btn-block  p-3'
          onClick={this.createNotification('warning')}>Warning
        </button>
        <hr/>
        <button className='btn btn-danger btn-lg btn-block p-3'
          onClick={this.createNotification('error')}>Error
        </button>
 
        <NotificationContainer/>
      </div>
    );
  }
}
 
export default Notify;