import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import { selectFuseCurrentLayoutConfig } from '@fuse/core/FuseSettings/fuseSettingsSlice';
import { Layout1ConfigDefaultsType } from 'app/theme-layouts/layout1/Layout1Config';
import { navbarToggle, navbarToggleMobile } from 'app/theme-layouts/shared-components/navbar/navbarSlice';
import NavbarToggleFab from 'app/theme-layouts/shared-components/navbar/NavbarToggleFab';

type NavbarToggleFabLayout1Props = {
	className?: string;
};

/**
 * The navbar toggle fab layout 1.
 */
function NavbarToggleFabLayout1(props: NavbarToggleFabLayout1Props) {
	const { className } = props;

	const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

	const config = useAppSelector(selectFuseCurrentLayoutConfig) as Layout1ConfigDefaultsType;

	const dispatch = useAppDispatch();

	return (
		<NavbarToggleFab
			className={className}
			onClick={() => {
				dispatch(isMobile ? navbarToggleMobile() : navbarToggle());
			}}
			position={config.navbar.position}
		/>
	);
}

export default NavbarToggleFabLayout1;
