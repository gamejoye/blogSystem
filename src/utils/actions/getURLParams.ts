const regex = /&|\?/;
const getEntries = (str: string) => str.split('=');
const findEntry = (targetKey: string) => ([key]: [string]) => targetKey === key;
const getURLParems = (searchURL: string, ...targetKeys: string[]): string[] => {
    const entries = searchURL
        .split(regex)
        .map(str => getEntries(str));
    return targetKeys
        .map(targetKey => entries.find(findEntry(targetKey))?.[1] || "");
}
export default getURLParems;