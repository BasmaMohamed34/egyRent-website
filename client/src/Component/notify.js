import React from 'react';
import './notify.css'
 
class Notify extends React.Component {
  render(){
    return(

      <div class="wrapper">
          <h1 className="p-5 font-weight-bold text-center">Notifications</h1>
  <div class="notifications">

    <div class="notifications__item">
      <div class="notifications__item__avatar">
        <img alt="" src="https://github.com/Flat-Pixels/Notifications-card-animation/raw/master/img/avatar_1.jpg" />
      </div>

      <div class="notifications__item__content">
        <span class="notifications__item__title">Verdieu Steeve</span>
        <span class="notifications__item__message">Just started following you</span>
      </div>

      <div>
        <div class="notifications__item__option archive js-option">
          <i class="fas fa-folder"></i>
        </div>
        <div class="notifications__item__option delete js-option">
          <i class="fas fa-trash"></i>
        </div>
      </div>
    </div>

    <div class="notifications__item">
      <div class="notifications__item__avatar">
        <img alt="" src="https://github.com/Flat-Pixels/Notifications-card-animation/raw/master/img/avatar_2.jpg" />
      </div>

      <div class="notifications__item__content">
        <span class="notifications__item__title">Mikes Miles</span>
        <span class="notifications__item__message">Just liked your video story</span>
      </div>

      <div>
        <div class="notifications__item__option archive js-option">
          <i class="fas fa-folder"></i>
        </div>
        <div class="notifications__item__option delete js-option">
          <i class="fas fa-trash"></i>
        </div>
      </div>
    </div>


    <div class="notifications__item">
      <div class="notifications__item__avatar">
        <img alt="" src="https://github.com/Flat-Pixels/Notifications-card-animation/raw/master/img/avatar_3.jpg" />
      </div>

      <div class="notifications__item__content">
        <span class="notifications__item__title">Helen Saga</span>
        <span class="notifications__item__message">Added you to a todos list for tomorrow</span>
      </div>

      <div>
        <div class="notifications__item__option archive js-option">
          <i class="fas fa-folder"></i>
        </div>
        <div class="notifications__item__option delete js-option">
          <i class="fas fa-trash"></i>
        </div>
      </div>
    </div>

    <div class="notifications__item">
      <div class="notifications__item__avatar">
        <img alt="" src="https://github.com/Flat-Pixels/Notifications-card-animation/raw/master/img/avatar_4.jpg" />
      </div>

      <div class="notifications__item__content">
        <span class="notifications__item__title">Sarah Sharp</span>
        <span class="notifications__item__message">Just commented on your last post</span>
      </div>

      <div>
        <div class="notifications__item__option archive js-option">
          <i class="fas fa-folder"></i>
        </div>
        <div class="notifications__item__option delete js-option">
          <i class="fas fa-trash"></i>
        </div>
      </div>
    </div>

    <div class="notifications__item">
      <div class="notifications__item__avatar">
        <img alt="" src="https://github.com/Flat-Pixels/Notifications-card-animation/raw/master/img/avatar_5.jpg" />
      </div>

      <div class="notifications__item__content">
        <span class="notifications__item__title">John Lee</span>
        <span class="notifications__item__message">Just started following you</span>
      </div>

      <div>
        <div class="notifications__item__option archive js-option">
          <i class="fas fa-folder"></i>
        </div>
        <div class="notifications__item__option delete js-option">
          <i class="fas fa-trash"></i>
        </div>
      </div>
    </div>
  </div>
</div>
    )
  }


  }
 
export default Notify;