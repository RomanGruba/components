import React from 'react';
import PropTypes from 'prop-types';
import PricingItem from './PricingItem';
import styles from './Pricing-plan.module.css';

const PricingPlan = ({ items = [] }) => (
  <ul className={styles.plan}>
    {items.map(item => (
      <li className={styles.item} key={item.label}>
        <PricingItem {...item} />
      </li>
    ))}
  </ul>
);

PricingPlan.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PricingPlan;
