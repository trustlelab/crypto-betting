import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Box from '@mui/material/Box';
import { useAppDispatch } from 'app/store/hooks';
import ItemIcon from './ItemIcon';
import { FileManagerItem } from './FileManagerApi';
import { setSelectedItemId } from './fileManagerAppSlice';

type FolderItemProps = {
	item: FileManagerItem;
};

/**
 * The folder item.
 */
function FolderItem(props: FolderItemProps) {
	const { item } = props;
	const dispatch = useAppDispatch();

	if (!item) {
		return null;
	}

	return (
		<Box
			sx={{ backgroundColor: 'background.paper' }}
			className="relative w-full sm:w-160 h-160 m-8 p-16 shadow rounded-16"
		>
			<IconButton
				className="absolute z-20 top-0 right-0 m-6 w-32 h-32 min-h-32"
				onClick={() => dispatch(setSelectedItemId(item.id))}
			>
				<FuseSvgIcon size={20}>heroicons-solid:information-circle</FuseSvgIcon>
			</IconButton>
			<NavLinkAdapter
				className="flex flex-col h-full w-full"
				to={`/apps/file-manager/${item.id}`}
				role="button"
			>
				<div className="flex flex-auto w-full items-center justify-center">
					<ItemIcon type={item.type} />
				</div>
				<div className="flex shrink flex-col justify-center text-center">
					<Typography className="truncate text-12 font-medium">{item.name}</Typography>
					{item.contents && (
						<Typography
							className="truncate text-12 font-medium"
							color="text.secondary"
						>
							{item.contents}
						</Typography>
					)}
				</div>
			</NavLinkAdapter>
		</Box>
	);
}

export default FolderItem;
