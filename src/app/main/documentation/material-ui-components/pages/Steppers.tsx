import FuseExample from '@fuse/core/FuseExample';
                   import FuseHighlight from '@fuse/core/FuseHighlight';
                   import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
                   import Button from '@mui/material/Button';
                   import Icon from '@mui/material/Icon';
                   import Typography from '@mui/material/Typography';
				   import DocumentationPageBreadcrumb from '../../DocumentationPageBreadcrumb';
                   import HorizontalLinearStepperComponent from '../components/steppers/HorizontalLinearStepper';
import HorizontalLinearStepperRaw from '../components/steppers/HorizontalLinearStepper.tsx?raw';
import HorizontalNonLinearStepperComponent from '../components/steppers/HorizontalNonLinearStepper';
import HorizontalNonLinearStepperRaw from '../components/steppers/HorizontalNonLinearStepper.tsx?raw';
import HorizontalLinearAlternativeLabelStepperComponent from '../components/steppers/HorizontalLinearAlternativeLabelStepper';
import HorizontalLinearAlternativeLabelStepperRaw from '../components/steppers/HorizontalLinearAlternativeLabelStepper.tsx?raw';
import HorizontalStepperWithErrorComponent from '../components/steppers/HorizontalStepperWithError';
import HorizontalStepperWithErrorRaw from '../components/steppers/HorizontalStepperWithError.tsx?raw';
import CustomizedSteppersComponent from '../components/steppers/CustomizedSteppers';
import CustomizedSteppersRaw from '../components/steppers/CustomizedSteppers.tsx?raw';
import VerticalLinearStepperComponent from '../components/steppers/VerticalLinearStepper';
import VerticalLinearStepperRaw from '../components/steppers/VerticalLinearStepper.tsx?raw';
import TextMobileStepperComponent from '../components/steppers/TextMobileStepper';
import TextMobileStepperRaw from '../components/steppers/TextMobileStepper.tsx?raw';
import SwipeableTextMobileStepperComponent from '../components/steppers/SwipeableTextMobileStepper';
import SwipeableTextMobileStepperRaw from '../components/steppers/SwipeableTextMobileStepper.tsx?raw';
import DotsMobileStepperComponent from '../components/steppers/DotsMobileStepper';
import DotsMobileStepperRaw from '../components/steppers/DotsMobileStepper.tsx?raw';
import ProgressMobileStepperComponent from '../components/steppers/ProgressMobileStepper';
import ProgressMobileStepperRaw from '../components/steppers/ProgressMobileStepper.tsx?raw';
                   
                   function SteppersDoc(props) {
                     return (
                       
                <>
					<div className="flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between">
					  <DocumentationPageBreadcrumb />
					  <Button 
							className="normal-case"
							variant="contained"
                            color="secondary"
							component="a" 
							href="https://mui.com/components/steppers" 
							target="_blank"
							role="button"
							size="small"
							startIcon={<FuseSvgIcon size={20}>heroicons-outline:external-link</FuseSvgIcon>}
							>
							Reference
						</Button>
					</div>
                     <Typography className="text-32 my-16 font-700" component="h1">Stepper</Typography>
<Typography className="description">Steppers convey progress through numbered steps. It provides a wizard-like workflow.</Typography>

<Typography className="text-14 mb-32" component="div">Steppers display progress through a sequence of logical and numbered steps. They may also be used for navigation.
Steppers may display a transient feedback message after a step is saved.</Typography>
<ul className="space-y-16">
<li><strong>Types of Steps</strong>: Editable, Non-editable, Mobile, Optional</li>
<li><strong>Types of Steppers</strong>: Horizontal, Vertical, Linear, Non-linear</li>
</ul>
<div className="border border-1 p-16 rounded-16 my-12">

<Typography className="text-14 mb-32" component="div">This component is no longer documented in the <a href="https://m2.material.io/">Material Design guidelines</a>, but Material UI will continue to support it.</Typography>
</div>

<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Horizontal stepper</Typography>
<Typography className="text-14 mb-32" component="div">Horizontal steppers are ideal when the contents of one step depend on an earlier step.</Typography>
<Typography className="text-14 mb-32" component="div">Avoid using long step names in horizontal steppers.</Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Linear</Typography>
<Typography className="text-14 mb-32" component="div">A linear stepper allows the user to complete the steps in sequence.</Typography>
<Typography className="text-14 mb-32" component="div">The <code>{`Stepper`}</code> can be controlled by passing the current step index (zero-based) as the <code>{`activeStep`}</code> prop. <code>{`Stepper`}</code> orientation is set using the <code>{`orientation`}</code> prop.</Typography>
<Typography className="text-14 mb-32" component="div">This example also shows the use of an optional step by placing the <code>{`optional`}</code> prop on the second <code>{`Step`}</code> component. Note that it&#39;s up to you to manage when an optional step is skipped. Once you&#39;ve determined this for a particular step you must set <code>{`completed={false}`}</code> to signify that even though the active step index has gone beyond the optional step, it&#39;s not actually complete.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="HorizontalLinearStepper.js"
                    className="my-16"
                    iframe={false}
                    component={HorizontalLinearStepperComponent} 
                    raw={HorizontalLinearStepperRaw}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Non-linear</Typography>
<Typography className="text-14 mb-32" component="div">Non-linear steppers allow the user to enter a multi-step flow at any point.</Typography>
<Typography className="text-14 mb-32" component="div">This example is similar to the regular horizontal stepper, except steps are no longer automatically set to <code>{`disabled={true}`}</code> based on the <code>{`activeStep`}</code> prop.</Typography>
<Typography className="text-14 mb-32" component="div">The use of the <code>{`StepButton`}</code> here demonstrates clickable step labels, as well as setting the <code>{`completed`}</code>
flag. However because steps can be accessed in a non-linear fashion, it&#39;s up to your own implementation to
determine when all steps are completed (or even if they need to be completed).</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="HorizontalNonLinearStepper.js"
                    className="my-16"
                    iframe={false}
                    component={HorizontalNonLinearStepperComponent} 
                    raw={HorizontalNonLinearStepperRaw}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Alternative label</Typography>
<Typography className="text-14 mb-32" component="div">Labels can be placed below the step icon by setting the <code>{`alternativeLabel`}</code> prop on the <code>{`Stepper`}</code> component.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="HorizontalLinearAlternativeLabelStepper.js"
                    className="my-16"
                    iframe={false}
                    component={HorizontalLinearAlternativeLabelStepperComponent} 
                    raw={HorizontalLinearAlternativeLabelStepperRaw}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Error step</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="HorizontalStepperWithError.js"
                    className="my-16"
                    iframe={false}
                    component={HorizontalStepperWithErrorComponent} 
                    raw={HorizontalStepperWithErrorRaw}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Customized horizontal stepper</Typography>
<Typography className="text-14 mb-32" component="div">Here is an example of customizing the component.
You can learn more about this in the <a href="/material-ui/customization/how-to-customize/">overrides documentation page</a>.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="CustomizedSteppers.js"
                    className="my-16"
                    iframe={false}
                    component={CustomizedSteppersComponent} 
                    raw={CustomizedSteppersRaw}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Vertical stepper</Typography>
<Typography className="text-14 mb-32" component="div">Vertical steppers are designed for narrow screen sizes. They are ideal for mobile. All the features of the horizontal stepper can be implemented.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="VerticalLinearStepper.js"
                    className="my-16"
                    iframe={false}
                    component={VerticalLinearStepperComponent} 
                    raw={VerticalLinearStepperRaw}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Performance</Typography>
<Typography className="text-14 mb-32" component="div">The content of a step is unmounted when closed.
If you need to make the content available to search engines or render expensive component trees inside your modal while optimizing for interaction responsiveness it might be a good idea to keep the step mounted with:</Typography>

<FuseHighlight component="pre" className="language-jsx">
{` 
<StepContent TransitionProps={{ unmountOnExit: false }} />
`}
</FuseHighlight>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Mobile stepper</Typography>
<Typography className="text-14 mb-32" component="div">This component implements a compact stepper suitable for a mobile device. It has more limited functionality than the vertical stepper. See <a href="https://m1.material.io/components/steppers.html#steppers-types-of-steps">mobile steps</a> for its inspiration.</Typography>
<Typography className="text-14 mb-32" component="div">The mobile stepper supports three variants to display progress through the available steps: text, dots, and progress.</Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Text</Typography>
<Typography className="text-14 mb-32" component="div">The current step and total number of steps are displayed as text.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="TextMobileStepper.js"
                    className="my-16"
                    iframe={false}
                    component={TextMobileStepperComponent} 
                    raw={TextMobileStepperRaw}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Text with carousel effect</Typography>
<Typography className="text-14 mb-32" component="div">This demo uses
<a href="https://github.com/oliviertassinari/react-swipeable-views">react-swipeable-views</a> to create a carousel.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="SwipeableTextMobileStepper.js"
                    className="my-16"
                    iframe={false}
                    component={SwipeableTextMobileStepperComponent} 
                    raw={SwipeableTextMobileStepperRaw}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Dots</Typography>
<Typography className="text-14 mb-32" component="div">Use dots when the number of steps is small.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="DotsMobileStepper.js"
                    className="my-16"
                    iframe={false}
                    component={DotsMobileStepperComponent} 
                    raw={DotsMobileStepperRaw}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Progress</Typography>
<Typography className="text-14 mb-32" component="div">Use a progress bar when there are many steps, or if there are steps that need to be inserted during the process (based on responses to earlier steps).</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ProgressMobileStepper.js"
                    className="my-16"
                    iframe={false}
                    component={ProgressMobileStepperComponent} 
                    raw={ProgressMobileStepperRaw}
                    /></Typography>

                </>
    
                     );
                   }
                   
                   export default SteppersDoc;
                   