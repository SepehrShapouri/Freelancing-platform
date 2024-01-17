export default function truncateText(string,length){
    if(string.length < length) return string

    return string.slice(0,length) + "..."
}