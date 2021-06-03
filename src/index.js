import React from "react";
import ReactDOM from "react-dom";

import 'bulma/css/bulma.css'
// import 'bulmaswatch/darkly/bulmaswatch.min.css'
// darkly cerulean
import * as $$ from './js/shortJS.js'

import App from './App'

window.$$ = $$

ReactDOM.render(
	<React.StrictMode>
		<section className="section">
			<div className="container">
				<h1 className="has-text-centered is-size-5">
					参考url：https://www.youtube.com/watch?v=9U3IhLAnSxM&t=6s
				</h1>
				<h2 className="has-text-centered is-size-5">
					by&nbsp;<strong>Colt Steele</strong>
				</h2>
				<App />
			</div>
		</section>
	</React.StrictMode>,
	$$.Id('root')
)
