import { Controller, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { useEffect, useState, MouseEvent } from 'react';
import _ from '@lodash';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import ToolbarMenu from './ToolbarMenu';
import ChecklistModel from '../../../../models/ChecklistModel';
import { ScrumboardChecklist } from '../../../../ScrumboardApi';

type FormType = {
	name: ScrumboardChecklist['name'];
};

/**
 * Form Validation Schema
 */
const schema = z.object({
	name: z.string().nonempty('You must enter a title')
});

type CheckListMenuProps = {
	name?: string;
	onAddCheckList: (checklist: ScrumboardChecklist) => void;
};

/**
 * The checklist menu component.
 */
function CheckListMenu(props: CheckListMenuProps) {
	const { onAddCheckList, name = '' } = props;

	const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);

	const { control, formState, handleSubmit, reset } = useForm<FormType>({
		mode: 'onChange',
		defaultValues: {
			name
		},
		resolver: zodResolver(schema)
	});

	const { isValid, dirtyFields, errors } = formState;

	useEffect(() => {
		if (!anchorEl) {
			reset({
				name
			});
		}
	}, [anchorEl, reset, name]);

	function handleMenuOpen(event: MouseEvent<HTMLButtonElement>) {
		setAnchorEl(event.currentTarget);
	}

	function handleMenuClose() {
		setAnchorEl(null);
	}

	function onSubmit(data: FormType) {
		onAddCheckList(ChecklistModel(data));
		handleMenuClose();
	}

	return (
		<div>
			<IconButton
				onClick={handleMenuOpen}
				size="large"
			>
				<FuseSvgIcon>heroicons-outline:check-circle</FuseSvgIcon>
			</IconButton>
			<ToolbarMenu
				state={anchorEl}
				onClose={handleMenuClose}
			>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="p-16 flex flex-col items-end"
				>
					<Controller
						name="name"
						control={control}
						render={({ field }) => (
							<TextField
								{...field}
								label="Checklist title"
								error={!!errors.name}
								helperText={errors?.name?.message}
								fullWidth
								className="mb-12"
								variant="outlined"
								required
								autoFocus
							/>
						)}
					/>
					<Button
						color="secondary"
						type="submit"
						disabled={_.isEmpty(dirtyFields) || !isValid}
						variant="contained"
					>
						Add
					</Button>
				</form>
			</ToolbarMenu>
		</div>
	);
}

export default CheckListMenu;
