import { InjectionToken } from "@angular/core"
import { Configuration } from "../shared/models/configuration"
import { DataService } from "../shared/services/data.service"

export const config: Configuration = {
  urlAPI: 'https://640e173f1a18a5db83884933.mockapi.io',
  urlLogin: 'http://localhost:3000',
  service: {
    dataService: new DataService()
  },
}

export const token = new InjectionToken<Configuration>('configuration')

