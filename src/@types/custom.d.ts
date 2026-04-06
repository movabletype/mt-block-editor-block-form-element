// vite/client provides *.svg and *.scss declarations
// Custom SCSS module declarations (non-.module.scss files with CSS modules)
declare module "*.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
