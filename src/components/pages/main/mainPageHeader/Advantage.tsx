import c from "./../mainPage.module.scss";

type Props = {
    sign: string
    isAdvantageLast?: boolean
}

export const Advantage: React.FC<Props> = ({ sign, isAdvantageLast = false }) => {
    let splitedSign = sign.split(' ');
    let firstWordsCount = isAdvantageLast ? 2 : 1;

    let firstWord = splitedSign.slice(0, firstWordsCount).join(' ');
    let otherWords = splitedSign.slice(firstWordsCount, -1).join(' ');
    let lastWord = splitedSign.pop();
    return <div className={c.advatageItem}>
        <div className={c.icon} />
        <p className={c.sign}>{firstWord}<br/>{otherWords}<span> {lastWord}</span></p>
    </div>
};