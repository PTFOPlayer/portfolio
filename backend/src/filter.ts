export default function filter(obj: any) {
  for (let attrKey in obj) {
    let attrValue = obj[attrKey];
    if (attrValue === null || attrValue === "") {
      delete obj[attrKey];
    } else if (
      Object.prototype.toString.call(attrValue) === "[object Object]"
    ) {
      filter(attrValue);
    } else if (Array.isArray(attrValue)) {
      attrValue.forEach((arrayValue) => {
        filter(arrayValue);
      });
    }
  }
}
