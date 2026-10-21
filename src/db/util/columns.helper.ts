import { timestamp } from "drizzle-orm/pg-core"


export const timeStamps = {
    createdAt: timestamp({ withTimezone: true}).defaultNow().notNull(),
    updateAt: timestamp({ withTimezone: true}).defaultNow().notNull().$onUpdate(() => new Date())
};