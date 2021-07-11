/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class C extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Very Happy Emoji [Free Download IOS Emojis]",
        "./C/costumes/Very Happy Emoji [Free Download IOS Emojis].png",
        { x: 320, y: 320 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "q2" }, this.whenIReceiveQ2),
      new Trigger(Trigger.BROADCAST, { name: "q3" }, this.whenIReceiveQ3),
      new Trigger(Trigger.BROADCAST, { name: "q4" }, this.whenIReceiveQ4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "switch" },
        this.whenIReceiveSwitch
      ),
      new Trigger(Trigger.BROADCAST, { name: "q1" }, this.whenIReceiveQ1),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenIReceiveQ2() {
    this.goto(121, -49);
    this.visible = true;
  }

  *whenIReceiveQ3() {
    this.goto(121, -49);
    this.visible = true;
  }

  *whenIReceiveQ4() {
    this.goto(121, -49);
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveSwitch() {
    this.visible = false;
  }

  *whenIReceiveQ1() {
    this.goto(121, -49);
    this.visible = true;
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.chosenquestion == "q2") {
      this.broadcast("switch");
    }
  }
}
