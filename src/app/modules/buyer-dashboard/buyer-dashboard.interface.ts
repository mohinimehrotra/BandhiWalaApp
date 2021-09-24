export interface SellersListModel{
    id: number;
    sellerUserIdFK: number;
    buyerUserIdFK: number;
    createdAt: string;
    sellerUser: SellerUser;
    buyerUser: BuyerUser;
}
export interface SellerUser {
    id: number;
    mobileNumber: string;
    fullName: string;
    userType: string;
}

export interface BuyerUser {
    id: number;
    mobileNumber: string;
    fullName: string;
    userType: string;
}
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

