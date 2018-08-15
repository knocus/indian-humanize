export const THOUSAND = 1e3;
export const LAKH = 1e5
export const CRORE = 1e7;
export const MILLION = 1e6;
export const BILLION = 1e9;

export const humanize = (num: number):string => {
  const _humanize = (n:number, symbol:string):string => {
    const k = n.toString().split('.')

    if(k.length === 1) {
      return `${k[0]}${symbol}`; 
    } else if(k[1][0] === "0"){
      return `${k[0]}${symbol}`
    }

    return `${k[0]}.${k[1][0]}${symbol}`
  }

  if(isNaN(num)) {
    return "NaN";
  }

  if(num >= CRORE){
    return _humanize(num/CRORE, 'C')
  } else if (num >= LAKH) {
    return _humanize(num/LAKH, 'L')
  } else if (num >= THOUSAND){
    return _humanize(num/THOUSAND, 'K')
  }
    return num.toString()
}
