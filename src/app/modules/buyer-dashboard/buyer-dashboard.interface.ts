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