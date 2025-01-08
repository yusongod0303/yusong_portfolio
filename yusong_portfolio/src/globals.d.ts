// eslint-disable-next-line spaced-comment

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.less' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.jpg' {
  const value: any;
  export default value;
}

declare module '*.png' {
  const value: any;
  export default value;
}
