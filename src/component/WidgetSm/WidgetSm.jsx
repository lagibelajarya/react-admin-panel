import React from 'react';
import './widgetsm.scss';
import VisibilityIcon from '@mui/icons-material/Visibility';
import dataSM from './dataSM';

const ItemList = (props) => {
  const Button = ({ type }) => {
    return (
      <button className={'widgetSm-table-tr-status-btn ' + type}>
        <VisibilityIcon />
        <p>{type}</p>
      </button>
    );
  };
  
  return (
    <tr className="widgetSm-table-tr">
      <td className="widgetSm-table-tr-user">
        <img className="widgetSm-table-tr-user-img" src={props.img} alt="" />
      </td>
      <td className="widgetSm-table-tr-info">
        <p className="widgetSm-table-tr-info-name">{props.name}</p>
        <p className="widgetSm-table-tr-info-job">{props.job}</p>
      </td>
      <td className="widgetSm-table-tr-status">
        <Button type="Display" />
      </td>
    </tr>
  );
};

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <h3 className="widgetSm-title">Latest transactions</h3>
      <div className='widgetSm-table-container'>
      <table className="widgetSm-table">
        {dataSM.map((item) => (
          <ItemList {...item} />
        ))}
      </table>
      </div>
    </div>
  );
}
