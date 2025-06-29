export const extractId = (url: string): string => {
    const id = url.split("/").filter(Boolean).pop();
    return id || "";
}

export const extractPage = (url: string): number => {
    const page = url.split("/").filter(Boolean).pop();
    return Number(page) || 1;
}