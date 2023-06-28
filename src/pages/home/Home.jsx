import React from 'react'
import './home.css'
import Featuredinfo from '../../components/featuredinfo/Featuredinfo'
import Chart from '../../components/chart/Chart'
import {userData} from '../../dummyData'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import WidgetSm from '../../components/widgetSm/WidgetSm'

const Home = () => {
  return (
    <div className="home">
      <Featuredinfo></Featuredinfo>
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"></Chart>
      <div className='homeWidgets'>
        <WidgetSm></WidgetSm>
        <WidgetLg></WidgetLg>
      </div>
    </div>
  )
}

export default Home