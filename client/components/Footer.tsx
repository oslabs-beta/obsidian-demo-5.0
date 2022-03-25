import { React } from "../../deps.ts";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      button: any;
      div: any;
      h3: any;
      h1: any;
			h5: any;
      p: any;
			nav: any;
			ul: any;
			a: any;
			li: any;
			span: any;
			img: any;
      input: any;
			footer: any;
    }
  }
}

export const Footer = (props:any) => {
	return (
		<footer className="py-5 bg-dark">
		<div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
</footer>
	)
}