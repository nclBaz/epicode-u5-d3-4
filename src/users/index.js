import express from "express"
import createHttpError from "http-errors"
import UsersModel from "./model.js"

const usersRouter = express.Router()

usersRouter.post("/", async (req, res, next) => {
  try {
    const { userId } = await UsersModel.create(req.body)
    res.status(201).send({ userId })
  } catch (error) {
    next(error)
  }
})

usersRouter.get("/", async (req, res, next) => {
  try {
    const users = await UsersModel.findAll({
      attributes: ["firstName", "lastName"],
    })
    res.send(users)
  } catch (error) {
    next(error)
  }
})

usersRouter.get("/:userId", async (req, res, next) => {
  try {
    const user = await UsersModel.findByPk(req.params.userId, { attributes: { exclude: ["createdAt", "updatedAt"] } }) // attributes could be an array (when you want to pass a list of the selected fields), or an object (with the exclude property, whenever you want to pass a list of omitted fields)
    if (user) {
      res.send(user)
    } else {
      next(createHttpError(404, `User with id ${req.params.userId} not found!`))
    }
  } catch (error) {
    next(error)
  }
})

usersRouter.put("/:userId", async (req, res, next) => {
  try {
  } catch (error) {
    next(error)
  }
})

usersRouter.delete("/:userId", async (req, res, next) => {
  try {
  } catch (error) {
    next(error)
  }
})

export default usersRouter
