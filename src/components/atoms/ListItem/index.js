import React from 'react';
import Text from '../Text';
import Label from '../Label';
import variants from './listItem.variant';

const ListItem = ({
  as = 'div',
  title,
  label,
  variant = 'default',
  ...props
}) => {
  const Tag = as;
  const styles = variants[variant || 'base'];

  return (
    <Tag className={styles} {...props}>
      <Text as="a" variant="text-primary" text={title} />
      <Label text={label} />
    </Tag>
  );
};

export default ListItem;