import { createSelector, WithSlice } from '@reduxjs/toolkit';
import { apiService as api } from 'app/store/apiService';
import AccountBalanceWidgetType from './widgets/types/AccountBalanceWidgetType';
import BudgetWidgetType from './widgets/types/BudgetWidgetType';
import CurrentStatementWidgetType from './widgets/types/CurrentStatementWidgetType';
import PreviousStatementWidgetType from './widgets/types/PreviousStatementWidgetType';
import RecentTransactionsWidgetType from './widgets/types/RecentTransactionsWidgetType';

export const addTagTypes = ['finance_dashboard_widgets'] as const;

const FinanceDashboardApi = api
	.enhanceEndpoints({
		addTagTypes
	})
	.injectEndpoints({
		endpoints: (build) => ({
			getFinanceDashboardWidgets: build.query<
				GetFinanceDashboardWidgetsApiResponse,
				GetFinanceDashboardWidgetsApiArg
			>({
				query: () => ({ url: `/mock-api/dashboards/finance/widgets` }),
				providesTags: ['finance_dashboard_widgets']
			})
		}),
		overrideExisting: false
	});

export default FinanceDashboardApi;

export type GetFinanceDashboardWidgetsApiResponse = {
	[key: string]:
		| AccountBalanceWidgetType
		| BudgetWidgetType
		| CurrentStatementWidgetType
		| PreviousStatementWidgetType
		| RecentTransactionsWidgetType;
};

export type GetFinanceDashboardWidgetsApiArg = void;

export const { useGetFinanceDashboardWidgetsQuery } = FinanceDashboardApi;

/**
 * Lazy load
 * */
declare module 'app/store/lazyLoadedSlices' {
	export interface LazyLoadedSlices extends WithSlice<typeof FinanceDashboardApi> {}
}

export const selectFinanceDashboardWidgets = createSelector(
	FinanceDashboardApi.endpoints.getFinanceDashboardWidgets.select(),
	(results) => results.data
);

export const selectWidget = <T>(id: string) =>
	createSelector(selectFinanceDashboardWidgets, (widgets) => {
		return widgets?.[id] as T;
	});
