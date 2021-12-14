import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen } from "@testing-library/react";
import PersonController from "../PersonController";
// import { person } from "./Person";

const server = setupServer(
  rest.get("https://www.randomuser.me/api", (req, res, ctx) => {

    return res(
      ctx.json({
        results: [
          {
            name: {
              first: "John",
              last: "Doe"
              },
            picture: {
              large: "https://randomuser.me/api/portraits/john.jpg"
            },
            email: "john.doe@example.com"
          }
        ]
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// server.use(
//   rest.get("https://www.randomuser.me/api", (req, res, ctx) => {

//     return res(
//       ctx.json({
//         results: [
//           {
//             name: {
//               first: "John",
//               last: "Doe"
//               },
//             picture: {
//               large: "https://randomuser.me/api/portraits/john.jpg"
//             },
//           email: "john.doe@example.com"
//           }
//         ]

//       })
//     );
//   })
// );

test(
  "renders PersonController",
  () => {
    render(<PersonController />);
    // expect(screen.getByText("First Name: John")).toBeInTheDocument();
    // expect(screen.getByText("Last Name: Doe")).toBeInTheDocument();
    // expect(screen.getByText("Email:john.doe@example.com")).toBeInTheDocument();
    // expect(screen.getByAltText("John")).toBeInTheDocument();
  }
);
