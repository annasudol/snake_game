    
    
    async function init() {
      const importantObj = {
        console: {
          log: () => {
            console.log("just logging")
          },
          error: () => {
            console.log("error")
          }
        }
      }
      const response = await fetch("sum.wasm");
      const buffer = response.arrayBuffer();
      const wasm = await WebAssembly.instantiate(buffer, importantObj);

      const sumFunction = wasm.instance.exports.sum;
      const result = sumFunction(100, 1000);
      console.log(result);
  }
  init();