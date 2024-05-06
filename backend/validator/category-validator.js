const z = require('zod');

const cateteogrySchema = z.object({
    name: z
    .string({requried_error: "Category Name can't be empty"})
    .min(4, "Category name must be atleast 4 characters ")
    .max(255, "Category name must not be longer than 255 characters")
})

module.exports = cateteogrySchema