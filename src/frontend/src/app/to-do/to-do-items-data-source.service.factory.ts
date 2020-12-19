import { EnvConfigService } from '../env-config.service';
import { ToDoItemsDataSourceRealService } from './to-do-items-data-source-real.service';
import { HttpClient } from '@angular/common/http';
import { ToDoItemsDataSourceFakeService } from './to-do-items-data-source-fake.service';

export function ToDoItemsDataSourceServiceFactory(
  envConfigService: EnvConfigService,
  httpClient: HttpClient) {
    console.log(envConfigService.getConfig().isRealStorageEnabled)
  if (envConfigService.getConfig().isRealStorageEnabled) {
    return new ToDoItemsDataSourceRealService(httpClient, envConfigService);
  }
  
    return new ToDoItemsDataSourceFakeService();
}