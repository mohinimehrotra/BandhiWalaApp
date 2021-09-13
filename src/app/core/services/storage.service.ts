import { Injectable } from '@angular/core';
import { AUTH_TOKEN } from '../constants/storage.constant';
// import { Plugins } from '@capacitor/core';

// const { Storage } = Plugins;
@Injectable({providedIn: 'root'})
export class StorageService {
    saveData(key: string, value: string){
        localStorage.setItem(key, value);
    }

    getAuthToken(): string {
        return localStorage.getItem(AUTH_TOKEN);
    }
    // async setString(key: string, value: string) {
    //     await Storage.set({ key, value });
    // }

    // async getString(key: string): Promise<{ value: any }> {
    //     return (await Storage.get({ key }));
    // }

    // async setObject(key: string, value: any) {
    //     await Storage.set({ key, value: JSON.stringify(value) });
    // }

    // async getObject(key: string): Promise<{ value: any }> {
    //     const ret = await Storage.get({ key });
    //     return JSON.parse(ret.value);
    // }


    // async removeItem(key: string) {
    //     await Storage.remove({ key });
    // }

    // async clear() {
    //     await Storage.clear();
    // }

}
