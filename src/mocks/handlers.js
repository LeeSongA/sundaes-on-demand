import { rest } from "msw";

export const handlers = [
  rest.post("http;//localhost:3030/scoops", (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "Chocolate", imagePath: "/images/chocolate.png" },
        { name: "vanilla", imagePatch: "/images/vanilla.png" },
      ])
    );
  }),
];
