/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class A extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Tears Emoji [Free Download iPhone Emojis in PNG]",
        "./A/costumes/Tears Emoji [Free Download iPhone Emojis in PNG].png",
        { x: 320, y: 292 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "q2" }, this.whenIReceiveQ2),
      new Trigger(Trigger.BROADCAST, { name: "q3" }, this.whenIReceiveQ3),
      new Trigger(Trigger.BROADCAST, { name: "q4" }, this.whenIReceiveQ4),
      new Trigger(Trigger.BROADCAST, { name: "q1" }, this.whenIReceiveQ1),
      new Trigger(
        Trigger.BROADCAST,
        { name: "switch" },
        this.whenIReceiveSwitch
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenIReceiveQ2() {
    this.goto(43, -52);
    this.visible = true;
  }

  *whenIReceiveQ3() {
    this.goto(43, -52);
    this.visible = true;
  }

  *whenIReceiveQ4() {
    this.goto(43, -52);
    this.visible = true;
  }

  *whenIReceiveQ1() {
    this.goto(43, -52);
    this.visible = true;
  }

  *whenIReceiveSwitch() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.chosenquestion == "q1") {
      this.broadcast("switch");
    }
  }
}
