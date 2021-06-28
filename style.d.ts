declare function JSXStyle(props: any): void;
declare function flush(): [string, string][]
declare module "solid-js" {
  namespace JSX {
    interface StyleHTMLAttributes<T> {
      jsx?: boolean;
      global?: boolean;
      dynamic?: boolean;
    }
  }
}

export default JSXStyle;
export { flush };
