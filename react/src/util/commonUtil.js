export const comma = (param) => {
  try {
    if(param === null || param === undefined) return ;
    return param.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } catch (e) {
    console.error('comma func error, param:',param,'error:',e)
    return '0';
  }

};

export const numberFixed = (param,n) => {
  if(param === null || param === undefined) return ;

  if (n === null || n === undefined) {
    n = 1
  }
  return (param/n).toFixed(0);

};

export const millionCost = (param) => {
  return comma(numberFixed(param,10000));
};

export const dateFormat = (param) => {
  if(param === null || param === undefined) {
    return;
  }else if(param.length >6) {
    return param.substring(0,4) +'.'+ param.substring(4,6) +'.'+ param.substring(6,8);
  } else {
    return param.substring(0,4) +'.'+ param.substring(4,6);
  }
};
export const nextDateFormat = (param) => {
  param = (parseInt(param)+100).toString();
  if(param.length >6) {
    return param.substring(0,4) +'.'+ param.substring(4,6) +'.'+ param.substring(6,8);
  } else {
    return param.substring(0,4) +'.'+ param.substring(4,6);
  }
};
export const prevDateFormat = (param) => {
  param = (parseInt(param)-99).toString();
  if(param.substring(6,8) == '13') {
    param = param+88 // 201813 201901
  }
  if(param.length >6) {
    return param.substring(0,4) +'.'+ param.substring(4,6) +'.'+ param.substring(6,8);
  } else {
    return param.substring(0,4) +'.'+ param.substring(4,6);
  }
};
