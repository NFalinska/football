export class Team {
    constructor (
        public id: number,
         public teamName: string,
         public countyCode: string,
         public rate: number,
         public inUefaLeague: boolean
    ) {}
}