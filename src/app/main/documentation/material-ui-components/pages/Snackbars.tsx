import FuseExample from '@fuse/core/FuseExample';
                   import FuseHighlight from '@fuse/core/FuseHighlight';
                   import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
                   import Button from '@mui/material/Button';
                   import Icon from '@mui/material/Icon';
                   import Typography from '@mui/material/Typography';
				   import DocumentationPageBreadcrumb from '../../DocumentationPageBreadcrumb';
                   import SimpleSnackbarComponent from '../components/snackbars/SimpleSnackbar';
import SimpleSnackbarRaw from '../components/snackbars/SimpleSnackbar.tsx?raw';
import PositionedSnackbarComponent from '../components/snackbars/PositionedSnackbar';
import PositionedSnackbarRaw from '../components/snackbars/PositionedSnackbar.tsx?raw';
import LongTextSnackbarComponent from '../components/snackbars/LongTextSnackbar';
import LongTextSnackbarRaw from '../components/snackbars/LongTextSnackbar.tsx?raw';
import AutohideSnackbarComponent from '../components/snackbars/AutohideSnackbar';
import AutohideSnackbarRaw from '../components/snackbars/AutohideSnackbar.tsx?raw';
import TransitionsSnackbarComponent from '../components/snackbars/TransitionsSnackbar';
import TransitionsSnackbarRaw from '../components/snackbars/TransitionsSnackbar.tsx?raw';
import CustomizedSnackbarsComponent from '../components/snackbars/CustomizedSnackbars';
import CustomizedSnackbarsRaw from '../components/snackbars/CustomizedSnackbars.tsx?raw';
import FabIntegrationSnackbarComponent from '../components/snackbars/FabIntegrationSnackbar';
import FabIntegrationSnackbarRaw from '../components/snackbars/FabIntegrationSnackbar.tsx?raw';
import ConsecutiveSnackbarsComponent from '../components/snackbars/ConsecutiveSnackbars';
import ConsecutiveSnackbarsRaw from '../components/snackbars/ConsecutiveSnackbars.tsx?raw';
import IntegrationNotistackComponent from '../components/snackbars/IntegrationNotistack';
import IntegrationNotistackRaw from '../components/snackbars/IntegrationNotistack.tsx?raw';
                   
                   function SnackbarsDoc(props) {
                     return (
                       
                <>
					<div className="flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between">
					  <DocumentationPageBreadcrumb />
					  <Button 
							className="normal-case"
							variant="contained"
                            color="secondary"
							component="a" 
							href="https://mui.com/components/snackbars" 
							target="_blank"
							role="button"
							size="small"
							startIcon={<FuseSvgIcon size={20}>heroicons-outline:external-link</FuseSvgIcon>}
							>
							Reference
						</Button>
					</div>
                     <Typography className="text-32 my-16 font-700" component="h1">Snackbar</Typography>
<Typography className="description">Snackbars (also known as toasts) are used for brief notifications of processes that have been or will be performed.</Typography>



<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Introduction</Typography>
<Typography className="text-14 mb-32" component="div">The Snackbar component appears temporarily and floats above the UI to provide users with (non-critical) updates on an app&#39;s processes.
The demo below, inspired by Google Keep, shows a basic Snackbar with a text element and two actions:</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="SimpleSnackbar.js"
                    className="my-16"
                    iframe={false}
                    component={SimpleSnackbarComponent} 
                    raw={SimpleSnackbarRaw}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Usage</Typography>
<Typography className="text-14 mb-32" component="div">Snackbars differ from <a href="/material-ui/react-alert/">Alerts</a> in that Snackbars have a fixed position and a high z-index, so they&#39;re intended to break out of the document flow; Alerts, on the other hand, are usually part of the flow—except when they&#39;re <a href="#use-with-alerts">used as children of a Snackbar</a>.</Typography>
<Typography className="text-14 mb-32" component="div">Snackbars also from differ from <a href="/material-ui/react-dialog/">Dialogs</a> in that Snackbars are not intended to convey <em>critical</em> information or block the user from interacting with the rest of the app; Dialogs, by contrast, require input from the user in order to be dismissed.</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Basics</Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Import</Typography>

<FuseHighlight component="pre" className="language-jsx">
{` 
import Snackbar from '@mui/material/Snackbar';
`}
</FuseHighlight>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Position</Typography>
<Typography className="text-14 mb-32" component="div">Use the <code>{`anchorOrigin`}</code> prop to control the Snackbar&#39;s position on the screen.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="PositionedSnackbar.js"
                    className="my-16"
                    iframe={false}
                    component={PositionedSnackbarComponent} 
                    raw={PositionedSnackbarRaw}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Content</Typography>

<FuseHighlight component="pre" className="language-jsx">
{` 
import SnackbarContent from '@mui/material/SnackbarContent';
`}
</FuseHighlight>
<Typography className="text-14 mb-32" component="div">Use the Snackbar Content component to add text and actions to the Snackbar.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="LongTextSnackbar.js"
                    className="my-16"
                    iframe={false}
                    component={LongTextSnackbarComponent} 
                    raw={LongTextSnackbarRaw}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Automatic dismiss</Typography>
<Typography className="text-14 mb-32" component="div">Use the <code>{`autoHideDuration`}</code> prop to automatically trigger the Snackbar&#39;s <code>{`onClose`}</code> function after a set period of time (in milliseconds).</Typography>
<Typography className="text-14 mb-32" component="div">Make sure to <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits.html">provide sufficient time</a> for the user to process the information displayed on it.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="AutohideSnackbar.js"
                    className="my-16"
                    iframe={false}
                    component={AutohideSnackbarComponent} 
                    raw={AutohideSnackbarRaw}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Transitions</Typography>
<Typography className="text-14 mb-32" component="div">You can use the <code>{`TransitionComponent`}</code> prop to change the transition of the Snackbar from <a href="/material-ui/transitions/#grow">Grow</a> (the default) to others such as <a href="/material-ui/transitions/#slide">Slide</a>.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="TransitionsSnackbar.js"
                    className="my-16"
                    iframe={false}
                    component={TransitionsSnackbarComponent} 
                    raw={TransitionsSnackbarRaw}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Customization</Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Use with Alerts</Typography>
<Typography className="text-14 mb-32" component="div">Use an Alert inside a Snackbar for messages that communicate a certain severity.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="CustomizedSnackbars.js"
                    className="my-16"
                    iframe={false}
                    component={CustomizedSnackbarsComponent} 
                    raw={CustomizedSnackbarsRaw}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Use with Floating Action Buttons</Typography>
<Typography className="text-14 mb-32" component="div">If you&#39;re using a <a href="/material-ui/react-floating-action-button/">Floating Action Button</a> on mobile, Material Design recommends positioning snackbars directly above it, as shown in the demo below:</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="FabIntegrationSnackbar.js"
                    className="my-16"
                    iframe={true}
                    component={FabIntegrationSnackbarComponent} 
                    raw={FabIntegrationSnackbarRaw}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Common examples</Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Consecutive Snackbars</Typography>
<Typography className="text-14 mb-32" component="div">This demo shows how to display multiple Snackbars without stacking them by using a consecutive animation.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ConsecutiveSnackbars.js"
                    className="my-16"
                    iframe={false}
                    component={ConsecutiveSnackbarsComponent} 
                    raw={ConsecutiveSnackbarsRaw}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Third-party integrations</Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">notistack</Typography>
<Typography className="text-14 mb-32" component="div"><img src="https://img.shields.io/github/stars/iamhosseindhv/notistack.svg?style=social&label=Star" alt="stars"/>
<img src="https://img.shields.io/npm/dm/notistack.svg" alt="npm downloads"/></Typography>
<Typography className="text-14 mb-32" component="div">With an imperative API, <a href="https://github.com/iamhosseindhv/notistack">notistack</a> lets you vertically stack multiple Snackbars without having to handle their open and close states.
Even though this is discouraged in the Material Design guidelines, it is still a common pattern.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="IntegrationNotistack.js"
                    className="my-16"
                    iframe={false}
                    component={IntegrationNotistackComponent} 
                    raw={IntegrationNotistackRaw}
                    /></Typography>
<Typography className="text-14 mb-32" component="div">:::warning
Note that notistack prevents Snackbars from being <a href="#accessibility">closed by pressing <kbd className="key">Escape</kbd></a>.
:::</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Accessibility</Typography>
<Typography className="text-14 mb-32" component="div">The user should be able to dismiss Snackbars by pressing <kbd className="key">Escape</kbd>. If there are multiple instances appearing at the same time and you want <kbd className="key">Escape</kbd> to dismiss only the oldest one that&#39;s currently open, call <code>{`event.preventDefault`}</code> in the <code>{`onClose`}</code> prop.</Typography>

<FuseHighlight component="pre" className="language-jsx">
{` 
export default function MyComponent() {
  const [open, setOpen] = React.useState(true);

  return (
    <React.Fragment>
      <Snackbar
        open={open}
        onClose={(event, reason) => {
          // \`reason === 'escapeKeyDown'\` if \`Escape\` was pressed
          setOpen(false);
          // call \`event.preventDefault\` to only close one Snackbar at a time.
        
      />
      <Snackbar open={open} onClose={() => setOpen(false)} />
    </React.Fragment>
  );
}
`}
</FuseHighlight>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Anatomy</Typography>
<Typography className="text-14 mb-32" component="div">The Snackbar component is composed of a root <code>{`<div>`}</code> that houses interior elements like the Snackbar Content and other optional components (such as buttons or decorators).</Typography>

<FuseHighlight component="pre" className="language-html">
{` 
<div role="presentation" className="MuiSnackbar-root">
  <div className="MuiPaper-root MuiSnackbarContent-root" role="alert">
    <div className="MuiSnackbarContent-message">
      <!-- Snackbar content goes here -->
    </div>
  </div>
</div>
`}
</FuseHighlight>

                </>
    
                     );
                   }
                   
                   export default SnackbarsDoc;
                   