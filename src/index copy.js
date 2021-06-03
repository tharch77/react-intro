import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma/css/bulma.css'
import 'bulmaswatch/darkly/bulmaswatch.min.css'
// darkly cerulean
import * as $$ from './js/shortJS.js'

import App from './App'

window.$$ = $$

ReactDOM.render(
	<React.StrictMode>
		<section class="section">
			<div class="container">
				<App />
			</div>
		</section>
	</React.StrictMode>,
	$$.Id('root')
)
