import React from 'react';
import './widgetlg.scss';
import dataLG from './dataLG';

const Element = (props) => {
  const Button = ({ type }) => {
    return <button className={'widgetLg-table-tr-status-btn ' + type}>{type}</button>;
  };

  const manImg = {
    backgroundImage : `url(${props.img})`
  }

  return (
    <tr className="widgetLg-table-tr">
      <td className="widgetLg-table-tr-user">
        <div className="widgetLg-table-tr-user-img" style={manImg} />
        <span className="widgetLg-table-tr-user-name">{props.name}</span>
      </td>
      <td className="widgetLg-table-tr-date">{props.date}</td>
      <td className="widgetLg-table-tr-amount">{props.date}</td>
      <td className="widgetLg-table-tr-status">
        <Button type={props.status} />
      </td>
    </tr>
  );
};

export default function WidgetLg() {
  return (
    <>
      <div className="widgetLg">
        <h3 className="widgetLg-title">Latest transactions</h3>
        <table className="widgetLg-table">
            <tr className="widgetLg-table-header">
              <th className="widgetLg-table-header-th">Customer</th>
              <th className="widgetLg-table-header-th">Date</th>
              <th className="widgetLg-table-header-th">Amount</th>
              <th className="widgetLg-table-header-th">Status</th>
            </tr>
          <div className="widgetLg-table-container">
            {dataLG.map((item) => (
              <Element {...item} />
            ))}
          </div>
        </table>
      </div>
    </>
  );
}
