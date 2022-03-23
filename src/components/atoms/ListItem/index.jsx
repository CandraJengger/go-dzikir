import React from 'react';
import PropsTypes from 'prop-types';
import Text from '../Text';
import Label from '../Label';
import variants from './listItem.variant';

function ListItem({ as = 'div', title, label, variant = 'default', ...props }) {
  const Tag = as;
  const styles = variants[variant || 'base'];

  return (
    <Tag className={styles} {...props}>
      <Text as="a" variant="text-primary" text={title} />
      <Label text={label} />
    </Tag>
  );
}

ListItem.defaultProps = {
  as: 'div',
  variant: 'default',
};

ListItem.propTypes = {
  as: PropsTypes.string,
  title: PropsTypes.string,
  label: PropsTypes.string.isRequired,
  variant: PropsTypes.string,
};

export default ListItem;
