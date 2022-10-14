import express from "express";
var router = express.Router();
import cors from "cors";
const app = express();
app.use(cors());

let mockUsers = [
  { id: 1, name: "MARLIN", email: "marlin@gmail.com" },
  { id: 2, name: "NEMO", email: "nemo@gmail.com" },
  { id: 3, name: "DORY", email: "dory@gmail.com" },
];

//updates my database on the response end
router.post("/", (req, res) => {
  const user = {
    //name is what you called it, body is the body of the page, if you add a plus sign before, will convert to integer
    id: +req.body.id,
    name: req.body.name,
    email: req.body.email,
  };
  console.log(user);
  //req.json(user);
  mockUsers.push(user);
  //return req.send(user);
  return res.redirect("/");
});
console.log("HERE");

//this placeholder inside the route is params.id > params is an object, the thing after the colon is the key inside the params object
router.delete("/:id", function (req, res) {
  const filteredUsers = mockUsers.filter((user) => {
    let deletedId = req.params.id;
    console.log("deleteId", deletedId);
    return user.id != deletedId;
  });
  mockUsers = filteredUsers;
  //users is an arbitrary name used as the title
  res.json({ users: filteredUsers });
});

/* GET users listing. */
router.get("/", function (req, res, next) {
  console.log(req.body, "the body");
  res.json({ users: mockUsers });
});

export default router;
