import mockApi from '../../mock-api.json';
import ExtendedMockAdapter from '../../ExtendedMockAdapter';

const widgets = mockApi.components.examples.analytics_dashboard_widgets.value;

export const analyticsDashboardApiMocks = (mock: ExtendedMockAdapter) => {
	mock.onGet('/dashboards/analytics/widgets').reply(() => {
		return [200, widgets];
	});
};
