import FuseExample from '@fuse/core/FuseExample';
                   import FuseHighlight from '@fuse/core/FuseHighlight';
                   import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
                   import Button from '@mui/material/Button';
                   import Icon from '@mui/material/Icon';
                   import Typography from '@mui/material/Typography';
				   import DocumentationPageBreadcrumb from '../../DocumentationPageBreadcrumb';
                   import BasicPaginationComponent from '../components/pagination/BasicPagination';
import BasicPaginationRaw from '../components/pagination/BasicPagination.tsx?raw';
import PaginationOutlinedComponent from '../components/pagination/PaginationOutlined';
import PaginationOutlinedRaw from '../components/pagination/PaginationOutlined.tsx?raw';
import PaginationRoundedComponent from '../components/pagination/PaginationRounded';
import PaginationRoundedRaw from '../components/pagination/PaginationRounded.tsx?raw';
import PaginationSizeComponent from '../components/pagination/PaginationSize';
import PaginationSizeRaw from '../components/pagination/PaginationSize.tsx?raw';
import PaginationButtonsComponent from '../components/pagination/PaginationButtons';
import PaginationButtonsRaw from '../components/pagination/PaginationButtons.tsx?raw';
import CustomIconsComponent from '../components/pagination/CustomIcons';
import CustomIconsRaw from '../components/pagination/CustomIcons.tsx?raw';
import PaginationRangesComponent from '../components/pagination/PaginationRanges';
import PaginationRangesRaw from '../components/pagination/PaginationRanges.tsx?raw';
import PaginationControlledComponent from '../components/pagination/PaginationControlled';
import PaginationControlledRaw from '../components/pagination/PaginationControlled.tsx?raw';
import UsePaginationComponent from '../components/pagination/UsePagination';
import UsePaginationRaw from '../components/pagination/UsePagination.tsx?raw';
import TablePaginationDemoComponent from '../components/pagination/TablePaginationDemo';
import TablePaginationDemoRaw from '../components/pagination/TablePaginationDemo.tsx?raw';
                   
                   function PaginationDoc(props) {
                     return (
                       
                <>
					<div className="flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between">
					  <DocumentationPageBreadcrumb />
					  <Button 
							className="normal-case"
							variant="contained"
                            color="secondary"
							component="a" 
							href="https://mui.com/components/pagination" 
							target="_blank"
							role="button"
							size="small"
							startIcon={<FuseSvgIcon size={20}>heroicons-outline:external-link</FuseSvgIcon>}
							>
							Reference
						</Button>
					</div>
                     <Typography className="text-32 my-16 font-700" component="h1">Pagination</Typography>
<Typography className="description">The Pagination component enables the user to select a specific page from a range of pages.</Typography>



<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Basic pagination</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="BasicPagination.js"
                    className="my-16"
                    iframe={false}
                    component={BasicPaginationComponent} 
                    raw={BasicPaginationRaw}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Outlined pagination</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="PaginationOutlined.js"
                    className="my-16"
                    iframe={false}
                    component={PaginationOutlinedComponent} 
                    raw={PaginationOutlinedRaw}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Rounded pagination</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="PaginationRounded.js"
                    className="my-16"
                    iframe={false}
                    component={PaginationRoundedComponent} 
                    raw={PaginationRoundedRaw}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Pagination size</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="PaginationSize.js"
                    className="my-16"
                    iframe={false}
                    component={PaginationSizeComponent} 
                    raw={PaginationSizeRaw}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Buttons</Typography>
<Typography className="text-14 mb-32" component="div">You can optionally enable first-page and last-page buttons, or disable the previous-page and next-page buttons.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="PaginationButtons.js"
                    className="my-16"
                    iframe={false}
                    component={PaginationButtonsComponent} 
                    raw={PaginationButtonsRaw}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Custom icons</Typography>
<Typography className="text-14 mb-32" component="div">It&#39;s possible to customize the control icons.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="CustomIcons.js"
                    className="my-16"
                    iframe={false}
                    component={CustomIconsComponent} 
                    raw={CustomIconsRaw}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Pagination ranges</Typography>
<Typography className="text-14 mb-32" component="div">You can specify how many digits to display either side of current page with the <code>{`siblingCount`}</code> prop, and adjacent to the start and end page number with the <code>{`boundaryCount`}</code> prop.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="PaginationRanges.js"
                    className="my-16"
                    iframe={false}
                    component={PaginationRangesComponent} 
                    raw={PaginationRangesRaw}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Controlled pagination</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="PaginationControlled.js"
                    className="my-16"
                    iframe={false}
                    component={PaginationControlledComponent} 
                    raw={PaginationControlledRaw}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2"><code>{`usePagination`}</code></Typography>
<Typography className="text-14 mb-32" component="div">For advanced customization use cases, a headless <code>{`usePagination()`}</code> hook is exposed.
It accepts almost the same options as the Pagination component minus all the props
related to the rendering of JSX.
The Pagination component is built on this hook.</Typography>

<FuseHighlight component="pre" className="language-jsx">
{` 
import usePagination from '@mui/material/usePagination';
`}
</FuseHighlight>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="UsePagination.js"
                    className="my-16"
                    iframe={false}
                    component={UsePaginationComponent} 
                    raw={UsePaginationRaw}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Table pagination</Typography>
<Typography className="text-14 mb-32" component="div">The <code>{`Pagination`}</code> component was designed to paginate a list of arbitrary items when infinite loading isn&#39;t used.
It&#39;s preferred in contexts where SEO is important, for instance, a blog.</Typography>
<Typography className="text-14 mb-32" component="div">For the pagination of a large set of tabular data, you should use the <code>{`TablePagination`}</code> component.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="TablePaginationDemo.js"
                    className="my-16"
                    iframe={false}
                    component={TablePaginationDemoComponent} 
                    raw={TablePaginationDemoRaw}
                    /></Typography>
<Typography className="text-14 mb-32" component="div">:::warning
Note that the <code>{`Pagination`}</code> page prop starts at 1 to match the requirement of including the value in the URL, while the <code>{`TablePagination`}</code> page prop starts at 0 to match the requirement of zero-based JavaScript arrays that comes with rendering a lot of tabular data.
:::</Typography>
<Typography className="text-14 mb-32" component="div">You can learn more about this use case in the <a href="/material-ui/react-table/#custom-pagination-options">table section</a> of the documentation.</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Accessibility</Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">ARIA</Typography>
<Typography className="text-14 mb-32" component="div">The root node has a role of &quot;navigation&quot; and aria-label &quot;pagination navigation&quot; by default. The page items have an aria-label that identifies the purpose of the item (&quot;go to first page&quot;, &quot;go to previous page&quot;, &quot;go to page 1&quot; etc.). You can override these using the <code>{`getItemAriaLabel`}</code> prop.</Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Keyboard</Typography>
<Typography className="text-14 mb-32" component="div">The pagination items are in tab order, with a tabindex of &quot;0&quot;.</Typography>

                </>
    
                     );
                   }
                   
                   export default PaginationDoc;
                   