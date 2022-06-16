export default function sum(...args){
    return args.reduce((p,c)=>{return p+c},0)
}
