import { AppEnvironment } from 'src/renderer/app/models/app-environment.model';

export const environment: AppEnvironment = {
  production: false,
  analyticsID: 'xxxxxx',
  remoteConfig: 'dev',
  telemetryEndpoint:
    'http://localhost:5001/mockoon-ba3e2/us-central1/insertSession'
};
