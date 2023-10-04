import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import type { Styles } from '@chakra-ui/theme-tools';
import { mode } from '@chakra-ui/theme-tools';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// typescript chakra-ui: https://github.com/chakra-ui/chakra-ui/discussions/5691
const styles: Styles = {
	global: (props) => ({
		body: {
			color: mode('gray.900', 'whiteAlpha.900')(props),
			bg: mode('gray.100', '#101010')(props),
		},
	}),
};

const config = {
	initialColorMode: 'dark',
	useSystemColorMode: true,
};

const colors = {
	gray: {
		light: '#616161',
		dark: '#1e1e1e',
	},
};

const theme = extendTheme({ config, styles, colors });

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<ChakraProvider theme={theme}>
				<ColorModeScript
					initialColorMode={theme.config.initialColorMode}
				/>
				<App />
			</ChakraProvider>
		</BrowserRouter>
	</React.StrictMode>
);
