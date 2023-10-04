import {
	Avatar,
	Box,
	Flex,
	Link,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Portal,
	Text,
	VStack,
	useToast,
} from '@chakra-ui/react';
import { BsInstagram } from 'react-icons/bs';
import { CgMoreO } from 'react-icons/cg';

type Props = {};

const UserHeader = (props: Props) => {
	const toast = useToast();
	const copyUrl = () => {
		const currentURL = window.location.href;
		navigator.clipboard.writeText(currentURL).then(() => {
			console.log('URL copied to clipboard');
			toast({
				title: 'Success.',
				status: 'success',
				description: 'Profile link copied.',
				duration: 3000,
				isClosable: true,
			});
		});
		console.log(window.location.href);
	};
	return (
		<VStack gap={4} alignItems={'start'}>
			<Flex justifyContent={'space-between'} w={'full'}>
				<Box>
					<Text fontSize={'2xl'} fontWeight={'bold'}>
						Lionel Andres Messi
					</Text>
					<Flex gap={2} alignItems={'center'}>
						<Text fontSize={'sm'}>leomessi</Text>
						<Text
							fontSize={'xs'}
							bg={'gray.dark'}
							color={'gray.light'}
							p={1}
							borderRadius={'full'}
						>
							leomessi.com
						</Text>
					</Flex>
				</Box>
				<Box>
					<Avatar
						name='Lionel Messi'
						src='messi-avatar.png'
						size={'xl'}
					/>
				</Box>
			</Flex>
			<Text>
				Lionel Andrés Messi Cuccittini, conocido como Leo Messi, es un
				futbolista argentino que juega como delantero o centrocampista.
				Desde 2023, integra el plantel del Inter Miami de la MLS
				estadounidense. Es también internacional con la selección de
				Argentina, de la que es capitán.
			</Text>
			<Flex w={'full'} justifyContent={'space-between'}>
				<Flex gap={2} alignItems={'center'}>
					<Text color={'gray.light'}>3.2K followers</Text>
					<Box
						w='1'
						h='1'
						bg={'gray.light'}
						borderRadius={'full'}
					></Box>
					<Link color={'gray.light'}>instagram.com</Link>
				</Flex>
				<Flex gap={2}>
					<Box className='icon-container'>
						<BsInstagram size={24} cursor={'pointer'} />
					</Box>
					<Box className='icon-container'>
						<Menu>
							<MenuButton>
								<CgMoreO size={24} cursor={'pointer'} />
							</MenuButton>
							<Portal>
								<MenuList bg={'gray.dark'}>
									<MenuItem
										bg={'gray.dark'}
										onClick={copyUrl}
									>
										Menu 1
									</MenuItem>
								</MenuList>
							</Portal>
						</Menu>
					</Box>
				</Flex>
			</Flex>
			<Flex w={'full'}>
				<Flex
					flex={1}
					borderBottom={'1.5px solid white'}
					justifyContent={'center'}
					pb='3'
					cursor={'pointer'}
				>
					<Text fontWeight={'bold'}>Threads</Text>
				</Flex>
				<Flex
					flex={1}
					borderBottom={'1.5px solid gray'}
					justifyContent={'center'}
					pb='3'
					color={'gray.light'}
					cursor={'pointer'}
				>
					<Text fontWeight={'bold'}>Replies</Text>
				</Flex>
			</Flex>
		</VStack>
	);
};

export default UserHeader;
