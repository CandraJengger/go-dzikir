const formatName = (name) => {
  const split = name.split(' ');
  if (split.length > 3) {
    return `${split[0]} ${split[1]}`;
  }

  return name;
};

export {formatName};
