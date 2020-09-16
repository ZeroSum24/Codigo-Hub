import { DASHBOARD_DATA } from '../actions/dashboard';

export default function dashboard(state = {
	community: {
		userAmount:           0,
		totalBounties:        0,
		totalFirmware:        0,
		monthlyContributions: 0
	},
	bounties: {
		amountSubmitted: 0,
		overallClaimed:  0,
		monthlyClaims:   0
	},
	firmware: {
		firmwareAmount:   0,
		overallDownloads: 0,
		monthlyDownloads: 0
	},
	devices: {
		active:        {number: 0, percent:      0},
		unknown:       {number: 0, percent:      0},
		inactive:      {number: 0, percent:      0},
		deviceDetails: {onMap:  0, totalDevices: 0}
	}
}, action) {
	switch (action.type) {
		case DASHBOARD_DATA:
			return Object.assign({}, state, {
				community: action.payload.community,
				bounties: action.payload.bounties,
				firmware: action.payload.firmware,
				devices: action.payload.devices,
			});
		default:
			return state;
	}
}
