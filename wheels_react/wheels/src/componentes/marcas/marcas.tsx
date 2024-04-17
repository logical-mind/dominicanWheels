import { FC} from "react";

declare global {
    interface Window {
        myCallback: (responseData: any) => void;
    }
}

export const Marcas: FC = () => {

    return (
      <>
      </>
    );
};
