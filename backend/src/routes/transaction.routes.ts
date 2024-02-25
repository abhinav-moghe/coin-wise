import { Router } from "express"
import { getTransactions } from "../controllers/transactions.controller"

const routes = Router()

routes.get("/", getTransactions)

export default routes
