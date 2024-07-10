function getElementWidth(content, padding, border){
    let widthContent =  parseFloat(content);
    let widthPadding = parseFloat(padding);
    let widthBorder = parseFloat(border);
    let totalWidth = widthContent + 2 * widthPadding + 2 * widthBorder;
   return Math.round(totalWidth); 
}

console.log(getElementWidth("50px", "8px", "4px")); 
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px"));