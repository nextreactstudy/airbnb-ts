import { rest } from "msw";
import { mockCampRes } from "./campMock";

export const campHandlers = [
    rest.get<any[]>("/campSearch", (req, res, ctx) => {
        return res(ctx.json(mockCampRes));
    }),
];
