
type SearchParams = Record<string, string | number>;
export function convertSearchParamsToQuery(searchParams: SearchParams) {
    const params = new URLSearchParams();

    for (const key in searchParams) {
        const value = searchParams[key];
        // Convert the value to a string
        const stringValue = typeof value === "number" ? String(value) : value;
        params.append(key, stringValue);
    }

    return params.toString();
}