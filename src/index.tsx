import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import * as elements from "typed-html";

import { Page } from "./Page";
import { getCategories } from "./data";

const app = new Elysia()
  .use(staticPlugin())
  .use(html())
  .get("/", async () => {
    const categories = await getCategories();

    return (
      <Page css={["list-item", "homepage", "content"]} class="homepage">
        <div class="content-page">
          <div class="content-container">
            <div class="content-wrapper">
              <div class="content">
                {categories.map((category) => (
                  <a href={`/category/${category.name}`}>
                    <div class="list-item">
                      <div class="list-name">{category.name}</div>
                      <div class="list-description">{category.description}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  })
  .post("/clicked", () => <div class="text-blue-600">I'm from the server</div>)
  .listen(8080);

console.log(
  `🦊 Elysia is running on ${app.server?.hostname}:${app.server?.port}`
);
