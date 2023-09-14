import { atom } from "recoil";

export const user = atom<{
    name: string;
    phoneNumber: string;
} | null>({
    key: 'user',
    default: null
});