export interface SellerDataModel {
    id: number;
    userType: string;
    fullName: string;
    mobileNumber: string;
    status: string;
    updatedAt?: any;
    seller: SellerModel;
}

export interface SellerModel {
    id: number;
    userIdFk: number;
    cityIdFk: number;
    shopName: string;
    shopRegistrationNumber: string;
    fssaiCode: string;
    shopAddress: string;
    status: string;
}