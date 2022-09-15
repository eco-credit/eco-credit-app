import {database} from "./database";
import {migrations} from "./migrations";

export const Transactions = () => {
    const objectExists = (id) => {
        console.log(id)
        return false
    }

    this.createDatabase = () => {
        database().transaction(tx => {
            tx.executeSql(
                "create table users (id INTEGER primary key, first_name TEXT, last_name TEXT, email TEXT, unique_identifier TEXT); ",
                (txObj, resultSet) => (console.log(resultSet))
            )
            tx.executeSql(
                "create table groups (id INTEGER primary key, name TEXT, project_manager_id TEXT, created_at TEXT, updated_at, TEXT);",
                [],
                (txObj, resultSet) => (console.log(resultSet))
            )
        })
    }

    this.createTableIfNotExists = (table, fields) => {
        database().transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS ' + table + '(id INTEGER PRIMARY KEY, firstname TEXT, firstname TEXT)'
            )
        })
    }

    this.createOrUpdateMultiple = (table, objects) => {
        objects.forEach((object) => {
            const fields = Object.keys(object).join(',');
            const data = Object.values(object)


            const objectExists = this.objectExists(data['0']);

            // database().transaction(tx => {
            //     tx.executeSql('INSERT INTO ' + table + ' (' + fields + ') values (?, ?, ?, ?, ?)', data,
            //         (txObj, resultSet) => (console.log(resultSet)),
            //         (txObj, error) => console.log('Error', error))
            // })
        })
    }

}

// private createObject = (data) => {
//
// }
//
// private updateObject = (id, data) => {
//
// }
//
// private deleteObject = (id) => {
//
// }