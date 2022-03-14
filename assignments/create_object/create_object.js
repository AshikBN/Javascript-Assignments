function CreateObject(arr) {
    // Write your code here
    const newObj={}
    for (let i = 0; i < arr.length; i+=2) {
        newObj[arr[i]]=arr[i+1];
        
    }
    return newObj
}

module.exports = CreateObject;
