class MySet {
  // throw an error if called with anything other than string, array or nothing
  // if an iterable is provided only its unique values should be in data
  // strings and arrays will need to be broken down by their elements/characters
  constructor(iterable) {
    this.data = {};

    if (iterable !== undefined && typeof(iterable) !== 'string' && 
        !Array.isArray(iterable))
      throw new Error("Invalid Parameter");

    if (iterable) {
      for (const item of iterable) {
        this.data[item] = true;
      }
    }
  }

  // return number of elements in MySet
  size() {
    return this.entries().length;
  }

  // add an item to MySet as is
  // don't worry about arrays here!
  // return the MySet instance
  add(item) {
    this.data[item] = true;
    return this;
  }

  // delete an item from MySet
  // don't worry about arrays here!
  // return true if successful, otherwise false
  delete(item) {
    if (this.data.hasOwnProperty(item)) {
      delete this.data[item];
      return true;
    }
    return false;
  }

  // return true if in MySet, otherwise false
  // don't worry about arrays here!
  has(item) {
    return !!this.data[item];
  }

  // return data as an array
  // don't worry about arrays here!
  entries() {
    return Object.keys(this.data);
  }
}

if (require.main === module) {
  // add your own tests in here
  myEmptySet = new MySet();
  console.log("myEmptySet Size: ", myEmptySet.size());
  myStringSet = new MySet('hello');
  console.log("myStringSet Size: ", myStringSet.size());
  myArraySet = new MySet([1,2,3,4]);
  console.log("myArraySet Size: ", myArraySet.size());
  
  myEmptySet.add('a');
  myEmptySet.add('a');
  myEmptySet.add('b');
  myEmptySet.add('c');
  console.log("MyEmptySet: ", myEmptySet.entries());
  console.log("MyEmptySet has 'a': ", myEmptySet.has('a'));
  
  console.log("myEmptySet.delete('d'): ", myEmptySet.delete('d'));
  console.log("MyEmptySet: ", myEmptySet.entries());
  console.log("myEmptySet.delete('a'): ", myEmptySet.delete('a'));
  console.log("MyEmptySet: ", myEmptySet.entries());
}

module.exports = MySet;

