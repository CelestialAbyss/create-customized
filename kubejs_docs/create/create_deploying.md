# Create Deploying

<!--

> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.

Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].

[^1]: My reference.
[^2]: To add line breaks within a footnote, prefix new lines with 2 spaces.
  This is a second line.

-->

> [!NOTE]
> The recipes event is a **server event** which means it belongs in `kubejs/server_scripts` and nowhere else.

Currently there are no independent deploying recipes in base Create as they are either automatically generated from Item Application recipes or as a step in Sequenced Assembly recipes.

```js
// requires: kubejs_create

ServerEvents.recipes(event => {
    event.recipes.create.deploying()
})
```