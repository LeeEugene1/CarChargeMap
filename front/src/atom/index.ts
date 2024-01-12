import { CurrentStoreType, LocationType } from "@/interface";
import { atom } from "recoil";

const DEFAULT_LAT = 37.565199;
const DEFAULT_LNG = 126.983339;

export const mapState = atom({
    key:"map",
    default:null,
    dangerouslyAllowMutability:true
})

export const currentStoreState = atom<CurrentStoreType | null>({
    key:"store",
    default:null
})

export const locationState = atom<LocationType>({
    key:'location',
    default:{
        lat: DEFAULT_LAT,
        lng: DEFAULT_LNG
    }
})