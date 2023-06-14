const characterLimit = 40;

export const getContentLabel = (body) => {
  let foundHeading = '';

  JSON.stringify(body, (_, nestedValue) => {
    if (!foundHeading && nestedValue && ['h1', 'h2', 'h3'].includes(nestedValue.type)) {
      foundHeading = nestedValue.children?.[0].text;
    }

    return nestedValue;
  });

  JSON.stringify(body, (_, nestedValue) => {
    if (!foundHeading && nestedValue && ['p'].includes(nestedValue.type)) {
      foundHeading = nestedValue.children?.[0].text;
    }

    return nestedValue;
  });

  return foundHeading.length > characterLimit ? `${foundHeading?.slice(0, characterLimit)}…` : foundHeading;
}

export const getRichTextItemLabel = (body) => {
  let label = '';

  JSON.stringify(body, (_, nestedValue) => {
    nestedValue?.children?.forEach(child => label += child.text ?? '');

    return nestedValue;
  });

  return label.length > characterLimit ? `${label?.slice(0, characterLimit)}…` : label;
}
