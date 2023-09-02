export interface IAbsenContext {
  getHistory(): Promise<void>;
  sendAbsen(details: string, location: ILocation): Promise<boolean>;
  absenState: IAbsenState;
}

export interface IAbsenState {
  isFetching: boolean;
  histories: DailyAbsenHistory[];
}

export interface DailyAbsenHistory {
  date: Date;
  in: Absen;
  out: Absen;
}

export interface Absen {
  status: string;
  time: string;
  location: ILocation;
}

export interface ILocation {
  lon: number;
  lat: number;
}

export interface AbsenHistoryResponseDto {
  histories: DailyAbsenHistory[];
}

export interface AbsenRequestDto {
  absenTime: Date;
  location: ILocation;
}

export interface AbsenResponseDto {
  status: string;
}
