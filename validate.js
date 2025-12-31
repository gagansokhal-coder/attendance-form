const {z}=require("zod");

const validschema=z.object({
    name:z.string(),
    roll:z.coerce.number(),
    attendance:z.coerce.number(),
    reason:z.string(),

    branch:z.string()
})

module.exports={validschema}