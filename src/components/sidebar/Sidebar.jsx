import React from 'react'
import './sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrappper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              <LineStyleIcon className='sidebarIcon'></LineStyleIcon>
              Home
            </li>
            <li className='sidebarListItem'>
              <TimelineIcon className='sidebarIcon'></TimelineIcon>
              Analytics
            </li>
            <li className='sidebarListItem'>
              <TrendingUpIcon className='sidebarIcon'></TrendingUpIcon>
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              <LineStyleIcon className='sidebarIcon'></LineStyleIcon>
              Users
            </li>
            <li className='sidebarListItem'>
              <TimelineIcon className='sidebarIcon'></TimelineIcon>
              Products
            </li>
            <li className='sidebarListItem'>
              <TrendingUpIcon className='sidebarIcon'></TrendingUpIcon>
              Transactions
            </li>
            <li className='sidebarListItem'>
              <TrendingUpIcon className='sidebarIcon'></TrendingUpIcon>
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notification</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              <LineStyleIcon className='sidebarIcon'></LineStyleIcon>
              Mail
            </li>
            <li className='sidebarListItem'>
              <TimelineIcon className='sidebarIcon'></TimelineIcon>
              Feedback
            </li>
            <li className='sidebarListItem'>
              <TrendingUpIcon className='sidebarIcon'></TrendingUpIcon>
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              <LineStyleIcon className='sidebarIcon'></LineStyleIcon>
              Manage
            </li>
            <li className='sidebarListItem'>
              <TimelineIcon className='sidebarIcon'></TimelineIcon>
              Analytics
            </li>
            <li className='sidebarListItem'>
              <TrendingUpIcon className='sidebarIcon'></TrendingUpIcon>
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar