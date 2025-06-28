export const extractId = (url: string): string => {
    const id = url.split("/").filter(Boolean).pop();
    console.log(id);
    return id || "";
}