import { DataService } from "../services/data.service";


export interface Configuration {
    urlAPI: string,
    urlLogin: string
  service: {
    dataService: DataService
  }
}
