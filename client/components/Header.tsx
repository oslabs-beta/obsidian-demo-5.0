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
			header: any;
    }
  }
}

export const Header = (props:any) => {
	return (
		<header className="bg-dark py-5">
		<div className="container px-4 px-lg-5 my-5">
				<div className="text-center text-white">
						<h1 className="display-4 fw-bolder">Shop in style</h1>
						<p className="lead fw-normal text-white-50 mb-0">With this shop homepage template</p>
				</div>
		</div>
</header>
	)
}