import { Flex, Image, useColorMode } from '@chakra-ui/react';

type Props = {};

const Header = (props: Props) => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Flex justifyContent={'center'} mt={6} mb='12'>
			<Image
				height={'32px'}
				cursor={'pointer'}
				alt='logo'
				src={
					colorMode === 'dark' ? '/light-logo.svg' : './dark-logo.svg'
				}
				onClick={toggleColorMode}
			/>
		</Flex>
	);
};

export default Header;
