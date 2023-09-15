const obj = {
  name: "John",
  age: 30,
};

const proxy = new Proxy(obj, {
  get: () => {
    return "404";
  },
});

console.log(proxy.name); // "404"
console.log(proxy.age); // "404"
