import BaseBidParams from '../BidParams';
import { ILocation } from '../common-types';
import IBaseBidParams from '../IBidParams';
import { EnergySources, Amenities } from './enums';
/**
 * @interface IBidParams The interface boat-charging/IBidParams represent a valid argument of boat-charging/BidParams constructor.
 */
interface IBidParams extends IBaseBidParams {
    /**
     * @property A human readable name/description of the charger location (e.g., Cal Maritime Dock C).
     */
    locationName: string;
    /**
     * @property The language used in location_name. Specified using the 3 letter ISO 639-3 language code.
     */
    locationNameLang: string;
    /**
     * @property The city where the charger is located.
     */
    locationCity: string;
    /**
     * @property The postal code of the charger address.
     */
    locationPostalCode: string;
    /**
     * @property The county where the charger is located.
     */
    locationCounty: string;
    /**
     * @property The state where the charger is located.
     */
    locationState: string;
    /**
     * @property The country where the charger is located.
     */
    locationCountry: string;
    /**
     * @property The charging station entrance location.
     */
    entranceLocation: ILocation;
    /**
     * @property The charging station exit location.
     */
    exitLocation: ILocation;
    /**
     * @property The time from which the charger can be made available for the vessel requesting a charge.
     * Specified as time in milliseconds since Epoch/Unix Time.
     */
    availableFrom: number;
    /**
     * @property The time until which the charger can be made available for the vessel requesting a charge.
     * Specified as time in milliseconds since Epoch/Unix Time
     */
    availableUntil: number;
    /**
     * @property The source of the energy used by this charger. Specified as an energy source id.
     */
    energySource: EnergySources;
    /**
     * @property A list of amenities that are present at this charger. Specified as a comma separated list of amenity ids.
     */
    amenities: Amenities[];
    /**
     * @property Name of the service provider or charging network operating this charger.
     */
    provider: string;
    /**
     * @property Name of the manufacturer of this charger.
     */
    manufacturer: string;
    /**
     * @property Name of the model of this charger.
     */
    model: string;
}
/**
 * @class The Class boat-charging/BidParams represent the parameters of boat-charging bid.
 */
export default class BidParams extends BaseBidParams {
    private static _protocol;
    private static _type;
    locationName: string;
    locationNameLang: string;
    locationCity: string;
    locationPostalCode: string;
    locationCounty: string;
    locationState: string;
    locationCountry: string;
    entranceLocation: ILocation;
    exitLocation: ILocation;
    availableFrom: number;
    availableUntil: number;
    energySource: EnergySources;
    amenities: Amenities[];
    provider: string;
    manufacturer: string;
    model: string;
    static getMessageType(): string;
    static getMessageProtocol(): string;
    constructor(values?: Partial<IBidParams>);
    serialize(): {
        ttl: number;
        protocol: string;
        type: string;
    };
    deserialize(json: any): void;
    equals(other: BidParams): boolean;
    getProtocolTypes(): {
        need_filter: typeof import("./NeedFilterParams").default;
        need: typeof import("./NeedParams").default;
        bid: typeof BidParams;
        mission: typeof import("./MissionParams").default;
        charging_arrival_message: typeof import("./messages/ChargingArrivalMessageParams").default;
        charging_complete_message: typeof import("./messages/ChargingCompleteMessageParams").default;
        charging_started_message: typeof import("./messages/ChargingStartedMessageParams").default;
        decline_message: typeof import("./messages/DeclineMessageParams").default;
        provider_status_message: typeof import("./messages/ProviderStatusMessageParams").default;
        starting_message: typeof import("./messages/StartingMessageParams").default;
        status_request_message: typeof import("./messages/StatusRequestMessageParams").default;
        vessel_status_message: typeof import("./messages/VesselStatusMessageParams").default;
        needFilters: string[];
        needs: string[];
        bids: string[];
        missions: string[];
        messages: string[];
    };
}
export {};
//# sourceMappingURL=BidParams.d.ts.map