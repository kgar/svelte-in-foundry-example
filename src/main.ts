import App from "./App.svelte";

declare global {
  var Hooks: {
    on: any;
  };
  var Application: any;
  var foundry: any;
}

class SveltInFoundry extends Application {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      height: "auto",
      id: "todo-list",
      template: `modules/svelte-in-foundry/templates/shell.hbs`,
      popOut: true,
    });
  }

  activateListeners(html) {
    super.activateListeners(html);
    console.log("Svelte in Foundry | Activate Listeners");
    this.component = new App({
      target: html.get(0),
      props: {
        name: "Foundry",
      },
    });
  }
}

Hooks.on("ready", () => {
  const app1 = new SveltInFoundry();
  app1.render(true);

  const app2 = new SveltInFoundry();
  app2.render(true);
});
