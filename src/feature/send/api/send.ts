import axios from "axios"
import { IUser } from "entity/user/type/user"

export const send = async (body: IUser) =>
	axios.post("https://api.sbercloud.ru/content/v1/bootcamp/frontend", body)
