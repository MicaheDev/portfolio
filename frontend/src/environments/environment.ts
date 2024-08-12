const PROJECT_ID = 'f45pbqxn';
const DATASET = 'production';

if (!PROJECT_ID || !DATASET) {
  throw new Error(
    'Sanity project ID and dataset name are required. Go into `app/src/environments/environment.ts` and set them.'
  );
}

export const environment = {
  production: false,
  sanity: {
    projectId: PROJECT_ID,
    dataset: DATASET,
    apiVersion: '2023-07-15',
    useCdn: true, // set to false for fresh data
  },
};
