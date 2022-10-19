//WITH PROMISE

function withConstructor(num){
    return new Promise((resolve, reject) => {
      if (num === 0){
        resolve('zero');
      } else {
        resolve('not zero');
      }
    });
  };

//WITH ASYNC

  async function withConstructor(num){
    if (num === 0){
        return 'zero';
      } else {
        return 'not zero';
      }
  };
