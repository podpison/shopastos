import { RusEngArrayTextType, RusEngTextType } from "./../redux/store";

type LngsType = 'rus' | 'eng';
type TextType = RusEngTextType | RusEngArrayTextType | undefined | null;
type ReturnType<T> = T extends string ? string : T extends string[] ? string[] : T extends null ? LngsType : undefined;


export function currentLanguageHelper<T = string>(text: TextType): ReturnType<T> {
    let currentLng = localStorage.getItem('lng') as LngsType || 'rus';
    //@ts-ignore
    if (text === undefined) return;
    //@ts-ignore
    if (text === null) return currentLng;
    //@ts-ignore
    return text[currentLng];
};