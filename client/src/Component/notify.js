import {React,Component} from 'react';
import './notify.css';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getProfile} from '../actions/profile'
 
class Notify extends Component {
  constructor(){
    super();
    this.state={
      notificationArr:[]
    }
  }
  componentWillMount(){
    if(localStorage.getItem("token")){
      this.props.getProfile(localStorage.getItem("id"))
      .then(res=>{
        this.setState({notificationArr:res.payload.notification})
      })
      .catch(err=>{
        console.log(err)
      })
    }
  }

  displayNotification(){
    if(this.state.notificationArr.length !==0){
      return  this.state.notificationArr.map(msg=>{
      return (
        <div className="notifications__item">      
      <div className="notifications__item__content">
        <span className="notifications__item__message font-weight-bold ml-3"> {msg}</span>
      </div>
    </div>
      )})}
    else return(
      <div>
        <h3 className="text-center ">No Notificaions to show</h3>
      </div>
    )
  }
  render(){
    return(
      <div className="notifyWrapper">
          <h1 className="pb-5 mt-0 font-weight-bold text-center">Notifications</h1>
          <div className="notifications">
            
            {this.displayNotification()}  
          </div>
        </div>
    )
  }
  }
  const mapactionstoprops = (dispatch) => {
    return bindActionCreators({ getProfile }, dispatch);
  };
  export default connect(null, mapactionstoprops)(Notify);
