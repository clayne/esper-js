let subrecord = (signature, element) => ({signature, element, type: 'subrecord'});
let uint32 = (name) => ({name, type: 'uint32'});
let float = (name) => ({name, type: 'float'});
let string = (name) => ({name, type: 'string'});

module.exports = {
    subrecord, uint32, float, string
};
