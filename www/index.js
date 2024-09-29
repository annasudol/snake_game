    
    
    async function init() {
      const response = await fetch("sum.wasm");
      const buffer = response.arrayBuffer();
        const wasm = await WebAssembly.instantiate(buffer);

        const sumFunction = wasm.instance.exports.sum;
        const result = sumFunction(100, 1000);
        console.log(result);
      }
    init();