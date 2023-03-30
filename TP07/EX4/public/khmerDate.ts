export class KhmerDate{
    date: Date;
    constructor(date: Date){
        this.date=date;
    }
    getDate(): String{
        const space=this.compareDate()/1000;
        if(space<0) return "Invalid Input"     
        if(space<60) return `មុននេះបន្តិច`
        else if(space<3600) return  `${this.toKhmerNumber(Math.floor(space/60))}នាទីមុន`
        else if(space<3600*24) return `${this.toKhmerNumber(Math.floor(space/3600))}ម៉ោងមុន `
        else if(space<3600*24*7) return `${this.toKhmerNumber(Math.floor(space/(3600*24)))}ថ្ងៃមុន`
        else if(space<3600*24*30) return `${this.toKhmerNumber(Math.floor(space/(3600*24*7)))}សប្តាហ៍មុន`
        else if(space<3600*24*365) return `${this.toKhmerNumber(Math.floor(space/(3600*24*7)))}ខែមុន`
        return `${this.toKhmerNumber(Math.floor(space/(3600*24*365)))}ឆ្នាំមុន`;
    }
    compareDate(): number{
        return (new Date()).getTime()- this.date.getTime();
    }
    toKhmerNumber(input): String{
        input+="";
        const khmerNum:Array<String>=["០","១","២","៣","៤","៥","៦","៧","៨","៩"];
        let rst="";
        for(let c of input){
            rst+=khmerNum[c-0];
        }
        return rst;
    }
}
