import { AngularSerializer } from "@components/sandbox/AngularSerializer.ts";

const TemplateDrivenComponents = [
  "goab-input",
  "goab-textarea",
  "goab-dropdown",
  "goab-checkbox",
  "goab-radio-group",
  "goab-date-picker",
];

export class AngularTemplateDrivenSerializer extends AngularSerializer {
  modifyProps(props: string, propName: string, elementType: string): string {
    if (TemplateDrivenComponents.includes(elementType)) {
      const additionalProps = `[(ngModel)]="${propName}"`;
      props = props ? `${props} ${additionalProps}` : additionalProps;
      console.log("templateDriven", props);
      if (props.match(/value="[^"]*"/)) {
        props = props.replace(/value="[^"]*"/, "");
      }
      return props;
    }

    return super.modifyProps(props, propName, elementType);
  }
}