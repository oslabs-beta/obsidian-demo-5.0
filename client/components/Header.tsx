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
						<h1 className="display-4 fw-bolder">Bloomscapee</h1>
						<p className="lead fw-normal text-white-50 mb-0">Check out our plants and lightning fast graphQL queries</p>
				</div>
		</div>
</header>
	)
}