export function src(image, size) {
  return image.replace('[size]', `${size}`);
}

export function srcset(image, sizes = []) {
  return sizes.map((size) => `${src(image, size)} ${size}w`).join(', ');
}

export function fmtprice(price) {
  return `${price},00 Ø`;
}
