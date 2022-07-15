import React from 'react';
import './featuredinfo.scss';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

export default function FeaturedInfo() {
  return (
    <div>
      <div className="featured">
        <div className="featured-item">
          <span className="featured-item__title">Revanue</span>
          <div className="featured-item__money">
            <span className="featured-item__money--text">$2,415</span>
            <span className="featured-item__money--rate">
              -11.4 <ArrowDownward className="featured-item__money--rate-icon negative" />
            </span>
          </div>
          <span className="featured-item__sub">Compared to last month</span>
        </div>
        <div className="featured-item">
          <span className="featured-item__title">Sales</span>
          <div className="featured-item__money">
            <span className="featured-item__money--text">$4,415</span>
            <span className="featured-item__money--rate">
              -1.4 <ArrowDownward className="featured-item__money--rate-icon negative" />
            </span>
          </div>
          <span className="featured-item__sub">Compared to last month</span>
        </div>
        <div className="featured-item">
          <span className="featured-item__title">Cost</span>
          <div className="featured-item__money">
            <span className="featured-item__money--text">$2,225</span>
            <span className="featured-item__money--rate">
              +2.4 <ArrowUpward className="featured-item__money--rate-icon" />
            </span>
          </div>
          <span className="featured-item__sub">Compared to last month</span>
        </div>
      </div>
    </div>
  );
}
