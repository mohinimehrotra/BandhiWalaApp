export interface BuyerModel {
    id: number;
    userIdFk: number;
    cityIdFk: number;
    address: string;
    status: string;
}
export interface BuyerDataModel {
    id: number;
    userType: string;
    fullName: string;
    mobileNumber: string;
    status: string;
    updatedAt?: any;
    buyer: BuyerModel;
}

