import sass from "sass"

export default function(filePath) {
    return sass.compile(filePath).css;
}