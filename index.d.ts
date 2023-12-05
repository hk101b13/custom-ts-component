declare module "custom-ts-button" {
  import React from "react";

  export interface CustomizedButtonProps {
    onClick?: () => void;
    buttonText?: string;
  }

  const CustomizedButton: React.FC<CustomizedButtonProps>;
  export { CustomizedButton };
}

declare module "custom-ts-cowsay" {
  import React from "react";

  export interface CustomizedCowsayProps {
    content?: string;
  }

  const CustomizedCowsay: React.FC<CustomizedCowsayProps>;
  export { CustomizedCowsay };
}
