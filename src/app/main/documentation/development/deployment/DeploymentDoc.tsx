import Typography from '@mui/material/Typography';

/**
 * Deployment Doc
 * This document provides information on how to deploy the application.
 */
function DeploymentDoc() {
	return (
		<>
			<Typography
				variant="h4"
				className="mb-40 font-700"
			>
				Deployment
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				For assistance, please refer to the
				<a
					href="https://vitejs.dev/guide/static-deploy"
					target="_blank"
					rel="noreferrer noopener"
					className="ml-4"
				>
					deployment documentation
				</a>{' '}
				provided by ViteJS:
			</Typography>
		</>
	);
}

export default DeploymentDoc;
