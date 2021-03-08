export class People {

  constructor(private _num: number,
    private _firstName: string,
    private _lastName: string){}

    get num() {
      return this._num
      }

      set num(_num:number) {
        this._num= _num;
      }

      get firstName(){
        return this._firstName;
      }
      set firstName(_firstName:string) {
        this._firstName;
      }
      get lastName(){
        return this._lastName;
      }
      set lastName(_lastName: string) {
        this._lastName= _lastName;
      }

}

