import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	html {
		//background-color: slateblue;
	}
	body {
		font-family: 'Open Sans Condensed';
		padding: 20px 40px;
		margin:0;

		@media screen and (max-width: 800px) {
			padding: 10px;
		}
	}

	a {
		text-decoration: none;
		color: black;
	}

	* {
		box-sizing: border-box;
	}
`
