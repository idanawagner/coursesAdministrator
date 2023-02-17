import { InjectionToken } from "@angular/core"
import { Configuration } from "./models/configuration"
import { DataService } from "./services/data.service"

export const config: Configuration = {
  urlAPI: 'https//',
  service: {
    dataService: new DataService()
  }
}

export const token = new InjectionToken<Configuration>('configuration')

