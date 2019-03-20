import { Dexie } from 'src/search/types'

export interface Migrations {
    [storageKey: string]: (db: Dexie) => Promise<void>
}

export const migrations: Migrations = {}
