import { DataService } from "../services/data.service";


export interface Configuration {
    urlAPI: string,
  service: {
    dataService: DataService
  }
}
