export class Localizacao{
    constructor( public accuracy: number,
                 public altitude: number,
                 public bearing: number,
                 public bearingAccuracyDegrees: number,
                 public complete: boolean,
                 public elapsedRealtimeNanos: number,
                 public elapsedRealtimeUncertaintyNanos: number,
                 public fromMockProvider: boolean,
                 public latitude: Number,
                 public longitude: Number, 
                 public provider:string,
                 public speed:number,
                 public speedAccuracymatersPerSecond: number,
                 public time: number,
                 public verticalAccuracymeters: number)
    {
        
    }
}