import { Avatar, Box, Flex, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BsThreeDots } from 'react-icons/bs';

type Props = {};

const UserPost = (props: Props) => {
	return (
		<Link to={'/markzuckerberg/post/1'}>
			<Flex flexDirection={'column'} alignItems={'center'}>
				<Avatar size='md' name='Lionel Messi' src='/messi-avatar.png' />
				<Box w='1px' h={'full'} bg='gray.light' my={2}></Box>
				<Box position={'relative'} w={'full'}>
					{' '}
					<Avatar
						size='xs'
						name='Dan Abrahmov'
						src='https://bit.ly/dan-abramov'
						position={'absolute'}
						top={'0px'}
						left='15px'
						padding={'2px'}
					/>
					<Avatar
						size='xs'
						name='Dan Abrahmov'
						src='https://bit.ly/dan-abramov'
						position={'absolute'}
						top={'0px'}
						right='-5px'
						padding={'2px'}
					/>
					<Avatar
						size='xs'
						name='Dan Abrahmov'
						src='https://bit.ly/dan-abramov'
						position={'absolute'}
						top={'0px'}
						left='4px'
						padding={'2px'}
					/>
				</Box>
			</Flex>
			<Flex flex={1} flexDirection={'column'} gap={2}>
				<Flex justifyContent={'space-between'} w={'full'}>
					<Flex w={'full'} alignItems={'center'}>
						<Text fontSize={'sm'} fontWeight={'bold'}>
							leomessi
						</Text>
						<Image src='/verified.png' w={4} h={4} ml={1} />
					</Flex>
					<Flex gap={4} alignItems={'center'}>
						<Text fontStyle={'sm'} color={'gray.light'}>
							1d
						</Text>
						<BsThreeDots />
					</Flex>
				</Flex>
			</Flex>
		</Link>
	);
};

export default UserPost;
