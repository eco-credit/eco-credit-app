import * as SQLite from 'expo-sqlite';

export const database = () => {
    return SQLite.openDatabase('test2.db')
}