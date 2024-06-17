import { parse } from 'yaml';
import * as path from 'path';
import * as fs from 'fs';

export const getEnv = () => {
    return process.env.RUNNING_ENV;
};

export const IS_DEV = getEnv() === 'dev';
export const getConfig = () => {
    const environment = getEnv();
    console.log(environment, 'env');
    const yamlPath = path.join(process.cwd(), `./application.${environment}.yml`);
    const file = fs.readFileSync(yamlPath, 'utf8');
    const config = parse(file);
    return config;
};
