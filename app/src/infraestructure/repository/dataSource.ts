import { DataSource, DataSourceOptions } from 'typeorm'
import { userEntity } from '../entities/userEntity'
import 'dotenv/config'

//require("dotenv").config({ path: '../../../.env' })

const dsOptions: DataSourceOptions = {
    type: process.env.TYPEORM_CONNECTION,
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [ userEntity ],
    
} as DataSourceOptions;

export const servDataSource = new DataSource(dsOptions);

export const initDB = async () => {
    try {
        await servDataSource.initialize()
        console.log('Data Source has been initialized!');
      } catch (ex) {
        console.error('Error during Data Source initialization - ', ex);
      }
}