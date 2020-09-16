import {getAllUsers, retrieveAllAvailableFirmware, retrieveAllBounties} from "../blockchain/contracts";
import {containsIgnoreCase} from "./search";
import {getUserDevices} from "./profile";
export const DASHBOARD_DATA = 'DASHBOARD_DATA';


function updateDashboardData(payload) {
	return {
		type: DASHBOARD_DATA,
		payload
	};
}

// TODO must consider where to store, and how to calculate, last months values as compared to this ones for various fields

/**
 * High-level function for triggering the Dashboard data retrival.
 * @param currentUserAddress
 * @returns {function(*): Promise<void>}
 */
export function retrieveDashboardData(currentUserAddress) {
	return async (dispatch) => {

		let firmwareResults = await retrieveAllAvailableFirmware();
		let userFirmware = (firmwareResults).filter(fw => isUserFirmware(currentUserAddress, fw));
		// search users on user reputation blockchain for user inclusion
		let userAddresses = await getAllUsers();
		// search bounties on the bounty blockchain for bounty inclusion
		let bountyResults = await  retrieveAllBounties();
		let userBounties = (bountyResults).filter(b => isUserBounty(currentUserAddress, b));

		// getting user devices from local storage
		let userDevices = await getUserDevices();


		// retrieve data values
		let communityData = communityContributions(firmwareResults, userAddresses, bountyResults);
		let bountiesData  = bountiesClaimed       (userBounties);
		let firmwareData  = firmwareStats         (userFirmware)
		let deviceData    = deviceStats           (userDevices)

		// trigger the reducer data update
		dispatch(updateDashboardData({community: communityData,
																	bounties: bountiesData,
										              firmware: firmwareData,
																	devices: deviceData
																 }))

	}
}
/**
 *
 * @returns {function(*): Promise<{totalFirmware: number, totalBounties: number, userAmount: number}>}
 */
function communityContributions(firmwares, users, bounties) {

	// amount of users; total bounties; total firmware
	return {
		userAmount           : users.length,
		totalBounties        : bounties.length,
		totalFirmware        : firmwares.length,
		monthlyContributions : 0
	}
}

/**
 *
 * @param userBounties
 * @returns {{overallClaimed: number, amountSubmitted: number, monthlyClaims: number}}
 */
function bountiesClaimed(userBounties) {

	let claimedBounties = userBounties.filter(b => isBountyClaimed(true, b));
	let claimedPercent = 100 * (claimedBounties.length / userBounties.length);
	// TODO check above works with rounding as a percentage

	// Amount Submitted; Overall Claimed; Monthly Claims
	return {
		amountSubmitted : userBounties.length,
		overallClaimed  : claimedPercent,
		monthlyClaims   : 0
	}
}

/**
 *
 * @param userFirmwares
 * @returns {{firmwareAmount: number, overallDownloads: number, monthlyDownloads: number}}
 */
function firmwareStats(userFirmwares) {

	// TODO replace this firmware downloads value (consider using FirmwareWithThumbs) -- look for Michael
	let firmwareDownloads = 0;

	// Amount Submitted; Overall Claimed; Monthly Claims
	return {
		firmwareAmount   : userFirmwares.length,
		overallDownloads : firmwareDownloads,
		monthlyDownloads : 0
	}
}

/**
 * Retrieves the device statistics for display in the dashboard.
 * @param devices - list of {Device} objects
 * @returns {{deviceDetails: {onMap: number, totalDevices: number}, inactive: {number: number, percent: number}, active: {number: number, percent: number}, unknown: {number: number, percent: number}}}
 */
function deviceStats(devices) {
	// TODO retrieve the values around the device status for each
	// (likely have to get Michael to provide class (and method to produce) to wrap the device in status + location
	let numberOfDevices = devices.length;

	let activeDevices       = 12;  //: TODO Michael
	let inactiveDevices     = 14;  //: TODO Michael
	let numberOfDeviceOnMap = 15;  //: TODO Michael
	let unknownDevices      = (numberOfDevices-activeDevices-inactiveDevices);

	let activeDevicesPercentage   = 100 * (activeDevices   / numberOfDevices)
	let inactiveDevicesPercentage = 100 * (inactiveDevices / numberOfDevices)
	let unknownDevicesPercentage  = 100 * (unknownDevices  / numberOfDevices)

	return {
		active:        {number: activeDevices       , percent     : activeDevicesPercentage},
		unknown:       {number: unknownDevices      , percent     : unknownDevicesPercentage},
		inactive:      {number: inactiveDevices     , percent     : inactiveDevicesPercentage},
		deviceDetails: {onMap : numberOfDeviceOnMap , totalDevices: numberOfDevices}
	}
}

function isUserBounty(term, bounty) {
	return containsIgnoreCase(bounty.bountySetter, term);
}

function isBountyClaimed(term, bounty) {
	// TODO replace with some kind of claimed flag (see Michael for getting this setup) -- Michael!!!! :L
	return containsIgnoreCase(bounty.block_num, term);
}

/**
 * Return true if the users firmware contains the developers name
 * @param term
 * @param firmware
 * @returns {boolean}
 */
function isUserFirmware(term, firmware) {
	return containsIgnoreCase(firmware.developer, term);
}
