import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class unSdg extends DDDSuper(LitElement) {

  static get tag() {
    return "un-sdg";
  }

  //sets default property values
  constructor() {
    super();
    this.goal = "circle";
    this.width = "254px";
    this.height = "254px";
    this.label = "example";
    this.loading = "lazy"
    this.fetchPriority = "low";
    this.colorOnly = false;
  }

  // sets property types
  static get properties() {
    return {
      goal: { type: String, reflect: true }, // reflect: true makes a property in your component automatically sync with an attribute in the HTML
      width: { type: String },
      height: { type: String },
      label: { type: String },
      loading: { type: String, reflect: true },
      fetchPriority: { type: String, reflect: true },
      colorOnly: { type: Boolean },
    };
  }

  // creates styling variables for "svg" background colors 
  // also sets some other CSS styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        --un-sdg-goal-1: rgb(235, 28, 44);
        --un-sdg-goal-2: rgb(210, 160, 42);
        --un-sdg-goal-3: rgb(44, 155, 72);
        --un-sdg-goal-4: rgb(194, 31, 51);
        --un-sdg-goal-5: rgb(239, 64, 42);
        --un-sdg-goal-6: rgb(0, 173, 216);
        --un-sdg-goal-7: rgb(253, 183, 19);
        --un-sdg-goal-8: rgb(143, 23, 55);
        --un-sdg-goal-9: rgb(243, 109, 36);
        --un-sdg-goal-10: rgb(224, 21, 131);
        --un-sdg-goal-11: rgb(249, 157, 37);
        --un-sdg-goal-12: rgb(207, 141, 42);
        --un-sdg-goal-13: rgb(72, 119, 61);
        --un-sdg-goal-14: rgb(0, 125, 187);
        --un-sdg-goal-15: rgb(63, 175, 73);
        --un-sdg-goal-16: rgb(1, 85, 138);
        --un-sdg-goal-17: rgb(25, 54, 103);

        display: block;
        width: var(--width, 254px);
        height: var(--height, 254px);
        background-color: white;
      }
      .wrapper {
        width: var(--width, 254px);
        height: var(--height, 254px);
        padding: 0;
        margin: 0;
      }
      img {
        width: 100%;
        height: 100%;
      }
    `];
  }

  //when a property changes this method runs
  updated(changedProperties) {
    // if the property changed has an associated goal, the alt text/label changes
    if (changedProperties.has('goal')) {
      this.updateAlt();
    } 
  }
  // changes the label/alt text based on the goal/what text is set for each goal
  updateAlt() {
    const goal = this.getAttribute('goal');
    switch (goal) {
      case 'circle':
        this.label = "Sustainable developments logo";
        break;
      case 'all':
        this.label = "Goal 1: No poverty, Goal 2: Zero hunger, Goal 3: Good health and well-being, Goal 4: Quality education, Goal 5: Gender equality, Goal 6: Clean water and sanitation, Goal 7: Affordable and clean energy, Goal 8: Decent work and economic growth, Goal 9: Industry, innovation and infrastructure, Goal 10: Reduced inequalities, Goal 11: Sustainable cities and communities, Goal 12: Responsible consumption and production, Goal 13: Climate action, Goal 14: Life below water, Goal 15: Life on land, Goal 16: Peace, justice and strong institutions, Goal 17: Partnerships for the goals";
        break;
      case '1':
        this.label = "Goal 1: No poverty";
        break;
      case '2':
        this.label = "Goal 2: Zero hunger";
        break;
      case '3':
        this.label = "Goal 3: Good health and well-being";
        break;
      case '4':
        this.label = "Goal 4: Quality education";
        break;
      case '5':
        this.label = "Goal 5: Gender equality";
        break;
      case '6':
        this.label = "Goal 6: Clean water and sanitation";
        break;
      case '7':
        this.label = "Goal 7: Affordable and clean energy";
        break;
      case '8':
        this.label = "Goal 8: Decent work and economic growth";
        break;
      case '9':
        this.label = "Goal 9: Industry, innovation and infrastructure";
        break;
      case '10':
        this.label = "Goal 10: Reduced inequalities";
        break;
      case '11':
        this.label = "Goal 11: Sustainable cities and communities";
        break;
      case '12':
        this.label = "Goal 12: Responsible consumption and production";
        break;
      case '13':
        this.label = "Goal 13: Climate action";
        break;
      case '14':
        this.label = "Goal 14: Life below water";
        break;
      case '15':
        this.label = "Goal 15: Life on land";
        break;
      case '16':
        this.label = "Goal 16: Peace, justice and strong institutions";
        break;
      case '17':
        this.label = "Goal 17: Partnerships for the goals";
        break; 
    }
  }

  render() {
    // supposed to set the image to corresponding svg
    //cannot figure out problem, format seems correct as well as inspecting on vercel
    let imgSrc = new URL(`../lib/svgs/${this.goal}.svg`, import.meta.url).href;

    // if goal is equal to all, set image to "all.svg"
    if (this.goal === 'all') {
      imgSrc = new URL(`../lib/svgs/all.svg`, import.meta.url).href; 
    }
    // if goal is equal to circle, set image to "circle.svg"
    else if (this.goal === 'circle') {
      imgSrc = new URL(`../lib/svgs/circle.svg`, import.meta.url).href;
    }

    return html`
      <style>
        :host {
          --width: ${this.width};
          --height: ${this.height};
        }
       </style>
      <!-- changes background colors based on what goal is set -->
      <!-- all and circle has white background to match background of svg -->
      <div class="wrapper" 
        style="background-color: var(--un-sdg-goal-${this.goal});"
        >
        <! only runs if colorOnly is false -->
        ${this.colorOnly ? `` : 
          html `
            <img 
              src="${imgSrc}"
              alt="${this.label}"
              loading="${this.loading}"
              fetchpriority="${this.fetchPriority}"
            />
        `}
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`../lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(unSdg.tag, unSdg);