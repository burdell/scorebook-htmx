import * as elements from "typed-html";
import { Attributes, CustomElementHandler } from "typed-html";

type BaseProps = elements.Children & { css?: string[] };

const BaseHtml = ({ children, css = [] }: BaseProps) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Scorebook</title>
    <link href="/public/favicon.png" rel="icon" type="image/png">
    <link
      href="https://fonts.googleapis.com/css2?family=Arvo&family=Nunito+Sans:wght@400;600;800&display=swap"
      rel="stylesheet"
    />
    <script src="https://unpkg.com/htmx.org@1.9.6" integrity="sha384-FhXw7b6AlE/jyjlZH5iHa/tTe9EpJ1Y55RjcgPbjeWMskSxZt1v9qkxLJWNJaGni" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="/public/base.css" />    
    ${css.map((file) => <link rel="stylesheet" href={`/public/${file}.css`} />)}
  </head>
  <body>
    ${children}
  </body>
</html>
`;

export function Page({
  children,
  css,
  ...theRest
}: BaseProps & { class: string }) {
  return (
    <BaseHtml css={css}>
      <div class={theRest.class}>
        <nav>
          <p class="site-title">scorebook</p>
        </nav>
        <main>{children}</main>
      </div>
    </BaseHtml>
  );
}
