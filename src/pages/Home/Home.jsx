import React from 'react';
import Chart from '../../component/Chart/Chart';
import FeaturedInfo from '../../component/FeaturedInfo/FeaturedInfo';
import './home.scss';
import { dataUser } from '../../DummyData';
import WidgetLg from '../../component/WidgetLg/WidgetLg';
import WidgetSm from '../../component/WidgetSm/WidgetSm';

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={dataUser} title="User Analytics" grid dataKey="Active User" />
      <div className="home-widget">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
