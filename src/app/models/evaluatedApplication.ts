import {ApplicationSettings} from './applicationSettings';

export class EvaluatedApplication {
  id: string;
  name: string;
  description: string;
  tasks: string[];
  settings: ApplicationSettings;
}
