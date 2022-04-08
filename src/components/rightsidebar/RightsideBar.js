import React from 'react'
import './Rightsidebar.css'
import {BiSearch} from 'react-icons/bi'
import Person from '../../assets/images/person.png'
import Person_a from '../../assets/images/person2.png'
import Person_b from '../../assets/images/person3.jpg'

const RightsideBar = ({profile}) => {
  return (
    <div className='rightbar'>
      <div className='rightWrapper'>
        <div className='rightContact'>
          <h4 className='contacthead'>Contact
          <BiSearch className='searchicon'/></h4>
          <ul className='rightContactList'>
            <li className='rightContactListItems'>
              <div className='rightProfileContainer'>
                <img src={Person} className='rightProfileimg' alt=''/>
                <span className='rightOnline'></span>
              </div>
              <span className='rightUsername'>John Doe</span>
            </li>
          </ul>
          <ul className='rightContactList'>
            <li className='rightContactListItems'>
              <div className='rightProfileContainer'>
                <img src={Person_a} className='rightProfileimg' alt=''/>
                <span className='rightOnline'></span>
              </div>
              <span className='rightUsername'>Marry Leo</span>
            </li>
          </ul>
          <ul className='rightContactList'>
            <li className='rightContactListItems'>
              <div className='rightProfileContainer'>
                <img src={Person_b} className='rightProfileimg' alt=''/>
                <span className='rightOnline'></span>
              </div>
              <span className='rightUsername'>John Cath</span>
            </li>
          </ul>
        </div>
        <div className='suggestion'>
          <h4 className='rightContact'>Suggestions</h4>
          <ul className='rightContactList'>
            <li className='rightContactListItems'>
              <div className='rightProfileContainer'>
                <img src={Person} className='rightProfileimg' alt=''/>
                <span className='rightOnline'></span>
              </div>
              <span className='rightUsername'>Parei Don </span><span className='addfriend' >+ Friend </span>
            </li>
          </ul>
          <ul className='rightContactList'>
            <li className='rightContactListItems'>
              <div className='rightProfileContainer'>
                <img src={Person_a} className='rightProfileimg' alt=''/>
                <span className='rightOnline'></span>
              </div>
              <span className='rightUsername'>John simth </span><span className='addfriend' >+ Friend </span>
            </li>
          </ul>
          <ul className='rightContactList'>
            <li className='rightContactListItems'>
              <div className='rightProfileContainer'>
                <img src={Person_b} className='rightProfileimg' alt=''/>
                <span className='rightOnline'></span>
              </div>
              <span className='rightUsername'>Methew Carry </span><span className='addfriend' >+ Friend </span>
            </li>
          </ul>
          <ul className='rightContactList'>
            <li className='rightContactListItems'>
              <div className='rightProfileContainer'>
                <img src={Person} className='rightProfileimg' alt=''/>
                <span className='rightOnline'></span>
              </div>
              <span className='rightUsername'>Elly Linton </span><span className='addfriend' >+ Friend </span>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  )
}

export default RightsideBar