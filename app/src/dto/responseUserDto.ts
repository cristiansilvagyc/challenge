import { responseCommon } from './common'
import { user } from './user'

export interface responseUser extends responseCommon {
    user: user | null
}